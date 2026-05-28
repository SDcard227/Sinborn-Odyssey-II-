// ============================================================
// SINBORN ODYSSEY 2 — Combat Log Kill Tracker
//
// Grants sinborn:combat/kill_<name> advancement when a player
// kills a specific boss or creature.
//
// These advancements are consumed by The Hunt questbook tab
// (sinborn:combat_log) to track boss kills.
//
// NOTE: Entity IDs marked VERIFY should be confirmed in-game
//       via F3 or /entityType if quests are not completing.
// ============================================================

const COMBAT_KILLS = {
  // ─── Vanilla ───────────────────────────────────────────────
  'minecraft:elder_guardian':              'elder_guardian',
  'minecraft:wither':                      'wither',
  'minecraft:ender_dragon':                'ender_dragon',

  // ─── Ice and Fire ──────────────────────────────────────────
  'iceandfire:cockatrice':                 'cockatrice',
  'iceandfire:death_worm':                 'death_worm',
  'iceandfire:troll':                      'troll',
  'iceandfire:gorgon':                     'gorgon',
  'iceandfire:cyclops':                    'cyclops',
  'iceandfire:fire_dragon':                'fire_dragon',
  'iceandfire:ice_dragon':                 'ice_dragon',
  'iceandfire:lightning_dragon':           'lightning_dragon',
  'iceandfire:hippogryph':                 'hippogryph',
  'iceandfire:sea_serpent':                'sea_serpent',
  'iceandfire:stymphalian_bird':           'stymphalian_bird',
  'iceandfire:myrmex_queen':               'myrmex_queen',
  'iceandfire:siren':                      'siren',

  // ─── Mowzie's Mobs ─────────────────────────────────────────
  'mowziesmobs:ferrous_wroughtnaut':       'wroughtnaut',
  'mowziesmobs:frostmaw':                  'frostmaw',
  'mowziesmobs:barako':                    'barako',
  'mowziesmobs:umvuthana':                 'umvuthana',
  'mowziesmobs:grottol':                   'grottol',

  // ─── L_Ender's Cataclysm ───────────────────────────────────
  'cataclysm:ancient_remnant':             'ancient_remnant',
  'cataclysm:harbinger':                   'harbinger',
  'cataclysm:ignis':                       'ignis',
  'cataclysm:maledictus':                  'maledictus',
  'cataclysm:the_leviathan':               'leviathan',
  'cataclysm:ender_guardian':              'ender_guardian_cat',
  'cataclysm:netherite_monstrosity':       'netherite_monstrosity',
  'cataclysm:frostmaw':                    'cataclysm_frostmaw',

  // ─── Aquamirae ─────────────────────────────────────────────
  'aquamirae:abyssal_eel':                 'abyssal_eel',
  'aquamirae:captain_poison':              'captain_cornelia',
  'aquamirae:drowned_captain':             'captain_cornelia',
  'aquamirae:of_the_deep':                 'of_the_deep',

  // ─── Call of Yucatan ───────────────────────────────────────
  'call_of_yucutan:kukulkan':              'kukulkan',

  // ─── Dungeon Now Loading ───────────────────────────────────
  'dungeonnowloading:chaos_spawner':       'chaos_spawner',
  'dungeonnowloading:fairkeeper_ouros':    'ouros',
  'dungeonnowloading:fairkeeper_boros':    'boros',

  // ─── Alex's Caves ──────────────────────────────────────────
  // nucleeper is alexscaves:nucleeper (Toxic Caves) — NOT dungeonnowloading
  'alexscaves:nucleeper':                  'nucleeper',

  // ─── Alex's Mobs ───────────────────────────────────────────
  // NOTE: plague_doctor / plague_spreader do NOT exist in Alex's Mobs.
  //       hemolymph_sac drops from warped_mosco only.
  'alexsmobs:warped_mosco':                'warped_mosco',

  // ─── Wither Reincarnated ───────────────────────────────────
  // Wither Reincarnated enhances minecraft:wither directly — no separate entity ID.

  // ─── Wither Storm ──────────────────────────────────────────
  'witherstormmod:wither_storm':           'wither_storm',

  // ─── Scarlet King ──────────────────────────────────────────
  'scarlet_king:manifestor':               'manifestor',
  'scarlet_king:scarlet_king':             'manifestor',
}

EntityEvents.death(event => {
  const entity = event.entity
  const source  = event.source
  if (!source) return
  const player = source.player
  if (!player) return

  const killId = COMBAT_KILLS[entity.type]
  if (!killId) return

  player.server.runCommandSilent(
    `advancement grant ${player.username} only sinborn:combat/kill_${killId}`
  )
})
