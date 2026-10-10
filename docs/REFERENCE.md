# DuoDeck for Omarchy

A touch-friendly dock with local Markdown memos for Omarchy Quattro / Hyprland: workspace thumbnails, CPU/RAM/temperature/fan readings, power profiles, live volume and backlight sliders, media transport controls, and a wide app menu.

Version: **0.1.2 — preview**. Tested on an ASUS UX482 dual-screen laptop with Omarchy Quattro, Hyprland 0.56.2 and Quickshell. This repository contains a native shell service plugin; it does not start another Quickshell process.

## Install

Requires Omarchy **Quattro** with its plugin system and the Hyprland Lua dispatch API.

```sh
omarchy plugin add https://github.com/quedulex/duodeck --enable
```

The plugin ID is `quedulex.duodeck`. Existing `touch-console` configuration and data paths are retained to preserve development notes and preferences. A repository release does not imply marketplace approval.

Use only one instance. If an earlier development version is enabled, disable it before enabling DuoDeck; use `omarchy plugin list` to find its ID. If you used the earlier standalone `touch-console.service`, stop that service yourself first. Installation does not stop services or rewrite desktop configuration.

For a local release, copy this folder to `~/.config/omarchy/plugins/quedulex.duodeck`, then run `omarchy plugin validate ~/.config/omarchy/plugins/quedulex.duodeck`, `omarchy-shell shell rescanPlugins`, and `omarchy plugin enable quedulex.duodeck`.

## Usage

- Workspace cards remain visible alongside the controls. Overflow workspaces scroll horizontally.
- Volume and brightness update during dragging, with at most one update every 90 ms; no periodic updates run while idle.
- All detected backlights are adjusted together. Specify `backlights` to limit this to chosen outputs.
- Previous/next buttons are enabled only when the MPRIS player advertises support. A playing player is preferred.
- The speaker button is at the right end of the volume slider. The screen button beside brightness turns displays off through DPMS without locking. On the tested Omarchy configuration, mouse movement or a key wakes the displays; other systems must enable Hyprland DPMS wake settings.
- Click the speaker icon to mute/unmute. Click Eco/Balanced/Boost to select the system power profile.
- The menu opens above this panel on the same monitor. Scroll its app grid with a finger.
- The app menu orders known apps by last launch or window activation. The order is captured when the menu opens, so tiles do not move during a touch gesture. Apps without history fall back to name order. The plugin does not invent or reconstruct past history.
- The language button cycles English, Simplified Chinese and Traditional Chinese. A new installation defaults to the system language, with English fallback. App names come from desktop entries and their installed translations.

## Configuration

Copy `settings.example.json` to `~/.config/touch-console/settings.json`. Settings are re-read with the next five-second status update.

- `output`: Wayland output name such as `DP-1`. Omit to use the last monitor reported by Quickshell.
- `workspaces`: pinned numeric workspace IDs. Active positive workspace IDs are also included.
- `backlights`: names under `/sys/class/backlight`; an empty list uses all backlights. The brightness readout is the average reported level; dragging sets them to the same percentage. Equal percentages need not produce equal perceived brightness.

### Optional spanning adapter

Generic installs do **not** modify monitor positions, scales or key bindings. To integrate a separately reviewed spanning implementation, set argv arrays `spanCommand` and `restoreCommand`, plus `spanStateFile`. Commands are executed directly without a shell. When the state file exists, the panel switches to a small restore button and reserves no screen space. Without this adapter the span button is hidden.

The ASUS-specific development scripts rewrite display configuration and pause a monitor daemon; they are deliberately not distributed as universal defaults. Existing hardware-key fixes on the development machine remain separate.

## Dependencies

- Omarchy Quattro plugin system and Hyprland **Lua dispatch API** (older string-dispatch-only releases are unsupported).
- Quickshell with Hyprland, Wayland screencopy and MPRIS modules; Qt Quick Controls; Python 3.
- `wpctl` (WirePlumber), `brightnessctl`, `powerprofilesctl` for the corresponding controls.
- `uwsm-app`, `gtk-launch` for app launching; Omarchy commands for browser, terminal and night mode; Nautilus for the Files shortcut; `btop` for the Monitor shortcut.
- Linux `/proc` and `/sys`; missing fan/temperature sensors display a dash. No root service, telemetry, automatic package installer or cloud credential is used. The memo editor starts a token-protected server bound only to `127.0.0.1`; user-inserted remote images may make network requests.

