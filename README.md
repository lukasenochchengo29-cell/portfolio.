# Portfolio

A modern, professional developer portfolio built with React and Vite.

## Technologies

- React 19
- JavaScript (ES6+)
- HTML5 & CSS3
- Vite (build tool)
- Git / GitHub

## Project Structure

```
src/
├── assets/images/       → Static images (profile photo, project screenshots)
├── components/          → One folder per section, each with .jsx + .css
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Education/
│   ├── Certifications/
│   ├── Experience/
│   ├── Contact/
│   └── Footer/
├── data/                → JS files exporting arrays/objects for dynamic content
├── pages/               → Full page components (if you add routing later)
├── styles/              → Global and app-level stylesheets
├── App.jsx              → Root component that assembles all sections
└── main.jsx             → Entry point that renders App into the DOM
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the URL shown in your terminal (usually http://localhost:5173).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Development Guide

1. Start with the **Hero** section — get a landing section looking great.
2. Move to **Navbar** — add navigation links that scroll to each section.
3. Build out **About**, **Skills**, **Projects** one at a time.
4. Fill in the data files in `src/data/` with your real information.
5. Style each component using its dedicated CSS file.
6. Add animations and responsive design as a final polish.

## License

This project is for personal use and portfolio purposes.
