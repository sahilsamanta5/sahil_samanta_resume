export type MediaType =
  | "image"
  | "video"
  | "audio"

export interface ShowcaseItem {
  id: number;

  title: string;

  description: string;

  category:
    | "Software"
    | "AI"
    | "Music"
    | "Creative"

  type: MediaType;

  thumbnail: string;

  source: string;

  link?: string;
  linkText?: string;
  featured?: boolean;
}

export const filters = [
  "Featured",
  "Software",
//   "AI",
//   "Music",
  "Creative",
  "All",
];

export const showcaseData: ShowcaseItem[] = [
    {
        id: 1,
        title: "Apearenz Web Platform",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/apearenz.png",
        source: "/images/projects/apearenz.png",
        description: "Developed and deployed a modern single-page corporate website using Next.js. Configured Docker, Nginx, and production hosting while optimizing responsiveness, performance, and deployment workflows.",
        link: "https://apearenz.com/",
        linkText: "Visit Website",
        featured: true
    },
    {
        id: 2,
        title: "Project Katalyse AI",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/katalyse.jpg",
        source: "/images/projects/katalyse.jpg",
        description: "Developed and maintained a responsive Shopify-integrated AI chat widget supporting product discovery and customer interactions. Built backend APIs, integrated Shopify GraphQL, and created Looker Studio dashboards to monitor user engagement and business metrics.",
        featured: true
    },
    {
        id: 3,
        title: "Sri Ramanujavani",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/sriramanujavani.png",
        source: "/images/projects/sriramanujavani.png",
        description: "Developed a full-stack content management system (CMS) with secure administrative dashboards, dynamic content management, CRUD operations, and production deployment on Ubuntu using Apache2.",
        link: "https://sriramanujavani.com/",
        linkText: "Visit Website",
        featured: true
    },
    {
        id: 4,
        title: "Dhanwise Fintech",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/dhanwise.png",
        source: "/images/projects/dhanwise.png",
        description: "Developed a responsive financial technology platform connecting users with verified financial advisor Raman Khandelwal through a modern, type-safe frontend architecture.",
        link: "https://dhanwise.com/",
        linkText: "Visit Website"
    },
    {
        id: 5,
        title: "ITC Sunrise & PujaApp Virtual Selfie With Maa",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/sunrise.png",
        source: "/images/projects/sunrise.png",
        description: "Built an AI-powered virtual selfie platform within three days for a large Durga Puja cultural initiative. Developed the complete frontend, Firebase backend, Firestore database, administrative dashboard, AI-powered background removal using Dezgo APIs, image enhancement controls, and Google Tag Manager integration before deploying the application with Firebase Hosting.",
        link: "https://thepuja.app/",
        linkText: "Visit Website",
        featured: true
    },
    {
        id: 6,
        title: "BIMS Startup Catalysts",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/bims_startup_catalysts.png",
        source: "/images/projects/bims_startup_catalysts.png",
        description: "Developed the official Entrepreneurship Cell platform with custom Django administration, mentor management, alumni management, contribution tracking, and blog approval workflows. The platform represented the institution during the IIT Bombay E-Cell competition and was built within three days.",
    },
    {
        id: 7,
        title: "Locope SaaS Platform",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/locope.png",
        source: "/images/projects/locope.png",
        description: "Designed and developed a multi-vendor fitness and e-commerce SaaS platform supporting administrators, gym owners, trainers, staff, and customers. Implemented role-based access control, PhonePe payment integration, REST APIs for Flutter applications, community features, QR attendance, booking management, and analytical dashboards.",
        featured: true
    },
    {
        id: 8,
        title: "Bruberry Café Website",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/bruberry.png",
        source: "/images/projects/bruberry.png",
        description: "Built a custom café website with an administrative dashboard for managing menu items, categories, hero section content, promotional banners, and website imagery. Created an intuitive content management experience that allows staff to update website content efficiently while maintaining a responsive and visually consistent customer experience."
    },
    {
        id: 9,
        title: "MyActivt",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/activt.png",
        source: "/images/projects/activt.png",
        description: "Built a responsive marketing website for a fitness equipment brand focused on product presentation, brand storytelling, and lead generation. Developed engaging landing page sections, product showcases, promotional content, and mobile-friendly layouts to enhance user engagement and brand visibility."
    },
    {
        id: 10,
        title: "ActivCMS",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/activcms.png",
        source: "/images/projects/activcms.png",
        description: "Worked on a custom real estate website builder platform that allowed businesses to generate and manage websites from configurable templates. Implemented dynamic section management, content editing, image updates, and template customization features using Django, Bootstrap 5, and AJAX. Integrated property and business data from ActivCRM, enabling automated content synchronization between CRM and website platforms.",
        featured: true
    },
    {
        id: 11,
        title: "Precision Works Catalog",
        category: "Creative",
        type: "image",
        thumbnail: "/images/projects/precision_catalog.png",
        source: "/images/projects/precision_catalog.png",
        description: "Created a marketing catalog for an industrial manufacturing company, transforming technical product specifications into visually engaging and easy-to-navigate layouts. Designed product showcases, branding assets, and promotional pages using Canva while ensuring consistency, readability, and professional presentation standards."
    },
    {
        id: 12,
        title: "Padrone Catalog & Brand Identity",
        category: "Creative",
        type: "image",
        thumbnail: "/images/projects/padrone_catalog.png",
        source: "/images/projects/padrone_catalog.png",
        description: "Developed the visual identity and marketing catalog for an industrial manufacturing company. Designed the company logo, branding assets, and product catalog layouts, creating a cohesive brand experience that effectively presented technical product information through clear and visually engaging design."
    },
    {
        id: 13,
        title: "PlanTech Engineering Services Catalog",
        category: "Creative",
        type: "image",
        thumbnail: "/images/projects/plantech_catalog.png",
        source: "/images/projects/plantech_catalog.png",
        description: "Developed a corporate marketing catalog for an engineering consulting firm, highlighting service portfolios, technical competencies, and project expertise. Designed visually structured layouts, branded content, and presentation materials that transformed complex engineering concepts into accessible and professional marketing collateral."
    }


    // {
    //     id: 3,

    //     title: "Perfect Cover Song",

    //     description:
    //     "Acoustic singing cover.",

    //     category: "Music",

    //     type: "audio",

    //     thumbnail: "/showcase/song-cover.jpg",

    //     source: "/audio/perfect.mp3",
    // },
    // {
    //     id: 4,

    //     title: "Portfolio Walkthrough",

    //     description:
    //     "Video demonstration of portfolio.",

    //     category: "Software",

    //     type: "video",

    //     thumbnail: "/showcase/video-thumb.jpg",

    //     source: "/videos/demo.mp4",
    // },
];