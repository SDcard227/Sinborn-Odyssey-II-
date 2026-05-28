// eye_recovery.js
// Detects when End Remastered quest eyes are destroyed and re-injects them
// into the overworld after a delay, broadcasting dramatic messages on both events.
//
// Eyes are only tracked after they've been legitimately picked up at least once
// (i.e., a player crafted one and received it). This prevents false triggers
// from creative-mode or pre-game item entities.

const QUEST_EYES = {
    'endrem:black_eye':     { name: 'the Black Eye',     flavor: 'scattered like ash on the wind' },
    'endrem:old_eye':       { name: 'the Old Eye',       flavor: 'lost to time, again' },
    'endrem:cold_eye':      { name: 'the Cold Eye',      flavor: 'carried by frost to somewhere else' },
    'endrem:lost_eye':      { name: 'the Lost Eye',      flavor: 'as if it was always meant to wander' },
    'endrem:rogue_eye':     { name: 'the Rogue Eye',     flavor: 'gone before anyone noticed' },
    'endrem:cryptic_eye':   { name: 'the Cryptic Eye',   flavor: 'dissolved into the noise' },
    'endrem:magical_eye':   { name: 'the Magical Eye',   flavor: 'unraveled back into the arcane' },
    'endrem:corrupted_eye': { name: 'the Corrupted Eye', flavor: 'absorbed into something worse' },
    'endrem:cursed_eye':    { name: 'the Cursed Eye',    flavor: 'as if it wanted to be free' },
    // Note: wither eye = minecraft:nether_star — not tracked (too many legitimate non-eye uses)
}

const EYE_IDS = new Set(Object.keys(QUEST_EYES))

// Real-world time before re-entry (not game ticks — survives server restarts)
const RESPAWN_DELAY_MS = 20 * 60 * 1000 // 20 minutes

// ─── REGISTER ON FIRST PICKUP ─────────────────────────────────────────────────
// The first time a player picks up any endrem eye, mark that eye type as
// "in play" on this server. Destruction is only tracked from that point on.

ItemEvents.pickedUp(event => {
    var item = event.item
    if (!EYE_IDS.has(item.id)) return

    var server = event.server
    var rawReg = server.persistentData.getString('sinborn_eye_registry')
    var registry = rawReg ? JSON.parse(rawReg) : []

    if (!registry.includes(item.id)) {
        registry.push(item.id)
        server.persistentData.putString('sinborn_eye_registry', JSON.stringify(registry))
    }
})

// ─── DETECT DESTRUCTION ───────────────────────────────────────────────────────
// Fires when an item entity dies — covers lava, fire, void, and explosions.
// Does NOT fire on normal pickup (entity removed, not killed).

EntityEvents.death('minecraft:item', event => {
    const item = event.entity.item
    if (!EYE_IDS.has(item.id)) return

    const server = event.server

    // Only track eyes that have been legitimately crafted this run
    const rawReg = server.persistentData.getString('sinborn_eye_registry')
    if (!rawReg) return
    const registry = JSON.parse(rawReg)
    if (!registry.includes(item.id)) return

    const eye = QUEST_EYES[item.id]
    const title = capitalize(eye.name)

    server.tell('§4§l━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    server.tell(`§c§l  ${title.toUpperCase()} IS GONE`)
    server.tell(`§7  ${capitalize(eye.flavor)}.`)
    server.tell('§7  It will find the world again.')
    server.tell('§4§l━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

    // Queue for recovery
    const rawQueue = server.persistentData.getString('sinborn_eye_queue')
    const queue = rawQueue ? JSON.parse(rawQueue) : []
    queue.push({ id: item.id, respawnAt: Date.now() + RESPAWN_DELAY_MS })
    server.persistentData.putString('sinborn_eye_queue', JSON.stringify(queue))
})

// ─── RECOVERY TICK ────────────────────────────────────────────────────────────
// Checks every 60 seconds for eyes ready to re-enter the world.
// Spawns at y=300 so the item falls dramatically from the sky to the surface.

ServerEvents.tick(event => {
    const server = event.server
    if (server.tickCount % 1200 !== 0) return

    const rawQueue = server.persistentData.getString('sinborn_eye_queue')
    if (!rawQueue) return

    const queue = JSON.parse(rawQueue)
    if (queue.length === 0) return

    const level = server.overworld
    const players = level.players
    const now = Date.now()
    const remaining = []

    for (const entry of queue) {
        if (now < entry.respawnAt) {
            remaining.push(entry)
            continue
        }

        if (players.length === 0) {
            // No players online — defer 10 minutes
            entry.respawnAt = now + (10 * 60 * 1000)
            remaining.push(entry)
            continue
        }

        // Pick a random online player as the spawn anchor
        const anchor = players[Math.floor(Math.random() * players.length)]
        const angle = Math.random() * Math.PI * 2
        const dist = 200 + Math.floor(Math.random() * 300)

        const spawnX = Math.floor(anchor.x + Math.cos(angle) * dist)
        const spawnZ = Math.floor(anchor.z + Math.sin(angle) * dist)
        const spawnY = 300 // Above all terrain — falls to surface

        // Age:-32768 prevents natural 5-minute despawn
        server.runCommandSilent(
            `summon minecraft:item ${spawnX} ${spawnY} ${spawnZ} {Item:{id:"${entry.id}",Count:1b},PickupDelay:0,Age:-32768}`
        )

        const eye = QUEST_EYES[entry.id]
        const title = capitalize(eye.name)
        const dir = cardinalDir(anchor.x, anchor.z, spawnX, spawnZ)

        server.tell('§5§l━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        server.tell(`§d§l  ${title.toUpperCase()} HAS RETURNED`)
        server.tell(`§7  Something pulls ${dir} of you.`)
        server.tell('§5§l━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    }

    server.persistentData.putString('sinborn_eye_queue', JSON.stringify(remaining))
})

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function cardinalDir(fromX, fromZ, toX, toZ) {
    const a = Math.atan2(toZ - fromZ, toX - fromX) * 180 / Math.PI
    if (a < -157.5 || a >= 157.5) return 'west'
    if (a < -112.5) return 'northwest'
    if (a < -67.5)  return 'north'
    if (a < -22.5)  return 'northeast'
    if (a < 22.5)   return 'east'
    if (a < 67.5)   return 'southeast'
    if (a < 112.5)  return 'south'
    return 'southwest'
}
