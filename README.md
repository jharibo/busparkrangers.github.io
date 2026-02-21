# Bus Park Rangers

Static team site built with [Astro](https://astro.build) + Tailwind CSS, hosted on GitHub Pages.

## Dev

```bash
npm install
npm run dev
```

## Adding a result

Edit `src/data/matches.json` and add an entry:

```json
{
  "id": "2026-03-04-vs-opponent-name",
  "date": "2026-03-04",
  "season": "2025/26",
  "opponent": "Opponent Name",
  "venue": "home",
  "score": { "us": 3, "them": 2 },
  "squad": ["james-harrison"],
  "scorers": [
    { "player": "james-harrison", "goals": 2 }
  ],
  "assisters": [
    { "player": "james-harrison", "assists": 1 }
  ],
  "mom": "james-harrison",
  "report": "What a game. Came from behind to win 3–2 in a thriller."
}
```

- `id` must be unique — use `YYYY-MM-DD-vs-slug` format
- `squad` lists all players who appeared
- `report` is plain text shown on the match page (can be `null`)

## Adding a player

Edit `src/data/players.json`:

```json
{
  "id": "first-last",
  "name": "First Last",
  "number": 7,
  "position": "Goalkeeper",
  "joined": "2025/26",
  "bio": "One line bio."
}
```

## Deploy

Push to `main` — GitHub Actions builds and deploys automatically.
