// ============================================================
// SINBORN ODYSSEY 2 — Nether Sealing Anchor enforcement
//
// The Nether Portal Spread mod (config: netherportalspread.json5)
// counts Respawn Anchors as prevent-spread blocks but cannot filter
// by charge state. This script enforces: only FULLY-LIT (4-charge)
// Respawn Anchors are accepted as Sealing perimeter.
//
// Mechanic: when a Respawn Anchor is placed within 64 blocks of a
// Nether Portal, the player has 5 minutes to charge it fully. If the
// anchor remains under 4 charges after the grace period, it is broken
// and dropped as an item — the corruption does not recognize an empty
// light.
//
// Lore: the seal-lights of the Sealing era. An empty anchor is just a
// hole; a fully lit anchor is bound territory the corrupted Nether-
// energy cannot cross. The Sinborn must light the perimeter, not just
// place it.
// ============================================================

const PORTAL_RADIUS = 64    // matches mod's portalSpreadRadius
const VERTICAL_SCAN = 32
const SCAN_STEP = 4
const GRACE_TICKS = 6000    // 5 minutes to fully charge

BlockEvents.placed('minecraft:respawn_anchor', event => {
  const block = event.block
  const player = event.player
  const level = event.level
  if (!level || !block) return

  const px = block.x
  const py = block.y
  const pz = block.z

  // Scan for nearby nether portal
  let nearPortal = false
  scan:
  for (let dx = -PORTAL_RADIUS; dx <= PORTAL_RADIUS; dx += SCAN_STEP) {
    for (let dy = -VERTICAL_SCAN; dy <= VERTICAL_SCAN; dy += SCAN_STEP) {
      for (let dz = -PORTAL_RADIUS; dz <= PORTAL_RADIUS; dz += SCAN_STEP) {
        if (level.getBlock(px + dx, py + dy, pz + dz).id === 'minecraft:nether_portal') {
          nearPortal = true
          break scan
        }
      }
    }
  }

  if (!nearPortal) return

  if (player) {
    player.tell('§e[Sealing] §7You feel a corrupted energy near this Anchor. §lCharge it fully — 4 glowstone within 5 minutes§r §7— or the seal will reject it.')
  }

  // Re-check after grace period
  level.server.scheduleInTicks(GRACE_TICKS, () => {
    const check = level.getBlock(px, py, pz)
    if (check.id !== 'minecraft:respawn_anchor') return // already removed or replaced

    let charges = 0
    try {
      const c = check.properties.get('charges')
      charges = c ? parseInt(c) : 0
    } catch (e) {
      charges = 0
    }

    if (charges < 4) {
      check.popItem(Item.of('minecraft:respawn_anchor'))
      check.set('minecraft:air')
      if (player && player.online) {
        player.tell('§c[Sealing] §7An Anchor fell. The seal does not recognize an empty light.')
      }
    } else {
      if (player && player.online) {
        player.tell('§a[Sealing] §7The seal accepts this Anchor. Light 3 more like it within the perimeter to bind the spread.')
      }
    }
  })
})
