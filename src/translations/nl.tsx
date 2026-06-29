import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "HOME",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "VAARDIGHEDEN",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "OVER MIJ",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJECTEN", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "CONTACT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "INKLAPPEN", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND SOFTWARE ENGINEER", //[cite: 1, 2]
        availability: "WERELDWIJD BESCHIKBAAR", //[cite: 1, 2]
        since: "PROGRAMMEERT SINDS 2021", //[cite: 1, 2]
        experience: "2+ JAAR ERVARING IN DE INDUSTRIE" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Bouwen van{" "}
                <span className="text-[var(--accent-cyan)]">
                    schaalbare backend systemen
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Verkennen van
                </span>{" "}
                AI & game development
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend Software Engineer gespecialiseerd in schaalbare API's, cloud-native applicaties en moderne backend architectuur met Python, Django en FastAPI. Gepassioneerd door AI, gedistribueerde systemen en het bouwen van software die met de groei meegaat.", //[cite: 1, 2]
        cta1: "Ontdek mijn werk", //[cite: 1, 2]
        cta2: "Download CV", //[cite: 1, 2]
        status: {
            head: "Recruitment Status", //[cite: 1, 2]
            stat: () => (
                <>
                    Gebaseerd in <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Open voor full-time, remote, hybride en relocatie mogelijkheden.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Technische Vaardigheden", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Opleiding", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certificaten", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Hobby's", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Talen", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programmeertalen", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend Engineering", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend Engineering", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Databases", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Tools & Platforms", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Concepten", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master of Computer Applications (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Heden", //[cite: 1, 2]
                    description:
                    "Momenteel bezig met een masteropleiding met focus op software engineering, gedistribueerde systemen, cloud computing en moderne applicatieontwikkeling." //[cite: 1, 2]
                },
                {
                    degree: "Bachelor of Business Administration (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Afgestudeerd met een CGPA van 8.13/10. Ontwikkelde sterke analytische, probleemoplossende en bedrijfsmanagementvaardigheden, wat waardevolle inzichten biedt bij het ontwerpen van software die aansluit bij reële zakelijke behoeften." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Game Development", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Ik geniet ervan om Unity, C# en game design te leren door kleine prototypes te bouwen en gameplay mechanics, level design en interactieve systemen te bestuderen." //[cite: 1, 2]
                },
                {
                    title: "Muziek & Zang", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Zingen is een van mijn favoriete creatieve uitlaatkleppen. Het helpt me ontspannen, de focus te verbeteren en een gezonde balans te behouden naast softwareontwikkeling." //[cite: 1, 2]
                },
                {
                    title: "Koken & Creativiteit", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Koken leert geduld, aandacht voor detail en continu experimenteren — kwaliteiten die ik ook toepas bij het ontwerpen en bouwen van software." //[cite: 1, 2]
                },
                {
                    title: "Talen & Cultuur leren", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Ik leer momenteel Japans en geniet ervan om verschillende culturen, technologieën en ideeën te verkennen door middel van reizen, boeken en online gemeenschappen." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Engels", proficiency: "Professionele werkvaardigheid" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Moedertaal / Tweetalig" }, //[cite: 1, 2]
                { language: "Bengaals", proficiency: "Moedertaal / Tweetalig" }, //[cite: 1, 2]
                { language: "Japans", proficiency: "Beginner (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 juni 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 juni 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26 maart 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26 augustus 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13 april 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11 maart 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30 september 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1 juli 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 juni 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24 april 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9 maart 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21 december 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verifieer", //[cite: 1, 2]
        carouselCta: {
            next: "Volgende", //[cite: 1, 2]
            prev: "Vorige" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Achter de Code", //[cite: 1, 2]
        heading: "Over mij", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Ik ben een Backend Software Engineer gespecialiseerd in <strong className="font-medium text-[var(--foreground)]">schaalbare API's, cloud-native applicaties en moderne backend systemen.</strong> Momenteel bezig met een <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> aan de <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, ik bouw graag <strong className="font-medium text-[var(--foreground)]">betrouwbare software</strong> met gebruik van <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> en <span className="text-[var(--accent-cyan)]">moderne webtechnologieën</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Ik houd ervan om <strong className="font-medium text-[var(--foreground)]">backend systemen te ontwerpen</strong> die <span className="text-[var(--accent-cyan)]">onderhoudbaar</span>, <span className="text-[var(--accent-cyan)]">veilig</span> en <span className="text-[var(--accent-cyan)]">schaalbaar</span> zijn. Of het nu gaat om het ontwikkelen van REST API's, het integreren van externe diensten of het implementeren van applicaties in de cloud, ik focus op het schrijven van <span className="text-[var(--accent-cyan)]">schone, betrouwbare code</span> die reële problemen oplost.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Naast backend engineering geniet ik ervan om <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> en <span className="text-[var(--accent-cyan)]">game development</span> te verkennen als creatieve zijprojecten. Leren over verschillende technologieën helpt me om software engineering te benaderen met zowel technische diepgang als creatieve probleemoplossing.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Opleiding", //[cite: 1, 2]
                heading: "Master of Computer Applications", //[cite: 1, 2]
                para: "Manipal University Jaipur (Lopend)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Locatie", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Open voor remote, hybride en relocatie mogelijkheden" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Huidige Focus", //[cite: 1, 2]
                heading: "Backend Engineering", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Showcase", //[cite: 1, 2]
        subtitle: "Werk & Passies", //[cite: 1, 2]
        para: "Software Engineering • AI • Muziek • Creativiteit • Certificaten", //[cite: 1, 2]
        filters: [
            "Uitgelicht", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Creatief", //[cite: 1, 2]
            "Alles", //[cite: 1, 2]
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
                description: "Ontwikkelde en implementeerde een moderne single-page bedrijfswebsite met Next.js. Docker, Nginx en productie-hosting geconfigureerd terwijl responsiviteit, prestaties en deployment-workflows werden geoptimaliseerd.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Bezoek Website", //[cite: 1, 2]
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
                description: "Ontwikkelde en onderhield een responsive Shopify-geïntegreerde AI-chatwidget die productontdekking en klantinteracties ondersteunt. Backend API's gebouwd, Shopify GraphQL geïntegreerd en Looker Studio-dashboards gemaakt om gebruikersbetrokkenheid en bedrijfsstatistieken te monitoren.", //[cite: 1, 2]
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
                description: "Ontwikkelde een full-stack Content Management System (CMS) met beveiligde beheer-dashboards, dynamisch contentbeheer, CRUD-operaties en productie-implementatie op Ubuntu met Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Bezoek Website", //[cite: 1, 2]
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
                description: "Ontwikkelde een responsive fintech-platform dat gebruikers verbindt met de geverifieerde financieel adviseur Raman Khandelwal via een moderne, type-safe frontend-architectuur.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Bezoek Website" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Bouwde in drie dagen een AI-gestuurd virtueel selfie-platform voor een groot Durga Puja cultureel initiatief. Ontwikkelde de volledige frontend, Firebase backend, Firestore database, beheer-dashboard, AI-gebaseerde achtergrondverwijdering met Dezgo API's, beeldbewerkingscontroles en Google Tag Manager-integratie voordat de applicatie werd geïmplementeerd met Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Bezoek Website", //[cite: 1, 2]
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
                description: "Ontwikkelde het officiële ondernemerschapsplatform met aangepast Django-beheer, mentorbeheer, alumnibeheer, contributietracking en workflows voor bloggoedkeuring. Het platform vertegenwoordigde de instelling tijdens de IIT Bombay E-Cell wedstrijd en werd in drie dagen gebouwd.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Ontwierp en ontwikkelde een multi-vendor fitness- en e-commerce SaaS-platform dat beheerders, sportschooleigenaren, trainers, personeel en klanten ondersteunt. Implementeerde roll-based access control (RBAC), PhonePe-betalingsintegratie, REST API's voor Flutter-applicaties, community-functies, QR-aanwezigheid, boekingsbeheer en analytische dashboards.", //[cite: 1, 2]
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
                description: "Bouwde een aangepaste café-website met een beheer-dashboard voor het beheren van menu-items, categorieën, hero-sectie content, promotiebanners en website-afbeeldingen. Creëerde een intuïtieve contentbeheer-ervaring die medewerkers in staat stelt om efficiënt website-inhoud bij te werken terwijl een responsieve en visueel consistente klantervaring behouden blijft.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Bouwde een responsive marketing-website voor een fitnessmerk, gericht op productpresentatie, brand storytelling en leadgeneratie. Ontwikkelde boeiende landing-page secties, product showcases, promotionele content en mobielvriendelijke lay-outs om gebruikersbetrokkenheid en merkzichtbaarheid te vergroten.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Werkte aan een aangepast platform voor het bouwen van vastgoedwebsites waarmee bedrijven websites kunnen genereren en beheren vanuit configureerbare sjablonen. Implementeerde dynamisch sectiebeheer, content-editing, afbeeldingsupdates en sjabloonaanpassingsfuncties met Django, Bootstrap 5 en AJAX. Integreerde vastgoed- en bedrijfsgegevens van ActivCRM, waardoor automatische content-synchronisatie tussen CRM en website-platforms mogelijk werd.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creatief", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Creëerde een marketingcatalogus voor een industrieel productiebedrijf, waarbij technische productspecificaties werden omgezet in visueel boeiende en gemakkelijk te navigeren lay-outs. Ontwierp product showcases, branding assets en promotiepagina's met Canva, waarbij consistentie, leesbaarheid en professionele presentatiestandaarden werden gewaarborgd.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creatief", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Ontwikkelde de visuele identiteit en marketingcatalogus voor een industrieel productiebedrijf. Ontwierp het bedrijfslogo, branding assets en productcatalogus-lay-outs, wat een samenhangende merkervaring creëerde die technische productinformatie effectief presenteerde via een duidelijk en visueel aantrekkelijk ontwerp.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creatief", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Ontwikkelde een zakelijke marketingcatalogus voor een ingenieursadviesbureau, waarbij serviceportfolio's, technische bekwaamheid en projectervaring werden benadrukt. Ontwierp visueel gestructureerde lay-outs, merkinhoud en presentatiematerialen die complexe technische concepten vertaalden naar toegankelijke en professionele marketingmaterialen.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Contact", //[cite: 1, 2]
        heading: "De reis gaat verder", //[cite: 1, 2]

        intro:
            "Als je op zoek bent naar een backend software engineer die geniet van het bouwen van schaalbare systemen, cloud-native applicaties en betrouwbare digitale producten, dan kom ik graag in contact. Ik ben altijd geïnteresseerd in het bespreken van nieuwe kansen, uitdagende projecten en innovatieve ideeën.", //[cite: 1, 2]

        availability:
            "Momenteel beschikbaar voor full-time functies, remote kansen, freelance projecten en internationale relocatie.", //[cite: 1, 2]

        cta: {
            email: "Stuur me een e-mail", //[cite: 1, 2]
            linkedin: "Maak verbinding op LinkedIn", //[cite: 1, 2]
        },

        quote: "Elk geweldig project begint met een gesprek.", //[cite: 1, 2]
    }
};