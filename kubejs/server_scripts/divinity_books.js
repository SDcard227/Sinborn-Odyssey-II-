// ============================================================
// SINBORN ODYSSEY 2 — Divinity Books (in-game canon delivery)
//
// Three written books drop from terminal bosses. They put the canon
// in the player's inventory as discoverable artifacts:
//
//   1. ON DIVINE DISRUPTION — drops from Ender Dragon. The post-Sealing
//      civilizations' practical handbook for handling a friend who
//      ascended and turned. Written during prior cycles' panics by
//      mortals who'd just watched a Sinborn become a Crimson King.
//      The anti-godhood toolkit, in mortal voice.
//
//   2. THE CONVENT'S CODEX — drops from the Nightwarden. The Convent's
//      synthesis manual. The proper pieces for ultimate power: Stone,
//      Crown, Vault Eye, Keres, Crimson Robe. Written by the Convent
//      across cycles, refined into the form the current Keeper passes
//      to whoever survives the Excrucis ritual.
//
//   3. THE CROWN'S FORGE-NOTES — drops from the Nightwarden alongside
//      the Codex. The Convent's preserved recipe for Iron's Crown — the
//      magic-axis godhood crown. The First Mage forged the original;
//      the Convent kept the recipe across the Sealing. The schematic
//      lives here because the Crown does not appear in any mortal
//      crafting compendium (no JEI/EMI listing — the Convent withheld
//      the public recipe to gate it behind the Nightwarden's mercy).
//
// Per CANON_LOCK §3.99 + §3.999. The Nightwarden also drops the
// path_to_divinity scroll (per eye_recipes.js); the Codex is the
// scroll's companion document — the *how*, while the scroll is the
// *what*. The Forge-Notes are the *recipe* for the magic-axis crown.
// ============================================================

