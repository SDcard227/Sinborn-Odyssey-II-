// ============================================================
// SINBORN ODYSSEY 2 — Scroll Chest Loot Injection (V6 BOOSTED 2026-05-26)
//
// STRICT theme matching + BOOSTED rates. A scroll only drops in a chest if
// the scroll's theme tags appear in the chest path. No fallback.
//
// Tier rates (boosted for discoverability):
//   T1=35% T2=25% T3=17% T4=11% T5=7% T6=4% (age = 2%)
//
// Total chest types: 449
// Chests covered: 428
// Total entries: 1842
// ============================================================

var SCROLL_SOURCES = [

  // ── abridged:chests/badlands_mining ──
  ['metalworking', 'abridged:chests/badlands_mining', 4],  // T6

  // ── abridged:chests/pillager_bridge ──
  ['arsenal_iron_blades', 'abridged:chests/pillager_bridge', 4],  // T6
  ['arsenal_iron_polearms', 'abridged:chests/pillager_bridge', 4],  // T6
  ['arsenal_iron_ranged', 'abridged:chests/pillager_bridge', 7],  // T5

  // ── alexscaves:chests/abyssal_ruins ──
  ['abyssal_chasm', 'alexscaves:chests/abyssal_ruins', 11],  // T4
  ['cuisine_subterranean', 'alexscaves:chests/abyssal_ruins', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/abyssal_ruins', 11],  // T4
  ['archaeology_mastery', 'alexscaves:chests/abyssal_ruins', 35],  // T1
  ['bestiary_alex_mobs', 'alexscaves:chests/abyssal_ruins', 4],  // T6

  // ── alexscaves:chests/caveman_house ──
  ['cuisine_subterranean', 'alexscaves:chests/caveman_house', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/caveman_house', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/caveman_house', 11],  // T4
  ['agronomic_path', 'alexscaves:chests/caveman_house', 35],  // T1
  ['bakery', 'alexscaves:chests/caveman_house', 35],  // T1

  // ── alexscaves:chests/forlorn_ruins ──
  ['cuisine_subterranean', 'alexscaves:chests/forlorn_ruins', 4],  // T6
  ['forlorn_hollows', 'alexscaves:chests/forlorn_ruins', 11],  // T4
  ['sugarstone_caverns', 'alexscaves:chests/forlorn_ruins', 11],  // T4
  ['archaeology_mastery', 'alexscaves:chests/forlorn_ruins', 35],  // T1
  ['bestiary_alex_mobs', 'alexscaves:chests/forlorn_ruins', 4],  // T6

  // ── alexscaves:chests/gingerbread_town ──
  ['cuisine_subterranean', 'alexscaves:chests/gingerbread_town', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/gingerbread_town', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/gingerbread_town', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/gingerbread_town', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/gingerbread_town', 35],  // T1

  // ── alexscaves:chests/licowitch_tower ──
  ['cuisine_subterranean', 'alexscaves:chests/licowitch_tower', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/licowitch_tower', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/licowitch_tower', 11],  // T4
  ['arcane_codex', 'alexscaves:chests/licowitch_tower', 4],  // T6
  ['lightning_school', 'alexscaves:chests/licowitch_tower', 7],  // T5

  // ── alexscaves:chests/licowitch_tower_secret ──
  ['cuisine_subterranean', 'alexscaves:chests/licowitch_tower_secret', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/licowitch_tower_secret', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/licowitch_tower_secret', 11],  // T4
  ['arcane_codex', 'alexscaves:chests/licowitch_tower_secret', 4],  // T6
  ['lightning_school', 'alexscaves:chests/licowitch_tower_secret', 7],  // T5

  // ── alexscaves:chests/magnetic_ruins ──
  ['cuisine_subterranean', 'alexscaves:chests/magnetic_ruins', 4],  // T6
  ['magnetic_deep', 'alexscaves:chests/magnetic_ruins', 11],  // T4
  ['sugarstone_caverns', 'alexscaves:chests/magnetic_ruins', 11],  // T4
  ['archaeology_mastery', 'alexscaves:chests/magnetic_ruins', 35],  // T1
  ['bestiary_alex_mobs', 'alexscaves:chests/magnetic_ruins', 4],  // T6

  // ── alexscaves:chests/toxic_ruins ──
  ['cuisine_subterranean', 'alexscaves:chests/toxic_ruins', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/toxic_ruins', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/toxic_ruins', 11],  // T4
  ['archaeology_mastery', 'alexscaves:chests/toxic_ruins', 35],  // T1
  ['bestiary_alex_mobs', 'alexscaves:chests/toxic_ruins', 4],  // T6

  // ── alexscaves:chests/underground_cabin ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin', 4],  // T6
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin', 11],  // T4
  ['sugarstone_caverns', 'alexscaves:chests/underground_cabin', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin', 35],  // T1

  // ── alexscaves:chests/underground_cabin_abyssal_chasm ──
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_abyssal_chasm', 11],  // T4
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_abyssal_chasm', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/underground_cabin_abyssal_chasm', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_abyssal_chasm', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin_abyssal_chasm', 35],  // T1

  // ── alexscaves:chests/underground_cabin_candy_cavity ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_candy_cavity', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/underground_cabin_candy_cavity', 11],  // T4
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_candy_cavity', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_candy_cavity', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin_candy_cavity', 35],  // T1

  // ── alexscaves:chests/underground_cabin_forlorn_hollows ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_forlorn_hollows', 4],  // T6
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_forlorn_hollows', 11],  // T4
  ['forlorn_hollows', 'alexscaves:chests/underground_cabin_forlorn_hollows', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_forlorn_hollows', 4],  // T6
  ['carnal_anatomy', 'alexscaves:chests/underground_cabin_forlorn_hollows', 17],  // T3

  // ── alexscaves:chests/underground_cabin_magnetic_caves ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_magnetic_caves', 4],  // T6
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_magnetic_caves', 11],  // T4
  ['magnetic_deep', 'alexscaves:chests/underground_cabin_magnetic_caves', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_magnetic_caves', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin_magnetic_caves', 35],  // T1

  // ── alexscaves:chests/underground_cabin_primordial_caves ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_primordial_caves', 4],  // T6
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_primordial_caves', 11],  // T4
  ['primordial_strata', 'alexscaves:chests/underground_cabin_primordial_caves', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_primordial_caves', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin_primordial_caves', 35],  // T1

  // ── alexscaves:chests/underground_cabin_toxic_caves ──
  ['cuisine_subterranean', 'alexscaves:chests/underground_cabin_toxic_caves', 4],  // T6
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_toxic_caves', 11],  // T4
  ['sugarstone_caverns', 'alexscaves:chests/underground_cabin_toxic_caves', 11],  // T4
  ['bestiary_alex_mobs', 'alexscaves:chests/underground_cabin_toxic_caves', 4],  // T6
  ['torch_and_lantern_craft', 'alexscaves:chests/underground_cabin_toxic_caves', 35],  // T1

  // ── alexscaves:chests/witch_hut ──
  ['cuisine_subterranean', 'alexscaves:chests/witch_hut', 4],  // T6
  ['sugarstone_caverns', 'alexscaves:chests/witch_hut', 11],  // T4
  ['symbiont_pursuit', 'alexscaves:chests/witch_hut', 11],  // T4
  ['abyssal_age', 'alexscaves:chests/witch_hut', 2],  // T3
  ['alchemy', 'alexscaves:chests/witch_hut', 7],  // T5

  // ── aquamirae:chests/frozen_chest ──
  ['cold_sweat_discipline', 'aquamirae:chests/frozen_chest', 25],  // T2
  ['cuisine_alpine', 'aquamirae:chests/frozen_chest', 7],  // T5
  ['cuisine_cornelia', 'aquamirae:chests/frozen_chest', 17],  // T3
  ['fishing_arts', 'aquamirae:chests/frozen_chest', 7],  // T5
  ['mob_faction_deep_ones', 'aquamirae:chests/frozen_chest', 11],  // T4

  // ── aquamirae:chests/maze_camp_chest ──
  ['cold_sweat_discipline', 'aquamirae:chests/maze_camp_chest', 25],  // T2
  ['cuisine_alpine', 'aquamirae:chests/maze_camp_chest', 7],  // T5
  ['cuisine_cornelia', 'aquamirae:chests/maze_camp_chest', 17],  // T3
  ['fishing_arts', 'aquamirae:chests/maze_camp_chest', 7],  // T5
  ['mob_faction_deep_ones', 'aquamirae:chests/maze_camp_chest', 11],  // T4

  // ── aquamirae:chests/maze_common_chest ──
  ['cold_sweat_discipline', 'aquamirae:chests/maze_common_chest', 25],  // T2
  ['cuisine_alpine', 'aquamirae:chests/maze_common_chest', 7],  // T5
  ['cuisine_cornelia', 'aquamirae:chests/maze_common_chest', 17],  // T3
  ['fishing_arts', 'aquamirae:chests/maze_common_chest', 7],  // T5
  ['mob_faction_deep_ones', 'aquamirae:chests/maze_common_chest', 11],  // T4

  // ── aquamirae:chests/ship_1 ──
  ['seafood_mastery', 'aquamirae:chests/ship_1', 11],  // T4
  ['cartography_advanced', 'aquamirae:chests/ship_1', 7],  // T5
  ['cold_sweat_discipline', 'aquamirae:chests/ship_1', 25],  // T2
  ['cuisine_alpine', 'aquamirae:chests/ship_1', 7],  // T5
  ['cuisine_cornelia', 'aquamirae:chests/ship_1', 17],  // T3

  // ── aquamirae:chests/ship_2 ──
  ['seafood_mastery', 'aquamirae:chests/ship_2', 11],  // T4
  ['cartography_advanced', 'aquamirae:chests/ship_2', 7],  // T5
  ['cold_sweat_discipline', 'aquamirae:chests/ship_2', 25],  // T2
  ['cuisine_alpine', 'aquamirae:chests/ship_2', 7],  // T5
  ['cuisine_cornelia', 'aquamirae:chests/ship_2', 17],  // T3

  // ── ati_structures:chests/aqua ──
  ['fishing_arts', 'ati_structures:chests/aqua', 7],  // T5
  ['scrollcasting', 'ati_structures:chests/aqua', 7],  // T5
  ['seafood_mastery', 'ati_structures:chests/aqua', 11],  // T4
  ['water_age', 'ati_structures:chests/aqua', 2],  // T1

  // ── ati_structures:chests/archer_chest ──
  ['arsenal_iron_ranged', 'ati_structures:chests/archer_chest', 7],  // T5
  ['arsenal_legendary_ranged', 'ati_structures:chests/archer_chest', 7],  // T5
  ['arsenal_master_ranged', 'ati_structures:chests/archer_chest', 17],  // T3

  // ── ati_structures:chests/archer_chest2 ──
  ['arsenal_iron_ranged', 'ati_structures:chests/archer_chest2', 7],  // T5
  ['arsenal_legendary_ranged', 'ati_structures:chests/archer_chest2', 7],  // T5
  ['arsenal_master_ranged', 'ati_structures:chests/archer_chest2', 17],  // T3

  // ── ati_structures:chests/armory ──
  ['arsenal_iron_blades', 'ati_structures:chests/armory', 4],  // T6
  ['arsenal_iron_polearms', 'ati_structures:chests/armory', 4],  // T6
  ['arsenal_iron_ranged', 'ati_structures:chests/armory', 7],  // T5
  ['ballistics_engineering', 'ati_structures:chests/armory', 11],  // T4
  ['banner_heraldry', 'ati_structures:chests/armory', 11],  // T4

  // ── ati_structures:chests/coal_storage ──
  ['scrollcasting', 'ati_structures:chests/coal_storage', 7],  // T5

  // ── ati_structures:chests/construction ──
  ['glassworking', 'ati_structures:chests/construction', 35],  // T1
  ['scrollcasting', 'ati_structures:chests/construction', 7],  // T5
  ['stoneworking', 'ati_structures:chests/construction', 35],  // T1

  // ── ati_structures:chests/copper_storage ──
  ['metalworking', 'ati_structures:chests/copper_storage', 4],  // T6
  ['scrollcasting', 'ati_structures:chests/copper_storage', 7],  // T5

  // ── ati_structures:chests/crafting ──
  ['scrollcasting', 'ati_structures:chests/crafting', 7],  // T5

  // ── ati_structures:chests/food_storage ──
  ['fermentation_age', 'ati_structures:chests/food_storage', 2],  // T5
  ['bakery', 'ati_structures:chests/food_storage', 35],  // T1
  ['butchery', 'ati_structures:chests/food_storage', 35],  // T1
  ['cuisine_rustic', 'ati_structures:chests/food_storage', 7],  // T5
  ['sweets_and_confections', 'ati_structures:chests/food_storage', 11],  // T4

  // ── ati_structures:chests/gold_storage ──
  ['metalworking', 'ati_structures:chests/gold_storage', 4],  // T6
  ['scrollcasting', 'ati_structures:chests/gold_storage', 7],  // T5

  // ── ati_structures:chests/ingredients ──
  ['fermentation_age', 'ati_structures:chests/ingredients', 2],  // T5
  ['scrollcasting', 'ati_structures:chests/ingredients', 7],  // T5

  // ── ati_structures:chests/iron_storage ──
  ['metalworking', 'ati_structures:chests/iron_storage', 4],  // T6
  ['scrollcasting', 'ati_structures:chests/iron_storage', 7],  // T5

  // ── ati_structures:chests/library ──
  ['scrollcasting', 'ati_structures:chests/library', 7],  // T5
  ['alchemy', 'ati_structures:chests/library', 7],  // T5
  ['arcane_codex', 'ati_structures:chests/library', 4],  // T6
  ['architectural_mastery', 'ati_structures:chests/library', 11],  // T4
  ['bookshelf_mastery', 'ati_structures:chests/library', 11],  // T4

  // ── ati_structures:chests/mechanism_storage ──
  ['scrollcasting', 'ati_structures:chests/mechanism_storage', 7],  // T5

  // ── ati_structures:chests/minerals ──
  ['metalworking', 'ati_structures:chests/minerals', 4],  // T6
  ['scrollcasting', 'ati_structures:chests/minerals', 7],  // T5
  ['stoneworking', 'ati_structures:chests/minerals', 35],  // T1

  // ── ati_structures:chests/potion_storage ──
  ['archaeology_mastery', 'ati_structures:chests/potion_storage', 35],  // T1
  ['scrollcasting', 'ati_structures:chests/potion_storage', 7],  // T5
  ['tonic_alchemy', 'ati_structures:chests/potion_storage', 7],  // T5

  // ── ati_structures:chests/resources ──
  ['scrollcasting', 'ati_structures:chests/resources', 7],  // T5

  // ── ati_structures:chests/slime ──
  ['scrollcasting', 'ati_structures:chests/slime', 7],  // T5

  // ── ati_structures:chests/stone_storage ──
  ['stoneworking', 'ati_structures:chests/stone_storage', 35],  // T1
  ['scrollcasting', 'ati_structures:chests/stone_storage', 7],  // T5

  // ── ati_structures:chests/vegetation ──
  ['scrollcasting', 'ati_structures:chests/vegetation', 7],  // T5

  // ── ati_structures:chests/wood_storage ──
  ['woodworking', 'ati_structures:chests/wood_storage', 35],  // T1
  ['scrollcasting', 'ati_structures:chests/wood_storage', 7],  // T5

  // ── beachparty:chests/buried_treasure ──
  ['cartography_advanced', 'beachparty:chests/buried_treasure', 7],  // T5
  ['numismatic_mechanisms', 'beachparty:chests/buried_treasure', 17],  // T3
  ['seafood_mastery', 'beachparty:chests/buried_treasure', 11],  // T4

  // ── beachparty:chests/desert_pyramid ──
  ['archaeology_mastery', 'beachparty:chests/desert_pyramid', 35],  // T1
  ['cuisine_middle_eastern', 'beachparty:chests/desert_pyramid', 17],  // T3
  ['stoneworking', 'beachparty:chests/desert_pyramid', 35],  // T1

  // ── beachparty:chests/shipwreck_supply ──
  ['seafood_mastery', 'beachparty:chests/shipwreck_supply', 11],  // T4
  ['cartography_advanced', 'beachparty:chests/shipwreck_supply', 7],  // T5
  ['cuisine_cornelia', 'beachparty:chests/shipwreck_supply', 17],  // T3
  ['fishing_arts', 'beachparty:chests/shipwreck_supply', 7],  // T5
  ['mob_faction_deep_ones', 'beachparty:chests/shipwreck_supply', 11],  // T4

  // ── beachparty:chests/shipwreck_treasure ──
  ['seafood_mastery', 'beachparty:chests/shipwreck_treasure', 11],  // T4
  ['cartography_advanced', 'beachparty:chests/shipwreck_treasure', 7],  // T5
  ['cuisine_cornelia', 'beachparty:chests/shipwreck_treasure', 17],  // T3
  ['fishing_arts', 'beachparty:chests/shipwreck_treasure', 7],  // T5
  ['mob_faction_deep_ones', 'beachparty:chests/shipwreck_treasure', 11],  // T4

  // ── beachparty:chests/simple_dungeon ──
  ['arsenal_iron_blades', 'beachparty:chests/simple_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'beachparty:chests/simple_dungeon', 4],  // T6
  ['arsenal_master_polearms', 'beachparty:chests/simple_dungeon', 7],  // T5
  ['arsenal_master_ranged', 'beachparty:chests/simple_dungeon', 17],  // T3
  ['heavy_plate_discipline', 'beachparty:chests/simple_dungeon', 7],  // T5

  // ── beachparty:chests/underwater_ruin_big ──
  ['cuisine_cornelia', 'beachparty:chests/underwater_ruin_big', 17],  // T3
  ['mob_faction_deep_ones', 'beachparty:chests/underwater_ruin_big', 11],  // T4
  ['seafood_mastery', 'beachparty:chests/underwater_ruin_big', 11],  // T4
  ['water_age', 'beachparty:chests/underwater_ruin_big', 2],  // T1

  // ── beachparty:chests/underwater_ruin_small ──
  ['cuisine_cornelia', 'beachparty:chests/underwater_ruin_small', 17],  // T3
  ['mob_faction_deep_ones', 'beachparty:chests/underwater_ruin_small', 11],  // T4
  ['seafood_mastery', 'beachparty:chests/underwater_ruin_small', 11],  // T4
  ['water_age', 'beachparty:chests/underwater_ruin_small', 2],  // T1

  // ── beachparty:chests/woodland_mansion ──
  ['architectural_mastery', 'beachparty:chests/woodland_mansion', 11],  // T4
  ['banner_heraldry', 'beachparty:chests/woodland_mansion', 11],  // T4
  ['companions_charter', 'beachparty:chests/woodland_mansion', 35],  // T1
  ['evocation_school', 'beachparty:chests/woodland_mansion', 7],  // T5
  ['falconry', 'beachparty:chests/woodland_mansion', 4],  // T6

  // ── betterdeserttemples:chests/food_storage ──
  ['fermentation_age', 'betterdeserttemples:chests/food_storage', 2],  // T5
  ['arcane_codex', 'betterdeserttemples:chests/food_storage', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/food_storage', 35],  // T1
  ['bakery', 'betterdeserttemples:chests/food_storage', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/food_storage', 17],  // T3

  // ── betterdeserttemples:chests/lab ──
  ['arcane_codex', 'betterdeserttemples:chests/lab', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/lab', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/lab', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/lab', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/lab', 4],  // T6

  // ── betterdeserttemples:chests/library ──
  ['arcane_codex', 'betterdeserttemples:chests/library', 4],  // T6
  ['holy_school', 'betterdeserttemples:chests/library', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/library', 4],  // T6
  ['runesmithing', 'betterdeserttemples:chests/library', 7],  // T5
  ['archaeology_mastery', 'betterdeserttemples:chests/library', 35],  // T1

  // ── betterdeserttemples:chests/pharaoh_hidden ──
  ['arcane_codex', 'betterdeserttemples:chests/pharaoh_hidden', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/pharaoh_hidden', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/pharaoh_hidden', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/pharaoh_hidden', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/pharaoh_hidden', 4],  // T6

  // ── betterdeserttemples:chests/pot ──
  ['archaeology_mastery', 'betterdeserttemples:chests/pot', 35],  // T1
  ['arcane_codex', 'betterdeserttemples:chests/pot', 4],  // T6
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/pot', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/pot', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/pot', 4],  // T6

  // ── betterdeserttemples:chests/statue ──
  ['arcane_codex', 'betterdeserttemples:chests/statue', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/statue', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/statue', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/statue', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/statue', 4],  // T6

  // ── betterdeserttemples:chests/storage ──
  ['arcane_codex', 'betterdeserttemples:chests/storage', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/storage', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/storage', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/storage', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/storage', 4],  // T6

  // ── betterdeserttemples:chests/tomb ──
  ['archaeology_mastery', 'betterdeserttemples:chests/tomb', 35],  // T1
  ['arcane_codex', 'betterdeserttemples:chests/tomb', 4],  // T6
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/tomb', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/tomb', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/tomb', 4],  // T6

  // ── betterdeserttemples:chests/tomb_pharaoh ──
  ['archaeology_mastery', 'betterdeserttemples:chests/tomb_pharaoh', 35],  // T1
  ['arcane_codex', 'betterdeserttemples:chests/tomb_pharaoh', 4],  // T6
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/tomb_pharaoh', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/tomb_pharaoh', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/tomb_pharaoh', 4],  // T6

  // ── betterdeserttemples:chests/wardrobe ──
  ['arcane_codex', 'betterdeserttemples:chests/wardrobe', 4],  // T6
  ['archaeology_mastery', 'betterdeserttemples:chests/wardrobe', 35],  // T1
  ['cuisine_middle_eastern', 'betterdeserttemples:chests/wardrobe', 17],  // T3
  ['holy_school', 'betterdeserttemples:chests/wardrobe', 7],  // T5
  ['music_records', 'betterdeserttemples:chests/wardrobe', 4],  // T6

  // ── betterjungletemples:chests/campsite ──
  ['arcane_codex', 'betterjungletemples:chests/campsite', 4],  // T6
  ['bestiary_alex_mobs', 'betterjungletemples:chests/campsite', 4],  // T6
  ['cuisine_tropical', 'betterjungletemples:chests/campsite', 11],  // T4
  ['foraging_almanac', 'betterjungletemples:chests/campsite', 35],  // T1
  ['holy_school', 'betterjungletemples:chests/campsite', 7],  // T5

  // ── betterjungletemples:chests/treasure ──
  ['arcane_codex', 'betterjungletemples:chests/treasure', 4],  // T6
  ['bestiary_alex_mobs', 'betterjungletemples:chests/treasure', 4],  // T6
  ['cuisine_tropical', 'betterjungletemples:chests/treasure', 11],  // T4
  ['foraging_almanac', 'betterjungletemples:chests/treasure', 35],  // T1
  ['holy_school', 'betterjungletemples:chests/treasure', 7],  // T5

  // ── betteroceanmonuments:chests/upper_side_chamber ──
  ['cuisine_cornelia', 'betteroceanmonuments:chests/upper_side_chamber', 17],  // T3
  ['fishing_arts', 'betteroceanmonuments:chests/upper_side_chamber', 7],  // T5
  ['seafood_mastery', 'betteroceanmonuments:chests/upper_side_chamber', 11],  // T4

  // ── cataclysm:chests/acropolis_treasure ──
  ['arsenal_legendary_blades', 'cataclysm:chests/acropolis_treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'cataclysm:chests/acropolis_treasure', 7],  // T5
  ['atomic_engineering', 'cataclysm:chests/acropolis_treasure', 11],  // T4
  ['cataclysm_codex', 'cataclysm:chests/acropolis_treasure', 4],  // T6
  ['electrical_engineering', 'cataclysm:chests/acropolis_treasure', 11],  // T4

  // ── cataclysm:chests/frosted_prison_treasure ──
  ['arsenal_legendary_blades', 'cataclysm:chests/frosted_prison_treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'cataclysm:chests/frosted_prison_treasure', 7],  // T5
  ['atomic_engineering', 'cataclysm:chests/frosted_prison_treasure', 11],  // T4
  ['cataclysm_codex', 'cataclysm:chests/frosted_prison_treasure', 4],  // T6
  ['electrical_engineering', 'cataclysm:chests/frosted_prison_treasure', 11],  // T4

  // ── celestisynth:chests/underground_dungeons ──
  ['abyssal_chasm', 'celestisynth:chests/underground_dungeons', 11],  // T4
  ['arsenal_iron_blades', 'celestisynth:chests/underground_dungeons', 4],  // T6
  ['arsenal_iron_polearms', 'celestisynth:chests/underground_dungeons', 4],  // T6
  ['arsenal_master_polearms', 'celestisynth:chests/underground_dungeons', 7],  // T5
  ['arsenal_master_ranged', 'celestisynth:chests/underground_dungeons', 17],  // T3

  // ── celestisynth:chests/vanilla_nether_structures ──
  ['cuisine_nether', 'celestisynth:chests/vanilla_nether_structures', 11],  // T4
  ['cuisine_pyromantic', 'celestisynth:chests/vanilla_nether_structures', 17],  // T3
  ['fire_school', 'celestisynth:chests/vanilla_nether_structures', 7],  // T5
  ['infernal_age', 'celestisynth:chests/vanilla_nether_structures', 2],  // T3
  ['soul_black_smith', 'celestisynth:chests/vanilla_nether_structures', 7],  // T5

  // ── chalk:chests/abandoned_mineshaft_chalk_loot ──
  ['arsenal_iron_blades', 'chalk:chests/abandoned_mineshaft_chalk_loot', 4],  // T6
  ['arsenal_iron_polearms', 'chalk:chests/abandoned_mineshaft_chalk_loot', 4],  // T6
  ['bestiary_iceandfire', 'chalk:chests/abandoned_mineshaft_chalk_loot', 11],  // T4
  ['kindled_age', 'chalk:chests/abandoned_mineshaft_chalk_loot', 2],  // T1
  ['kinetic_engineering', 'chalk:chests/abandoned_mineshaft_chalk_loot', 17],  // T3

  // ── chalk:chests/desert_pyramid_chalk_loot ──
  ['archaeology_mastery', 'chalk:chests/desert_pyramid_chalk_loot', 35],  // T1
  ['cuisine_middle_eastern', 'chalk:chests/desert_pyramid_chalk_loot', 17],  // T3
  ['stoneworking', 'chalk:chests/desert_pyramid_chalk_loot', 35],  // T1

  // ── chalk:chests/simple_dungeon_chalk_loot ──
  ['arsenal_iron_blades', 'chalk:chests/simple_dungeon_chalk_loot', 4],  // T6
  ['arsenal_iron_polearms', 'chalk:chests/simple_dungeon_chalk_loot', 4],  // T6
  ['arsenal_master_polearms', 'chalk:chests/simple_dungeon_chalk_loot', 7],  // T5
  ['arsenal_master_ranged', 'chalk:chests/simple_dungeon_chalk_loot', 17],  // T3
  ['heavy_plate_discipline', 'chalk:chests/simple_dungeon_chalk_loot', 7],  // T5

  // ── chalk:chests/village_chalk_loot ──
  ['agronomic_path', 'chalk:chests/village_chalk_loot', 35],  // T1
  ['bakery', 'chalk:chests/village_chalk_loot', 35],  // T1
  ['dairy_and_cheese', 'chalk:chests/village_chalk_loot', 7],  // T5
  ['fermentation_age', 'chalk:chests/village_chalk_loot', 2],  // T5
  ['sweets_and_confections', 'chalk:chests/village_chalk_loot', 11],  // T4

  // ── chefsdelight:chests/cooker ──
  ['bakery', 'chefsdelight:chests/cooker', 35],  // T1
  ['butchery', 'chefsdelight:chests/cooker', 35],  // T1
  ['dairy_and_cheese', 'chefsdelight:chests/cooker', 7],  // T5
  ['fermentation_age', 'chefsdelight:chests/cooker', 2],  // T5
  ['sweets_and_confections', 'chefsdelight:chests/cooker', 11],  // T4

  // ── ctov:chests/village/village_badlands_house ──
  ['agronomic_path', 'ctov:chests/village/village_badlands_house', 35],  // T1
  ['bakery', 'ctov:chests/village/village_badlands_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_badlands_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_badlands_house', 7],  // T5
  ['furniturecraft', 'ctov:chests/village/village_badlands_house', 25],  // T2

  // ── ctov:chests/village/village_bakery ──
  ['bakery', 'ctov:chests/village/village_bakery', 35],  // T1
  ['sweets_and_confections', 'ctov:chests/village/village_bakery', 11],  // T4
  ['hearthkeepers_manual', 'ctov:chests/village/village_bakery', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_bakery', 7],  // T5
  ['fermentation_age', 'ctov:chests/village/village_bakery', 2],  // T5

  // ── ctov:chests/village/village_beach_house ──
  ['agronomic_path', 'ctov:chests/village/village_beach_house', 35],  // T1
  ['bakery', 'ctov:chests/village/village_beach_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_beach_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_beach_house', 7],  // T5
  ['furniturecraft', 'ctov:chests/village/village_beach_house', 25],  // T2

  // ── ctov:chests/village/village_dark_forest_house ──
  ['woodworking', 'ctov:chests/village/village_dark_forest_house', 35],  // T1
  ['agronomic_path', 'ctov:chests/village/village_dark_forest_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_dark_forest_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_dark_forest_house', 7],  // T5
  ['bestiary_alex_mobs', 'ctov:chests/village/village_dark_forest_house', 4],  // T6

  // ── ctov:chests/village/village_farm ──
  ['agronomic_path', 'ctov:chests/village/village_farm', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_farm', 7],  // T5
  ['bakery', 'ctov:chests/village/village_farm', 35],  // T1
  ['fermentation_age', 'ctov:chests/village/village_farm', 2],  // T5
  ['sweets_and_confections', 'ctov:chests/village/village_farm', 11],  // T4

  // ── ctov:chests/village/village_forager ──
  ['agronomic_path', 'ctov:chests/village/village_forager', 35],  // T1
  ['bakery', 'ctov:chests/village/village_forager', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_forager', 7],  // T5
  ['fermentation_age', 'ctov:chests/village/village_forager', 2],  // T5
  ['sweets_and_confections', 'ctov:chests/village/village_forager', 11],  // T4

  // ── ctov:chests/village/village_jungle_house ──
  ['woodworking', 'ctov:chests/village/village_jungle_house', 35],  // T1
  ['agronomic_path', 'ctov:chests/village/village_jungle_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_jungle_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_jungle_house', 7],  // T5
  ['bestiary_alex_mobs', 'ctov:chests/village/village_jungle_house', 4],  // T6

  // ── ctov:chests/village/village_library ──
  ['glassworking', 'ctov:chests/village/village_library', 35],  // T1
  ['agronomic_path', 'ctov:chests/village/village_library', 35],  // T1
  ['alchemy', 'ctov:chests/village/village_library', 7],  // T5
  ['arcane_codex', 'ctov:chests/village/village_library', 4],  // T6
  ['architectural_mastery', 'ctov:chests/village/village_library', 11],  // T4

  // ── ctov:chests/village/village_mountain_house ──
  ['agronomic_path', 'ctov:chests/village/village_mountain_house', 35],  // T1
  ['bakery', 'ctov:chests/village/village_mountain_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_mountain_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_mountain_house', 7],  // T5
  ['furniturecraft', 'ctov:chests/village/village_mountain_house', 25],  // T2

  // ── ctov:chests/village/village_mushroom_house ──
  ['agronomic_path', 'ctov:chests/village/village_mushroom_house', 35],  // T1
  ['bakery', 'ctov:chests/village/village_mushroom_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_mushroom_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_mushroom_house', 7],  // T5
  ['furniturecraft', 'ctov:chests/village/village_mushroom_house', 25],  // T2

  // ── ctov:chests/village/village_smith ──
  ['agronomic_path', 'ctov:chests/village/village_smith', 35],  // T1
  ['bakery', 'ctov:chests/village/village_smith', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_smith', 7],  // T5
  ['fermentation_age', 'ctov:chests/village/village_smith', 2],  // T5
  ['metalworking', 'ctov:chests/village/village_smith', 4],  // T6

  // ── ctov:chests/village/village_swamp_house ──
  ['agronomic_path', 'ctov:chests/village/village_swamp_house', 35],  // T1
  ['bakery', 'ctov:chests/village/village_swamp_house', 35],  // T1
  ['dairy_and_cheese', 'ctov:chests/village/village_swamp_house', 7],  // T5
  ['soups_and_stews', 'ctov:chests/village/village_swamp_house', 7],  // T5
  ['furniturecraft', 'ctov:chests/village/village_swamp_house', 25],  // T2

  // ── dungeonnowloading:chests/labyrinth/arrows ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/arrows', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/arrows', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/arrows', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/arrows', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/arrows', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/gigantism ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/gigantism', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/gigantism', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/gigantism', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/gigantism', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/gigantism', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/overworked ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/overworked', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/overworked', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/overworked', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/overworked', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/overworked', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/pack_blessing ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/pack_blessing', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/pack_blessing', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/pack_blessing', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/pack_blessing', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/pack_blessing', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/random ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/random', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/random', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/random', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/random', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/random', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/reckless ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/reckless', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/reckless', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/reckless', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/reckless', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/reckless', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/enchantments/sacrifice ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/enchantments/sacrifice', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/sacrifice', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/enchantments/sacrifice', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/enchantments/sacrifice', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/enchantments/sacrifice', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/flame_bow ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/flame_bow', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/flame_bow', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/flame_bow', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/flame_bow', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/flame_bow', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/foods ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/foods', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/foods', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/foods', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/foods', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/labyrinth/foods', 35],  // T1

  // ── dungeonnowloading:chests/labyrinth/horse_gears ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/horse_gears', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/horse_gears', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/horse_gears', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/horse_gears', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/horse_gears', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/potion_bow ──
  ['archaeology_mastery', 'dungeonnowloading:chests/labyrinth/potion_bow', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/potion_bow', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/potion_bow', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/potion_bow', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/potion_bow', 17],  // T3

  // ── dungeonnowloading:chests/labyrinth/reward ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/reward', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/reward', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/reward', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/reward', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/reward', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/rewards/enchantment_books ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/rewards/enchantment_books', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/rewards/enchantment_books', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/rewards/enchantment_books', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/rewards/enchantment_books', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/rewards/enchantment_books', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/rewards/gears ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/rewards/gears', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/rewards/gears', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/rewards/gears', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/rewards/gears', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/rewards/gears', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/rewards/materials ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/rewards/materials', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/rewards/materials', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/rewards/materials', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/rewards/materials', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/rewards/materials', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/rewards/music_discs ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/rewards/music_discs', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/rewards/music_discs', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/rewards/music_discs', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/rewards/music_discs', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/rewards/music_discs', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/rewards/potions ──
  ['archaeology_mastery', 'dungeonnowloading:chests/labyrinth/rewards/potions', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/rewards/potions', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/rewards/potions', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/rewards/potions', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/rewards/potions', 17],  // T3

  // ── dungeonnowloading:chests/labyrinth/suspicious_stew ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/suspicious_stew', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/suspicious_stew', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/suspicious_stew', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/suspicious_stew', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/suspicious_stew', 7],  // T5

  // ── dungeonnowloading:chests/labyrinth/woods ──
  ['arsenal_iron_blades', 'dungeonnowloading:chests/labyrinth/woods', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonnowloading:chests/labyrinth/woods', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/labyrinth/woods', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/labyrinth/woods', 17],  // T3
  ['heavy_plate_discipline', 'dungeonnowloading:chests/labyrinth/woods', 7],  // T5

  // ── dungeonnowloading:chests/temple_of_duality/armor/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/armor/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/armor/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/armor/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/arrow/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/book/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/book/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/book/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/book/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/book/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/book/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/equipment/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/fairkeeper_chest/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/easy_combat', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/easy_puzzle', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/hard_combat', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/hard_puzzle', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/normal_combat', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/food/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/food/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/food/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/food/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/food/normal_puzzle', 17],  // T3
  ['bakery', 'dungeonnowloading:chests/temple_of_duality/food/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/garbage/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/easy_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/easy_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/easy_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/easy_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/easy_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/easy_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/hard_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/hard_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/hard_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/hard_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/hard_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/hard_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/normal_combat', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/normal_combat', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/normal_combat', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/material/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/material/normal_puzzle', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/material/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/material/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/material/normal_puzzle', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/material/normal_puzzle', 35],  // T1

  // ── dungeonnowloading:chests/temple_of_duality/potion/easy_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/easy_combat', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/easy_combat', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/easy_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/easy_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/easy_combat', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/easy_puzzle', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/potion/hard_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/hard_combat', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/hard_combat', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/hard_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/hard_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/hard_combat', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/hard_puzzle', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/potion/normal_combat ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/normal_combat', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/normal_combat', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/normal_combat', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/normal_combat', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/normal_combat', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle', 4],  // T6
  ['archaeology_mastery', 'dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle', 35],  // T1
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/potion/normal_puzzle', 17],  // T3

  // ── dungeonnowloading:chests/temple_of_duality/wood/common ──
  ['arcane_codex', 'dungeonnowloading:chests/temple_of_duality/wood/common', 4],  // T6
  ['arsenal_iron_blades', 'dungeonnowloading:chests/temple_of_duality/wood/common', 4],  // T6
  ['arsenal_master_polearms', 'dungeonnowloading:chests/temple_of_duality/wood/common', 7],  // T5
  ['arsenal_master_ranged', 'dungeonnowloading:chests/temple_of_duality/wood/common', 17],  // T3
  ['codex_of_kukulkan', 'dungeonnowloading:chests/temple_of_duality/wood/common', 35],  // T1

  // ── dungeons_and_combat:chests/blacksmithy ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/blacksmithy', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/blacksmithy', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/blacksmithy', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/blacksmithy', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/blacksmithy', 11],  // T4

  // ── dungeons_and_combat:chests/blazing_fortress_loot ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/blazing_fortress_loot', 4],  // T6
  ['cuisine_nether', 'dungeons_and_combat:chests/blazing_fortress_loot', 11],  // T4
  ['cuisine_pyromantic', 'dungeons_and_combat:chests/blazing_fortress_loot', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/blazing_fortress_loot', 11],  // T4
  ['fire_school', 'dungeons_and_combat:chests/blazing_fortress_loot', 7],  // T5

  // ── dungeons_and_combat:chests/catacumbs ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/catacumbs', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/catacumbs', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/catacumbs', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/catacumbs', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/catacumbs', 11],  // T4

  // ── dungeons_and_combat:chests/ernos_cave_loot ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/ernos_cave_loot', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/ernos_cave_loot', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/ernos_cave_loot', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/ernos_cave_loot', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/ernos_cave_loot', 11],  // T4

  // ── dungeons_and_combat:chests/forgotten_sand ──
  ['arsenal_master_blades', 'dungeons_and_combat:chests/forgotten_sand', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/forgotten_sand', 7],  // T5
  ['dnc_pantheon', 'dungeons_and_combat:chests/forgotten_sand', 11],  // T4
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/forgotten_sand', 4],  // T6
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/forgotten_sand', 17],  // T3

  // ── dungeons_and_combat:chests/forgotten_sand_treasure ──
  ['arsenal_master_blades', 'dungeons_and_combat:chests/forgotten_sand_treasure', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/forgotten_sand_treasure', 7],  // T5
  ['dnc_pantheon', 'dungeons_and_combat:chests/forgotten_sand_treasure', 11],  // T4
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/forgotten_sand_treasure', 4],  // T6
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/forgotten_sand_treasure', 17],  // T3

  // ── dungeons_and_combat:chests/hermit_house ──
  ['agronomic_path', 'dungeons_and_combat:chests/hermit_house', 35],  // T1
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/hermit_house', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/hermit_house', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/hermit_house', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/hermit_house', 17],  // T3

  // ── dungeons_and_combat:chests/infernal_fortress ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/infernal_fortress', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/infernal_fortress', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/infernal_fortress', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/infernal_fortress', 17],  // T3
  ['ballistics_engineering', 'dungeons_and_combat:chests/infernal_fortress', 11],  // T4

  // ── dungeons_and_combat:chests/remanent_camp ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/remanent_camp', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/remanent_camp', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/remanent_camp', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/remanent_camp', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/remanent_camp', 11],  // T4

  // ── dungeons_and_combat:chests/tavern_loot ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/tavern_loot', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/tavern_loot', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/tavern_loot', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/tavern_loot', 17],  // T3
  ['distillery', 'dungeons_and_combat:chests/tavern_loot', 17],  // T3

  // ── dungeons_and_combat:chests/weak_cult ──
  ['arsenal_iron_blades', 'dungeons_and_combat:chests/weak_cult', 4],  // T6
  ['arsenal_iron_polearms', 'dungeons_and_combat:chests/weak_cult', 4],  // T6
  ['arsenal_master_polearms', 'dungeons_and_combat:chests/weak_cult', 7],  // T5
  ['arsenal_master_ranged', 'dungeons_and_combat:chests/weak_cult', 17],  // T3
  ['dnc_pantheon', 'dungeons_and_combat:chests/weak_cult', 11],  // T4

  // ── dungeonsdelight:chests/rotten_dungeon ──
  ['arsenal_iron_blades', 'dungeonsdelight:chests/rotten_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'dungeonsdelight:chests/rotten_dungeon', 4],  // T6
  ['arsenal_master_polearms', 'dungeonsdelight:chests/rotten_dungeon', 7],  // T5
  ['arsenal_master_ranged', 'dungeonsdelight:chests/rotten_dungeon', 17],  // T3
  ['bakery', 'dungeonsdelight:chests/rotten_dungeon', 35],  // T1

  // ── exposure:chests/abandoned_mineshaft ──
  ['arsenal_iron_blades', 'exposure:chests/abandoned_mineshaft', 4],  // T6
  ['arsenal_iron_polearms', 'exposure:chests/abandoned_mineshaft', 4],  // T6
  ['bestiary_iceandfire', 'exposure:chests/abandoned_mineshaft', 11],  // T4
  ['kindled_age', 'exposure:chests/abandoned_mineshaft', 2],  // T1
  ['kinetic_engineering', 'exposure:chests/abandoned_mineshaft', 17],  // T3

  // ── exposure:chests/shipwreck_map ──
  ['cartography_advanced', 'exposure:chests/shipwreck_map', 7],  // T5
  ['seafood_mastery', 'exposure:chests/shipwreck_map', 11],  // T4
  ['cuisine_cornelia', 'exposure:chests/shipwreck_map', 17],  // T3
  ['fishing_arts', 'exposure:chests/shipwreck_map', 7],  // T5
  ['mob_faction_deep_ones', 'exposure:chests/shipwreck_map', 11],  // T4

  // ── exposure:chests/simple_dungeon ──
  ['arsenal_iron_blades', 'exposure:chests/simple_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'exposure:chests/simple_dungeon', 4],  // T6
  ['arsenal_master_polearms', 'exposure:chests/simple_dungeon', 7],  // T5
  ['arsenal_master_ranged', 'exposure:chests/simple_dungeon', 17],  // T3
  ['heavy_plate_discipline', 'exposure:chests/simple_dungeon', 7],  // T5

  // ── exposure:chests/stronghold_crossing ──
  ['arcane_codex', 'exposure:chests/stronghold_crossing', 4],  // T6
  ['arsenal_legendary_blades', 'exposure:chests/stronghold_crossing', 7],  // T5
  ['arsenal_legendary_polearms', 'exposure:chests/stronghold_crossing', 7],  // T5
  ['arsenal_master_blades', 'exposure:chests/stronghold_crossing', 4],  // T6
  ['arsenal_master_ranged', 'exposure:chests/stronghold_crossing', 17],  // T3

  // ── exposure:chests/village_plains_house ──
  ['agronomic_path', 'exposure:chests/village_plains_house', 35],  // T1
  ['bakery', 'exposure:chests/village_plains_house', 35],  // T1
  ['dairy_and_cheese', 'exposure:chests/village_plains_house', 7],  // T5
  ['soups_and_stews', 'exposure:chests/village_plains_house', 7],  // T5
  ['furniturecraft', 'exposure:chests/village_plains_house', 25],  // T2

  // ── farmersdelight:chests/fd_abandoned_mineshaft ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_abandoned_mineshaft', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_abandoned_mineshaft', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_abandoned_mineshaft', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_abandoned_mineshaft', 7],  // T5
  ['arsenal_iron_blades', 'farmersdelight:chests/fd_abandoned_mineshaft', 4],  // T6

  // ── farmersdelight:chests/fd_bastion_hoglin_stable ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_bastion_hoglin_stable', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_bastion_hoglin_stable', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_bastion_hoglin_stable', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_bastion_hoglin_stable', 7],  // T5
  ['arsenal_iron_blades', 'farmersdelight:chests/fd_bastion_hoglin_stable', 4],  // T6

  // ── farmersdelight:chests/fd_bastion_treasure ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_bastion_treasure', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_bastion_treasure', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_bastion_treasure', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_bastion_treasure', 7],  // T5
  ['arsenal_iron_blades', 'farmersdelight:chests/fd_bastion_treasure', 4],  // T6

  // ── farmersdelight:chests/fd_end_city_treasure ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_end_city_treasure', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_end_city_treasure', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_end_city_treasure', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_end_city_treasure', 7],  // T5
  ['arsenal_master_blades', 'farmersdelight:chests/fd_end_city_treasure', 4],  // T6

  // ── farmersdelight:chests/fd_pillager_outpost ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_pillager_outpost', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_pillager_outpost', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_pillager_outpost', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_pillager_outpost', 7],  // T5
  ['arsenal_iron_blades', 'farmersdelight:chests/fd_pillager_outpost', 4],  // T6

  // ── farmersdelight:chests/fd_ruined_portal ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_ruined_portal', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_ruined_portal', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_ruined_portal', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_ruined_portal', 7],  // T5
  ['beehive_logistics', 'farmersdelight:chests/fd_ruined_portal', 17],  // T3

  // ── farmersdelight:chests/fd_shipwreck_supply ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_shipwreck_supply', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_shipwreck_supply', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_shipwreck_supply', 35],  // T1
  ['seafood_mastery', 'farmersdelight:chests/fd_shipwreck_supply', 11],  // T4
  ['soups_and_stews', 'farmersdelight:chests/fd_shipwreck_supply', 7],  // T5

  // ── farmersdelight:chests/fd_simple_dungeon ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_simple_dungeon', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_simple_dungeon', 35],  // T1
  ['arsenal_iron_blades', 'farmersdelight:chests/fd_simple_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'farmersdelight:chests/fd_simple_dungeon', 4],  // T6
  ['bakery', 'farmersdelight:chests/fd_simple_dungeon', 35],  // T1

  // ── farmersdelight:chests/fd_village_butcher ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_butcher', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_village_butcher', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_village_butcher', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_butcher', 7],  // T5
  ['sweets_and_confections', 'farmersdelight:chests/fd_village_butcher', 11],  // T4

  // ── farmersdelight:chests/fd_village_desert_house ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_desert_house', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_village_desert_house', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_village_desert_house', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_desert_house', 7],  // T5
  ['cuisine_middle_eastern', 'farmersdelight:chests/fd_village_desert_house', 17],  // T3

  // ── farmersdelight:chests/fd_village_plains_house ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_plains_house', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_village_plains_house', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_village_plains_house', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_plains_house', 7],  // T5
  ['sweets_and_confections', 'farmersdelight:chests/fd_village_plains_house', 11],  // T4

  // ── farmersdelight:chests/fd_village_savanna_house ──
  ['agronomic_path', 'farmersdelight:chests/fd_village_savanna_house', 35],  // T1
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_savanna_house', 7],  // T5
  ['bakery', 'farmersdelight:chests/fd_village_savanna_house', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_savanna_house', 7],  // T5
  ['beehive_logistics', 'farmersdelight:chests/fd_village_savanna_house', 17],  // T3

  // ── farmersdelight:chests/fd_village_snowy_house ──
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_snowy_house', 7],  // T5
  ['agronomic_path', 'farmersdelight:chests/fd_village_snowy_house', 35],  // T1
  ['bakery', 'farmersdelight:chests/fd_village_snowy_house', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_snowy_house', 7],  // T5
  ['sweets_and_confections', 'farmersdelight:chests/fd_village_snowy_house', 11],  // T4

  // ── farmersdelight:chests/fd_village_taiga_house ──
  ['agronomic_path', 'farmersdelight:chests/fd_village_taiga_house', 35],  // T1
  ['dairy_and_cheese', 'farmersdelight:chests/fd_village_taiga_house', 7],  // T5
  ['bakery', 'farmersdelight:chests/fd_village_taiga_house', 35],  // T1
  ['soups_and_stews', 'farmersdelight:chests/fd_village_taiga_house', 7],  // T5
  ['furniturecraft', 'farmersdelight:chests/fd_village_taiga_house', 25],  // T2

  // ── frightsdelight:chests/frd_bastion_bridge ──
  ['arsenal_iron_blades', 'frightsdelight:chests/frd_bastion_bridge', 4],  // T6
  ['arsenal_iron_polearms', 'frightsdelight:chests/frd_bastion_bridge', 4],  // T6
  ['bakery', 'frightsdelight:chests/frd_bastion_bridge', 35],  // T1
  ['ballistics_engineering', 'frightsdelight:chests/frd_bastion_bridge', 11],  // T4
  ['butchery', 'frightsdelight:chests/frd_bastion_bridge', 35],  // T1

  // ── frightsdelight:chests/frd_bastion_other ──
  ['arsenal_iron_blades', 'frightsdelight:chests/frd_bastion_other', 4],  // T6
  ['arsenal_iron_polearms', 'frightsdelight:chests/frd_bastion_other', 4],  // T6
  ['bakery', 'frightsdelight:chests/frd_bastion_other', 35],  // T1
  ['ballistics_engineering', 'frightsdelight:chests/frd_bastion_other', 11],  // T4
  ['butchery', 'frightsdelight:chests/frd_bastion_other', 35],  // T1

  // ── frightsdelight:chests/frd_bastion_treasure ──
  ['arsenal_iron_blades', 'frightsdelight:chests/frd_bastion_treasure', 4],  // T6
  ['arsenal_iron_polearms', 'frightsdelight:chests/frd_bastion_treasure', 4],  // T6
  ['arsenal_legendary_blades', 'frightsdelight:chests/frd_bastion_treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'frightsdelight:chests/frd_bastion_treasure', 7],  // T5
  ['bakery', 'frightsdelight:chests/frd_bastion_treasure', 35],  // T1

  // ── ice_and_fire_spellbooks:chests/fodaan_mask ──
  ['arcane_codex', 'ice_and_fire_spellbooks:chests/fodaan_mask', 4],  // T6
  ['cuisine_pyromantic', 'ice_and_fire_spellbooks:chests/fodaan_mask', 17],  // T3

  // ── ice_and_fire_spellbooks:chests/toornahkriin_mask ──
  ['arcane_codex', 'ice_and_fire_spellbooks:chests/toornahkriin_mask', 4],  // T6
  ['cuisine_pyromantic', 'ice_and_fire_spellbooks:chests/toornahkriin_mask', 17],  // T3

  // ── ice_and_fire_spellbooks:chests/vulnilviir_mask ──
  ['arcane_codex', 'ice_and_fire_spellbooks:chests/vulnilviir_mask', 4],  // T6
  ['cuisine_pyromantic', 'ice_and_fire_spellbooks:chests/vulnilviir_mask', 17],  // T3

  // ── ice_and_fire_spellbooks:chests/vulonqo_mask ──
  ['arcane_codex', 'ice_and_fire_spellbooks:chests/vulonqo_mask', 4],  // T6
  ['cuisine_pyromantic', 'ice_and_fire_spellbooks:chests/vulonqo_mask', 17],  // T3

  // ── ice_and_fire_spellbooks:chests/vulsilah_mask ──
  ['arcane_codex', 'ice_and_fire_spellbooks:chests/vulsilah_mask', 4],  // T6
  ['cuisine_pyromantic', 'ice_and_fire_spellbooks:chests/vulsilah_mask', 17],  // T3

  // ── integrated_stronghold:chests/armory ──
  ['arcane_codex', 'integrated_stronghold:chests/armory', 4],  // T6
  ['arsenal_iron_blades', 'integrated_stronghold:chests/armory', 4],  // T6
  ['arsenal_iron_ranged', 'integrated_stronghold:chests/armory', 7],  // T5
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/armory', 7],  // T5
  ['arsenal_master_ranged', 'integrated_stronghold:chests/armory', 17],  // T3

  // ── integrated_stronghold:chests/bedroom ──
  ['arcane_codex', 'integrated_stronghold:chests/bedroom', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/bedroom', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/bedroom', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/bedroom', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/bedroom', 17],  // T3

  // ── integrated_stronghold:chests/brewing ──
  ['arcane_codex', 'integrated_stronghold:chests/brewing', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/brewing', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/brewing', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/brewing', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/brewing', 17],  // T3

  // ── integrated_stronghold:chests/crypt ──
  ['arcane_codex', 'integrated_stronghold:chests/crypt', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/crypt', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/crypt', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/crypt', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/crypt', 17],  // T3

  // ── integrated_stronghold:chests/dining_hall ──
  ['arcane_codex', 'integrated_stronghold:chests/dining_hall', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/dining_hall', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/dining_hall', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/dining_hall', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/dining_hall', 17],  // T3

  // ── integrated_stronghold:chests/enchanting ──
  ['arcane_codex', 'integrated_stronghold:chests/enchanting', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/enchanting', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/enchanting', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/enchanting', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/enchanting', 17],  // T3

  // ── integrated_stronghold:chests/farm ──
  ['agronomic_path', 'integrated_stronghold:chests/farm', 35],  // T1
  ['arcane_codex', 'integrated_stronghold:chests/farm', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/farm', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/farm', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/farm', 4],  // T6

  // ── integrated_stronghold:chests/grand_library ──
  ['arcane_codex', 'integrated_stronghold:chests/grand_library', 4],  // T6
  ['eye_synthesis', 'integrated_stronghold:chests/grand_library', 11],  // T4
  ['runesmithing', 'integrated_stronghold:chests/grand_library', 7],  // T5
  ['scrollcasting', 'integrated_stronghold:chests/grand_library', 7],  // T5
  ['architectural_mastery', 'integrated_stronghold:chests/grand_library', 11],  // T4

  // ── integrated_stronghold:chests/intersection ──
  ['arcane_codex', 'integrated_stronghold:chests/intersection', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/intersection', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/intersection', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/intersection', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/intersection', 17],  // T3

  // ── integrated_stronghold:chests/maze ──
  ['arcane_codex', 'integrated_stronghold:chests/maze', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/maze', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/maze', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/maze', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/maze', 17],  // T3

  // ── integrated_stronghold:chests/mine ──
  ['arcane_codex', 'integrated_stronghold:chests/mine', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/mine', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/mine', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/mine', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/mine', 17],  // T3

  // ── integrated_stronghold:chests/nether_portal ──
  ['arcane_codex', 'integrated_stronghold:chests/nether_portal', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/nether_portal', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/nether_portal', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/nether_portal', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/nether_portal', 17],  // T3

  // ── integrated_stronghold:chests/prison ──
  ['arcane_codex', 'integrated_stronghold:chests/prison', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/prison', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/prison', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/prison', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/prison', 17],  // T3

  // ── integrated_stronghold:chests/sanctorum ──
  ['arcane_codex', 'integrated_stronghold:chests/sanctorum', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/sanctorum', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/sanctorum', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/sanctorum', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/sanctorum', 17],  // T3

  // ── integrated_stronghold:chests/secret_lab ──
  ['arcane_codex', 'integrated_stronghold:chests/secret_lab', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/secret_lab', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/secret_lab', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/secret_lab', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/secret_lab', 17],  // T3

  // ── integrated_stronghold:chests/storage ──
  ['arcane_codex', 'integrated_stronghold:chests/storage', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/storage', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/storage', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/storage', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/storage', 17],  // T3

  // ── integrated_stronghold:chests/stronghold ──
  ['arcane_codex', 'integrated_stronghold:chests/stronghold', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/stronghold', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/stronghold', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/stronghold', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/stronghold', 17],  // T3

  // ── integrated_stronghold:chests/torture_chamber ──
  ['arcane_codex', 'integrated_stronghold:chests/torture_chamber', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/torture_chamber', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/torture_chamber', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/torture_chamber', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/torture_chamber', 17],  // T3

  // ── integrated_stronghold:chests/treasure ──
  ['arcane_codex', 'integrated_stronghold:chests/treasure', 4],  // T6
  ['arsenal_legendary_blades', 'integrated_stronghold:chests/treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'integrated_stronghold:chests/treasure', 7],  // T5
  ['arsenal_master_blades', 'integrated_stronghold:chests/treasure', 4],  // T6
  ['arsenal_master_ranged', 'integrated_stronghold:chests/treasure', 17],  // T3

  // ── irons_spellbooks:chests/additional_ancient_city_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_ancient_city_loot', 4],  // T6
  ['abyssal_age', 'irons_spellbooks:chests/additional_ancient_city_loot', 2],  // T3
  ['abyssal_chasm', 'irons_spellbooks:chests/additional_ancient_city_loot', 11],  // T4
  ['archaeology_mastery', 'irons_spellbooks:chests/additional_ancient_city_loot', 35],  // T1
  ['atomic_engineering', 'irons_spellbooks:chests/additional_ancient_city_loot', 11],  // T4

  // ── irons_spellbooks:chests/additional_end_city_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_end_city_loot', 4],  // T6
  ['arsenal_legendary_blades', 'irons_spellbooks:chests/additional_end_city_loot', 7],  // T5
  ['arsenal_legendary_polearms', 'irons_spellbooks:chests/additional_end_city_loot', 7],  // T5
  ['arsenal_master_blades', 'irons_spellbooks:chests/additional_end_city_loot', 4],  // T6
  ['arsenal_master_ranged', 'irons_spellbooks:chests/additional_end_city_loot', 17],  // T3

  // ── irons_spellbooks:chests/additional_generic_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_generic_loot', 4],  // T6

  // ── irons_spellbooks:chests/additional_good_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_good_loot', 4],  // T6

  // ── irons_spellbooks:chests/additional_library_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_library_loot', 4],  // T6
  ['alchemy', 'irons_spellbooks:chests/additional_library_loot', 7],  // T5
  ['architectural_mastery', 'irons_spellbooks:chests/additional_library_loot', 11],  // T4
  ['bookshelf_mastery', 'irons_spellbooks:chests/additional_library_loot', 11],  // T4
  ['cartography_advanced', 'irons_spellbooks:chests/additional_library_loot', 7],  // T5

  // ── irons_spellbooks:chests/additional_nether_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_nether_loot', 4],  // T6
  ['cuisine_nether', 'irons_spellbooks:chests/additional_nether_loot', 11],  // T4
  ['cuisine_pyromantic', 'irons_spellbooks:chests/additional_nether_loot', 17],  // T3
  ['fire_school', 'irons_spellbooks:chests/additional_nether_loot', 7],  // T5
  ['infernal_age', 'irons_spellbooks:chests/additional_nether_loot', 2],  // T3

  // ── irons_spellbooks:chests/additional_treasure_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/additional_treasure_loot', 4],  // T6

  // ── irons_spellbooks:chests/battleground/burial_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/battleground/burial_loot', 4],  // T6

  // ── irons_spellbooks:chests/battleground/piglin_camp ──
  ['arcane_codex', 'irons_spellbooks:chests/battleground/piglin_camp', 4],  // T6
  ['alchemy', 'irons_spellbooks:chests/battleground/piglin_camp', 7],  // T5
  ['cuisine_nether', 'irons_spellbooks:chests/battleground/piglin_camp', 11],  // T4

  // ── irons_spellbooks:chests/bookshelf_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/bookshelf_loot', 4],  // T6
  ['scrollcasting', 'irons_spellbooks:chests/bookshelf_loot', 7],  // T5

  // ── irons_spellbooks:chests/catacombs/armory_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/armory_loot', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/armory_loot', 35],  // T1
  ['arsenal_iron_blades', 'irons_spellbooks:chests/catacombs/armory_loot', 4],  // T6
  ['arsenal_iron_ranged', 'irons_spellbooks:chests/catacombs/armory_loot', 7],  // T5
  ['ballistics_engineering', 'irons_spellbooks:chests/catacombs/armory_loot', 11],  // T4

  // ── irons_spellbooks:chests/catacombs/coffin_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/coffin_loot', 4],  // T6
  ['blood_school', 'irons_spellbooks:chests/catacombs/coffin_loot', 7],  // T5
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/coffin_loot', 35],  // T1
  ['eldritch_school', 'irons_spellbooks:chests/catacombs/coffin_loot', 7],  // T5

  // ── irons_spellbooks:chests/catacombs/crypt_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/crypt_loot', 4],  // T6
  ['blood_school', 'irons_spellbooks:chests/catacombs/crypt_loot', 7],  // T5
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/crypt_loot', 35],  // T1
  ['eldritch_school', 'irons_spellbooks:chests/catacombs/crypt_loot', 7],  // T5

  // ── irons_spellbooks:chests/catacombs/hidden_trough_treasure ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/hidden_trough_treasure', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/hidden_trough_treasure', 35],  // T1
  ['blood_school', 'irons_spellbooks:chests/catacombs/hidden_trough_treasure', 7],  // T5
  ['eldritch_school', 'irons_spellbooks:chests/catacombs/hidden_trough_treasure', 7],  // T5

  // ── irons_spellbooks:chests/catacombs/pot ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/pot', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/pot', 35],  // T1
  ['blood_school', 'irons_spellbooks:chests/catacombs/pot', 7],  // T5
  ['eldritch_school', 'irons_spellbooks:chests/catacombs/pot', 7],  // T5

  // ── irons_spellbooks:chests/catacombs/wall_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/catacombs/wall_loot', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/catacombs/wall_loot', 35],  // T1
  ['blood_school', 'irons_spellbooks:chests/catacombs/wall_loot', 7],  // T5
  ['eldritch_school', 'irons_spellbooks:chests/catacombs/wall_loot', 7],  // T5

  // ── irons_spellbooks:chests/citadel/citadel_bookshelf ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/citadel_bookshelf', 4],  // T6
  ['scrollcasting', 'irons_spellbooks:chests/citadel/citadel_bookshelf', 7],  // T5
  ['holy_school', 'irons_spellbooks:chests/citadel/citadel_bookshelf', 7],  // T5

  // ── irons_spellbooks:chests/citadel/citadel_tomes ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/citadel_tomes', 4],  // T6
  ['scrollcasting', 'irons_spellbooks:chests/citadel/citadel_tomes', 7],  // T5
  ['holy_school', 'irons_spellbooks:chests/citadel/citadel_tomes', 7],  // T5

  // ── irons_spellbooks:chests/citadel/citadel_vault ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/citadel_vault', 4],  // T6
  ['holy_school', 'irons_spellbooks:chests/citadel/citadel_vault', 7],  // T5
  ['scrollcasting', 'irons_spellbooks:chests/citadel/citadel_vault', 7],  // T5

  // ── irons_spellbooks:chests/citadel/rampart_chest ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/rampart_chest', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/citadel/rampart_chest', 35],  // T1
  ['holy_school', 'irons_spellbooks:chests/citadel/rampart_chest', 7],  // T5
  ['scrollcasting', 'irons_spellbooks:chests/citadel/rampart_chest', 7],  // T5

  // ── irons_spellbooks:chests/citadel/rampart_supplies ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/rampart_supplies', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/citadel/rampart_supplies', 35],  // T1
  ['holy_school', 'irons_spellbooks:chests/citadel/rampart_supplies', 7],  // T5
  ['scrollcasting', 'irons_spellbooks:chests/citadel/rampart_supplies', 7],  // T5

  // ── irons_spellbooks:chests/citadel/spawner_reward ──
  ['arcane_codex', 'irons_spellbooks:chests/citadel/spawner_reward', 4],  // T6
  ['holy_school', 'irons_spellbooks:chests/citadel/spawner_reward', 7],  // T5
  ['scrollcasting', 'irons_spellbooks:chests/citadel/spawner_reward', 7],  // T5

  // ── irons_spellbooks:chests/component_storage ──
  ['arcane_codex', 'irons_spellbooks:chests/component_storage', 4],  // T6
  ['alchemy', 'irons_spellbooks:chests/component_storage', 7],  // T5
  ['tonic_alchemy', 'irons_spellbooks:chests/component_storage', 7],  // T5

  // ── irons_spellbooks:chests/evoker_fort ──
  ['arcane_codex', 'irons_spellbooks:chests/evoker_fort', 4],  // T6
  ['evocation_school', 'irons_spellbooks:chests/evoker_fort', 7],  // T5

  // ── irons_spellbooks:chests/evoker_fort/guard_tower ──
  ['arcane_codex', 'irons_spellbooks:chests/evoker_fort/guard_tower', 4],  // T6
  ['evocation_school', 'irons_spellbooks:chests/evoker_fort/guard_tower', 7],  // T5
  ['falconry', 'irons_spellbooks:chests/evoker_fort/guard_tower', 4],  // T6
  ['lightning_school', 'irons_spellbooks:chests/evoker_fort/guard_tower', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/evoker_fort/guard_tower', 17],  // T3

  // ── irons_spellbooks:chests/filler_storage_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/filler_storage_loot', 4],  // T6
  ['alchemy', 'irons_spellbooks:chests/filler_storage_loot', 7],  // T5

  // ── irons_spellbooks:chests/generic_magic_treasure ──
  ['arcane_codex', 'irons_spellbooks:chests/generic_magic_treasure', 4],  // T6

  // ── irons_spellbooks:chests/ice_spider_den/basement ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/basement', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/basement', 7],  // T5
  ['ice_school', 'irons_spellbooks:chests/ice_spider_den/basement', 7],  // T5

  // ── irons_spellbooks:chests/ice_spider_den/cask ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/cask', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/cask', 7],  // T5
  ['ice_school', 'irons_spellbooks:chests/ice_spider_den/cask', 7],  // T5
  ['vinification', 'irons_spellbooks:chests/ice_spider_den/cask', 35],  // T1

  // ── irons_spellbooks:chests/ice_spider_den/dungeon ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/dungeon', 4],  // T6
  ['arsenal_iron_blades', 'irons_spellbooks:chests/ice_spider_den/dungeon', 4],  // T6
  ['arsenal_master_polearms', 'irons_spellbooks:chests/ice_spider_den/dungeon', 7],  // T5
  ['arsenal_master_ranged', 'irons_spellbooks:chests/ice_spider_den/dungeon', 17],  // T3
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/dungeon', 7],  // T5

  // ── irons_spellbooks:chests/ice_spider_den/pot ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/pot', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/ice_spider_den/pot', 35],  // T1
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/pot', 7],  // T5
  ['ice_school', 'irons_spellbooks:chests/ice_spider_den/pot', 7],  // T5

  // ── irons_spellbooks:chests/ice_spider_den/spawner_reward ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/spawner_reward', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/spawner_reward', 7],  // T5
  ['ice_school', 'irons_spellbooks:chests/ice_spider_den/spawner_reward', 7],  // T5

  // ── irons_spellbooks:chests/ice_spider_den/tower ──
  ['arcane_codex', 'irons_spellbooks:chests/ice_spider_den/tower', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/ice_spider_den/tower', 7],  // T5
  ['falconry', 'irons_spellbooks:chests/ice_spider_den/tower', 4],  // T6
  ['ice_school', 'irons_spellbooks:chests/ice_spider_den/tower', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/ice_spider_den/tower', 17],  // T3

  // ── irons_spellbooks:chests/impaled_icebreaker/captain_quarters ──
  ['arcane_codex', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters', 7],  // T5
  ['ice_school', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters', 7],  // T5

  // ── irons_spellbooks:chests/impaled_icebreaker/food_barrel ──
  ['arcane_codex', 'irons_spellbooks:chests/impaled_icebreaker/food_barrel', 4],  // T6
  ['bakery', 'irons_spellbooks:chests/impaled_icebreaker/food_barrel', 35],  // T1
  ['butchery', 'irons_spellbooks:chests/impaled_icebreaker/food_barrel', 35],  // T1
  ['cuisine_alpine', 'irons_spellbooks:chests/impaled_icebreaker/food_barrel', 7],  // T5
  ['cuisine_rustic', 'irons_spellbooks:chests/impaled_icebreaker/food_barrel', 7],  // T5

  // ── irons_spellbooks:chests/magic_bookshelf_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/magic_bookshelf_loot', 4],  // T6
  ['scrollcasting', 'irons_spellbooks:chests/magic_bookshelf_loot', 7],  // T5
  ['tonic_alchemy', 'irons_spellbooks:chests/magic_bookshelf_loot', 7],  // T5

  // ── irons_spellbooks:chests/mangrove_hut ──
  ['arcane_codex', 'irons_spellbooks:chests/mangrove_hut', 4],  // T6
  ['nature_school', 'irons_spellbooks:chests/mangrove_hut', 7],  // T5

  // ── irons_spellbooks:chests/mangrove_hut/hidden_potion_storage ──
  ['arcane_codex', 'irons_spellbooks:chests/mangrove_hut/hidden_potion_storage', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/mangrove_hut/hidden_potion_storage', 35],  // T1
  ['nature_school', 'irons_spellbooks:chests/mangrove_hut/hidden_potion_storage', 7],  // T5
  ['tonic_alchemy', 'irons_spellbooks:chests/mangrove_hut/hidden_potion_storage', 7],  // T5

  // ── irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage ──
  ['arcane_codex', 'irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage', 35],  // T1
  ['nature_school', 'irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage', 7],  // T5
  ['tonic_alchemy', 'irons_spellbooks:chests/mangrove_hut/potion_ingredient_storage', 7],  // T5

  // ── irons_spellbooks:chests/mountain_tower/ice_barrel ──
  ['arcane_codex', 'irons_spellbooks:chests/mountain_tower/ice_barrel', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/mountain_tower/ice_barrel', 7],  // T5
  ['falconry', 'irons_spellbooks:chests/mountain_tower/ice_barrel', 4],  // T6
  ['lightning_school', 'irons_spellbooks:chests/mountain_tower/ice_barrel', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/mountain_tower/ice_barrel', 17],  // T3

  // ── irons_spellbooks:chests/mountain_tower/mountain_tower ──
  ['arcane_codex', 'irons_spellbooks:chests/mountain_tower/mountain_tower', 4],  // T6
  ['cuisine_alpine', 'irons_spellbooks:chests/mountain_tower/mountain_tower', 7],  // T5
  ['falconry', 'irons_spellbooks:chests/mountain_tower/mountain_tower', 4],  // T6
  ['lightning_school', 'irons_spellbooks:chests/mountain_tower/mountain_tower', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/mountain_tower/mountain_tower', 17],  // T3

  // ── irons_spellbooks:chests/priest_house ──
  ['arcane_codex', 'irons_spellbooks:chests/priest_house', 4],  // T6
  ['agronomic_path', 'irons_spellbooks:chests/priest_house', 35],  // T1
  ['bakery', 'irons_spellbooks:chests/priest_house', 35],  // T1
  ['dairy_and_cheese', 'irons_spellbooks:chests/priest_house', 7],  // T5
  ['furniturecraft', 'irons_spellbooks:chests/priest_house', 25],  // T2

  // ── irons_spellbooks:chests/pyromancer_tower/burnt_chest ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/burnt_chest', 4],  // T6
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/burnt_chest', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/burnt_chest', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/burnt_chest', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/pyromancer_tower/burnt_chest', 17],  // T3

  // ── irons_spellbooks:chests/pyromancer_tower/fire_ale_cask ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_cask', 4],  // T6
  ['cuisine_pyromantic', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_cask', 17],  // T3
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_cask', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_cask', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_cask', 7],  // T5

  // ── irons_spellbooks:chests/pyromancer_tower/fire_ale_trove ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_trove', 4],  // T6
  ['cuisine_pyromantic', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_trove', 17],  // T3
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_trove', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_trove', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/fire_ale_trove', 7],  // T5

  // ── irons_spellbooks:chests/pyromancer_tower/old_cask ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/old_cask', 4],  // T6
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/old_cask', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/old_cask', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/old_cask', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/pyromancer_tower/old_cask', 17],  // T3

  // ── irons_spellbooks:chests/pyromancer_tower/pot ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/pot', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/pyromancer_tower/pot', 35],  // T1
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/pot', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/pot', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/pot', 7],  // T5

  // ── irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage', 4],  // T6
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_basic_storage', 17],  // T3

  // ── irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies ──
  ['arcane_codex', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies', 4],  // T6
  ['falconry', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies', 4],  // T6
  ['fire_school', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies', 7],  // T5
  ['lightning_school', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies', 7],  // T5
  ['music_speakers', 'irons_spellbooks:chests/pyromancer_tower/pyromancer_supplies', 17],  // T3

  // ── irons_spellbooks:chests/sewer_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/sewer_loot', 4],  // T6

  // ── irons_spellbooks:chests/trial_chambers/additional_ominous_spawner_consumable_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/additional_ominous_spawner_consumable_loot', 4],  // T6
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/additional_ominous_spawner_consumable_loot', 25],  // T2

  // ── irons_spellbooks:chests/trial_chambers/additional_ominous_vault_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/additional_ominous_vault_loot', 4],  // T6
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/additional_ominous_vault_loot', 25],  // T2

  // ── irons_spellbooks:chests/trial_chambers/additional_regular_spawner_consumable_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/additional_regular_spawner_consumable_loot', 4],  // T6
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/additional_regular_spawner_consumable_loot', 25],  // T2

  // ── irons_spellbooks:chests/trial_chambers/additional_regular_vault_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/additional_regular_vault_loot', 4],  // T6
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/additional_regular_vault_loot', 25],  // T2

  // ── irons_spellbooks:chests/trial_chambers/additional_trial_chest_loot ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/additional_trial_chest_loot', 4],  // T6
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/additional_trial_chest_loot', 25],  // T2

  // ── irons_spellbooks:chests/trial_chambers/pot_replacement ──
  ['arcane_codex', 'irons_spellbooks:chests/trial_chambers/pot_replacement', 4],  // T6
  ['archaeology_mastery', 'irons_spellbooks:chests/trial_chambers/pot_replacement', 35],  // T1
  ['trim_smithing', 'irons_spellbooks:chests/trial_chambers/pot_replacement', 25],  // T2

  // ── irons_spellbooks:chests/wheat ──
  ['arcane_codex', 'irons_spellbooks:chests/wheat', 4],  // T6

  // ── letsdoaddon-structures:chests/barn ──
  ['agronomic_path', 'letsdoaddon-structures:chests/barn', 35],  // T1

  // ── letsdoaddon-structures:chests/barn_up ──
  ['agronomic_path', 'letsdoaddon-structures:chests/barn_up', 35],  // T1

  // ── letsdoaddon-structures:chests/crimson_vinery ──
  ['vinification', 'letsdoaddon-structures:chests/crimson_vinery', 35],  // T1

  // ── letsdoaddon-structures:chests/illager_camp_mine ──
  ['arsenal_iron_blades', 'letsdoaddon-structures:chests/illager_camp_mine', 4],  // T6
  ['arsenal_iron_polearms', 'letsdoaddon-structures:chests/illager_camp_mine', 4],  // T6
  ['arsenal_iron_ranged', 'letsdoaddon-structures:chests/illager_camp_mine', 7],  // T5

  // ── letsdoaddon-structures:chests/illager_camp_tent ──
  ['arsenal_iron_blades', 'letsdoaddon-structures:chests/illager_camp_tent', 4],  // T6
  ['arsenal_iron_polearms', 'letsdoaddon-structures:chests/illager_camp_tent', 4],  // T6
  ['arsenal_iron_ranged', 'letsdoaddon-structures:chests/illager_camp_tent', 7],  // T5

  // ── letsdoaddon-structures:chests/mangrove_hut ──
  ['nature_school', 'letsdoaddon-structures:chests/mangrove_hut', 7],  // T5

  // ── letsdoaddon-structures:chests/mangrove_hut_outpost/floor/1 ──
  ['nature_school', 'letsdoaddon-structures:chests/mangrove_hut_outpost/floor/1', 7],  // T5

  // ── letsdoaddon-structures:chests/mangrove_hut_outpost/floor/2 ──
  ['nature_school', 'letsdoaddon-structures:chests/mangrove_hut_outpost/floor/2', 7],  // T5

  // ── letsdoaddon-structures:chests/mangrove_hut_outpost/floor/3 ──
  ['nature_school', 'letsdoaddon-structures:chests/mangrove_hut_outpost/floor/3', 7],  // T5

  // ── letsdoaddon-structures:chests/vinery ──
  ['vinification', 'letsdoaddon-structures:chests/vinery', 35],  // T1

  // ── letsdoaddon-structures:chests/warped_vinery ──
  ['vinification', 'letsdoaddon-structures:chests/warped_vinery', 35],  // T1

  // ── luminousworld:chests/desertruin ──
  ['archaeology_mastery', 'luminousworld:chests/desertruin', 35],  // T1
  ['cuisine_middle_eastern', 'luminousworld:chests/desertruin', 17],  // T3

  // ── mebahelcreaturesdwarven:chests/dwemer_ruin_common ──
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_ruin_common', 7],  // T5
  ['arsenal_legendary_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_common', 7],  // T5
  ['arsenal_master_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_common', 4],  // T6
  ['atomic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_ruin_common', 11],  // T4
  ['cataclysm_codex', 'mebahelcreaturesdwarven:chests/dwemer_ruin_common', 4],  // T6

  // ── mebahelcreaturesdwarven:chests/dwemer_ruin_epic ──
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic', 7],  // T5
  ['arsenal_legendary_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic', 7],  // T5
  ['arsenal_master_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic', 4],  // T6
  ['atomic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic', 11],  // T4
  ['cataclysm_codex', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic', 4],  // T6

  // ── mebahelcreaturesdwarven:chests/dwemer_ruin_rare ──
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_ruin_rare', 7],  // T5
  ['arsenal_legendary_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_rare', 7],  // T5
  ['arsenal_master_blades', 'mebahelcreaturesdwarven:chests/dwemer_ruin_rare', 4],  // T6
  ['atomic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_ruin_rare', 11],  // T4
  ['cataclysm_codex', 'mebahelcreaturesdwarven:chests/dwemer_ruin_rare', 4],  // T6

  // ── mebahelcreaturesdwarven:chests/dwemer_tower ──
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_tower', 7],  // T5
  ['arcane_codex', 'mebahelcreaturesdwarven:chests/dwemer_tower', 4],  // T6
  ['arsenal_legendary_blades', 'mebahelcreaturesdwarven:chests/dwemer_tower', 7],  // T5
  ['arsenal_master_blades', 'mebahelcreaturesdwarven:chests/dwemer_tower', 4],  // T6
  ['atomic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_tower', 11],  // T4

  // ── minecraft:chests/abandoned_mineshaft ──
  ['arsenal_iron_blades', 'minecraft:chests/abandoned_mineshaft', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/abandoned_mineshaft', 4],  // T6
  ['bestiary_iceandfire', 'minecraft:chests/abandoned_mineshaft', 11],  // T4
  ['kindled_age', 'minecraft:chests/abandoned_mineshaft', 2],  // T1
  ['kinetic_engineering', 'minecraft:chests/abandoned_mineshaft', 17],  // T3

  // ── minecraft:chests/ancient_city ──
  ['abyssal_age', 'minecraft:chests/ancient_city', 2],  // T3
  ['abyssal_chasm', 'minecraft:chests/ancient_city', 11],  // T4
  ['archaeology_mastery', 'minecraft:chests/ancient_city', 35],  // T1
  ['atomic_engineering', 'minecraft:chests/ancient_city', 11],  // T4
  ['cuisine_subterranean', 'minecraft:chests/ancient_city', 4],  // T6

  // ── minecraft:chests/ancient_city_ice_box ──
  ['abyssal_age', 'minecraft:chests/ancient_city_ice_box', 2],  // T3
  ['abyssal_chasm', 'minecraft:chests/ancient_city_ice_box', 11],  // T4
  ['archaeology_mastery', 'minecraft:chests/ancient_city_ice_box', 35],  // T1
  ['atomic_engineering', 'minecraft:chests/ancient_city_ice_box', 11],  // T4
  ['cuisine_subterranean', 'minecraft:chests/ancient_city_ice_box', 4],  // T6

  // ── minecraft:chests/bastion_bridge ──
  ['arsenal_iron_blades', 'minecraft:chests/bastion_bridge', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/bastion_bridge', 4],  // T6
  ['ballistics_engineering', 'minecraft:chests/bastion_bridge', 11],  // T4
  ['cannoneer', 'minecraft:chests/bastion_bridge', 17],  // T3
  ['cuisine_nether', 'minecraft:chests/bastion_bridge', 11],  // T4

  // ── minecraft:chests/bastion_hoglin_stable ──
  ['arsenal_iron_blades', 'minecraft:chests/bastion_hoglin_stable', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/bastion_hoglin_stable', 4],  // T6
  ['ballistics_engineering', 'minecraft:chests/bastion_hoglin_stable', 11],  // T4
  ['cannoneer', 'minecraft:chests/bastion_hoglin_stable', 17],  // T3
  ['cuisine_nether', 'minecraft:chests/bastion_hoglin_stable', 11],  // T4

  // ── minecraft:chests/bastion_other ──
  ['arsenal_iron_blades', 'minecraft:chests/bastion_other', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/bastion_other', 4],  // T6
  ['ballistics_engineering', 'minecraft:chests/bastion_other', 11],  // T4
  ['cannoneer', 'minecraft:chests/bastion_other', 17],  // T3
  ['cuisine_nether', 'minecraft:chests/bastion_other', 11],  // T4

  // ── minecraft:chests/bastion_treasure ──
  ['arsenal_iron_blades', 'minecraft:chests/bastion_treasure', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/bastion_treasure', 4],  // T6
  ['arsenal_legendary_blades', 'minecraft:chests/bastion_treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'minecraft:chests/bastion_treasure', 7],  // T5
  ['ballistics_engineering', 'minecraft:chests/bastion_treasure', 11],  // T4

  // ── minecraft:chests/buried_treasure ──
  ['cartography_advanced', 'minecraft:chests/buried_treasure', 7],  // T5
  ['numismatic_mechanisms', 'minecraft:chests/buried_treasure', 17],  // T3
  ['seafood_mastery', 'minecraft:chests/buried_treasure', 11],  // T4

  // ── minecraft:chests/desert_pyramid ──
  ['archaeology_mastery', 'minecraft:chests/desert_pyramid', 35],  // T1
  ['cuisine_middle_eastern', 'minecraft:chests/desert_pyramid', 17],  // T3
  ['stoneworking', 'minecraft:chests/desert_pyramid', 35],  // T1

  // ── minecraft:chests/dye ──
  ['dyecraft', 'minecraft:chests/dye', 35],  // T1

  // ── minecraft:chests/end_city_treasure ──
  ['arsenal_legendary_blades', 'minecraft:chests/end_city_treasure', 7],  // T5
  ['arsenal_legendary_polearms', 'minecraft:chests/end_city_treasure', 7],  // T5
  ['arsenal_master_blades', 'minecraft:chests/end_city_treasure', 4],  // T6
  ['arsenal_master_ranged', 'minecraft:chests/end_city_treasure', 17],  // T3
  ['cataclysm_codex', 'minecraft:chests/end_city_treasure', 4],  // T6

  // ── minecraft:chests/igloo_chest ──
  ['cold_sweat_discipline', 'minecraft:chests/igloo_chest', 25],  // T2
  ['cuisine_alpine', 'minecraft:chests/igloo_chest', 7],  // T5
  ['cuisine_western_holiday', 'minecraft:chests/igloo_chest', 11],  // T4
  ['ice_school', 'minecraft:chests/igloo_chest', 7],  // T5

  // ── minecraft:chests/jungle_temple ──
  ['foraging_almanac', 'minecraft:chests/jungle_temple', 35],  // T1
  ['arcane_codex', 'minecraft:chests/jungle_temple', 4],  // T6
  ['archaeology_mastery', 'minecraft:chests/jungle_temple', 35],  // T1
  ['beehive_logistics', 'minecraft:chests/jungle_temple', 17],  // T3
  ['bestiary_alex_mobs', 'minecraft:chests/jungle_temple', 4],  // T6

  // ── minecraft:chests/mineral ──
  ['stoneworking', 'minecraft:chests/mineral', 35],  // T1

  // ── minecraft:chests/miners_home ──
  ['agronomic_path', 'minecraft:chests/miners_home', 35],  // T1
  ['stoneworking', 'minecraft:chests/miners_home', 35],  // T1

  // ── minecraft:chests/miners_ruined_shack ──
  ['stoneworking', 'minecraft:chests/miners_ruined_shack', 35],  // T1

  // ── minecraft:chests/nether_bridge ──
  ['cuisine_nether', 'minecraft:chests/nether_bridge', 11],  // T4
  ['cuisine_pyromantic', 'minecraft:chests/nether_bridge', 17],  // T3
  ['fire_school', 'minecraft:chests/nether_bridge', 7],  // T5
  ['infernal_age', 'minecraft:chests/nether_bridge', 2],  // T3
  ['soul_black_smith', 'minecraft:chests/nether_bridge', 7],  // T5

  // ── minecraft:chests/nether_totemloot ──
  ['cuisine_nether', 'minecraft:chests/nether_totemloot', 11],  // T4
  ['cuisine_pyromantic', 'minecraft:chests/nether_totemloot', 17],  // T3
  ['fire_school', 'minecraft:chests/nether_totemloot', 7],  // T5
  ['infernal_age', 'minecraft:chests/nether_totemloot', 2],  // T3
  ['soul_black_smith', 'minecraft:chests/nether_totemloot', 7],  // T5

  // ── minecraft:chests/pillager_outpost ──
  ['arsenal_iron_blades', 'minecraft:chests/pillager_outpost', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/pillager_outpost', 4],  // T6
  ['arsenal_iron_ranged', 'minecraft:chests/pillager_outpost', 7],  // T5
  ['banner_heraldry', 'minecraft:chests/pillager_outpost', 11],  // T4
  ['kinetic_engineering', 'minecraft:chests/pillager_outpost', 17],  // T3

  // ── minecraft:chests/rich_cart ──
  ['numismatic_mechanisms', 'minecraft:chests/rich_cart', 17],  // T3

  // ── minecraft:chests/ruined_library ──
  ['alchemy', 'minecraft:chests/ruined_library', 7],  // T5
  ['arcane_codex', 'minecraft:chests/ruined_library', 4],  // T6
  ['architectural_mastery', 'minecraft:chests/ruined_library', 11],  // T4
  ['bookshelf_mastery', 'minecraft:chests/ruined_library', 11],  // T4
  ['cartography_advanced', 'minecraft:chests/ruined_library', 7],  // T5

  // ── minecraft:chests/ruined_portal ──
  ['long_road', 'minecraft:chests/ruined_portal', 35],  // T1

  // ── minecraft:chests/shipwreck_map ──
  ['cartography_advanced', 'minecraft:chests/shipwreck_map', 7],  // T5
  ['seafood_mastery', 'minecraft:chests/shipwreck_map', 11],  // T4
  ['cuisine_cornelia', 'minecraft:chests/shipwreck_map', 17],  // T3
  ['fishing_arts', 'minecraft:chests/shipwreck_map', 7],  // T5
  ['mob_faction_deep_ones', 'minecraft:chests/shipwreck_map', 11],  // T4

  // ── minecraft:chests/shipwreck_supply ──
  ['seafood_mastery', 'minecraft:chests/shipwreck_supply', 11],  // T4
  ['cartography_advanced', 'minecraft:chests/shipwreck_supply', 7],  // T5
  ['cuisine_cornelia', 'minecraft:chests/shipwreck_supply', 17],  // T3
  ['fishing_arts', 'minecraft:chests/shipwreck_supply', 7],  // T5
  ['mob_faction_deep_ones', 'minecraft:chests/shipwreck_supply', 11],  // T4

  // ── minecraft:chests/shipwreck_treasure ──
  ['seafood_mastery', 'minecraft:chests/shipwreck_treasure', 11],  // T4
  ['cartography_advanced', 'minecraft:chests/shipwreck_treasure', 7],  // T5
  ['cuisine_cornelia', 'minecraft:chests/shipwreck_treasure', 17],  // T3
  ['fishing_arts', 'minecraft:chests/shipwreck_treasure', 7],  // T5
  ['mob_faction_deep_ones', 'minecraft:chests/shipwreck_treasure', 11],  // T4

  // ── minecraft:chests/simple_dungeon ──
  ['arsenal_iron_blades', 'minecraft:chests/simple_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'minecraft:chests/simple_dungeon', 4],  // T6
  ['arsenal_master_polearms', 'minecraft:chests/simple_dungeon', 7],  // T5
  ['arsenal_master_ranged', 'minecraft:chests/simple_dungeon', 17],  // T3
  ['heavy_plate_discipline', 'minecraft:chests/simple_dungeon', 7],  // T5

  // ── minecraft:chests/stone ──
  ['stoneworking', 'minecraft:chests/stone', 35],  // T1

  // ── minecraft:chests/stronghold_corridor ──
  ['arcane_codex', 'minecraft:chests/stronghold_corridor', 4],  // T6
  ['arsenal_legendary_blades', 'minecraft:chests/stronghold_corridor', 7],  // T5
  ['arsenal_legendary_polearms', 'minecraft:chests/stronghold_corridor', 7],  // T5
  ['arsenal_master_blades', 'minecraft:chests/stronghold_corridor', 4],  // T6
  ['arsenal_master_ranged', 'minecraft:chests/stronghold_corridor', 17],  // T3

  // ── minecraft:chests/stronghold_crossing ──
  ['arcane_codex', 'minecraft:chests/stronghold_crossing', 4],  // T6
  ['arsenal_legendary_blades', 'minecraft:chests/stronghold_crossing', 7],  // T5
  ['arsenal_legendary_polearms', 'minecraft:chests/stronghold_crossing', 7],  // T5
  ['arsenal_master_blades', 'minecraft:chests/stronghold_crossing', 4],  // T6
  ['arsenal_master_ranged', 'minecraft:chests/stronghold_crossing', 17],  // T3

  // ── minecraft:chests/stronghold_library ──
  ['arcane_codex', 'minecraft:chests/stronghold_library', 4],  // T6
  ['eye_synthesis', 'minecraft:chests/stronghold_library', 11],  // T4
  ['runesmithing', 'minecraft:chests/stronghold_library', 7],  // T5
  ['scrollcasting', 'minecraft:chests/stronghold_library', 7],  // T5
  ['architectural_mastery', 'minecraft:chests/stronghold_library', 11],  // T4

  // ── minecraft:chests/trial_chambers/reward ──
  ['trim_smithing', 'minecraft:chests/trial_chambers/reward', 25],  // T2

  // ── minecraft:chests/trial_chambers/reward_ominous ──
  ['trim_smithing', 'minecraft:chests/trial_chambers/reward_ominous', 25],  // T2

  // ── minecraft:chests/trial_chambers/supply ──
  ['trim_smithing', 'minecraft:chests/trial_chambers/supply', 25],  // T2

  // ── minecraft:chests/underwater_ruin_big ──
  ['cuisine_cornelia', 'minecraft:chests/underwater_ruin_big', 17],  // T3
  ['mob_faction_deep_ones', 'minecraft:chests/underwater_ruin_big', 11],  // T4
  ['seafood_mastery', 'minecraft:chests/underwater_ruin_big', 11],  // T4
  ['water_age', 'minecraft:chests/underwater_ruin_big', 2],  // T1

  // ── minecraft:chests/underwater_ruin_small ──
  ['cuisine_cornelia', 'minecraft:chests/underwater_ruin_small', 17],  // T3
  ['mob_faction_deep_ones', 'minecraft:chests/underwater_ruin_small', 11],  // T4
  ['seafood_mastery', 'minecraft:chests/underwater_ruin_small', 11],  // T4
  ['water_age', 'minecraft:chests/underwater_ruin_small', 2],  // T1

  // ── minecraft:chests/village/village_armorer ──
  ['dyecraft', 'minecraft:chests/village/village_armorer', 35],  // T1
  ['agronomic_path', 'minecraft:chests/village/village_armorer', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_armorer', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_armorer', 2],  // T5
  ['metalworking', 'minecraft:chests/village/village_armorer', 4],  // T6

  // ── minecraft:chests/village/village_butcher ──
  ['agronomic_path', 'minecraft:chests/village/village_butcher', 35],  // T1
  ['bakery', 'minecraft:chests/village/village_butcher', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_butcher', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_butcher', 2],  // T5
  ['distillery', 'minecraft:chests/village/village_butcher', 17],  // T3

  // ── minecraft:chests/village/village_cartographer ──
  ['agronomic_path', 'minecraft:chests/village/village_cartographer', 35],  // T1
  ['backpackcraft', 'minecraft:chests/village/village_cartographer', 25],  // T2
  ['bakery', 'minecraft:chests/village/village_cartographer', 35],  // T1
  ['cartography_advanced', 'minecraft:chests/village/village_cartographer', 7],  // T5
  ['dairy_and_cheese', 'minecraft:chests/village/village_cartographer', 7],  // T5

  // ── minecraft:chests/village/village_desert_house ──
  ['agronomic_path', 'minecraft:chests/village/village_desert_house', 35],  // T1
  ['bakery', 'minecraft:chests/village/village_desert_house', 35],  // T1
  ['cuisine_middle_eastern', 'minecraft:chests/village/village_desert_house', 17],  // T3
  ['dairy_and_cheese', 'minecraft:chests/village/village_desert_house', 7],  // T5
  ['soups_and_stews', 'minecraft:chests/village/village_desert_house', 7],  // T5

  // ── minecraft:chests/village/village_fisher ──
  ['hearthkeepers_manual', 'minecraft:chests/village/village_fisher', 35],  // T1
  ['agronomic_path', 'minecraft:chests/village/village_fisher', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_fisher', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_fisher', 2],  // T5
  ['furniturecraft', 'minecraft:chests/village/village_fisher', 25],  // T2

  // ── minecraft:chests/village/village_fletcher ──
  ['dyecraft', 'minecraft:chests/village/village_fletcher', 35],  // T1
  ['agronomic_path', 'minecraft:chests/village/village_fletcher', 35],  // T1
  ['arsenal_iron_ranged', 'minecraft:chests/village/village_fletcher', 7],  // T5
  ['arsenal_master_ranged', 'minecraft:chests/village/village_fletcher', 17],  // T3
  ['backpackcraft', 'minecraft:chests/village/village_fletcher', 25],  // T2

  // ── minecraft:chests/village/village_jungle_house ──
  ['woodworking', 'minecraft:chests/village/village_jungle_house', 35],  // T1
  ['agronomic_path', 'minecraft:chests/village/village_jungle_house', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_jungle_house', 7],  // T5
  ['soups_and_stews', 'minecraft:chests/village/village_jungle_house', 7],  // T5
  ['bestiary_alex_mobs', 'minecraft:chests/village/village_jungle_house', 4],  // T6

  // ── minecraft:chests/village/village_mason ──
  ['dyecraft', 'minecraft:chests/village/village_mason', 35],  // T1
  ['stoneworking', 'minecraft:chests/village/village_mason', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_mason', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_mason', 2],  // T5
  ['sweets_and_confections', 'minecraft:chests/village/village_mason', 11],  // T4

  // ── minecraft:chests/village/village_plains_house ──
  ['agronomic_path', 'minecraft:chests/village/village_plains_house', 35],  // T1
  ['bakery', 'minecraft:chests/village/village_plains_house', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_plains_house', 7],  // T5
  ['soups_and_stews', 'minecraft:chests/village/village_plains_house', 7],  // T5
  ['furniturecraft', 'minecraft:chests/village/village_plains_house', 25],  // T2

  // ── minecraft:chests/village/village_savanna_house ──
  ['agronomic_path', 'minecraft:chests/village/village_savanna_house', 35],  // T1
  ['hearthkeepers_manual', 'minecraft:chests/village/village_savanna_house', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_savanna_house', 7],  // T5
  ['soups_and_stews', 'minecraft:chests/village/village_savanna_house', 7],  // T5
  ['beehive_logistics', 'minecraft:chests/village/village_savanna_house', 17],  // T3

  // ── minecraft:chests/village/village_shepherd ──
  ['agronomic_path', 'minecraft:chests/village/village_shepherd', 35],  // T1
  ['butchery', 'minecraft:chests/village/village_shepherd', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_shepherd', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_shepherd', 2],  // T5
  ['sweets_and_confections', 'minecraft:chests/village/village_shepherd', 11],  // T4

  // ── minecraft:chests/village/village_snowy_house ──
  ['agronomic_path', 'minecraft:chests/village/village_snowy_house', 35],  // T1
  ['bakery', 'minecraft:chests/village/village_snowy_house', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_snowy_house', 7],  // T5
  ['soups_and_stews', 'minecraft:chests/village/village_snowy_house', 7],  // T5
  ['cold_sweat_discipline', 'minecraft:chests/village/village_snowy_house', 25],  // T2

  // ── minecraft:chests/village/village_taiga_house ──
  ['agronomic_path', 'minecraft:chests/village/village_taiga_house', 35],  // T1
  ['hearthkeepers_manual', 'minecraft:chests/village/village_taiga_house', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_taiga_house', 7],  // T5
  ['furniturecraft', 'minecraft:chests/village/village_taiga_house', 25],  // T2
  ['soups_and_stews', 'minecraft:chests/village/village_taiga_house', 7],  // T5

  // ── minecraft:chests/village/village_tannery ──
  ['butchery', 'minecraft:chests/village/village_tannery', 35],  // T1
  ['leatherworking', 'minecraft:chests/village/village_tannery', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_tannery', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_tannery', 2],  // T5
  ['sweets_and_confections', 'minecraft:chests/village/village_tannery', 11],  // T4

  // ── minecraft:chests/village/village_temple ──
  ['agronomic_path', 'minecraft:chests/village/village_temple', 35],  // T1
  ['arcane_codex', 'minecraft:chests/village/village_temple', 4],  // T6
  ['bakery', 'minecraft:chests/village/village_temple', 35],  // T1
  ['banner_heraldry', 'minecraft:chests/village/village_temple', 11],  // T4
  ['dairy_and_cheese', 'minecraft:chests/village/village_temple', 7],  // T5

  // ── minecraft:chests/village/village_toolsmith ──
  ['metalworking', 'minecraft:chests/village/village_toolsmith', 4],  // T6
  ['agronomic_path', 'minecraft:chests/village/village_toolsmith', 35],  // T1
  ['bakery', 'minecraft:chests/village/village_toolsmith', 35],  // T1
  ['dairy_and_cheese', 'minecraft:chests/village/village_toolsmith', 7],  // T5
  ['fermentation_age', 'minecraft:chests/village/village_toolsmith', 2],  // T5

  // ── minecraft:chests/village/village_weaponsmith ──
  ['metalworking', 'minecraft:chests/village/village_weaponsmith', 4],  // T6
  ['agronomic_path', 'minecraft:chests/village/village_weaponsmith', 35],  // T1
  ['arsenal_iron_blades', 'minecraft:chests/village/village_weaponsmith', 4],  // T6
  ['arsenal_iron_ranged', 'minecraft:chests/village/village_weaponsmith', 7],  // T5
  ['bakery', 'minecraft:chests/village/village_weaponsmith', 35],  // T1

  // ── minecraft:chests/wood ──
  ['woodworking', 'minecraft:chests/wood', 35],  // T1

  // ── minecraft:chests/woodland_mansion ──
  ['architectural_mastery', 'minecraft:chests/woodland_mansion', 11],  // T4
  ['banner_heraldry', 'minecraft:chests/woodland_mansion', 11],  // T4
  ['companions_charter', 'minecraft:chests/woodland_mansion', 35],  // T1
  ['evocation_school', 'minecraft:chests/woodland_mansion', 7],  // T5
  ['falconry', 'minecraft:chests/woodland_mansion', 4],  // T6

  // ── miners_delight:chests/md_abandoned_mineshaft ──
  ['arsenal_iron_blades', 'miners_delight:chests/md_abandoned_mineshaft', 4],  // T6
  ['arsenal_iron_polearms', 'miners_delight:chests/md_abandoned_mineshaft', 4],  // T6
  ['bakery', 'miners_delight:chests/md_abandoned_mineshaft', 35],  // T1
  ['bestiary_iceandfire', 'miners_delight:chests/md_abandoned_mineshaft', 11],  // T4
  ['butchery', 'miners_delight:chests/md_abandoned_mineshaft', 35],  // T1

  // ── mowziesmobs:chests/monastery_chest ──
  ['alchemy', 'mowziesmobs:chests/monastery_chest', 7],  // T5
  ['arcane_codex', 'mowziesmobs:chests/monastery_chest', 4],  // T6
  ['architectural_mastery', 'mowziesmobs:chests/monastery_chest', 11],  // T4
  ['arsenal_legendary_blades', 'mowziesmobs:chests/monastery_chest', 7],  // T5
  ['arsenal_master_blades', 'mowziesmobs:chests/monastery_chest', 4],  // T6

  // ── mowziesmobs:chests/umvuthana_grove_chest ──
  ['arsenal_legendary_blades', 'mowziesmobs:chests/umvuthana_grove_chest', 7],  // T5
  ['arsenal_legendary_polearms', 'mowziesmobs:chests/umvuthana_grove_chest', 7],  // T5
  ['bestiary_alex_mobs', 'mowziesmobs:chests/umvuthana_grove_chest', 4],  // T6
  ['cataclysm_codex', 'mowziesmobs:chests/umvuthana_grove_chest', 4],  // T6
  ['codex_of_kukulkan', 'mowziesmobs:chests/umvuthana_grove_chest', 35],  // T1

  // ── mynethersdelight:chests/mnd_bastion_hoglin_stable ──
  ['cuisine_nether', 'mynethersdelight:chests/mnd_bastion_hoglin_stable', 11],  // T4
  ['infernal_age', 'mynethersdelight:chests/mnd_bastion_hoglin_stable', 2],  // T3
  ['soul_black_smith', 'mynethersdelight:chests/mnd_bastion_hoglin_stable', 7],  // T5
  ['arsenal_iron_blades', 'mynethersdelight:chests/mnd_bastion_hoglin_stable', 4],  // T6
  ['arsenal_iron_polearms', 'mynethersdelight:chests/mnd_bastion_hoglin_stable', 4],  // T6

  // ── mynethersdelight:chests/mnd_bastion_treasure ──
  ['cuisine_nether', 'mynethersdelight:chests/mnd_bastion_treasure', 11],  // T4
  ['infernal_age', 'mynethersdelight:chests/mnd_bastion_treasure', 2],  // T3
  ['soul_black_smith', 'mynethersdelight:chests/mnd_bastion_treasure', 7],  // T5
  ['arsenal_iron_blades', 'mynethersdelight:chests/mnd_bastion_treasure', 4],  // T6
  ['arsenal_iron_polearms', 'mynethersdelight:chests/mnd_bastion_treasure', 4],  // T6

  // ── netherexp:chests/chapel ──
  ['cuisine_nether', 'netherexp:chests/chapel', 11],  // T4
  ['cuisine_pyromantic', 'netherexp:chests/chapel', 17],  // T3
  ['fire_school', 'netherexp:chests/chapel', 7],  // T5
  ['infernal_age', 'netherexp:chests/chapel', 2],  // T3
  ['soul_black_smith', 'netherexp:chests/chapel', 7],  // T5

  // ── netherexp:chests/sanctum_food ──
  ['bakery', 'netherexp:chests/sanctum_food', 35],  // T1
  ['butchery', 'netherexp:chests/sanctum_food', 35],  // T1
  ['cuisine_nether', 'netherexp:chests/sanctum_food', 11],  // T4
  ['cuisine_pyromantic', 'netherexp:chests/sanctum_food', 17],  // T3
  ['cuisine_rustic', 'netherexp:chests/sanctum_food', 7],  // T5

  // ── netherexp:chests/sanctum_supply ──
  ['cuisine_nether', 'netherexp:chests/sanctum_supply', 11],  // T4
  ['cuisine_pyromantic', 'netherexp:chests/sanctum_supply', 17],  // T3
  ['fire_school', 'netherexp:chests/sanctum_supply', 7],  // T5
  ['infernal_age', 'netherexp:chests/sanctum_supply', 2],  // T3
  ['soul_black_smith', 'netherexp:chests/sanctum_supply', 7],  // T5

  // ── nethervinery:chests/bastion_hoglin_stable ──
  ['cuisine_nether', 'nethervinery:chests/bastion_hoglin_stable', 11],  // T4
  ['infernal_age', 'nethervinery:chests/bastion_hoglin_stable', 2],  // T3
  ['soul_black_smith', 'nethervinery:chests/bastion_hoglin_stable', 7],  // T5
  ['arsenal_iron_blades', 'nethervinery:chests/bastion_hoglin_stable', 4],  // T6
  ['arsenal_iron_polearms', 'nethervinery:chests/bastion_hoglin_stable', 4],  // T6

  // ── nethervinery:chests/bastion_other ──
  ['cuisine_nether', 'nethervinery:chests/bastion_other', 11],  // T4
  ['infernal_age', 'nethervinery:chests/bastion_other', 2],  // T3
  ['soul_black_smith', 'nethervinery:chests/bastion_other', 7],  // T5
  ['arsenal_iron_blades', 'nethervinery:chests/bastion_other', 4],  // T6
  ['arsenal_iron_polearms', 'nethervinery:chests/bastion_other', 4],  // T6

  // ── nethervinery:chests/bastion_treasure ──
  ['cuisine_nether', 'nethervinery:chests/bastion_treasure', 11],  // T4
  ['infernal_age', 'nethervinery:chests/bastion_treasure', 2],  // T3
  ['soul_black_smith', 'nethervinery:chests/bastion_treasure', 7],  // T5
  ['arsenal_iron_blades', 'nethervinery:chests/bastion_treasure', 4],  // T6
  ['arsenal_iron_polearms', 'nethervinery:chests/bastion_treasure', 4],  // T6

  // ── nethervinery:chests/ruined_portal ──
  ['cuisine_nether', 'nethervinery:chests/ruined_portal', 11],  // T4
  ['cuisine_pyromantic', 'nethervinery:chests/ruined_portal', 17],  // T3
  ['fire_school', 'nethervinery:chests/ruined_portal', 7],  // T5
  ['infernal_age', 'nethervinery:chests/ruined_portal', 2],  // T3
  ['long_road', 'nethervinery:chests/ruined_portal', 35],  // T1

  // ── oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure ──
  ['seafood_mastery', 'oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure', 11],  // T4
  ['bakery', 'oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure', 35],  // T1
  ['butchery', 'oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure', 35],  // T1
  ['cartography_advanced', 'oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure', 7],  // T5
  ['cuisine_cornelia', 'oceanic_delight:chests/ancient_fish_eggs_from_buried_treasure', 17],  // T3

  // ── ramadandelight:chests/rd_abandoned_mineshaft ──
  ['sweets_and_confections', 'ramadandelight:chests/rd_abandoned_mineshaft', 11],  // T4
  ['tea_ceremony', 'ramadandelight:chests/rd_abandoned_mineshaft', 7],  // T5
  ['arsenal_iron_blades', 'ramadandelight:chests/rd_abandoned_mineshaft', 4],  // T6
  ['arsenal_iron_polearms', 'ramadandelight:chests/rd_abandoned_mineshaft', 4],  // T6
  ['bakery', 'ramadandelight:chests/rd_abandoned_mineshaft', 35],  // T1

  // ── ramadandelight:chests/rd_desert_pyramid ──
  ['cuisine_middle_eastern', 'ramadandelight:chests/rd_desert_pyramid', 17],  // T3
  ['archaeology_mastery', 'ramadandelight:chests/rd_desert_pyramid', 35],  // T1
  ['sweets_and_confections', 'ramadandelight:chests/rd_desert_pyramid', 11],  // T4
  ['tea_ceremony', 'ramadandelight:chests/rd_desert_pyramid', 7],  // T5
  ['bakery', 'ramadandelight:chests/rd_desert_pyramid', 35],  // T1

  // ── ramadandelight:chests/rd_shipwreck_supply ──
  ['seafood_mastery', 'ramadandelight:chests/rd_shipwreck_supply', 11],  // T4
  ['sweets_and_confections', 'ramadandelight:chests/rd_shipwreck_supply', 11],  // T4
  ['tea_ceremony', 'ramadandelight:chests/rd_shipwreck_supply', 7],  // T5
  ['bakery', 'ramadandelight:chests/rd_shipwreck_supply', 35],  // T1
  ['butchery', 'ramadandelight:chests/rd_shipwreck_supply', 35],  // T1

  // ── ramadandelight:chests/rd_village_desert_house ──
  ['bakery', 'ramadandelight:chests/rd_village_desert_house', 35],  // T1
  ['butchery', 'ramadandelight:chests/rd_village_desert_house', 35],  // T1
  ['cuisine_middle_eastern', 'ramadandelight:chests/rd_village_desert_house', 17],  // T3
  ['dairy_and_cheese', 'ramadandelight:chests/rd_village_desert_house', 7],  // T5
  ['soups_and_stews', 'ramadandelight:chests/rd_village_desert_house', 7],  // T5

  // ── ramadandelight:chests/rd_village_plains_house ──
  ['bakery', 'ramadandelight:chests/rd_village_plains_house', 35],  // T1
  ['dairy_and_cheese', 'ramadandelight:chests/rd_village_plains_house', 7],  // T5
  ['soups_and_stews', 'ramadandelight:chests/rd_village_plains_house', 7],  // T5
  ['sweets_and_confections', 'ramadandelight:chests/rd_village_plains_house', 11],  // T4
  ['agronomic_path', 'ramadandelight:chests/rd_village_plains_house', 35],  // T1

  // ── ramadandelight:chests/rd_village_savanna_house ──
  ['agronomic_path', 'ramadandelight:chests/rd_village_savanna_house', 35],  // T1
  ['bakery', 'ramadandelight:chests/rd_village_savanna_house', 35],  // T1
  ['dairy_and_cheese', 'ramadandelight:chests/rd_village_savanna_house', 7],  // T5
  ['soups_and_stews', 'ramadandelight:chests/rd_village_savanna_house', 7],  // T5
  ['sweets_and_confections', 'ramadandelight:chests/rd_village_savanna_house', 11],  // T4

  // ── ramadandelight:chests/rd_village_snowy_house ──
  ['bakery', 'ramadandelight:chests/rd_village_snowy_house', 35],  // T1
  ['butchery', 'ramadandelight:chests/rd_village_snowy_house', 35],  // T1
  ['dairy_and_cheese', 'ramadandelight:chests/rd_village_snowy_house', 7],  // T5
  ['soups_and_stews', 'ramadandelight:chests/rd_village_snowy_house', 7],  // T5
  ['sweets_and_confections', 'ramadandelight:chests/rd_village_snowy_house', 11],  // T4

  // ── ramadandelight:chests/rd_village_taiga_house ──
  ['agronomic_path', 'ramadandelight:chests/rd_village_taiga_house', 35],  // T1
  ['bakery', 'ramadandelight:chests/rd_village_taiga_house', 35],  // T1
  ['dairy_and_cheese', 'ramadandelight:chests/rd_village_taiga_house', 7],  // T5
  ['soups_and_stews', 'ramadandelight:chests/rd_village_taiga_house', 7],  // T5
  ['sweets_and_confections', 'ramadandelight:chests/rd_village_taiga_house', 11],  // T4

  // ── rare-ice:chests/rare_ice ──
  ['cuisine_alpine', 'rare-ice:chests/rare_ice', 7],  // T5

  // ── roadweaver:chests/maid_house ──
  ['agronomic_path', 'roadweaver:chests/maid_house', 35],  // T1
  ['bakery', 'roadweaver:chests/maid_house', 35],  // T1
  ['dairy_and_cheese', 'roadweaver:chests/maid_house', 7],  // T5
  ['furniturecraft', 'roadweaver:chests/maid_house', 25],  // T2
  ['soups_and_stews', 'roadweaver:chests/maid_house', 7],  // T5

  // ── thirst:chests/abandoned_mineshaft ──
  ['arsenal_iron_blades', 'thirst:chests/abandoned_mineshaft', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/abandoned_mineshaft', 4],  // T6
  ['bestiary_iceandfire', 'thirst:chests/abandoned_mineshaft', 11],  // T4
  ['kindled_age', 'thirst:chests/abandoned_mineshaft', 2],  // T1
  ['kinetic_engineering', 'thirst:chests/abandoned_mineshaft', 17],  // T3

  // ── thirst:chests/abandoned_mineshaft_bc ──
  ['arsenal_iron_blades', 'thirst:chests/abandoned_mineshaft_bc', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/abandoned_mineshaft_bc', 4],  // T6
  ['bestiary_iceandfire', 'thirst:chests/abandoned_mineshaft_bc', 11],  // T4
  ['kindled_age', 'thirst:chests/abandoned_mineshaft_bc', 2],  // T1
  ['kinetic_engineering', 'thirst:chests/abandoned_mineshaft_bc', 17],  // T3

  // ── thirst:chests/abandoned_mineshaft_fr ──
  ['arsenal_iron_blades', 'thirst:chests/abandoned_mineshaft_fr', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/abandoned_mineshaft_fr', 4],  // T6
  ['bestiary_iceandfire', 'thirst:chests/abandoned_mineshaft_fr', 11],  // T4
  ['kindled_age', 'thirst:chests/abandoned_mineshaft_fr', 2],  // T1
  ['kinetic_engineering', 'thirst:chests/abandoned_mineshaft_fr', 17],  // T3

  // ── thirst:chests/bastion_other ──
  ['arsenal_iron_blades', 'thirst:chests/bastion_other', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/bastion_other', 4],  // T6
  ['ballistics_engineering', 'thirst:chests/bastion_other', 11],  // T4
  ['cannoneer', 'thirst:chests/bastion_other', 17],  // T3
  ['cuisine_nether', 'thirst:chests/bastion_other', 11],  // T4

  // ── thirst:chests/bastion_other_bc ──
  ['arsenal_iron_blades', 'thirst:chests/bastion_other_bc', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/bastion_other_bc', 4],  // T6
  ['ballistics_engineering', 'thirst:chests/bastion_other_bc', 11],  // T4
  ['cannoneer', 'thirst:chests/bastion_other_bc', 17],  // T3
  ['cuisine_nether', 'thirst:chests/bastion_other_bc', 11],  // T4

  // ── thirst:chests/bastion_other_fr ──
  ['arsenal_iron_blades', 'thirst:chests/bastion_other_fr', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/bastion_other_fr', 4],  // T6
  ['ballistics_engineering', 'thirst:chests/bastion_other_fr', 11],  // T4
  ['cannoneer', 'thirst:chests/bastion_other_fr', 17],  // T3
  ['cuisine_nether', 'thirst:chests/bastion_other_fr', 11],  // T4

  // ── thirst:chests/nether_bridge ──
  ['cuisine_nether', 'thirst:chests/nether_bridge', 11],  // T4
  ['cuisine_pyromantic', 'thirst:chests/nether_bridge', 17],  // T3
  ['fire_school', 'thirst:chests/nether_bridge', 7],  // T5
  ['infernal_age', 'thirst:chests/nether_bridge', 2],  // T3
  ['soul_black_smith', 'thirst:chests/nether_bridge', 7],  // T5

  // ── thirst:chests/nether_bridge_bc ──
  ['cuisine_nether', 'thirst:chests/nether_bridge_bc', 11],  // T4
  ['cuisine_pyromantic', 'thirst:chests/nether_bridge_bc', 17],  // T3
  ['fire_school', 'thirst:chests/nether_bridge_bc', 7],  // T5
  ['infernal_age', 'thirst:chests/nether_bridge_bc', 2],  // T3
  ['soul_black_smith', 'thirst:chests/nether_bridge_bc', 7],  // T5

  // ── thirst:chests/nether_bridge_fr ──
  ['cuisine_nether', 'thirst:chests/nether_bridge_fr', 11],  // T4
  ['cuisine_pyromantic', 'thirst:chests/nether_bridge_fr', 17],  // T3
  ['fire_school', 'thirst:chests/nether_bridge_fr', 7],  // T5
  ['infernal_age', 'thirst:chests/nether_bridge_fr', 2],  // T3
  ['soul_black_smith', 'thirst:chests/nether_bridge_fr', 7],  // T5

  // ── thirst:chests/shipwreck_supply ──
  ['seafood_mastery', 'thirst:chests/shipwreck_supply', 11],  // T4
  ['cartography_advanced', 'thirst:chests/shipwreck_supply', 7],  // T5
  ['cuisine_cornelia', 'thirst:chests/shipwreck_supply', 17],  // T3
  ['fishing_arts', 'thirst:chests/shipwreck_supply', 7],  // T5
  ['mob_faction_deep_ones', 'thirst:chests/shipwreck_supply', 11],  // T4

  // ── thirst:chests/shipwreck_supply_bc ──
  ['seafood_mastery', 'thirst:chests/shipwreck_supply_bc', 11],  // T4
  ['cartography_advanced', 'thirst:chests/shipwreck_supply_bc', 7],  // T5
  ['cuisine_cornelia', 'thirst:chests/shipwreck_supply_bc', 17],  // T3
  ['fishing_arts', 'thirst:chests/shipwreck_supply_bc', 7],  // T5
  ['mob_faction_deep_ones', 'thirst:chests/shipwreck_supply_bc', 11],  // T4

  // ── thirst:chests/shipwreck_supply_fr ──
  ['seafood_mastery', 'thirst:chests/shipwreck_supply_fr', 11],  // T4
  ['cartography_advanced', 'thirst:chests/shipwreck_supply_fr', 7],  // T5
  ['cuisine_cornelia', 'thirst:chests/shipwreck_supply_fr', 17],  // T3
  ['fishing_arts', 'thirst:chests/shipwreck_supply_fr', 7],  // T5
  ['mob_faction_deep_ones', 'thirst:chests/shipwreck_supply_fr', 11],  // T4

  // ── thirst:chests/simple_dungeon ──
  ['arsenal_iron_blades', 'thirst:chests/simple_dungeon', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/simple_dungeon', 4],  // T6
  ['arsenal_master_polearms', 'thirst:chests/simple_dungeon', 7],  // T5
  ['arsenal_master_ranged', 'thirst:chests/simple_dungeon', 17],  // T3
  ['heavy_plate_discipline', 'thirst:chests/simple_dungeon', 7],  // T5

  // ── thirst:chests/simple_dungeon_bc ──
  ['arsenal_iron_blades', 'thirst:chests/simple_dungeon_bc', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/simple_dungeon_bc', 4],  // T6
  ['arsenal_master_polearms', 'thirst:chests/simple_dungeon_bc', 7],  // T5
  ['arsenal_master_ranged', 'thirst:chests/simple_dungeon_bc', 17],  // T3
  ['heavy_plate_discipline', 'thirst:chests/simple_dungeon_bc', 7],  // T5

  // ── thirst:chests/simple_dungeon_fr ──
  ['arsenal_iron_blades', 'thirst:chests/simple_dungeon_fr', 4],  // T6
  ['arsenal_iron_polearms', 'thirst:chests/simple_dungeon_fr', 4],  // T6
  ['arsenal_master_polearms', 'thirst:chests/simple_dungeon_fr', 7],  // T5
  ['arsenal_master_ranged', 'thirst:chests/simple_dungeon_fr', 17],  // T3
  ['heavy_plate_discipline', 'thirst:chests/simple_dungeon_fr', 7],  // T5

  // ── tide:chests/crates/deep ──
  ['cuisine_cornelia', 'tide:chests/crates/deep', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/deep', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/deep', 11],  // T4
  ['small_ships', 'tide:chests/crates/deep', 17],  // T3

  // ── tide:chests/crates/deep_lava ──
  ['cuisine_cornelia', 'tide:chests/crates/deep_lava', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/deep_lava', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/deep_lava', 11],  // T4
  ['small_ships', 'tide:chests/crates/deep_lava', 17],  // T3

  // ── tide:chests/crates/end ──
  ['cuisine_cornelia', 'tide:chests/crates/end', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/end', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/end', 11],  // T4
  ['small_ships', 'tide:chests/crates/end', 17],  // T3

  // ── tide:chests/crates/nether ──
  ['cuisine_cornelia', 'tide:chests/crates/nether', 17],  // T3
  ['cuisine_nether', 'tide:chests/crates/nether', 11],  // T4
  ['cuisine_pyromantic', 'tide:chests/crates/nether', 17],  // T3
  ['fire_school', 'tide:chests/crates/nether', 7],  // T5
  ['fishing_arts', 'tide:chests/crates/nether', 7],  // T5

  // ── tide:chests/crates/surface_freshwater ──
  ['cuisine_cornelia', 'tide:chests/crates/surface_freshwater', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/surface_freshwater', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/surface_freshwater', 11],  // T4
  ['small_ships', 'tide:chests/crates/surface_freshwater', 17],  // T3

  // ── tide:chests/crates/surface_lava ──
  ['cuisine_cornelia', 'tide:chests/crates/surface_lava', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/surface_lava', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/surface_lava', 11],  // T4
  ['small_ships', 'tide:chests/crates/surface_lava', 17],  // T3

  // ── tide:chests/crates/surface_saltwater ──
  ['cuisine_cornelia', 'tide:chests/crates/surface_saltwater', 17],  // T3
  ['fishing_arts', 'tide:chests/crates/surface_saltwater', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/surface_saltwater', 11],  // T4
  ['small_ships', 'tide:chests/crates/surface_saltwater', 17],  // T3

  // ── tide:chests/crates/underground ──
  ['abyssal_chasm', 'tide:chests/crates/underground', 11],  // T4
  ['cuisine_cornelia', 'tide:chests/crates/underground', 17],  // T3
  ['cuisine_subterranean', 'tide:chests/crates/underground', 4],  // T6
  ['fishing_arts', 'tide:chests/crates/underground', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/underground', 11],  // T4

  // ── tide:chests/crates/underground_lava ──
  ['abyssal_chasm', 'tide:chests/crates/underground_lava', 11],  // T4
  ['cuisine_cornelia', 'tide:chests/crates/underground_lava', 17],  // T3
  ['cuisine_subterranean', 'tide:chests/crates/underground_lava', 4],  // T6
  ['fishing_arts', 'tide:chests/crates/underground_lava', 7],  // T5
  ['seafood_mastery', 'tide:chests/crates/underground_lava', 11],  // T4

  // ── tide:chests/fishing_boat ──
  ['cuisine_cornelia', 'tide:chests/fishing_boat', 17],  // T3
  ['fishing_arts', 'tide:chests/fishing_boat', 7],  // T5
  ['seafood_mastery', 'tide:chests/fishing_boat', 11],  // T4
  ['small_ships', 'tide:chests/fishing_boat', 17],  // T3

  // ── traveloptics:chests/abyssal_ruins_additions ──
  ['abyssal_chasm', 'traveloptics:chests/abyssal_ruins_additions', 11],  // T4
  ['archaeology_mastery', 'traveloptics:chests/abyssal_ruins_additions', 35],  // T1

  // ── traveloptics:chests/ancient_city_additions ──
  ['abyssal_age', 'traveloptics:chests/ancient_city_additions', 2],  // T3
  ['abyssal_chasm', 'traveloptics:chests/ancient_city_additions', 11],  // T4
  ['archaeology_mastery', 'traveloptics:chests/ancient_city_additions', 35],  // T1
  ['atomic_engineering', 'traveloptics:chests/ancient_city_additions', 11],  // T4
  ['cuisine_subterranean', 'traveloptics:chests/ancient_city_additions', 4],  // T6

  // ── traveloptics:chests/ancient_city_ice_additions ──
  ['abyssal_age', 'traveloptics:chests/ancient_city_ice_additions', 2],  // T3
  ['abyssal_chasm', 'traveloptics:chests/ancient_city_ice_additions', 11],  // T4
  ['archaeology_mastery', 'traveloptics:chests/ancient_city_ice_additions', 35],  // T1
  ['atomic_engineering', 'traveloptics:chests/ancient_city_ice_additions', 11],  // T4
  ['cuisine_subterranean', 'traveloptics:chests/ancient_city_ice_additions', 4],  // T6

  // ── traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage ──
  ['arcane_codex', 'traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage', 4],  // T6
  ['falconry', 'traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage', 4],  // T6
  ['fishing_arts', 'traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage', 7],  // T5
  ['lightning_school', 'traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage', 7],  // T5
  ['music_speakers', 'traveloptics:chests/aqua_mage_tower/aqua_mage_basic_storage', 17],  // T3

  // ── traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage ──
  ['arcane_codex', 'traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage', 4],  // T6
  ['falconry', 'traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage', 4],  // T6
  ['fishing_arts', 'traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage', 7],  // T5
  ['lightning_school', 'traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage', 7],  // T5
  ['music_speakers', 'traveloptics:chests/aqua_mage_tower/aqua_mage_treasure_storage', 17],  // T3

  // ── traveloptics:chests/catacombs_additions ──
  ['archaeology_mastery', 'traveloptics:chests/catacombs_additions', 35],  // T1
  ['blood_school', 'traveloptics:chests/catacombs_additions', 7],  // T5
  ['eldritch_school', 'traveloptics:chests/catacombs_additions', 7],  // T5

  // ── traveloptics:chests/caveman_house_additions_new ──
  ['agronomic_path', 'traveloptics:chests/caveman_house_additions_new', 35],  // T1
  ['bakery', 'traveloptics:chests/caveman_house_additions_new', 35],  // T1
  ['bestiary_alex_mobs', 'traveloptics:chests/caveman_house_additions_new', 4],  // T6
  ['cuisine_subterranean', 'traveloptics:chests/caveman_house_additions_new', 4],  // T6
  ['dairy_and_cheese', 'traveloptics:chests/caveman_house_additions_new', 7],  // T5

  // ── traveloptics:chests/forlorn_ruins_additions_new ──
  ['archaeology_mastery', 'traveloptics:chests/forlorn_ruins_additions_new', 35],  // T1
  ['blighted_hollows', 'traveloptics:chests/forlorn_ruins_additions_new', 11],  // T4
  ['carnal_anatomy', 'traveloptics:chests/forlorn_ruins_additions_new', 17],  // T3
  ['forlorn_hollows', 'traveloptics:chests/forlorn_ruins_additions_new', 11],  // T4

  // ── traveloptics:chests/frosted_prison_treasure_additions ──
  ['cuisine_alpine', 'traveloptics:chests/frosted_prison_treasure_additions', 7],  // T5

  // ── traveloptics:chests/impaled_icebreaker_captain_quarters ──
  ['cuisine_alpine', 'traveloptics:chests/impaled_icebreaker_captain_quarters', 7],  // T5
  ['ice_school', 'traveloptics:chests/impaled_icebreaker_captain_quarters', 7],  // T5

  // ── traveloptics:chests/magnetic_ruins_additions_new ──
  ['archaeology_mastery', 'traveloptics:chests/magnetic_ruins_additions_new', 35],  // T1
  ['magnetic_deep', 'traveloptics:chests/magnetic_ruins_additions_new', 11],  // T4

  // ── traveloptics:chests/toxic_ruins_additions_new ──
  ['archaeology_mastery', 'traveloptics:chests/toxic_ruins_additions_new', 35],  // T1

  // ── traveloptics:chests/void_cathedral/hidden_sculk_room ──
  ['abyssal_age', 'traveloptics:chests/void_cathedral/hidden_sculk_room', 2],  // T3
  ['abyssal_chasm', 'traveloptics:chests/void_cathedral/hidden_sculk_room', 11],  // T4
  ['arcane_codex', 'traveloptics:chests/void_cathedral/hidden_sculk_room', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/hidden_sculk_room', 11],  // T4
  ['arsenal_master_blades', 'traveloptics:chests/void_cathedral/hidden_sculk_room', 4],  // T6

  // ── traveloptics:chests/void_cathedral/hidden_treasure_place ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/hidden_treasure_place', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/hidden_treasure_place', 11],  // T4
  ['arsenal_master_blades', 'traveloptics:chests/void_cathedral/hidden_treasure_place', 4],  // T6
  ['arsenal_master_ranged', 'traveloptics:chests/void_cathedral/hidden_treasure_place', 17],  // T3
  ['banner_heraldry', 'traveloptics:chests/void_cathedral/hidden_treasure_place', 11],  // T4

  // ── traveloptics:chests/void_cathedral/library_higher_basic ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/library_higher_basic', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/library_higher_basic', 11],  // T4
  ['bookshelf_mastery', 'traveloptics:chests/void_cathedral/library_higher_basic', 11],  // T4
  ['culture_age', 'traveloptics:chests/void_cathedral/library_higher_basic', 2],  // T1
  ['five_vessels_apocrypha', 'traveloptics:chests/void_cathedral/library_higher_basic', 4],  // T6

  // ── traveloptics:chests/void_cathedral/library_higher_treasure ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/library_higher_treasure', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/library_higher_treasure', 11],  // T4
  ['bookshelf_mastery', 'traveloptics:chests/void_cathedral/library_higher_treasure', 11],  // T4
  ['culture_age', 'traveloptics:chests/void_cathedral/library_higher_treasure', 2],  // T1
  ['five_vessels_apocrypha', 'traveloptics:chests/void_cathedral/library_higher_treasure', 4],  // T6

  // ── traveloptics:chests/void_cathedral/library_lower_basic ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/library_lower_basic', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/library_lower_basic', 11],  // T4
  ['bookshelf_mastery', 'traveloptics:chests/void_cathedral/library_lower_basic', 11],  // T4
  ['culture_age', 'traveloptics:chests/void_cathedral/library_lower_basic', 2],  // T1
  ['five_vessels_apocrypha', 'traveloptics:chests/void_cathedral/library_lower_basic', 4],  // T6

  // ── traveloptics:chests/void_cathedral/library_lower_treasure ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/library_lower_treasure', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/library_lower_treasure', 11],  // T4
  ['bookshelf_mastery', 'traveloptics:chests/void_cathedral/library_lower_treasure', 11],  // T4
  ['culture_age', 'traveloptics:chests/void_cathedral/library_lower_treasure', 2],  // T1
  ['five_vessels_apocrypha', 'traveloptics:chests/void_cathedral/library_lower_treasure', 4],  // T6

  // ── traveloptics:chests/void_cathedral/silly_treasure ──
  ['arcane_codex', 'traveloptics:chests/void_cathedral/silly_treasure', 4],  // T6
  ['architectural_mastery', 'traveloptics:chests/void_cathedral/silly_treasure', 11],  // T4
  ['arsenal_master_blades', 'traveloptics:chests/void_cathedral/silly_treasure', 4],  // T6
  ['arsenal_master_ranged', 'traveloptics:chests/void_cathedral/silly_treasure', 17],  // T3
  ['banner_heraldry', 'traveloptics:chests/void_cathedral/silly_treasure', 11],  // T4

  // ── true_end:chests/home_farming_chest ──
  ['agronomic_path', 'true_end:chests/home_farming_chest', 35],  // T1
  ['dairy_and_cheese', 'true_end:chests/home_farming_chest', 7],  // T5
  ['naturalist_basics', 'true_end:chests/home_farming_chest', 35],  // T1

  // ── vintagedelight:chests/mixed_seeds ──
  ['bakery', 'vintagedelight:chests/mixed_seeds', 35],  // T1
  ['butchery', 'vintagedelight:chests/mixed_seeds', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/mixed_seeds', 7],  // T5
  ['fermentation_age', 'vintagedelight:chests/mixed_seeds', 2],  // T5
  ['sweets_and_confections', 'vintagedelight:chests/mixed_seeds', 11],  // T4

  // ── vintagedelight:chests/vd_bastion_hoglin_stable ──
  ['arsenal_iron_blades', 'vintagedelight:chests/vd_bastion_hoglin_stable', 4],  // T6
  ['arsenal_iron_polearms', 'vintagedelight:chests/vd_bastion_hoglin_stable', 4],  // T6
  ['bakery', 'vintagedelight:chests/vd_bastion_hoglin_stable', 35],  // T1
  ['ballistics_engineering', 'vintagedelight:chests/vd_bastion_hoglin_stable', 11],  // T4
  ['butchery', 'vintagedelight:chests/vd_bastion_hoglin_stable', 35],  // T1

  // ── vintagedelight:chests/vd_ruined_portal ──
  ['bakery', 'vintagedelight:chests/vd_ruined_portal', 35],  // T1
  ['butchery', 'vintagedelight:chests/vd_ruined_portal', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_ruined_portal', 7],  // T5
  ['fermentation_age', 'vintagedelight:chests/vd_ruined_portal', 2],  // T5
  ['sweets_and_confections', 'vintagedelight:chests/vd_ruined_portal', 11],  // T4

  // ── vintagedelight:chests/vd_village_desert_house ──
  ['bakery', 'vintagedelight:chests/vd_village_desert_house', 35],  // T1
  ['butchery', 'vintagedelight:chests/vd_village_desert_house', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_village_desert_house', 7],  // T5
  ['soups_and_stews', 'vintagedelight:chests/vd_village_desert_house', 7],  // T5
  ['cuisine_middle_eastern', 'vintagedelight:chests/vd_village_desert_house', 17],  // T3

  // ── vintagedelight:chests/vd_village_plains_house ──
  ['bakery', 'vintagedelight:chests/vd_village_plains_house', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_village_plains_house', 7],  // T5
  ['soups_and_stews', 'vintagedelight:chests/vd_village_plains_house', 7],  // T5
  ['agronomic_path', 'vintagedelight:chests/vd_village_plains_house', 35],  // T1
  ['sweets_and_confections', 'vintagedelight:chests/vd_village_plains_house', 11],  // T4

  // ── vintagedelight:chests/vd_village_savanna_house ──
  ['agronomic_path', 'vintagedelight:chests/vd_village_savanna_house', 35],  // T1
  ['bakery', 'vintagedelight:chests/vd_village_savanna_house', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_village_savanna_house', 7],  // T5
  ['soups_and_stews', 'vintagedelight:chests/vd_village_savanna_house', 7],  // T5
  ['sweets_and_confections', 'vintagedelight:chests/vd_village_savanna_house', 11],  // T4

  // ── vintagedelight:chests/vd_village_snowy_house ──
  ['bakery', 'vintagedelight:chests/vd_village_snowy_house', 35],  // T1
  ['butchery', 'vintagedelight:chests/vd_village_snowy_house', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_village_snowy_house', 7],  // T5
  ['soups_and_stews', 'vintagedelight:chests/vd_village_snowy_house', 7],  // T5
  ['sweets_and_confections', 'vintagedelight:chests/vd_village_snowy_house', 11],  // T4

  // ── vintagedelight:chests/vd_village_taiga_house ──
  ['agronomic_path', 'vintagedelight:chests/vd_village_taiga_house', 35],  // T1
  ['bakery', 'vintagedelight:chests/vd_village_taiga_house', 35],  // T1
  ['dairy_and_cheese', 'vintagedelight:chests/vd_village_taiga_house', 7],  // T5
  ['soups_and_stews', 'vintagedelight:chests/vd_village_taiga_house', 7],  // T5
  ['furniturecraft', 'vintagedelight:chests/vd_village_taiga_house', 25],  // T2

  // ── wares:chests/village/badlands_warehouse ──
  ['agronomic_path', 'wares:chests/village/badlands_warehouse', 35],  // T1
  ['bakery', 'wares:chests/village/badlands_warehouse', 35],  // T1
  ['dairy_and_cheese', 'wares:chests/village/badlands_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/badlands_warehouse', 25],  // T2
  ['soups_and_stews', 'wares:chests/village/badlands_warehouse', 7],  // T5

  // ── wares:chests/village/beach_warehouse ──
  ['agronomic_path', 'wares:chests/village/beach_warehouse', 35],  // T1
  ['bakery', 'wares:chests/village/beach_warehouse', 35],  // T1
  ['dairy_and_cheese', 'wares:chests/village/beach_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/beach_warehouse', 25],  // T2
  ['soups_and_stews', 'wares:chests/village/beach_warehouse', 7],  // T5

  // ── wares:chests/village/dark_forest_warehouse ──
  ['woodworking', 'wares:chests/village/dark_forest_warehouse', 35],  // T1
  ['foraging_almanac', 'wares:chests/village/dark_forest_warehouse', 35],  // T1
  ['bestiary_alex_mobs', 'wares:chests/village/dark_forest_warehouse', 4],  // T6
  ['dairy_and_cheese', 'wares:chests/village/dark_forest_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/dark_forest_warehouse', 25],  // T2

  // ── wares:chests/village/jungle_warehouse ──
  ['naturalist_basics', 'wares:chests/village/jungle_warehouse', 35],  // T1
  ['woodworking', 'wares:chests/village/jungle_warehouse', 35],  // T1
  ['bestiary_alex_mobs', 'wares:chests/village/jungle_warehouse', 4],  // T6
  ['cuisine_tropical', 'wares:chests/village/jungle_warehouse', 11],  // T4
  ['dairy_and_cheese', 'wares:chests/village/jungle_warehouse', 7],  // T5

  // ── wares:chests/village/mountain_warehouse ──
  ['agronomic_path', 'wares:chests/village/mountain_warehouse', 35],  // T1
  ['bakery', 'wares:chests/village/mountain_warehouse', 35],  // T1
  ['cuisine_alpine', 'wares:chests/village/mountain_warehouse', 7],  // T5
  ['dairy_and_cheese', 'wares:chests/village/mountain_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/mountain_warehouse', 25],  // T2

  // ── wares:chests/village/mushroom_warehouse ──
  ['agronomic_path', 'wares:chests/village/mushroom_warehouse', 35],  // T1
  ['bakery', 'wares:chests/village/mushroom_warehouse', 35],  // T1
  ['dairy_and_cheese', 'wares:chests/village/mushroom_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/mushroom_warehouse', 25],  // T2
  ['soups_and_stews', 'wares:chests/village/mushroom_warehouse', 7],  // T5

  // ── wares:chests/village/swamp_warehouse ──
  ['agronomic_path', 'wares:chests/village/swamp_warehouse', 35],  // T1
  ['bakery', 'wares:chests/village/swamp_warehouse', 35],  // T1
  ['dairy_and_cheese', 'wares:chests/village/swamp_warehouse', 7],  // T5
  ['furniturecraft', 'wares:chests/village/swamp_warehouse', 25],  // T2
  ['soups_and_stews', 'wares:chests/village/swamp_warehouse', 7],  // T5

]

// ─── INJECT INTO LOOT TABLES ────────────────────────────────
ServerEvents.genericLootTables(function(event) {
  for (var i = 0; i < SCROLL_SOURCES.length; i++) {
    var stageId   = SCROLL_SOURCES[i][0]
    var lootTable = SCROLL_SOURCES[i][1]
    var pct       = SCROLL_SOURCES[i][2]

    var scrollItem = Item.of('historystages:research_scroll', '{StageResearch:"' + stageId + '"}')

    ;(function(table, item, weight) {
      event.modify(table, function(loot) {
        loot.addPool(function(pool) {
          pool.rolls = 1
          pool.addItem(item, weight)
          pool.addEmpty(100 - weight)
        })
      })
    })(lootTable, scrollItem, pct)
  }

  console.info('[Sinborn V5] Strict-matched ' + SCROLL_SOURCES.length + ' scroll entries across 428 chest types')
})