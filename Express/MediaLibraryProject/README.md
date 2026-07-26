# Media Library

A REST API built with Express.js that serves a movie library dataset. Supports retrieving all movies or a single movie by ID, with polymorphic detail formatting for both standalone films and franchise installments.

## Tech Stack

`JavaScript` `Node.js` `Express.js`

## Features

- Retrieve all movies in the library
- Look up a single movie by ID
- Franchise films display installment context (e.g. "Lord of the Rings - Installment 1 of 3")
- 404 error handling for movies not found

## File Structure

MediaLibraryProject <br>
├── app.js # Express server and route definitions <br>
├── Library.js # Library class managing the movie dataset <br>
└── MediaItem.js # Movie and FranchiseFilm class definitions <br>

## Key Concepts Demonstrated

- OOP with class inheritance (`FranchiseFilm extends Movie`)
- Method overriding with `super` for polymorphic `getDetails()` output
- RESTful routing with Express.js
- Singleton pattern via `module.exports = new Library()`
- 404 error handling for invalid IDs

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /movies | Returns all movies |
| GET | /movies/:id | Returns a single movie by ID |

## Example Responses

```bash
# GET /movies/1
{ "movie": "Pulp Fiction directed by Quentin Tarantino" }

# GET /movies/4
{ "movie": "The Lord of the Rings - Installment 1 of 3: The Fellowship of the Ring directed by Peter Jackson" }

# GET /movies/99
{ "error": "Movie not found" }
```

## Getting Started

```bash
npm install
node app.js
```

Server runs on [http://localhost:3000](http://localhost:3000)

