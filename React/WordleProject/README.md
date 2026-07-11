# Wordle

A browser-based Wordle clone built with React. The player has 6 attempts to guess a hidden 5-letter word, with each submitted guess rendered as a color-coded row — green for correct letters in the correct position, gold for correct letters in the wrong position, and gray for absent letters.

## Tech Stack

`React` `JavaScript` `CSS`

## Features

- Randomly selected target word on each page load
- Color-coded feedback per letter after each guess
- Input validation that prevents submission of incomplete guesses
- Game over state that reveals the target word if attempts are exhausted
- Gradient background with clean centered layout

## Component Structure

App
└── Row (rendered once per submitted guess)

- **`App`** — Manages all game state including the target word, guess history, current guess, and game over status. Handles input and guess submission logic.
- **`Row`** — Presentational component that receives a guess and the target word, evaluates each letter's status, and renders a color-coded row of letter tiles.

## Key Concepts Demonstrated

- `useState` for game state management including guess history and game over detection
- Props-driven rendering with a reusable `Row` component
- Algorithmic letter-status logic (`correct`, `present`, `absent`) in `getLetterStatus`
- Conditional rendering for input, game over message, and submitted rows
- Random word selection using a lazy `useState` initializer

## Getting Started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Repository

[Wordle Project](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/React/WordleProject)
