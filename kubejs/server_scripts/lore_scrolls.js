// ============================================================
// SINBORN ODYSSEY 2 — Lore Book Chest Injection
//
// Lore books are minecraft:written_book items that give cryptic
// hints about where to find specific research scrolls.
//
// KEY RULES:
//   - Lore books are NOT scrolls. No gating. No sinborn_scroll_id.
//   - Each book has sinborn_lore_id NBT for future library tracking.
//   - Books spawn in DIFFERENT chests than the scroll they hint at.
//   - Rates scale inversely with tier (T1=15-18%, T6=1-2%).
//   - Hints are cryptic but solvable — point toward scroll location.
//
// TIER SCALING:
//   T1: 1 book/scroll,  15-18%
//   T2: 1-2 books,      10-12%
//   T3: 2 books,         6-10%
//   T4: 2-3 books,       4-8%
//   T5: 3 books,         2-4%
//   T6: 3-4 books,       1-2%
//   Eyes: 1 book/eye,    8-12%
// ============================================================

// ─── LORE BOOK DATA ─────────────────────────────────────────
// [loreId, title, author, pageText, chestTable, rate]
//
// pageText is a single page of cryptic hint text.
// All books are 1-page for consistent feel (short, evocative).

var LORE_BOOKS = [

  // ═══════ T1 — EXPLORATION & SOCIETY (1 book each, 15-18%) ═══════

  ['lore_long_road', 'A Trader\'s Last Entry', 'Unknown Merchant',
   'The ones who mapped the old roads left their work with the cartographers. Not buried. Filed. In the houses where ink was always ready and the tables faced the window. The mapmakers kept everything.',
   'minecraft:chests/village/village_plains_house', 18],

  ['lore_hearthkeepers', 'On the Mason\'s Secret', 'A Shepherd\'s Letter',
   'The mason built more than walls. There were notes in the mortar joints. Instructions for a kind of building that went beyond placement. If you want to build a home that lasts, find where the masons kept their records.',
   'minecraft:chests/village/village_shepherd', 15],

  ['lore_companions', 'A Notice Board Entry', 'Town Crier \u2014 Undated',
   'The charter was read aloud in the square and then filed with the cartographer. Something about allies, about prisoners, about what the community owed to those who fought for it. The mapmaker kept a copy.',
   'minecraft:chests/village/village_butcher', 15],

  ['lore_artisans', 'A Sound in the Stone', 'Temple Attendant',
   'The priests kept more than prayers. In the temple vaults, between the hymn books and the census, they filed the ledger. Everything the artisans made. Everything they recorded. The temple remembers what the village forgets.',
   'minecraft:chests/village/village_mason', 12],

  ['lore_cultivators', 'On Soil and Season', 'A Fisher\'s Aside',
   'The farmers never wrote anything down. The fishers did. And somewhere in those fishing notes, between the tide tables and the catch logs, someone recorded the almanac. The one about soil. About when to plant. About what the dirt says if you listen.',
   'minecraft:chests/village/village_fisher', 15],

  ['lore_many_tables', 'A Recipe from Elsewhere', 'Traveler \u2014 Cold Region',
   'I ate something in the south I cannot replicate. The spices do not grow here. The technique is different. Somewhere in the desert houses or the savanna settlements, the recipe exists. Not as a book. As a practice. Find the tables where they cook differently.',
   'minecraft:chests/village/village_taiga_house', 15],

  ['lore_vine_brew', 'The Vintner\'s Confession', 'Anonymous',
   'The best wine came from the cold regions. Not the warm ones. The fermentation was slower. The patience was longer. The taiga villages kept the knowledge. The snowy ones kept the results.',
   'minecraft:chests/village/village_desert_house', 15],

  ['lore_herbal_arts', 'A Remedy from the Cold', 'Northern Healer',
   'The ice preserved what the warmth destroyed. Medicinal knowledge that the southern villages lost to rot and fire survived in the frozen places. The igloo libraries. The shepherd\'s cabinets. Cold keeps secrets.',
   'minecraft:chests/village/village_snowy_house', 15],

  ['lore_cave_kitchen', 'A Miner\'s Last Meal', 'Found in a Dungeon',
   'They cooked in the mines. Not because they wanted to. Because the shifts were too long to surface for food. The recipes survived in the mineshaft storage rooms. Simple food. Filling food. Food that kept people alive in the dark.',
   'minecraft:chests/simple_dungeon', 12],

  ['lore_industrial_kitchen', 'Notes on Mechanical Cookery', 'Blacksmith\'s Margin Notes',
   'The armorers understood gears. The toolsmiths understood automation. Somewhere between these two trades, someone built a kitchen that cooked by machine. The buried workshops hold the designs. The toolsmith\'s bench has the invoice.',
   'minecraft:chests/village/village_armorer', 12],

  ['lore_warriors_feast', 'Field Rations Manifest', 'Supply Officer \u2014 Resigned',
   'The outpost cooks fed armies on nothing. The woodland estates fed lords on excess. Between those two extremes is a cuisine designed for people who fight and then need to eat immediately. The records are in the places where fighting happened.',
   'minecraft:chests/simple_dungeon', 12],

  // ═══════ T2 — COMBAT & SPECIALTY (1-2 books each, 10-12%) ═══════

  ['lore_warriors_codex_1', 'A Blade\'s Thesis', 'Unknown Duelist',
   'The outpost armory had the manual. Not a manual of forms. A manual of principles. Stance. Distance. The mathematics of combat. The weaponsmith\'s copy was partial. The outpost had the full text.',
   'minecraft:chests/woodland_mansion', 12],

  ['lore_warriors_codex_2', 'On Stance and Steel', 'Combat Instructor \u2014 Retired',
   'I left my teaching notes at the last outpost. The pillagers do not read. The notes are safe. If you find the outpost stores, look in the weapons cache. The codex is there. It was always there.',
   'minecraft:chests/simple_dungeon', 10],

  ['lore_wild_study', 'A Naturalist\'s Warning', 'Field Biologist',
   'The creatures in the dungeons are not the worst. The worst are in the mansions. The builders of the woodland mansions catalogued what they found in the forests. Their study is comprehensive. Their conclusions are terrifying.',
   'minecraft:chests/village/village_plains_house', 10],

  ['lore_scales_steel_1', 'A Scale in the Ash', 'Nether Survivor',
   'I found a dragon scale in the Nether fortress. Not from a Nether creature. From something that flew through. The roosts near the surface hold the full knowledge. Where the dragons sleep, the steel-workers left their formulas.',
   'minecraft:chests/nether_bridge', 10],

  ['lore_scales_steel_2', 'The Dragon\'s Temper', 'Jungle Explorer',
   'The jungle temples were built by people who understood dragons. Not the dragons themselves. The metallurgy. How scale becomes steel. How fire becomes forge. The roosts have the scrolls.',
   'minecraft:chests/jungle_temple', 8],

  ['lore_infernal_kitchen', 'The Nether Cook', 'Piglin Barter Notes',
   'They cook in the Nether. The piglins know food that survives the heat. The fortress bridges hold supply manifests. The bastion stores hold the actual recipes.',
   'minecraft:chests/bastion_hoglin_stable', 10],

  ['lore_void_table', 'End Cuisine', 'Stronghold Archivist',
   'There is food in the End. I do not know how. The stronghold library has references. Incomplete. But the End cities themselves hold the knowledge. Someone learned to eat there. Someone stayed long enough to cook.',
   'minecraft:chests/stronghold_library', 10],

  // ═══════ T3 — TRANSITION (2 books each, 6-10%) ═══════

  ['lore_celestial_1', 'Starlight Metallurgy', 'Unknown Blacksmith',
   'The Nether bastions hold relics that should not exist. Weapons forged from starlight. The treasure rooms of the bridge garrisons have records. The ones who crossed the bastion bridges carried the arsenal knowledge with them.',
   'minecraft:chests/nether_bridge', 8],

  ['lore_celestial_2', 'The Star Forge', 'Bastion Record',
   'It was not a forge in any conventional sense. The celestial metal required conditions that only exist in the bastion depths. The treasure vaults hold the manuals.',
   'minecraft:chests/bastion_other', 6],

  ['lore_arcane_1', 'The Wizard\'s Complaint', 'Library Margin Notes',
   'Magic is not talent. Magic is craft. The stronghold libraries hold the codex. The original. Written by someone who was angry that people kept calling it a gift when it was actually work.',
   'minecraft:chests/stronghold_corridor', 8],

  ['lore_arcane_2', 'On Enchantment Theory', 'Academic Fragment',
   'The crossing passages of the stronghold hold overflow from the library. Texts that did not fit on the main shelves. The arcane codex is among them. Or was.',
   'minecraft:chests/ancient_city', 6],

  ['lore_dragon_priest_1', 'The Ritual of Scale', 'Jungle Scholar',
   'The dragon priests practiced in the jungle temples. Not because the temples were sacred. Because the temples were isolated. The female dragon caves hold the rites. The jungle temples hold the context.',
   'minecraft:chests/desert_pyramid', 8],

  ['lore_dragon_priest_2', 'On Dragons and Faith', 'Temple Guard',
   'The priests who served the dragons left records in the caves. Not the male caves. The female caves. Where the eggs are kept. Where the faith is practiced. Where the real knowledge lives.',
   'minecraft:chests/stronghold_library', 6],

  ['lore_rotational_1', 'On the First Gear', 'Abandoned Workshop Note',
   'The mines were the first place anyone needed rotation. Windlasses. Pulleys. The abandoned mineshaft workshops have the original designs. Simple. Mechanical. The beginning of everything that turns.',
   'minecraft:chests/village/village_toolsmith', 8],

  ['lore_rotational_2', 'The Engineer\'s Oath', 'Armorer\'s Apprentice',
   'My master said the armorer\'s trade and the engineer\'s trade split somewhere in the old mines. The armorer kept the fire. The engineer kept the gears. The mineshaft has both.',
   'minecraft:chests/simple_dungeon', 6],

  ['lore_combustion_1', 'The Black Substance', 'Merchant\'s Warning',
   'The desert pyramids sit on oil. Not all of them. But enough. The pillager outposts near the badlands have reports. Geological surveys. They knew what was underground before anyone could use it.',
   'minecraft:chests/village/village_armorer', 8],

  ['lore_combustion_2', 'On Refined Power', 'Outpost Geologist',
   'The outpost scouts found bitumen in the desert. The refining knowledge is in the outpost reports. Hidden in supply manifests. Between ammunition counts and food requisitions.',
   'minecraft:chests/woodland_mansion', 6],

  ['lore_cave_kitchen_deep', 'Underground Gastronomy', 'Cave Explorer',
   'Below the surface, entire ecosystems exist that never see sunlight. The creatures there evolved to be edible. Someone figured this out. Their notes are in the mineshaft supply rooms.',
   'minecraft:chests/village/village_butcher', 8],

  ['lore_deep_survey_1', 'The Magnetic Anomaly', 'Survey Report',
   'The caves below the standard depth have their own rules. Magnetic. Toxic. The survey equipment left in the magnetic ruins still works. The underground cabins have the logbooks.',
   'minecraft:chests/abandoned_mineshaft', 8],

  ['lore_deep_survey_2', 'What Lives Below', 'Cave Naturalist',
   'The underground cabins were built by people studying something. Not mining. Studying. The magnetic ruins preserve what they found. The evidence is still there if you bring a light.',
   'minecraft:chests/simple_dungeon', 6],

  ['lore_infernal_passage_1', 'The Portal Builders', 'Ruined Portal Fragment',
   'Not every portal was finished. The ones that failed left records. At the ruined portals. At the bastion bridges where the crossing was attempted. The passage knowledge is in the places where people tried and did not succeed.',
   'minecraft:chests/nether_bridge', 8],

  ['lore_infernal_passage_2', 'The Nether Crossing', 'Bridge Commander',
   'The bastion bridges were military installations. The bridge commanders logged everything. Including the portal protocols. Including what went wrong. The ruined portals have the physical evidence.',
   'minecraft:chests/bastion_other', 6],

  ['lore_drowned_world_1', 'The Captain\'s Log', 'Recovered from Wreckage',
   'The shipwrecks tell the story backward. First the wreck. Then the reason. The supply holds of sunken ships have the navigation charts. The Aquamirae vessels have the depth charts.',
   'minecraft:chests/underwater_ruin_big', 8],

  ['lore_drowned_world_2', 'Pressure at Depth', 'Diver\'s Record',
   'The underwater ruins were not built underwater. They sank. The big ruins hold the records of what was there before the water came. The shipwreck treasures hold what was saved.',
   'minecraft:chests/shipwreck_map', 6],

  ['lore_sculk_sickness_1', 'The Deep Dark Record', 'Ward Fragment',
   'The ancient cities documented the sickness. Not to cure it. To understand it. The stronghold corridors have fragments. The ancient city has the full record. Find it before the sculk finds you.',
   'minecraft:chests/stronghold_library', 8],

  ['lore_sculk_sickness_2', 'On Infection', 'Unnamed Researcher',
   'The sculk does not hate. It converts. The difference matters when you are deciding what to do about it. The ancient cities have the research. The stronghold corridors have the field notes.',
   'minecraft:chests/stronghold_crossing', 6],

  ['lore_temple_serpent_1', 'The Jungle Gods', 'Desert Scholar',
   'The jungle temples are older than the desert pyramids. By centuries. What the jungle people worshipped is documented in the desert libraries. What they feared is documented in the jungle itself.',
   'minecraft:chests/desert_pyramid', 8],

  ['lore_temple_serpent_2', 'On Kukulkan', 'Temple Keeper',
   'The serpent god is real. The jungle temples were built for it. The desert pyramids were built despite it. The knowledge of how to approach it is split between the two cultures.',
   'minecraft:chests/village/village_temple', 6],

  // ═══════ T4 — BOSS TIER (2-3 books each, 4-8%) ═══════

  ['lore_cataclysm_1', 'The Eight Guardians', 'Ancient Warning',
   'Eight creatures guard the deepest vaults. The acropolis holds their records. The bastion treasuries hold the keys. No one has defeated all eight. The records explain why.',
   'minecraft:chests/nether_bridge', 6],

  ['lore_cataclysm_2', 'On Ignitium', 'Metallurgist\'s Notes',
   'The metal that burns forever. Found only in the vaults of the eight. The acropolis treasuries have the smelting records. The bastion treasuries have samples that should not exist.',
   'minecraft:chests/bastion_bridge', 5],

  ['lore_cataclysm_3', 'The Vault Sequence', 'Expedition Leader',
   'They must be fought in order. The remnant first. Then the flame. Then the deep. The acropolis archives explain the sequence. Without the sequence, you fight blind.',
   'minecraft:chests/ancient_city', 4],

  ['lore_electrified_1', 'The Lightning Principle', 'End City Engineer',
   'The End cities have power systems. Not mechanical. Electrical. The ancient cities in the overworld have the precursor technology. Between these two sources, the full codex can be reconstructed.',
   'minecraft:chests/stronghold_library', 6],

  ['lore_electrified_2', 'On Quantum Mechanisms', 'Theoretical Physicist',
   'The teleporter designs require understanding that only exists in two places. The end cities hold the application. The ancient cities hold the theory. You need both.',
   'minecraft:chests/bastion_treasure', 4],

  ['lore_wither_1', 'The First Summoning', 'Fortress Historian',
   'The Nether fortress archives describe the first summoning. Not as triumph. As accident. The hoglin stables have the supply records. The fortress bridges have the ritual notes.',
   'minecraft:chests/bastion_bridge', 6],

  ['lore_wither_2', 'On Containing Stars', 'Piglin Elder',
   'The nether star does not want to be contained. The fortress bridges have the containment protocols. The hoglin stables have the material lists. Both are needed.',
   'minecraft:chests/bastion_other', 5],

  ['lore_command_ruin_1', 'The Storm Warning', 'Classified Report',
   'The bastion treasuries hold the classified reports. What was built. What it consumed. What it became. The frosted prison holds what was done about it.',
   'minecraft:chests/nether_bridge', 5],

  ['lore_command_ruin_2', 'On the Command Block', 'Unknown Engineer',
   'It was not supposed to be possible. The bastion treasuries hold the design documents. The frosted prison holds the containment records. Between them: the full story of command and ruin.',
   'minecraft:chests/ancient_city', 4],

  ['lore_command_ruin_3', 'After the Storm', 'Survivor',
   'I survived. I should not have. The records of what I saw are in the deepest bastion vault. The warden\'s prison has the aftermath. Read both before you decide.',
   'minecraft:chests/bastion_hoglin_stable', 4],

  // ═══════ T5 — FINAL (3 books each, 2-4%) ═══════

  ['lore_atomic_1', 'The Fission Principle', 'Nuclear Theorist',
   'The ancient cities understood splitting the atom. Not well enough. Their failure is documented in the deepest vaults. The knowledge survived because the knowledge is what destroyed them.',
   'minecraft:chests/stronghold_library', 4],

  ['lore_atomic_2', 'On Controlled Detonation', 'Military Scientist',
   'The ancient cities have the warhead designs. Filed next to the agricultural reports. They did not separate civilian and military research. This tells you everything about how it ended.',
   'minecraft:chests/bastion_treasure', 3],

  ['lore_atomic_3', 'The Oppenheimer Problem', 'Ethics Committee Fragment',
   'The committee voted to proceed. The vote was not unanimous. The dissenting opinion is in the ancient city archives. The majority opinion is in the crater.',
   'minecraft:chests/end_city_treasure', 2],

  ['lore_nature_void_1', 'What the Void Remembers', 'End-Walker Fragment',
   'The stronghold libraries have the portal research. The End cities have the destination records. Between them is the knowledge of what the void actually is. It is not empty. It remembers.',
   'minecraft:chests/ancient_city', 4],

  ['lore_nature_void_2', 'On the Dragon\'s Purpose', 'Lost Scholar',
   'The dragon guards the End. Not from invaders. From the void. The End cities document what happens when the dragon dies. The stronghold libraries document why it must not.',
   'minecraft:chests/stronghold_crossing', 3],

  ['lore_nature_void_3', 'The Twelve Eyes', 'Portal Architect',
   'Twelve civilizations. Twelve inheritances. The End city archives list all twelve. The stronghold libraries describe the portal mechanism. Neither source is complete alone.',
   'minecraft:chests/nether_bridge', 2],

  // ═══════ T6 — HIDDEN (3-4 books, 1-2%) ═══════

  ['lore_divinity_1', 'The Philosopher\'s Question', 'Unknown',
   'If you could create anything. Anything at all. Would you? The answer determines whether you deserve the stone. The ice preserves the path. The ancient city holds the door.',
   'minecraft:chests/stronghold_library', 2],

  ['lore_divinity_2', 'On the Mass Accumulate', 'Redacted',
   'Nine hundred and ninety-nine. That is the number. Not because it is magical. Because it is the point where the distinction between creation and destruction becomes meaningless.',
   'minecraft:chests/end_city_treasure', 2],

  ['lore_divinity_3', 'The Homunculus Theory', 'Banned Text',
   'Life from nothing. Not birth. Assembly. The ancient cities froze the research. Literally. In ice. In the deepest chamber. Where no one would look unless they already knew.',
   'minecraft:chests/ancient_city', 1],

  ['lore_divinity_4', 'What Divinity Costs', 'Final Entry',
   'You will pay with something you did not know you had. The frozen archives of the ancient city hold the price list. Read it before you begin. After is too late.',
   'minecraft:chests/bastion_treasure', 1],

  // ═══════ EYE SCROLLS (1 book each, 8-12%) ═══════

  ['lore_eye_black', 'The Desert Inheritance', 'Civilization Record',
   'Lightning strikes the roost. The cockatrice watches the desert. The remnant guards the vault. Three threads that converge on a single eye. The fortress bridges know where the lightning falls.',
   'minecraft:chests/desert_pyramid', 10],

  ['lore_eye_cold', 'The Ice Preservation', 'Frozen Letter',
   'True cold preserves. The igloo keeps the knowledge. The snowy villages keep the practice. What the ice civilization left behind is still frozen. Still waiting. Still cold enough to matter.',
   'minecraft:chests/village/village_taiga_house', 10],

  ['lore_eye_corrupted', 'The Biological Record', 'Lab Notes',
   'Corruption is transformation without consent. The bastion treasuries have the samples. The bastion stores have the documentation. The eye remembers what was changed.',
   'minecraft:chests/nether_bridge', 8],

  ['lore_eye_cryptic', 'The Redacted Text', 'Academy Stamp',
   'The text was redacted by the academy. The bastion bridges have the unredacted copy. The stronghold crossings have the commentary. Read both. The truth is in the gap.',
   'minecraft:chests/stronghold_library', 8],

  ['lore_eye_cursed', 'The Last Eye', 'Warning',
   'The cursed eye was always the last one. The woodland mansions have the warning. The dungeons have the proof. Read the warning first. You will not get a second chance.',
   'minecraft:chests/pillager_outpost', 10],

  ['lore_eye_guardian', 'The Ocean Memory', 'Depth Cartographer',
   'The ruins remember the ocean as it was. The shipwrecks remember the ocean as it is. The guardian eye bridges the two. The big underwater ruins have the depth charts.',
   'minecraft:chests/shipwreck_supply', 10],

  ['lore_eye_lost', 'The Sky Burial', 'Expedition Journal',
   'The jungle temples have fragments. The desert pyramids have context. The lost eye was buried in the sky. By a civilization that believed falling was flying done wrong.',
   'minecraft:chests/village/village_temple', 10],

  ['lore_eye_magical', 'The Still Magic', 'Grimoire Fragment',
   'Magic that was forced to be still. The End cities have the containment vessels. The stronghold libraries have the forcing theory. The eye holds both.',
   'minecraft:chests/ancient_city', 8],

  ['lore_eye_nether', 'The Thermal Record', 'Revenant Study',
   'The Nether bridges document what burns. The ruined portals document what crossed. The nether eye is the thermal record in motion. It never stops burning.',
   'minecraft:chests/bastion_bridge', 10],

  ['lore_eye_old', 'The Oldest Memory', 'Desert Archivist',
   'The desert pyramids hold what is oldest. The mausoleums hold what is most forgotten. The old eye remembers both. Handle it accordingly.',
   'minecraft:chests/jungle_temple', 10],

  ['lore_eye_rogue', 'The Misapplied Order', 'Engineer\'s Regret',
   'It is order that has been misapplied. The abandoned mineshafts have the engineering failures. The toxic ruins have the chemical accidents. The rogue eye is both.',
   'minecraft:chests/simple_dungeon', 10],

  ['lore_eye_wither', 'The Crossed Dimensions', 'Nether Historian',
   'The wither eye crossed every dimension the wither crossed. The bastion stores have the transit records. The fortress bridges have the dimensional logs.',
   'minecraft:chests/bastion_bridge', 10],

  // ═══════ VANILLA SKILL SCROLLS (1 book each, 15%) ═══════

  ['lore_metalworking', 'On the Shaping of Iron', 'Forge Apprentice',
   'I used to think picking up a pickaxe was the skill. Then I tried to *make* one. The smiths who built the old tool-benches left their notes behind them. You do not find these in the mines. You find them where the smiths worked \u2014 the weapon-benches, the tool-benches, the armor stands. Read before you forge. Forge before you fight.',
   'minecraft:chests/abandoned_mineshaft', 15],

  ['lore_leatherworking', 'On the Patience of Hide', 'Tanner\'s Record',
   'My journal binding is leather. I did not make it. Someone did, and their practice is older than any of us. The tanners left records with the butchers. The bookbinders left records with the scribes. Leather is patience \u2014 scraping, soaking, working it soft. Find the practitioners\' benches. Find the books that taught them.',
   'minecraft:chests/village/village_butcher', 15],

  ['lore_glassworking', 'On Sand and Color', 'Glassblower\'s Journal',
   'I preserve in glass because clay breathes and metal taints. The practitioners who colored glass \u2014 stained, tinted, shaped into panes \u2014 left their methods in the places where glass was rare enough to matter. The desert, where sand is everywhere. The witch hut, where the brew demanded precision. The library, where they copied the formulas.',
   'minecraft:chests/village/village_plains_house', 15],

  ['lore_stoneworking', 'On Precise Stone', 'Mason\'s Ledger',
   'A wall is stacking. Stonework is *shaping*. The masons knew the difference. I did not, until year four, when I tried to build a gatehouse and realized every block I had cut was the wrong size. The masons\' records are in the mason\'s bench. The old ones are in the pyramids. The older ones are in the strongholds. The practice is not guesswork. Read the scroll.',
   'minecraft:chests/village/village_mason', 15],

  ['lore_alchemy', 'On the Witch\'s Patience', 'Witch-Hut Fragment',
   'The witches did not invent brewing. They preserved it when the nine lost it. Their huts are small for a reason \u2014 the work is private. The scroll moves between three places: the hut itself, the libraries that copied it, the igloos where the cold kept the notes from burning. I have not written what I know. Some patience is not mine to share.',
   'minecraft:chests/stronghold_library', 15],

  ['lore_redstone_principles', 'Mechanism Works. Watch.', 'Redstone Tinkerer',
   'Stepped on plate. Gate opened. Stepped off. Gate closed. Someone wrote this down. Find where. The mineshafts have the old wiring. The jungle temple tests itself. The toolsmith kept the diagrams. Do not touch the piston until you have read the scroll.',
   'minecraft:chests/jungle_temple', 15],

  // New scrolls (added 2026-05-15)

  ['lore_woodworking', 'How to Read a Log', 'A Carpenter\'s Grandchild',
   'My grandfather could read a log the way a scholar reads a page - where it would split, where it would hold, what it wanted to become. He kept his joinery notes in a carpenter cabin out past the savanna houses. A plank is only a beginning. The rest must be taught.',
   'minecraft:chests/village/village_savanna_house', 16],

  ['lore_magnetic_deep', 'The Compass That Would Not Choose', 'A Deep Miner',
   'My compass died the moment I crossed the iron line. Not broken - the needle simply spun, as if the stone below had given it too many norths at once. The deep miners called that cavern the pulling-place, and left their findings in its ruins, among ore that floats free of the floor. Follow the compass that cannot point.',
   'minecraft:chests/abandoned_mineshaft', 10],

  ['lore_primordial_strata', 'Below the Counted Years', 'A Lost Surveyor',
   'There is a layer of the world older than the gods who counted the years. Fern that has no business living. Bone that once walked. The surveyors who mapped it filed their notes in the deepest ruins, beside the amber - and then the strata kept them too. Dig past where the stone turns ancient.',
   'minecraft:chests/simple_dungeon', 10],

  ['lore_blighted_hollows', 'Do Not Drink the Green', 'Fragment, Water-Stained',
   'Do not drink the green water. Do not breathe the air longer than you must. I lost two of my party before we understood the glow itself was the warning. Whatever the cavern knows is sealed in ruins downwind of everything that will kill you. Go masked, or do not go.',
   'minecraft:chests/abandoned_mineshaft', 8],

  ['lore_forlorn_hollows', 'The Dark That Watches Back', 'A Lantern-Bearer',
   'The dark below is not the absence of light. It watches back. We hung lanterns and they went out one by one, and there was no wind to blame. The hollows keep their knowledge in ruins of black thornwood. Carry more light than fear tells you to.',
   'minecraft:chests/simple_dungeon', 8],

  ['lore_abyssal_chasm', 'The Sea Found a Way Down', 'Recovered from a Wreck',
   'The sea found a way underground. There is a chasm where the water never ends and the only light is the creatures that make it. Divers who reached the drowned ruins came back quiet, or did not come back at all. Their charts still wash up where ships have died.',
   'minecraft:chests/shipwreck_treasure', 8],

  ['lore_sugarstone_caverns', 'I Tasted the Wall', 'An Astonished Miner',
   'I did not believe the miner until I tasted the wall. A whole cavern of it - chocolate set hard as bedrock, blooms of gumdrop, a river running sweet. Everything there can be eaten and almost nothing there is safe. What the place knows is kept in the bright ruined town beneath it.',
   'minecraft:chests/simple_dungeon', 10],

  ['lore_runesmithing', 'The Blade Is Only the Question', 'A Fort Quartermaster',
   'A blade is only the question. The old smiths of the deep forts never merely sharpened steel - they taught it, setting gem and rune into the metal until the weapon answered back. Their tablets are filed where soldiers file everything: in the keep, past the bridge, with the quartermaster stores.',
   'minecraft:chests/nether_bridge', 8],
]