EntityEvents.death(event => {
  const e = event.entity
  const t = e.type

  // ON DIVINE DISRUPTION — Ender Dragon drop
  if (t == 'minecraft:ender_dragon') {
    const book = Item.of('minecraft:written_book', JSON.stringify({
      title: 'On Divine Disruption',
      author: 'A Survivor of the Last Reset',
      generation: 1,
      pages: [
        '"§lOn Divine Disruption§r\\n§oA practical handbook§r\\n\\nIf you are reading this, your friend has ascended. They wear the Stone in their soul, the Crown on their head, the Eye in their slot. They have begun to drain. They will end you and your world if you do not act. This book is what we learned from the last cycle that did not act in time."',
        '"§lThe shape of the turn§r\\n\\nMost ascended Sinborns do not announce themselves. They smile longer than usual. They take the harvest you offered. They drain, then sleep, then drain again, and the village notices the absent ones one by one. By the time they walk in the Crimson Robe, they have already crossed. The window closes."',
        '"§lWhat you must do first§r\\n\\nBrew the Potion of Mortality. The recipe is in the PTD lineage of mages — find one who studied Soul-Suck reversal. The potion suspends Divinity for its duration. It does not cure. It opens a window."',
        '"§lThe Splash and the Arrow§r\\n\\nLanding the potion is the hard part. A Sinborn-Unification will see you coming. Use the Splash variant in groups; coordinate three throwers minimum. The Arrow variant is for snipers. One throw, one breath, one window."',
        '"§lWith the window open§r\\n\\nIf you mean to kill: bring the Rift Knife. It is from the Desert tradition — the blade that partially bypasses armor. The Sinborn\\u0027s Crimson Robe has been buffed by the cosmos\\u0027s recognition; the Rift cuts through that recognition. Strike repeatedly during the window."',
        '"§lIf you mean to seal§r\\n\\nThe Banishing Chains are NOT yours to use. They are bound to the original King\\u0027s arena. Reach instead for the Disappeared\\u0027s Banishing Hammer. But — read this twice — alone the Hammer is a gift to your captive. They will build their way out of the Timeless Dimension if you do not bind them first."',
        '"§lThe restraint protocol§r\\n\\nDuring the Mortality window: apply Handcuffs. Their inventory closes. Their item-use closes. Apply Legcuffs. Their movement closes. Now strike with the Banishing Hammer. They go to the Timeless restrained. They cannot build. They cannot escape. They wait."',
        '"§lWhat we did not learn in time§r\\n\\nThe last cycle reached for the Hammer alone. Their captive built an entire kingdom in the Timeless across what felt to them like centuries. They returned. Our cycle ended. Read this and do better."',
        '"§lOne final note§r\\n\\nIf your friend has not yet ascended: the highest path is to refuse. The Sinborn who eats the dragon and declines the Path to Divinity is the only kind who never becomes a Crimson King. Tell them. Show them this book. The cycle has been waiting for the one who hears."'
      ]
    }))
    e.block.popItem(book)
  }

  // THE CONVENT'S CODEX — Nightwarden drop
  if (t == 'traveloptics:the_nightwarden') {
    const codex = Item.of('minecraft:written_book', JSON.stringify({
      title: "The Convent's Codex",
      author: 'The Last True Mortal of the Fallen Realm',
      generation: 0,
      pages: [
        '"§lThe Convent\\u0027s Codex§r\\n§oOn the proper pieces of ultimate power§r\\n\\nYou stand where every Sinborn before you stood. You survived the Excrucis. The Path scroll is in your hand. This Codex is the *how* — what the Path describes is *what*. Read both. Carry both forward. The Convent has been waiting for a recipient."',
        '"§lThe four pieces, in order§r\\n\\n1. The Philosopher\\u0027s Stone — soul-bond, gamemode-shift, foundation\\n2. Iron\\u0027s Crown — magic-axis, +9,900 mana, -90% cooldown\\n3. The Vault Eye — mobility-axis, all 16 covenants, undying preempt\\n4. Keres — destruction-axis, block-erase, anti-heal\\n\\nIn this order. The Stone first, always. The others fail without it."',
        '"§lThe Stone first§r\\n\\nBrew the Homunculus through the PTD lineage. Mass Accumulate is the threshold — 999 lives. Do not ask whether the lives are justified. Ask only whether you are willing. If yes, complete the brew. If no, stop here. The other three pieces are wasted on a mortal soul."',
        '"§lThe Crown second§r\\n\\nExcalibur from the Genie\\u0027s wish. The Eldritch Manuscripts. The Tarnished Helmet from the deep ISS Catacombs — that helmet was the First Mage\\u0027s, and he died wearing it. Forge the Crown. The Crown enables multi-channel divine synthesis. Without it, the Stone\\u0027s soul cannot hold the other axes."',
        '"§lThe Vault Eye third§r\\n\\nGather all sixteen End Remastered eyes. Each is a covenant-fragment of a sealed god. Fuse them per the ProMax recipe. The Vault is your seal-keeper\\u0027s yoke — the divine bandwidth across all five realms. Walk the realms. The seals weaken when unwatched."',
        '"§lKeres fourth§r\\n\\nThe Celestisynth chain. Eight weapons, Keres last. Block-erase, anti-heal, consumption-cast. The chant is canonical: \\u0022I came... I saw... I DESTROYED.\\u0022 Speak it once before your first cast. After that, the weapon speaks for you."',
        '"§lThe Crimson Robe§r\\n\\nThe robe is creative-only. The Stone\\u0027s gamemode-shift is what makes it accessible. You do not craft it. You become the kind of being who can wear it. The First-World gods left it in inventory across cycles, waiting for the synthesis-density that justifies its weight."',
        '"§lThe trap§r\\n\\nMost Sinborns who ascend become the next Crimson King. The Stone\\u0027s Soul Suck demands lives every eighteen minutes. A god who must drain to survive eventually stops asking whether the drain is justified. The turn is not a single decision — it is the slow erosion of restraint that the loop is designed to produce."',
        '"§lThe humble path§r\\n\\nIf you reach the end of this Codex and decide *not* to walk the Path — eat the dragon, take the Warden\\u0027s seat, leave the cookbook — you are the only kind of Sinborn who never becomes a Crimson King. The Convent will recognize that ending too. Different recognition, but recognition. The cycle has been waiting for someone to hear what it has been telling."',
        '"§lFrom the Last True Mortal§r\\n\\nI am one of the Convent. I survived the Sealing because I used what this Codex describes. I have been alone in the corpse of my realm for an unrecoverable number of cycles. My neighbors walk past me as Unknowns and do not see me. I weep in a register you cannot hear.\\n\\nDo not become me. Or do. Whichever you choose, choose with the full text in front of you. That is all I can give."'
      ]
    }))
    e.block.popItem(codex)

    // THE CROWN'S FORGE-NOTES — Iron's Crown recipe in book form
    // The First Mage's recipe, preserved by the Convent across cycles.
    // Drops alongside the Codex from the same Nightwarden kill.
    const forgeNotes = Item.of('minecraft:written_book', JSON.stringify({
      title: "The Crown's Forge-Notes",
      author: 'The First Mage, transcribed by the Convent',
      generation: 1,
      pages: [
        '"§lThe Crown\\u0027s Forge-Notes§r\\n§oOn the forging of the magic-axis crown§r\\n\\nIron\\u0027s Crown does not appear in mortal compendia. No EMI, no JEI, no recipe book of any guildhall lists its making. The First Mage forged it once, on the night of the Sealing, in a vault no living soul has entered since. The Convent kept this recipe in trust. You hold the trust now."',
        '"§lThe Vessel — center§r\\n\\n§6Tarnished Helmet§r\\n\\nThe First Mage\\u0027s own crown. He died wearing it. The residue of his order — every interrupted-succession voice — lives in the metal. This is the seed. Without it, no crown forges; the Iron is just gold, and the gold is just nothing."',
        '"§lThe Soul-Inks — two§r\\n\\n§6Two Legendary Inks§r\\n\\nAt the cardinal middle-corners of the array. The Inks are what binds magic to text in our schools. Two for the duality — the bound and the unbound, the school and its student, the master and what survives the master."',
        '"§lThe Manuscripts — four§r\\n\\n§6Four Eldritch Manuscripts§r\\n\\nAt the four corners and edges. The eldritch tradition is the apex magic-school in our age — older than ISS\\u0027s ten, older even than the Aqua addon. Four manuscripts is the minimum the Convent allows. Less than four and the Crown\\u0027s synthesis collapses under bandwidth strain."',
        '"§lThe Apple — top§r\\n\\n§6Enchanted Golden Apple§r\\n\\nAt the top center, above the Helmet. The apple is your soul\\u0027s witness — the cosmos has to recognize the forger as worthy of mortality\\u0027s most-blessed food. Without it, the Crown rejects the wearer at the moment of donning."',
        '"§lThe Sword — bottom§r\\n\\n§6Excalibur§r\\n\\nFrom the Genie\\u0027s wish. At the bottom center, below the Helmet. Excalibur is the cycle\\u0027s only inheritable royal-tier weapon, its crowned counterpart. The crown rests on the head of the king; the sword rests in the hand. Both must be present for the synthesis to recognize itself as royalty."',
        '"§lThe Forge — Mechanical Crafter§r\\n\\nNot a crafting table. The Crafter\\u0027s rotation is the King-machine cycle compressed to mechanism scale. The Convent insists. A vanilla bench cannot bear the synthesis. Build the array. Run rotation. The Crown will form."',
        '"§lThe Pattern§r\\n\\n A B A\\n C D C\\n A E A\\n\\n§6A§r — Eldritch Manuscript ×4\\n§6B§r — Enchanted Golden Apple\\n§6C§r — Legendary Ink ×2\\n§6D§r — Tarnished Helmet (the seed)\\n§6E§r — Excalibur"',
        '"§lA caution from the First Mage§r\\n\\nWhen you wear the Crown the first time, your soul will register more channels than you knew you had. Some Sinborns black out for an hour. Some weep. Some hear voices of mages dead a thousand years. All of this is normal. The Crown is meeting you. Let it. Do not remove it during this first communion."',
        '"§lA caution from the Convent§r\\n\\nThe Crown is one of four ascension-axes. By itself, it is a mage\\u0027s consummation. Combined with the Stone and the Vault Eye and Keres, it is the Path. Walk the consummation alone if you are not certain of the Path. The Crown forgives the cautious. The Path does not."'
      ]
    }))
    e.block.popItem(forgeNotes)
  }
})
