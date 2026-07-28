# Comedian Bot

A browser-based chat-style joke bot with a simulated conversation UI. Displays bot and user messages with avatars in a scrollable chat window, using staggered `setTimeout` calls to mimic realistic response timing.

## Tech Stack

`HTML` `CSS` `JavaScript` `Font Awesome`

## Features

- Simulated chat UI with distinct bot and user message styling
- Bot and user avatars rendered with Font Awesome icons
- Staggered message timing to mimic a realistic typing delay
- Button hides while the bot is "thinking" and reappears after the punchline
- Graceful handling when all jokes have been told
- Auto-scrolls to the latest message after each response

## How It Works

When the user clicks "Tell me a joke!", three messages are queued with `setTimeout` at staggered intervals:

```javascript
setTimeout(() => appendBotMessage("Ok, got one."), 1000);
setTimeout(() => appendBotMessage(jokes[jokeIndex][0]), 1500);
setTimeout(() => appendBotMessage(jokes[jokeIndex][1]), 2000);
```

This creates the illusion of the bot thinking, delivering the setup, then landing the punchline — mimicking a real chat experience.

## Key Concepts Demonstrated

- Dynamic DOM construction with `createElement` and `append`
- Timed message sequencing with `setTimeout`
- State tracking with `jokeIndex` to cycle through jokes
- Button visibility toggling during async sequences
- Reusable `appendBotMessage` and `appendUserMessage` functions

## Getting Started

Open `index.html` directly in your browser — no installation required.
