# Pixel Paws

A browser-based virtual pet game where the player selects and feeds one of two pets to maintain their saturation level. Pets grow hungry over time and will run away if their saturation reaches 0%.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Two selectable pets, each with an independent saturation level
- Selected pet is highlighted with a red border
- Two treat options that restore different amounts of saturation (+1 and +5)
- Saturation decreases automatically every 5 seconds via a timer
- Pets that reach 0% saturation fade out and display a "Pet ran away" message
- Saturation is capped at 100% to prevent overfeeding

## How It Works

Each pet is managed by a `Pet` class instance that tracks its own saturation level and DOM elements. A `setInterval` timer calls `decreaseFedLevel()` on both pets every 5 seconds:

```javascript
setInterval(() => {
  pet1.decreaseFedLevel();
  pet2.decreaseFedLevel();
}, 5000);
```

Clicking a treat calls `feedPet(amount)`, which calls `feed()` on whichever pet is currently selected.

## Key Concepts Demonstrated

- OOP with a `Pet` class managing individual pet state and DOM references
- `setInterval` for real-time state updates
- Dynamic class toggling for selected pet highlighting
- Opacity manipulation for visual feedback when a pet runs away
- Saturation clamping with min/max boundary checks

## Getting Started

Open `index.html` directly in your browser — no installation required.

