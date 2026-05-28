// ============================================================
// SINBORN ODYSSEY 2 — The Surveyor's Map
//
// A rare written book found in cartographer villages, woodland
// mansions, and fishing loot. When picked up, queries the
// Minecraft structure registry to find the nearest stronghold
// and tells the player the coordinates — one time per player.
//
// This prevents players from consuming Eyes of Ender to locate
// the stronghold. The eyes are needed for the portal.
//
// DELIVERY:
//   Cartographer village house  — 10% weight (primary)
//   Woodland mansion            —  6% weight (rare)
//   Fishing treasure            —  3% weight (very rare)
//
// NOTE: If the Java structure search fails (it shouldn't),
// the fallback message tells the player to use /locate.
// ============================================================

const surveyMap = Item.of('minecraft:written_book').withNBT({
  title: "The Surveyor's Map",
  author: 'Survey Guild \u2014 Filed Under: Lost Causes',
  pages: [
    `{"text":"The Surveyor's Map\\n\\nSomewhere below\\nyour feet is a door\\nthat was built before\\nanyone alive remembers.\\n\\nWe found it.\\n\\nThis map records\\nhow."}`,
    `{"text":"THE METHOD\\n\\nWe did not use the Eyes.\\n\\nThe Eyes were made\\nto open the portal,\\nnot to be spent\\nfinding it.\\n\\nA surveyor walks.\\nA surveyor observes.\\nA surveyor maps\\nwhat the ground says\\nwhen you know how to listen."}`,
    `{"text":"THE SIGNS\\n\\nSilverfish in stone:\\nyou are close.\\n\\nThe stone changes\\ngrade near the outer\\nchambers.\\n\\nMoss patterns shift.\\nThe air changes temperature.\\n\\nNone of this is conclusive.\\nAll of it together is."}`,
    `{"text":"THE SURVEY\\n\\nWe walked the ring.\\nWe triangulated\\nfrom surface anomalies.\\n\\nWe marked the site.\\n\\nIf you are reading this,\\nthe coordinates have been\\ntransmitted to you.\\n\\nThey appear in\\nyour record\\nwhen this map\\nwas studied."}`
  ],
  resolved: true
})

// ─── PICKUP — locate stronghold and tell player ───────────────

ItemEvents.pickedUp(event => {
  const player = event.player
  const item   = event.item

  if (item.id !== 'minecraft:written_book') return
  const nbt = item.nbt
  if (!nbt) return
  if (nbt.getString('title') !== "The Surveyor's Map") return

  // Only fire once per player
  if (player.persistentData.getBoolean('sinborn_stronghold_surveyed')) return
  player.persistentData.putBoolean('sinborn_stronghold_surveyed', true)

  // Delay 1 second so item is settled in inventory before the message
  player.server.scheduleInTicks(20, () => {
    try {
      const level    = player.server.overworld()
      const playerPos = player.blockPosition()

      // Load Java classes needed to query structure registry
      const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
      const Registries       = Java.loadClass('net.minecraft.core.registries.Registries')
      const TagKey           = Java.loadClass('net.minecraft.tags.TagKey')

      // Strongholds use the tag #minecraft:eye_of_ender_located
      const registry   = level.registryAccess().registryOrThrow(Registries.STRUCTURE)
      const tag        = TagKey.create(Registries.STRUCTURE, new ResourceLocation('minecraft', 'eye_of_ender_located'))
      const holderSet  = registry.getTag(tag)

      if (holderSet.isPresent()) {
        const result = level.getChunkSource().getGenerator()
          .findNearestMapStructure(level, holderSet.get(), playerPos, 100, false)

        if (result != null) {
          const sPos = result.getFirst()
          player.tell('\u00A76\u00A7l[ SURVEYOR\'S MAP ]\u00A7r \u00A77Survey complete.')
          player.tell('\u00A77Nearest stronghold: \u00A7eX: ' + sPos.getX() + ', Z: ' + sPos.getZ())
          player.tell('\u00A77The Eyes are for the portal. Now you know where to walk.')
          return
        }
      }

      // Fallback: structure search returned nothing in radius
      player.tell('\u00A76\u00A7l[ SURVEYOR\'S MAP ]\u00A7r \u00A77Survey inconclusive from your current position.')
      player.tell('\u00A77Move closer to where you expect the stronghold and use \u00A7f/locate structure minecraft:stronghold\u00A77.')

    } catch (e) {
      // Java interop failed — give the manual fallback
      player.tell('\u00A76\u00A7l[ SURVEYOR\'S MAP ]\u00A7r \u00A77Survey data corrupted.')
      player.tell('\u00A77Use \u00A7f/locate structure minecraft:stronghold \u00A77to find the ancient gates manually.')
    }
  })
})

// ─── LOOT INJECTIONS ─────────────────────────────────────────

ServerEvents.genericLootTables(event => {

  // Cartographer village house — primary source
  event.modify('minecraft:chests/village/village_cartographer', loot => {
    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem(surveyMap, 10)
      pool.addEmpty(90)
    })
  })

  // Woodland mansion — rare find
  event.modify('minecraft:chests/woodland_mansion', loot => {
    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem(surveyMap, 6)
      pool.addEmpty(94)
    })
  })

  // Fishing treasure — very rare, for dedicated fishers
  event.modify('minecraft:gameplay/fishing/treasure', loot => {
    loot.addPool(pool => {
      pool.rolls = 1
      pool.addItem(surveyMap, 3)
      pool.addEmpty(97)
    })
  })

})
