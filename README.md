# DuoDeck

**Your workspaces, desktop controls and local Markdown memos — together in one touch-friendly Omarchy dock.**

[English](README.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md)

[![Checks](https://github.com/quedulex/duodeck/actions/workflows/check.yml/badge.svg?branch=main)](https://github.com/quedulex/duodeck/actions/workflows/check.yml)
[![Preview release](https://img.shields.io/github/v/release/quedulex/duodeck?include_prereleases&label=preview)](https://github.com/quedulex/duodeck/releases)
[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/quedulex/duodeck?style=social)](https://github.com/quedulex/duodeck/stargazers)

[Quick start](#quick-start) · [Features](#features) · [Configuration](#configuration) · [Contribute](CONTRIBUTING.md) · [Releases](https://github.com/quedulex/duodeck/releases)

![DuoDeck on an ASUS dual-screen laptop, with workspace previews, desktop controls and colorful memos](docs/photos/markdown-memos.jpg)

*Real hardware photograph supplied by the owner.*

**[▶ Watch / download the 29-second demo](docs/videos/duodeck-demo.mp4)** · [English / Chinese screenshot gallery](docs/MEDIA.md)

## Why DuoDeck?

Keep useful desktop actions within reach on a wide touch display or a laptop's second screen. Switch workspaces, open recent apps, adjust sound and brightness, and jot down a memo without assembling separate desktop widgets.

DuoDeck is a native **Omarchy Quattro service plugin**. The dock runs inside the existing shell; the memo editor opens in a dedicated Chromium app window. Version **0.1.2 is a preview**, designed for displays about **1100 logical pixels or wider**.

## Features

| Feature | What you can do |
| --- | --- |
| Workspace previews | See workspace thumbnails and switch directly; overflow scrolls horizontally. |
| Recent-app launcher | Open apps from a touch-friendly menu ordered by local launch and activation history. |
| Desktop controls | Adjust volume and brightness, mute, control media and select a power profile. |
| System status | Read CPU, RAM, temperature and fan metrics where sensors are available. |
| Local Markdown memos | Create colorful cards, edit with Milkdown Crepe, save automatically, archive, restore and export Markdown. |
| Three interface languages | Switch between English, Simplified Chinese and Traditional Chinese. |

## See it in action

| Workspace previews and local memos | App launcher and desktop controls |
| --- | --- |
| [![Dual-screen desktop](docs/screenshots/en-01-dual-screen.png)](docs/screenshots/en-01-dual-screen.png) | [![Expanded app launcher](docs/screenshots/en-02-menu.png)](docs/screenshots/en-02-menu.png) |

The [demo video](docs/videos/duodeck-demo.mp4) shows opening the app menu, dragging a card, opening a demo memo, spanning and restoring its window. It uses an empty Antigravity window and demo notes; other apps remain small workspace thumbnails. There is no audio.

**Cross-screen spanning in the screenshots and video uses a separately configured ASUS adapter. It is not enabled by a generic installation.** App logos, wallpaper, top bar and the circular voice widget belong to the surrounding desktop. See the [full gallery](docs/MEDIA.md) for both interface languages, fullscreen views and the device photos.

## Quick start

### Requirements

Requires **Omarchy Quattro**, its plugin system, the **Hyprland Lua dispatch API**, Quickshell and Python 3. Older string-dispatch-only Hyprland releases are unsupported.

| Function | Dependencies |
| --- | --- |
| Native dock | Quickshell with Hyprland, Wayland screencopy and MPRIS modules; Qt Quick Controls |
| Sound, backlight, power profiles | `wpctl`, `brightnessctl`, `powerprofilesctl` |
| App launching and shortcuts | `uwsm-app`, `gtk-launch`; Omarchy commands; Nautilus and `btop` for their shortcuts |
| Markdown memo editor | `chromium` and Python 3; editor assets are bundled |

DuoDeck does not install these packages automatically. Missing sensors display a dash. See the [detailed reference](docs/REFERENCE.md) for dependency and compositor behavior.

### Install and enable

```sh
omarchy plugin add https://github.com/quedulex/duodeck --enable
```

Enable only one copy. If an earlier development version is active, find its ID with `omarchy plugin list` and disable it first. If you used the standalone `touch-console.service`, stop that service before enabling DuoDeck. Installation does not stop services or rewrite desktop configuration for you.

### Use it

1. Tap a workspace card to switch; open the app menu to launch an app.
2. Drag sound and brightness sliders; tap the speaker to mute. The screen button turns displays off through DPMS without locking.
3. Tap **+ Memo** to create a card, then tap its content to open the editor. Type Markdown, use `/` for blocks, and use the editor menu for color, archive, restore and export.
4. Tap the language button to cycle the three languages. Changes and recent-app ordering persist locally.

Escape saves the memo and closes the editor. A long press opens a card's context menu. Wake behavior after DPMS depends on your Hyprland settings.

### Disable or remove

```sh
omarchy plugin disable quedulex.duodeck
omarchy plugin remove quedulex.duodeck
```

Removal retains local notes and preferences. If you configured the optional spanning adapter, restore its window before disabling.

## Configuration

Copy `settings.example.json` to `~/.config/touch-console/settings.json`. Settings reload with the next five-second status update.

| Setting | Purpose |
| --- | --- |
| `output` | Choose a Wayland output, such as `DP-1`. Omit to use the last monitor reported by Quickshell. |
| `workspaces` | Pin numeric workspace IDs; other active positive IDs are included automatically. |
| `backlights` | Restrict brightness control to selected devices under `/sys/class/backlight`; empty means all devices. |

Monitor layouts and key bindings are not changed automatically. An optional spanning adapter only runs argv commands you explicitly configure. See [configuration and usage details](docs/REFERENCE.md).

## Local data and privacy

- Notes: `~/.local/state/touch-console/notes.json`.
- Language and recent-app IDs: `~/.local/state/touch-console/preferences.json`.
- Existing `touch-console` paths are retained for data compatibility. Back up these files before changing an installation.
- Workspace thumbnail frames stay in memory. Recent-app storage does not contain window titles or document contents.
- No telemetry, cloud account, root service or automatic package installation is configured.
- The memo editor uses a token-protected server bound only to `127.0.0.1` and a dedicated local Chromium profile. Core editor assets work offline; remote images inserted by the user may access the network. Local image attachment management is not included.

## Compatibility and validation

Development testing used **ASUS UX482**, Omarchy **4.0.4-1** and Hyprland **0.56.2**. The official plugin validator, isolated Python regressions, Qt Quick input fixture and Chromium editor fixture passed. CI rebuilds the editor and runs backend/storage tests; its Ubuntu runner skips the Qt fixture when Qt Quick Test is unavailable.

The published preview has not completed native desktop acceptance. Other hardware and compositor versions need verification. Marketplace submission and maintainer approval are pending; publishing a repository does not imply marketplace approval.

## Help improve DuoDeck

If DuoDeck is useful to you, **click Star at the top of this repository** to bookmark it and support continued maintenance. To follow new versions, choose **Watch → Custom → Releases**.

You can also [report a bug](https://github.com/quedulex/duodeck/issues/new?template=bug_report.yml), [suggest a feature](https://github.com/quedulex/duodeck/issues/new?template=feature_request.yml), improve translations or contribute a fix. A helpful hardware report includes display size, scaling, Omarchy/Hyprland versions and the affected action. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Maintainer and license

Maintained by [jasoncym](https://github.com/jasoncym), under the [Quedulex](https://github.com/quedulex) organization. [MIT](LICENSE); bundled dependency notices are in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
