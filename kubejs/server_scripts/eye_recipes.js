// ============================================================
// SINBORN ODYSSEY 2 — Eye Recipes (Mechanical Crafter Locked)
//
// Eye recipes live as datapack JSON under:
//   kubejs/data/sinborn/recipes/mechanical_crafting/*.json
//
// ALL eyes craft ONLY on the Create Mechanical Crafter.
// This script:
//   1. Removes all vanilla shaped/shapeless recipes for every
//      eye we own (endrem custom + endrem anchor + cataclysm +
//      mowzies_cataclysm + traveloptics)
//   2. Auto-enchants crafted eyes with DNL Break Protection
//   3. Guaranteed endrem:nether_eye drop from Ignited Revenant
//   4. Guaranteed endrem:evil_eye drop from Ancient Remnant
// ============================================================

// 9 custom Sinborn eyes (designed in-house)
var CUSTOM_EYE_RECIPES = [
  'endrem:black_eye', 'endrem:lost_eye', 'endrem:old_eye',
  'endrem:cold_eye', 'endrem:rogue_eye', 'endrem:cryptic_eye',
  'endrem:magical_eye', 'endrem:corrupted_eye', 'endrem:cursed_eye'
]

// 7 End Remastered anchor eyes (now Create-locked too)
var ANCHOR_EYE_RECIPES = [
  'endrem:evil_eye', 'endrem:exotic_eye', 'endrem:guardian_eye',
  'endrem:nether_eye', 'endrem:undead_eye', 'endrem:witch_eye',
  'endrem:wither_eye'
]

// 8 Cataclysm dungeon eyes
var CATACLYSM_EYE_RECIPES = [
  'cataclysm:abyss_eye', 'cataclysm:cursed_eye', 'cataclysm:desert_eye',
  'cataclysm:flame_eye', 'cataclysm:mech_eye', 'cataclysm:monstrous_eye',
  'cataclysm:storm_eye', 'cataclysm:void_eye'
]

// 4 Mowzie's Cataclysm eyes
var MOWZIE_EYE_RECIPES = [
  'mowzies_cataclysm:frostmaw_eye', 'mowzies_cataclysm:sun_eye',
  'mowzies_cataclysm:tongbi_eye', 'mowzies_cataclysm:wrought_eye'
]

// 1 Traveloptics eye
var TRAVELOPTICS_EYE_RECIPES = [
  'traveloptics:eye_of_nothingness'
]

// 6 ER ProMax fused eyes — overridden to Mechanical Crafter only
// (was shapeless in ProMax mod; we force the apex crafter so the eye system
//  stays consistent — base 16 + cata/mowz/trav + ProMax all use Mech Crafter)
var PROMAX_FUSED_EYE_RECIPES = [
  'end_remastered_promax:environment_eye',
  'end_remastered_promax:enhance_eye',
  'end_remastered_promax:weird_eye',
  'end_remastered_promax:arcane_eye',
  'end_remastered_promax:ancient_eye',
  'end_remastered_promax:vault_eye'
]

var ALL_EYE_RECIPES = CUSTOM_EYE_RECIPES
  .concat(ANCHOR_EYE_RECIPES)
  .concat(CATACLYSM_EYE_RECIPES)
  .concat(MOWZIE_EYE_RECIPES)
  .concat(TRAVELOPTICS_EYE_RECIPES)
  .concat(PROMAX_FUSED_EYE_RECIPES)

ServerEvents.recipes(event => {
  ALL_EYE_RECIPES.forEach(eye => {
    event.remove({ type: 'minecraft:crafting_shaped', output: eye })
    event.remove({ type: 'minecraft:crafting_shapeless', output: eye })
  })
})

ItemEvents.crafted(function(event) {
  var id = event.item.id
  if (ALL_EYE_RECIPES.indexOf(id) === -1) return
  event.item.enchant('dungeonnowloading:break_protection', 1)
})

EntityEvents.death(function(event) {
  var e = event.entity
  var t = e.type

  // Eyes no longer drop from mobs (2026-05-12) — ALL 16 base ER eyes
  // now have Mechanical Crafter recipes. Drops were undermining the recipe economy.
  // Only Warborn Aegis still gets KubeJS-wired drops (his JAR loot is empty).

  // Warborn Aegis — M&L empty loot table. Wired so he's not a "bum".
  if (t == 'mythsandlegends:warborn_aegis') {
    e.block.popItem(Item.of('mythsandlegends:infernum_upgrade_smithing_template'))
    e.block.popItem(Item.of('3x mythsandlegends:infernum_ingot'))
    if (Math.random() < 0.5) {
      e.block.popItem(Item.of('mythsandlegends:cursed_core'))
    }
  }

  // Wither Skeleton — Nether-themed kill grant for the dimension-gate scroll,
  // mirroring the End design (Wither Storm Symbiont drops nature_void).
  // 5% drop = a few fortress kills typically gives the scroll. Lets a player
  // who entered the Nether under-prepared kill their way out of the erosion
  // instead of needing chest-RNG.
  if (t == 'minecraft:wither_skeleton' && Math.random() < 0.05) {
    e.block.popItem(Item.of('historystages:research_scroll', '{StageResearch:"infernal_passage"}'))
  }

  // Withered Symbiont (Wither Storm's final form) — drops nature_void (End survival
  // knowledge — the scroll the kubejs dimension_gates check honors).
  // the_wither scroll is NOT dropped here — Symbiont summon chain requires the
  // Wither already dead, so it would be a circular hardlock. the_wither scroll
  // lives in Nether Fortress / Bastion chest loot instead (see scroll_loot.js).
  if (t == 'witherstormmod:withered_symbiont') {
    e.block.popItem(Item.of('historystages:research_scroll', '{StageResearch:"nature_void"}'))
  }

  // The Nightwarden — Keeper of the Path to Godhood. Lore (per CANON_LOCK §3.95
  // revision 2026-05-03): the Nightwarden was the Ocean Mages' apex magic-deity.
  // After Ocean Mages fell, he became masterless — the last priest-deity holding
  // the divinity-knowledge his civilization had collected before their dissolution.
  // The Excrucis ritual gating ensures the scroll cannot be farmed; only a
  // Sinborn willing to perform the ritual repeatedly can claim it.
  //
  // The Ender Dragon retains her canonical role as Warden of the Portal (she
  // guards Beyond-The-Dream from the Scarlet King's followers) — she just no
  // longer holds the scroll. Two-stage Elden-Ring gate: kill the Dragon to open
  // deeper End access, then find the Void Cathedral and survive the Nightwarden
  // to claim the scroll.
  if (t == 'traveloptics:the_nightwarden') {
    e.block.popItem(Item.of('historystages:research_scroll', '{StageResearch:"path_to_divinity"}'))
  }
})
