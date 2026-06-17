---
tags: [sinborn-dev]
---

# Sinborn Odyssey 2 — Changelog

> Format: see [[Changelog Template]]. Newest at top.

## v1.6.1 — Spawn, Discovery & Server Test (June 2026)

> Adds the Spawn creature mod, deepens the gating, and keeps the world on pure
> explore-and-discover (no biome/structure trackers).

### Content
- **Spawn 4.0 added** — 270+ creatures, items, and foods, fully gated. Firekeeper,
  Dodo, Stranded, Flukeshroom and the ocean roster folded into the nine-civ lore.
- **Fixed a hard crash:** Create Big Cannons and Spawn both ship a `block_recipes`
  folder; CBC parsed Spawn's typeless files and NPE-crashed the Create-World screen.
  Stripped Spawn's 19 block_recipes (anthill-rot + heliostone conversion) — every
  Spawn mob/item/food still works.

### Scrolls & gating
- Closed a gating leak: items with a model but no lang key slipped past the scanner.
  All 276 holdable Spawn items now gated (incl. potted plants, buckets, dev variants).
- Food variants reconciled — 119 served/bowl/slice/feast variants now match their base
  food's form + culture; pies given proper form gates; raw fish moved out of the
  creature scroll into the food scrolls.
- Empty `resonant_larder` scroll given a real identity: the arcane crystalline larder.
- All spawn eggs sealed (creative-only); 744 total in the Sealed Vault.
- Sealed Vault audit (recipe cross-reference vs all 15,470 recipe outputs): confirmed
  no craftable/survival item was wrongly dev-vaulted. Moved the 4 outliers out — the
  Ice & Fire dragon egg into `Dragon Husbandry`, and 3 Burnt fluid buckets (eruption
  lava / flaming tar / geyser water) into `Oddments & Devices` alongside their siblings.
- **Nether access fix:** `The Infernal Passage` now drops in overworld ruined portals,
  breaking the chicken-and-egg (it used to drop only inside the Nether).
- Oil Rig (create_ltab) now drops the `blood_and_oil` scroll.

