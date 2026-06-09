---
tags: [sinborn-dev]
---

# Sinborn Odyssey 2 â€” Changelog

> Format: see [[Changelog Template]]. Newest at top.

## v1.5.0 â€” The Coats of Paint Update (May 2026)

> A polish + content update. Starter backpacks finally dye properly. Clouds stay
> up between launches. The scroll system is the cleanest it's been (zero empty
> scrolls, zero junk, zero double-gates). Plus a new aerial-loot mod, a
> rendering tier upgrade, and two real worldgen crash fixes. And the headline:
> the pack finally runs on dedicated and multiplayer servers.

### 🌐 Server / multiplayer compatibility (the headline)
- **The pack runs on dedicated servers now.** HistoryStages syncs every stage's
  full item + recipe data to each player on join. With the scroll system fully
  built out, that payload had grown to ~368 KB gzipped, past Minecraft's 262 KB
  packet ceiling, so anyone connecting got booted at login with "Root tag must
  be a named compound tag."
- **Fix: dropped the redundant recipe lists.** HistoryStages already auto-locks
  any recipe whose output is a gated item, so listing the 40,420 recipes too was
  dead weight. Cleared them all and promoted 471 edge-case outputs into their
  item lists, so gating behaves exactly the same. The synced payload is now
  ~189 KB, well under the ceiling. Single-player is unaffected, and gating is
  verified intact (the crafting table is still locked behind survivor_codex).
- **Server mod list aligned to the client:** ColdSweat 2.4.1, Recruits 1.15.0,
  Puddleflood 1.1.4, and MoreMobVariants pulled (it was the worldgen-deadlock
  mod, and the client never had it anyway).
- **Smoother first joins:** Surveyor's terrain sync now spreads over more ticks
  (terrainTicks 20 to 60) instead of bursting ~8 regions at once, so the server
  thread doesn't spike you off the "loading terrain" screen.

### ðŸ’¥ Crashes fixed
- **Formations dep installed** â€” Echovoids' structure JSONs reference
  `formations:simple` structure_type. Without Formations (Structure Library),
  clicking *Select World* crashed with "Failed to load registries." Formations
  1.0.4 is now bundled.
- **Grim Kingdoms v1.0.0 â†’ v1.0.3** â€” v1.0.0 had a structure NBT bug
  (`minecraft:andesite_air` doesn't exist in 1.20.1) that crashed worldgen
  during `frozen_onion_fort` placement. v1.0.3 fixed the bad block refs.

### âœ¨ New content
- **Realm RPG: Treasure Balloons** â€” rare floating balloons spawn above
  players. Shoot them down for chest loot, 5 rarity tiers (common â†’ legendary).
  Not scroll-gated by design; the rarity system IS the progression gate.
- **Distant Horizons 2.4.5 enabled** â€” was disabled in 1.4.x. Players see
  terrain way past their render distance as LOD chunks. In-game toggle if you
  want to disable; we ship it on for the visual ceiling.

### ðŸŽ¨ Visual fixes
- **Starter backpacks actually dye now.** The kit-color NBT was using the wrong
  keys (`main_color`/`accent_color`); Sophi 1.20.1 reads `clothColor`/`trimColor`.
  Result: every fresh kit was rendering as basic brown. Fixed. Existing players
  get a one-shot migration on login that re-keys the NBT in place (your backpack
  contents are preserved).
- **16 themed wanderer kits** â€” every kit now reads as its actual color:
  Forest Ranger, Desert Nomad, Storm Sailor, Ash Wanderer, Volcanic Forge, Sun
  Pilgrim, Jade Canopy, Bone Tundra, Crimson Warden, Sky Voyager, Tideborn,
  Twilight Scholar, Aurora Mystic, Petal Wanderer, Shadow Acolyte, Hearth
  Forager. 1-in-16 roll per new player. No more universal brown.
- **Better Clouds + Distant Horizons compatibility workaround** â€” Better Clouds
  1.3.37 aborts its init when it detects DH 2.4.5's API (which postdates BC's
  last release). KubeJS script `clouds_force_on.js` now auto-toggles the cloud
  setting 3 seconds after world join to force a re-init. Clouds stay up
  between launches without manual options-menu fiddling.
