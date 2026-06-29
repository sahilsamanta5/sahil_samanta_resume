import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "DOMŮ",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "DOVEDNOSTI",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "O MNĚ",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTY", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "ZBALIT", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND SOFTWAROVÝ INŽENÝR", //[cite: 1, 2]
        availability: "DOSTUPNÝ PO CELÉM SVĚTĚ", //[cite: 1, 2]
        since: "KÓDUJI OD ROKU 2021", //[cite: 1, 2]
        experience: "2+ ROKY PRAXE V OBORU" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Buduji{" "}
                <span className="text-[var(--accent-cyan)]">
                    škálovatelné backend systémy
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Zkoumám
                </span>{" "}
                AI a vývoj her
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend softwarový inženýr se specializací na škálovatelná API, cloud-native aplikace a moderní backend architekturu pomocí Pythonu, Djanga a FastAPI. Nadšenec do AI, distribuovaných systémů a tvorby softwaru, který roste společně s projektem.", //[cite: 1, 2]
        cta1: "Prozkoumat mou práci", //[cite: 1, 2]
        cta2: "Stáhnout životopis", //[cite: 1, 2]
        status: {
            head: "Stav náboru", //[cite: 1, 2]
            stat: () => (
                <>
                    Sídlo: <span className="text-[var(--accent-blue)]">Kalkata, Indie</span>. Otevřený příležitostem na plný úvazek, remote, hybrid i relokaci.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Technické dovednosti", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Vzdělání", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certifikace", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Koníčky", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Jazyky", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programovací jazyky", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend inženýrství", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend inženýrství", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Databáze", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud a DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Nástroje a platformy", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Koncepty", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Magistr v oboru počítačových aplikací (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 – současnost", //[cite: 1, 2]
                    description:
                    "Aktuálně studuji magisterský program se zaměřením na softwarové inženýrství, distribuované systémy, cloud computing a moderní vývoj aplikací." //[cite: 1, 2]
                },
                {
                    degree: "Bakalář v oboru Business Administration (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kalkata", //[cite: 1, 2]
                    timeline: "2021 – 2024", //[cite: 1, 2]
                    description:
                    "Absolvoval s CGPA 8.13/10. Rozvinul silné analytické schopnosti, schopnost řešit problémy a dovednosti v oblasti řízení podniku, což poskytuje cenný vhled při navrhování softwaru, který odpovídá skutečným potřebám podnikání." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Vývoj her", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Baví mě učit se Unity, C# a herní design prostřednictvím tvorby malých prototypů a studiem herních mechanismů, designu úrovní a interaktivních systémů." //[cite: 1, 2]
                },
                {
                    title: "Hudba a zpěv", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Zpěv je jedním z mých oblíbených kreativních ventilů. Pomáhá mi relaxovat, zlepšit soustředění a udržovat zdravou rovnováhu vedle vývoje softwaru." //[cite: 1, 2]
                },
                {
                    title: "Vaření a kreativita", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Vaření mě učí trpělivosti, pozornosti k detailu a neustálému experimentování – vlastnosti, které uplatňuji i při navrhování a tvorbě softwaru." //[cite: 1, 2]
                },
                {
                    title: "Učení se jazykům a kultura", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Momentálně se učím japonsky a rád objevuji různé kultury, technologie a nápady prostřednictvím cestování, knih a online komunit." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Angličtina", proficiency: "Profesní úroveň" }, //[cite: 1, 2]
                { language: "Hindština", proficiency: "Rodilý mluvčí / Bilingvní" }, //[cite: 1, 2]
                { language: "Bengálština", proficiency: "Rodilý mluvčí / Bilingvní" }, //[cite: 1, 2]
                { language: "Japonština", proficiency: "Začátečník (JLPT N5)" } //[cite: 1, 2]
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
        cta: "Ověřit", //[cite: 1, 2]
        carouselCta: {
            next: "Další", //[cite: 1, 2]
            prev: "Předchozí" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Za kódem", //[cite: 1, 2]
        heading: "O mně", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jsem backend softwarový inženýr se specializací na <strong className="font-medium text-[var(--foreground)]">škálovatelná API, cloud-native aplikace a moderní backend systémy.</strong> Momentálně studuji <span className="text-[var(--accent-cyan)]">magisterský program (MCA)</span> na <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong> a rád buduji <strong className="font-medium text-[var(--foreground)]">spolehlivý software</strong> s využitím <span className="text-[var(--accent-cyan)]">Pythonu</span>, <span className="text-[var(--accent-cyan)]">Djanga</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> a <span className="text-[var(--accent-cyan)]">moderních webových technologií</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Rád <strong className="font-medium text-[var(--foreground)]">navrhuji backend systémy</strong>, které jsou <span className="text-[var(--accent-cyan)]">udržovatelné</span>, <span className="text-[var(--accent-cyan)]">bezpečné</span> a <span className="text-[var(--accent-cyan)]">škálovatelné</span>. Ať už jde o vývoj REST API, integraci služeb třetích stran nebo nasazení aplikací do cloudu, zaměřuji se na psaní <span className="text-[var(--accent-cyan)]">čistého a spolehlivého kódu</span>, který řeší reálné problémy.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Mimo backend inženýrství rád prozkoumávám <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> a <span className="text-[var(--accent-cyan)]">vývoj her</span> jako kreativní vedlejší projekty. Učení se napříč různými technologiemi mi pomáhá přistupovat k softwarovému inženýrství s technickou hloubkou i kreativním řešením problémů.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Vzdělání", //[cite: 1, 2]
                heading: "Magistr v oboru počítačových aplikací", //[cite: 1, 2]
                para: "Manipal University Jaipur (probíhající)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lokalita", //[cite: 1, 2]
                heading: "Kalkata, Indie", //[cite: 1, 2]
                para: "Otevřený pro remote, hybridní spolupráci i relokaci" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Aktuální zaměření", //[cite: 1, 2]
                heading: "Backend inženýrství", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Přehlídka", //[cite: 1, 2]
        subtitle: "Práce a vášně", //[cite: 1, 2]
        para: "Softwarové inženýrství • AI • Hudba • Kreativita • Certifikáty", //[cite: 1, 2]
        filters: [
            "Vybrané", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Kreativní", //[cite: 1, 2]
            "Vše", //[cite: 1, 2]
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
                description: "Vývoj a nasazení moderního firemního webu (SPA) pomocí Next.js. Konfigurace Dockeru, Nginxu a produkčního hostingu při optimalizaci odezvy, výkonu a nasazovacích workflow.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Navštívit web", //[cite: 1, 2]
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
                description: "Vývoj a údržba responsivního AI chat widgetu integrovaného se Shopify, podporujícího vyhledávání produktů a interakci se zákazníky. Tvorba backend API, integrace Shopify GraphQL a vytvoření Looker Studio dashboardů pro sledování zapojení uživatelů a obchodních metrik.", //[cite: 1, 2]
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
                description: "Vývoj full-stack systému pro správu obsahu (CMS) se zabezpečenými administrátorskými panely, dynamickou správou obsahu, CRUD operacemi a nasazením do produkce na Ubuntu pomocí Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Navštívit web", //[cite: 1, 2]
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
                description: "Vývoj responsivní fintech platformy propojující uživatele s ověřeným finančním poradcem Ramanem Khandelwalem prostřednictvím moderní, typově bezpečné (type-safe) frontend architektury.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Navštívit web" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Vytvoření AI platformy pro virtuální selfie během tří dnů pro velkou kulturní iniciativu Durga Puja. Vývoj kompletního frontendu, Firebase backendu, databáze Firestore, administrátorského panelu, odstranění pozadí pomocí AI (Dezgo API), ovládání vylepšení obrazu a integrace Google Tag Manageru před nasazením na Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Navštívit web", //[cite: 1, 2]
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
                description: "Vývoj oficiální platformy Entrepreneurship Cell s vlastním Django adminem, správou mentorů, správou absolventů, sledováním příspěvků a workflow schvalování blogů. Platforma reprezentovala instituci na soutěži IIT Bombay E-Cell a byla vytvořena během tří dnů.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Návrh a vývoj SaaS platformy pro fitness a e-commerce pro více prodejců, podporující administrátory, majitele posiloven, trenéry, personál a zákazníky. Implementace řízení přístupu na základě rolí (RBAC), integrace plateb PhonePe, REST API pro aplikace Flutter, komunitní funkce, docházka přes QR, správa rezervací a analytické dashboardy.", //[cite: 1, 2]
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
                description: "Tvorba webu kavárny na míru s administrátorským panelem pro správu menu, kategorií, hlavního obsahu, propagačních bannerů a obrázků. Vytvoření intuitivní správy obsahu, která umožňuje personálu efektivně aktualizovat web a zároveň zachovat responsivní a vizuálně konzistentní uživatelskou zkušenost.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Vývoj responsivního marketingového webu pro značku fitness vybavení, zaměřeného na prezentaci produktů, příběh značky a generování leadů. Vytvoření poutavých částí landing page, přehledů produktů, propagačního obsahu a layoutů vhodných pro mobily pro zvýšení zapojení uživatelů a viditelnosti značky.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Práce na platformě pro tvorbu realitních webů na míru, která umožnila firmám generovat a spravovat weby z konfigurovatelných šablon. Implementace dynamické správy sekcí, editace obsahu, aktualizací obrázků a úprav šablon pomocí Django, Bootstrap 5 a AJAX. Integrace realitních a obchodních dat z ActivCRM, umožňující automatickou synchronizaci obsahu mezi CRM a webovými platformami.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativní", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Tvorba marketingového katalogu pro průmyslovou výrobní společnost, transformace technických specifikací produktů do vizuálně poutavých a snadno ovladatelných layoutů. Návrh produktových přehledů, brandových prvků a promo stránek pomocí Canvy s důrazem na konzistenci, čitelnost a profesionální standardy prezentace.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativní", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Vývoj vizuální identity a marketingového katalogu pro průmyslovou výrobní společnost. Návrh loga společnosti, brandových prvků a layoutů produktového katalogu, čímž vznikl ucelený zážitek značky, který efektivně prezentuje technické informace o produktech prostřednictvím čistého a vizuálně atraktivního designu.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreativní", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Vývoj korporátního marketingového katalogu pro inženýrskou poradenskou firmu, zdůrazňující portfolio služeb, technickou kompetenci a zkušenosti s projekty. Návrh vizuálně strukturovaných layoutů, brandovaného obsahu a prezentačních materiálů, které proměnily komplexní inženýrské koncepty v přístupné a profesionální marketingové materiály.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Cesta pokračuje", //[cite: 1, 2]

        intro:
            "Pokud hledáte backend softwarového inženýra, který rád buduje škálovatelné systémy, cloud-native aplikace a spolehlivé digitální produkty, rád se s vámi spojím. Vždy mě zajímá diskuse o nových příležitostech, náročných projektech a inovativních nápadech.", //[cite: 1, 2]

        availability:
            "Aktuálně dostupný pro pozice na plný úvazek, remote příležitosti, freelance projekty a mezinárodní relokaci.", //[cite: 1, 2]

        cta: {
            email: "Napsat e-mail", //[cite: 1, 2]
            linkedin: "Propojit se na LinkedIn", //[cite: 1, 2]
        },

        quote: "Každý skvělý projekt začíná rozhovorem.", //[cite: 1, 2]
    }
};