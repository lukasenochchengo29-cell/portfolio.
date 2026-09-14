# Portfolio

A responsive personal portfolio website built with React and Vite. The site is structured as a single-page developer portfolio with sections for overview, skills, projects, experience, education, certifications, and contact information.

## Overview

This project serves as a professional online portfolio for showcasing:

- personal and professional background
- technical skills and expertise
- featured projects and work samples
- education and certifications
- work experience and achievements
- contact details for networking or hiring opportunities

## Tech Stack

- React 19
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- npm

## Features

- modern single-page layout
- responsive design for desktop and mobile
- organized section-based component structure
- reusable data-driven content in the `src/data` folder
- clean styling separated by section
- production build support via Vite

## Project Structure

```bash
src/
├── assets/
│   └── images/
│       └── previews/
├── components/
│   ├── About/
│   ├── Certifications/
│   ├── Contact/
│   ├── Education/
│   ├── Experience/
│   ├── Footer/
│   ├── Hero/
│   ├── Navbar/
│   ├── Projects/
│   └── Skills/
├── data/
│   ├── certifications.js
│   ├── education.js
│   ├── experience.js
│   ├── projects.js
│   └── skills.js
├── styles/
│   ├── App.css
│   └── index.css
├── App.jsx
├── main.jsx
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Customization

To personalize the portfolio for your own profile, update the content in the files under `src/data/`:

- `src/data/skills.js`
- `src/data/projects.js`
- `src/data/experience.js`
- `src/data/education.js`
- `src/data/certifications.js`

You can also edit the individual component files in `src/components/` if you want to change the layout, text, or styles for each section.

## Deployment

This app can be deployed to services such as:

- Vercel
- Netlify
- GitHub Pages

Because it is a Vite app, the production build output is generated in the `dist/` folder.

## License

This project is intended for personal portfolio use and can be adapted for your own website or portfolio branding.
