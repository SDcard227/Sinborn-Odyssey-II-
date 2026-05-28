// ============================================================
// SINBORN ODYSSEY 2 — Destiny Scatter
// On a player's first join, "shoots" them to a random SAFE-LAND
// location within 6000 blocks of world spawn. This is the
// "Awaken" one-button launch — replaces MCA's per-structure
// destiny teleport, which is structure-locked (hardcoded 2048-block
// search) and unreliable in a pack with sparse worldgen.
//
// MCA's destiny screen still handles character creation; its single
// "Awaken" button resolves to 'somewhere' (no MCA teleport).
// This script does the real launch on first login.
// ============================================================

var SCATTER_RADIUS = 6000   // max blocks from world spawn (0,0)
var MAX_ATTEMPTS   = 8      // re-roll if the landing is water/lava

PlayerEvents.loggedIn(function(event) {
  var player = event.player
  if (player.persistentData.getBoolean('sinborn_scattered')) return

  // ROLLOUT GUARD: established players must NOT be scattered.
  // starter_items.js stamps 'sinborn_starter_given' on every player's
  // first join — so anyone who already has it is a returning player
  // who pre-dates this script. Mark them done and never fling them.
  if (player.persistentData.getBoolean('sinborn_starter_given')) {
    player.persistentData.putBoolean('sinborn_scattered', true)
    return
  }

  // flag immediately so it can never double-fire
  player.persistentData.putBoolean('sinborn_scattered', true)
  // let the player + spawn chunks settle, then launch
  player.server.scheduleInTicks(60, function() {
    scatter(player, 0)
  })
})

function scatter(player, attempt) {
  var server = player.server
  if (attempt >= MAX_ATTEMPTS) {
    console.warn('[Sinborn] Destiny scatter: no safe land after ' +
      MAX_ATTEMPTS + ' tries for ' + player.username)
    return
  }
  // spreadplayers handles chunk generation + surface placement
  server.runCommandSilent('spreadplayers 0 0 1 ' + SCATTER_RADIUS +
    ' false ' + player.username)
  // wait for the teleport + chunk load, then inspect the landing
  server.scheduleInTicks(40, function() {
    var safe = false
    try {
      var feet  = player.block
      var below = feet.down
      var liquid = ['minecraft:water', 'minecraft:lava']
      safe = liquid.indexOf(feet.id) === -1 && liquid.indexOf(below.id) === -1
    } catch (e) {
      safe = false
    }
    if (safe) {
      // respawn point = the landing spot (no coords = current position)
      server.runCommandSilent('spawnpoint ' + player.username)
      player.tell('You awaken stranded, far from anything you know.')
      console.info('[Sinborn] Scattered ' + player.username + ' to ' +
        Math.floor(player.x) + ', ' + Math.floor(player.z))
    } else {
      scatter(player, attempt + 1)
    }
  })
}
