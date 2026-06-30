import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/lt/hero_bg.jpg",
        contact: "/images/bg/lt/contact_bg.png"
    },
    header: {
        nav: [
            { label: "PRADŽIA",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "ĮGŪDŽIAI",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "APIE MANE",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTAI", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKTAI",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "SUSKLEISTI", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND PROGRAMINĖS ĮRANGOS INŽINIERIUS", //[cite: 1, 2]
        availability: "PASIEKIAMAS VISOJE PASAULYJE", //[cite: 1, 2]
        since: "PROGRAMUOJU NUO 2021 M.", //[cite: 1, 2]
        experience: "2+ METAI INDUSTRIJOJE" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Kuriu{" "}
                <span className="text-[var(--accent-cyan)]">
                    keičiamo dydžio backend sistemas
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Tyrinėju
                </span>{" "}
                AI ir žaidimų kūrimą
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend programinės įrangos inžinierius, kurio specializacija – keičiamo dydžio API, debesijos (cloud-native) programos ir moderni backend architektūra naudojant Python, Django ir FastAPI. Aistringai domiuosi AI, paskirstytomis sistemomis ir lengvai plečiamos programinės įrangos kūrimu.", //[cite: 1, 2]
        cta1: "Naršyti mano darbus", //[cite: 1, 2]
        cta2: "Atsisiųsti CV", //[cite: 1, 2]
        status: {
            head: "Įdarbinimo būsena", //[cite: 1, 2]
            stat: () => (
                <>
                    Įsikūręs <span className="text-[var(--accent-blue)]">Kalkutoje, Indijoje</span>. Atviras pilno etato, nuotolinio, hibridinio darbo ir persikėlimo galimybėms.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_lt.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Techniniai įgūdžiai", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Išsilavinimas", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Sertifikatai", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Laisvalaikis", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Kalbos", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programavimo kalbos", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend inžinerija", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend inžinerija", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Duomenų bazės", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Debesija ir DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Įrankiai ir platformos", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Koncepcijos", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Kompiuterinių programų magistras (MCA)", //[cite: 1, 2]
                    institution: "Manipalio universitetas, Džaipuras", //[cite: 1, 2]
                    timeline: "2026 m. - Dabar", //[cite: 1, 2]
                    description:
                    "Šiuo metu siekiu magistro laipsnio, daugiausia dėmesio skirdamas programinės įrangos inžinerijai, paskirstytoms sistemoms, debesų kompiuterijai ir modernių programų kūrimui." //[cite: 1, 2]
                },
                {
                    degree: "Verslo administravimo bakalauras (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan vadybos mokslų institutas, Kalkuta", //[cite: 1, 2]
                    timeline: "2021 - 2024 m.", //[cite: 1, 2]
                    description:
                    "Baigiau studijas su 8,13/10 balų vidurkiu (CGPA). Išugdžiau stiprius analitinius, problemų sprendimo ir verslo valdymo įgūdžius, suteikiančius vertingų įžvalgų kuriant programinę įrangą, atitinkančią realius verslo poreikius." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Žaidimų kūrimas", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Man patinka mokytis Unity, C# ir žaidimų dizaino kuriant nedidelius prototipus bei studijuojant žaidimo mechaniką, lygių dizainą ir interaktyvias sistemas." //[cite: 1, 2]
                },
                {
                    title: "Muzika ir dainavimas", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Dainavimas yra viena mėgstamiausių mano kūrybinės išraiškos formų. Tai padeda man atsipalaiduoti, pagerinti susikaupimą ir išlaikyti sveiką pusiausvyrą šalia programinės įrangos kūrimo." //[cite: 1, 2]
                },
                {
                    title: "Maisto gaminimas ir kūrybiškumas", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Maisto gaminimas moko kantrybės, dėmesio detalėms ir nuolatinio eksperimentavimo – savybių, kurias taip pat taikau kurdamas ir konstruodamas programinę įrangą." //[cite: 1, 2]
                },
                {
                    title: "Kalbų ir kultūrų mokymasis", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Šiuo metu mokausi japonų kalbos ir mėgstu pažinti skirtingas kultūras, technologijas bei idėjas keliaudamas, skaitydamas knygas ir dalyvaudamas internetinėse bendruomenėse." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Anglų", proficiency: "Profesinis darbinis lygis" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Gimtoji / dvikalbis lygis" }, //[cite: 1, 2]
                { language: "Bengalų", proficiency: "Gimtoji / dvikalbis lygis" }, //[cite: 1, 2]
                { language: "Japonų", proficiency: "Pradedantysis (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "March 26, 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "August 26, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "April 13, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "March 11, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "September 30, 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "July 1, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "June 17, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "April 24, 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "March 9, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "December 21, 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Patvirtinti", //[cite: 1, 2]
        carouselCta: {
            next: "Kitas", //[cite: 1, 2]
            prev: "Ankstesnis" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Už kodo", //[cite: 1, 2]
        heading: "Apie mane", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Esu backend programinės įrangos inžinierius, besispecializuojantis <strong className="font-medium text-[var(--foreground)]">keičiamo dydžio API, debesijos programų ir modernių backend sistemų kūrime.</strong> Šiuo metu studijuoju <span className="text-[var(--accent-cyan)]">kompiuterinių programų magistrantūrą (MCA)</span> <strong className="font-medium text-[var(--foreground)]">Manipalio universitete, Džaipure.</strong> Man patinka kurti <strong className="font-medium text-[var(--foreground)]">patikimą programinę įrangą</strong> naudojant <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> ir <span className="text-[var(--accent-cyan)]">modernias interneto technologijas</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Man patinka projektuoti <strong className="font-medium text-[var(--foreground)]">backend sistemas</strong>, kurias <span className="text-[var(--accent-cyan)]">lengva prižiūrėti</span>, kurios yra <span className="text-[var(--accent-cyan)]">saugios</span> ir <span className="text-[var(--accent-cyan)]">keičiamo dydžio</span>. Nesvarbu, ar tai būtų REST API kūrimas, trečiųjų šalių paslaugų integravimas, ar programų diegimas debesyje, aš sutelkiu dėmesį į <span className="text-[var(--accent-cyan)]">švaraus, patikimo kodo</span>, sprendžiančio realias problemas, rašymą.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Be backend inžinerijos, aš mėgstu tyrinėti <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> ir <span className="text-[var(--accent-cyan)]">žaidimų kūrimą</span> kaip kūrybinius šalutinius projektus. Skirtingų technologijų mokymasis padeda man pažvelgti į programinės įrangos inžineriją turint tiek techninį gylį, tiek kūrybišką problemų sprendimą.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Išsilavinimas", //[cite: 1, 2]
                heading: "Kompiuterinių programų magistras", //[cite: 1, 2]
                para: "Manipalio universitetas, Džaipuras (Vyksta)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Vieta", //[cite: 1, 2]
                heading: "Kalkuta, Indija", //[cite: 1, 2]
                para: "Atviras nuotolinio, hibridinio darbo ir persikėlimo galimybėms" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Dabartinis dėmesys", //[cite: 1, 2]
                heading: "Backend inžinerija", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Darbai", //[cite: 1, 2]
        subtitle: "Darbas ir pomėgiai", //[cite: 1, 2]
        para: "Programinės įrangos inžinerija • AI • Muzika • Kūrybiškumas • Sertifikatai", //[cite: 1, 2]
        filters: [
            "Svarbiausi", //[cite: 1, 2]
            "Programinė įranga", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Kūryba", //[cite: 1, 2]
            "Viskas", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Sukurta ir įdiegta moderni vieno puslapio įmonės svetainė naudojant Next.js. Sukonfigūruotas Docker, Nginx ir gamybinis talpinimas, optimizuojant reagavimą, našumą ir diegimo darbo eigas.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Apsilankyti svetainėje", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Sukurtas ir prižiūrimas adaptyvus su Shopify integruotas AI pokalbių valdiklis, palaikantis produktų atradimą ir klientų sąveiką. Sukurti backend API, integruota Shopify GraphQL ir sukurti Looker Studio prietaisų skydeliai vartotojų įsitraukimui ir verslo metrikai stebėti.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Sukurta „full-stack“ turinio valdymo sistema (CMS) su saugiais administravimo prietaisų skydeliais, dinaminiu turinio valdymu, CRUD operacijomis ir gamybiniu diegimu Ubuntu sistemoje naudojant Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Apsilankyti svetainėje", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Sukurta adaptyvi finansinių technologijų platforma, jungianti vartotojus su patvirtintu finansų patarėju Raman Khandelwal per modernią, tipams saugią (type-safe) frontend architektūrą.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Apsilankyti svetainėje" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Per tris dienas didžiulei Durga Puja kultūrinei iniciatyvai sukurta AI varoma virtualių asmenukių platforma. Sukurtas visas frontend, Firebase backend, Firestore duomenų bazė, administravimo prietaisų skydelis, AI fonų šalinimas naudojant Dezgo API, vaizdo patobulinimo valdikliai ir Google Tag Manager integracija prieš įdiegiant programą su Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Apsilankyti svetainėje", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Sukurta oficiali verslumo ląstelės (Entrepreneurship Cell) platforma su pritaikytu Django administravimu, mentorių valdymu, alumnų valdymu, indėlių stebėjimu ir tinklaraščių patvirtinimo darbo eiga. Platforma atstovavo institucijai IIT Bombay E-Cell konkurso metu ir buvo sukurta per tris dienas.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Suprojektuota ir sukurta kelių pardavėjų kūno rengybos ir elektroninės prekybos SaaS platforma, palaikanti administratorius, sporto salių savininkus, trenerius, darbuotojus ir klientus. Įdiegtas vaidmenimis pagrįstas prieigos valdymas (RBAC), PhonePe mokėjimų integracija, REST API Flutter programoms, bendruomenės funkcijos, QR lankomumas, užsakymų valdymas ir analitiniai prietaisų skydeliai.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Sukurta pritaikyta kavinės svetainė su administravimo prietaisų skydeliu, skirtu valdyti meniu elementus, kategorijas, pagrindinės skilties (hero section) turinį, reklaminius reklamjuosčius ir svetainės vaizdus. Sukurta intuityvi turinio valdymo patirtis, leidžianti darbuotojams efektyviai atnaujinti svetainės turinį, kartu išlaikant adaptyvią ir vizualiai nuoseklią klientų patirtį." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Sukurta adaptyvi rinkodaros svetainė kūno rengybos įrangos prekės ženklui, orientuota į produktų pristatymą, prekės ženklo istorijos pasakojimą ir potencialių klientų pritraukimą. Sukurtos įtraukiančios nukreipimo puslapių (landing page) skiltys, produktų vitrinos, reklaminis turinys ir mobiliesiems pritaikyti maketai, siekiant padidinti vartotojų įsitraukimą ir prekės ženklo matomumą." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Programinė įranga", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Dirbta prie pritaikytos nekilnojamojo turto svetainių kūrimo platformos, leidusios įmonėms kurti ir valdyti svetaines iš konfigūruojamų šablonų. Įdiegtas dinaminis skilčių valdymas, turinio redagavimas, vaizdų atnaujinimas ir šablonų pritaikymo funkcijos naudojant Django, Bootstrap 5 ir AJAX. Integruoti nekilnojamojo turto ir verslo duomenys iš ActivCRM, įgalinant automatinį turinio sinchronizavimą tarp CRM ir svetainių platformų.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kūryba", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Sukurtas rinkodaros katalogas pramoninės gamybos įmonei, paverčiant technines gaminių specifikacijas vizualiai patraukliais ir lengvai naršomais maketais. Naudojant Canva sukurti produktų pristatymai, prekės ženklo ištekliai ir reklaminiai puslapiai, kartu užtikrinant nuoseklumą, skaitomumą ir profesionalius pristatymo standartus." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kūryba", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Sukurtas vizualinis identitetas ir rinkodaros katalogas pramoninės gamybos įmonei. Sukurtas įmonės logotipas, prekės ženklo ištekliai ir produktų katalogo maketai, sukuriant vientisą prekės ženklo patirtį, kuri efektyviai pateikė techninę produkto informaciją per aiškų ir vizualiai patrauklų dizainą." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kūryba", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Sukurtas įmonės rinkodaros katalogas inžinerinių konsultacijų firmai, išryškinant paslaugų portfelius, techninę kompetenciją ir projektų patirtį. Sukurti vizualiai struktūruoti maketai, firminis turinys ir pristatymo medžiaga, kuri sudėtingas inžinerines koncepcijas pavertė prieinama ir profesionalia rinkodaros medžiaga." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontaktai", //[cite: 1, 2]
        heading: "Kelionė tęsiasi", //[cite: 1, 2]

        intro:
            "Jei ieškote backend programinės įrangos inžinieriaus, kuriam patinka kurti keičiamo dydžio sistemas, debesijos programas ir patikimus skaitmeninius produktus, mielai su jumis susisiekčiau. Mane visada domina galimybės aptarti naujas perspektyvas, sudėtingus projektus ir novatoriškas idėjas.", //[cite: 1, 2]

        availability:
            "Šiuo metu esu atviras pilno etato pasiūlymams, nuotolinio darbo galimybėms, laisvai samdomiems projektams ir tarptautiniam persikėlimui.", //[cite: 1, 2]

        cta: {
            email: "Parašyti el. laišką", //[cite: 1, 2]
            linkedin: "Susisiekti per LinkedIn", //[cite: 1, 2]
        },

        quote: "Kiekvienas puikus projektas prasideda nuo pokalbio.", //[cite: 1, 2]
    }
};