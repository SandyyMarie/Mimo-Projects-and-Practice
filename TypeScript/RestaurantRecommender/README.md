# Restaurant Recommender

A TypeScript command-line tool that filters a dataset of restaurants in real time based on price bracket, delivery time, distance, and current operating hours, then recommends the first matching result.

## Tech Stack

`TypeScript` `Node.js`

## Features

- Filters restaurants by maximum price bracket, delivery time, and distance
- Uses the current system time to check operating hours
- Returns a recommendation or a friendly message if no restaurants are available
- Fully typed variables and module imports throughout

## File Structure

RestaurantRecommender <br>
├── index.ts # Filter logic and result output <br>
└── restaurants.ts # Restaurant dataset <br>

## Key TypeScript Concepts Demonstrated

- Explicit type annotations (`string`, `number`) on all variables
- Typed module import from a separate data file
- Type-safe filtering with `.filter()`
- Real-time logic using the `Date` object

## Getting Started

```bash
npm install -g ts-node typescript
ts-node index.ts
```

## Known Issue

The operating hours filter condition has a logic bug — it currently checks if `openHour < hour && hour > closeHour` simultaneously, which doesn't correctly exclude closed restaurants. The corrected condition should be:

```typescript
if (hour < Number(restaurant.openHour) || hour >= Number(restaurant.closeHour)) {
  return false;
}
```

## Repository

[Restaurant Recommender](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/RestaurantRecommender)
