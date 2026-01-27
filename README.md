# Nikita Mahato - Portfolio Website

A modern, responsive single-page portfolio website built with React 18 + Vite featuring a high-contrast neon design with smooth animations and glass morphism effects.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🎨 **High-Contrast Design**: Dark background with neon cyan, pink, and yellow accents
- 🎭 **Glass Morphism**: Modern glassmorphic UI effects with backdrop blur
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🚀 **Smooth Animations**: CSS animations for project images, floating elements, and interactions
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes
- 📜 **Smooth Scroll Navigation**: Active section highlighting with smooth scrolling
- 📥 **Resume Download**: Download resume from multiple sections
- 🔗 **Social Links**: Direct links to LinkedIn, GitHub, and email
- ♿ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- 📊 **SEO Optimized**: Meta tags, semantic markup, proper heading hierarchy

## 📁 Project Structure

```
portfolio/
├── public/
│   └── (assets directory for future images)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── BackToTop.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── app.css
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   ├── experience.css
│   │   ├── certifications.css
│   │   ├── achievements.css
│   │   ├── contact.css
│   │   └── back-to-top.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone or navigate to the project directory**:
```bash
cd c:\reactPractice\portfolio
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm run dev
```

The portfolio will automatically open in your default browser at `http://localhost:3000`

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally before deployment.

## 🎨 Design System

### Color Palette
- **Primary Color**: `#00d4ff` (Neon Cyan)
- **Secondary Color**: `#ff006e` (Hot Pink)
- **Accent Color**: `#ffbe0b` (Bright Yellow)
- **Dark Background**: `#0a0a0a`
- **Light Background**: `#1a1a1a`

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Headings**: 700-800 font weight
- **Body Text**: 400-500 font weight

### Effects
- **Glass Morphism**: `backdrop-filter: blur(10px)` with semi-transparent backgrounds
- **Glow Effects**: Text shadow and box shadows with neon colors
- **Animations**: Smooth transitions (0.3s-3s) with ease-in-out timing

## 📋 Sections

### 1. **Hero Section**
- Welcoming introduction with animated title
- Call-to-action buttons for resume and projects
- Social media icons (LinkedIn, GitHub, Email)
- Floating card with current availability

### 2. **About Section**
- Personal summary and background
- Education and experience highlights
- Stats display (CGPA, projects, internship, tech stacks)
- Highlight cards for quick information

### 3. **Skills Section**
- Categorized skills (Backend, Frontend, Database, DevOps, Languages, ML)
- Interactive skill cards with hover effects
- Complete skill set cloud view
- Category toggle functionality

### 4. **Projects Section**
- Two featured projects with detailed information
- Tech stack badges for each project
- 3 bullet points describing key features
- GitHub link buttons
- Animated project images with sliding motion
- Live demo buttons (with "Not Available" badge when applicable)

### 5. **Experience Section**
- Timeline layout for professional experience
- Company, role, and duration information
- Detailed job responsibilities
- Experience tags/technologies used
- Animated timeline markers with pulse effect

### 6. **Certifications Section**
- Certification cards with issuer information
- Bouncing animation on icons
- Clear descriptions of what was learned

### 7. **Achievements Section**
- Achievement cards with rotating icons
- Hackathon participation and teaching experience
- Hover scale and transform effects

### 8. **Contact Section**
- Multiple contact methods (email, phone, LinkedIn, GitHub)
- Quick action buttons
- Contact footer with copyright and credits
- Call-to-action for getting in touch

### 9. **Navigation**
- Fixed navbar with smooth scrolling
- Active section highlighting
- Mobile hamburger menu
- Dark/Light mode toggle
- Responsive design

### 10. **Back to Top Button**
- Floating button appears after scrolling
- Smooth scroll animation
- Positioned for mobile and desktop

## 🎯 Key Features Implementation

### Smooth Scroll Navigation
```javascript
// Uses react-scroll for smooth scrolling with active section tracking
import { Link as ScrollLink } from 'react-scroll'
```

### CSS Animations
- **Hero Title Glow**: Pulsing text shadow effect
- **Project Images**: Sliding up-down motion on hover
- **Timeline Markers**: Pulsing glow effect
- **Floating Cards**: Smooth vertical floating motion
- **Bounce Animations**: Icon animations on certifications

### Responsive Grid System
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Breakpoints: 480px, 768px, 1024px

### Dark/Light Mode
- CSS custom properties (variables) for theme switching
- `[data-theme="dark"]` and `[data-theme="light"]` selectors
- Smooth color transitions

## 🔧 Technologies Used

### Core
- **React 18.2.0**: UI framework
- **Vite 5.0.0**: Build tool and dev server
- **React DOM 18.2.0**: DOM rendering

### UI & Icons
- **React Icons 5.0.1**: Icon library (FaLinkedin, FaGithub, FaEnvelope, etc.)
- **React Scroll 1.8.10**: Smooth scrolling library

### Styling
- **CSS3**: Grid, Flexbox, Animations, Custom Properties
- **CSS Transitions**: Smooth hover effects
- **Backdrop Filters**: Glass morphism effects

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Laptop**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- ✓ Semantic HTML structure
- ✓ ARIA labels on interactive elements
- ✓ Keyboard navigation support
- ✓ Color contrast meets WCAG standards
- ✓ Focus indicators on interactive elements
- ✓ Alt text and descriptive link text

## 🔍 SEO Optimization

- ✓ Meta description tag
- ✓ Meta viewport for mobile devices
- ✓ Semantic HTML5 elements
- ✓ Proper heading hierarchy (H1, H2, H3)
- ✓ Image alt attributes
- ✓ Descriptive link text
- ✓ Open Graph support ready

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy using Netlify CLI or drag-and-drop dist/ folder
```

### GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/portfolio"

# Build and deploy
npm run build
```

## 📝 Resume Download

The resume download functionality creates a text file with all information from the resume content. To customize:

1. Edit the `downloadResume()` function in `Hero.jsx` and `Contact.jsx`
2. Modify the `resumeContent` variable with your actual resume data
3. Or upload an actual PDF file to the `public/` folder and link to it

## 🎓 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Customization

1. **Change Colors**: Update CSS variables in `global.css` `:root` selector
2. **Add Projects**: Add new objects to `projectsData` array in `Projects.jsx`
3. **Update Skills**: Modify `skillsData` object in `Skills.jsx`
4. **Change Fonts**: Update `font-family` in `global.css`
5. **Add Images**: Place images in `public/` folder and reference in components
6. **Modify Content**: Edit text directly in component files or create a `data.js` file

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

- **Email**: mahatonikita929@gmail.com
- **LinkedIn**: [linkedin.com/in/nikita-mahato-17289b325](https://linkedin.com/in/nikita-mahato-17289b325)
- **GitHub**: [github.com/Nikita-929](https://github.com/Nikita-929)

## 🎉 Acknowledgments

- React documentation
- Vite documentation
- React Icons library
- CSS animations inspiration from modern web design trends

---

Made with 💜 using React + Vite
