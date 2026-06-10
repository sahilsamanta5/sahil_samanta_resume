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
}

export const filters = [
  "All",
  "Software",
//   "AI",
//   "Music",
  "Creative",
];

export const showcaseData: ShowcaseItem[] = [
    {
        id: 1,
        title: "Apearenz Web Platform",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/apearenz.png",
        source: "/images/projects/apearenz.png",
        description: "Architected a high-performance single-page application for a corporate client. Engineered a scalable, custom user interface to meet strict specifications, and optimized the build pipeline by containerizing the application with Docker and configuring Nginx for secure domain routing.",
        link: "https://apearenz.com/",
        linkText: "Visit Website"
    },
    {
        id: 2,
        title: "Project Katalyse AI",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/katalyse.jpg",
        source: "/images/projects/katalyse.jpg",
        description: "Engineered a scalable, mobile-responsive e-commerce chat widget designed for seamless integration across Shopify storefronts. Developed optimized backend APIs to power dynamic chat-based purchasing and algorithmic recommendation engines, while configuring Looker Studio dashboards to track critical conversion metrics.",
    },
    {
        id: 3,
        title: "Sri Ramanujavani",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/sriramanujavani.png",
        source: "/images/projects/sriramanujavani.png",
        description: "Developed a full-stack content management platform featuring robust CRUD operations and a secure, interactive administrative dashboard to streamline data entry. Successfully configured and deployed the production environment on an Ubuntu server utilizing Apache2 to ensure optimal system stability.",
        link: "https://sriramanujavani.com/",
        linkText: "Visit Website"
    },
    {
        id: 4,
        title: "Dhanwise Fintech",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/dhanwise.png",
        source: "/images/projects/dhanwise.png",
        description: "Engineered a high-performance financial technology SPA designed to connect users with verified advisors. Architected a strictly typed frontend infrastructure to ensure long-term maintainability, delivering an optimized, cross-device user experience.",
        link: "https://dhanwise.com/",
        linkText: "Visit Website"
    },
    {
        id: 5,
        title: "Sunrise Virtual Selfie",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/sunrise.png",
        source: "/images/projects/sunrise.png",
        description: "Developed a responsive virtual photo booth enabling remote users to generate customized, interactive images. Implemented automated framing and processing logic via AI integration to ensure instant, high-quality rendering for a high-traffic community initiative.",
        link: "https://thepuja.app/",
        linkText: "Visit Website"
    },
    {
        id: 6,
        title: "BIMS Startup Catalysts",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/bims_startup_catalysts.png",
        source: "/images/projects/bims_startup_catalysts.png",
        description: "Engineered a dynamic, responsive web platform for the college Entrepreneurship Cell. Architected a custom Django administrative dashboard for real-time management of team structures, mentor networks, and user contributions. The platform served as the primary digital showcase during a core presentation at IIT Bombay.",
    },
    {
        id: 7,
        title: "Locope SaaS Platform",
        category: "Software",
        type: "image",
        thumbnail: "/images/projects/locope.png",
        source: "/images/projects/locope.png",
        description: "Architected a comprehensive multi-tenant SaaS platform for fitness centers, implementing strict role-based access control (RBAC) for administrators, gym owners, and staff. Engineered a robust Django backend to support a custom social community feed, an approval-based e-commerce marketplace, and dynamic class-booking with PhonePe integration. Delivered data-rich analytical dashboards for revenue tracking and a QR-based attendance system bridging physical and digital customer management.",
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
        description: "Worked on a custom real estate website builder platform that allowed businesses to generate and manage websites from configurable templates. Implemented dynamic section management, content editing, image updates, and template customization features using Django, Bootstrap 5, and AJAX. Integrated property and business data from ActivCRM, enabling automated content synchronization between CRM and website platforms."
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