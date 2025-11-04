# All-in-One GitHub Project
Folder: `file/allfile/file`

This repository contains three example projects you can upload to GitHub (or GitHub Pages):

1. `website/` — a small multi-page HTML/CSS/JS site (landing page + contact).
2. `game/` — a simple canvas Snake game you can embed in a page.
3. `bot/` — a lightweight rule-based chatbot front-end (runs entirely in-browser) and a GitHub Actions workflow that can auto-deploy the `website/` to GitHub Pages.

## How to use
- Download the ZIP and unzip.
- Open `website/index.html` or `game/index.html` or `bot/chatbot.html` in a browser to try locally.
- To publish `website/` to GitHub Pages:
  1. Create a new repository.
  2. Copy the contents of `website/` into the repo root (or keep folder and adjust settings).
  3. Commit & push. Optionally enable GitHub Pages from `gh-pages` branch or `main` branch `/docs` folder.

## Notes
- The chatbot is purely client-side (no external API keys). If you want to connect it to a server or API (OpenAI etc.), add server-side code and store keys securely (don't commit secrets).
- The GitHub Actions workflow provided demonstrates a simple deploy step; adjust branch and repo settings to match your repository.
