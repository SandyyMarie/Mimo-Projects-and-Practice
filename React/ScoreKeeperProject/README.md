# Score Keeper

A two-team score tracking app built with React. Displays live scores for Team One and Team Two with increment buttons for each, and dynamically highlights the leading team with a teal background to give instant visual feedback on the current game state.

## Tech Stack

`React` `JavaScript` `CSS`

## Features

- Increment scores independently for each team
- Leading team is visually highlighted in teal in real time
- Clean, centered card layout with hover effects on buttons

## Component Structure

App<br>
└── ScoreKeeper<br>
&nbsp; &nbsp; └── ScoreView (rendered twice, once per team)

- **`App`** — Root component, renders `ScoreKeeper`
- **`ScoreKeeper`** — Manages score state with `useState` and passes scores and leading status down as props
- **`ScoreView`** — Presentational component that conditionally applies a highlight style based on the `leading` prop

## Key Concepts Demonstrated

- `useState` for real-time state management
- Props passing and conditional styling based on derived state
- Component composition with a reusable `ScoreView` component

## Getting Started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Repository

[Score Keeper Project](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/React/ScoreKeeperProject)
