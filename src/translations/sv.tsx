import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/sv/hero_bg.jpg"
    },
    header: {
        nav: [
            { label: "HEM",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "KOMPETENSER",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "OM MIG",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKT", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "STÄNG", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND-MJUKVARUINGENJÖR", //[cite: 1, 2]
        availability: "TILLGÄNGLIG GLOBALT", //[cite: 1, 2]
        since: "KODAR SEDAN 2021", //[cite: 1, 2]
        experience: "2+ ÅRS ERFARENHET I BRANSCHEN" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Bygger{" "}
                <span className="text-[var(--accent-cyan)]">
                    skalbara backend-system
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Utforskar
                </span>{" "}
                AI & spelutveckling
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend-mjukvaruingenjör med specialisering på skalbara API:er, molnbaserade applikationer och modern backend-arkitektur med Python, Django och FastAPI. Passionerad för AI, distribuerade system och att bygga mjukvara som skalar.", //[cite: 1, 2]
        cta1: "Utforska mina arbeten", //[cite: 1, 2]
        cta2: "Ladda ner CV", //[cite: 1, 2]
        status: {
            head: "Rekryteringsstatus", //[cite: 1, 2]
            stat: () => (
                <>
                    Baserad i <span className="text-[var(--accent-blue)]">Kolkata, Indien</span>. Öppen för heltids-, distans-, hybrid- och relokeringsmöjligheter.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_sv.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Tekniska kompetenser", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Utbildning", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certifikat", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Fritidsintressen", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Språk", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programmeringsspråk", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend-utveckling", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend-utveckling", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Databaser", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Molntjänster & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Verktyg & Plattformar", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Koncept", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master i datorapplikationer (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Pågående", //[cite: 1, 2]
                    description:
                    "Läser just nu en masterexamen med fokus på mjukvaruteknik, distribuerade system, molntjänster och modern applikationsutveckling." //[cite: 1, 2]
                },
                {
                    degree: "Kandidatexamen i företagsekonomi (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Examen med en CGPA på 8.13/10. Utvecklade starka analytiska färdigheter, problemlösningsförmåga och kunskaper inom företagsledning, vilket ger värdefulla insikter för att designa mjukvara som möter verkliga affärsbehov." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Spelutveckling", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Jag tycker om att lära mig Unity, C# och speldesign genom att bygga små prototyper och studera spelmekanik, nivådesign och interaktiva system." //[cite: 1, 2]
                },
                {
                    title: "Musik & Sång", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Att sjunga är ett av mina favoritsätt att vara kreativ. Det hjälper mig att slappna av, förbättra fokus och bibehålla en hälsosam balans vid sidan av mjukvaruutvecklingen." //[cite: 1, 2]
                },
                {
                    title: "Matlagning & Kreativitet", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Matlagning lär ut tålamod, detaljfokus och kontinuerligt experimenterande – egenskaper som jag även applicerar när jag designar och bygger mjukvara." //[cite: 1, 2]
                },
                {
                    title: "Språk & Kultur", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Jag lär mig för närvarande japanska och tycker om att utforska olika kulturer, teknologier och idéer genom resor, böcker och online-communityn." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Engelska", proficiency: "Professionell arbetsnivå" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Modersmål / Tvåspråkig" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Modersmål / Tvåspråkig" }, //[cite: 1, 2]
                { language: "Japanska", proficiency: "Nybörjare (JLPT N5)" } //[cite: 1, 2]
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
                    date: "26 mars 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26 augusti 2024",
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
                    date: "11 mars 2024",
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
                    date: "9 mars 2023",
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
        cta: "Verifiera", //[cite: 1, 2]
        carouselCta: {
            next: "Nästa", //[cite: 1, 2]
            prev: "Föregående" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Bakom koden", //[cite: 1, 2]
        heading: "Om mig", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jag är en backend-mjukvaruingenjör som specialiserar mig på <strong className="font-medium text-[var(--foreground)]">skalbara API:er, molnbaserade applikationer och moderna backend-system.</strong> Läser för närvarande en <span className="text-[var(--accent-cyan)]">Master i datorapplikationer (MCA)</span> vid <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, och jag tycker om att bygga <strong className="font-medium text-[var(--foreground)]">pålitlig mjukvara</strong> med <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> och <span className="text-[var(--accent-cyan)]">moderna webbteknologier</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jag gillar att <strong className="font-medium text-[var(--foreground)]">designa backend-system</strong> som är <span className="text-[var(--accent-cyan)]">underhållbara</span>, <span className="text-[var(--accent-cyan)]">säkra</span> och <span className="text-[var(--accent-cyan)]">skalbara</span>. Oavsett om det handlar om att utveckla REST API:er, integrera tredjepartstjänster eller distribuera applikationer till molnet, fokuserar jag på att skriva <span className="text-[var(--accent-cyan)]">ren och pålitlig kod</span> som löser verkliga problem.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Utöver backend-utveckling tycker jag om att utforska <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> och <span className="text-[var(--accent-cyan)]">spelutveckling</span> som kreativa sidoprojekt. Att lära mig olika teknologier hjälper mig att närma mig mjukvaruutveckling med både tekniskt djup och kreativ problemlösning.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Utbildning", //[cite: 1, 2]
                heading: "Master i datorapplikationer", //[cite: 1, 2]
                para: "Manipal University Jaipur (Pågående)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Plats", //[cite: 1, 2]
                heading: "Kolkata, Indien", //[cite: 1, 2]
                para: "Öppen för distans-, hybrid- och relokeringsmöjligheter" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Nuvarande fokus", //[cite: 1, 2]
                heading: "Backend-utveckling", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST API:er" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Portfolio", //[cite: 1, 2]
        subtitle: "Arbete & Passioner", //[cite: 1, 2]
        para: "Mjukvaruutveckling • AI • Musik • Kreativitet • Certifikat", //[cite: 1, 2]
        filters: [
            "Utvalt", //[cite: 1, 2]
            "Mjukvara", //[cite: 1, 2]
            //   "AI",
            //   "Musik",
            "Kreativt", //[cite: 1, 2]
            "Alla", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Utvecklade och distribuerade en modern ensidig företagswebbplats med Next.js. Konfigurerade Docker, Nginx och produktionshosting samtidigt som responsivitet, prestanda och distributionsflöden optimerades.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Besök webbplats", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Utvecklade och underhöll en responsiv Shopify-integrerad AI-chattwidget som stöder produktupptäckt och kundinteraktioner. Byggde backend-API:er, integrerade Shopify GraphQL och skapade Looker Studio-instrumentpaneler för att övervaka användarengagemang och affärsmått.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Utvecklade ett fullstack-innehållshanteringssystem (CMS) med säkra administratörspaneler, dynamisk innehållshantering, CRUD-operationer och produktionsdistribution på Ubuntu med Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Besök webbplats", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Utvecklade en responsiv fintech-plattform som kopplar samman användare med den verifierade finansiella rådgivaren Raman Khandelwal genom en modern, typsäker frontend-arkitektur.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Besök webbplats" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Byggde på tre dagar en AI-driven virtuell selfi-plattform för ett stort Durga Puja-kulturellt initiativ. Utvecklade hela frontend-delen, Firebase-backend, Firestore-databasen, administratörspanelen, AI-baserad bakgrundsborttagning med Dezgo API:er, bildförbättringskontroller och Google Tag Manager-integration innan applikationen distribuerades med Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Besök webbplats", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Utvecklade den officiella plattformen för entreprenörskapscellen med anpassad Django-administration, mentorhantering, alumnihantering, bidragsspårning och arbetsflöden för blogggodkännande. Plattformen representerade institutionen under IIT Bombay E-Cell-tävlingen och byggdes på tre dagar.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Designade och utvecklade en SaaS-plattform för fitness och e-handel med flera leverantörer som stöder administratörer, gymägare, tränare, personal och kunder. Implementerade rollbaserad åtkomstkontroll (RBAC), PhonePe-betalningsintegration, REST API:er för Flutter-applikationer, community-funktioner, QR-närvaro, bokningshantering och analytiska instrumentpaneler.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Byggde en anpassad café-webbplats med en administratörspanel för att hantera menyalternativ, kategorier, hjälte-sektionens innehåll, reklambanners och webbplatsbilder. Skapade en intuitiv innehållshanteringsupplevelse som gör att personalen effektivt kan uppdatera webbplatsens innehåll samtidigt som en responsiv och visuellt konsekvent kundupplevelse bibehålls.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Byggde en responsiv marknadsföringswebbplats för ett varumärke inom fitnessutrustning med fokus på produktpresentation, varumärkesberättande och leadgenerering. Utvecklade engagerande landningssidor, produktutställningar, marknadsföringsinnehåll och mobilvänliga layouter för att förbättra användarengagemang och varumärkessynlighet.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Mjukvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Arbetade på en anpassad plattform för att bygga fastighetswebbplatser som tillät företag att generera och hantera webbplatser från konfigurerbara mallar. Implementerade dynamisk sektionshantering, innehållsredigering, bilduppdateringar och mallanpassningsfunktioner med Django, Bootstrap 5 och AJAX. Integrerade fastighets- och affärsdata från ActivCRM, vilket möjliggjorde automatisk innehållssynkronisering mellan CRM och webbplatsplattformar.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativt", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Skapade en marknadsföringskatalog för ett industriellt tillverkningsföretag, och förvandlade tekniska produktspecifikationer till visuellt engagerande och lättnavigerade layouter. Designade produktutställningar, branding-tillgångar och reklamsidor med Canva, samtidigt som konsistens, läsbarhet och professionella presentationsstandarder säkerställdes.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativt", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Utvecklade visuell identitet och marknadsföringskatalog för ett industriellt tillverkningsföretag. Designade företagslogotyp, branding-tillgångar och produktkataloglayouter, vilket skapade en sammanhängande varumärkesupplevelse som effektivt presenterade teknisk produktinformation genom en tydlig och visuellt tilltalande design.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativt", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Utvecklade en marknadsföringskatalog för ett ingenjörskonsultföretag, som framhäver tjänsteportföljer, teknisk kompetens och projekterfarenhet. Designade visuellt strukturerade layouter, varumärkesinnehåll och presentationsmaterial som förvandlade komplexa ingenjörskoncept till tillgängligt och professionellt marknadsföringsmaterial.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Resan fortsätter", //[cite: 1, 2]

        intro:
            "Om du letar efter en backend-mjukvaruingenjör som gillar att bygga skalbara system, molnbaserade applikationer och pålitliga digitala produkter, skulle jag gärna ta kontakt. Jag är alltid intresserad av att diskutera nya möjligheter, utmanande projekt och innovativa idéer.", //[cite: 1, 2]

        availability:
            "Tillgänglig för heltidstjänster, distansarbete, frilansprojekt och internationell relokering.", //[cite: 1, 2]

        cta: {
            email: "Skicka ett e-postmeddelande", //[cite: 1, 2]
            linkedin: "Anslut på LinkedIn", //[cite: 1, 2]
        },

        quote: "Varje fantastiskt projekt börjar med ett samtal.", //[cite: 1, 2]
    }
};