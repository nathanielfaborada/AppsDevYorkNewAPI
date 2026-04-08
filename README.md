# New York Times App

A retro-styled web app that displays live content from the New York Times API.

**Live site:** https://nathanielfaborada.github.io/appsdev-newyork-times

## Pages

- **Science Articles** (`index.html`) — Top stories from the NYT Science section
- **Books** (`Books.html`) — NYT Best Sellers overview

## Tech Stack

- [Parcel](https://parceljs.org/) — bundler
- [Tailwind CSS](https://tailwindcss.com/) — styling (via CDN)
- [NYT Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview)
- [NYT Books API](https://developer.nytimes.com/docs/books-product/1/overview)

## Local Development

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file at the project root:
   ```
   NYT_API_KEY=your_api_key_here
   ```
4. Start the dev server:
   ```bash
   npm start
   ```

## Build

```bash
npm run build
```

Output goes to `docs/` for GitHub Pages deployment.

## Notes

- API key is injected at build time by Parcel via `process.env.NYT_API_KEY`
- For educational purposes only — powered by [The New York Times](https://developer.nytimes.com/)
