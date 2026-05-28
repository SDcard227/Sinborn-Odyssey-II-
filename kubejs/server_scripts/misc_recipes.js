// ============================================================
// SINBORN ODYSSEY 2 — Miscellaneous Crafting Recipes
// ============================================================

ServerEvents.recipes(event => {

  // ─── COMMAND BLOCK ───────────────────────────────────────
  // 8 netherite blocks surrounding a nether star.
  // Nuclear-age-tier cost — this should never be easy.
  //   N  N  N
  //   N  S  N
  //   N  N  N
  event.shaped('minecraft:command_block', [
    'NNN',
    'NSN',
    'NNN'
  ], {
    N: 'minecraft:netherite_block',
    S: 'minecraft:nether_star'
  })

  // ─── HERACLES QUEST BOOK ─────────────────────────────────
  // Emerald above a book — knowledge has a cost.
  //   _  E  _
  //   _  B  _
  //   _  _  _
  event.shaped('heracles:quest_book', [
    ' E ',
    ' B ',
    '   '
  ], {
    E: 'minecraft:emerald',
    B: 'minecraft:book'
  })

  // ─── SOPHISTICATED BACKPACK — pre-colored ────────────────
  // Crafted backpacks come out in a sharp gunmetal two-tone
  // instead of bland default brown. The tier upgrades
  // (copper → iron → gold → diamond → netherite) all preserve
  // backpack NBT, so the color carries the whole way up — only
  // the basic recipe needs changing.
  event.remove({ id: 'sophisticatedbackpacks:backpack' })
  event.shaped(
    Item.of('sophisticatedbackpacks:backpack').withNBT({
      main_color: 2960690,   // 0x2D2D32 — dark gunmetal body
      accent_color: 4408131  // 0x434343 — lighter gray trim
    }), [
      'SLS',
      'SCS',
      'LLL'
    ], {
      S: '#forge:string',
      L: '#forge:leather',
      C: '#forge:chests/wooden'
    }
  )

})
