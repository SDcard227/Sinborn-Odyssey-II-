// ============================================================
// SINBORN ODYSSEY 2 — Waterskin quenches thirst (2026-11-14)
// Cold Sweat 2.4.2 only links to Thirst Was Taken 3.0+, and 1.4.0 is the
// newest TWT for 1.20.1, so the built-in compat stays OFF and the starter
// waterskin never filled the thirst bar. This registers the filled
// waterskin as a TWT drink directly through its public API.
// Runs at boot (ServerEvents.loaded) and on every /reload (top level).
// ============================================================
function sinbornWaterskinThirst(where) {
  try {
    var ThirstHelper = Java.loadClass('dev.ghen.thirst.api.ThirstHelper')
    ThirstHelper.addDrink(Item.of('cold_sweat:filled_waterskin').item, 5, 5)
    console.info('[Sinborn] waterskin registered as a Thirst drink (' + where + ')')
  } catch (e) {
    console.error('[Sinborn] waterskin thirst hook failed (' + where + '): ' + e)
  }
}
sinbornWaterskinThirst('script load')
ServerEvents.loaded(function (event) { sinbornWaterskinThirst('server loaded') })
