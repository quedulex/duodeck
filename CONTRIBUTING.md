# Contributing to DuoDeck

Thanks for helping improve a touch-friendly Omarchy desktop. Bug reports, hardware compatibility feedback, translations, documentation and focused code changes are welcome. English, Simplified Chinese and Traditional Chinese reports are all welcome.

## Before opening a report

Search [existing issues](https://github.com/quedulex/duodeck/issues). For bugs, describe the action, expected result, actual result and how to reproduce it. Include plugin version/commit, Omarchy and Hyprland versions, display dimensions/scaling, and relevant device or sensor information. Share screenshots only after removing personal memo text. Do not include tokens, browser profiles or private configuration.

Use the [bug form](https://github.com/quedulex/duodeck/issues/new?template=bug_report.yml) or [feature form](https://github.com/quedulex/duodeck/issues/new?template=feature_request.yml). For vulnerabilities, follow [SECURITY.md](SECURITY.md).

## Small contributions

- Improve clarity in the three README versions while keeping commands, paths and compatibility claims consistent.
- Improve translations in `I18n.js`; update every language dictionary for a new key.
- Report behavior on another display, sensor or compositor version, clearly identifying what was actually tested.
- Keep changes focused and preserve existing notes, preferences and dependency locks.

## Development

Fork the repository and work on your own branch. Validate in an isolated plugin directory and test against synthetic notes before enabling a changed build on a real desktop.

```sh
omarchy plugin validate .
python3 -m unittest discover -s tests -v
```

For editor changes, copy `editor/` to a separate build workspace:

```sh
npm ci
npm run build
```

Copy generated `dist/` assets back to the installable `editor/` folder, excluding generated `dist/source.html`; retain the original source file. Do not distribute `node_modules`, backups, profiles or private state. See [REFERENCE.md](docs/REFERENCE.md) for entry points, translations and storage behavior. JavaScript assets must remain below the marketplace's 512 KiB per-file limit.

## Pull requests

Explain the problem, the change and the validation performed. Distinguish unit/fixture results from actual desktop testing. Keep `README.md`, `README.zh-CN.md` and `README.zh-TW.md` consistent when user-facing behavior changes. Include updated source, generated editor assets and lockfile where needed. Preserve license notices. Contributions are made under the project's MIT license.

## 中文说明

欢迎提交问题、硬件兼容反馈、翻译和代码修复。请说明复现步骤、预期与实际结果，并附软件版本、屏幕尺寸及缩放比例。截图请先去除私人便签，勿提交令牌或浏览器配置。功能改动需要同步三语文档，先用隔离目录和示例数据验证，避免影响正在运行的桌面。
