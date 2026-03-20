Live demo : https://developer-feed-gray.vercel.app/

# DevFeed

A developer article feed built with Next.js that pulls articles from the [dev.to](https://dev.to) public API. Browse the latest posts from the developer community and bookmark ones you want to read later.

## Features

- Live article feed from dev.to (title, author, tags, cover image, reactions, comments, reading time)
- Bookmark articles and persist them across sessions via localStorage
- Dedicated bookmarks page
- Single article view with full rendered content, cover image, author info, and bookmark button
- Skeleton loading UI while articles stream in
- Error boundary with retry support
- Fully responsive (1 → 2 → 3 column grid)

## Tech Stack

| Tool         | Version | Role                   |
| ------------ | ------- | ---------------------- |
| Next.js      | 16.2.0  | Framework (App Router) |
| React        | 19.2.4  | UI                     |
| Tailwind CSS | 4       | Styling                |
| Lucide React | latest  | Icons                  |

## Project Structure

```
app/
├── actions/
│   ├── getAllPostsAction.js    # Fetches article list from dev.to API
│   └── getSinglePostAction.js # Fetches a single article by ID
├── articles/
│   └── [id]/
│       └── page.jsx           # Single article view
├── bookmark/
│   └── page.jsx               # Saved bookmarks page
├── components/
│   ├── Header.jsx             # Sticky nav with bookmark count badge
│   ├── PostCard.jsx           # Individual article card
│   └── BookmarkBtn.jsx        # Bookmark toggle button
├── context/
│   └── BookmarksContext.jsx   # Global bookmark state + localStorage
├── loading.js                 # Skeleton shown while page streams in
├── error.js                   # Error boundary with retry button
├── layout.js                  # Root layout + providers
└── page.js                    # Home feed page
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data Source

Articles are fetched from the public dev.to API — no API key required:

```
GET https://dev.to/api/articles          # article list
GET https://dev.to/api/articles/:id      # single article
```

Both actions throw on non-2xx responses, which surfaces the error boundary.

## How Bookmarks Work

Bookmarks are stored in `localStorage` under the key `bookmarked_posts`. The `BookmarksProvider` initializes with an empty array on both server and client (avoiding hydration mismatches), then reads localStorage after mount in a `useEffect`.
