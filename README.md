# Nikita Mahato – Portfolio

React 18 + Vite 5 single‑page portfolio showcasing skills, projects, and experience. Responsive layout, smooth scrolling, and a theme toggle.

## Features
- Dark/Light theme toggle
- Smooth scroll navigation with active section highlighting
- Responsive sections: Overview, About, Skills, Projects, Experience, Certifications, Achievements, Contact
- Back‑to‑top button
- Centralized content in a single data file

## Tech Stack
- React 18, Vite 5
- react-icons, react-scroll
- CSS modules (plain CSS files)

## Project Structure
```
portfolio/
├── public/
│  ├── Nikita_Mahato_resume.pdf
├── src/
│  ├── components/ (Overview, About, Skills, Projects, Experience, Certifications, Achievements, Contact, Navbar, BackToTop)
│  ├── styles/ (css files per section + global.css, App.css)
│  ├── data/constants.js  ← edit content here
│  ├── assets/ (project screenshots)
│  ├── App.jsx
│  └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started
### Prerequisites
- Node.js 18+
- npm 9+ (recommended)

### Setup
```bash
cd c:\reactPractice\portfolio
npm install
npm run dev
```


### Scripts
```bash
npm run dev      # start dev server
npm run build    # build to dist/
npm run preview  # preview production build locally
```

## Content Management
All portfolio content is defined in a single file:
- src/data/constants.js
  - OVERVIEW_DATA: name, subtitle, description, social links, resume button
  - ABOUT_DATA: paragraphs and stats
  - SKILLS_DATA: categorized skills and flat list
  - PROJECTS_DATA: featured projects with tech, features, images, GitHub links
  - EXPERIENCE_DATA: timeline entries
  - CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA: cards
  - CONTACT_DATA: email, phone, social links, copyright
  - RESUME_URL and CERTIFICATE_URL: external links to documents

Update screenshots in src/assets and adjust imports used by constants.js.

## Theming
- Theme state is toggled in App.jsx and passed to Navbar
- data-theme attribute switches CSS variables for dark/light modes

## Deployment
Any static host works (Netlify, Vercel, GitHub Pages). Build and deploy the dist/ folder:
```bash
npm run build
```


