// ============================================================
// SINBORN ODYSSEY 2 — Village Chest Loot Fix (2026-06-04)
//
// Fixes the "empty / junk village chest" bug:
//   • Wares warehouse chests resolved to PAPER-ONLY because the Wares
//     content mod is not installed (CTOV references wares: items by tag,
//     which resolve to nothing).
//   • CTOV village house chests are intentionally SPARSE single-pool
//     tables (often just dead bush / sapling / one flavor item).
//
// This adds ONE useful-loot pool to each affected table.
// ADDITIVE ONLY — it does not strip existing loot and does not touch
// the scroll injection system (scroll_loot.js / lore_scrolls.js).
// Items are basic vanilla (ungated), so HistoryStages won't strip them.
// ============================================================

var VILLAGE_HOUSE_TABLES = [
  'ctov:chests/village/village_badlands_house',
  'ctov:chests/village/village_bakery',
  'ctov:chests/village/village_beach_house',
  'ctov:chests/village/village_dark_forest_house',
  'ctov:chests/village/village_farm',
  'ctov:chests/village/village_forager',
  'ctov:chests/village/village_jungle_house',
  'ctov:chests/village/village_library',
  'ctov:chests/village/village_mountain_house',
  'ctov:chests/village/village_mushroom_house',
  'ctov:chests/village/village_smith',
  'ctov:chests/village/village_swamp_house'
]

var WAREHOUSE_TABLES = [
  'wares:chests/village/badlands_warehouse',
  'wares:chests/village/beach_warehouse',
  'wares:chests/village/dark_forest_warehouse',
  'wares:chests/village/jungle_warehouse',
  'wares:chests/village/mountain_warehouse',
  'wares:chests/village/mushroom_warehouse',
  'wares:chests/village/swamp_warehouse'
]

// [item (with optional "Nx" count), weight]
var HOUSE_LOOT = [
  ['2x minecraft:bread', 12],
  ['minecraft:emerald', 6],
  ['3x minecraft:wheat', 10],
  ['2x minecraft:potato', 10],
  ['2x minecraft:carrot', 10],
  ['minecraft:iron_ingot', 6],
  ['4x minecraft:coal', 8],
  ['minecraft:book', 5],
  ['2x minecraft:apple', 8],
  ['3x minecraft:bone', 6],
  ['minecraft:name_tag', 2]
]

var WAREHOUSE_LOOT = [
  ['3x minecraft:emerald', 8],
  ['6x minecraft:paper', 10],
  ['2x minecraft:iron_ingot', 8],
  ['4x minecraft:bread', 10],
  ['minecraft:gold_ingot', 4],
  ['8x minecraft:coal', 8],
  ['3x minecraft:leather', 8],
  ['2x minecraft:book', 5],
  ['minecraft:experience_bottle', 3],
  ['16x minecraft:string', 6]
]

function addLootPool(event, tables, lootList, rolls) {
  for (var i = 0; i < tables.length; i++) {
    ;(function(table) {
      event.modify(table, function(loot) {
        loot.addPool(function(pool) {
          pool.rolls = rolls
          for (var j = 0; j < lootList.length; j++) {
            pool.addItem(Item.of(lootList[j][0]), lootList[j][1])
          }
        })
      })
    })(tables[i])
  }
}

ServerEvents.genericLootTables(function(event) {
  addLootPool(event, VILLAGE_HOUSE_TABLES, HOUSE_LOOT, 2)
  addLootPool(event, WAREHOUSE_TABLES, WAREHOUSE_LOOT, 3)
  console.info('[Sinborn] Village loot fix: enriched '
    + (VILLAGE_HOUSE_TABLES.length + WAREHOUSE_TABLES.length)
    + ' CTOV/Wares village chest tables (additive)')
})
