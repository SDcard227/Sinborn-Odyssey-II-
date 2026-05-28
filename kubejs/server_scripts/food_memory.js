// ============================================================
// SINBORN ODYSSEY 2 — Food Memory & Craving System
//
// HOW IT WORKS:
//   1. Every food the player eats is stored in their NBT.
//   2. Every 5 minutes, if hungry (foodLevel < 12) and
//      no active craving: 80% chance picks a food from memory,
//      20% picks a food from FULL_FOOD_POOL they haven't eaten.
//   3. When the player eats that food: give a category buff.
//
// The 20% unexplored branch filters FULL_FOOD_POOL to only
// foods NOT in sinborn_eaten — actively pushing exploration.
// Falls back to full pool if the player has eaten everything.
//
// CATEGORIES & BUFFS:
//   fish  → Water Breathing 5min
//   meat  → Strength 5min
//   sweet → Regeneration 3min
//   misc  → Saturation 3min
// ============================================================

const CRAVING_INTERVAL = 6000 // 5 min in ticks
const RANDOM_CHANCE    = 0.20 // 20% chance to push unexplored food
const MAX_FOOD_MEMORY  = 60   // cap to prevent NBT bloat

// All foods in the pack — used to find things the player hasn't eaten yet.
// Verified against mod JARs (en_us.json lang files). Items from ~50 food mods.
const FULL_FOOD_POOL = [

  // ─── Vanilla ──────────────────────────────────────────────────
  'minecraft:golden_apple',
  'minecraft:cooked_porkchop',
  'minecraft:bread',
  'minecraft:mushroom_stew',
  'minecraft:rabbit_stew',
  'minecraft:pumpkin_pie',
  'minecraft:cooked_beef',
  'minecraft:cooked_chicken',
  'minecraft:cooked_salmon',
  'minecraft:cooked_cod',
  'minecraft:beetroot_soup',
  'minecraft:honey_bottle',
  'minecraft:golden_carrot',
  'minecraft:suspicious_stew',
  'minecraft:cooked_mutton',
  'minecraft:cooked_rabbit',

  // ─── Farmer's Delight ─────────────────────────────────────────
  'farmersdelight:apple_pie',
  'farmersdelight:roasted_chicken',
  'farmersdelight:beef_stew',
  'farmersdelight:cabbage_rolls',
  'farmersdelight:melon_juice',
  'farmersdelight:minced_beef_noodles',
  'farmersdelight:chicken_soup',
  'farmersdelight:bacon_and_eggs',
  'farmersdelight:pasta_with_mutton_chop',
  'farmersdelight:noodle_soup',
  'farmersdelight:salmon_roll',
  'farmersdelight:fried_rice',
  'farmersdelight:vegetable_soup',
  'farmersdelight:melon_popsicle',

  // ─── Farmer's Delight Plus ────────────────────────────────────
  'farmersdelightplus:berry_pancake',
  'farmersdelightplus:chocolate_pancake',
  'farmersdelightplus:call_of_the_seas',
  'farmersdelightplus:berry_compote',
  'farmersdelightplus:cactus_tea',
  'farmersdelightplus:breaded_rice_balls',

  // ─── Brewin and Chewin ────────────────────────────────────────
  'brewinandchewin:creamy_onion_soup',
  'brewinandchewin:mushy_pasta',
  'brewinandchewin:cheesy_toast',

  // ─── Hearth and Harvest ───────────────────────────────────────
  'hearthandharvest:blueberry_wine',
  'hearthandharvest:batter',
  'hearthandharvest:maple_syrup',
  'hearthandharvest:autumn_stew',
  'hearthandharvest:candied_apple',

  // ─── Barbeques Delight ────────────────────────────────────────
  'barbequesdelight:bibimbap',
  'barbequesdelight:kebab_sandwich',
  'barbequesdelight:grilled_corn',
  'barbequesdelight:pulled_pork_sandwich',
  'barbequesdelight:smoked_ribs',

  // ─── Aquamirae Delight ────────────────────────────────────────
  'aquamirae_delight:aquatic_feast',
  'aquamirae_delight:fishermans_delicacy',

  // ─── Alex's Caves Delight ─────────────────────────────────────
  'alexs_caves_delight:dinosaursushi',
  'alexs_caves_delight:neodymiumcake',

  // ─── Alex's Delight ───────────────────────────────────────────
  'alexsdelight:cooked_bison',
  'alexsdelight:kangaroo_stew',

  // ─── Alex's Mobs Delight ──────────────────────────────────────
  'alexsmobsdelight:big_mac',
  'alexsmobsdelight:bison_tartare',
  'alexsmobsdelight:braised_kangaroo_meatballs',
  'alexsmobsdelight:cooked_bear_meat',
  'alexsmobsdelight:bowl_of_wild_stew',
  'alexsmobsdelight:canned_bear_meat',

  // ─── Youkai's Feasts ──────────────────────────────────────────
  'youkaisfeasts:assorted_dango',
  'youkaisfeasts:avgolemono',
  'youkaisfeasts:miso_soup',
  'youkaisfeasts:onigiri',
  'youkaisfeasts:ramen',
  'youkaisfeasts:gyoza',

  // ─── Cultural Delights ────────────────────────────────────────
  'culturaldelights:beef_burrito',
  'culturaldelights:calamari_roll',
  'culturaldelights:falafel',
  'culturaldelights:sushi_roll',
  'culturaldelights:tacos',

  // ─── Ramadan Delight ──────────────────────────────────────────
  'ramadandelight:chorba',
  'ramadandelight:haleem',
  'ramadandelight:baklava',
  'ramadandelight:samosa',

  // ─── Nether's Delight ─────────────────────────────────────────
  'nethersdelight:grilled_strider',
  'nethersdelight:hoglin_sirloin',
  'nethersdelight:magma_gelatin',
  'nethersdelight:hoglin_stew',
  'nethersdelight:strider_kabob',

  // ─── My Nether's Delight ──────────────────────────────────────
  'mynethersdelight:spicy_hoglin_stew_cup',
  'mynethersdelight:blue_tenderloin_steak',
  'mynethersdelight:spicy_noodle_soup_cup',
  'mynethersdelight:egg_soup_cup',
  'mynethersdelight:breakfast_sampler',

  // ─── Ender's Delight ──────────────────────────────────────────
  'endersdelight:chorus_pie',
  'endersdelight:ender_paella',

  // ─── Ends Delight ─────────────────────────────────────────────
  'ends_delight:stir_fried_shulker_meat',
  'ends_delight:bubble_tea',
  'ends_delight:chorus_fruit_milk_tea',
  'ends_delight:dragon_leg',
  'ends_delight:fried_dragon_egg',
  'ends_delight:dragon_breath_soda',
  'ends_delight:chorus_fruit_popsicle',

  // ─── Dungeon's Delight ────────────────────────────────────────
  'dungeonsdelight:arcane_chili',
  'dungeonsdelight:blazing_blood_sausage',
  'dungeonsdelight:explorer_broth',

  // ─── Frights Delight ──────────────────────────────────────────
  'frightsdelight:cobweb_pie',

  // ─── Unusual Delight ──────────────────────────────────────────
  'unusual_delight:wing_stew',
  'unusual_delight:spiderbarbecue',
  'unusual_delight:sculk_cookie',
  'unusual_delight:piglin_pudding',
  'unusual_delight:copper_feather_soup',
  'unusual_delight:everwatch_ice_cream',

  // ─── Silent's Delight ─────────────────────────────────────────
  'silentsdelight:sculk_soup',
  'silentsdelight:heartburger',

  // ─── Lender's Delight ─────────────────────────────────────────
  'lendersdelight:amethyst_crab_sandwich',
  'lendersdelight:cooked_leviathan',
  'lendersdelight:cooked_ender_golem_meat',
  'lendersdelight:cooked_coral_golem_meat',

  // ─── Cave Delight (Alex's Caves themed) ───────────────────────
  'cavedelight:roasted_grottoceratops',
  'cavedelight:dino_chop_pasta',
  'cavedelight:flytrap_taco',
  'cavedelight:honey_glazed_dino_nugget',
  'cavedelight:fiddlehead_tea',
  'cavedelight:boiled_dino_egg',

  // ─── Caves Delight (vanilla caves / radioactive) ──────────────
  'caves_delight:slam_soup',
  'caves_delight:slam_burger',
  'caves_delight:radgill_roll',
  'caves_delight:radioactive_fry_up',
  'caves_delight:stuffed_spelunkie',

  // ─── Oceanic Delight ──────────────────────────────────────────
  'oceanic_delight:fried_shrimp',
  'oceanic_delight:shrimp_stew',
  'oceanic_delight:sea_salad',
  'oceanic_delight:fish_egg_noodle_soup',
  'oceanic_delight:squid_and_pickles',

  // ─── Oceans Delight ───────────────────────────────────────────
  'oceansdelight:elder_guardian_roll',
  'oceansdelight:fugu_roll',
  'oceansdelight:braised_sea_pickle',
  'oceansdelight:bowl_of_guardian_soup',
  'oceansdelight:baked_tentacle_on_a_stick',
  'oceansdelight:fugu_slice',

  // ─── Aquaculture Delight ──────────────────────────────────────
  'aquaculturedelight:fish_and_chips',
  'aquaculturedelight:bass_stew',
  'aquaculturedelight:poor_fisher_chowder',
  'aquaculturedelight:turtle_meat_dish',
  'aquaculturedelight:fish_chorba',

  // ─── Tides Delight ────────────────────────────────────────────
  'tidesdelight:anglerfish_hotpot',
  'tidesdelight:barracuda_steak',

  // ─── Let's Do: Vinery ─────────────────────────────────────────
  'vinery:apple_cider',
  'vinery:grape_wine',
  'vinery:cherry_wine',
  'vinery:mulled_wine',
  'vinery:cheese',

  // ─── Let's Do: Herbal Brews ───────────────────────────────────
  'herbalbrews:black_tea',
  'herbalbrews:coffee',
  'herbalbrews:chamomile_tea',
  'herbalbrews:ginger_tea',

  // ─── Let's Do: Farm & Charm ───────────────────────────────────
  'farm_and_charm:butter',
  'farm_and_charm:yogurt',
  'farm_and_charm:cheese_fondue',

  // ─── Let's Do: Meadow ─────────────────────────────────────────
  'meadow:wildflower_honey',
  'meadow:flower_tea',
  'meadow:lavender_lemonade',

  // ─── Let's Do: Beach Party ────────────────────────────────────
  'beachparty:tropical_smoothie',
  'beachparty:coconut_cocktail',
  'beachparty:fruit_salad',
  'beachparty:grilled_fish',

  // ─── Jaden's Nether Expansion Delight ────────────────────────
  'jadensnetherexpansiondelight:banshee_cookie',
  'jadensnetherexpansiondelight:glowcheese_sandwich',
  'jadensnetherexpansiondelight:hogham_stew',
  'jadensnetherexpansiondelight:cerebrage_rolls',
  'jadensnetherexpansiondelight:lightspores_juice',
  'jadensnetherexpansiondelight:lightspores_popsicle',

  // ─── Festive Delight ──────────────────────────────────────────
  'festive_delight:gingerbread_man',
  'festive_delight:christmas_tea',
  'festive_delight:spring_rolls',
  'festive_delight:longevity_noodle',
  'festive_delight:salmon_verrines',

  // ─── Fruits Delight ───────────────────────────────────────────
  'fruitsdelight:apple_jello',
  'fruitsdelight:blueberry_muffin',
  'fruitsdelight:blueberry_custard',
  'fruitsdelight:baked_pear',
  'fruitsdelight:bayberry_soup',

  // ─── Rustic Delight ───────────────────────────────────────────
  'rusticdelight:bell_pepper_pasta',
  'rusticdelight:baked_potato_slices',
  'rusticdelight:stuffed_bell_pepper',

  // ─── Mineral Delight ──────────────────────────────────────────
  'mineraldelight:amethyst_crycicle',
  'mineraldelight:diamond_jello',
  'mineraldelight:golden_butter',
  'mineraldelight:quartz_bake',
  'mineraldelight:diamond_ice_cream',

  // ─── Create Food ──────────────────────────────────────────────
  'createfood:fishcake',
  'createfood:baked_potato_butter',
  'createfood:boiled_egg_peeled',
  'createfood:bread_slice_tomato',

  // ─── Ratatouille Fried Delights ───────────────────────────────
  'ratatouille_fried_delights:boba_cup',
  'ratatouille_fried_delights:breaded_fish_fillet',
  'ratatouille_fried_delights:battered_original_drumstick',
  'ratatouille_fried_delights:a_fry',
  'ratatouille_fried_delights:apple_slices',

  // ─── Delightful ───────────────────────────────────────────────
  'delightful:baklava_slice',
  'delightful:azalea_tea',
]

