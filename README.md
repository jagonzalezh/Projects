# EMDR Telehealth Skills Simulator

Interactive React + Vite training simulator for EMDR therapists to practice telehealth clinical decision-making across six core modules.

## Features
- Module-based learning flow aligned to telehealth EMDR themes:
  - telehealth readiness
  - safety and environment
  - technology and tools
  - therapist presence and engagement
  - troubleshooting challenges
  - ethics and privacy
- Branching scenarios with therapist choices and realistic client reactions
- Immediate best-practice feedback after each decision
- Competency scoring per module
- Progress dashboard with completed modules and score tracking
- Reflection journal saved locally
- Persistent saved progress using `localStorage`
- Responsive design for desktop/tablet

## Install and Run Locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in terminal (typically `http://localhost:5173`).

## Build for Production
```bash
npm run build
npm run preview
```

## Tech Stack
- React
- Vite
- Browser localStorage for persistence

## Project Structure
- `src/App.jsx` – main app shell, navigation, storage, and state
- `src/data/modules.js` – module and branching scenario data
- `src/components/ScenarioPlayer.jsx` – interactive scenario flow
- `src/components/ModuleCard.jsx` – module listing cards
- `src/components/Dashboard.jsx` – scores, completion, and reflection journal
- `src/styles.css` – responsive visual design
