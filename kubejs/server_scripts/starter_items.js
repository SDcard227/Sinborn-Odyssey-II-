// ============================================================
// SINBORN ODYSSEY 2 — Starter Items
// Gives new players their starting kit on first join.
// Items are placed INSIDE the Sophisticated Backpack when possible.
//
// Kit (inside backpack): Diet Book, Atlas, Food Book,
//   Spyglass, Waterskin, Lantern, Bread x5, Tent, Sleeping Bag,
//   Survivor's Codex scroll, Research Pedestal
//
// Kit (in hand): Backpack (random tactical color via Sophi NBT),
//   Lore book
//
// Reverted from Modular Backpacks → Sophisticated Backpacks 2026-05-12
// (Modular shelved until 1.0 stable per user instruction)
// ============================================================

var SURVIVOR_CODEX_SCROLL = Item.of('historystages:research_scroll').withNBT({
  StageResearch: 'survivor_codex'
})

// 16 themed gear sets: [backpack main hex, accent/tent hex, sleeping bag dye]
// One kit per Comforts sleeping bag dye (the anchor color of each kit).
// Each kit's backpack/tent picked to thematically frame that dye.
//   - Sophi backpack MAIN  = kit[0] (primary thematic hex)
//   - Sophi backpack ACCENT + tent canvas = kit[1] (complement hex)
//   - Sleeping bag = kit[2] (anchor dye, all 16 covered, no duplicates)
//
// Palette V3 (2026-05-21). V1 was monochrome dark with duplicates and
// half reading brown. V2 was 9 themed triads. V3 expands to all 16 dyes
// so no kit shares any element with any other.
var COLOR_KITS = [
  [14275254,  5204875, 'comforts:sleeping_bag_white'],      // Bone Tundra       bp=#D9D2B6 / accent=#4F6B8B
  [ 4868682,  7022632, 'comforts:sleeping_bag_light_gray'], // Ash Wanderer      bp=#4A4A4A / accent=#6B2828
  [ 6052966, 12088115, 'comforts:sleeping_bag_gray'],       // Storm Pilgrim     bp=#5C5C66 / accent=#B87333
  [ 1710618,  6029312, 'comforts:sleeping_bag_black'],      // Shadow Acolyte    bp=#1A1A1A / accent=#5C0000
  [ 6042912,  7637852, 'comforts:sleeping_bag_brown'],      // Hearth Forager    bp=#5C3520 / accent=#748B5C
  [ 9116186,  1710618, 'comforts:sleeping_bag_red'],        // Crimson Warden    bp=#8B1A1A / accent=#1A1A1A
  [ 9120768,  2763306, 'comforts:sleeping_bag_orange'],     // Volcanic Forge    bp=#8B2C00 / accent=#2A2A2A
  [12757112,  1724237, 'comforts:sleeping_bag_yellow'],     // Sun Pilgrim       bp=#C2A878 / accent=#1A4F4D
  [ 2914908, 10508840, 'comforts:sleeping_bag_lime'],       // Jade Canopy       bp=#2C7A5C / accent=#A05A28
  [ 2969622,  7024660, 'comforts:sleeping_bag_green'],      // Forest Ranger     bp=#2D5016 / accent=#6B3014
  [ 8102855, 13934671, 'comforts:sleeping_bag_light_blue'], // Sky Voyager       bp=#7BA3C7 / accent=#D4A04F
  [ 3109747, 12741212, 'comforts:sleeping_bag_cyan'],       // Tideborn          bp=#2F7373 / accent=#C26A5C
  [ 2046559, 12739865, 'comforts:sleeping_bag_blue'],       // Storm Sailor      bp=#1F3A5F / accent=#C26519
  [ 4926832, 12096607, 'comforts:sleeping_bag_purple'],     // Twilight Scholar  bp=#4B2D70 / accent=#B8945F
  [ 9117808,  2891614, 'comforts:sleeping_bag_magenta'],    // Aurora Mystic     bp=#8B2070 / accent=#2C1F5E
  [13073310,  6058816, 'comforts:sleeping_bag_pink'],       // Petal Wanderer    bp=#C77B9E / accent=#5C7340
]

var JavaRandom = Java.loadClass('java.util.Random')

// Items that go inside the backpack STORAGE (Sophi basic has 27 slots, 0-26)
// Atlas handled separately via Forge registry (Connector compat)
var BACKPACK_ITEMS = [
  'food_desire:diet_book',
  // quest_book removed 2026-06-15 — questbook now opens via the "Open Quests"
  // keybind ([ by default, rebindable). Item still craftable as a fallback.
  'solonion:food_book',
  'minecraft:spyglass',
  'cold_sweat:waterskin',
  'minecraft:lantern',
  '5x minecraft:bread'
]

