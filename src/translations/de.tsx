import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb";
import { ShowcaseItem } from "../components/showcase/showcaseData";

export default {
    background: {
        hero: "/images/bg/de/hero_bg.jpg",
        contact: "/images/bg/de/contact_bg.png"
    }, 
    header: {
        nav: [
            { label: "STARTSEITE", href: "#home", icon: TbHome },
            { label: "FÄHIGKEITEN", href: "#profile", icon: TbTerminal2 },
            { label: "ÜBER MICH", href: "#about", icon: TbUser },
            { label: "PROJEKTE", href: "#showcase", icon: TbLayoutGrid },
            { label: "KONTAKT", href: "#contact", icon: TbMail },
        ],
        socials: [
            {
                label: "LINKEDIN",
                href: "https://www.linkedin.com/in/sahilsamanta/",
                icon: TbBrandLinkedin,
            },
        ],
        collapseText: "EINKLAPPEN",
        name: "Sahil Samanta",
        position: "BACKEND-SOFTWAREENTWICKLER",
        availability: "WELTWEIT VERFÜGBAR",
        since: "PROGRAMMIERT SEIT 2021",
        experience: "2+ JAHRE BERUFSERFAHRUNG",
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                    Entwicklung{" "}
                    <span className="text-[var(--accent-cyan)]">
                        skalierbarer Backend-Systeme
                    </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                    <span className="text-[var(--accent-cyan)]">
                        Erforschung von
                    </span>{" "}
                    KI & Spieleentwicklung
                </span>
            </>
        ),

        para:
            "Backend-Softwareentwickler mit Schwerpunkt auf skalierbaren APIs, Cloud-nativen Anwendungen und moderner Backend-Architektur mit Python, Django und FastAPI. Begeistert von KI, verteilten Systemen und der Entwicklung leistungsfähiger Software.",

        cta1: "Meine Projekte entdecken",

        cta2: "Lebenslauf herunterladen",

        status: {
            head: "Verfügbarkeit",

            stat: () => (
                <>
                    Standort:{" "}
                    <span className="text-[var(--accent-blue)]">
                        Kolkata, Indien
                    </span>
                    . Offen für Festanstellungen, Remote-Arbeit, hybride Arbeitsmodelle und internationale Relocation.
                </>
            ),
        },
        model: "/images/model/sahil_de.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Technische Fähigkeiten", icon: TbCode },
            { id: "education", label: "Ausbildung", icon: TbSchool },
            { id: "certs", label: "Zertifikate", icon: TbCertificate },
            { id: "hobbies", label: "Freizeit", icon: TbActivity },
            { id: "languages", label: "Sprachen", icon: TbMessageCircle },
        ],
        skills: {
            technical: [
                {
                    category: "Programmiersprachen",
                    icon: TbCode,
                    skills: [
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "SQL",
                        "C",
                        "C#",
                        "Java",
                    ],
                },
                {
                    category: "Backend-Entwicklung",
                    icon: TbServer2,
                    skills: [
                        "Django",
                        "Django REST Framework (DRF)",
                        "FastAPI",
                        "Flask",
                        "REST API-Design",
                        "GraphQL",
                        "Integration von Zahlungssystemen",
                    ],
                },
                {
                    category: "Frontend-Entwicklung",
                    icon: TbDeviceDesktopCode,
                    skills: [
                        "React",
                        "Next.js",
                        "React Native",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                        "Bootstrap",
                        "AJAX",
                    ],
                },
                {
                    category: "Datenbanken",
                    icon: TbDatabase,
                    skills: [
                        "MySQL",
                        "MongoDB",
                        "Firebase Firestore",
                        "SQLite3",
                    ],
                },
                {
                    category: "Cloud & DevOps",
                    icon: TbCloudComputing,
                    skills: [
                        "Docker",
                        "Linux",
                        "Nginx",
                        "PM2",
                        "Jenkins",
                        "AWS IAM",
                        "AWS Lambda",
                        "Google Cloud VM",
                        "Firebase Hosting",
                        "Seed.run",
                    ],
                },
                {
                    category: "Werkzeuge & Plattformen",
                    icon: TbTools,
                    skills: [
                        "Git",
                        "GitHub",
                        "Postman",
                        "Jira",
                        "Shopify GraphQL",
                        "Magento",
                        "Google Analytics 4 (GA4)",
                        "Google Tag Manager (GTM)",
                        "Looker Studio",
                        "Firebase",
                        "Dezgo AI API",
                        "Canva",
                        "Blender",
                        "Unity",
                        "Adobe Premiere Pro",
                    ],
                },
                {
                    category: "Konzepte",
                    icon: TbHierarchy3,
                    skills: [
                        "RESTful-Architektur",
                        "Authentifizierung & Autorisierung",
                        "Rollenbasierte Zugriffskontrolle (RBAC)",
                        "MVC-Architektur",
                        "Responsives Design",
                    ],
                },
            ],
            education: [
                {
                    degree: "Master of Computer Applications (MCA)",
                    institution: "Manipal University Jaipur",
                    timeline: "2026 - Heute",
                    description:
                        "Derzeit im Masterstudium mit Schwerpunkt auf Softwareentwicklung, verteilten Systemen, Cloud Computing und moderner Anwendungsentwicklung."
                },
                {
                    degree: "Bachelor of Business Administration (BBA)",
                    institution:
                        "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata",
                    timeline: "2021 - 2024",
                    description:
                        "Abschluss mit einer CGPA von 8,13/10. Fundierte Kenntnisse in analytischem Denken, Problemlösung und Unternehmensführung erworben, die wertvolle Einblicke in die Entwicklung von Software mit Fokus auf reale Geschäftsanforderungen ermöglichen."
                }
            ],
            hobbies: [
                {
                    title: "Spieleentwicklung",
                    icon: TbDeviceGamepad2,
                    description:
                        "Ich lerne gerne Unity, C# und Game Design, indem ich kleine Prototypen entwickle und mich mit Gameplay-Mechaniken, Leveldesign und interaktiven Systemen beschäftige."
                },
                {
                    title: "Musik & Gesang",
                    icon: TbMusic,
                    description:
                        "Singen ist eine meiner liebsten kreativen Beschäftigungen. Es hilft mir, mich zu entspannen, meine Konzentration zu verbessern und eine gesunde Balance neben der Softwareentwicklung zu bewahren."
                },
                {
                    title: "Kochen & Kreativität",
                    icon: TbChefHat,
                    description:
                        "Kochen vermittelt Geduld, Liebe zum Detail und die Bereitschaft, ständig Neues auszuprobieren – Eigenschaften, die ich auch bei der Entwicklung von Software einsetze."
                },
                {
                    title: "Sprachen & Kulturen",
                    icon: TbWorld,
                    description:
                        "Derzeit lerne ich Japanisch und entdecke gerne verschiedene Kulturen, Technologien und Ideen durch Reisen, Bücher und Online-Communities."
                }
            ],
            languages: [
                {
                    language: "Englisch",
                    proficiency: "Berufliche Sprachkenntnisse",
                },
                {
                    language: "Hindi",
                    proficiency: "Muttersprache / Zweisprachig",
                },
                {
                    language: "Bengalisch",
                    proficiency: "Muttersprache / Zweisprachig",
                },
                {
                    language: "Japanisch",
                    proficiency: "Anfänger (JLPT N5)",
                },
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
        cta: "Überprüfen",
        carouselCta: {
            next: "Weiter",
            prev: "Zurück",
        },
    },
    about: {
        tagline: "Hinter dem Code",

        heading: "Über mich",

        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Ich bin Backend-Softwareentwickler mit Schwerpunkt auf{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        skalierbaren APIs, Cloud-nativen Anwendungen und modernen Backend-Systemen.
                    </strong>{" "}
                    Derzeit absolviere ich den{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Master of Computer Applications (MCA)
                    </span>{" "}
                    an der{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Manipal University Jaipur
                    </strong>
                    . Mit{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Python
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Django
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        FastAPI
                    </span>{" "}
                    und{" "}
                    <span className="text-[var(--accent-cyan)]">
                        modernen Webtechnologien
                    </span>{" "}
                    entwickle ich{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        zuverlässige Softwarelösungen.
                    </strong>
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Besonders begeistert mich die{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Entwicklung von Backend-Systemen,
                    </strong>{" "}
                    die{" "}
                    <span className="text-[var(--accent-cyan)]">
                        wartbar
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        sicher
                    </span>{" "}
                    und{" "}
                    <span className="text-[var(--accent-cyan)]">
                        skalierbar
                    </span>{" "}
                    sind. Ob bei der Entwicklung von REST-APIs, der Integration externer Dienste oder der Bereitstellung von Anwendungen in der Cloud – ich lege großen Wert auf{" "}
                    <span className="text-[var(--accent-cyan)]">
                        sauberen und zuverlässigen Code,
                    </span>{" "}
                    der reale Probleme löst.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Neben der Backend-Entwicklung beschäftige ich mich gerne mit{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Unity
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Blender
                    </span>{" "}
                    und der{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Spieleentwicklung
                    </span>{" "}
                    als kreative Nebenprojekte. Das Erlernen neuer Technologien hilft mir dabei, Softwareentwicklung sowohl mit technischer Tiefe als auch mit kreativen Lösungsansätzen zu verbinden.
                </p>
            </>
        ),

        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Ausbildung",
                heading: "Master of Computer Applications",
                para: "Manipal University Jaipur (laufend)",
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Standort",
                heading: "Kolkata, Indien",
                para: "Offen für Remote-, Hybrid- und Relocation-Möglichkeiten",
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Aktueller Schwerpunkt",
                heading: "Backend-Entwicklung",
                para: "Python • Django • FastAPI • REST-APIs",
            },
        ],
    },
    project: {
        title: "Portfolio",
        subtitle: "Projekte & Leidenschaften",
        para: "Softwareentwicklung • KI • Musik • Kreativität • Zertifikate",

        filters: [
            "Empfohlen",
            "Software",
            "Kreativ",
            "Alle",
        ],

        projects: [
            {
                id: 1,
                title: "Apearenz Webplattform",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Entwicklung und Bereitstellung einer modernen Unternehmenswebsite auf Basis von Next.js. Docker-, Nginx- und Produktionshosting eingerichtet sowie Responsivität, Performance und Deployment-Prozesse optimiert.",
                link: "https://apearenz.com/",
                linkText: "Website besuchen",
                featured: true
            },
            {
                id: 2,
                title: "Projekt Katalyse AI",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Entwicklung und Wartung eines responsiven, in Shopify integrierten KI-Chat-Widgets für Produktsuche und Kundeninteraktion. Backend-APIs entwickelt, Shopify GraphQL integriert und Looker-Studio-Dashboards zur Analyse des Nutzerverhaltens erstellt.",
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Entwicklung eines Full-Stack-Content-Management-Systems (CMS) mit sicheren Administrationsbereichen, dynamischer Inhaltsverwaltung, CRUD-Funktionen und Deployment auf Ubuntu mit Apache2.",
                link: "https://sriramanujavani.com/",
                linkText: "Website besuchen",
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Entwicklung einer responsiven FinTech-Plattform, die Nutzer mit dem verifizierten Finanzberater Raman Khandelwal über eine moderne und typsichere Frontend-Architektur verbindet.",
                link: "https://dhanwise.com/",
                linkText: "Website besuchen"
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtuelles Selfie mit Maa",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Entwicklung einer KI-gestützten virtuellen Selfie-Plattform innerhalb von drei Tagen für eine große Durga-Puja-Initiative. Frontend, Firebase-Backend, Firestore-Datenbank, Admin-Dashboard, KI-Hintergrundentfernung mit Dezgo-API, Bildoptimierung und Google Tag Manager integriert.",
                link: "https://thepuja.app/",
                linkText: "Website besuchen",
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Entwicklung der offiziellen Plattform der Entrepreneurship Cell mit Django-Administration, Mentor- und Alumni-Verwaltung, Beitragsverfolgung sowie Blog-Freigabe-Workflows. Das Projekt repräsentierte die Hochschule beim IIT Bombay E-Cell-Wettbewerb."
            },
            {
                id: 7,
                title: "Locope SaaS-Plattform",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Konzeption und Entwicklung einer Multi-Vendor-SaaS-Plattform für Fitness und E-Commerce. Implementierung von rollenbasierter Zugriffskontrolle, PhonePe-Zahlungen, REST-APIs, QR-Anwesenheit, Buchungsverwaltung und Analyse-Dashboards.",
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Entwicklung einer individuellen Café-Website mit Administrationsbereich zur Verwaltung von Menüs, Kategorien, Hero-Inhalten, Bannern und Bildern sowie einer benutzerfreundlichen Content-Management-Oberfläche."
            },
            {
                id: 9,
                title: "MyActivt",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Entwicklung einer responsiven Marketing-Website für eine Fitnessmarke mit Fokus auf Produktpräsentation, Markenkommunikation und Lead-Generierung."
            },
            {
                id: 10,
                title: "ActivCMS",
                category: "Software",
                categoryLabel: "Software",
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Mitarbeit an einer Website-Builder-Plattform für Immobilienunternehmen mit dynamischer Inhaltsverwaltung, Template-Anpassung sowie Synchronisierung von CRM- und Webseitendaten.",
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Katalog",
                category: "Creative",
                categoryLabel: "Kreativ",
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Erstellung eines Marketingkatalogs für ein Industrieunternehmen mit übersichtlicher Darstellung technischer Produkte sowie Gestaltung von Produktseiten und Werbematerialien."
            },
            {
                id: 12,
                title: "Padrone Katalog & Markenidentität",
                category: "Creative",
                categoryLabel: "Kreativ",
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Entwicklung der visuellen Markenidentität einschließlich Logo, Branding und Produktkatalog für ein Industrieunternehmen mit klarer und professioneller Gestaltung."
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Katalog",
                category: "Creative",
                categoryLabel: "Kreativ",
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Entwicklung eines Unternehmenskatalogs für ein Ingenieurberatungsunternehmen mit Fokus auf Dienstleistungen, Fachkompetenzen und professionell gestalteten Präsentationsmaterialien."
            }
        ] satisfies ShowcaseItem[]
    },

    contact: {
        tagline: "Kontakt",

        heading: "Die Reise geht weiter",

        intro:
            "Wenn Sie einen Backend-Softwareentwickler suchen, der gerne skalierbare Systeme, Cloud-native Anwendungen und zuverlässige digitale Produkte entwickelt, freue ich mich auf Ihre Nachricht. Ich bin stets offen für neue Herausforderungen, spannende Projekte und innovative Ideen.",

        availability:
            "Derzeit offen für Festanstellungen, Remote-Positionen, Freelance-Projekte und internationale Relocation.",

        cta: {
            email: "E-Mail senden",
            linkedin: "Auf LinkedIn vernetzen",
        },

        quote:
            "Jedes großartige Projekt beginnt mit einem Gespräch.",
    },
};