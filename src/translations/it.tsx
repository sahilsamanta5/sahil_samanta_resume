import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "HOME",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "COMPETENZE",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "CHI SONO",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROGETTI", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "CONTATTI",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "CHIUDI", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "INGEGNERE SOFTWARE BACKEND", //[cite: 1, 2]
        availability: "DISPONIBILE A LIVELLO GLOBALE", //[cite: 1, 2]
        since: "PROGRAMMO DAL 2021", //[cite: 1, 2]
        experience: "2+ ANNI DI ESPERIENZA NEL SETTORE" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Costruisco{" "}
                <span className="text-[var(--accent-cyan)]">
                    sistemi backend scalabili
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Esploro
                </span>{" "}
                IA e sviluppo giochi
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Ingegnere software backend specializzato in API scalabili, applicazioni cloud-native e architettura backend moderna utilizzando Python, Django e FastAPI. Appassionato di IA, sistemi distribuiti e costruzione di software progettato per scalare.", //[cite: 1, 2]
        cta1: "Esplora i miei lavori", //[cite: 1, 2]
        cta2: "Scarica il CV", //[cite: 1, 2]
        status: {
            head: "Stato di assunzione", //[cite: 1, 2]
            stat: () => (
                <>
                    Con sede a <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Aperto a opportunità full-time, remote, ibride e di trasferimento.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Competenze tecniche", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Formazione", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certificazioni", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Hobby", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Lingue", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Linguaggi di programmazione", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Ingegneria Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Ingegneria Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Database", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud e DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Strumenti e piattaforme", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Concetti", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master in Applicazioni Informatiche (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Presente", //[cite: 1, 2]
                    description:
                    "Attualmente sto conseguendo un master con focus su ingegneria del software, sistemi distribuiti, cloud computing e sviluppo di applicazioni moderne." //[cite: 1, 2]
                },
                {
                    degree: "Laurea in Amministrazione Aziendale (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Laureato con un CGPA di 8.13/10. Ho sviluppato solide capacità analitiche, di risoluzione dei problemi e di gestione aziendale, fornendo una visione preziosa nella progettazione di software allineato alle reali esigenze aziendali." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Sviluppo di giochi", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Mi piace imparare Unity, C# e game design creando piccoli prototipi e studiando meccaniche di gioco, level design e sistemi interattivi." //[cite: 1, 2]
                },
                {
                    title: "Musica e canto", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Cantare è uno dei miei sfoghi creativi preferiti. Mi aiuta a rilassarmi, migliorare la concentrazione e mantenere un sano equilibrio insieme allo sviluppo software." //[cite: 1, 2]
                },
                {
                    title: "Cucina e creatività", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Cucinare insegna pazienza, attenzione ai dettagli e sperimentazione continua: qualità che applico anche quando progetto e costruisco software." //[cite: 1, 2]
                },
                {
                    title: "Apprendimento di lingue e culture", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Attualmente sto imparando il giapponese e mi piace esplorare culture, tecnologie e idee diverse attraverso viaggi, libri e comunità online." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Inglese", proficiency: "Competenza professionale" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Madrelingua / Bilingue" }, //[cite: 1, 2]
                { language: "Bengalese", proficiency: "Madrelingua / Bilingue" }, //[cite: 1, 2]
                { language: "Giapponese", proficiency: "Principiante (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 giugno 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 giugno 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26 marzo 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26 agosto 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13 aprile 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11 marzo 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30 settembre 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1 luglio 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 giugno 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24 aprile 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9 marzo 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21 dicembre 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verifica", //[cite: 1, 2]
        carouselCta: {
            next: "Avanti", //[cite: 1, 2]
            prev: "Indietro" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Dietro il codice", //[cite: 1, 2]
        heading: "Chi sono", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Sono un ingegnere software backend specializzato in <strong className="font-medium text-[var(--foreground)]">API scalabili, applicazioni cloud-native e sistemi backend moderni.</strong> Attualmente sto conseguendo un <span className="text-[var(--accent-cyan)]">Master in Applicazioni Informatiche (MCA)</span> presso la <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, mi piace costruire <strong className="font-medium text-[var(--foreground)]">software affidabili</strong> utilizzando <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> e <span className="text-[var(--accent-cyan)]">tecnologie web moderne</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Mi piace <strong className="font-medium text-[var(--foreground)]">progettare sistemi backend</strong> che siano <span className="text-[var(--accent-cyan)]">manutenibili</span>, <span className="text-[var(--accent-cyan)]">sicuri</span> e <span className="text-[var(--accent-cyan)]">scalabili</span>. Che si tratti di sviluppare API REST, integrare servizi di terze parti o distribuire applicazioni nel cloud, mi concentro sulla scrittura di <span className="text-[var(--accent-cyan)]">codice pulito e affidabile</span> che risolve problemi del mondo reale.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Oltre all'ingegneria backend, mi piace esplorare <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> e lo <span className="text-[var(--accent-cyan)]">sviluppo di giochi</span> come progetti creativi secondari. Imparare attraverso diverse tecnologie mi aiuta ad approcciare l'ingegneria del software sia con profondità tecnica che con risoluzione creativa dei problemi.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Formazione", //[cite: 1, 2]
                heading: "Master in Applicazioni Informatiche", //[cite: 1, 2]
                para: "Manipal University Jaipur (in corso)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Posizione", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Aperto a opportunità remote, ibride e di trasferimento" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Focus attuale", //[cite: 1, 2]
                heading: "Ingegneria Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Vetrina", //[cite: 1, 2]
        subtitle: "Lavoro e Passioni", //[cite: 1, 2]
        para: "Ingegneria Software • IA • Musica • Creatività • Certificati", //[cite: 1, 2]
        filters: [
            "In evidenza", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "IA",
            //   "Musica",
            "Creativo", //[cite: 1, 2]
            "Tutto", //[cite: 1, 2]
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
                description: "Sviluppato e distribuito un moderno sito web aziendale a pagina singola utilizzando Next.js. Configurato Docker, Nginx e hosting di produzione ottimizzando reattività, prestazioni e flussi di lavoro di distribuzione.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Visita il sito web", //[cite: 1, 2]
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
                description: "Sviluppato e mantenuto un widget di chat AI reattivo integrato con Shopify che supporta la scoperta di prodotti e le interazioni con i clienti. Costruito API backend, integrato Shopify GraphQL e creato dashboard Looker Studio per monitorare il coinvolgimento degli utenti e le metriche aziendali.", //[cite: 1, 2]
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
                description: "Sviluppato un sistema di gestione dei contenuti (CMS) full-stack con dashboard di amministrazione sicure, gestione dinamica dei contenuti, operazioni CRUD e distribuzione di produzione su Ubuntu utilizzando Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Visita il sito web", //[cite: 1, 2]
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
                description: "Sviluppato una piattaforma fintech reattiva che collega gli utenti al consulente finanziario verificato Raman Khandelwal attraverso un'architettura frontend moderna e type-safe.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Visita il sito web" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Costruito in tre giorni una piattaforma di selfie virtuale basata su IA per una grande iniziativa culturale di Durga Puja. Sviluppato frontend completo, backend Firebase, database Firestore, dashboard amministrativa, rimozione dello sfondo tramite IA utilizzando le API Dezgo, controlli di miglioramento dell'immagine e integrazione di Google Tag Manager prima di distribuire l'applicazione con Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Visita il sito web", //[cite: 1, 2]
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
                description: "Sviluppato la piattaforma ufficiale della Entrepreneurship Cell con amministrazione Django personalizzata, gestione dei mentori, gestione degli ex allievi, tracciamento dei contributi e flussi di lavoro di approvazione dei blog. La piattaforma ha rappresentato l'istituzione durante il concorso IIT Bombay E-Cell ed è stata costruita in tre giorni.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Progettato e sviluppato una piattaforma SaaS di fitness ed e-commerce multi-vendor che supporta amministratori, proprietari di palestre, allenatori, personale e clienti. Implementato il controllo degli accessi basato sui ruoli (RBAC), integrazione dei pagamenti PhonePe, API REST per applicazioni Flutter, funzionalità della community, presenza QR, gestione delle prenotazioni e dashboard analitiche.", //[cite: 1, 2]
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
                description: "Costruito un sito web personalizzato per il caffè con dashboard di amministrazione per gestire voci di menu, categorie, contenuto della sezione hero, banner promozionali e immagini del sito web. Creata un'esperienza di gestione dei contenuti intuitiva che consente al personale di aggiornare in modo efficiente i contenuti del sito web mantenendo un'esperienza cliente reattiva e visivamente coerente.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Costruito un sito web di marketing reattivo per un marchio di attrezzature per il fitness incentrato sulla presentazione dei prodotti, sullo storytelling del marchio e sulla generazione di lead. Sviluppato sezioni di landing page coinvolgenti, vetrine di prodotti, contenuti promozionali e layout adatti ai dispositivi mobili per migliorare il coinvolgimento degli utenti e la visibilità del marchio.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Lavorato su una piattaforma di costruzione di siti web immobiliari personalizzati che consentiva alle aziende di generare e gestire siti web da modelli configurabili. Implementata la gestione dinamica delle sezioni, l'editing dei contenuti, gli aggiornamenti delle immagini e le funzionalità di personalizzazione del modello utilizzando Django, Bootstrap 5 e AJAX. Integrato dati immobiliari e aziendali da ActivCRM, consentendo la sincronizzazione automatica dei contenuti tra il CRM e le piattaforme dei siti web.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Creata una brochure di marketing per un'azienda di produzione industriale, trasformando le specifiche tecniche del prodotto in layout visivamente accattivanti e facili da navigare. Progettate vetrine di prodotti, risorse di branding e pagine promozionali utilizzando Canva, garantendo coerenza, leggibilità e standard professionali di presentazione.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Sviluppato l'identità visiva e il catalogo di marketing per un'azienda di produzione industriale. Progettato il logo aziendale, le risorse di branding e i layout del catalogo prodotti, creando un'esperienza di marca coesa che ha presentato efficacemente le informazioni tecniche del prodotto attraverso un design chiaro e visivamente accattivante.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Sviluppato un catalogo di marketing aziendale per una società di consulenza ingegneristica, evidenziando portafogli di servizi, competenze tecniche ed esperienza nei progetti. Progettati layout visivamente strutturati, contenuti di marca e materiali di presentazione che hanno trasformato concetti ingegneristici complessi in materiale di marketing accessibile e professionale.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Contatti", //[cite: 1, 2]
        heading: "Il viaggio continua", //[cite: 1, 2]

        intro:
            "Se stai cercando un ingegnere software backend a cui piace costruire sistemi scalabili, applicazioni cloud-native e prodotti digitali affidabili, mi piacerebbe mettermi in contatto con te. Sono sempre interessato a discutere di nuove opportunità, progetti impegnativi e idee innovative.", //[cite: 1, 2]

        availability:
            "Attualmente disponibile per posizioni full-time, opportunità remote, progetti freelance e trasferimento internazionale.", //[cite: 1, 2]

        cta: {
            email: "Inviami una email", //[cite: 1, 2]
            linkedin: "Connettiti su LinkedIn", //[cite: 1, 2]
        },

        quote: "Ogni grande progetto inizia con una conversazione.", //[cite: 1, 2]
    }
};