import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "HJEM",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "KOMPETANSER",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "OM MEG",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROSJEKTER", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "LUKK", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND-PROGRAMVAREINGENIØR", //[cite: 1, 2]
        availability: "TILGJENGELIG GLOBALT", //[cite: 1, 2]
        since: "KODER SIDEN 2021", //[cite: 1, 2]
        experience: "2+ ÅRS ERFARING I BRANSJEN" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Bygger{" "}
                <span className="text-[var(--accent-cyan)]">
                    skalerbare backend-systemer
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Utforsker
                </span>{" "}
                AI & spillutvikling
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend-programvareingeniør med spesialisering på skalerbare API-er, skybaserte (cloud-native) applikasjoner og moderne backend-arkitektur ved bruk av Python, Django og FastAPI. Brennende opptatt av AI, distribuerte systemer og å bygge programvare som kan skaleres.", //[cite: 1, 2]
        cta1: "Utforsk mitt arbeid", //[cite: 1, 2]
        cta2: "Last ned CV", //[cite: 1, 2]
        status: {
            head: "Rekrutteringsstatus", //[cite: 1, 2]
            stat: () => (
                <>
                    Basert i <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Åpen for fulltids-, remote-, hybrid- og relokeringsmuligheter.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Tekniske ferdigheter", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Utdanning", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Sertifiseringer", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Fritidsinteresser", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Språk", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programmeringsspråk", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend-utvikling", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend-utvikling", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Databaser", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Sky & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Verktøy & Plattformar", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Konsepter", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master i Computer Applications (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Pågående", //[cite: 1, 2]
                    description:
                    "Tar for øyeblikket en mastergrad med fokus på programvareingeniørfag, distribuerte systemer, cloud computing og moderne applikasjonsutvikling." //[cite: 1, 2]
                },
                {
                    degree: "Bachelor i Business Administration (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Uteksaminert med en CGPA på 8.13/10. Utviklet sterke analytiske ferdigheter, problemløsningsevner og forretningsledelseskompetanse, som gir verdifull innsikt i å designe programvare som samsvarer med reelle forretningsbehov." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Spillutvikling", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Jeg liker å lære Unity, C# og spilldesign ved å bygge små prototyper og studere spillmekanikker, level design og interaktive systemer." //[cite: 1, 2]
                },
                {
                    title: "Musikk & Sang", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Å synge er en av mine kreative favorittaktiviteter. Det hjelper meg med å slappe av, forbedre fokus og opprettholde en sunn balanse ved siden av programvareutvikling." //[cite: 1, 2]
                },
                {
                    title: "Matlaging & Kreativitet", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Matlaging lærer tålmodighet, oppmerksomhet på detaljer og kontinuerlig eksperimentering – egenskaper som jeg også bruker når jeg designer og bygger programvare." //[cite: 1, 2]
                },
                {
                    title: "Språk & Kultur", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Jeg lærer for øyeblikket japansk og liker å utforske ulike kulturer, teknologier og ideer gjennom reiser, bøker og nettsamfunn." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Engelsk", proficiency: "Profesjonell arbeidsnivå" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Morsmål / tospråklig" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Morsmål / tospråklig" }, //[cite: 1, 2]
                { language: "Japansk", proficiency: "Nybegynner (JLPT N5)" } //[cite: 1, 2]
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
                    date: "26. mars 2026",
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
                    date: "11. mars 2024",
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
                    date: "9. mars 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21. desember 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verifiser", //[cite: 1, 2]
        carouselCta: {
            next: "Neste", //[cite: 1, 2]
            prev: "Forrige" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Bakom koden", //[cite: 1, 2]
        heading: "Om meg", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jeg er en backend-programvareingeniør som spesialiserer meg på <strong className="font-medium text-[var(--foreground)]">skalerbare API-er, skybaserte applikasjoner og moderne backend-systemer.</strong> Tar for øyeblikket en <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> ved <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, og jeg liker å bygge <strong className="font-medium text-[var(--foreground)]">pålitelig programvare</strong> ved bruk av <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> og <span className="text-[var(--accent-cyan)]">moderne webteknologier</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jeg liker å <strong className="font-medium text-[var(--foreground)]">designe backend-systemer</strong> som er <span className="text-[var(--accent-cyan)]">vedlikeholdbare</span>, <span className="text-[var(--accent-cyan)]">sikre</span> og <span className="text-[var(--accent-cyan)]">skalerbare</span>. Enten det dreier seg om utvikling av REST API-er, integrering av tredjepartstjenester eller distribusjon av applikasjoner til skyen, fokuserer jeg på å skrive <span className="text-[var(--accent-cyan)]">ren og pålitelig kode</span> som løser reelle problemer.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Utover backend-utvikling liker jeg å utforske <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> og <span className="text-[var(--accent-cyan)]">spillutvikling</span> som kreative sideprosjekter. Læring på tvers av ulike teknologier hjelper meg med å tilnærme meg programvareutvikling med både teknisk dybde og kreativ problemløsning.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Utdanning", //[cite: 1, 2]
                heading: "Master i Computer Applications", //[cite: 1, 2]
                para: "Manipal University Jaipur (Pågående)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Sted", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Åpen for remote-, hybrid- og relokeringsmuligheter" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Nåværende fokus", //[cite: 1, 2]
                heading: "Backend-utvikling", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST API-er" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Showcase", //[cite: 1, 2]
        subtitle: "Arbeid & Lidenskaper", //[cite: 1, 2]
        para: "Programvareingeniørfag • AI • Musikk • Kreativitet • Sertifikater", //[cite: 1, 2]
        filters: [
            "Utvalgte", //[cite: 1, 2]
            "Programvare", //[cite: 1, 2]
            //   "AI",
            //   "Musikk",
            "Kreative", //[cite: 1, 2]
            "Alle", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Utviklet og implementert et moderne ensidig bedriftsnettsted ved hjelp av Next.js. Konfigurerte Docker, Nginx og produksjons-hosting, samtidig som responsivitet, ytelse og distribusjons-workflows ble optimalisert.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Besøk nettside", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Utviklet og vedlikeholdt en responsiv Shopify-integrert AI-chat-widget som støtter produktoppdagelse og kundeinteraksjoner. Bygget backend-API-er, integrerte Shopify GraphQL og opprettet Looker Studio-dashbord for å overvåke brukerengasjement og forretningsmål.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Utviklet et full-stack innholdshåndteringssystem (CMS) med sikre administrasjonsdashbord, dynamisk innholdshåndtering, CRUD-operasjoner og produksjonsdistribusjon på Ubuntu ved bruk av Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Besøk nettside", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Utviklet en responsiv fintech-plattform som kobler brukere til den verifiserte finansielle rådgiveren Raman Khandelwal gjennom en moderne, type-sikker frontend-arkitektur.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Besøk nettside" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Bygget på tre dager en AI-drevet virtuell selfie-plattform for et stort Durga Puja kulturelt initiativ. Utviklet full frontend, Firebase-backend, Firestore-database, administrasjonsdashbord, AI-basert bakgrunnsfjerning ved bruk av Dezgo API-er, bildeforbedringskontroller og Google Tag Manager-integrasjon før applikasjonen ble distribuert med Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Besøk nettside", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Utviklet den offisielle plattformen for Entrepreneurship Cell med tilpasset Django-administrasjon, mentorstyring, alumnistyring, bidragssporing og arbeidsflyt for blogggodkjenning. Plattformen representerte institusjonen under IIT Bombay E-Cell-konkurransen og ble bygget på tre dager.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Designet og utviklet en multi-vendor trenings- og e-handels-SaaS-plattform som støtter administratorer, treningssentereiere, trenere, ansatte og kunder. Implementert rollebasert tilgangskontroll (RBAC), PhonePe-betalingsintegrasjon, REST API-er for Flutter-applikasjoner, fellesskapsfunksjoner, QR-oppmøte, bookinghåndtering og analytiske dashbord.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Bygget et tilpasset café-nettsted med administrasjonsdashbord for håndtering av menyelementer, kategorier, hero-seksjonens innhold, reklamebannere og nettstedsbilder. Skapte en intuitiv innholdshåndteringsopplevelse som lar personalet effektivt oppdatere nettstedets innhold mens en responsiv og visuelt konsistent kundeopplevelse opprettholdes.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Bygget et responsivt markedsføringsnettsted for et treningsutstyrsmerke med fokus på produktpresentasjon, merkevare-storytelling og leadgenerering. Utviklet engasjerende landingssideseksjoner, produktutstillinger, reklameinnhold og mobilvennlige layouter for å øke brukerengasjement og merkevaresynlighet.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programvare", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Jobbet med en tilpasset plattform for bygging av eiendomsnettsteder som tillot bedrifter å generere og administrere nettsteder fra konfigurerbare maler. Implementerte dynamisk seksjonsstyring, innholdsredigering, bildeoppdateringer og mal-tilpasningsfunksjoner ved bruk av Django, Bootstrap 5 og AJAX. Integrerte eiendoms- og forretningsdata fra ActivCRM, som muliggjorde automatisk innholdssynkronisering mellom CRM og nettsted-plattformer.", //[cite: 1, 2]
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
                description: "Opprettet en markedsføringskatalog for en industriell produksjonsbedrift, som transformerte tekniske produktspesifikasjoner til visuelt engasjerende og lettnavigerte layouter. Designet produktutstillinger, merkevareaktiver og reklamesider med Canva, samtidig som konsistens, lesbarhet og profesjonelle presentasjonsstandarder ble sikret.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativt", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Utviklet visuell identitet og markedsføringskatalog for en industriell produksjonsbedrift. Designet firmalogo, merkevareaktiver og produktkatalog-layouter, noe som skapte en sammenhengende merkevareopplevelse som effektivt presenterte teknisk produktinformasjon gjennom en klar og visuelt tiltalende design.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativt", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Utviklet en bedriftsmarkedsføringskatalog for et ingeniørrådgivningsfirma, som fremhevet tjenesteporteføljer, teknisk kompetanse og prosjekterfaring. Designet visuelt strukturerte layouter, merkevareinnhold og presentasjonsmateriell som transformerte komplekse ingeniørkonsepter til tilgjengelig og profesjonelt markedsføringsmateriell.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Reisen fortsetter", //[cite: 1, 2]

        intro:
            "Hvis du leter etter en backend-programvareingeniør som liker å bygge skalerbare systemer, skybaserte applikasjoner og pålitelige digitale produkter, vil jeg gjerne komme i kontakt med deg. Jeg er alltid interessert i å diskutere nye muligheter, utfordrende prosjekter og innovative ideer.", //[cite: 1, 2]

        availability:
            "For øyeblikket tilgjengelig for heltidsstillinger, remote-muligheter, freelance-prosjekter og internasjonal relokering.", //[cite: 1, 2]

        cta: {
            email: "Send meg en e-post", //[cite: 1, 2]
            linkedin: "Ta kontakt på LinkedIn", //[cite: 1, 2]
        },

        quote: "Ethvert flott prosjekt starter med en samtale.", //[cite: 1, 2]
    }
};