// ─── INJECT LORE BOOKS INTO LOOT TABLES ─────────────────────

ServerEvents.genericLootTables(function(event) {
  for (var i = 0; i < LORE_BOOKS.length; i++) {
    var loreId    = LORE_BOOKS[i][0]
    var title     = LORE_BOOKS[i][1]
    var author    = LORE_BOOKS[i][2]
    var pageText  = LORE_BOOKS[i][3]
    var lootTable = LORE_BOOKS[i][4]
    var pct       = LORE_BOOKS[i][5]

    // Build the written_book NBT
    // Page text needs to be a JSON text component string inside the pages list
    var nbtTag = '{title:"' + title.replace(/"/g, '\\"') + '",'
               + 'author:"' + author.replace(/"/g, '\\"') + '",'
               + 'pages:[\'{"text":"' + pageText.replace(/"/g, '\\"').replace(/'/g, "\\'").replace(/\n/g, '\\n') + '"}\'],'
               + 'resolved:1b,'
               + 'sinborn_lore_id:"' + loreId + '"}'

    // Build the book item with NBT
    var bookItem = Item.of('minecraft:written_book', nbtTag)

    // Use an IIFE to capture loop variables for the closure
    ;(function(table, item, weight) {
      event.modify(table, function(loot) {
        loot.addPool(function(pool) {
          pool.rolls = 1
          pool.addItem(item, weight)
          pool.addEmpty(100 - weight)
        })
      })
    })(lootTable, bookItem, pct)
  }

  console.info('[Sinborn] Injected ' + LORE_BOOKS.length + ' lore book entries across chest tables')
})
