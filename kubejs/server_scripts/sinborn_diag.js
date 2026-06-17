// sinborn_diag.js  ,  TEMPORARY diagnostic (remove after use)
// Dumps the pack's runtime registry truth so we can close the WorldScan
// open questions: does Naturalist/ptd/lendersdelight ship, do Trial Chambers
// or key structures register, and is the sinborn:scrolls/* advancement set
// actually deployed (the P0 fix validator).
//
// HOW TO RUN: fully reload the world (exit to title + re-enter) OR /reload,
// then run  /sindiag  in chat as an operator. Output goes to chat AND to
// logs/latest.log + .minecraft/kubejs logs. Copy the [SINDIAG] lines back.

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  event.register(
    Commands.literal('sindiag')
      .requires(s => s.hasPermission(2))
      .executes(ctx => { runDiag(ctx.source); return 1 })
  )
})

function runDiag(src) {
  let Component, RL, BIR, Registries
  try { Component = Java.loadClass('net.minecraft.network.chat.Component') } catch (e) {}
  try { RL = Java.loadClass('net.minecraft.resources.ResourceLocation') } catch (e) {}
  try { BIR = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries') } catch (e) {}
  try { Registries = Java.loadClass('net.minecraft.core.registries.Registries') } catch (e) {}

  const out = (msg) => {
    console.info('[SINDIAG] ' + msg)
    try { src.sendSystemMessage(Component.literal('[SINDIAG] ' + msg)) } catch (e) {}
  }
  const rl = (id) => { try { return RL.tryParse(id) } catch (e) { return null } }
  const yn = (b) => (b ? '[Y]' : '[n]')

  let server = null
  try { server = src.getServer() } catch (e) {}

  out('===== SINBORN DIAGNOSTIC START =====')

  // 1) KEY MODS LOADED  ,  answers Naturalist / ptd / lendersdelight / traveloptics
  out('-- MODS --')
  const mods = ['naturalist','ptd','lendersdelight','ends_delight','traveloptics',
    'iceandfire','cataclysm','simplycataclysm','alexscaves','alexsmobs','mowziesmobs',
    'dungeons_and_combat','celestisynth','endrem','end_remastered','goldcrownissb',
    'terralith','aquamirae','historystages','heracles','fieldguide']
  mods.forEach(m => { try { out('  ' + yn(Platform.isModLoaded(m)) + ' ' + m) } catch (e) { out('  [?] ' + m + ' (check failed)') } })
  try { out('  total mods loaded: ' + Platform.getMods().length) } catch (e) {}

  // 2) ENTITY TYPES REGISTERED  ,  confirms the uncertain entities exist
  out('-- ENTITIES --')
  const ents = ['iceandfire:dread_queen','iceandfire:myrmex_queen','traveloptics:the_nightwarden',
    'naturalist:lion','naturalist:elephant','naturalist:rhino','cataclysm:the_harbinger',
    'cataclysm:netherite_monstrosity','alexsmobs:void_worm']
  ents.forEach(id => { try { out('  ' + yn(BIR.ENTITY_TYPE.containsKey(rl(id))) + ' ' + id) } catch (e) { out('  [?] ' + id) } })
  try { out('  total entity types: ' + BIR.ENTITY_TYPE.size()) } catch (e) {}

  // 3) ITEMS REGISTERED  ,  confirms Vessel + meat items exist
  out('-- ITEMS --')
  const items = ['ptd:philosopher_stone','goldcrownissb:gold_crown','celestisynth:keres',
    'lendersdelight:maledictus_heart','lendersdelight:leviathan','ends_delight:raw_dragon_meat',
    'cataclysm:amethyst_crab_meat']
  items.forEach(id => { try { out('  ' + yn(BIR.ITEM.containsKey(rl(id))) + ' ' + id) } catch (e) { out('  [?] ' + id) } })

  // 4) STRUCTURES REGISTERED  ,  Trial Chambers (expect absent in 1.20.1) + key seals
  out('-- STRUCTURES --')
  try {
    const sreg = server.registryAccess().registryOrThrow(Registries.STRUCTURE)
    const structs = ['minecraft:trial_chambers','minecraft:ancient_city','cataclysm:cursed_pyramid',
      'cataclysm:frosted_prison','aquamirae:ship_graveyard','dungeons_and_combat:pantheon_of_sunleia']
    structs.forEach(id => { try { out('  ' + yn(sreg.containsKey(rl(id))) + ' ' + id) } catch (e) { out('  [?] ' + id) } })
    out('  total structures registered: ' + sreg.size())
  } catch (e) { out('  STRUCTURE registry read failed: ' + e) }

  // 5) THE P0 VALIDATOR  ,  are the sinborn:scrolls/* + combat advancements deployed?
  out('-- ADVANCEMENTS (P0 deploy check) --')
  try {
    const advMgr = server.getAdvancements()
    const advs = ['sinborn:scrolls/eye_black_studied','sinborn:scrolls/return_dominion_studied',
      'sinborn:scrolls/wizards_feast','sinborn:combat/kill_the_harbinger',
      'sinborn:combat/kill_ender_dragon','sinborn:archive/shelf5_complete']
    advs.forEach(id => {
      let exists = false
      try { exists = (advMgr.getAdvancement(rl(id)) != null) } catch (e) {}
      out('  ' + yn(exists) + ' ' + id)
    })
    try { out('  total advancements loaded: ' + advMgr.getAllAdvancements().size()) } catch (e) {}
  } catch (e) { out('  ADVANCEMENT read failed: ' + e) }

  // 6) COUNTS
  out('-- COUNTS --')
  try { out('  recipes: ' + server.getRecipeManager().getRecipes().size()) } catch (e) {}

  out('===== SINBORN DIAGNOSTIC END =====')
}
