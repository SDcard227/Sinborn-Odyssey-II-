// ============================================================
// Sinborn Odyssey 2 — force-enable clouds on world join
//
// Workaround for Better Clouds 1.3.37 + DistantHorizons 2.4.5:
//   Better Clouds aborts init at boot ("DistantHorizons version
//   not compatible"). Clouds gone from screen until player
//   manually toggles Options → Video → Clouds. This script
//   automates that toggle on world join.
// ============================================================

ClientEvents.loggedIn(function (event) {
  Client.scheduleInTicks(60, function () {
    try {
      var Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
      var CloudStatus = Java.loadClass('net.minecraft.client.CloudStatus')
      var mc1 = Minecraft.getInstance()
      var savedState = mc1.options.cloudStatus().get()

      mc1.options.cloudStatus().set(CloudStatus.OFF)

      Client.scheduleInTicks(2, function () {
        try {
          var MC2 = Java.loadClass('net.minecraft.client.Minecraft')
          var CS2 = Java.loadClass('net.minecraft.client.CloudStatus')
          var mc2 = MC2.getInstance()
          var restoreTo = (savedState == CS2.OFF) ? CS2.FANCY : savedState
          mc2.options.cloudStatus().set(restoreTo)
          console.info('[Sinborn] Clouds re-toggled (Better Clouds workaround)')
        } catch (innerErr) {
          console.info('[Sinborn] inner toggle error: ' + innerErr)
        }
      })
    } catch (outerErr) {
      console.info('[Sinborn] outer cloud setup error: ' + outerErr)
    }
  })
})
