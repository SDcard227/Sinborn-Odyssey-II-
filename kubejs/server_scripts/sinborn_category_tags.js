// ============================================================
// SINBORN ODYSSEY 2 — Dynamic category tags for HistoryStages
//
// Some mods (Immersive Weathering) register items dynamically
// per wood-type (palm_bark, etc.) with no static model/lang, so
// they can't be listed by id in a scroll's items array. We build
// item tags by regex here and gate the TAG in the scroll instead,
// which covers every current + future variant automatically.
//   sinborn:barks       -> gated by Survivor Codex
//   sinborn:leaf_piles   -> gated by Naturalist Basics
// ============================================================
ServerEvents.tags('item', event => {
  // Immersive Weathering bark (one per loaded wood type)
  event.add('sinborn:barks', /^immersive_weathering:[a-z_]*bark$/)
  // Leaf piles (Immersive Weathering + Verdant, per wood type)
  event.add('sinborn:leaf_piles', /^immersive_weathering:[a-z_]*leaf_pile$/)
  event.add('sinborn:leaf_piles', /^verdant:[a-z_]*leaf_pile$/)
})
