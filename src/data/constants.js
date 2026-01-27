// E-Commerce Assets 
import ecommerceHome from '../assets/ecommerceApp/home.png' 
import ecommerceBuy from '../assets/ecommerceApp/buy.png' 
import ecommerceCart from '../assets/ecommerceApp/cart.png' 
import ecommerceCheckout from '../assets/ecommerceApp/checkout.png' 
// Warehouse Assets 
import warehouseDashboard from '../assets/warehouseManagementApp/dashboard.png' 
import warehouseInventory from '../assets/warehouseManagementApp/inventory.png' 
import warehouseAdd from '../assets/warehouseManagementApp/add.png' 
import warehouseProductAdded from '../assets/warehouseManagementApp/productAdded.png' 
import warehouseTransaction from '../assets/warehouseManagementApp/transactionReports.png' 
import warehouseUpload from '../assets/warehouseManagementApp/uploadExcel.png'
import warehouseAbout from '../assets/warehouseManagementApp/about.png'



export const RESUME_URL = "/Nikita_Mahato_resume.pdf";

export const CERTIFICATE_URL =
  "https://drive.google.com/file/d/1o2qI3Nat-FHQoqCx6CsGviTIzEQ3o4Uu/view?usp=sharing";
  

/* =======================
   OVERVIEW
======================= */

export const OVERVIEW_DATA = {
  greeting: "Hi, I'm",
  name: "Nikita Mahato",
  subtitle: "Full Stack Developer | Java | Spring Boot | React",
  description:
    "Focused on building reliable, production-ready applications across backend and frontend. Experienced in Java-based backend systems, React user interfaces, and offline desktop applications.",
  resumeButton: "View Resume",
  availability: {
    label: "Currently Available for",
    role: "Entry-Level Software Engineer / Backend / Frontend Roles"
  },
  social: {
    linkedin: "https://linkedin.com/in/nikita-mahato-17289b325",
    github: "https://github.com/Nikita-929",
    email: "mahatonikita929@gmail.com"
  }
};

/* =======================
   ABOUT
======================= */

export const ABOUT_DATA = {
  title: "About Me",
  paragraphs: [
    "I am a B.Tech Computer Science (AI & ML) graduate from Meghnad Saha Institute of Technology with a strong interest in full-stack and frontend engineering. I enjoy building clean, maintainable applications that solve real-world problems.",
    "During my internship at ARS Technologies, I worked on an offline-first warehouse management desktop application, handling everything from backend REST APIs to React-based user interfaces and Windows packaging.",
    "I am interested in backend development using Java and Spring Boot, along with frontend development using React. I am adaptable to new technologies and can quickly learn tools and frameworks. I value clean architecture, good UI/UX, and writing code that is reliable and easy to scale."
  ],
  stats: [
    { value: "7.86", label: "CGPA" },
    { value: "3+", label: "Major Projects" },
    { value: "2", label: "Internships" },
    { value: "Full Stack", label: "Experience" }
  ]
};

/* =======================
   SKILLS
======================= */

export const SKILLS_DATA = {
  categories: {
    backend: {
      title: "Backend",
      skills: [
        "Python",
        "Java",
        "Spring Boot",
        "REST APIs",
        "Hibernate",
        "Spring Data JPA",
        "Maven",
        "Swagger/OpenAPI"
      ]
    },
    frontend: {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "React Router",
        "Axios"
      ]
    },
    database: {
      title: "Databases",
      skills: ["PostgreSQL", "SQLite", "MySQL"]
    },
    devops: {
      title: "DevOps & Tools",
      skills: ["Docker", "Docker Compose", "Git", "GitHub", "Postman"]
    },
    desktop: {
      title: "Desktop Applications",
      skills: ["Electron", "Windows Installer", "Offline Applications"]
    }
  },
  flatList: [
    "Java",
    "Spring Boot",
    "React",
    "REST APIs",
    "SQLite",
    "PostgreSQL",
    "Docker",
    "Electron",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "OOP",
    "MVC",
    "SDLC"
  ]
};

