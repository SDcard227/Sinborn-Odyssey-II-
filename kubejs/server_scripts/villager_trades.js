// ============================================================
// SINBORN ODYSSEY 2 — Villager Trades: Emerald → Numismatic Cog
//
// Replaces emeralds with cogs in all villager trade offers
// when they generate. Works with both vanilla and MCA villagers.
//
// Uses MoreJS UpdateVillagerOffers event to swap at offer time.
// ============================================================

var OfferModification = Java.loadClass('com.almostreliable.morejs.features.villager.OfferModification')

// When a villager generates new trade offers, swap emeralds for cogs
MoreJSEvents.updateVillagerOffers(function(event) {
  var addedOffers = event.getAddedOffers()
  for (var i = 0; i < addedOffers.size(); i++) {
    var offer = new OfferModification(addedOffers.get(i))

    var input1 = offer.getFirstInput()
    if (input1 && ('' + input1.id) === 'minecraft:emerald') {
      offer.setFirstInput(Item.of('numismatics:cog', input1.count))
    }

    var input2 = offer.getSecondInput()
    if (input2 && !input2.isEmpty() && ('' + input2.id) === 'minecraft:emerald') {
      offer.setSecondInput(Item.of('numismatics:cog', input2.count))
    }

    var output = offer.getOutput()
    if (output && ('' + output.id) === 'minecraft:emerald') {
      offer.setOutput(Item.of('numismatics:cog', output.count))
    }
  }
})

// Also swap for wandering traders
MoreJSEvents.updateWandererOffers(function(event) {
  var addedOffers = event.getAddedOffers()
  for (var i = 0; i < addedOffers.size(); i++) {
    var offer = new OfferModification(addedOffers.get(i))

    var input1 = offer.getFirstInput()
    if (input1 && ('' + input1.id) === 'minecraft:emerald') {
      offer.setFirstInput(Item.of('numismatics:cog', input1.count))
    }

    var input2 = offer.getSecondInput()
    if (input2 && !input2.isEmpty() && ('' + input2.id) === 'minecraft:emerald') {
      offer.setSecondInput(Item.of('numismatics:cog', input2.count))
    }

    var output = offer.getOutput()
    if (output && ('' + output.id) === 'minecraft:emerald') {
      offer.setOutput(Item.of('numismatics:cog', output.count))
    }
  }
})
