# TypeScript Projects

A collection of projects built to develop TypeScript skills with a focus on backend development, static typing, and type-safe API design.

## Table of Contents
1. [Transaction Analyzer TS](#transaction-analyzer-ts)
2. [Typed Task API](#typed-task-api)

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

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/TransactionAnalyzerTS)

---

## Typed Task API

**Tech:** TypeScript, Node.js, Express.js

A fully typed RESTful task management API built with Express and TypeScript. Supports creating, reading, updating, and deleting tasks via typed request and response handlers.

**Endpoints:**

| Method | Path | Description |
|--------|------|-------------|
| GET | /tasks | Returns all tasks |
| GET | /tasks/:id | Returns a single task |
| POST | /tasks | Creates a new task |
| PATCH | /tasks/:id | Updates an existing task |
| DELETE | /tasks/:id | Deletes a task |

**Key TypeScript concepts demonstrated:**
- Interfaces for data modeling (`Task` interface)
- Typed Express request and response handlers
- `@types/express` for typed Express internals
- Union types for status fields
- Strict mode enabled throughout

**Getting Started:**

```bash
npm install
npx ts-node app.ts
```

Server runs on [http://localhost:3000](http://localhost:3000)

**Example requests:**
```bash
# Get all tasks
curl http://localhost:3000/tasks

# Create a task
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn TypeScript"}'

# Update a task
curl -X PATCH http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Delete a task
curl -X DELETE http://localhost:3000/tasks/1
```

[Repository](https://github.com/SandyyMarie/Mimo-Projects-and-Practice/tree/main/TypeScript/TypedTaskAPI)

---

[Back to Main README](../README.md)
