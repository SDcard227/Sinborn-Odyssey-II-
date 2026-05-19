# Sinborn Odyssey 2 — Changelog

> Versioning realigned to the Modrinth line (1.4.x). The earlier 4.0.x numbers
> below are retired — 1.4.3 onward is the current sequence.

## v1.4.5 (2026-05-18) — Server Setup Hotfix

- **Simply Bows + Simply Tooltips removed; Obscure Tooltips restored.** Simply Bows hard-depends on Simply Tooltips, which is client-only — so fresh dedicated-server installs kept crashing with "simplytooltips not installed." Cutting the pair removes the dependency conflict at the root. Obscure Tooltips (the pack's original tooltip mod) + Fragmentum are back. This permanently retires the 1.4.4 server-side workaround.
- **Pre-tuned `server.properties` now ships with the pack** — fresh dedicated-server installs auto-get `view-distance=8 / simulation-distance=6`. No manual server config needed.
- Fixes the dedicated-server join-timeout: the `10/10` default was too heavy for a 400-mod pack, so players got "Timed Out" during worldgen on join.
- Result: the pack now installs and runs server-side with zero manual file-shuffling.
- **Scroll system polish:** locked items now show a lock-icon overlay in JEI; fixed 2 stale mod-gates (`antique_atlas`, dead `divine` namespace) and created 11 missing age-milestone scrolls so every chapter-gate quest resolves cleanly.

## v1.4.4 (2026-05-16) — Server-Compatibility Hotfix

- **Fixed dedicated-server boot crash.** Simply Bows mandatorily depends on Simply Tooltips, but 1.4.3 flagged Simply Tooltips client-only — fresh server installs crashed with "simplytooltips not installed." Now marked server-required.
- No content changes from 1.4.3.

## v1.4.3 (2026-05-15) — The Discovery Update

The biggest progression overhaul the pack has had — a full crafting-as-discovery rework.

### Scroll system
- **238 research scrolls** now gate the pack — research the knowledge to craft.
- **9 new scrolls** — 6 Alex's Caves biome scrolls (Magnetic Deep, Primordial Strata, Blighted Hollows, Forlorn Hollows, Abyssal Chasm, Sugarstone Caverns), Woodworking, Alchemy, Runesmithing.
- 293 weapons sorted into tiered arsenal scrolls (iron / master / legendary).

### Content
- **The Scattered Archive** — 55+ collectible history folios (chest loot + boss drops) + 85 cryptic lore-hint books.
- 658 Heracles quests — every scroll has a discovery quest.
- Tooltip overhaul — Simply Tooltips made pack-wide; Obscure Tooltips + Fragmentum removed.

### Fixes
- Cold Sweat worldgen deadlock fixed (Cold Sweat → 2.4, fiahi → 3.1.6).
- Scroll sync-packet overflow fixed — no more "Invalid player data" disconnects.

### New mods
- Realm RPG: Treasure Balloons, Simply Bows, Simply Tooltips.

## v4.0.5 (2026-04-26) — Hotfix

Status Effect Bars Reforged side-flag fix.

- **Fixed:** `mismatched mod channel list` disconnect on server connect — Status Effect Bars Reforged was flagged client-only but registers a network channel. Now correctly bundled both-side.

## v4.0 (2026-04-26)

Major release. Covers everything since v1.3.9.

### New Mods
- Trotting Wagons (rideable wagons; gated to The Long Road scroll)
- Gallant Gauntlets (via Sinytra Connector; gated to Warrior's Codex)
- Status Effect Bars Reforged
- Subtle Effects (restored — earlier crashes traced to ModernFix mixin conflict, not the mod)

### Removed
- Wizard's Delight (server crashed on plant-food consumption)
- Subtle Effects (later restored — see above)
- Gobber 2 + Gobber Delight (design call)
- mcqoy (stale crash source)

### Server Stability
- Flagged client-only: ETF, EMF, Particle Rain, Shoulder Surfing
- Iron's Spells: added missing `irons_lib` dependency
- Reverted 11 mods from accidental client-only flags after network channel mismatch
- Distant Horizons: kept on but generation disabled to prevent multi-dim server hang at 9% spawn prep
- Disabled `mixin.perf.forge_registry_lambda` in ModernFix to fix Subtle Effects deferred registry conflict

### World Generation
- RoadWeaver reset to defaults — natural dirt-path roads connecting villages
- Structurify global spacing 1.5 → 0.7 (denser civilizations)
- Luki's Grand Capitals tagged as `#minecraft:village` (recognized by RoadWeaver/atlas/maps)
- Mowzie's Elokosa monkeys spawn in modded jungles (`forge:is_jungle` added)

### Survival
- Cold Sweat × Desertification fix — desert biomes now properly cool you in water (-80 / -75 / -85 waterTemp)
- Diet `deathPenaltyLoss` 100 → 50 (full reset → half reset on death)

### Eye / End Remastered
- Rogue Eye recipe redesigned — both `fragment_of_death` AND `fragment_of_rebirth` required
- Black Eye recipe redesigned — cross layout, no swappables
- All 29 eye items locked behind The Rotational Codex

### UI / QoL
- Stylish Effects → right side, INVENTORY_COMPACT renderer
- JEI ingredient grid → 10 columns
- 253 keybinds bundled in options.txt

### Known Risks
- Gauntlets is Fabric via Sinytra Connector — untested on dedicated servers. Delete `gauntlets-1.0.0.jar` from server mods if it crashes; singleplayer keeps it.
- Antique Atlas marker placement bug shelved (Surveyor API mismatch on the only patched version) — atlas viewing/exploration still works.

## v1.0.2 (2026-02-15)

Initial public beta.