## Local data and privacy

`~/.local/state/touch-console/preferences.json` stores the selected language and up to 300 app IDs with last-use timestamps. It does not store window titles, document names, text, audio or screenshots. Thumbnail frames stay in memory. Delete this file while disabled to clear recency and reset language.

Runtime CPU samples and a backend lock live under `$XDG_RUNTIME_DIR/touch-console-plugin-<uid>`. No browsing or app-usage history is uploaded.

## Disable / remove

```sh
omarchy plugin disable quedulex.duodeck
omarchy plugin remove quedulex.duodeck
```

Disabling unloads the panel from Omarchy. User preferences are retained. If you supplied a spanning adapter, restore the window before disabling. Power/volume/brightness changes are normal system settings and retain their last chosen values.

## Development and translations

`Service.qml` is the Omarchy entry point. `TouchConsole.qml` contains UI, `backend.py` runs allowlisted system actions, `data.py` persists MRU/language preferences, and `I18n.js` holds translation dictionaries. Add keys in all language dictionaries; UI uses the English fallback.

```sh
omarchy plugin validate .
python3 -m unittest discover -s tests -v
```

Current limitations: fixed compact layout is designed for wide touch displays (about 1100 logical pixels or more); only English and the two Chinese variants are shipped; screencopy depends on compositor support; additional profiles and sensor types are not yet exposed. No claim of marketplace approval or universal hardware compatibility is made.

### Sticky notes — Milkdown Crepe

Use **+ Memo** in the dock. Drag the small card; tap its content to open the Milkdown Crepe editor on the main screen. Markdown input rules such as `# ` create formatted headings immediately. `/` opens the block menu, selecting text opens formatting tools, and task lists, tables and code blocks use the upstream editor. Choose a title and one of six card colors. Untitled cards have no header. Right-click or long-press a card for edit, color and archive actions. Editor color, archive, restore and export actions live in the top-right three-dot menu. The editor background follows the card color. English, Simplified Chinese and Traditional Chinese follow the dock language. Titles are optional; a faint symbolic title cue appears in browsing mode. Moving the pointer anywhere reveals the current block handle and top-right controls; typing or IME composition hides them, including in fullscreen. Touching the page reveals controls for touch users. No instructional text is shown. Escape saves the current document and closes the editor, including edits made immediately before Escape. Touch taps open cards; a 0.9-second hold opens the context menu. The right-click handler excludes touchscreen devices. The window opens centered and offers fullscreen/restore. Markdown export, automatic local saving, archive and restore are included.

The editor uses bundled MIT-licensed Milkdown Crepe 7.22.3 assets in an on-demand Chromium app window. Requires `chromium` and Python 3. It does not embed QtWebEngine into Quickshell. A token-protected loopback-only server starts with the editor and stops when its browser exits. No cloud account or AI service is configured. The dock remains native Quickshell. Core editor assets work offline; remote images explicitly inserted by the user may require a network connection. Image file attachments are not managed as a local library.

Note text, titles, colors and positions are stored in `~/.local/state/touch-console/notes.json` (or `$XDG_STATE_HOME/touch-console/notes.json`) with owner-only permissions and atomic updates. Existing note bodies are preserved. Notes temporarily hide while the app menu or spanning window is open. Data is retained when disabling the plugin.

Build editor assets in a separate copy of `editor/` with `npm ci && npm run build`, then copy the files in `dist/` back to the release's `editor/` folder, except `dist/source.html`; retain the source `source.html`. Vite emits flat, relative asset URLs for the token-protected local server. The build checks that each JavaScript asset fits the marketplace's 512 KiB static-scan limit. Keep `node_modules` outside the installable folder because Omarchy rejects its symlinks. Distribution includes compiled assets, the lockfile and third-party license notices. The generic launcher’s main-screen placement currently uses Hyprland 0.56 Lua dispatchers; older versions may leave placement to the compositor.
