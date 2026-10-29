# GitHub Issue Proposals

This file contains ready-to-use GitHub Issue templates for **Commit Overflow / FOSS Club** events. You can copy-paste these directly into the GitHub Issue tracker. Both comply with `.github/workflows/issue-validation.yml` and repository issue schemas.

---

## Option 1: Feature Proposal (Recommended)
**Use this if proposing the Dark/White Mode & Roasting Horse as a new feature.**

### Title:
```text
[Feature]: Add Dark/White Mode Toggle and Sarcastic Roast Horse Companion
```

### Labels:
`feature`, `needs triage`

### Body (Copy & Paste):
```markdown
### Feature Description
Add a theme toggle supporting Dark Mode and White (Light) Mode, alongside an interactive, retro pixel-art "Roast Horse" companion bot. The horse serves as a sarcastic commentator that provides helpful gameplay hints, explains bug mechanics, and humorously roasts the player whenever they crash, shrink, or make poor jumps.

In addition, an intentional White Mode contrast bug (where HUD stats remain white on a light background) has been integrated to provide an engaging debugging challenge for participants during the event.

### Proposed Implementation
1. **Theme Switcher (`style.css` & `script.js`):**
   - Add a `#theme-btn` in the HUD to toggle the `.white-mode` CSS class on `<body>`.
   - Update canvas background gradients, button styles, and overlay themes according to the active theme.
   - Introduce an intentional bug: in White Mode, `#hud` text remains `#ffffff`, making stats invisible until fixed by the participant.

2. **Sarcastic Horse Companion (`index.html`, `style.css`, `script.js`):**
   - Render a custom 8-bit retro pixel-art SVG horse in `#horse-box`.
   - Implement an interactive dialogue system that dynamically triggers witty roasts and legitimate game/bug hints:
     - On game start
     - On game over / collision
     - On coin collection / player shrink
     - On theme toggling (reacting to dark vs blinding white mode)
     - On score milestones (25, 50, 100)
     - On-demand via the "Poke for Hint" button or clicking the horse avatar.
   - Include retro Web Audio API synthesized sound chirps for arcade immersion.

### Additional Context
- Fits the retro arcade visual style using the `'Press Start 2P'` font.
- Responsive layout using `#app-container` so the companion docks cleanly underneath the game viewport.

### Checklist
- [x] I confirm that I want to work on this feature.
- [x] I have searched the existing issues for similar feature requests.
- [x] I have read the `CONTRIBUTING.md` guidelines.
```

---

## Option 2: Bug Fix Proposal (Bug Report)
**Use this if submitting an issue for the intentional White Mode contrast bug.**

### Title:
```text
[Bug]: HUD text becomes invisible (white on white) when toggling White Mode
```

### Labels:
`bug`, `needs triage`

### Body (Copy & Paste):
```markdown
### Bug Description
When switching from Dark Mode to White Mode using the theme button, the HUD statistics (Score, High Score, Coins) disappear from view. The text color remains set to `#ffffff` with `text-shadow: none`, rendering white text against a light background.

### Steps to Reproduce
1. Open `index.html` in a web browser.
2. Click the `☀️ White Mode` button in the top HUD.
3. Observe that the game theme turns light, but the Score, High Score, and Coins text completely vanish.

### Proposed Solution
In `style.css`, update the `body.white-mode #hud` selector:
```css
body.white-mode #hud {
  color: #111827; /* Change from #ffffff to dark gray/black */
  text-shadow: none;
}
```

### Additional Context
- The Sarcastic Roast Horse companion points out this bug in real time with the hint: *"White Mode enabled! Too bad you can't read your score anymore! Inspect body.white-mode #hud in style.css."*

### Checklist
- [x] I confirm that I want to work on this issue.
- [x] I have searched the existing issues for similar bugs.
- [x] I have read the `CONTRIBUTING.md` guidelines.
```

