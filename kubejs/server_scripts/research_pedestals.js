// ============================================================
// SINBORN ODYSSEY 2 , Research Pedestal recipes (Tier I to IV)
// 13 Nov 2026. HistoryStages ships no pedestal recipes. Crafting them is gated by
// The Scrollwright Tradition (the historystages mod gate). Higher tiers research
// higher scrolls: T4 scrolls need Tier II, T5 need Tier III, T6 need Tier IV.
// ============================================================
ServerEvents.recipes(function (event) {
  // 16 Nov 2026: Tier I + II recipes use only Survivor's Codex + Stoneworking items.
  // The old ones needed gold, a lectern, iron, amethyst and a bookshelf, all behind Tier II scrolls.
  event.shaped('historystages:research_pedestal', ['FBF', 'SKS', 'SSS'], {
    F: 'minecraft:feather', B: 'minecraft:writable_book', S: 'minecraft:smooth_stone', K: 'minecraft:book'
  }).id('sinborn:research_pedestal_tier_1')
  event.shaped('historystages:research_pedestal_tier_2', ['FBF', 'CPC', 'SSS'], {
    F: 'minecraft:flint', B: 'minecraft:book', C: 'minecraft:chiseled_stone_bricks', S: 'minecraft:stone_bricks', P: 'historystages:research_pedestal'
  }).id('sinborn:research_pedestal_tier_2')
  event.shaped('historystages:research_pedestal_tier_3', ['DBD', 'GPG', 'OOO'], {
    D: 'minecraft:diamond', B: 'minecraft:chiseled_bookshelf', G: 'minecraft:gold_block', P: 'historystages:research_pedestal_tier_2', O: 'minecraft:obsidian'
  }).id('sinborn:research_pedestal_tier_3')
  event.shaped('historystages:research_pedestal_tier_4', ['NEN', 'CPC', 'OOO'], {
    N: 'minecraft:netherite_ingot', E: 'minecraft:nether_star', C: 'minecraft:crying_obsidian', P: 'historystages:research_pedestal_tier_3', O: 'minecraft:obsidian'
  }).id('sinborn:research_pedestal_tier_4')
})
