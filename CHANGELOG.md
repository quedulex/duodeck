# Changelog

## 0.1.4 (2026-10-11) — preview

- Keep the memo bearer URL out of Chromium process arguments; launch through a private 0600 bootstrap file inside a 0700 runtime directory.
- Restrict the editor profile and launch lock to their owner, and suppress outgoing URL referrers.
- Add process-argument privacy tests and a Chromium bootstrap-navigation regression. Close existing memo windows before upgrading, then reopen them to use the new launch path.

## 0.1.3 (2026-10-11) — preview

- Restrict local preferences, app activity history, memos and lock files to their owner (directory 0700, files 0600).
- Repair earlier permissions on access without changing saved content; reject symlinked state files.
- Add filesystem regression tests under umask 022, including legacy permission migration.

## 0.1.2 (2026-10-11) — preview

- Correct the marketplace author to `jasoncym` and simplify publication documentation.
- Keep runtime behavior, local data paths and editor assets unchanged.

## 0.1.1 (2026-10-11) — preview

- Split the bundled memo editor into local JavaScript modules below the marketplace's 512 KiB static-scan limit.
- Preserve editor behavior, translations and local storage; ship all assets for offline use.
- Add a reproducible Vite build and a size check; retain the lockfile and dependency notices.

## 0.1.0 (2026-10-11) — preview

- Publish the original Touch Console as DuoDeck (`quedulex.duodeck`).
- Local Milkdown Crepe Markdown memos with colors, archive/restore and export.
- Preserve existing `touch-console` settings and local data paths.

- Native Omarchy service plugin with a touch panel and same-monitor app menu.
- Persistent local recent-app ordering from launches and window activations.
- English, Simplified Chinese and Traditional Chinese translations.
- Icon-only mute, compact media transport, throttled live sliders and power profiles.
- Configurable output, workspaces and backlight devices; optional external spanning adapter.
- Read-only system metrics; no automatic edits to compositor configuration.
