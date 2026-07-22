# Shehan — Interactive React Portfolio

A modern, responsive and highly interactive software engineer portfolio built with React and Vite.

## Highlights

- Animated engineering-themed hero section
- Dark and light themes with saved preference
- Command palette using `Ctrl/Cmd + K`
- Project filters and interactive project detail modals
- Scroll reveal effects and scroll progress indicator
- Technology marquee, experience timeline and skills console
- Responsive mobile navigation
- Reduced-motion accessibility support
- Profile content centralized in `src/portfolioData.js`

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Customize

Edit `src/portfolioData.js` to change:

- Name, role, location and contact links
- Introductory statement and about text
- Projects, technologies and descriptions
- Experience, education and certifications

Edit CSS variables at the top of `src/styles.css` to change the visual theme.

## Deploy

The generated `dist` folder can be deployed to Vercel, Netlify, GitHub Pages, Firebase Hosting or another static hosting provider.

## Profile image and certifications

- Replace `public/profile-placeholder.svg` with your own image, or update `profileImage` in `src/portfolioData.js`.
- Add or edit certificate cards in the `certifications` array inside `src/portfolioData.js`.
