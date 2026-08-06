# Crypto Craze

A command-line tool that fetches and displays real-time cryptocurrency prices for Ethereum, Bitcoin, and Solana via a REST API.

## Tech Stack

`Python`

## Features

- Fetches live price data for Ethereum, Bitcoin, and Solana
- Displays ticker symbol and current USD price for each coin
- API key loaded securely from an environment variable
- Modular functions for fetching and displaying coin data

## How It Works

The API key is loaded from the environment rather than hardcoded, keeping credentials out of source code:

```python
api_key = os.getenv("MIMO_CRYPTO_CRAZE_API_KEY")
headers = {"api-key": api_key}
```

Each coin is fetched with `get_crypto_price()` and passed to `print_crypto_price()` for display:

```python
def get_crypto_price(coin_id):
    url = f"https://crypto-craze.mimo.dev/api/coins/{coin_id}"
    response = requests.get(url, headers=headers)
    return response.json()
```

## Key Concepts Demonstrated

- REST API consumption with the `requests` library
- Secure API key management with `os.getenv()`
- Modular function design for fetching and formatting output
- F-string URL construction for dynamic endpoint building
- Dictionary access with `.get()` for safe key retrieval

## Getting Started

1. Install dependencies:
```bash
    pip install requests
```

2. Set your API key as an environment variable:

    **Mac/Linux:**
```bash
    export MIMO_CRYPTO_CRAZE_API_KEY=your_api_key_here
```

    **Windows:**
```bash
    set MIMO_CRYPTO_CRAZE_API_KEY=your_api_key_here
```

3. Run the script:
```bash
    python app.py
```
