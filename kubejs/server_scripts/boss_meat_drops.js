// ============================================================
// SINBORN ODYSSEY 2 — Boss Meat Drops (eat-the-world, Dungeon Meshi)
//
// The delight mods (compatdelight + ends_delight) already make ~276 creatures
// edible (dragon, frostmaw, warden, naga, grottol, wither, ...). lendersdelight
// DEFINES Cataclysm boss-meats but never drops them. This wires those drops.
//
// "Eat everything possible." Beasts AND boss-gods — the mods made the meat, the
// player decides their own table. Senshi: every part of the monster must be used.
//
// Format: [ entity_loot_table, meat_item, percent ].  Try-guarded: a bad id no-ops.
// ============================================================

var BOSS_MEAT_DROPS = [
  // L_Ender's Cataclysm bosses (ids verified from L_Enders_Cataclysm-3.16.jar)
  ['cataclysm:entities/the_leviathan',          'lendersdelight:leviathan',                 100],
  ['cataclysm:entities/the_baby_leviathan',     'lendersdelight:leviathan',                  40],
  ['cataclysm:entities/netherite_monstrosity',  'lendersdelight:netherite_monstrosity_meat',100],
  ['cataclysm:entities/ignis',                  'lendersdelight:ignis',                     100],
  ['cataclysm:entities/maledictus',             'lendersdelight:maledictus_heart',          100],
  ['cataclysm:entities/ender_guardian',         'lendersdelight:ender_golem_meat',          100],
  ['cataclysm:entities/coralssus',              'lendersdelight:coral_golem_meat',          100],
  ['cataclysm:entities/coral_golem',            'lendersdelight:coral_golem_meat',           50],
  ['cataclysm:entities/koboleton',              'lendersdelight:koboleton_meat',             60],
  ['cataclysm:entities/deepling',               'lendersdelight:deepling_meat',              50],
  ['cataclysm:entities/deepling_angler',        'lendersdelight:deepling_meat',              50],
  ['cataclysm:entities/deepling_priest',        'lendersdelight:deepling_meat',              50],
  ['cataclysm:entities/deepling_brute',         'lendersdelight:raw_brute_deepling_meat',    60],
  ['cataclysm:entities/the_watcher',            'lendersdelight:watcher_heart',             100],
]

ServerEvents.entityLootTables(function(event) {
  var wired = 0
  for (var i = 0; i < BOSS_MEAT_DROPS.length; i++) {
    try {
      var table  = BOSS_MEAT_DROPS[i][0]
      var itemId = BOSS_MEAT_DROPS[i][1]
      var pct    = BOSS_MEAT_DROPS[i][2]
      var meat   = Item.of(itemId)
      if (meat.isEmpty()) continue   // item id invalid -> skip
      ;(function(t, item, weight) {
        event.modify(t, function(loot) {
          loot.addPool(function(pool) {
            pool.rolls = 1
            pool.addItem(item, weight)
            if (weight < 100) pool.addEmpty(100 - weight)
          })
        })
      })(table, meat, pct)
      wired++
    } catch (e) { /* bad table/item id -> no-op, go all the way safely */ }
  }
  console.info('[Sinborn] boss meat-drops wired (eat-the-world): ' + wired + '/' + BOSS_MEAT_DROPS.length)
})