// ─── HELPERS ──────────────────────────────────────────────────

function getCategory(itemId) {
  const id = itemId.toLowerCase()
  if (id.includes('fish') || id.includes('tuna') || id.includes('salmon') ||
      id.includes('cod') || id.includes('shrimp') || id.includes('crab') ||
      id.includes('lobster') || id.includes('eel') || id.includes('aquatic') ||
      id.includes('anglerfish') || id.includes('barracuda') || id.includes('calamari') ||
      id.includes('squid') || id.includes('clam') || id.includes('bass') ||
      id.includes('trout') || id.includes('anchovy') || id.includes('herring') ||
      id.includes('tilapia') || id.includes('swordfish') || id.includes('fugu') ||
      id.includes('radgill') || id.includes('aquamirae') || id.includes('oceanic') ||
      id.includes('tentacle') || id.includes('paella')) {
    return 'fish'
  }
  if (id.includes('beef') || id.includes('steak') || id.includes('pork') ||
      id.includes('chicken') || id.includes('lamb') || id.includes('mutton') ||
      id.includes('rabbit') || id.includes('bison') || id.includes('burger') ||
      id.includes('sausage') || id.includes('bacon') || id.includes('ham') ||
      id.includes('hoglin') || id.includes('strider') || id.includes('kangaroo') ||
      id.includes('venison') || id.includes('boar') || id.includes('patty') ||
      id.includes('ribs') || id.includes('wing') || id.includes('drumstick') ||
      id.includes('roasted') || id.includes('cooked_') || id.includes('grilled') ||
      id.includes('grottoceratops') || id.includes('dino') || id.includes('dragon_leg') ||
      id.includes('shulker_meat') || id.includes('leviathan') || id.includes('bear') ||
      id.includes('kebab') || id.includes('tartare') || id.includes('pulled_pork') ||
      id.includes('slam') || id.includes('hogham')) {
    return 'meat'
  }
  if (id.includes('cake') || id.includes('pie') || id.includes('cookie') ||
      id.includes('jam') || id.includes('honey') || id.includes('candy') ||
      id.includes('chocolate') || id.includes('berry') ||
      (id.includes('apple') && !id.includes('cider')) ||
      id.includes('sweet') || id.includes('dango') ||
      id.includes('juice') || id.includes('wine') || id.includes('tea') ||
      id.includes('coffee') || id.includes('sugar') || id.includes('mochi') ||
      id.includes('gelatin') || id.includes('tart') || id.includes('pudding') ||
      id.includes('custard') || id.includes('donut') || id.includes('pastry') ||
      id.includes('jello') || id.includes('popsicle') || id.includes('ice_cream') ||
      id.includes('cider') || id.includes('lemonade') || id.includes('smoothie') ||
      id.includes('boba') || id.includes('soda') || id.includes('cocktail') ||
      id.includes('muffin') || id.includes('gingerbread') || id.includes('baklava') ||
      id.includes('crycicle') || id.includes('butter') || id.includes('syrup')) {
    return 'sweet'
  }
  return 'misc'
}

