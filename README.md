# Kai Matcha House

Traditional Matcha With A Modern Twist — Matcha Cafe Based in Berlin.

## Tech Stack

- **React** + **Vite** — Fast development environment
- **Tailwind CSS** — Utility-first styling
- **React Router** — Client-side routing
- **Google Maps API** — Location display

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Home/            # HeroVideoBackground (full-bleed video)
│   ├── Layout/          # Navbar, Footer, Layout wrapper
│   ├── Newsletter/      # Newsletter popup modal
│   └── UI/              # Reusable UI components
├── pages/
│   ├── Home.jsx         # Landing page
│   ├── Shop.jsx         # Products page
│   ├── Cafe.jsx         # Location & hours
│   ├── Menu.jsx         # Drinks & food menu
│   ├── About.jsx        # Our story
│   └── Contact.jsx      # Contact form
├── assets/
│   ├── fonts/           # Self Modern font family
│   └── videos/          # Hero background MP4
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Global styles & Tailwind
```

## Hero video (Home)

The landing hero uses full-width background video: `src/assets/videos/A027_06101456_C093_2.mp4` (imported in `HeroVideoBackground.jsx`).

**Optional poster (blur → sharp handoff):** add a progressive JPEG as `public/videos/hero-poster.jpg`. Until this file exists, a soft gradient shows while the video loads.

Extract first frame (example):

```bash
ffmpeg -i src/assets/videos/A027_06101456_C093_2.mp4 -vframes 1 -q:v 2 public/videos/hero-poster.jpg
```

For a **progressive** JPEG (loads top-to-bottom in browsers), re-encode with ImageMagick:

```bash
convert public/videos/hero-poster.jpg -interlace Plane -quality 82 public/videos/hero-poster.jpg
```

**Performance:** large MP4 files slow first visit — consider compressing (e.g. H.264, 1080p max, CRF 23–28) or hosting on a CDN.

**Accessibility:** if the user has `prefers-reduced-motion: reduce`, autoplay/loop is disabled and the first frame is shown static.

### Other video options (if you iterate later)

- **`<video>` + CSS only:** no poster file — blur the video with `filter: blur()` until `canplay`, then remove blur (simpler, slightly heavier decode).
- **Embedded YouTube/Vimeo:** easy hosting, but branding, cookies, and less control over the hero look.
- **`<video>` + `poster` attribute only:** one line, no blur transition — browser shows poster until the first frame is ready.

## Configuration

### Google Maps API

To enable the map on the Cafe page, add your Google Maps API key:

1. Get an API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API
3. Replace `YOUR_GOOGLE_MAPS_API_KEY` in `src/pages/Cafe.jsx`

### Mailchimp Integration

To connect the newsletter form to Mailchimp:

1. Create a Mailchimp account and audience
2. Get your embedded form action URL
3. Update the form in `src/components/Newsletter/NewsletterModal.jsx`

## Custom Fonts

The project uses Self Modern font family located in `src/assets/fonts/`. The fonts are loaded via `@font-face` in `index.css`.

## Customization

### Colors

Edit the color palette in `tailwind.config.js`:

- `matcha` — Green shades for primary elements
- `cream` — Warm neutrals for backgrounds

## License

© 2024 Kai Matcha House. All rights reserved.