PlayerEvents.loggedIn(function(event) {
  var player = event.player
  var server = player.server

  // Always clean up unwanted mod books on every login
  server.scheduleInTicks(40, function() {
    for (var i = 0; i < 36; i++) {
      var stack = player.inventory.getItem(i)
      if (stack.id === 'alexsmobs:animal_dictionary' ||
          stack.id === 'tide:fishing_journal' ||
          stack.id === 'minecraft:book') {
        player.inventory.setItem(i, Item.empty)
      }
    }
  })

  // Only give starter kit once per player (persistent NBT flag).
  if (player.persistentData.getBoolean('sinborn_starter_given')) return

  server.scheduleInTicks(5, function() {
    // Self-seeded each join. Date.now() is unreliable in KubeJS's Rhino, so
    // the old seed collapsed to a per-player constant (identical kit every
    // world). Java's no-arg Random pulls fresh entropy per instance.
    var rng = new JavaRandom()
    var kit = COLOR_KITS[rng.nextInt(COLOR_KITS.length)]

    var backpackMain   = kit[0]
    var backpackAccent = kit[1]
    var tent = Item.of('simplytents:zip_tent').withNBT({TentColor: kit[1]})
    var sleepingBag = Item.of(kit[2])

    // The Tale of the Sinborn — lore book
    var loreBook = Item.of('minecraft:written_book').withNBT({
      title: 'The Tale of the Sinborn',
      author: 'Unknown',
      pages: [
        '{"text":"The Tale of the Sinborn\\n\\nYou were not chosen.\\nYou were not summoned.\\nYou were simply born\\ninto a world that does not\\ncare whether you survive.\\n\\nThis is your story now."}',
        '{"text":"THE WORLD\\n\\nThis land remembers\\nages of civilization.\\nEach left knowledge behind\\u2014\\nsealed in scrolls,\\nburied in ruins,\\nguarded by things that\\nnever forgot how to kill.\\n\\nFind the scrolls.\\nPlace them on the\\nresearch pedestal.\\nStudy them.\\nThe ages will open."}',
        '{"text":"THE SCATTERED\\nARCHIVE\\n\\nThe history itself\\nwas written down\\u2014\\nthen scattered.\\n\\nFolios. Loose pages\\nof an old archive,\\nhidden in chests\\nacross every land,\\nand carried by the\\ngreat beasts of it.\\n\\nFind them. Keep them.\\nBuild a library.\\n\\nThe world remembers\\nitself through those\\nwho gather what was\\nscattered."}',
        '{"text":"YOUR KIT\\n\\nYour backpack holds\\neverything that keeps\\nyou alive tonight.\\n\\nTent. Sleeping bag.\\nWaterskin. Lantern. Bread.\\nA spyglass.\\n\\nThe scroll inside is\\nyour Survivor\\u2019s Codex.\\nIt is your first lesson."}',
        '{"text":"SCROLLS\\n\\nScrolls are how\\nthe world unlocks.\\n\\nFind them in chests.\\nCraft a Research Pedestal.\\nPlace the scroll on it.\\nWait.\\n\\nWhen research completes,\\nthe knowledge opens:\\nnew crafting recipes,\\nnew creatures to fight,\\nnew ways to survive.\\n\\nStart with the Codex\\nin your bag. Place it\\non the pedestal.\\nLearn how this works."}',
        '{"text":"THE FORGOTTEN CRAFTS\\n\\nEven the basics are\\nlearned, not born.\\n\\nMetalworking shapes iron.\\nLeatherworking binds hide.\\nGlassworking colors sand.\\nStoneworking cuts precise.\\nAlchemy brews potion.\\nRedstone Principles wire.\\n\\nWithout these, you\\nforage with wood and stone\\nand looted gear alone.\\n\\nIron tools wait for\\nthe Metalworking scroll.\\nFind the smith-benches.\\nFind the scroll."}',
        '{"text":"WARMTH AND WATER\\n\\nThe cold kills before\\nany monster does.\\n\\nCheck your temperature.\\nDress for the weather.\\nBuild a fire at night.\\n\\nThirst is equally urgent.\\nCarry water. Filter it\\nbefore drinking.\\nThe Nether triples thirst."}',
        '{"text":"LIGHT AND SHELTER\\n\\nTorches burn out.\\nThis is not a defect.\\nThis is time passing.\\nCarry enough.\\n\\nThe tent is your\\nfirst home. Set it\\nbefore dark.\\n\\nThe sleeping bag\\nsets your respawn.\\nSleep in it."}',
        '{"text":"FOOD AND COMBAT\\n\\nThe grill is the first\\ncooking upgrade.\\nMeat over flame. Simple.\\n\\nEat more than one thing\\u2014\\nyour body demands variety.\\nCheck your diet.\\n\\nYou can dodge.\\nYou can parry.\\nYou can die.\\nStamina is finite."}',
        '{"text":"THE TWELVE EYES\\n\\nTwelve Eyes of Ender\\nwere scattered across\\nthe world.\\n\\nEach one is held by\\na creature or a place\\nthat will not surrender\\nit peacefully.\\n\\nCraft them from what\\nyou take. Place them\\nin the ancient portal.\\n\\nThis is not optional.\\nThis is why you are here."}',
        '{"text":"THE GATE\\n\\nWhen twelve Eyes rest\\nin the portal frame,\\nthe gate opens.\\n\\nBeyond it waits a dragon\\nolder than any age\\nof civilization.\\n\\nKill it.\\nCook it.\\nEat it.\\n\\nThat is the tale\\nof the Sinborn."}'
      ],
      resolved: true
    })

    // Give Sophisticated Backpack with two-tone color NBT
    // Sophi 1.20.1 stores colors as int RGB in clothColor + trimColor NBT.
    // (Verified from JAR class strings 2026-05-24 — previous keys main_color
    //  + accent_color were wrong, which is why every kit looked basic brown.)
    var backpack = Item.of('sophisticatedbackpacks:backpack').withNBT({
      clothColor: backpackMain,
      trimColor:  backpackAccent
    })
    player.give(backpack)

    // Give lore book directly (player should read it)
    player.give(loreBook)

    // Mark starter kit as given
    player.persistentData.putBoolean('sinborn_starter_given', true)

    // Step 2: Fill backpack inventory via Forge IItemHandler capability.
    //         Sophi basic backpack has 27 storage slots (0-26). Upgrade slots are separate.
    server.scheduleInTicks(10, function() {
      var filled = false
      try {
        var ForgeCapItem = Java.loadClass('net.minecraftforge.common.capabilities.ForgeCapabilities')

        // Find the backpack in player's inventory
        for (var i = 0; i < 36; i++) {
          var invStack = player.inventory.getItem(i)
          if (invStack.isEmpty()) continue
          if (invStack.id !== 'sophisticatedbackpacks:backpack') continue

          var lazyOpt = invStack.getCapability(ForgeCapItem.ITEM_HANDLER)
          if (!lazyOpt.isPresent()) continue

          var inv = lazyOpt.orElse(null)
          if (inv === null) continue

          // Sophi basic backpack: slots 0-26 are storage
          var STORAGE_START = 0

          // Fill from BACKPACK_ITEMS array
          for (var slot = 0; slot < BACKPACK_ITEMS.length; slot++) {
            try {
              inv.setStackInSlot(STORAGE_START + slot, Item.of(BACKPACK_ITEMS[slot]))
            } catch(e2) {
              inv.insertItem(STORAGE_START + slot, Item.of(BACKPACK_ITEMS[slot]), false)
            }
          }

          // Atlas via Forge registry (bypasses Item.of() Connector issue)
          try {
            var ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
            var ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
            var ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
            var atlasItem = ForgeRegistries.ITEMS.getValue(new ResourceLocation('antique_atlas', 'atlas'))
            if (atlasItem !== null && atlasItem !== undefined) {
              var atlasStack = new ItemStack(atlasItem)
              var atlasSlot = STORAGE_START + BACKPACK_ITEMS.length
              try {
                inv.setStackInSlot(atlasSlot, atlasStack)
              } catch(e3) {
                inv.insertItem(atlasSlot, atlasStack, false)
              }
              console.info('[Sinborn] Atlas placed in Sophi backpack via Forge registry')
            }
          } catch(eAtlas) {
            console.warn('[Sinborn] Atlas Forge registry insertion failed: ' + eAtlas)
          }

          // Survivor's Codex scroll + Research Pedestal + Tent + Sleeping Bag
          // Place into next available slots
          var leftoverItems = [SURVIVOR_CODEX_SCROLL, Item.of('historystages:research_pedestal'), tent, sleepingBag]
          for (var li = 0; li < leftoverItems.length; li++) {
            var placed = false
            for (var slot = STORAGE_START; slot < inv.getSlots() && !placed; slot++) {
              if (inv.getStackInSlot(slot).isEmpty()) {
                try {
                  inv.setStackInSlot(slot, leftoverItems[li])
                  placed = true
                } catch(eLeft) {
                  var rem = inv.insertItem(slot, leftoverItems[li], false)
                  if (rem.isEmpty()) placed = true
                }
              }
            }
            if (!placed) player.give(leftoverItems[li])
          }

          filled = true
          break
        }
      } catch(e) {
        console.info('[Sinborn] Backpack fill via capability failed: ' + e)
      }

      // Fallback: give items directly if backpack fill didn't work
      if (!filled) {
        console.info('[Sinborn] Giving starter items directly (backpack fill unavailable)')
        for (var j = 0; j < BACKPACK_ITEMS.length; j++) {
          player.give(Item.of(BACKPACK_ITEMS[j]))
        }
        server.runCommandSilent('give ' + player.username + ' antique_atlas:atlas 1')
        player.give(tent)
        player.give(sleepingBag)
        player.give(SURVIVOR_CODEX_SCROLL)
        player.give(Item.of('historystages:research_pedestal'))
      }
    })
  })
})
