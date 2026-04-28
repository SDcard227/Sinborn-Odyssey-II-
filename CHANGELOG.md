# Sinborn Odyssey 2 — Changelog

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
