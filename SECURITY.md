# Security

Plugins run with the permissions of the desktop user. DuoDeck's memo editor uses a token-protected, loopback-only HTTP server and a dedicated Chromium profile. Keep tokens, note bodies and profile files out of public reports.

To report a suspected vulnerability, use [GitHub private vulnerability reporting](https://github.com/quedulex/duodeck/security/advisories/new). Include the affected version, reproduction steps with synthetic data, impact and any proposed mitigation. Do not publish an exploit containing another person's data or credentials.

This project is currently a preview. Report issues against the current published preview; older previews are not maintained independently. No response-time guarantee is claimed. Marketplace listing is not a security audit.

发现安全问题时，请使用上述 GitHub 私密漏洞报告入口，附受影响版本、示例数据复现步骤和影响范围。不要在公开 Issue 中发送令牌、私人便签或浏览器配置。