/* =======================
   PROJECTS
======================= */

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "E-Commerce Application",
    description:
      "A full-stack e-commerce application featuring REST APIs, role-based workflows, and containerized deployment.",
    tech: ["Spring Boot 3.1.4", "Java 17", "React 18", "PostgreSQL 15", "Docker"],
    features: [
      "Designed RESTful APIs for product, category, and order management",
      "Implemented Controller–Service–Repository architecture with global exception handling",
      "Dockerized backend and database using Docker Compose",
      "Documented APIs using Swagger for easy testing and integration"
    ],
    images: [ecommerceHome, ecommerceBuy, ecommerceCart, ecommerceCheckout],
    github: "https://github.com/Nikita-929/ecommerce-app"
  },
  {
    id: 2,
    title: "Warehouse Management System (Desktop + Web)",
    description:
      "An offline-first warehouse management system built as a desktop application with a bundled backend and frontend.",
    tech: ["Spring Boot 3.2", "Java 17", "React 18", "SQLite", "Electron"],
    features: [
      "Single-machine desktop deployment with bundled Spring Boot backend and React frontend",
      "Offline-first architecture using SQLite for local data persistence",
      "Product management, transaction tracking, and Excel file upload with validation",
      "Advanced search, filtering, and report generation",
      "Packaged as a Windows installer for easy distribution and installation"
    ],
    images: [warehouseDashboard, warehouseInventory, warehouseAdd, warehouseProductAdded, warehouseTransaction, warehouseUpload, warehouseAbout],
    github:
      "https://github.com/Nikita-929/warehouse-management-desktop"
  }
];

/* =======================
   EXPERIENCE
======================= */

export const EXPERIENCE_DATA = [
  {
    title: "Full Stack Development Intern",
    company: "ARS Technologies, Kolkata",
    period: "Aug 2025 – Sept 2025",
    description: [
      "Developed and packaged an offline-first warehouse management desktop application using Spring Boot, React, Electron, and SQLite, delivering REST APIs, local persistence, and a Windows installer."
    ],
    highlights: [
      "Spring Boot",
      "React",
      "Electron",
      "SQLite",
      "Offline Desktop Systems"
    ]
  }
];

/* =======================
   CERTIFICATIONS
======================= */

export const CERTIFICATIONS_DATA = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    description:
      "Covered supervised learning concepts including regression, classification, and practical model implementation."
  }
];

/* =======================
   ACHIEVEMENTS
======================= */

export const ACHIEVEMENTS_DATA = [
  {
    title: "Smart India Hackathon 2024",
    description:
      "Participated in a national-level hackathon focused on solving real-world problem statements."
  },
  {
    title: "SAP Hackfest 2025",
    description:
      "Participated in a competitive hackathon emphasizing innovation and technical problem-solving."
  },
  {
    title: "Teaching Experience",
    description:
      "Teach school-level subjects up to Class 10, helping students build strong academic foundations."
  }
];

/* =======================
   CAREER INTERESTS
======================= */

export const CAREER_DATA = {
  title: "Career Interests",
  roles: [
    "Entry-Level Software Engineer",
    "Backend Engineer (Java / Spring Boot)",
    "Frontend Engineer (React)",
    "Full Stack Developer"
  ],
  focusAreas: [
    "Backend systems",
    "Frontend user interfaces",
    "Offline and desktop applications",
    "Production-ready software"
  ]
};

/* =======================
   CONTACT
======================= */

export const CONTACT_DATA = {
  title: "Get In Touch",
  description:
    "I am actively looking for entry-level opportunities in backend, frontend, and full-stack development. Feel free to reach out for collaboration or opportunities.",
  email: "mahatonikita929@gmail.com",
  phone: "+91 8240551015",
  linkedin: "https://linkedin.com/in/nikita-mahato-17289b325",
  github: "https://github.com/Nikita-929",
  copyright:
    "© 2026 Nikita Mahato. All rights reserved."
};
