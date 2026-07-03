"use client"
import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb";
import { ShowcaseItem } from "../components/showcase/showcaseData";
import { RotatingStat } from "../components/RotatingStats";

const stats = [
  "12+ Applications",
  "12+ Deployments",
  "25+ Projects",
  "40+ APIs",
  "3+ E-Commerce",
  "5+ CMS",
];
export default {
    background: {
        hero: "/images/bg/en/hero_bg_1.jpg",
        contact: "/images/bg/en/contact_bg.png"
    }, 
    header: {
        nav: [
            { label: "HOME",     href: "#home",     icon: TbHome },
            { label: "SKILLS",   href: "#profile",   icon: TbTerminal2 },
            { label: "ABOUT",    href: "#about",    icon: TbUser },
            { label: "PROJECTS", href: "#showcase", icon: TbLayoutGrid },
            { label: "CONTACT",  href: "#contact",  icon: TbMail },
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin },
        ],
        collapseText: "COLLAPSE",
        name: "Sahil Samanta",
        position: "BACKEND SOFTWARE ENGINEER",
        availability: "AVAILABLE WORLDWIDE",
        since: "CODING SINCE 2021",
        experience: "2+ YEARS IN INDUSTRY"
    },
    
    hero: {
        title: () => (
            <>
                <span className="xl:whitespace-nowrap">
                    Developed{" "}
                </span>

                <span className="xl:whitespace-nowrap">
                    <RotatingStat stats={stats} />{" "}
                </span>
            </>
        ),
        para: "Backend Software Engineer specializing in scalable APIs, cloud-native applications, and modern backend architecture using Python, Django, and FastAPI. Passionate about AI, distributed systems, and building software that scales.",
        cta1: "Explore My Works",
        cta2: "Download CV",
        status: {
            head: "Recruitment Status",
            stat: () => (
                <>
                    Based in <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Open to full-time, remote, hybrid, and relocation opportunities.
                </>
            )
        },
        model: "/images/model/sahil_en.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Technical Skills", icon: TbCode },
            { id: "education", label: "Education", icon: TbSchool },
            { id: "certs", label: "Certifications", icon: TbCertificate },
            { id: "hobbies", label: "Off-Duty", icon: TbActivity },
            { id: "languages", label: "Languages", icon: TbMessageCircle },
        ],
        skills: {
            technical: [
                { category: "Programming Languages", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] },
                { category: "Backend Engineering", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] },
                { category: "Frontend Engineering", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] },
                { category: "Databases", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] },
                { category: "Cloud & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] },
                { category: "Tools & Platforms", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] },
                { category: "Concepts", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]}
            ],
            education: [
                {
                    degree: "Master of Computer Applications (MCA)",
                    institution: "Manipal University Jaipur",
                    timeline: "2026 - Present",
                    description:
                    "Currently pursuing a master's degree with a focus on software engineering, distributed systems, cloud computing, and modern application development."
                },
                {
                    degree: "Bachelor of Business Administration (BBA)",
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata",
                    timeline: "2021 - 2024",
                    description:
                    "Graduated with a CGPA of 8.13/10. Developed strong analytical, problem-solving, and business management skills, providing valuable insight into designing software that aligns with real-world business needs."
                }
            ],
            hobbies: [
                {
                    title: "Game Development",
                    icon: TbDeviceGamepad2,
                    description:
                        "I enjoy learning Unity, C#, and game design by building small prototypes and studying gameplay mechanics, level design, and interactive systems."
                },
                {
                    title: "Music & Singing",
                    icon: TbMusic,
                    description:
                        "Singing is one of my favorite creative outlets. It helps me relax, improve focus, and maintain a healthy balance alongside software development."
                },
                {
                    title: "Cooking & Creativity",
                    icon: TbChefHat,
                    description:
                        "Cooking teaches patience, attention to detail, and continuous experimentation—qualities I also apply when designing and building software."
                },
                {
                    title: "Learning Languages & Culture",
                    icon: TbWorld,
                    description:
                        "I'm currently learning Japanese and enjoy exploring different cultures, technologies, and ideas through travel, books, and online communities."
                }
            ],
            languages: [
                { language: "English", proficiency: "Professional Working Proficiency" },
                { language: "Hindi", proficiency: "Native / Bilingual Proficiency" },
                { language: "Bengali", proficiency: "Native / Bilingual Proficiency" },
                { language: "Japanese", proficiency: "Beginner (JLPT N5)" }
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                },
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                },
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "March 26, 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                },
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "August 26, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                },
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "April 13, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                },
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "March 11, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                },
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "September 30, 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                },
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "July 1, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                },
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "June 17, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                },
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "April 24, 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                },
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "March 9, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                },
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "December 21, 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                },
            ]
        },
        cta: "Verify",
        carouselCta: {
            next: "Next",
            prev: "Previous"
        }
    },
    about: {
        tagline: "Behind The Code",
        heading: "About Me",
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    I am a Backend Software Engineer specializing in  <strong className="font-medium text-[var(--foreground)]">scalable APIs, cloud-native applications, and modern backend systems.</strong> Currently pursuing a <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> at <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, I enjoy building <strong className="font-medium text-[var(--foreground)]">reliable softwares</strong> using <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, and <span className="text-[var(--accent-cyan)]">modern web technologies</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    I enjoy <strong className="font-medium text-[var(--foreground)]">designing backend systems</strong> that are <span className="text-[var(--accent-cyan)]">maintainable</span>, <span className="text-[var(--accent-cyan)]">secure</span>, and <span className="text-[var(--accent-cyan)]">scalable</span>. Whether developing REST APIs, integrating third-party services, or deploying applications to the cloud, I focus on writing <span className="text-[var(--accent-cyan)]">clean, reliable code</span> that solves real-world problems.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Beyond backend engineering, I enjoy exploring <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, and <span className="text-[var(--accent-cyan)]">game development</span> as creative side projects. Learning across different technologies helps me approach software engineering with both technical depth and creative problem-solving.
                </p>
            </>
        ),
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Education",
                heading: "Master of Computer Applications",
                para: "Manipal University Jaipur (Ongoing)"
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Location",
                heading: "Kolkata, India",
                para: "Open to remote, hybrid, and relocation opportunities"
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Current Focus",
                heading: "Backend Engineering",
                para: "Python • Django • FastAPI • REST APIs"
            },
        ]
    },
    project: {
        title: "Showcase",
        subtitle: "Work & Passions",
        para: "Software Engineering • AI • Music • Creativity • Certificates",
        filters: [
            "Featured",
            "Software",
            //   "AI",
            //   "Music",
            "Creative",
            "All",
        ],
        projects: [
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
        ] satisfies ShowcaseItem[]
    },
    contact: {
        tagline: "Contact",
        heading: "The Journey Continues",

        intro:
            "If you're looking for a backend software engineer who enjoys building scalable systems, cloud-native applications, and reliable digital products, I'd love to connect. I'm always interested in discussing new opportunities, challenging projects, and innovative ideas.",

        availability:
            "Currently available for full-time positions, remote opportunities, freelance projects, and international relocation.",

        cta: {
            email: "Email Me",
            linkedin: "Connect on LinkedIn",
        },

        quote: "Every great project begins with a conversation.",
    }
};