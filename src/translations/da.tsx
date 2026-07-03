import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]
import { RotatingStat } from "../components/RotatingStats";

const stats = [
  "12+ Applikationer",
  "12+ Implementeringer",
  "25+ Projekter",
  "40+ API'er",
  "3+ E-handelsplatforme",
  "5+ CMS",
];

export default {
    background: {
        hero: "/images/bg/da/hero_bg.jpg",
        contact: "/images/bg/da/contact_bg.png"
    },
    header: {
        nav: [
            { label: "HJEM",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "FÆRDIGHEDER",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "OM MIG",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTER", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "SKJUL", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND SOFTWAREUDVIKLER", //[cite: 1, 2]
        availability: "TILGÆNGELIG GLOBALT", //[cite: 1, 2]
        since: "KODER SIDEN 2021", //[cite: 1, 2]
        experience: "2+ ÅRS ERFARING I BRANCHEN" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="xl:whitespace-nowrap">
                    Udviklet{" "}
                </span>

                <span className="xl:whitespace-nowrap">
                    <RotatingStat stats={stats} />
                </span>
            </>
        ),
        para: "Backend-softwareudvikler med speciale i skalerbare API'er, cloud-native applikationer og moderne backend-arkitektur ved hjælp af Python, Django og FastAPI. Passioneret omkring AI, distribuerede systemer og at bygge software, der kan skaleres.", //[cite: 1, 2]
        cta1: "Udforsk mit arbejde", //[cite: 1, 2]
        cta2: "Download CV", //[cite: 1, 2]
        status: {
            head: "Ansættelsesstatus", //[cite: 1, 2]
            stat: () => (
                <>
                    Baseret i <span className="text-[var(--accent-blue)]">Kolkata, Indien</span>. Åben for fuldtids-, remote-, hybrid- og relokeringsmuligheder.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_da.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Tekniske færdigheder", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Uddannelse", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certificeringer", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Fritidsinteresser", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Sprog", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programmeringssprog", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend-udvikling", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend-udvikling", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Databaser", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Værktøjer & Platforme", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Koncepter", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master i Computer Applications (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Nu", //[cite: 1, 2]
                    description:
                    "Læser i øjeblikket en mastergrad med fokus på software engineering, distribuerede systemer, cloud computing og moderne applikationsudvikling." //[cite: 1, 2]
                },
                {
                    degree: "Bachelor i Business Administration (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Dimitterede med en CGPA på 8.13/10. Udviklede stærke analytiske, problemløsnings- og virksomhedsledelsesevner, hvilket giver værdifuld indsigt i at designe software, der flugter med forretningsbehov." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Spiludvikling", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Jeg nyder at lære Unity, C# og spildesign ved at bygge små prototyper og studere gameplay-mekanikker, level design og interaktive systemer." //[cite: 1, 2]
                },
                {
                    title: "Musik & Sang", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "At synge er en af mine yndlings kreative ventilationsmuligheder. Det hjælper mig med at slappe af, forbedre fokus og opretholde en sund balance ved siden af softwareudvikling." //[cite: 1, 2]
                },
                {
                    title: "Madlavning & Kreativitet", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Madlavning lærer tålmodighed, opmærksomhed på detaljer og løbende eksperimenter — egenskaber, som jeg også bruger, når jeg designer og bygger software." //[cite: 1, 2]
                },
                {
                    title: "Sprog & Kultur", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Jeg lærer i øjeblikket japansk og nyder at udforske forskellige kulturer, teknologier og idéer gennem rejser, bøger og online-fællesskaber." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Engelsk", proficiency: "Professionelt arbejdsniveau" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Modersmål / tosproget" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Modersmål / tosproget" }, //[cite: 1, 2]
                { language: "Japansk", proficiency: "Begynder (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21. juni 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21. juni 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26. marts 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26. august 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13. april 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11. marts 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30. september 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1. juli 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17. juni 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24. april 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9. marts 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21. december 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verificér", //[cite: 1, 2]
        carouselCta: {
            next: "Næste", //[cite: 1, 2]
            prev: "Forrige" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Bagom koden", //[cite: 1, 2]
        heading: "Om mig", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jeg er en backend softwareudvikler med speciale i <strong className="font-medium text-[var(--foreground)]">skalerbare API'er, cloud-native applikationer og moderne backend-systemer.</strong> Læser i øjeblikket en <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> på <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, og jeg nyder at bygge <strong className="font-medium text-[var(--foreground)]">pålidelig software</strong> ved hjælp af <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> og <span className="text-[var(--accent-cyan)]">moderne webteknologier</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jeg nyder at <strong className="font-medium text-[var(--foreground)]">designe backend-systemer</strong>, der er <span className="text-[var(--accent-cyan)]">vedligeholdelsesvenlige</span>, <span className="text-[var(--accent-cyan)]">sikre</span> og <span className="text-[var(--accent-cyan)]">skalerbare</span>. Uanset om det drejer sig om at udvikle REST API'er, integrere tredjepartstjenester eller implementere applikationer i skyen, fokuserer jeg på at skrive <span className="text-[var(--accent-cyan)]">ren og pålitelig kode</span>, der løser reelle problemer.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Udover backend engineering nyder jeg at udforske <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> og <span className="text-[var(--accent-cyan)]">spiludvikling</span> som kreative sideprojekter. At lære på tværs af forskellige teknologier hjælper mig med at nærme mig softwareudvikling med både teknisk dybde og kreativ problemløsning.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Uddannelse", //[cite: 1, 2]
                heading: "Master i Computer Applications", //[cite: 1, 2]
                para: "Manipal University Jaipur (Pågående)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lokation", //[cite: 1, 2]
                heading: "Kolkata, Indien", //[cite: 1, 2]
                para: "Åben for remote-, hybrid- og relokeringsmuligheder" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Nuværende fokus", //[cite: 1, 2]
                heading: "Backend-udvikling", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Showcase", //[cite: 1, 2]
        subtitle: "Arbejde & Passioner", //[cite: 1, 2]
        para: "Software Engineering • AI • Musik • Kreativitet • Certifikater", //[cite: 1, 2]
        filters: [
            "Udvalgte", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "AI",
            //   "Musik",
            "Kreative", //[cite: 1, 2]
            "Alle", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Udviklede og implementerede en moderne single-page virksomhedswebsted ved hjælp af Next.js. Konfigurerede Docker, Nginx og produktionshosting, samtidig med at responsivitet, ydeevne og implementerings-workflows blev optimeret.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Besøg hjemmesiden", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Udviklede og vedligeholdt en responsiv Shopify-integreret AI-chat-widget, der understøtter produktsøgning og kundeinteraktioner. Byggede backend-API'er, integrerede Shopify GraphQL og oprettede Looker Studio-dashboards for at overvåge brugerengagement og forretningsmæssige måletal.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Udviklede et full-stack content management system (CMS) med sikre administrations-dashboards, dynamisk indholdsstyring, CRUD-operationer og produktionsimplementering på Ubuntu ved hjælp af Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Besøg hjemmesiden", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Udviklede en responsiv fintech-platform, der forbinder brugere med den verificerede finansielle rådgiver Raman Khandelwal gennem en moderne, type-sikker frontend-arkitektur.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Besøg hjemmesiden" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Byggede på tre dage en AI-drevet virtuel selfi-platform til et stort Durga Puja kulturelt initiativ. Udviklede hele frontend-delen, Firebase backend, Firestore-database, administrations-dashboard, AI-baseret baggrundsfjernelse ved hjælp af Dezgo API'er, billedforbedringskontroller og Google Tag Manager-integration, før applikationen blev implementeret med Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Besøg hjemmesiden", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Udviklede den officielle platform for entreprenørskabscellen med tilpasset Django-administration, mentorstyring, alumnistyring, bidragssporing og workflows til godkendelse af blogs. Platformen repræsenterede institutionen under IIT Bombay E-Cell konkurrencen og blev bygget på tre dage.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Designede og udviklede en multi-vendor fitness- og e-handels-SaaS-platform, der understøtter administratorer, fitnesscenterejere, trænere, personale og kunder. Implementerede rollebaseret adgangskontrol (RBAC), PhonePe-betalingsintegration, REST API'er til Flutter-applikationer, community-funktioner, QR-fremmøde, bookingstyring og analytiske dashboards.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Byggede en tilpasset café-hjemmeside med et administrations-dashboard til håndtering af menuartikler, kategorier, indhold i helt-sektionen, reklamebannere og webstedsbilleder. Skabte en intuitiv indholdsstyringsoplevelse, der giver personalet mulighed for effektivt at opdatere webstedets indhold, samtidig med at en responsiv og visuelt sammenhængende kundeoplevelse bevares.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Byggede en responsiv markedsførings-hjemmeside til et fitnessudstyrsbrand med fokus på produktpræsentation, brand-storytelling og leadgenerering. Udviklede engagerende landingsside-sektioner, produktudstillinger, reklameindhold og mobilvenlige layouter for at forbedre brugerengagement og brandsynlighed.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Arbejdede på en tilpasset platform til bygning af ejendomsmægler-hjemmesider, der tillod virksomheder at generere og administrere hjemmesider fra konfigurerbare skabeloner. Implementerede dynamisk sektionsstyring, indholdsredigering, billedopdateringer og skabelontilpasningsfunktioner ved hjælp af Django, Bootstrap 5 og AJAX. Integrerede ejendoms- og forretningsdata fra ActivCRM, hvilket muliggjorde automatisk indholdssynkronisering mellem CRM og webstedsplatforme.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreative", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Oprettede et marketingkatalog til en industriel fremstillingsvirksomhed, der transformerede tekniske produktspecifikationer til visuelt engagerende og letnavigerbare layouter. Designede produktudstillinger, branding-aktiver og reklamesider ved hjælp af Canva, samtidig med at konsistens, læsbarhed og professionelle præsentationsstandarder blev sikret.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreative", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Udviklede visuel identitet og marketingkatalog til en industriel fremstillingsvirksomhed. Designede virksomhedslogo, branding-aktiver og produktkatalog-layouter, hvilket skabte en sammenhængende brandoplevelse, der effektivt præsenterede teknisk produktinformation gennem et klart og visuelt tiltalende design.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreative", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Udviklede et marketingkatalog for en ingeniørrådgivningsvirksomhed, der fremhævede serviceporteføljer, teknisk kompetence og projekterfaring. Designede visuelt strukturerede layouter, brandet indhold og præsentationsmaterialer, der transformerede komplekse ingeniørkoncepter til tilgængeligt og professionelt marketingmateriale.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Rejsen fortsætter", //[cite: 1, 2]

        intro:
            "Hvis du leder efter en backend-softwareudvikler, der nyder at bygge skalerbare systemer, cloud-native applikationer og pålidelige digitale produkter, vil jeg meget gerne i kontakt med dig. Jeg er altid interesseret i at diskutere nye muligheder, udfordrende projekter og innovative idéer.", //[cite: 1, 2]

        availability:
            "I øjeblikket tilgængelig for fuldtidsstillinger, remote-muligheder, freelance-projekter og international relokering.", //[cite: 1, 2]

        cta: {
            email: "Send mig en e-mail", //[cite: 1, 2]
            linkedin: "Opret forbindelse på LinkedIn", //[cite: 1, 2]
        },

        quote: "Ethvert fantastisk projekt starter med en samtale.", //[cite: 1, 2]
    }
};