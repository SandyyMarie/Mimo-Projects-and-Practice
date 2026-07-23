# Transaction Analyzer TS

A TypeScript conversion of the original Python Transaction Analyzer project. Processes a dataset of deposits and withdrawals using strictly typed interfaces and union types, calculating total deposited, total withdrawn, running balance, and largest and average transaction amounts.

**Why I built this:** Converting an existing project to TypeScript is a practical way to learn static typing — the logic is already familiar so the focus stays entirely on TypeScript syntax and patterns.

## Tech Stack

`TypeScript`

## Features

- Print all transactions with formatted dollar amounts
- Print a summary of total deposited, total withdrawn, and current balance
- Analyze transactions for largest and average deposit and withdrawal
- Interactive menu loop with clean exit
- Strict mode enabled via `tsconfig.json`

## File Structure

TransactionAnalyzerProjectTS <br>
├── index.ts # All transaction logic and interactive menu <br>
└── tsconfig.json # TypeScript compiler configuration <br>

## Key TypeScript Concepts Demonstrated

- Union types for data modeling (`TransactionCategory`)
- Interfaces for structured data (`Transaction`, `Summary`, `Analysis`)
- Typed functions with explicit return types (`void`, `Summary`, `Analysis`)
- Array methods with type inference (`.filter()`, `.reduce()`)
- Strict mode enabled throughout via `tsconfig.json`

## Getting Started

```bash
npm install -g ts-node typescript
ts-node index.ts
```

Or compile first and run with Node:

```bash
npx tsc
node dist/index.js
```

## Example Output

```Transaction Analyzer

Choose an option:

Print transactions (type 'print')
Print summary (type 'summary')
Analyze transactions (type 'analyze')
Stop program (type 'stop')

Enter your option: summary
Total Deposited: $4522.70
Total Withdrawn: $-2071.34
Balance: $2451.36
```

## Repository

[Transaction Analyzer TS](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/TransactionAnalyzerProjectTS)
