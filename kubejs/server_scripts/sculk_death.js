// ============================================================
// SINBORN ODYSSEY 2 — Sculk Sickness Death Penalty
//
// If a player dies while infected with Sculk Sickness,
// they permanently lose 1 heart (2 HP) through the Lifesteal
// mod's own heart-tracking system (LSData).
//
// This means the lost heart shows up in Lifesteal's data,
// can potentially be recovered with Heart Crystals, and
// won't desync with Lifesteal's max_health modifier.
//
// Effect IDs (confirmed from sculksickness-0.2.0.jar):
//   sculksickness:sculk_sickness   — the infection
//   sculksickness:sculk_immunity   — post-cure immunity
//
// Persistent data key:
//   sinborn_sculk_infected — true if infected at last tick check
// ============================================================

var SCULK_EFFECT = 'sculksickness:sculk_sickness'

// ─── TRACK INFECTION STATE ────────────────────────────────────
// Poll every second so the flag is accurate at time of death.
// Effects are cleared before PlayerEvents.respawned fires,
// so we must store state while the player is alive.

PlayerEvents.tick(function(event) {
  var player = event.player
  if (player.tickCount % 20 !== 0) return

  player.persistentData.putBoolean(
    'sinborn_sculk_infected',
    player.hasEffect(SCULK_EFFECT)
  )
})

// ─── DEATH PENALTY ────────────────────────────────────────────

PlayerEvents.respawned(function(event) {
  var player = event.player

  // endConquered = player exited the End after beating the dragon, not a death
  if (event.endConquered) return

  if (!player.persistentData.getBoolean('sinborn_sculk_infected')) return
  player.persistentData.putBoolean('sinborn_sculk_infected', false)

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
      player.tell(Component.literal('\u00A74The sculk took a heart. It does not give them back.'))
    })

    // Server broadcast
    event.server.tell('\u00A78\u00A7l[SCULK SICKNESS] \u00A77' + player.username + ' \u00A78died infected. \u00A74One heart lost to the sculk.')

  } catch(e) {
    console.error('[Sinborn] Sculk death Lifesteal integration failed: ' + e)
    // Fallback: use raw attribute command if Lifesteal API unavailable
    var currentMax = player.maxHealth
    if (currentMax <= 6) return
    player.server.runCommandSilent(
      'attribute ' + player.username + ' minecraft:generic.max_health base set ' + (currentMax - 2)
    )
    player.server.scheduleInTicks(10, function() {
      player.tell(Component.literal('\u00A74The sculk took a heart. It does not give them back.'))
    })
  }
})
