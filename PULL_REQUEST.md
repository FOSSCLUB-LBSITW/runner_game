# Pull Request Information

The changes have been pushed to branch: `feature/dark-white-mode-roast-horse`

**Direct link to create the PR on GitHub:**
👉 [https://github.com/UG-SIDHARTH/runner_game/pull/new/feature/dark-white-mode-roast-horse](https://github.com/UG-SIDHARTH/runner_game/pull/new/feature/dark-white-mode-roast-horse)

---

### PR Title:
```text
feat: add white mode theme toggle and sarcastic roast horse companion
```

---

### PR Body (Copy & Paste):
```markdown
## Description
This pull request adds a Dark/White mode theme switcher and introduces an interactive 8-bit retro pixel-art "Sarcastic Roast Horse" mascot companion:

1. **Theme Switcher**:
   - Added `#theme-btn` in the HUD to seamlessly toggle between Dark and White (Light) mode.
   - Updated canvas gradients, HUD styles, and overlays for White Mode.
   - Incorporated an intentional White Mode contrast bug (HUD text remains `#ffffff` on light background) for the debugging challenge, with the solution commented directly in `style.css`.

2. **Sarcastic Roast Horse Companion**:
   - Custom retro pixel-art SVG horse mascot rendered in `#horse-box` with hop and bob animations.
   - Dynamic dialogue system providing humorous roasts and real gameplay hints:
     - On game start / initialization
     - On collision / game over (with jump timing hints)
     - On coin collection / player shrink
     - On theme toggling (White Mode retinas roast & Dark Mode reaction)
     - On score milestones (25, 50, 100)
     - On-demand hint button ("Poke for Hint")
   - Retro synthesized 8-bit sound chirps using the Web Audio API.

## Related Issue
Closes #1

## Type of Change
- [x] Bug fix
- [x] New feature
- [ ] Breaking change
- [x] Documentation update

## Testing Done
- Tested Dark/White mode toggle in browser; verified CSS transitions and canvas color updates.
- Verified that White Mode contrast bug behaves as intended and confirmed the fix in `style.css`.
- Tested Sarcastic Horse companion triggers across game start, jumps, collision/game-over, coin pickups, and manual poke button.
- Verified audio synthesis via Web Audio API without console errors.
- Verified JavaScript syntax with Node.js parser (`node -c script.js`).
- Verified responsive layout across desktop and mobile wrapper constraints.

## Screenshots (Optional)
Companion box docks cleanly below the canvas with retro 8-bit pixel art and speech bubble.

## Checklist
- [x] I have tested my changes
- [x] My code follows project guidelines
- [x] I have linked the related issue
```

