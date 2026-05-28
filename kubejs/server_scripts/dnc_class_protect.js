// ============================================================
// SINBORN ODYSSEY 2 — D&C Class-Pick Curios Protection
//
// Bug: Dungeons & Combat's MCreator-generated ChoosedProcedure
// (Forgotten Knight / Titan / Oni Slayer / Rogue / Vagabond /
// Exiled / Bounty Hunter) directly overwrites the player's armor
// slots + main/off hand via Inventory.armor.set(...) and
// LivingEntity.setItemInHand(...) in a single tick. The cascade
// of LivingEquipmentChangeEvent firings desyncs Curios — the
// back-slot Modular Backpack (and other Curios items) get wiped.
//
// Fix: snapshot Curios on combat_style_manual right-click. After
// the class advancement is granted (procedure has finished), wait
// 5 ticks and restore Curios from the snapshot. Armor + hands
// still receive the class kit (Broken Sword / Broken Shield /
// class armor set) — only Curios are preserved.
// ============================================================

var CuriosApi = null
try {
  CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')
} catch (e) {
  console.warn('[dnc_class_protect] Curios API not available — script disabled')
}

var CLASS_ADVANCEMENTS = {
  'dungeons_and_combat:the_forgotten_knight': true,
  'dungeons_and_combat:the_titan': true,
  'dungeons_and_combat:the_oni_slayer': true,
  'dungeons_and_combat:the_rogue': true,
  'dungeons_and_combat:the_vagabond': true,
  'dungeons_and_combat:the_exiled': true,
  'dungeons_and_combat:the_bounty_hunter': true
}

var SNAPSHOT_KEY = 'sinborn_dnc_curios_backup'
var TAG_COMPOUND = 10

function getCuriosHandler(player) {
  if (CuriosApi === null) return null
  var lazyOpt = CuriosApi.getCuriosInventory(player)
  if (!lazyOpt.isPresent()) return null
  return lazyOpt.orElse(null)
}

ItemEvents.rightClicked('dungeons_and_combat:combat_style_manual', function(event) {
  var player = event.player
  if (!player || player.level.isClientSide()) return

  var handler = getCuriosHandler(player)
  if (handler === null) return

  // saveInventory(false) — serialize without clearing slots
  var snapshot = handler.saveInventory(false)
  if (snapshot === null) return

  // Stash the ListTag directly into player persistentData
  player.persistentData.put(SNAPSHOT_KEY, snapshot)
})

PlayerEvents.advancement(function(event) {
  var advId = String(event.advancement.id())
  if (!CLASS_ADVANCEMENTS[advId]) return

  var player = event.player
  if (!player) return

  player.server.scheduleInTicks(5, function() {
    if (!player.persistentData.contains(SNAPSHOT_KEY)) return

    var snapshot = player.persistentData.getList(SNAPSHOT_KEY, TAG_COMPOUND)
    if (snapshot && snapshot.size() > 0) {
      var handler = getCuriosHandler(player)
      if (handler !== null) {
        handler.loadInventory(snapshot)
      }
    }

    player.persistentData.remove(SNAPSHOT_KEY)
  })
})
