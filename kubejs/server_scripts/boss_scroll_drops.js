// ============================================================
// SINBORN ODYSSEY 2 — Boss Scroll-Drops (god-dropped disciplines)
//
// Some disciplines are EARNED from a kill, not found in a chest. A boss yields
// the research scroll for the knowledge its death unlocks. Same injection as
// scroll_loot.js (ServerEvents.genericLootTables), but targets ENTITY loot tables.
//
// Format: [ entity_loot_table, scroll_stage_id, percent_chance ]
//   percent 100 = guaranteed (progression-critical keys should be guaranteed).
//
// Framework for the design's god-drops (9 magic schools, Path to Divinity, etc.).
// ============================================================

var BOSS_SCROLL_DROPS = [
  // The Wither Storm Symbiont yields the void-passage: slay it, earn the key to the End.
  // nature_void is the stage with the minecraft:the_end dimension lock — researching it grants End access.
  ['witherstormmod:entities/withered_symbiont', 'void_table', 100],
  // The Nightwarden drops the Path to Divinity ONLY on death — the final transgression, earned at the Excrucis.
  ['traveloptics:entities/the_nightwarden', 'five_vessels_apocrypha', 100],
]

ServerEvents.entityLootTables(function(event) {
  for (var i = 0; i < BOSS_SCROLL_DROPS.length; i++) {
    var table   = BOSS_SCROLL_DROPS[i][0]
    var stageId = BOSS_SCROLL_DROPS[i][1]
    var pct     = BOSS_SCROLL_DROPS[i][2]

    var scrollItem = Item.of('historystages:research_scroll', '{StageResearch:"' + stageId + '"}')

    ;(function(t, item, weight) {
      event.modify(t, function(loot) {
        loot.addPool(function(pool) {
          pool.rolls = 1
          pool.addItem(item, weight)
          if (weight < 100) pool.addEmpty(100 - weight)
        })
      })
    })(table, scrollItem, pct)
  }
  console.info('[Sinborn] boss scroll-drops wired: ' + BOSS_SCROLL_DROPS.length)
})