- **Fresh Animations swapped to 1.20.1-compatible build** â€” the pack had been
  shipping `FA+All_Extensions-v1.9.1.zip` which is for MC 1.21+
  (pack_format 84). MC 1.20.1 silently hid it. Replaced with
  `FreshAnimations_v1.10.4.zip` (proper pack_format 15 compat).

### ðŸ¤« Chat noise reduced
- **HistoryStages welcome banner silenced** â€” the "Welcome! Loaded N stages"
  message that ran on every world join is now off by default.
- **HistoryStages 790-warning spam silenced** â€” `showDebugErrors=false`. The
  underlying scroll-data warnings still log to file for devs; players don't see
  them in chat anymore.
- **KubeJS error [1] fixed** â€” `crimson_robe_divinity.js` was registering an
  `ItemEvents.modification` handler in a server script (it's startup-only).
  Split into two files: `startup_scripts/crimson_robe_divinity_items.js` handles
  the item modifications, `server_scripts/crimson_robe_divinity.js` keeps the
  Resistance-on-full-regalia tick. KubeJS no longer reports an error.

### ðŸ“œ Scroll system â€” cleanest state ever
- **Zero empty scrolls** (down from 37 in 1.4.7). Eight scrolls newly populated
  with proper item lists (mythril_age, gunsmithing, ballistics_engineering,
  arsenal_legendary_ranged, cuisine_mesoamerican, god_nightwarden, god_void_worm,
  fermentation_age, five_vessels_apocrypha, oil_age, steam_age, infernal_age).
- **Zero junk items** â€” 293 stray spawn eggs, `.desc` lang artifacts, command
  blocks, incomplete crafting intermediates, and creative-only items removed
  from scroll item lists across the system.
- **Zero double-gated items** â€” 502 cross-scroll duplicates resolved by keeping
  each item in its most-focused scroll (smaller scroll wins).
- **23 dead-content scrolls deleted** (+ their 17 research quests) â€” eight civ_*
  scrolls, four god_* scrolls, six abstract _age scrolls, five deep-lore scrolls
  that referenced removed mods or had no actionable game content.
- **6 age progression-marker scrolls restored** (kindled_age, hearth_age,
  water_age, culture_age, eye_hunt_age, cursed_age) â€” these gate chapter unlocks
  in Heracles and were referenced by chapter `gate.json` files.
- **2 empty Pale Shore quests populated** (ch10_gate + ch10_wither) â€” both had
  description text but no actual tasks; now they have proper check-tasks
  matching the description.

### ðŸ§¹ Config cleanup
- **46 orphan config files archived** â€” `.bak` configs from previously-removed
  mods (gobber, knightquest, just_leveling, eeeabsmobs, legendary_monsters,
  mutantmonsters, sky_arena, somnia, limbs, relics, itemphysic, toms_storage,
  modular_backpacks, beansbackpacks, and others) moved to
  `config/_archive_2026-05-21_orphans/` rather than deleted. Pack is cleaner.
- **Etched extension orphan configs removed** â€” `etched_extension-*.toml` had
  been left behind after the extension mod was removed from the pack; the
  parent Etched mod doesn't read them.

### ðŸ›  Other
- **Crystal Ball wiki page for Treasure Balloons** â€” full content drop:
  items, loot pools per rarity tier, advancements, gamerules,
  `extra_balloon_drops` tag hooks for Sinborn-flavored injections.
- **Crystal Ball doc for shaderpacks + resource packs** â€” captures what
  visual layer ships with the pack so it can be restored if Modrinth-managed
  Prism wipes user content on the next refresh.

---

## v1.4.5 â€” Server Setup Hotfix (May 2026)

> Makes the pack install and run server-side with **zero manual file-shuffling**.

### ðŸ”§ Fixes
- **Cut Simply Bows + Simply Tooltips; restored Obscure Tooltips + Fragmentum.**
  Simply Bows hard-depends on Simply Tooltips, which is client-only â€” so fresh
  dedicated-server installs kept crashing with *"simplytooltips not installed."*
  Cutting the pair removes the dependency conflict at the root. Obscure Tooltips
  (the pack's original tooltip mod) is back. This permanently retires the 1.4.4
  server-side workaround.
- **Pre-tuned `server.properties` ships with the pack** â€” fresh dedicated-server
  installs auto-get `view-distance=8 / simulation-distance=6`, fixing the
  join-timeout players hit during worldgen.

### v1.4.4 â€” Server-Compatibility Hotfix (superseded)
- Fixed dedicated-server boot crash by force-bundling Simply Tooltips server-side.
  Now obsolete â€” 1.4.5 removes the mods entirely.

## v1.4.3 â€” The Discovery Update (May 2026)

> The biggest progression overhaul the pack has had. Sinborn Odyssey 2 is now a
> full **crafting-as-discovery** modpack â€” you don't just *get* recipes, you
> research the knowledge to craft them.

### ðŸ”® Pack-wide scroll gating
- **238 research scrolls** now gate the pack â€” 176 of 209 content mods fully
  gated, plus vanilla processed goods. Find a scroll, research it, unlock its
  knowledge.
- **Gate knowledge, not gathering** â€” raw materials stay free (logs, planks,
  ore, stone, gathered plants). What you research is the *crafted result*:
  ingots, tools, bricks, furniture, doors.
- Weapons re-sorted â€” 293 Simply Swords / Simply More weapons placed into the
  tiered arsenal scrolls (iron / master / legendary, by material).
- Found a locked item? Its tooltip names the scroll you need â€” a breadcrumb
  toward where to hunt.

### ðŸ“œ 9 new scrolls
- **The Magnetic Deep Â· The Primordial Strata Â· The Blighted Hollows Â· The
  Forlorn Hollows Â· The Abyssal Chasm Â· The Sugarstone Caverns** â€” Alex's Caves
  is no longer one unlock; each of its 6 biomes is its own pocket of knowledge.
- **Woodworking** â€” vanilla joinery: doors, fences, boats, signs, stairs.
- **Alchemy** â€” brewing: potions, splash/lingering draughts, tipped arrows,
  food infusion.
- **Runesmithing** â€” the Simply Swords gem / rune / relic socketing system.

### ðŸ“– The Scattered Archive + lore books
- **55+ collectible history folios** telling the world-before â€” found in chests
  and dropped by major bosses. Assemble the library of a lost age.
- **Lore-hint books** â€” cryptic notes that point you toward where specific
  scrolls are hidden. 85 of them now, including hints for every new scroll.

### ðŸ—º Heracles questbook â€” full coverage
- 658 quests; **every scroll has a discovery quest**. The questbook is the
  progression spine.

### ðŸ§¹ EMI cleanup
- Spawn eggs and dev/creative items (command blocks, barriers, debug items,
  etc.) **hidden from the EMI item list** â€” less clutter when you browse.

### ðŸ›  Stability & fixes
- **Cold Sweat worldgen deadlock fixed** â€” the biome-temperature modifier that
  hung world generation is disabled. Cold Sweat â†’ 2.4, fiahi â†’ 3.1.6.
- **Scroll sync-packet overflow fixed** â€” the scroll system was converted to a
  mod-gating model so definitions stay under Minecraft's network limit (no more
  "Invalid player data" disconnects).
- **Early-game progression fix** â€” planks are no longer gated. They were
  briefly locked behind Woodworking, which would have soft-locked the entire
  early game (no planks â†’ no tools â†’ no crafting table).
- Dedicated-server boot verified â€” the pack loads clean on a fresh Forge server.

### ðŸ–¼ Tooltip overhaul
- **Simply Tooltips** is now the pack's tooltip system â€” themed pack-wide
  across vanilla and all mods (dark-brown/gold default theme, plus 34 built-in
  themes and tailored ones for tools and Simply weapons).
- **Obscure Tooltips removed** â€” redundant with Simply Tooltips once it went
  pack-wide.

### âœ¨ New mods
- **Realm RPG: Treasure Balloons** â€” loot-balloon encounters, wired into the
  pack's loot tiers.
- **Simply Bows**, **Simply Tooltips**.

## v2.X (April 2026)

### ðŸ“¸ New Content (2026-04-19)
- **Exposure: Polaroid** added â€” instant-camera addon for Exposure. Gated behind the *Artisan's Ledger* scroll alongside the base Exposure camera.
- **Exposure** upgraded `1.9.13` â†’ `1.9.20` (required for Polaroid compatibility).

### ðŸ”„ Wither Storm drop migration (2026-04-19)
- The *On the Wither* scroll now drops **from the Withered Symbiont mob itself** instead of Nether chests. Killing the Wither Storm's final form now guarantees both `scroll_end_passage` and `the_wither` scrolls.
- Previous chest drops removed from `nether_bridge` and `bastion_hoglin_stable`.

### ðŸ§¹ Scroll gate cleanup (2026-04-19)
- Base **Create** mod and basic workstations (`crafting_table`, `furnace`) removed from scroll gating â€” these are now available from first spawn.
- Base **Farmer's Delight** removed from scroll gating â€” food content available from start.
- Create addons (TFMG, Create: New Age, Create: Oppenheimered, Create Teleporters, etc.) and FD addons (Ender's Delight, Nether's Delight, Cultural Delights, Youkai's Feasts, etc.) still gated.

### ðŸ”§ Shader fix (2026-04-18)
- **Complementary Reimagined r5.7.1** volumetric clouds crash fixed â€” `GetVolumetricClouds` undefined error in `deferred1.fsh` resolved by setting `CLOUD_STYLE_DEFINE=0` in the pack's config.

### âœ¨ New Content
- **Wither Storm Delight** added â€” Farmer's Delightâ€“style food and tools themed around Cracker's Wither Storm. Gated behind the *On the Wither* scroll (ch12 Cursed Age).
- **Entropic Weapons** added â€” netherite-tier Command Block tools for late-game Wither Storm progression. Gated behind the *On the Wither* scroll.

### ðŸ”„ Mod Swaps
- **Spice of Life: Apple Pie Edition â†’ Spice of Life: Onion Edition**
  Same "eat diverse foods â†’ gain max hearts" mechanic, actively maintained by creativemd, no more DEDICATED_SERVER dist-load error on dedicated servers. Starter kit's Food Book automatically upgraded to the Onion variant.

### ðŸ›  Fixes
- **Desertification** updated to 0.41.2 â€” resolves *Missing layer definitions* crash on startup (scorpion, sandstorm, gust, nameless_construct, rolling_cactus, and others).
- **Better Clouds sky fix â€” clouds actually stay on now.** Previous config shipped with `cloudOverride: true`, which wrote `renderClouds:"false"` into every player's `options.txt` at startup â€” meaning clouds flipped off on every boot and had to be re-toggled in the Embeddium menu every session. Flipped to `cloudOverride: false` so Better Clouds rides the vanilla cloud toggle instead of fighting it. Set once, stays forever. Better Clouds JAR bundled into `overrides/mods/` so new players get it on first launch, and the fixed cloud config ships in `overrides/config/`.
- **Server compatibility** overhauled â€” dedicated server pack rebuilt (339 server-side mods, 65 client-only excluded).
- **Starter items** â€” Food Book item ID updated to match new SoL mod.

### ðŸ›  Fixes (continued)
- **Scroll loot pools repaired** â€” 16 stale scroll IDs in `scroll_loot_tables.js` were left behind by the Session 12 consolidation and silently rolled dead NBT in chests. Remapped to their canonical IDs:
  - `rec_atlas`, `rec_via_romana`, `wanderers_notes` â†’ `long_road`
  - `rec_music`, `rec_etching` â†’ `sound_archive`
  - `rec_seasons`, `rec_meadow` â†’ `cultivated_table`
  - `rec_beachparty`, `rec_winter_wear` â†’ `herbal_arts`
  - `rec_bounty`, `warlord_compact`, `rec_dummy` â†’ `rec_companions`
  - `rec_carry`, `rec_pack` â†’ `rec_horses`
  - `survival_torches` â†’ `kindled_fire`
  - Village houses, shipwrecks, igloos, mineshafts, dungeons, pyramids, jungle temples, pillager outposts, buried treasure, stronghold library, and ancient city pools all now hand out scrolls that actually exist.
- **Warden fight quest fixed** â€” `ch08_r_warden_fight.json` was pointing at a non-existent `sinborn:scrolls/sculk_warning` advancement. Restored to `sculk_warding` to match the advancement file and config on disk. Quest now completes correctly when the scroll is found.
- **Sculk scroll naming converged** â€” the Session 12 rename had partially landed (KubeJS used `warning`, advancements/configs used `warding`). Pack now consistently uses `sculk_warding` across all five layers (config, advancement, KubeJS SCROLL_IDS, loot table, quest reference).

### ðŸ½ Food Cravings â€” Mod Coverage
- 55 new food items added to the Food Memory pool: Witherstorm Delight (22), Miner's Delight (5), Vintage Delight (7), Compat Delight (14), Nether Vinery (2), Delightful Creators (3). These mods were previously invisible to the craving rotation.

### ðŸ“– Behind the Scenes
- Scroll system fully audited and consolidated (8 canonical scrolls, 16 gate quests redirected).
- 414 mods now have Obsidian vault pages with icons, links, and category color-coding.
- Scroll Wiki authored ([[Scroll Wiki]]) â€” full hub doc covering the three-layer architecture, drop sources, research process, and authoring guide.

---

## v1.1.1 â€” Hotfix

### Crash Fixes
- **Fixed crash when any mob dies** â€” all 9 scroll drop scripts were using `event.drops.add()` which injects raw ItemStacks into an ItemEntity list, causing a ClassCastException. Replaced with `event.addDrop()` (116 occurrences across 9 scripts)
- **Fixed scroll drop scripts crashing on entity type checks** â€” `event.entity.type` returns a Java object, not a string. Calling `.startsWith()` on it threw a TypeError. Added string coercion in all 9 scripts
- Fixed `fixes.js` spamming "No such element pressure:pressure_resistance" error every 2 seconds
- Fixed `eye_loot.js` crash on load â€” removed broken APIs incompatible with KubeJS 6
- Fixed `food_memory.js` crash when non-player entities (wolves, foxes) eat food

### Mod Swap
- Replaced **Sleeping Overhaul 2** with **Seamless Sleep** â€” Sleeping Overhaul's timelapse mixin was crashing the game on random entity ticks

### Cold Sweat Tuning
- Water now cools the player instead of heating â€” added water as a cooling block and set per-biome water temperatures (desert 62Â°F, ocean 45Â°F, frozen 32Â°F, etc.)
- World temperature gauge moved to the left side of the hotbar to avoid overlap with the roll button
- Disabled Cold Sweat "Auto Update" to prevent config overwrites on boot

### Economy
- **All villager trades now use Numismatics cogs instead of emeralds** â€” applies to both vanilla and MCA villagers, plus wandering traders
- MCA village taxes now collect cogs instead of emeralds
- Villager Recruits mod now uses cogs as recruitment currency

### Scroll Drop Fixes
- **Fixed villager scroll drops being 100% instead of intended rates** â€” operator precedence bug made vanilla/male MCA villager drops unconditional. Affected 6 scroll drops across 3 scripts
- MCA villagers (`mca:male_villager`, `mca:female_villager`) now correctly drop scrolls â€” previously only vanilla `minecraft:villager` was checked, but MCA replaces all vanilla villagers

### Starter Kit
- Starter backpack, tent, and sleeping bag now come in coordinated complementary color kits (tactical/outdoor palette â€” blacks, grays, olives, navy, dark reds, burnt orange)
- Each new player gets a randomly selected kit from 9 curated combinations

### Config Fixes
- Fixed sbf_utils configured for FTB Quests (not installed) â€” cleared broken inventory button and starting items
- Fixed starter backpack quest book not appearing â€” item ID typo
- Added 5 bread to starter backpack
- Fixed Path to Divinity scroll referencing wrong items â€” now gates PTD mod items (Philosopher's Stone, Soul Keeper, etc.) instead of totem of undying
- Removed 3 missing mod references from scroll configs (bakery, brewery, candlelight) â€” these "Let's Do" mods aren't installed; scrolls still gate their paired mods
- World temperature gauge moved further left to clear the offhand slot

### World Generation
- Abyssal Chasms spawn more frequently â€” lowered rarity offset and widened continentalness range so `/locate` reliably finds one

### Field Guide
- Added 20+ modded bosses to the boss category â€” Cataclysm, Alex's Caves, Mowzie's Mobs, Ice & Fire, Iron's Spellbooks, Aquamirae, Celestisynth, and more were incorrectly listed as monsters/animals

### Known Issues
- Critters and Companions: Ferrets can crash the game when attacking. Avoid ferrets or check for a mod update

---

## v1.1.0 â€” The Meal Update

Every civilization that entered the End was consumed by it. The Sinborn consume what waits inside.

---

### Questbook Overhaul
- Consolidated 120 quest groups into 8 clean categories: The Journey, Combat Log, Scrolls & Research, Survival, Technology, Crafting, Lore, The Twelve Eyes
- **All 524 quests now have real rewards** â€” boss drops, crafting materials, progression gear, and themed loot alongside Numismatics coins
  - Combat hunts reward actual boss drops (ignitium ingots, dragon blood, gorgon heads, nether stars, etc.)
  - Main phase quests reward progression items (cooking pot, water wheel, brass, netherite)
  - Survival, tech, and craft quests reward thematic materials
- Quest icons now show the actual reward item instead of random decorative blocks

### Stamina System â€” Full Integration
- Peak Stamina now recognizes **all modded armor and weapons** â€” Ice & Fire dragonsteel, Cataclysm ignitium/cursium, Celestisynth cosmic gear, Simply Swords, and more (~130 items)
- **70+ modded foods** now restore stamina (Farmer's Delight, Cataclysm, Alex's Delight, End's Delight)
- **30 status effects** now drain stamina â€” thirst, temperature extremes, radiation, sculk sickness, Cataclysm boss debuffs (blazing brand, bone fracture, stun), Aquamirae crystallization, Iron's Spellbooks combat effects, Mowzie's frozen
- Fixed 7 vanilla food entries that were silently broken (stamina penalty resistance on cooked meats/fish wasn't applying)

### Food Cravings â€” Modded Food Support
- Food Desire craving pool expanded from ~70 to **250+ foods** across all installed food mods
- Covers meat, fish, soups, teas, wines, cocktails, cheeses, pastries, and more from Farm & Charm, Farmer's Delight+, Vinery, Herbal Brews, Beach Party, Meadow, End's Delight, and others

### Sculk Sickness â€” Lifesteal Integration
- Dying while infected with Sculk Sickness now costs **1 Lifesteal heart** instead of using a separate health system
- Lost hearts show up in your Lifesteal heart count and **can be recovered with Heart Crystals**
- Floor at 3 hearts â€” sculk alone can't eliminate you

### Starter Kit
- Starter items now load **inside your backpack** instead of cluttering your hotbar
- Removed duplicate combat manual (the mod already gives you one)
- Lore book updated

### Wither Storm Safety
- Command blocks dropped by the Wither Storm are now automatically converted to command block fragments for survival players â€” no more accidental Wither Storm spam

### Eye Recovery Fix
- The Eye recovery system (detects when quest Eyes are destroyed and re-spawns them) is now functional â€” was broken due to incorrect event registration

### Bug Fixes
- Fixed 7 missing semicolons in Peak Stamina food config (penalty resistance buffs were silently failing)
- Fixed Eye recovery script using wrong KubeJS event
- Disabled broken villager emerald-to-cog trade swap (was throwing errors every load)
- Removed duplicate sculk death handler that conflicted with Lifesteal integration

## See Also

- [[Dev Log]] â€” Session-by-session build history
- [[Modpack goal]] â€” High-level pack goals and design constraints
- [[sinborn_release_state]] â€” Live Modrinth v2 state and version history
