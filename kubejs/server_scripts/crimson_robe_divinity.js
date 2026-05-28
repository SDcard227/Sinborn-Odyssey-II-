// ============================================================
// SINBORN ODYSSEY 2 — Robe of Divinity stat enhancement
//
// CANON CORRECTION 2026-05-04: the canonical Robe of Divinity is
// the §cMonarch armor set (D&C creative-tier) PLUS the §cCrimson
// WEAPONS (the creative-only ones). NOT the Crimson armor set as
// previously locked. Per CANON_LOCK §3.98 + §3.99, the Heir's
// HEAD slot is occupied by Iron's Crown (the magic-axis godhood
// crown — +9,900 mana, -90% cooldown, DEV-tier durability per
// ISS bytecode). The Monarch Helmet is therefore NOT worn by the
// canonical Unification loadout. The 3-piece Monarch (chestplate
// + leggings + boots) carries the protection alone, and the
// Crimson Weapons are the canonical sidearm regalia.
//
// Durability parity: Iron's Crown is DEV-tier (Integer.MAX_VALUE
// durability) — already unbreakable per ISS internal definition.
// Monarch pieces + Crimson Weapons are set to maxDamage = 0 to
// match — all regalia unbreakable, as befits First-World
// ceremonial gear preserved across cycles.
//
// This script (SERVER half):
//   1. When the 3-piece Monarch + Iron's Crown is worn together,
//      applies "Sealing Recognition" — Resistance III (50% damage
//      reduction) — as the canonical Unification damage profile.
//   2. The Resistance does NOT trigger if the player has the
//      Mortality effect active, preserving the Godslayer mechanic
//      (Mortality Potion + Rift Knife coordinated strike still
//      kills).
//
// Unbreakable + fire-resistant marking lives in
// kubejs/startup_scripts/crimson_robe_divinity_items.js
// (ItemEvents.modification is a STARTUP-only event in KubeJS).
//
// Lore framing: the 3-piece Monarch recognizes the wearer as
// ascended when paired with the Crown. Mortality Potion suspends
// the recognition; the strike then lands as on a mortal.
// ============================================================

const MONARCH_HEAD  = 'dungeons_and_combat:monarch_helmet'  // canonically NOT worn (Crown takes head)
const MONARCH_CHEST = 'dungeons_and_combat:monarch_chestplate'
const MONARCH_LEGS  = 'dungeons_and_combat:monarch_leggings'
const MONARCH_FEET  = 'dungeons_and_combat:monarch_boots'
const IRONS_CROWN   = 'irons_spellbooks:gold_crown'

// Per-second tick: check if player is wearing the canonical Unification
// regalia (Iron's Crown + 3-piece Monarch). If so, apply Resistance III.
// If Mortality effect is active, skip — Godslayer mechanic must work.
PlayerEvents.tick(event => {
  if (event.player.tickCount % 20 !== 0) return  // every 1 second

  const player = event.player

  // Skip if Mortality effect is active (Godslayer window — Resistance
  // would defeat the canonical mortal-recourse mechanic from §3.99)
  if (player.potionEffects.isActive('ptd:mortality')) return

  // Check the canonical Unification regalia: Iron's Crown + 3-piece Monarch
  const head  = player.getItemBySlot('head').id
  const chest = player.getItemBySlot('chest').id
  const legs  = player.getItemBySlot('legs').id
  const feet  = player.getItemBySlot('feet').id

  const wearingCrown   = (head === IRONS_CROWN)
  const wearingMonarch = (chest === MONARCH_CHEST &&
                          legs  === MONARCH_LEGS  &&
                          feet  === MONARCH_FEET)

  if (wearingCrown && wearingMonarch) {
    // Sealing Recognition — Resistance III (50% damage reduction)
    // Applied silently, no particles. The cosmos recognizes the synthesis.
    player.potionEffects.add('minecraft:resistance', 40, 2, false, false)
  }
})
