# Pull Request Information

The changes have been pushed to branch: `feature/progressive-web-app`

**Direct 1-Click link to create the PR on upstream (`FOSSCLUB-LBSITW/runner_game`):**
👉 [Open Pre-filled Pull Request on FOSSCLUB-LBSITW/runner_game](https://github.com/FOSSCLUB-LBSITW/runner_game/compare/main...UG-SIDHARTH:runner_game:feature/progressive-web-app?expand=1)

---

### PR Title:
```text
feat: port game to Progressive Web App (PWA) with offline support and installability
```

---

### PR Body (Pre-filled):
```markdown
## Description
This pull request ports the Runner Game into a full Progressive Web App (PWA) with offline caching, home screen installability, and mobile touch support:

1. **Web App Manifest (`manifest.json`)**:
   - Configured app identity, standalone display mode, orientation, colors, and shortcuts.
   - Linked icons (`icon-192.png`, `icon-512.png`, maskable variants, and `icon.svg`).

2. **Service Worker (`sw.js`)**:
   - Implemented pre-caching of all static shell assets (`index.html`, `style.css`, `script.js`, `manifest.json`, and icons).
   - Utilized Stale-While-Revalidate caching strategy with offline navigation fallback so the game is 100% playable offline.
   - Added cache cleanup on activation and opaque resource caching support.

3. **Install Flow & Network Status**:
   - Added `beforeinstallprompt` event interception with an in-HUD `📥 Install App` button.
   - Added an `⚡ Offline` HUD status indicator that dynamically toggles based on network connectivity.
   - Added offline and app-installed humor commentary to the Roast Horse mascot.
   - Synchronized theme-color meta tag dynamically with Dark/White mode switches.

4. **Mobile & Touch Controls**:
   - Added `touchstart` and pointer controls allowing players to jump via screen taps on mobile devices.
   - Added `touch-action: manipulation` and safe-area inset support for notch-screen devices.

## Related Issue
Closes #13

## Type of Change
- [ ] Bug fix
- [x] New feature
- [ ] Breaking change
- [x] Documentation update

## Testing Done
- Validated `manifest.json` and `sw.js` syntax using Node.js and Python.
- Verified all cached icons and asset paths exist on disk.
- Tested offline behavior and cache fallback via local HTTP server.
- Verified mobile touch jump events (`touchstart` / `pointerdown`) alongside keyboard controls.
- Verified that Dark/White mode toggle updates theme-color metadata.

## Checklist
- [x] I have tested my changes
- [x] My code follows project guidelines
- [x] I have linked the related issue
```
