// ============================================================
// Sinborn Odyssey 2 — Backpack color NBT migration
//
// One-shot fix for backpacks given by the starter kit before
// 2026-05-24. Old script wrote main_color + accent_color NBT
// (which Sophi ignores). Correct keys are clothColor + trimColor.
//
// This script scans each player's inventory on login. For any
// Sophisticated Backpack with the wrong keys, it copies the
// values over to the correct keys, removes the old keys, and
// preserves all backpack contents.
//
// Marks completion via persistent NBT flag so it runs once.
// ============================================================

PlayerEvents.loggedIn(function (event) {
  var player = event.player
  var server = player.server

  if (player.persistentData.getBoolean('sinborn_backpack_color_fixed_v1')) return

  server.scheduleInTicks(20, function () {
    var fixed = 0
    for (var i = 0; i < 36; i++) {
      var stack = player.inventory.getItem(i)
      if (stack.isEmpty()) continue
      if (stack.id !== 'sophisticatedbackpacks:backpack') continue

      var nbt = stack.getNbt()
      if (!nbt) continue

      var oldMain = nbt.contains('main_color') ? nbt.getInt('main_color') : null
      var oldAccent = nbt.contains('accent_color') ? nbt.getInt('accent_color') : null
      if (oldMain === null && oldAccent === null) continue

      if (oldMain !== null) {
        nbt.putInt('clothColor', oldMain)
        nbt.remove('main_color')
      }
      if (oldAccent !== null) {
        nbt.putInt('trimColor', oldAccent)
        nbt.remove('accent_color')
      }
      // setNbt persists the change back to the stack
      stack.setNbt(nbt)
      player.inventory.setItem(i, stack)
      fixed++
    }
    if (fixed > 0) {
      console.info('[Sinborn] Backpack color NBT migrated for ' + player.username + ' (' + fixed + ' backpack(s))')
    }
    player.persistentData.putBoolean('sinborn_backpack_color_fixed_v1', true)
  })
})
