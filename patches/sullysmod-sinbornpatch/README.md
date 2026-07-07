# sullysmod-sinbornpatch (LGPL-3.0 compliance source)

Sinborn Odyssey II bundles `sullysmod-3.2.1-beta-sinbornpatch.jar`, a repackaged build of
[Sully's Mod 3.2.1-beta](https://modrinth.com/mod/sullysmod) (by Uraneptus and contributors,
licensed **LGPL-3.0-only**).

## The complete modification

Exactly ONE file differs from the official `sullysmod-3.2.1-beta-all.jar`: `sullysmod.mixins.json`.
The `MonsterRoomFeatureMixin` entry is removed to resolve a worldgen conflict inside the modpack
(Sully's monster-room injection clashed with the pack's dungeon/structure stack).

```diff
--- official/sullysmod.mixins.json
+++ sinbornpatch/sullysmod.mixins.json
@@ -5,8 +5,7 @@
   "minVersion": "0.8",
   "refmap": "sullysmod.refmap.json",
   "mixins": [
-    "FlowingFluidMixin",
-    "MonsterRoomFeatureMixin"
+    "FlowingFluidMixin"
   ],
```

No class files, assets, or data were changed (verified by CRC diff of all 1,329 entries; 1 file modified, 0 added, 0 removed).

## Rebuild it yourself

1. Download the official `sullysmod-3.2.1-beta-all.jar` from Modrinth
2. Open the jar as a zip, edit `sullysmod.mixins.json` per the diff above
3. Re-zip; rename to `sullysmod-3.2.1-beta-sinbornpatch.jar`

## License

The patched jar remains **LGPL-3.0-only**, all upstream notices intact. This document is the
corresponding source disclosure for the modification, published to satisfy LGPL section 4.
All credit for Sully's Mod belongs to its authors.
