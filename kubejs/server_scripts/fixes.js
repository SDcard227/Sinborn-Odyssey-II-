// ============================================================
// SINBORN ODYSSEY 2 — Bug Fixes & Conflict Patches
// ============================================================

// ─────────────────────────────────────────────────────────
// FIX: Sculk Sickness heart loss on death
//
// The sculksickness mod applies sculk_corrosion damage to
// permanently reduce max health on its own terms.
// We cancel that so we control exactly when and how it fires —
// routing it through the Lifesteal max_health attribute instead.
// ─────────────────────────────────────────────────────────
EntityEvents.hurt(event => {
  if (event.source.type === 'sculksickness:sculk_corrosion') {
    event.cancel()
  }
})

// NOTE: Pressure mod uses MCreator player variables, not mob effects.
// pressure:pressure_resistance does NOT exist in the mob_effect registry.
// The mod handles depth damage via its own PressureCheckProcedure — no bypass available via KubeJS.

// NOTE: Sculk sickness death penalty is handled in sculk_death.js
// using the Lifesteal mod's LSData API for proper heart tracking.

// ─────────────────────────────────────────────────────────
// FIX: sliceanddice 3.6.0 — "too many fluid ingredients" crash
//
// sliceanddice auto-converts FD CookingPot recipes to Create Basin
// mixing recipes. Some FD addon recipes have 3 fluid inputs; the
// Create Basin only supports 2. sliceanddice 3.6.0 throws a hard
// IllegalArgumentException instead of skipping them, killing world
// load at 2% spawn preparation.
//
// Fix: remove the 12 offending source recipes before sliceanddice
// scans them. Players lose only the Create Basin automation for
// these specific foods — the cooking pot recipes still exist.
// ─────────────────────────────────────────────────────────
ServerEvents.recipes(event => {
  var offending = [
    // Farmer's Delight base (3-fluid cooking pot recipes)
    'farmersdelight:cooking/blueberry_custard',
    'farmersdelight:cooking/savory_pasta_roll',
    'farmersdelight:cooking/syrup_toast_stacks',
    // Cultural Delights
    'culturaldelights:cooking/spicy_curry',
    'culturaldelights:cooking/poached_eggplants',
    // End's Delight
    'ends_delight:food/bubble_tea',
    'ends_delight:food/dragon_breath_and_chorus_soup',
    // Alex's Mobs Delight
    'alexsmobsdelight:cooking/rainbow_custard',
    // Delightful
    'delightful:food/cooking/matcha_latte',
    // Let's Do Compat
    'letsdocompat:farmersdelight/farm_and_charm/pot_cooking/vinegar_bucket_from_pot_cooking',
    'letsdocompat:farmersdelight/pot_cooking/barley_soup',
    // Rustic Delight / honey_coffee
    'rusticdelight:honey_coffee'
  ]
  offending.forEach(id => {
    try { event.remove({ id: id }) } catch (e) {}
  })
})

// ─────────────────────────────────────────────────────────
// FIX: Command block removal
//
// The Wither Storm mod drops minecraft:command_block on death.
// If a survival player picks one up, they can summon infinite
// Wither Storms. Strip command blocks from non-creative players
// and replace with a command_block_fragment (cosmetic trophy).
// ─────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────
// FIX: Block flint_and_steel from igniting Nether portals
//
// Dimensional Tears (portal_fluid mod) is the intended
// portal ignition method. Flint & steel still works for
// campfires, but right-clicking obsidian is blocked.
// Players are redirected to use portal_fluid:portal_fluid_bottle
// ─────────────────────────────────────────────────────────
BlockEvents.rightClicked('minecraft:obsidian', event => {
  var id = event.item.id
  if (id === 'minecraft:flint_and_steel' || id === 'minecraft:fire_charge') {
    event.cancel()
    event.player.tell(Component.literal('\u00A78This portal will not light this way. Use a Dimensional Tear.'))
  }
})

ItemEvents.pickedUp(function(event) {
  var player = event.player
  if (player.creative || player.spectator) return

  if (event.item.id === 'minecraft:command_block' ||
      event.item.id === 'minecraft:chain_command_block' ||
      event.item.id === 'minecraft:repeating_command_block') {
    // Remove the command block from inventory after a tick (pickup already happened)
    player.server.scheduleInTicks(1, function() {
      for (var i = 0; i < 36; i++) {
        var stack = player.inventory.getItem(i)
        if (stack.id === 'minecraft:command_block' ||
            stack.id === 'minecraft:chain_command_block' ||
            stack.id === 'minecraft:repeating_command_block') {
          player.inventory.setItem(i, Item.of('witherstormmod:command_block_fragment'))
        }
      }
      player.tell(Component.literal('\u00A78The command block crumbles in your hands. Only a fragment remains.'))
    })
  }
})
