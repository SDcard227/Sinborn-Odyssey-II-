// sinborn_itemdump.js  ,  TEMPORARY diagnostic (remove after the gating audit)
// Dumps the REAL runtime item registry so we can find every truly-ungated item
// (the lang-vs-itemmodel blind spot means jar scans miss no-lang items).
//
// HOW TO RUN: boot the world, then as an operator run  /sindump  in chat.
// It writes every registered item id to  kubejs/exported/all_items.txt
// (one id per line). If the file write fails it logs each id with the
// [SINDUMP_ITEM] prefix to logs/latest.log instead.

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event
  event.register(
    Commands.literal('sindump')
      .requires(s => s.hasPermission(2))
      .executes(ctx => { dumpItems(ctx.source); return 1 })
  )
})

function dumpItems(src) {
  const BIR = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
  let Component
  try { Component = Java.loadClass('net.minecraft.network.chat.Component') } catch (e) {}
  const say = (m) => {
    console.info('[SINDUMP] ' + m)
    try { src.sendSystemMessage(Component.literal('[SINDUMP] ' + m)) } catch (e) {}
  }

  let ids = []
  try {
    BIR.ITEM.keySet().forEach(rl => ids.push(rl.toString()))
  } catch (e) {
    say('registry read FAILED: ' + e)
    return
  }
  ids.sort()

  try {
    const Files = Java.loadClass('java.nio.file.Files')
    const Paths = Java.loadClass('java.nio.file.Paths')
    const ArrayList = Java.loadClass('java.util.ArrayList')
    let list = new ArrayList()
    ids.forEach(s => list.add(s))
    let path = Paths.get('kubejs', 'exported', 'all_items.txt')
    Files.createDirectories(path.getParent())
    Files.write(path, list)
    say('wrote ' + ids.length + ' item ids -> kubejs/exported/all_items.txt')
  } catch (e) {
    say('file write FAILED (' + e + '); dumping ' + ids.length + ' ids to latest.log:')
    ids.forEach(s => console.info('[SINDUMP_ITEM] ' + s))
  }
}
