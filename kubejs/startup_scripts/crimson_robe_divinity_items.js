// ============================================================
// SINBORN ODYSSEY 2 — Robe of Divinity item modification
//
// STARTUP HALF of crimson_robe_divinity. ItemEvents.modification
// is a startup-only event in KubeJS, so this lives here. The
// runtime tick (Resistance III when wearing full regalia) stays
// in server_scripts/crimson_robe_divinity.js.
//
// Sets all Monarch pieces + Crimson Weapons unbreakable
// (maxDamage = 0) + fire-resistant, to match Iron's Crown's
// DEV-tier durability per ISS internal definition.
// ============================================================

const MONARCH_HEAD  = 'dungeons_and_combat:monarch_helmet'
const MONARCH_CHEST = 'dungeons_and_combat:monarch_chestplate'
const MONARCH_LEGS  = 'dungeons_and_combat:monarch_leggings'
const MONARCH_FEET  = 'dungeons_and_combat:monarch_boots'

const CRIMSON_WEAPONS = [
  'dungeons_and_combat:crimson_sickle',
  'dungeons_and_combat:crimson_long_sword',
  'dungeons_and_combat:crimson_scythe',
  'dungeons_and_combat:crimson_sickle_sword'
]

ItemEvents.modification(event => {
  event.modify(MONARCH_HEAD,  item => { item.maxDamage = 0; item.fireResistant = true })
  event.modify(MONARCH_CHEST, item => { item.maxDamage = 0; item.fireResistant = true })
  event.modify(MONARCH_LEGS,  item => { item.maxDamage = 0; item.fireResistant = true })
  event.modify(MONARCH_FEET,  item => { item.maxDamage = 0; item.fireResistant = true })

  CRIMSON_WEAPONS.forEach(id => {
    event.modify(id, item => { item.maxDamage = 0; item.fireResistant = true })
  })
})