### Explore, don't track
- Trialed a biome locator (Nature's Compass) + biome compaction, then **removed both** —
  the pack stays vanilla worldgen, find-it-yourself discovery.

### Other
- Mob lore map: all 1,436 pack mobs sorted into the nine civilizations.
- Keybinds restored to the intended pack defaults; quest book on `[`.

## v1.6.0 — The Discovery Update (June 2026)

> The headline: **JEI starts completely empty.** A fresh player opens the recipe
> book and sees nothing but the Quest Book, then watches the whole world unfold
> as they research scrolls. Plus the gating system is airtight, fluids hide with
> their mods, and the pack is verified plug-and-play on dedicated servers.

### 🔍 Empty JEI, true discovery (the headline)
- **JEI now hides everything you haven't unlocked.** Load into a fresh world and
  the recipe list is empty except the Quest Book. Every item, block, and fluid
  reveals itself only once you research the scroll that gates it.
- **Why it never worked before:** HistoryStages' built-in JEI hiding only checks
  *global* stages. This pack gates 100% via *individual* (per-player) stages, so
  the hide found nothing and showed all ~22,500 items.
- **Fix: a coremod (`sinborn_hs_patch` 1.0.11) that does the hide right** using
  the individual-aware lock check, re-scanning late-loading items and hiding
  fluids whose mod is still locked. Items + liquids, all hidden until earned.

### 🚪 Gating, airtight
- **Sealed Vault is now dev-only.** Full audit pulled every craftable, lootable,
  and real-named item out of the dev catch-all (dragon gear, Twisted organs, oils,
  the Corroding Flame Scepter, and more got proper homes). Render-states, spawn
  eggs, and broken-name junk stay sealed.
- **Dimensional double-gate, complete.** End and Nether content (vanilla *and*
  modded) now needs dimension access **plus** its discipline scroll. Access chains
  (ender pearls, blaze rods) stay open so you can still reach the dimensions.
- **Everything has a home.** Barks, leaf piles, smithing templates, sign posts,
  the Beast Pit, and every stray got sorted. Fixed a 5-scroll over-gate on the
  metal-casting mods (one item was asking for five scrolls at once).

### 🌐 Server / client plug-and-play (verified)
- **Content-mod sets are now identical on client and server** (272/272, zero
  mismatches either direction). A player pulls the pack off Modrinth and connects
  straight to the server, no fiddling. Only per-user setup is voice chat.
- Server pack synced: HistoryStages 5.4.0, the hide coremod, all gating configs,
  KubeJS, all dependency libs verified present. Client-only rendering mods
  correctly stripped from the server.

### 🍲 Fixes
- **"I'd like to eat some Air."** The food-craving system could crave an empty
  diet (Dragon Survival / TerraFirmaCraft diets that aren't installed). Every
  diet now points at the real food pools, so no more craving air.
- **+ Multi Arrow Effects** added (combine potion effects onto a single arrow).

## v1.5.0 — The Coats of Paint Update (May 2026)

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
  Puddleflood 1.1.4.
- **MoreMobVariants restored, and the freeze it caused is fixed.** The extra-mob-skins
  mod had been pulled because it deadlocked world generation at "Preparing spawn area":
  Sully's Mod swaps zombies into vanilla dungeon spawners, which made MoreMobVariants
  run a blocking biome lookup on a worldgen thread and freeze. Rather than lose the
  variants, we disabled just that one Sully's behavior (a tiny zombie-swap in vanilla
  dungeons); the trigger is gone and variants are back on both client and server with
  no freeze. The rest of Sully's Mod is untouched.
- **Gated items can be picked up again (SMP fix).** HistoryStages was ignoring the
  `lockItemPickup = false` setting and ejecting any gated item the instant you tried to
  hold it, so mining a gated block shot the drop right back out until you researched its
  scroll. A new mixin in `sinborn_hs_patch` (1.0.5) no-ops that block, so found gated
  items stay pickable and usable, only crafting is gated, exactly how the discovery
  system was meant to work. It's a server-side event, so the fix holds on dedicated
  servers / SMP too.
- **Smoother first joins:** Surveyor's terrain sync now spreads over more ticks
  (terrainTicks 20 to 60) instead of bursting ~8 regions at once, so the server
  thread doesn't spike you off the "loading terrain" screen.

### 💥 Crashes fixed
- **Formations dep installed** — Echovoids' structure JSONs reference
  `formations:simple` structure_type. Without Formations (Structure Library),
  clicking *Select World* crashed with "Failed to load registries." Formations
  1.0.4 is now bundled.
- **Grim Kingdoms v1.0.0 → v1.0.3** — v1.0.0 had a structure NBT bug
  (`minecraft:andesite_air` doesn't exist in 1.20.1) that crashed worldgen
  during `frozen_onion_fort` placement. v1.0.3 fixed the bad block refs.

### ✨ New content
- **Realm RPG: Treasure Balloons** — rare floating balloons spawn above
  players. Shoot them down for chest loot, 5 rarity tiers (common → legendary).
  Not scroll-gated by design; the rarity system IS the progression gate.
- **Distant Horizons 2.4.5 enabled** — was disabled in 1.4.x. Players see
  terrain way past their render distance as LOD chunks. In-game toggle if you
  want to disable; we ship it on for the visual ceiling.

### 🎨 Visual fixes
- **Starter backpacks actually dye now.** The kit-color NBT was using the wrong
  keys (`main_color`/`accent_color`); Sophi 1.20.1 reads `clothColor`/`trimColor`.
  Result: every fresh kit was rendering as basic brown. Fixed. Existing players
  get a one-shot migration on login that re-keys the NBT in place (your backpack
  contents are preserved).
- **16 themed wanderer kits** — every kit now reads as its actual color:
  Forest Ranger, Desert Nomad, Storm Sailor, Ash Wanderer, Volcanic Forge, Sun
  Pilgrim, Jade Canopy, Bone Tundra, Crimson Warden, Sky Voyager, Tideborn,
  Twilight Scholar, Aurora Mystic, Petal Wanderer, Shadow Acolyte, Hearth
  Forager. 1-in-16 roll per new player. No more universal brown.
- **Better Clouds + Distant Horizons compatibility workaround** — Better Clouds
  1.3.37 aborts its init when it detects DH 2.4.5's API (which postdates BC's
  last release). KubeJS script `clouds_force_on.js` now auto-toggles the cloud
  setting 3 seconds after world join to force a re-init. Clouds stay up
  between launches without manual options-menu fiddling.
- **Fresh Animations swapped to 1.20.1-compatible build** — the pack had been
  shipping `FA+All_Extensions-v1.9.1.zip` which is for MC 1.21+
  (pack_format 84). MC 1.20.1 silently hid it. Replaced with
  `FreshAnimations_v1.10.4.zip` (proper pack_format 15 compat).

### 🤫 Chat noise reduced
- **HistoryStages welcome banner silenced** — the "Welcome! Loaded N stages"
  message that ran on every world join is now off by default.
- **HistoryStages 790-warning spam silenced** — `showDebugErrors=false`. The
  underlying scroll-data warnings still log to file for devs; players don't see
  them in chat anymore.
- **KubeJS error [1] fixed** — `crimson_robe_divinity.js` was registering an
  `ItemEvents.modification` handler in a server script (it's startup-only).
  Split into two files: `startup_scripts/crimson_robe_divinity_items.js` handles
  the item modifications, `server_scripts/crimson_robe_divinity.js` keeps the
  Resistance-on-full-regalia tick. KubeJS no longer reports an error.

### 📜 Scroll system — cleanest state ever
- **Zero empty scrolls** (down from 37 in 1.4.7). Eight scrolls newly populated
  with proper item lists (mythril_age, gunsmithing, ballistics_engineering,
  arsenal_legendary_ranged, cuisine_mesoamerican, god_nightwarden, god_void_worm,
  fermentation_age, five_vessels_apocrypha, oil_age, steam_age, infernal_age).
- **Zero junk items** — 293 stray spawn eggs, `.desc` lang artifacts, command
  blocks, incomplete crafting intermediates, and creative-only items removed
  from scroll item lists across the system.
- **Zero double-gated items** — 502 cross-scroll duplicates resolved by keeping
  each item in its most-focused scroll (smaller scroll wins).
- **23 dead-content scrolls deleted** (+ their 17 research quests) — eight civ_*
  scrolls, four god_* scrolls, six abstract _age scrolls, five deep-lore scrolls
  that referenced removed mods or had no actionable game content.
- **6 age progression-marker scrolls restored** (kindled_age, hearth_age,
  water_age, culture_age, eye_hunt_age, cursed_age) — these gate chapter unlocks
  in Heracles and were referenced by chapter `gate.json` files.
- **2 empty Pale Shore quests populated** (ch10_gate + ch10_wither) — both had
  description text but no actual tasks; now they have proper check-tasks
  matching the description.

### 🍳 Scroll system, this round's deep pass
- **Research scrolls actually drop in chests now.** A loot-injection bug meant scrolls
  weren't spawning in world chests at all (the injector was hitting a no-op event and
  building empty NBT). Fixed, scrolls now drop across 4,013 chest mappings: villages,
  Terralith and structure chests, dungeons, treasure. This is the one that makes the
  whole discovery loop actually work in a fresh world.
- **Food belongs to a culture, not a junk drawer.** Every food item is sorted into its
  culture/subculture cookbook scroll by real-world culinary origin instead of a generic
  pantry catch-all, so the cuisine scrolls read like actual regional cookbooks (dragon
  meat to the savanna cultures, deep-dark fare to the cold cultures, and so on).
- **Cookware and smithing are tiered.** New tiered cookware and a legendary smithing
  scroll, with 4 new research quests wiring them into progression.
- **Workstations routed by material** (317 placements), you research the discipline that
  matches what a bench is made of to unlock it.
- **Architects scroll is architecture-only** now, non-building items pulled out so it
  reads as a focused discipline.
- **Every scroll has a home in the world.** Loot coverage closed: every scroll (except the
  dev-only one) has real spawn locations and drop rates, zero unreachable scrolls.
- **3 scrolls renamed to in-world titles:** The Wayfarer's Endurance, The Wanderer's Pack,
  The Homestead's Comfort (no more scrolls named after the mod they gate).

### 🔒 Pack-wide gating, finished
- **Every content mod is gated now.** Several item-level scan passes hunted down the
  stragglers, 21 ungated item-adding mods slotted in one pass, then 9 more, then 11 more on a
  final triage, so nothing with craftable content sneaks in ungated anymore. If a mod adds
  stuff you make, it lives behind a scroll.
- **Every food item belongs to a culture.** A pack-wide food pass put every edible into its
  cuisine scroll, then a scrub kicked out non-food items that had crept in, so the cuisine
  scrolls read like clean cookbooks instead of junk drawers.
- **Sorted by actually reading the items, not guessing.** Scrolls were realigned by inspecting
  each mod's real contents, and a group-by-group thematic audit fixed 14 misplacements, so
  things sit in the scroll that matches what they actually are.
- **Cuisine scrolls renamed to the pack's own civilizations** instead of real-world labels, so
  they line up with Sinborn's canon cultures.

### ⚔️ Quests
- **Every slay quest now points you at its lore.** A Whispering Folio hint was added to all 69
  `slay_*` boss quests, so you know which folio the kill ties into instead of guessing.
- **Dead chapters cut**, theodyssey and thestoneflametrials chapters that referenced removed
  content are gone, so the questbook doesn't dead-end.

### 🗺️ Field Guide
- **Boss tab restored and reorganized**, bosses are grouped by their pantheon now, so the
  bestiary reads the way the lore does.
- **Dragon boss-locks, Antique Atlas, and the bleeding-bubbles** visual issues fixed in the
  same pass.

### 🪣 Loot reliability
- **The empty-chest bug is fixed at the root.** HistoryStages had been stripping gated items
  straight out of chest loot, so structure chests generated barren. Gating moved to
  recipes-not-items, so chests fill normally again and you still can't craft what you haven't
  researched.
- **Empty CTOV and Wares village chests filled** via a village-loot pass, no more hollow
  village buildings.

### 🧹 Config cleanup
- **46 orphan config files archived** — `.bak` configs from previously-removed
  mods (gobber, knightquest, just_leveling, eeeabsmobs, legendary_monsters,
  mutantmonsters, sky_arena, somnia, limbs, relics, itemphysic, toms_storage,
  modular_backpacks, beansbackpacks, and others) moved to
  `config/_archive_2026-05-21_orphans/` rather than deleted. Pack is cleaner.
- **Etched extension orphan configs removed** — `etched_extension-*.toml` had
  been left behind after the extension mod was removed from the pack; the
  parent Etched mod doesn't read them.

### 🛠 Other
- **Crystal Ball wiki page for Treasure Balloons** — full content drop:
  items, loot pools per rarity tier, advancements, gamerules,
  `extra_balloon_drops` tag hooks for Sinborn-flavored injections.
- **Crystal Ball doc for shaderpacks + resource packs** — captures what
  visual layer ships with the pack so it can be restored if Modrinth-managed
  Prism wipes user content on the next refresh.

---

## v1.4.5 — Server Setup Hotfix (May 2026)

> Makes the pack install and run server-side with **zero manual file-shuffling**.

### 🔧 Fixes
- **Cut Simply Bows + Simply Tooltips; restored Obscure Tooltips + Fragmentum.**
  Simply Bows hard-depends on Simply Tooltips, which is client-only — so fresh
  dedicated-server installs kept crashing with *"simplytooltips not installed."*
  Cutting the pair removes the dependency conflict at the root. Obscure Tooltips
  (the pack's original tooltip mod) is back. This permanently retires the 1.4.4
  server-side workaround.
- **Pre-tuned `server.properties` ships with the pack** — fresh dedicated-server
  installs auto-get `view-distance=8 / simulation-distance=6`, fixing the
  join-timeout players hit during worldgen.

### v1.4.4 — Server-Compatibility Hotfix (superseded)
- Fixed dedicated-server boot crash by force-bundling Simply Tooltips server-side.
  Now obsolete — 1.4.5 removes the mods entirely.

## v1.4.3 — The Discovery Update (May 2026)

> The biggest progression overhaul the pack has had. Sinborn Odyssey 2 is now a
> full **crafting-as-discovery** modpack — you don't just *get* recipes, you
> research the knowledge to craft them.

### 🔮 Pack-wide scroll gating
- **238 research scrolls** now gate the pack — 176 of 209 content mods fully
  gated, plus vanilla processed goods. Find a scroll, research it, unlock its
  knowledge.
- **Gate knowledge, not gathering** — raw materials stay free (logs, planks,
  ore, stone, gathered plants). What you research is the *crafted result*:
  ingots, tools, bricks, furniture, doors.
- Weapons re-sorted — 293 Simply Swords / Simply More weapons placed into the
  tiered arsenal scrolls (iron / master / legendary, by material).
- Found a locked item? Its tooltip names the scroll you need — a breadcrumb
  toward where to hunt.

### 📜 9 new scrolls
- **The Magnetic Deep · The Primordial Strata · The Blighted Hollows · The
  Forlorn Hollows · The Abyssal Chasm · The Sugarstone Caverns** — Alex's Caves
  is no longer one unlock; each of its 6 biomes is its own pocket of knowledge.
- **Woodworking** — vanilla joinery: doors, fences, boats, signs, stairs.
- **Alchemy** — brewing: potions, splash/lingering draughts, tipped arrows,
  food infusion.
- **Runesmithing** — the Simply Swords gem / rune / relic socketing system.

### 📖 The Scattered Archive + lore books
- **55+ collectible history folios** telling the world-before — found in chests
  and dropped by major bosses. Assemble the library of a lost age.
- **Lore-hint books** — cryptic notes that point you toward where specific
  scrolls are hidden. 85 of them now, including hints for every new scroll.

### 🗺 Heracles questbook — full coverage
- 658 quests; **every scroll has a discovery quest**. The questbook is the
  progression spine.

### 🧹 EMI cleanup
- Spawn eggs and dev/creative items (command blocks, barriers, debug items,
  etc.) **hidden from the EMI item list** — less clutter when you browse.

### 🛠 Stability & fixes
- **Cold Sweat worldgen deadlock fixed** — the biome-temperature modifier that
  hung world generation is disabled. Cold Sweat → 2.4, fiahi → 3.1.6.
- **Scroll sync-packet overflow fixed** — the scroll system was converted to a
  mod-gating model so definitions stay under Minecraft's network limit (no more
  "Invalid player data" disconnects).
- **Early-game progression fix** — planks are no longer gated. They were
  briefly locked behind Woodworking, which would have soft-locked the entire
  early game (no planks → no tools → no crafting table).
- Dedicated-server boot verified — the pack loads clean on a fresh Forge server.

### 🖼 Tooltip overhaul
- **Simply Tooltips** is now the pack's tooltip system — themed pack-wide
  across vanilla and all mods (dark-brown/gold default theme, plus 34 built-in
  themes and tailored ones for tools and Simply weapons).
- **Obscure Tooltips removed** — redundant with Simply Tooltips once it went
  pack-wide.

### ✨ New mods
- **Realm RPG: Treasure Balloons** — loot-balloon encounters, wired into the
  pack's loot tiers.
- **Simply Bows**, **Simply Tooltips**.

## v2.X (April 2026)

### 📸 New Content (2026-04-19)
- **Exposure: Polaroid** added — instant-camera addon for Exposure. Gated behind the *Artisan's Ledger* scroll alongside the base Exposure camera.
- **Exposure** upgraded `1.9.13` → `1.9.20` (required for Polaroid compatibility).

### 🔄 Wither Storm drop migration (2026-04-19)
- The *On the Wither* scroll now drops **from the Withered Symbiont mob itself** instead of Nether chests. Killing the Wither Storm's final form now guarantees both `scroll_end_passage` and `the_wither` scrolls.
- Previous chest drops removed from `nether_bridge` and `bastion_hoglin_stable`.

### 🧹 Scroll gate cleanup (2026-04-19)
- Base **Create** mod and basic workstations (`crafting_table`, `furnace`) removed from scroll gating — these are now available from first spawn.
- Base **Farmer's Delight** removed from scroll gating — food content available from start.
- Create addons (TFMG, Create: New Age, Create: Oppenheimered, Create Teleporters, etc.) and FD addons (Ender's Delight, Nether's Delight, Cultural Delights, Youkai's Feasts, etc.) still gated.

### 🔧 Shader fix (2026-04-18)
- **Complementary Reimagined r5.7.1** volumetric clouds crash fixed — `GetVolumetricClouds` undefined error in `deferred1.fsh` resolved by setting `CLOUD_STYLE_DEFINE=0` in the pack's config.

### ✨ New Content
- **Wither Storm Delight** added — Farmer's Delight–style food and tools themed around Cracker's Wither Storm. Gated behind the *On the Wither* scroll (ch12 Cursed Age).
- **Entropic Weapons** added — netherite-tier Command Block tools for late-game Wither Storm progression. Gated behind the *On the Wither* scroll.

### 🔄 Mod Swaps
- **Spice of Life: Apple Pie Edition → Spice of Life: Onion Edition**
  Same "eat diverse foods → gain max hearts" mechanic, actively maintained by creativemd, no more DEDICATED_SERVER dist-load error on dedicated servers. Starter kit's Food Book automatically upgraded to the Onion variant.

### 🛠 Fixes
- **Desertification** updated to 0.41.2 — resolves *Missing layer definitions* crash on startup (scorpion, sandstorm, gust, nameless_construct, rolling_cactus, and others).
- **Better Clouds sky fix — clouds actually stay on now.** Previous config shipped with `cloudOverride: true`, which wrote `renderClouds:"false"` into every player's `options.txt` at startup — meaning clouds flipped off on every boot and had to be re-toggled in the Embeddium menu every session. Flipped to `cloudOverride: false` so Better Clouds rides the vanilla cloud toggle instead of fighting it. Set once, stays forever. Better Clouds JAR bundled into `overrides/mods/` so new players get it on first launch, and the fixed cloud config ships in `overrides/config/`.
- **Server compatibility** overhauled — dedicated server pack rebuilt (339 server-side mods, 65 client-only excluded).
- **Starter items** — Food Book item ID updated to match new SoL mod.

### 🛠 Fixes (continued)
- **Scroll loot pools repaired** — 16 stale scroll IDs in `scroll_loot_tables.js` were left behind by the Session 12 consolidation and silently rolled dead NBT in chests. Remapped to their canonical IDs:
  - `rec_atlas`, `rec_via_romana`, `wanderers_notes` → `long_road`
  - `rec_music`, `rec_etching` → `sound_archive`
  - `rec_seasons`, `rec_meadow` → `cultivated_table`
  - `rec_beachparty`, `rec_winter_wear` → `herbal_arts`
  - `rec_bounty`, `warlord_compact`, `rec_dummy` → `rec_companions`
  - `rec_carry`, `rec_pack` → `rec_horses`
  - `survival_torches` → `kindled_fire`
  - Village houses, shipwrecks, igloos, mineshafts, dungeons, pyramids, jungle temples, pillager outposts, buried treasure, stronghold library, and ancient city pools all now hand out scrolls that actually exist.
- **Warden fight quest fixed** — `ch08_r_warden_fight.json` was pointing at a non-existent `sinborn:scrolls/sculk_warning` advancement. Restored to `sculk_warding` to match the advancement file and config on disk. Quest now completes correctly when the scroll is found.
- **Sculk scroll naming converged** — the Session 12 rename had partially landed (KubeJS used `warning`, advancements/configs used `warding`). Pack now consistently uses `sculk_warding` across all five layers (config, advancement, KubeJS SCROLL_IDS, loot table, quest reference).

### 🍽 Food Cravings — Mod Coverage
- 55 new food items added to the Food Memory pool: Witherstorm Delight (22), Miner's Delight (5), Vintage Delight (7), Compat Delight (14), Nether Vinery (2), Delightful Creators (3). These mods were previously invisible to the craving rotation.

### 📖 Behind the Scenes
- Scroll system fully audited and consolidated (8 canonical scrolls, 16 gate quests redirected).
- 414 mods now have Obsidian vault pages with icons, links, and category color-coding.
- Scroll Wiki authored ([[Scroll Wiki]]) — full hub doc covering the three-layer architecture, drop sources, research process, and authoring guide.

---

## v1.1.1 — Hotfix

### Crash Fixes
- **Fixed crash when any mob dies** — all 9 scroll drop scripts were using `event.drops.add()` which injects raw ItemStacks into an ItemEntity list, causing a ClassCastException. Replaced with `event.addDrop()` (116 occurrences across 9 scripts)
- **Fixed scroll drop scripts crashing on entity type checks** — `event.entity.type` returns a Java object, not a string. Calling `.startsWith()` on it threw a TypeError. Added string coercion in all 9 scripts
- Fixed `fixes.js` spamming "No such element pressure:pressure_resistance" error every 2 seconds
- Fixed `eye_loot.js` crash on load — removed broken APIs incompatible with KubeJS 6
- Fixed `food_memory.js` crash when non-player entities (wolves, foxes) eat food

### Mod Swap
- Replaced **Sleeping Overhaul 2** with **Seamless Sleep** — Sleeping Overhaul's timelapse mixin was crashing the game on random entity ticks

### Cold Sweat Tuning
- Water now cools the player instead of heating — added water as a cooling block and set per-biome water temperatures (desert 62°F, ocean 45°F, frozen 32°F, etc.)
- World temperature gauge moved to the left side of the hotbar to avoid overlap with the roll button
- Disabled Cold Sweat "Auto Update" to prevent config overwrites on boot

### Economy
- **All villager trades now use Numismatics cogs instead of emeralds** — applies to both vanilla and MCA villagers, plus wandering traders
- MCA village taxes now collect cogs instead of emeralds
- Villager Recruits mod now uses cogs as recruitment currency

### Scroll Drop Fixes
- **Fixed villager scroll drops being 100% instead of intended rates** — operator precedence bug made vanilla/male MCA villager drops unconditional. Affected 6 scroll drops across 3 scripts
- MCA villagers (`mca:male_villager`, `mca:female_villager`) now correctly drop scrolls — previously only vanilla `minecraft:villager` was checked, but MCA replaces all vanilla villagers

### Starter Kit
- Starter backpack, tent, and sleeping bag now come in coordinated complementary color kits (tactical/outdoor palette — blacks, grays, olives, navy, dark reds, burnt orange)
- Each new player gets a randomly selected kit from 9 curated combinations

### Config Fixes
- Fixed sbf_utils configured for FTB Quests (not installed) — cleared broken inventory button and starting items
- Fixed starter backpack quest book not appearing — item ID typo
- Added 5 bread to starter backpack
- Fixed Path to Divinity scroll referencing wrong items — now gates PTD mod items (Philosopher's Stone, Soul Keeper, etc.) instead of totem of undying
- Removed 3 missing mod references from scroll configs (bakery, brewery, candlelight) — these "Let's Do" mods aren't installed; scrolls still gate their paired mods
- World temperature gauge moved further left to clear the offhand slot

### World Generation
- Abyssal Chasms spawn more frequently — lowered rarity offset and widened continentalness range so `/locate` reliably finds one

### Field Guide
- Added 20+ modded bosses to the boss category — Cataclysm, Alex's Caves, Mowzie's Mobs, Ice & Fire, Iron's Spellbooks, Aquamirae, Celestisynth, and more were incorrectly listed as monsters/animals

### Known Issues
- Critters and Companions: Ferrets can crash the game when attacking. Avoid ferrets or check for a mod update

---

## v1.1.0 — The Meal Update

Every civilization that entered the End was consumed by it. The Sinborn consume what waits inside.

---

### Questbook Overhaul
- Consolidated 120 quest groups into 8 clean categories: The Journey, Combat Log, Scrolls & Research, Survival, Technology, Crafting, Lore, The Twelve Eyes
- **All 524 quests now have real rewards** — boss drops, crafting materials, progression gear, and themed loot alongside Numismatics coins
  - Combat hunts reward actual boss drops (ignitium ingots, dragon blood, gorgon heads, nether stars, etc.)
  - Main phase quests reward progression items (cooking pot, water wheel, brass, netherite)
  - Survival, tech, and craft quests reward thematic materials
- Quest icons now show the actual reward item instead of random decorative blocks

### Stamina System — Full Integration
- Peak Stamina now recognizes **all modded armor and weapons** — Ice & Fire dragonsteel, Cataclysm ignitium/cursium, Celestisynth cosmic gear, Simply Swords, and more (~130 items)
- **70+ modded foods** now restore stamina (Farmer's Delight, Cataclysm, Alex's Delight, End's Delight)
- **30 status effects** now drain stamina — thirst, temperature extremes, radiation, sculk sickness, Cataclysm boss debuffs (blazing brand, bone fracture, stun), Aquamirae crystallization, Iron's Spellbooks combat effects, Mowzie's frozen
- Fixed 7 vanilla food entries that were silently broken (stamina penalty resistance on cooked meats/fish wasn't applying)

### Food Cravings — Modded Food Support
- Food Desire craving pool expanded from ~70 to **250+ foods** across all installed food mods
- Covers meat, fish, soups, teas, wines, cocktails, cheeses, pastries, and more from Farm & Charm, Farmer's Delight+, Vinery, Herbal Brews, Beach Party, Meadow, End's Delight, and others

### Sculk Sickness — Lifesteal Integration
- Dying while infected with Sculk Sickness now costs **1 Lifesteal heart** instead of using a separate health system
- Lost hearts show up in your Lifesteal heart count and **can be recovered with Heart Crystals**
- Floor at 3 hearts — sculk alone can't eliminate you

### Starter Kit
- Starter items now load **inside your backpack** instead of cluttering your hotbar
- Removed duplicate combat manual (the mod already gives you one)
- Lore book updated

### Wither Storm Safety
- Command blocks dropped by the Wither Storm are now automatically converted to command block fragments for survival players — no more accidental Wither Storm spam

### Eye Recovery Fix
- The Eye recovery system (detects when quest Eyes are destroyed and re-spawns them) is now functional — was broken due to incorrect event registration

### Bug Fixes
- Fixed 7 missing semicolons in Peak Stamina food config (penalty resistance buffs were silently failing)
- Fixed Eye recovery script using wrong KubeJS event
- Disabled broken villager emerald-to-cog trade swap (was throwing errors every load)
- Removed duplicate sculk death handler that conflicted with Lifesteal integration

## See Also

- [[Dev Log]] — Session-by-session build history
- [[Modpack goal]] — High-level pack goals and design constraints
- [[sinborn_release_state]] — Live Modrinth v2 state and version history
