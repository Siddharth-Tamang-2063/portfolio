export const profile = {
  name: 'Siddharth Tamang',
  role: 'Full-Stack Developer',
  tagline: 'MERN · TypeScript · GSAP · AI-Powered Workflow',
  location: 'Biratnagar, Nepal',
  phone: '+977 9811032347',
  email: 'siddharth20630901@gmail.com',
  linkedin: 'https://www.linkedin.com/in/siddharth20630901',
  github: 'https://github.com/Siddharth-Tamang-2063',
  summary:
    'Results-driven Full-Stack Developer with 2+ years delivering production-grade MERN stack applications — from MongoDB schema design to animated, responsive frontends. Proficient in TypeScript, secure REST API architecture (JWT, RBAC, rate limiting), and GSAP-powered UI. Owns the full SDLC independently.',
}

export const stats = [
  { value: 5, suffix: '+', label: 'MERN Apps Shipped' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 90, suffix: '+', label: 'Lighthouse Score' },
  { value: 300, suffix: '+', label: 'Catalog Items Handled' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    color: 'bg-neo-accent',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'GSAP / ScrollTrigger',
      'Responsive Design',
      'Next.js',
    ],
  },
  {
    title: 'Backend',
    color: 'bg-neo-secondary',
    skills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'JWT Auth',
      'RBAC',
      'Middleware',
      'MVC Architecture',
      'Rate Limiting',
      'Error Handling',
    ],
  },
  {
    title: 'Database',
    color: 'bg-neo-muted',
    skills: [
      'MongoDB',
      'Mongoose ODM',
      'Schema Design',
      'CRUD',
      'Indexing',
      'Pagination & Filtering',
    ],
  },
  {
    title: 'State / DX',
    color: 'bg-neo-white',
    skills: [
      'Zustand',
      'Context API',
      'React Hooks',
      'React Router v6',
      'Vite',
      'Postman',
      'DevTools',
    ],
  },
  {
    title: 'DevOps',
    color: 'bg-neo-secondary',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Vercel',
      'Netlify',
      'Docker',
      'Vitest / Jest',
    ],
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer',
    company: 'Freelance / Self-Employed (Remote)',
    period: 'Jan 2024 – Present',
    points: [
      'Delivered 5+ production MERN applications end-to-end: frontend UI, Express.js REST APIs, MongoDB schema design, and Vercel deployment for startup clients.',
      'Architected JWT-secured APIs with RBAC middleware, request validation, rate limiting, and centralized error handling in MVC structure.',
      'Adopted TypeScript across React frontends and Node.js backends — strict typing eliminated runtime errors and improved maintainability.',
      'Engineered GSAP timeline & ScrollTrigger systems — pinned sections, parallax, staggered reveals — achieving sub-2s TTI with 90+ Lighthouse scores.',
      'Built server-side pagination, filtering, and search APIs for 300+ item product catalogs paired with optimized React query patterns.',
    ],
  },
]

export const projects = [
  {
    title: 'Deadstock Thrift',
    subtitle: 'Full-Stack E-Commerce Platform',
    year: '2024',
    url: 'https://deadstock-thrift-official.vercel.app',
    color: 'bg-neo-accent',
    description:
      'Full MERN e-commerce app: product listings, cart, checkout, JWT auth with RBAC (buyer/admin), Mongoose schema design, server-side pagination & filtering APIs.',
    stack: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'JWT', 'Tailwind'],
  },
  {
    title: 'BuzzCraft Media',
    subtitle: 'Digital Marketing Agency Site',
    year: '2024',
    url: 'https://buzzcraft-media.vercel.app',
    color: 'bg-neo-secondary',
    description:
      'Complex GSAP timelines: pinned sections, parallax, staggered reveals. TypeScript full stack with 90+ Lighthouse score via lazy loading and Vite code splitting.',
    stack: ['React', 'TypeScript', 'Node.js', 'GSAP', 'ScrollTrigger', 'Tailwind'],
  },
  {
    title: 'YS Studio',
    subtitle: 'Cart Management App',
    year: '2024',
    url: 'https://ys-studio.vercel.app',
    color: 'bg-neo-muted',
    description:
      'Zustand global state (add/remove/qty/totals), TypeScript REST API integration, optimistic UI updates. Core Web Vitals (LCP, CLS, FID) all green on mobile and desktop.',
    stack: ['React', 'TypeScript', 'Node.js', 'Zustand', 'Tailwind'],
  },
]

export const education = [
  {
    title: 'Diploma in Computer Engineering',
    place: 'Adarsha Secondary School, Biratnagar',
    date: 'Jul 2023',
    detail:
      'Coursework: DSA, Computer Networks, OS, DBMS, Web Technologies, OOP, Prompt Engineering, AI automations',
  },
  {
    title: 'Secondary Education — Electrical Engineering Track',
    place: 'Satyanarayan SS',
    date: 'Apr 2022',
    detail: 'GPA 3.24. Foundation in engineering fundamentals and electronics.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