function getDisplayName(itemId) {
  const raw = itemId.includes(':') ? itemId.split(':')[1] : itemId
  return raw.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

// ─── FOOD EATEN — track + check craving ───────────────────────

ItemEvents.foodEaten(event => {
  const player = event.player
  if (!player) return // non-player entities (wolves etc.) can trigger this
  const itemId  = event.item.id

  // --- Update memory ---
  const rawEaten = player.persistentData.getString('sinborn_eaten')
  const eaten = rawEaten ? rawEaten.split(',').filter(s => s.length > 0) : []

  if (!eaten.includes(itemId)) {
    eaten.push(itemId)
    while (eaten.length > MAX_FOOD_MEMORY) eaten.shift()
    player.persistentData.putString('sinborn_eaten', eaten.join(','))
  }

  // --- Check if this satisfies active craving ---
  const craving = player.persistentData.getString('sinborn_craving')
  if (!craving || craving !== itemId) return

  // Clear craving
  player.persistentData.putString('sinborn_craving', '')

  const cat = getCategory(itemId)
  const name = getDisplayName(itemId)

  // Give category buff
  if (cat === 'fish') {
    player.server.runCommandSilent(`effect give ${player.username} minecraft:water_breathing 300 0 true`)
  } else if (cat === 'meat') {
    player.server.runCommandSilent(`effect give ${player.username} minecraft:strength 300 0 true`)
  } else if (cat === 'sweet') {
    player.server.runCommandSilent(`effect give ${player.username} minecraft:regeneration 200 0 true`)
  } else {
    player.server.runCommandSilent(`effect give ${player.username} minecraft:saturation 200 0 true`)
  }

  player.tell('\u00A7aCraving satisfied. \u00A7e(' + name + ')')
})

// ─── TICK — assign cravings periodically ──────────────────────

ServerEvents.tick(event => {
  if (event.server.tickCount % CRAVING_INTERVAL !== 0) return

  event.server.players.forEach(player => {
    // Only when hungry
    if (player.foodLevel >= 12) return

    // Only if no active craving already
    const current = player.persistentData.getString('sinborn_craving')
    if (current && current.length > 0) return

    const rawEaten = player.persistentData.getString('sinborn_eaten')
    const eaten = rawEaten ? rawEaten.split(',').filter(s => s.length > 0) : []

    let candidates

    if (Math.random() < RANDOM_CHANCE) {
      // 20%: unexplored — pick from foods the player has NOT eaten yet
      const eatenSet = new Set(eaten)
      const uneaten = FULL_FOOD_POOL.filter(f => !eatenSet.has(f))
      candidates = uneaten.length > 0 ? uneaten : FULL_FOOD_POOL
    } else {
      // 80%: familiar — pick from foods this player has already eaten
      candidates = eaten
    }

    if (candidates.length === 0) return

    const chosen = candidates[Math.floor(Math.random() * candidates.length)]
    player.persistentData.putString('sinborn_craving', chosen)

    const name = getDisplayName(chosen)
    player.tell('\u00A77You find yourself thinking about \u00A7e' + name + '\u00A77...')
  })
})
