// ============================================================
// SINBORN ODYSSEY 2 — Wither Sickness Death Penalty
//
// If a player dies while infected with Wither Sickness from
// Cracker's Wither Storm Mod, they permanently lose 1 heart
// (2 HP) through the Lifesteal mod's own heart-tracking system
// (LSData).
//
// Mirrors sculk_death.js and radiation_death.js — all three
// contagions (Deep Dark sculk, Nuclear Zone radiation, and
// the Wither Storm's withering corruption) carry the same
// permanent cost.
//
// Effect ID (confirmed from witherstormmod-1.20.1-4.2.1 JAR):
//   witherstormmod:wither_sickness  — "An evolved variant of
//   wither, lasting seemingly forever while slowly draining
//   its victim's health"
//
// Persistent data key:
//   sinborn_wither_sick — true if infected at last tick check
// ============================================================

var WITHER_SICKNESS_EFFECT = 'witherstormmod:wither_sickness'

// ─── TRACK INFECTION STATE ────────────────────────────────────
// Poll every second so the flag is accurate at time of death.
// Effects clear before respawn fires, so store state while alive.

PlayerEvents.tick(function(event) {
  var player = event.player
  if (player.tickCount % 20 !== 0) return

  player.persistentData.putBoolean(
    'sinborn_wither_sick',
    player.hasEffect(WITHER_SICKNESS_EFFECT)
  )
})

// ─── DEATH PENALTY ────────────────────────────────────────────

PlayerEvents.respawned(function(event) {
  var player = event.player

  // endConquered = player exited the End after beating the dragon, not a death
  if (event.endConquered) return

  if (!player.persistentData.getBoolean('sinborn_wither_sick')) return
  player.persistentData.putBoolean('sinborn_wither_sick', false)

  // Only trigger for survival-mode players
  if (player.creative || player.spectator) return

  // Use Lifesteal's data system to remove 1 heart (2 hitpoints)
  try {
    var LSData = Java.loadClass('mc.mian.lifesteal.data.LSData')
    var LSConstants = Java.loadClass('mc.mian.lifesteal.util.LSConstants')

    var optData = LSData.get(player)
    if (!optData.isPresent()) {
      console.warn('[Sinborn] Could not get LSData for ' + player.username)
      return
    }

    var data = optData.get()
    var healthKey = LSConstants.HEALTH_DIFFERENCE
    var currentDiff = Number(data.getValue(healthKey))

    // Floor: don't push below -14 HP diff (keeps at least 3 hearts = 6 HP)
    if (currentDiff <= -14) return

    // Subtract 2 hitpoints (1 heart) from the Lifesteal health difference
    data.setValue(healthKey, java('java.lang.Integer').valueOf(currentDiff - 2))
    data.refreshHealth(true)

    // Message after respawn screen clears
    player.server.scheduleInTicks(10, function() {
      player.tell(Component.literal('§5The sickness festered. A heart has withered away.'))
    })

    // Server broadcast
    event.server.tell('§8§l[WITHER SICKNESS] §7' + player.username + ' §8died infected. §5One heart lost to the corruption.')

  } catch(e) {
    console.error('[Sinborn] Wither Sickness death Lifesteal integration failed: ' + e)
    // Fallback: use raw attribute command if Lifesteal API unavailable
    var currentMax = player.maxHealth
    if (currentMax <= 6) return
    player.server.runCommandSilent(
      'attribute ' + player.username + ' minecraft:generic.max_health base set ' + (currentMax - 2)
    )
    player.server.scheduleInTicks(10, function() {
      player.tell(Component.literal('§5The sickness festered. A heart has withered away.'))
    })
  }
})
