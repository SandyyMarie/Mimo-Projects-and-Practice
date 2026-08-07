# Blackjack

A command-line Blackjack game with full game logic including ace flexibility, dealer AI, and interactive hit/stand prompts.

## Tech Stack

`JavaScript`

## Features

- Full deck of cards with correct point values
- Ace flexibility — aces count as 11 and automatically drop to 1 to avoid busting
- Dealer's second card is hidden until the player stands
- Dealer AI hits until reaching 17 or higher
- Interactive hit/stand prompts with invalid input handling
- Bust detection, tie handling, and winner declaration

## How It Works

Aces are tracked separately during hand calculation. If the total exceeds 21 and aces are present, each ace is reduced from 11 to 1 until the hand is valid or no aces remain:

```javascript
while (value > 21 && aceCount > 0) {
  value -= 10;
  aceCount -= 1;
}
```

The dealer's hand is partially hidden on the initial deal, showing only the first card:

```javascript
function displayDealerHand(hand, firstCardOnly) {
  if (firstCardOnly) {
    ranks = hand[0].rank + ', ?';
  }
}
```

## Key Concepts Demonstrated

- Object-based card modeling with `rank` and `value` properties
- Ace flexibility logic with a while loop and counter
- Dealer AI that hits until reaching a soft 17
- Input validation with graceful handling of invalid entries
- Separate display functions for player and dealer hands

## Getting Started

```bash
npm install
node app.js
```
