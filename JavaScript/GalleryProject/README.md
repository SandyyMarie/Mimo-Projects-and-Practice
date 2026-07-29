# Gallery Project

A browser-based image gallery featuring clickable thumbnails that open a fullscreen modal overlay. Built with vanilla HTML, CSS, and JavaScript.

## Tech Stack

`HTML` `CSS` `JavaScript`

## Features

- Clickable thumbnails that open a fullscreen modal overlay
- CSS hover zoom effect on thumbnails
- Dark overlay background for focused image viewing
- Close button to dismiss the modal
- Centered, responsive layout using flexbox

## How It Works

Clicking a thumbnail calls `showModal()`, passing the clicked image element as an argument. The modal's `src` is updated to match the thumbnail's `src`, then the modal is made visible:

```javascript
function showModal(thumbnail) {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
}
```

Clicking the close button calls `hideModal()`, which hides the modal by setting `display` back to `none`.

## Key Concepts Demonstrated

- DOM manipulation via `style.display` toggling
- Passing DOM elements as function arguments
- CSS transitions for smooth hover zoom effect (`transform: scale(1.1)`)
- Flexbox for responsive gallery layout
- Absolute positioning for fullscreen modal overlay

## Known Issue

The `hideModal()` function is defined but never called — the close button has no event listener attached to it. The fix is to add an `onclick` handler to the close button in the HTML:

```html
<span id="modal-close-button" onclick="hideModal()">x</span>
```

## Getting Started

Open `index.html` directly in your browser — no installation required.
