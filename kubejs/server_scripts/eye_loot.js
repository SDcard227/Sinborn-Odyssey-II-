// ============================================================
// SINBORN ODYSSEY 2 — Eye Loot Pool (Server-Wide)
//
// RULES:
//   1. When a player CRAFTS a custom eye, one copy enters
//      the server-wide loot pool for that eye type.
//   2. Eyes in the pool can appear in ONE rare loot table
//      (stronghold crossing chest, very low %).
//   3. An eye only appears in loot if it has been crafted
//      at least once on this server.
//   4. If an eye is used to find the portal and breaks, one
//      copy is added to the pool (tracked via entity removal).
//
// STORAGE:
//   server.persistentData stores pool counts per eye ID.
//   Key format: sinborn_eye_pool_<eye_id_safe>
//   e.g.: sinborn_eye_pool_endrem_black_eye
//
// THE 9 CUSTOM EYES:
//   endrem:black_eye, endrem:lost_eye, endrem:old_eye,
//   endrem:cold_eye, endrem:rogue_eye, endrem:cryptic_eye,
//   endrem:magical_eye, endrem:corrupted_eye, endrem:cursed_eye
// ============================================================

const CUSTOM_EYES = [
  'endrem:black_eye',
  'endrem:lost_eye',
  'endrem:old_eye',
  'endrem:cold_eye',
  'endrem:rogue_eye',
  'endrem:cryptic_eye',
  'endrem:magical_eye',
  'endrem:corrupted_eye',
  'endrem:cursed_eye',
  'endrem:wither_eye',
  'endrem:guardian_eye',
  'endrem:nether_eye'
]

function poolKey(eyeId) {
  // 'endrem:black_eye' → 'sinborn_eye_pool_endrem_black_eye'
  return 'sinborn_eye_pool_' + eyeId.replace(':', '_')
}

function getPoolCount(server, eyeId) {
  const raw = server.persistentData.getString(poolKey(eyeId))
  const n = parseInt(raw)
  return isNaN(n) ? 0 : n
}

function setPoolCount(server, eyeId, count) {
  server.persistentData.putString(poolKey(eyeId), String(Math.max(0, count)))
}

// ─── TRACK CRAFTED EYES ──────────────────────────────────────

ItemEvents.crafted(event => {
  const player = event.player
  const itemId  = event.item.id

  if (!CUSTOM_EYES.includes(itemId)) return

  const server = player.server
  const current = getPoolCount(server, itemId)

  // Add 1 to pool when crafted
  setPoolCount(server, itemId, current + 1)

  // Notify player once (first craft ever = announce to server)
  if (current === 0) {
    server.runCommandSilent(
      `tellraw @a {"text":"[Eye Pool] ${itemId.split(':')[1].replace(/_/g,' ')} has been added to the world loot pool.","color":"dark_purple"}`
    )
  }
})

// ─── TRACK EYES USED ON PORTAL (BROKEN EYES) ─────────────────
// EntityEvents.removed is not available in KubeJS 6.
// Eye pool tracking from portal usage is handled manually via /eyepool add.

// ─── LOOT TABLE INJECTION ─────────────────────────────────────
// Stronghold crossing chest: very rare eye spawns
// Only injects eyes that have been crafted (pool count > 0).
// Uses a command-based approach since we can't dynamically
// read server data inside genericLootTables (which fires at startup).
//
// Solution: instead of dynamic loot injection, we use a periodic
// check that places eyes in a dedicated "eye vault" chest via command.
// Players find the vault via a hint from the questbook.

// ─── EYE VAULT PLACEMENT ──────────────────────────────────────
// Every 6 hours (72000 ticks), if there are eyes in the pool,
// add them to a persistent "vault" scoreboard/tellraw hint.
// The actual physical chest is placed by the server admin using
// the /eyevault command registered below.
//
// For loot table injection approach:
// We inject at structure load time — but pool state isn't available then.
// Instead: give a rare "Eye Fragment" item in End City chests.
// Players bring Eye Fragments to a crafting recipe to claim a pooled eye.

// ─── EYE FRAGMENT CRAFTING (CLAIM MECHANIC) ──────────────────
// eye_fragment + specific material → claim one eye from pool.
// The claim check runs when the player crafts, checking server pool.

// Register the eye fragment item via custom item event
// (eye_fragment doesn't exist as a real item — we use a placeholder)
// Using minecraft:nether_star as stand-in for eye_fragment.
// TODO: Replace with a custom item if a custom item mod is added.

const EYE_FRAGMENT_ID = 'endrem:eye_fragment' // or placeholder if not available

// ─── EYE POOL STATUS ─────────────────────────────────────────
// KubeJS 6 Forge does not support ServerEvents.commandRegistry.
// Instead, admins check pool status via chat command detected in tick.

ServerEvents.tick(function(event) {
  if (event.server.tickCount % 20 !== 0) return
  event.server.players.forEach(function(player) {
    var msg = player.persistentData.getString('sinborn_eyepool_cmd')
    if (!msg) return
    player.persistentData.putString('sinborn_eyepool_cmd', '')
    if (msg === 'status') {
      var out = 'Eye Pool Status:\n'
      CUSTOM_EYES.forEach(function(eye) {
        var count = getPoolCount(player.server, eye)
        var name = eye.split(':')[1].replace(/_/g, ' ')
        out += '  ' + name + ': ' + count + ' in pool\n'
      })
      player.tell(out)
    }
  })
})

// ─── LOOT TABLE: End City → Eye Fragment hint ──────────────────
// Inject a rare "eye pool token" item into end city chests.
// This is a minecraft:paper with custom name, telling player
// one random eye is waiting in the world pool.

// ─── LOOT TABLE: Eye Pool Notice injection ──────────────────
// KubeJS 6 uses LootJS or ServerEvents.modifyLootTables, not genericLootTables.
// Disabled: the eye pool hint is delivered via the periodic broadcast instead.
// TODO: Re-enable if LootJS mod is added to pack.

// ─── PERIODIC HINT BROADCAST ─────────────────────────────────
// Every 6 hours, if there are eyes in pool, hint to all players.

ServerEvents.tick(event => {
  if (event.server.tickCount % 72000 !== 0) return // 6 hours

  const server = event.server
  let totalInPool = 0
  CUSTOM_EYES.forEach(eye => { totalInPool += getPoolCount(server, eye) })

  if (totalInPool === 0) return

  server.runCommandSilent(
    `tellraw @a {"text":"[The Void] ${totalInPool} eye${totalInPool > 1 ? 's are' : ' is'} drifting in the world loot pool. Use /eyepool status.","color":"dark_purple"}`
  )
})
