# Python Projects

A collection of Python projects built while completing Mimo's Python career certification.

## Prerequisites

Make sure you have the following installed before running any projects:

- [Python 3](https://www.python.org/downloads/)
- [pip](https://pip.pypa.io/en/stable/installation/) (Python's package manager, included with most Python installations)

## How to Run

1. Navigate to the project folder:
```bash
    cd Python/ProjectNameHere
```

2. Install any dependencies if required (see per-project notes below):
```bash
    pip install -r requirements.txt
```
    or install individually:
```bash
    pip install requests
```

3. Run the script:
```bash
    python script.py
```
    or
```bash
    python app.py
```

## Project Dependencies

| Project | Dependencies |
|---|---|
| Bot Project | None |
| Crypto Craze | `requests`, requires `MIMO_CRYPTO_CRAZE_API_KEY` environment variable |
| Draw a Card | None |
| Food Order System | None |
| Library | None |
| Rock Paper Scissors | None |
| Star Wars API | `requests` |
| To Do List | None |
| Transaction Analyzer | None |

## Setting Environment Variables

For projects that require an API key, set your environment variable before running:

**Mac/Linux:**
```bash
export MIMO_CRYPTO_CRAZE_API_KEY=your_api_key_here
```

**Windows:**
```bash
set MIMO_CRYPTO_CRAZE_API_KEY=your_api_key_here
```
