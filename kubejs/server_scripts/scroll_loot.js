// ============================================================
// SINBORN ODYSSEY 2 — Scroll Chest Loot Injection (V2 rebuild 2026-05-13)
//
// Generated from SCROLL_REWORK_DESIGN_SPEC_2026-05-13. Every populated
// scroll (118) wired to its owning civ's drop zones at tier-appropriate rates.
//
// Anthropological model: civs are material-culture drop zones, not knowledge
// owners. Each scroll drops in its primary civ's structures (full rate) + 1
// secondary contact deposit (half rate) + 1 cross-civ contact (half rate).
//
// Tier rates: T1=22%, T2=17%, T3=12%, T4=8%, T5=6%, T6=4%
// Survivor Codex is NOT here — spawns in starter backpack via starter_items.js.
// ============================================================

var SCROLL_SOURCES = [

  // agronomic_path
  ['agronomic_path', 'ati_structures:chests/library', 17],
  ['agronomic_path', 'minecraft:chests/stronghold_library', 17],

  // arcane_codex
  ['arcane_codex', 'minecraft:chests/stronghold_library', 12],
  ['arcane_codex', 'minecraft:chests/woodland_mansion',  6],
  ['arcane_codex', 'mowziesmobs:chests/monastery_chest', 12],

  // archaeology_mastery
  ['archaeology_mastery', 'ati_structures:chests/library', 22],
  ['archaeology_mastery', 'minecraft:chests/stronghold_library', 22],

  // architectural_mastery
  ['architectural_mastery', 'ati_structures:chests/library', 12],
  ['architectural_mastery', 'minecraft:chests/stronghold_library', 12],

  // arsenal_iron_blades
  ['arsenal_iron_blades', 'ati_structures:chests/library', 17],
  ['arsenal_iron_blades', 'minecraft:chests/stronghold_library', 17],

  // arsenal_iron_polearms
  ['arsenal_iron_polearms', 'ati_structures:chests/library', 17],
  ['arsenal_iron_polearms', 'minecraft:chests/stronghold_library', 17],

  // arsenal_iron_ranged
  ['arsenal_iron_ranged', 'ati_structures:chests/library', 17],
  ['arsenal_iron_ranged', 'minecraft:chests/stronghold_library', 17],

  // arsenal_legendary_blades
  ['arsenal_legendary_blades', 'ati_structures:chests/library',  6],
  ['arsenal_legendary_blades', 'minecraft:chests/stronghold_library',  6],

  // arsenal_master_blades
  ['arsenal_master_blades', 'ati_structures:chests/library', 12],
  ['arsenal_master_blades', 'minecraft:chests/stronghold_library', 12],

  // arsenal_master_polearms
  ['arsenal_master_polearms', 'ati_structures:chests/library', 12],
  ['arsenal_master_polearms', 'minecraft:chests/stronghold_library', 12],

  // arsenal_master_ranged
  ['arsenal_master_ranged', 'ati_structures:chests/library', 12],
  ['arsenal_master_ranged', 'minecraft:chests/stronghold_library', 12],

  // atomic_engineering
  ['atomic_engineering', 'ati_structures:chests/library',  8],
  ['atomic_engineering', 'dungeons_and_combat:chests/blazing_fortress_loot',  4],
  ['atomic_engineering', 'minecraft:chests/village/village_weaponsmith',  8],

  // backpackcraft
  ['backpackcraft', 'ati_structures:chests/library', 17],
  ['backpackcraft', 'dungeons_and_combat:chests/blazing_fortress_loot',  8],
  ['backpackcraft', 'minecraft:chests/village/village_weaponsmith', 17],
  ['backpackcraft', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // bakery
  ['bakery', 'minecraft:chests/stronghold_library', 17],
  ['bakery', 'minecraft:chests/woodland_mansion',  8],
  ['bakery', 'mowziesmobs:chests/monastery_chest', 17],

  // ballistics_engineering
  ['ballistics_engineering', 'ati_structures:chests/library',  8],
  ['ballistics_engineering', 'dungeons_and_combat:chests/blazing_fortress_loot',  4],
  ['ballistics_engineering', 'minecraft:chests/village/village_weaponsmith',  8],

  // banner_heraldry
  ['banner_heraldry', 'minecraft:chests/stronghold_library', 17],
  ['banner_heraldry', 'minecraft:chests/woodland_mansion',  8],
  ['banner_heraldry', 'mowziesmobs:chests/monastery_chest', 17],

  // beehive_logistics
  ['beehive_logistics', 'ati_structures:chests/library',  6],
  ['beehive_logistics', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['beehive_logistics', 'minecraft:chests/jungle_temple', 12],
  ['beehive_logistics', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // bestiary_alex_mobs
  ['bestiary_alex_mobs', 'ati_structures:chests/library', 12],
  ['bestiary_alex_mobs', 'minecraft:chests/stronghold_library', 12],

  // bestiary_iceandfire
  ['bestiary_iceandfire', 'ati_structures:chests/library', 12],
  ['bestiary_iceandfire', 'minecraft:chests/stronghold_library', 12],

  // blood_school
  ['blood_school', 'alexscaves:chests/witch_hut', 12],
  ['blood_school', 'minecraft:chests/stronghold_library',  6],
  ['blood_school', 'minecraft:chests/witch_hut', 12],

  // bookshelf_mastery
  ['bookshelf_mastery', 'minecraft:chests/stronghold_library', 12],
  ['bookshelf_mastery', 'minecraft:chests/woodland_mansion',  6],
  ['bookshelf_mastery', 'mowziesmobs:chests/monastery_chest', 12],

  // boss_trophy_relics
  ['boss_trophy_relics', 'minecraft:chests/ancient_city_ice_box',  6],
  ['boss_trophy_relics', 'minecraft:chests/end_city_treasure',  6],
  ['boss_trophy_relics', 'minecraft:chests/stronghold_corridor',  3],
  ['boss_trophy_relics', 'minecraft:chests/stronghold_library',  3],

  // butchery
  ['butchery', 'ati_structures:chests/library', 17],
  ['butchery', 'dungeons_and_combat:chests/blazing_fortress_loot',  8],
  ['butchery', 'minecraft:chests/village/village_weaponsmith', 17],
  ['butchery', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // cannoneer
  ['cannoneer', 'ati_structures:chests/library', 12],
  ['cannoneer', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['cannoneer', 'minecraft:chests/village/village_weaponsmith', 12],

  // carnal_anatomy
  ['carnal_anatomy', 'alexscaves:chests/witch_hut', 12],
  ['carnal_anatomy', 'minecraft:chests/stronghold_library',  6],
  ['carnal_anatomy', 'minecraft:chests/witch_hut', 12],

  // cartography_advanced
  ['cartography_advanced', 'minecraft:chests/stronghold_library', 17],
  ['cartography_advanced', 'minecraft:chests/village/village_cartographer', 17],
  ['cartography_advanced', 'traveloptics:chests/void_cathedral/library_higher_basic',  8],

  // cataclysm_codex
  ['cataclysm_codex', 'ati_structures:chests/library', 12],
  ['cataclysm_codex', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['cataclysm_codex', 'minecraft:chests/village/village_weaponsmith', 12],
  ['cataclysm_codex', 'minecraft:chests/witch_hut',  6],

  // codex_of_kukulkan
  ['codex_of_kukulkan', 'ati_structures:chests/library', 17],
  ['codex_of_kukulkan', 'minecraft:chests/stronghold_library', 17],

  // cold_sweat_discipline
  ['cold_sweat_discipline', 'aquamirae:chests/ship_1', 17],
  ['cold_sweat_discipline', 'ati_structures:chests/library',  8],
  ['cold_sweat_discipline', 'cataclysm:chests/frosted_prison_treasure', 17],
  ['cold_sweat_discipline', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters',  8],

  // command_ruin
  ['command_ruin', 'ati_structures:chests/library',  8],
  ['command_ruin', 'minecraft:chests/stronghold_library',  8],

  // companions_charter
  ['companions_charter', 'minecraft:chests/stronghold_library', 22],
  ['companions_charter', 'minecraft:chests/woodland_mansion', 11],
  ['companions_charter', 'mowziesmobs:chests/monastery_chest', 22],

  // cuisine_alpine
  ['cuisine_alpine', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['cuisine_alpine', 'minecraft:chests/jungle_temple', 17],
  ['cuisine_alpine', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // cuisine_cornelia
  ['cuisine_cornelia', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['cuisine_cornelia', 'minecraft:chests/jungle_temple', 12],
  ['cuisine_cornelia', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // cuisine_dragon
  ['cuisine_dragon', 'dungeons_and_combat:chests/forgotten_sand',  4],
  ['cuisine_dragon', 'minecraft:chests/jungle_temple',  8],
  ['cuisine_dragon', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // cuisine_east_asian
  ['cuisine_east_asian', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['cuisine_east_asian', 'minecraft:chests/jungle_temple', 12],
  ['cuisine_east_asian', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // cuisine_mesoamerican
  ['cuisine_mesoamerican', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['cuisine_mesoamerican', 'minecraft:chests/jungle_temple', 12],
  ['cuisine_mesoamerican', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // cuisine_middle_eastern
  ['cuisine_middle_eastern', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['cuisine_middle_eastern', 'minecraft:chests/jungle_temple', 12],
  ['cuisine_middle_eastern', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // cuisine_nether
  ['cuisine_nether', 'dungeons_and_combat:chests/forgotten_sand',  4],
  ['cuisine_nether', 'minecraft:chests/jungle_temple',  8],
  ['cuisine_nether', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // cuisine_pyromantic
  ['cuisine_pyromantic', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['cuisine_pyromantic', 'minecraft:chests/jungle_temple', 12],
  ['cuisine_pyromantic', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // cuisine_rustic
  ['cuisine_rustic', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['cuisine_rustic', 'minecraft:chests/jungle_temple', 17],
  ['cuisine_rustic', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // cuisine_subterranean
  ['cuisine_subterranean', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['cuisine_subterranean', 'minecraft:chests/jungle_temple', 17],
  ['cuisine_subterranean', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // cuisine_tropical
  ['cuisine_tropical', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['cuisine_tropical', 'minecraft:chests/jungle_temple', 17],
  ['cuisine_tropical', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // cuisine_western_holiday
  ['cuisine_western_holiday', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['cuisine_western_holiday', 'minecraft:chests/jungle_temple', 17],
  ['cuisine_western_holiday', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // dairy_and_cheese
  ['dairy_and_cheese', 'cataclysm:chests/frosted_prison_treasure',  8],
  ['dairy_and_cheese', 'minecraft:chests/stronghold_library', 17],
  ['dairy_and_cheese', 'minecraft:chests/woodland_mansion',  8],
  ['dairy_and_cheese', 'mowziesmobs:chests/monastery_chest', 17],

  // distillery
  ['distillery', 'ati_structures:chests/library', 12],
  ['distillery', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['distillery', 'minecraft:chests/village/village_weaponsmith', 12],
  ['distillery', 'minecraft:chests/witch_hut',  6],

  // dnc_pantheon
  ['dnc_pantheon', 'ati_structures:chests/library',  8],
  ['dnc_pantheon', 'minecraft:chests/stronghold_library',  8],

  // dragon_husbandry
  ['dragon_husbandry', 'cataclysm:chests/frosted_prison_treasure',  4],
  ['dragon_husbandry', 'dungeons_and_combat:chests/forgotten_sand',  4],
  ['dragon_husbandry', 'minecraft:chests/jungle_temple',  8],
  ['dragon_husbandry', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // dwemer_observatory
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic',  6],
  ['dwemer_observatory', 'mebahelcreaturesdwarven:chests/dwemer_tower',  6],
  ['dwemer_observatory', 'minecraft:chests/ancient_city',  3],
  ['dwemer_observatory', 'minecraft:chests/end_city_treasure',  3],

  // dyecraft
  ['dyecraft', 'ati_structures:chests/library', 17],
  ['dyecraft', 'minecraft:chests/stronghold_library', 17],

  // eldritch_school
  ['eldritch_school', 'alexscaves:chests/witch_hut', 12],
  ['eldritch_school', 'minecraft:chests/stronghold_library',  6],
  ['eldritch_school', 'minecraft:chests/witch_hut', 12],

  // electrical_engineering
  ['electrical_engineering', 'ati_structures:chests/library',  8],
  ['electrical_engineering', 'dungeons_and_combat:chests/blazing_fortress_loot',  4],
  ['electrical_engineering', 'minecraft:chests/stronghold_library',  4],
  ['electrical_engineering', 'minecraft:chests/village/village_weaponsmith',  8],

  // ender_school
  ['ender_school', 'minecraft:chests/stronghold_library', 17],
  ['ender_school', 'minecraft:chests/village/village_cartographer', 17],
  ['ender_school', 'traveloptics:chests/void_cathedral/library_higher_basic',  8],

  // evocation_school
  ['evocation_school', 'minecraft:chests/stronghold_library', 17],
  ['evocation_school', 'minecraft:chests/witch_hut',  8],
  ['evocation_school', 'minecraft:chests/woodland_mansion',  8],
  ['evocation_school', 'mowziesmobs:chests/monastery_chest', 17],

  // eye_black
  ['eye_black', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_black', 'minecraft:chests/end_city_treasure', 12],
  ['eye_black', 'minecraft:chests/stronghold_corridor',  6],

  // eye_cold
  ['eye_cold', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_cold', 'minecraft:chests/end_city_treasure', 12],
  ['eye_cold', 'minecraft:chests/stronghold_corridor',  6],

  // eye_corrupted
  ['eye_corrupted', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_corrupted', 'minecraft:chests/end_city_treasure', 12],
  ['eye_corrupted', 'minecraft:chests/stronghold_corridor',  6],

  // eye_cryptic
  ['eye_cryptic', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_cryptic', 'minecraft:chests/end_city_treasure', 12],
  ['eye_cryptic', 'minecraft:chests/stronghold_corridor',  6],

  // eye_cursed
  ['eye_cursed', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_cursed', 'minecraft:chests/end_city_treasure', 12],
  ['eye_cursed', 'minecraft:chests/stronghold_corridor',  6],

  // eye_evil
  ['eye_evil', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_evil', 'minecraft:chests/end_city_treasure', 12],
  ['eye_evil', 'minecraft:chests/stronghold_corridor',  6],

  // eye_exotic
  ['eye_exotic', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_exotic', 'minecraft:chests/end_city_treasure', 12],
  ['eye_exotic', 'minecraft:chests/stronghold_corridor',  6],

  // eye_guardian
  ['eye_guardian', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_guardian', 'minecraft:chests/end_city_treasure', 12],
  ['eye_guardian', 'minecraft:chests/stronghold_corridor',  6],

  // eye_lost
  ['eye_lost', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_lost', 'minecraft:chests/end_city_treasure', 12],
  ['eye_lost', 'minecraft:chests/stronghold_corridor',  6],

  // eye_magical
  ['eye_magical', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_magical', 'minecraft:chests/end_city_treasure', 12],
  ['eye_magical', 'minecraft:chests/stronghold_corridor',  6],

  // eye_nether
  ['eye_nether', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_nether', 'minecraft:chests/end_city_treasure', 12],
  ['eye_nether', 'minecraft:chests/stronghold_corridor',  6],

  // eye_old
  ['eye_old', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_old', 'minecraft:chests/end_city_treasure', 12],
  ['eye_old', 'minecraft:chests/stronghold_corridor',  6],

  // eye_rogue
  ['eye_rogue', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_rogue', 'minecraft:chests/end_city_treasure', 12],
  ['eye_rogue', 'minecraft:chests/stronghold_corridor',  6],

  // eye_synthesis
  ['eye_synthesis', 'minecraft:chests/ancient_city_ice_box',  6],
  ['eye_synthesis', 'minecraft:chests/end_city_treasure',  6],
  ['eye_synthesis', 'minecraft:chests/stronghold_corridor',  3],
  ['eye_synthesis', 'minecraft:chests/stronghold_library',  3],

  // eye_undead
  ['eye_undead', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_undead', 'minecraft:chests/end_city_treasure', 12],
  ['eye_undead', 'minecraft:chests/stronghold_corridor',  6],

  // eye_witch
  ['eye_witch', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_witch', 'minecraft:chests/end_city_treasure', 12],
  ['eye_witch', 'minecraft:chests/stronghold_corridor',  6],

  // eye_wither
  ['eye_wither', 'minecraft:chests/ancient_city_ice_box', 12],
  ['eye_wither', 'minecraft:chests/end_city_treasure', 12],
  ['eye_wither', 'minecraft:chests/stronghold_corridor',  6],

  // falconry
  ['falconry', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['falconry', 'minecraft:chests/jungle_temple', 12],
  ['falconry', 'minecraft:chests/stronghold_library',  6],
  ['falconry', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // field_medicine
  ['field_medicine', 'minecraft:chests/stronghold_library', 17],
  ['field_medicine', 'minecraft:chests/woodland_mansion',  8],
  ['field_medicine', 'mowziesmobs:chests/monastery_chest', 17],
  ['field_medicine', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // fire_school
  ['fire_school', 'ati_structures:chests/library',  8],
  ['fire_school', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['fire_school', 'minecraft:chests/jungle_temple', 17],
  ['fire_school', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // fishing_arts
  ['fishing_arts', 'ati_structures:chests/library', 17],
  ['fishing_arts', 'minecraft:chests/stronghold_library', 17],

  // foraging_almanac
  ['foraging_almanac', 'cataclysm:chests/frosted_prison_treasure', 11],
  ['foraging_almanac', 'dungeons_and_combat:chests/forgotten_sand', 11],
  ['foraging_almanac', 'minecraft:chests/jungle_temple', 22],
  ['foraging_almanac', 'mowziesmobs:chests/umvuthana_grove_chest', 22],

  // furniturecraft
  ['furniturecraft', 'ati_structures:chests/library', 17],
  ['furniturecraft', 'minecraft:chests/stronghold_library', 17],

  // glassworking
  ['glassworking', 'ati_structures:chests/library',  8],
  ['glassworking', 'minecraft:chests/stronghold_library', 17],
  ['glassworking', 'minecraft:chests/village/village_cartographer', 17],
  ['glassworking', 'traveloptics:chests/void_cathedral/library_higher_basic',  8],

  // god_green_genie
  ['god_green_genie', 'minecraft:chests/stronghold_library', 12],
  ['god_green_genie', 'minecraft:chests/village/village_cartographer', 12],
  ['god_green_genie', 'mowziesmobs:chests/umvuthana_grove_chest',  6],
  ['god_green_genie', 'traveloptics:chests/void_cathedral/library_higher_basic',  6],

  // god_pontiff
  ['god_pontiff', 'minecraft:chests/stronghold_library',  8],
  ['god_pontiff', 'minecraft:chests/woodland_mansion',  4],
  ['god_pontiff', 'mowziesmobs:chests/monastery_chest',  8],

  // god_scarlet_king
  ['god_scarlet_king', 'alexscaves:chests/witch_hut',  8],
  ['god_scarlet_king', 'minecraft:chests/end_city_treasure',  4],
  ['god_scarlet_king', 'minecraft:chests/stronghold_library',  4],
  ['god_scarlet_king', 'minecraft:chests/witch_hut',  8],

  // god_sunleia
  ['god_sunleia', 'dungeons_and_combat:chests/forgotten_sand',  4],
  ['god_sunleia', 'minecraft:chests/end_city_treasure',  4],
  ['god_sunleia', 'minecraft:chests/jungle_temple',  8],
  ['god_sunleia', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // god_void_worm
  ['god_void_worm', 'minecraft:chests/end_city_treasure',  3],
  ['god_void_worm', 'minecraft:chests/stronghold_library',  6],
  ['god_void_worm', 'minecraft:chests/village/village_cartographer',  6],
  ['god_void_worm', 'traveloptics:chests/void_cathedral/library_higher_basic',  3],

  // god_warborn
  ['god_warborn', 'ati_structures:chests/library',  8],
  ['god_warborn', 'dungeons_and_combat:chests/blazing_fortress_loot',  4],
  ['god_warborn', 'minecraft:chests/village/village_weaponsmith',  8],
  ['god_warborn', 'minecraft:chests/witch_hut',  4],

  // gravitic_engineering
  ['gravitic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic',  8],
  ['gravitic_engineering', 'mebahelcreaturesdwarven:chests/dwemer_tower',  8],
  ['gravitic_engineering', 'minecraft:chests/ancient_city',  4],
  ['gravitic_engineering', 'minecraft:chests/stronghold_library',  4],

  // gunsmithing
  ['gunsmithing', 'ati_structures:chests/library', 12],
  ['gunsmithing', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['gunsmithing', 'minecraft:chests/village/village_weaponsmith', 12],

  // hearthkeepers_manual
  ['hearthkeepers_manual', 'minecraft:chests/stronghold_library', 22],
  ['hearthkeepers_manual', 'minecraft:chests/woodland_mansion', 11],
  ['hearthkeepers_manual', 'mowziesmobs:chests/monastery_chest', 22],
  ['hearthkeepers_manual', 'mowziesmobs:chests/umvuthana_grove_chest', 11],

  // heavy_plate_discipline
  ['heavy_plate_discipline', 'ati_structures:chests/library', 12],
  ['heavy_plate_discipline', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['heavy_plate_discipline', 'minecraft:chests/village/village_weaponsmith', 12],

  // holy_school
  ['holy_school', 'minecraft:chests/stronghold_library', 17],
  ['holy_school', 'minecraft:chests/woodland_mansion',  8],
  ['holy_school', 'mowziesmobs:chests/monastery_chest', 17],

  // ice_school
  ['ice_school', 'aquamirae:chests/ship_1', 17],
  ['ice_school', 'cataclysm:chests/frosted_prison_treasure', 17],
  ['ice_school', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters',  8],

  // infernal_passage
  ['infernal_passage', 'alexscaves:chests/witch_hut', 12],
  ['infernal_passage', 'ati_structures:chests/library',  6],
  ['infernal_passage', 'minecraft:chests/stronghold_library',  6],
  ['infernal_passage', 'minecraft:chests/witch_hut', 12],

  // kinetic_engineering
  ['kinetic_engineering', 'ati_structures:chests/library', 12],
  ['kinetic_engineering', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['kinetic_engineering', 'minecraft:chests/village/village_weaponsmith', 12],

  // leatherworking
  ['leatherworking', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['leatherworking', 'minecraft:chests/jungle_temple', 12],
  ['leatherworking', 'minecraft:chests/stronghold_library',  6],
  ['leatherworking', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // lightning_school
  ['lightning_school', 'minecraft:chests/stronghold_library', 17],
  ['lightning_school', 'minecraft:chests/village/village_cartographer', 17],
  ['lightning_school', 'traveloptics:chests/void_cathedral/library_higher_basic',  8],

  // long_road
  ['long_road', 'minecraft:chests/stronghold_library', 22],
  ['long_road', 'minecraft:chests/village/village_cartographer', 22],
  ['long_road', 'traveloptics:chests/void_cathedral/library_higher_basic', 11],

  // lost_void
  ['lost_void', 'minecraft:chests/end_city_treasure',  4],
  ['lost_void', 'minecraft:chests/stronghold_library',  8],
  ['lost_void', 'minecraft:chests/village/village_cartographer',  8],
  ['lost_void', 'traveloptics:chests/void_cathedral/library_higher_basic',  4],

  // many_tables
  ['many_tables', 'ati_structures:chests/library', 17],
  ['many_tables', 'minecraft:chests/stronghold_library', 17],

  // metalworking
  ['metalworking', 'ati_structures:chests/library', 12],
  ['metalworking', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['metalworking', 'mebahelcreaturesdwarven:chests/dwemer_tower',  6],
  ['metalworking', 'minecraft:chests/village/village_weaponsmith', 12],

  // mob_faction_deep_ones
  ['mob_faction_deep_ones', 'cataclysm:chests/frosted_prison_treasure',  4],
  ['mob_faction_deep_ones', 'minecraft:chests/stronghold_library',  8],
  ['mob_faction_deep_ones', 'minecraft:chests/village/village_cartographer',  8],
  ['mob_faction_deep_ones', 'traveloptics:chests/void_cathedral/library_higher_basic',  4],

  // mounted_rail
  ['mounted_rail', 'ati_structures:chests/library', 17],
  ['mounted_rail', 'minecraft:chests/stronghold_library', 17],

  // music_records
  ['music_records', 'ati_structures:chests/library', 17],
  ['music_records', 'minecraft:chests/stronghold_library', 17],

  // music_screens
  ['music_screens', 'ati_structures:chests/library',  8],
  ['music_screens', 'minecraft:chests/stronghold_library',  8],

  // music_speakers
  ['music_speakers', 'ati_structures:chests/library', 12],
  ['music_speakers', 'minecraft:chests/stronghold_library', 12],

  // mythril_age
  ['mythril_age', 'mebahelcreaturesdwarven:chests/dwemer_ruin_epic',  8],
  ['mythril_age', 'mebahelcreaturesdwarven:chests/dwemer_tower',  8],
  ['mythril_age', 'minecraft:chests/ancient_city',  4],
  ['mythril_age', 'minecraft:chests/end_city_treasure',  4],

  // naturalist_basics
  ['naturalist_basics', 'ati_structures:chests/library', 22],
  ['naturalist_basics', 'minecraft:chests/stronghold_library', 22],

  // nature_school
  ['nature_school', 'cataclysm:chests/frosted_prison_treasure',  8],
  ['nature_school', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['nature_school', 'minecraft:chests/jungle_temple', 17],
  ['nature_school', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // nature_void
  ['nature_void', 'ati_structures:chests/library',  8],
  ['nature_void', 'minecraft:chests/stronghold_library',  8],

  // numismatic_mechanisms
  ['numismatic_mechanisms', 'ati_structures:chests/library', 12],
  ['numismatic_mechanisms', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['numismatic_mechanisms', 'minecraft:chests/stronghold_library',  6],
  ['numismatic_mechanisms', 'minecraft:chests/village/village_weaponsmith', 12],

  // path_to_divinity
  ['path_to_divinity', 'minecraft:chests/ancient_city_ice_box',  4],
  ['path_to_divinity', 'minecraft:chests/end_city_treasure',  4],
  ['path_to_divinity', 'minecraft:chests/stronghold_corridor',  3],

  // photography_arts
  ['photography_arts', 'ati_structures:chests/library', 17],
  ['photography_arts', 'minecraft:chests/stronghold_library', 17],

  // powergrid_engineering
  ['powergrid_engineering', 'ati_structures:chests/library', 12],
  ['powergrid_engineering', 'minecraft:chests/stronghold_library', 12],

  // redstone_principles
  ['redstone_principles', 'ati_structures:chests/library', 12],
  ['redstone_principles', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['redstone_principles', 'minecraft:chests/stronghold_library',  6],
  ['redstone_principles', 'minecraft:chests/village/village_weaponsmith', 12],

  // scales_and_steel
  ['scales_and_steel', 'ati_structures:chests/library', 12],
  ['scales_and_steel', 'cataclysm:chests/frosted_prison_treasure',  6],
  ['scales_and_steel', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['scales_and_steel', 'minecraft:chests/village/village_weaponsmith', 12],

  // scroll_end_passage
  ['scroll_end_passage', 'ati_structures:chests/library', 17],
  ['scroll_end_passage', 'minecraft:chests/stronghold_library', 17],

  // scrollcasting
  ['scrollcasting', 'minecraft:chests/stronghold_library', 12],
  ['scrollcasting', 'minecraft:chests/witch_hut',  6],
  ['scrollcasting', 'minecraft:chests/woodland_mansion',  6],
  ['scrollcasting', 'mowziesmobs:chests/monastery_chest', 12],

  // sculk_sickness
  ['sculk_sickness', 'aquamirae:chests/ship_1', 12],
  ['sculk_sickness', 'cataclysm:chests/frosted_prison_treasure', 12],
  ['sculk_sickness', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters',  6],
  ['sculk_sickness', 'minecraft:chests/stronghold_library',  6],

  // seafood_mastery
  ['seafood_mastery', 'aquamirae:chests/ship_1', 17],
  ['seafood_mastery', 'cataclysm:chests/frosted_prison_treasure', 17],
  ['seafood_mastery', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters',  8],
  ['seafood_mastery', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // slay_abaddon
  ['slay_abaddon', 'ati_structures:chests/library', 22],
  ['slay_abaddon', 'minecraft:chests/stronghold_library', 22],

  // slay_amphithere
  ['slay_amphithere', 'ati_structures:chests/library', 22],
  ['slay_amphithere', 'minecraft:chests/stronghold_library', 22],

  // slay_ancient_remnant
  ['slay_ancient_remnant', 'ati_structures:chests/library', 22],
  ['slay_ancient_remnant', 'minecraft:chests/stronghold_library', 22],

  // slay_aptrgangr
  ['slay_aptrgangr', 'ati_structures:chests/library', 22],
  ['slay_aptrgangr', 'minecraft:chests/stronghold_library', 22],

  // slay_aqua_grandmaster
  ['slay_aqua_grandmaster', 'ati_structures:chests/library', 22],
  ['slay_aqua_grandmaster', 'minecraft:chests/stronghold_library', 22],

  // slay_atlatitan
  ['slay_atlatitan', 'ati_structures:chests/library', 22],
  ['slay_atlatitan', 'minecraft:chests/stronghold_library', 22],

  // slay_ballista_golem
  ['slay_ballista_golem', 'ati_structures:chests/library', 22],
  ['slay_ballista_golem', 'minecraft:chests/stronghold_library', 22],

  // slay_barako
  ['slay_barako', 'ati_structures:chests/library', 22],
  ['slay_barako', 'minecraft:chests/stronghold_library', 22],

  // slay_brainiac
  ['slay_brainiac', 'ati_structures:chests/library', 22],
  ['slay_brainiac', 'minecraft:chests/stronghold_library', 22],

  // slay_brood_eetle
  ['slay_brood_eetle', 'ati_structures:chests/library', 22],
  ['slay_brood_eetle', 'minecraft:chests/stronghold_library', 22],

  // slay_chaac
  ['slay_chaac', 'ati_structures:chests/library', 22],
  ['slay_chaac', 'minecraft:chests/stronghold_library', 22],

  // slay_chaos_spawner
  ['slay_chaos_spawner', 'ati_structures:chests/library', 22],
  ['slay_chaos_spawner', 'minecraft:chests/stronghold_library', 22],

  // slay_charro
  ['slay_charro', 'ati_structures:chests/library', 22],
  ['slay_charro', 'minecraft:chests/stronghold_library', 22],

  // slay_cockatrice
  ['slay_cockatrice', 'ati_structures:chests/library', 22],
  ['slay_cockatrice', 'minecraft:chests/stronghold_library', 22],

  // slay_coralssus
  ['slay_coralssus', 'ati_structures:chests/library', 22],
  ['slay_coralssus', 'minecraft:chests/stronghold_library', 22],

  // slay_cornelia_fleet
  ['slay_cornelia_fleet', 'ati_structures:chests/library', 22],
  ['slay_cornelia_fleet', 'minecraft:chests/stronghold_library', 22],

  // slay_cyclops
  ['slay_cyclops', 'ati_structures:chests/library', 22],
  ['slay_cyclops', 'minecraft:chests/stronghold_library', 22],

  // slay_death_worm
  ['slay_death_worm', 'ati_structures:chests/library', 22],
  ['slay_death_worm', 'minecraft:chests/stronghold_library', 22],

  // slay_ender_dragon
  ['slay_ender_dragon', 'ati_structures:chests/library', 22],
  ['slay_ender_dragon', 'minecraft:chests/stronghold_library', 22],

  // slay_ender_golem
  ['slay_ender_golem', 'ati_structures:chests/library', 22],
  ['slay_ender_golem', 'minecraft:chests/stronghold_library', 22],

  // slay_ender_guardian
  ['slay_ender_guardian', 'ati_structures:chests/library', 22],
  ['slay_ender_guardian', 'minecraft:chests/stronghold_library', 22],

  // slay_fairkeeper_boros
  ['slay_fairkeeper_boros', 'ati_structures:chests/library', 22],
  ['slay_fairkeeper_boros', 'minecraft:chests/stronghold_library', 22],

  // slay_fairkeeper_ouros
  ['slay_fairkeeper_ouros', 'ati_structures:chests/library', 22],
  ['slay_fairkeeper_ouros', 'minecraft:chests/stronghold_library', 22],

  // slay_ferrous_wroughtnaut
  ['slay_ferrous_wroughtnaut', 'ati_structures:chests/library', 22],
  ['slay_ferrous_wroughtnaut', 'minecraft:chests/stronghold_library', 22],

  // slay_fire_dragon
  ['slay_fire_dragon', 'ati_structures:chests/library', 22],
  ['slay_fire_dragon', 'minecraft:chests/stronghold_library', 22],

  // slay_forsaken
  ['slay_forsaken', 'ati_structures:chests/library', 22],
  ['slay_forsaken', 'minecraft:chests/stronghold_library', 22],

  // slay_frostmaw
  ['slay_frostmaw', 'ati_structures:chests/library', 22],
  ['slay_frostmaw', 'minecraft:chests/stronghold_library', 22],

  // slay_golden_guard
  ['slay_golden_guard', 'ati_structures:chests/library', 22],
  ['slay_golden_guard', 'minecraft:chests/stronghold_library', 22],

  // slay_grave_watcher
  ['slay_grave_watcher', 'ati_structures:chests/library', 22],
  ['slay_grave_watcher', 'minecraft:chests/stronghold_library', 22],

  // slay_green_genie
  ['slay_green_genie', 'ati_structures:chests/library', 22],
  ['slay_green_genie', 'minecraft:chests/stronghold_library', 22],

  // slay_grim_reaper
  ['slay_grim_reaper', 'ati_structures:chests/library', 22],
  ['slay_grim_reaper', 'minecraft:chests/stronghold_library', 22],

  // slay_gum_worm
  ['slay_gum_worm', 'ati_structures:chests/library', 22],
  ['slay_gum_worm', 'minecraft:chests/stronghold_library', 22],

  // slay_harbinger
  ['slay_harbinger', 'ati_structures:chests/library', 22],
  ['slay_harbinger', 'minecraft:chests/stronghold_library', 22],

  // slay_high_priest
  ['slay_high_priest', 'ati_structures:chests/library', 22],
  ['slay_high_priest', 'minecraft:chests/stronghold_library', 22],

  // slay_hippogryph
  ['slay_hippogryph', 'ati_structures:chests/library', 22],
  ['slay_hippogryph', 'minecraft:chests/stronghold_library', 22],

  // slay_hullbreaker
  ['slay_hullbreaker', 'ati_structures:chests/library', 22],
  ['slay_hullbreaker', 'minecraft:chests/stronghold_library', 22],

  // slay_hydra
  ['slay_hydra', 'ati_structures:chests/library', 22],
  ['slay_hydra', 'minecraft:chests/stronghold_library', 22],

  // slay_ice_dragon
  ['slay_ice_dragon', 'ati_structures:chests/library', 22],
  ['slay_ice_dragon', 'minecraft:chests/stronghold_library', 22],

  // slay_ignis
  ['slay_ignis', 'ati_structures:chests/library', 22],
  ['slay_ignis', 'minecraft:chests/stronghold_library', 22],

  // slay_kamath
  ['slay_kamath', 'ati_structures:chests/library', 22],
  ['slay_kamath', 'minecraft:chests/stronghold_library', 22],

  // slay_kukulkan
  ['slay_kukulkan', 'ati_structures:chests/library', 22],
  ['slay_kukulkan', 'minecraft:chests/stronghold_library', 22],

  // slay_leviathan
  ['slay_leviathan', 'ati_structures:chests/library', 22],
  ['slay_leviathan', 'minecraft:chests/stronghold_library', 22],

  // slay_licowitch
  ['slay_licowitch', 'ati_structures:chests/library', 22],
  ['slay_licowitch', 'minecraft:chests/stronghold_library', 22],

  // slay_lightning_dragon
  ['slay_lightning_dragon', 'ati_structures:chests/library', 22],
  ['slay_lightning_dragon', 'minecraft:chests/stronghold_library', 22],

  // slay_luxtructosaurus
  ['slay_luxtructosaurus', 'ati_structures:chests/library', 22],
  ['slay_luxtructosaurus', 'minecraft:chests/stronghold_library', 22],

  // slay_maledictus
  ['slay_maledictus', 'ati_structures:chests/library', 22],
  ['slay_maledictus', 'minecraft:chests/stronghold_library', 22],

  // slay_maze_mother
  ['slay_maze_mother', 'ati_structures:chests/library', 22],
  ['slay_maze_mother', 'minecraft:chests/stronghold_library', 22],

  // slay_mimy_chest
  ['slay_mimy_chest', 'ati_structures:chests/library', 22],
  ['slay_mimy_chest', 'minecraft:chests/stronghold_library', 22],

  // slay_mine_guardian
  ['slay_mine_guardian', 'ati_structures:chests/library', 22],
  ['slay_mine_guardian', 'minecraft:chests/stronghold_library', 22],

  // slay_myrmex_queen
  ['slay_myrmex_queen', 'ati_structures:chests/library', 22],
  ['slay_myrmex_queen', 'minecraft:chests/stronghold_library', 22],

  // slay_netherite_monstrosity
  ['slay_netherite_monstrosity', 'ati_structures:chests/library', 22],
  ['slay_netherite_monstrosity', 'minecraft:chests/stronghold_library', 22],

  // slay_nightwarden
  ['slay_nightwarden', 'ati_structures:chests/library', 22],
  ['slay_nightwarden', 'minecraft:chests/stronghold_library', 22],

  // slay_pontiff
  ['slay_pontiff', 'ati_structures:chests/library', 22],
  ['slay_pontiff', 'minecraft:chests/stronghold_library', 22],

  // slay_pyro_knight
  ['slay_pyro_knight', 'ati_structures:chests/library', 22],
  ['slay_pyro_knight', 'minecraft:chests/stronghold_library', 22],

  // slay_scarlet_king
  ['slay_scarlet_king', 'ati_structures:chests/library', 22],
  ['slay_scarlet_king', 'minecraft:chests/stronghold_library', 22],

  // slay_scorched_sentinel
  ['slay_scorched_sentinel', 'ati_structures:chests/library', 22],
  ['slay_scorched_sentinel', 'minecraft:chests/stronghold_library', 22],

  // slay_sculptor
  ['slay_sculptor', 'ati_structures:chests/library', 22],
  ['slay_sculptor', 'minecraft:chests/stronghold_library', 22],

  // slay_star_monolith
  ['slay_star_monolith', 'ati_structures:chests/library', 22],
  ['slay_star_monolith', 'minecraft:chests/stronghold_library', 22],

  // slay_sunleia
  ['slay_sunleia', 'ati_structures:chests/library', 22],
  ['slay_sunleia', 'minecraft:chests/stronghold_library', 22],

  // slay_symbiont
  ['slay_symbiont', 'ati_structures:chests/library', 22],
  ['slay_symbiont', 'minecraft:chests/stronghold_library', 22],

  // slay_tempest
  ['slay_tempest', 'ati_structures:chests/library', 22],
  ['slay_tempest', 'minecraft:chests/stronghold_library', 22],

  // slay_torture
  ['slay_torture', 'ati_structures:chests/library', 22],
  ['slay_torture', 'minecraft:chests/stronghold_library', 22],

  // slay_tremorzilla
  ['slay_tremorzilla', 'ati_structures:chests/library', 22],
  ['slay_tremorzilla', 'minecraft:chests/stronghold_library', 22],

  // slay_umvuthi
  ['slay_umvuthi', 'ati_structures:chests/library', 22],
  ['slay_umvuthi', 'minecraft:chests/stronghold_library', 22],

  // slay_veilguard
  ['slay_veilguard', 'ati_structures:chests/library', 22],
  ['slay_veilguard', 'minecraft:chests/stronghold_library', 22],

  // slay_void_worm
  ['slay_void_worm', 'ati_structures:chests/library', 22],
  ['slay_void_worm', 'minecraft:chests/stronghold_library', 22],

  // slay_warborn
  ['slay_warborn', 'ati_structures:chests/library', 22],
  ['slay_warborn', 'minecraft:chests/stronghold_library', 22],

  // slay_warden
  ['slay_warden', 'ati_structures:chests/library', 22],
  ['slay_warden', 'minecraft:chests/stronghold_library', 22],

  // slay_wither
  ['slay_wither', 'ati_structures:chests/library', 22],
  ['slay_wither', 'minecraft:chests/stronghold_library', 22],

  // small_ships
  ['small_ships', 'aquamirae:chests/ship_1', 12],
  ['small_ships', 'cataclysm:chests/frosted_prison_treasure', 12],
  ['small_ships', 'irons_spellbooks:chests/impaled_icebreaker/captain_quarters',  6],
  ['small_ships', 'minecraft:chests/stronghold_library',  6],

  // soul_black_smith
  ['soul_black_smith', 'ati_structures:chests/library',  6],
  ['soul_black_smith', 'dungeons_and_combat:chests/blazing_fortress_loot',  3],
  ['soul_black_smith', 'minecraft:chests/village/village_weaponsmith',  6],
  ['soul_black_smith', 'minecraft:chests/witch_hut',  3],

  // soups_and_stews
  ['soups_and_stews', 'minecraft:chests/stronghold_library', 17],
  ['soups_and_stews', 'minecraft:chests/woodland_mansion',  8],
  ['soups_and_stews', 'mowziesmobs:chests/monastery_chest', 17],
  ['soups_and_stews', 'mowziesmobs:chests/umvuthana_grove_chest',  8],

  // specialist_suits
  ['specialist_suits', 'ati_structures:chests/library',  8],
  ['specialist_suits', 'dungeons_and_combat:chests/blazing_fortress_loot',  4],
  ['specialist_suits', 'mebahelcreaturesdwarven:chests/dwemer_tower',  4],
  ['specialist_suits', 'minecraft:chests/village/village_weaponsmith',  8],

  // steam_engineering
  ['steam_engineering', 'ati_structures:chests/library', 12],
  ['steam_engineering', 'dungeons_and_combat:chests/blazing_fortress_loot',  6],
  ['steam_engineering', 'minecraft:chests/village/village_weaponsmith', 12],

  // stoneworking
  ['stoneworking', 'ati_structures:chests/library', 17],
  ['stoneworking', 'dungeons_and_combat:chests/blazing_fortress_loot',  8],
  ['stoneworking', 'mebahelcreaturesdwarven:chests/dwemer_tower',  8],
  ['stoneworking', 'minecraft:chests/village/village_weaponsmith', 17],

  // sweets_and_confections
  ['sweets_and_confections', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['sweets_and_confections', 'minecraft:chests/jungle_temple', 17],
  ['sweets_and_confections', 'minecraft:chests/stronghold_library',  8],
  ['sweets_and_confections', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // symbiont_pursuit
  ['symbiont_pursuit', 'ati_structures:chests/library',  4],
  ['symbiont_pursuit', 'minecraft:chests/ancient_city_ice_box',  8],
  ['symbiont_pursuit', 'minecraft:chests/end_city_treasure',  8],
  ['symbiont_pursuit', 'minecraft:chests/stronghold_corridor',  4],

  // tea_ceremony
  ['tea_ceremony', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['tea_ceremony', 'minecraft:chests/jungle_temple', 17],
  ['tea_ceremony', 'minecraft:chests/stronghold_library',  8],
  ['tea_ceremony', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // teleportation_arts
  ['teleportation_arts', 'ati_structures:chests/library',  8],
  ['teleportation_arts', 'minecraft:chests/stronghold_library',  8],

  // tonic_alchemy
  ['tonic_alchemy', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['tonic_alchemy', 'minecraft:chests/jungle_temple', 12],
  ['tonic_alchemy', 'minecraft:chests/stronghold_library',  6],
  ['tonic_alchemy', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // torch_and_lantern_craft
  ['torch_and_lantern_craft', 'ati_structures:chests/library', 11],
  ['torch_and_lantern_craft', 'minecraft:chests/stronghold_library', 22],
  ['torch_and_lantern_craft', 'minecraft:chests/village/village_cartographer', 22],
  ['torch_and_lantern_craft', 'traveloptics:chests/void_cathedral/library_higher_basic', 11],

  // trim_smithing
  ['trim_smithing', 'ati_structures:chests/library', 17],
  ['trim_smithing', 'minecraft:chests/stronghold_library', 17],

  // vinification
  ['vinification', 'dungeons_and_combat:chests/forgotten_sand',  8],
  ['vinification', 'minecraft:chests/jungle_temple', 17],
  ['vinification', 'minecraft:chests/stronghold_library',  8],
  ['vinification', 'mowziesmobs:chests/umvuthana_grove_chest', 17],

  // void_table
  ['void_table', 'ati_structures:chests/library', 17],
  ['void_table', 'minecraft:chests/stronghold_library', 17],

  // warriors_feast
  ['warriors_feast', 'ati_structures:chests/library', 17],
  ['warriors_feast', 'minecraft:chests/stronghold_library', 17],

  // whistle_caller_basic
  ['whistle_caller_basic', 'cataclysm:chests/frosted_prison_treasure', 11],
  ['whistle_caller_basic', 'dungeons_and_combat:chests/forgotten_sand', 11],
  ['whistle_caller_basic', 'minecraft:chests/jungle_temple', 22],
  ['whistle_caller_basic', 'mowziesmobs:chests/umvuthana_grove_chest', 22],

  // wild_study
  ['wild_study', 'cataclysm:chests/frosted_prison_treasure',  6],
  ['wild_study', 'dungeons_and_combat:chests/forgotten_sand',  6],
  ['wild_study', 'minecraft:chests/jungle_temple', 12],
  ['wild_study', 'mowziesmobs:chests/umvuthana_grove_chest', 12],

  // wilderness_camping
  ['wilderness_camping', 'ati_structures:chests/library', 17],
  ['wilderness_camping', 'minecraft:chests/stronghold_library', 17],

  // ── Alex's Caves biome scrolls (added 2026-05-15) ──
  // Each found in its own biome's ruins + underground cabin, T3 rate.

  // magnetic_deep
  ['magnetic_deep', 'alexscaves:chests/magnetic_ruins', 12],
  ['magnetic_deep', 'alexscaves:chests/underground_cabin_magnetic_caves', 6],
  ['magnetic_deep', 'minecraft:chests/stronghold_library', 6],

  // primordial_strata
  ['primordial_strata', 'alexscaves:chests/caveman_house', 12],
  ['primordial_strata', 'alexscaves:chests/underground_cabin_primordial_caves', 6],
  ['primordial_strata', 'minecraft:chests/stronghold_library', 6],

  // blighted_hollows
  ['blighted_hollows', 'alexscaves:chests/toxic_ruins', 12],
  ['blighted_hollows', 'alexscaves:chests/underground_cabin_toxic_caves', 6],
  ['blighted_hollows', 'minecraft:chests/stronghold_library', 6],

  // forlorn_hollows
  ['forlorn_hollows', 'alexscaves:chests/forlorn_ruins', 12],
  ['forlorn_hollows', 'alexscaves:chests/underground_cabin_forlorn_hollows', 6],
  ['forlorn_hollows', 'minecraft:chests/stronghold_library', 6],

  // abyssal_chasm
  ['abyssal_chasm', 'alexscaves:chests/abyssal_ruins', 12],
  ['abyssal_chasm', 'alexscaves:chests/underground_cabin_abyssal_chasm', 6],
  ['abyssal_chasm', 'minecraft:chests/stronghold_library', 6],

  // sugarstone_caverns
  ['sugarstone_caverns', 'alexscaves:chests/gingerbread_town', 12],
  ['sugarstone_caverns', 'alexscaves:chests/underground_cabin_candy_cavity', 6],
  ['sugarstone_caverns', 'minecraft:chests/stronghold_library', 6],

  // woodworking — early vanilla craft, T2 rate
  ['woodworking', 'minecraft:chests/stronghold_library', 17],
  ['woodworking', 'minecraft:chests/woodland_mansion', 8],
  ['woodworking', 'minecraft:chests/village/village_plains_house', 17],

  // alchemy — brewing discipline, T3 rate; witch hut is the thematic home
  ['alchemy', 'minecraft:chests/witch_hut', 12],
  ['alchemy', 'minecraft:chests/stronghold_library', 12],
  ['alchemy', 'minecraft:chests/woodland_mansion', 6],

  // runesmithing — Simply Swords rune subsystem, master tier (T4)
  ['runesmithing', 'ati_structures:chests/library', 8],
  ['runesmithing', 'minecraft:chests/stronghold_library', 8],
  ['runesmithing', 'minecraft:chests/village/village_weaponsmith', 8],

  // ── Legendary named-weapon peers (added 2026-05-25) ──
  // arsenal_legendary_polearms — peer of legendary_blades at 6%
  ['arsenal_legendary_polearms', 'ati_structures:chests/library',  6],
  ['arsenal_legendary_polearms', 'minecraft:chests/stronghold_library',  6],

  // arsenal_legendary_ranged — peer of legendary_blades at 6%
  ['arsenal_legendary_ranged', 'ati_structures:chests/library',  6],
  ['arsenal_legendary_ranged', 'minecraft:chests/stronghold_library',  6],

  // five_vessels_apocrypha — rare apocrypha, 3% in libraries + 2% in deep ruins
  ['five_vessels_apocrypha', 'ati_structures:chests/library',  3],
  ['five_vessels_apocrypha', 'minecraft:chests/stronghold_library',  3],
  ['five_vessels_apocrypha', 'minecraft:chests/end_city_treasure',  2],
  ['five_vessels_apocrypha', 'traveloptics:chests/void_cathedral/library_higher_basic',  2],

  // civ_scrollwright — the bootstrap meta-scroll, 12% in libraries
  ['civ_scrollwright', 'ati_structures:chests/library', 12],
  ['civ_scrollwright', 'minecraft:chests/stronghold_library', 12],

  // ── Age scrolls (added 2026-05-25) ──
  // Ultra-rare 1-2% in libraries. Alternate-route glimpse, not skip-the-chapter.
  // Players who find one before earning it know what's coming, but the chapter
  // still requires the quest. Per CANON_LOCK chapter progression.
  ['abyssal_age',       'minecraft:chests/stronghold_library', 2],
  ['abyssal_age',       'ati_structures:chests/library',       1],
  ['culture_age',       'minecraft:chests/stronghold_library', 2],
  ['culture_age',       'ati_structures:chests/library',       1],
  ['cursed_age',        'minecraft:chests/stronghold_library', 2],
  ['cursed_age',        'ati_structures:chests/library',       1],
  ['eye_hunt_age',      'minecraft:chests/stronghold_library', 2],
  ['eye_hunt_age',      'ati_structures:chests/library',       1],
  ['fermentation_age',  'minecraft:chests/stronghold_library', 2],
  ['fermentation_age',  'ati_structures:chests/library',       1],
  ['hearth_age',        'minecraft:chests/stronghold_library', 2],
  ['hearth_age',        'ati_structures:chests/library',       1],
  ['infernal_age',      'minecraft:chests/stronghold_library', 2],
  ['infernal_age',      'ati_structures:chests/library',       1],
  ['kindled_age',       'minecraft:chests/stronghold_library', 2],
  ['kindled_age',       'ati_structures:chests/library',       1],
  ['oil_age',           'minecraft:chests/stronghold_library', 2],
  ['oil_age',           'ati_structures:chests/library',       1],
  ['steam_age',         'minecraft:chests/stronghold_library', 2],
  ['steam_age',         'ati_structures:chests/library',       1],
  ['water_age',         'minecraft:chests/stronghold_library', 2],
  ['water_age',         'ati_structures:chests/library',       1],

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

  console.info('[Sinborn] Injected ' + SCROLL_SOURCES.length + ' scroll loot entries')
})