# Draw a Card

A command-line card-drawing simulator that builds a standard 52-card deck and lets the user repeatedly draw cards until the deck is depleted. Each drawn card is rendered as ASCII art in the terminal.

## Tech Stack

`Python`

## Features

- Builds a full 52-card deck with all four suits and ranks
- Lets the user choose how many cards to draw each round
- Renders each card as ASCII art with suit and rank displayed
- Handles 10-value cards with adjusted spacing for two-character ranks
- Gracefully handles requests for more cards than remain in the deck
- Exits cleanly when the deck is fully depleted

## How It Works

The deck is built as a list of `(suit, rank)` tuples using nested loops across suits and ranks. Cards are drawn by popping from the end of the deck list:

```python
def draw_card(deck, num_cards):
  hand = []
  for _ in range(num_cards):
    if deck:
      hand.append(deck.pop())
    else:
      break
  return hand, deck
```

Each card is rendered as ASCII art, with spacing adjusted for two-character ranks like `10`:

```
+-------+
|10   |
|     |
|  ♥  |
|     |
|   10|
+-------+
```
## Key Concepts Demonstrated

- Tuple-based data modeling for card representation
- Nested loops for deck construction
- Stack-based card drawing with `list.pop()`
- F-string formatting for dynamic ASCII art rendering
- Edge case handling for deck exhaustion and two-character ranks

## Getting Started

```bash
python script.py
```
