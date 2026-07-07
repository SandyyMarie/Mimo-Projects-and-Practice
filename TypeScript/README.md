# TypeScript Projects

A collection of projects built to develop TypeScript skills with a focus on backend development, static typing, and type-safe API design.

## Table of Contents
1. [Transaction Analyzer TS](#transaction-analyzer-ts)
2. [Restaurant Recommender](#restaurant-recommender)


---

## Transaction Analyzer TS
**Tech:** TypeScript, Node.js

A TypeScript conversion of the Python Transaction Analyzer project. Processes a dataset of deposits and withdrawals using strictly typed interfaces and union types, calculating total deposited, total withdrawn, running balance, and largest and average transaction amounts.

**Key TypeScript concepts demonstrated:**
- Interfaces for data modeling (`Transaction` type with union type enforcement)
- Typed functions with explicit return types
- Array methods with type inference (`.filter`, `.reduce`, `.map`)
- Strict mode enabled throughout

**Why I built this:** Converting an existing project to TypeScript is a practical way to learn static typing — the logic is already familiar so the focus stays entirely on TypeScript syntax and patterns.

**Getting Started:**
```bash
npm install
npx ts-node index.ts
```

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/TransactionAnalyzerProjectTS)

---

## Restaurant Recommender
**Tech:** TypeScript, Node.js

A command-line tool that filters a dataset of restaurants based on price bracket, maximum delivery time, distance, and current operating hours. Uses TypeScript's strict typing for filter logic and demonstrates type-safe comparisons, module imports, and real-time data via the `Date` object.

**Key TypeScript concepts demonstrated:**
- Typed variables with explicit type annotations (`string`, `number`)
- Module imports with a typed data source
- Type-safe filtering with `.filter()`
- Real-time logic using the `Date` object

**Getting Started:**
```bash
npm install
npx ts-node index.ts
```

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/RestaurantRecommender)

---

[Back to Main README](../README.md)
