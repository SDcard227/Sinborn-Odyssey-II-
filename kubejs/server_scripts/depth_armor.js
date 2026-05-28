// ============================================================
// SINBORN ODYSSEY 2 — Deep Water Pressure Protection
//
// The Pressure mod deals environmental damage at depth.
// This script cancels/reduces that damage when wearing
// diving armor from any of the three diving sets.
//
// Detection: Pressure damage has no attacking entity and
// fires while the player still has air (normal drowning
// only triggers when air = 0).
//
// Armor tiers:
//   Full set (4 pieces): complete Pressure immunity
//   Half set (2+ pieces): 75% Pressure damage reduction
//   1 piece:  no protection (need at least 2)
//
// Qualifying armor:
//   - Aquamirae: Three Bolt, Abyssal/Blinding Abyss, Terrible
//   - Alex's Caves: Diving Armor Set (4 pieces)
//   - Create: Copper/Netherite Diving Helmet + Boots (2 pieces)
//
// Mixed sets count! A Create helmet + Aquamirae boots = 2.
// ============================================================

EntityEvents.hurt(function(event) {
  var entity = event.entity
  if (!entity.player) return
  if (!entity.isInWater()) return

  // Normal drowning (no air left) — let it through
  if (entity.airSupply <= 0) return

  // Only cancel environmental damage (no attacker = Pressure mod)
  var source = event.source
  if (source.getEntity() !== null) return
  if (source.getDirectEntity() !== null) return

  // Count diving armor pieces from all qualifying sets
  var helmet = '' + entity.headArmorItem.id
  var chest  = '' + entity.chestArmorItem.id
  var legs   = '' + entity.legsArmorItem.id
  var boots  = '' + entity.feetArmorItem.id

  var score = 0

  // --- HELMETS ---
  // Aquamirae
  if (helmet === 'aquamirae:three_bolt_helmet')  score++
  if (helmet === 'aquamirae:abyssal_heaume')     score++
  if (helmet === 'aquamirae:abyssal_tiara')      score++
  if (helmet === 'aquamirae:terrible_helmet')     score++
  // Alex's Caves
  if (helmet === 'alexscaves:diving_helmet')      score++
  // Create
  if (helmet === 'create:copper_diving_helmet')   score++
  if (helmet === 'create:netherite_diving_helmet') score++

  // --- CHESTPLATES ---
  // Aquamirae
  if (chest === 'aquamirae:three_bolt_suit')      score++
  if (chest === 'aquamirae:abyssal_brigantine')   score++
  if (chest === 'aquamirae:terrible_chestplate')  score++
  // Alex's Caves
  if (chest === 'alexscaves:diving_chestplate')   score++

  // --- LEGGINGS ---
  // Aquamirae
  if (legs === 'aquamirae:three_bolt_leggings')   score++
  if (legs === 'aquamirae:abyssal_leggings')      score++
  if (legs === 'aquamirae:terrible_leggings')     score++
  // Alex's Caves
  if (legs === 'alexscaves:diving_leggings')      score++

  // --- BOOTS ---
  // Aquamirae
  if (boots === 'aquamirae:three_bolt_boots')     score++
  if (boots === 'aquamirae:abyssal_boots')        score++
  if (boots === 'aquamirae:terrible_boots')       score++
  // Alex's Caves
  if (boots === 'alexscaves:diving_boots')        score++
  // Create
  if (boots === 'create:copper_diving_boots')     score++
  if (boots === 'create:netherite_diving_boots')  score++

  if (score < 2) return

  // Full set: complete Pressure immunity
  if (score >= 4) {
    event.cancel()
    return
  }

  // 2-3 pieces: 75% damage reduction
  event.amount = event.amount * 0.25
})
