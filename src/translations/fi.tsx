import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]
import { RotatingStat } from "../components/RotatingStats";

const stats = [
  "12+ Sovellusta",
  "12+ Käyttöönottoa",
  "25+ Projektia",
  "40+ API:a",
  "3+ Verkkokauppa-alustaa",
  "5+ CMS",
];

export default {
    background: {
        hero: "/images/bg/fi/hero_bg.jpg",
        contact: "/images/bg/fi/contact_bg.png"
    },
    header: {
        nav: [
            { label: "ETUSIVU",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "OSAAMINEN",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "TIETOJA",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTIT", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "YHTEYSTIEDOT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "SULJE", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND-OHJELMISTOINSINÖÖRI", //[cite: 1, 2]
        availability: "SAATAVILLA MAAILMANLAAJUISESTI", //[cite: 1, 2]
        since: "KOODANNUT VUODESTA 2021", //[cite: 1, 2]
        experience: "2+ VUODEN KOKEMUS ALALTA" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="xl:whitespace-nowrap">
                    Kehitetty{" "}
                </span>

                <span className="xl:whitespace-nowrap">
                    <RotatingStat stats={stats} />
                </span>
            </>
        ),
        para: "Backend-ohjelmistoinsinööri, joka on erikoistunut skaalautuviin API-liittymiin, pilvinatiiveihin sovelluksiin ja moderniin backend-arkkitehtuuriin käyttäen Pythonia, Djangoa ja FastAPIdtä. Intohimona tekoäly, hajautetut järjestelmät ja skaalautuvan ohjelmiston rakentaminen.", //[cite: 1, 2]
        cta1: "Tutustu töihini", //[cite: 1, 2]
        cta2: "Lataa ansioluettelo", //[cite: 1, 2]
        status: {
            head: "Rekrytointistatus", //[cite: 1, 2]
            stat: () => (
                <>
                    Sijainti: <span className="text-[var(--accent-blue)]">Kolkata, Intia</span>. Avoimena kokoaikaisiin, etä-, hybridi- ja relokaatiomahdollisuuksiin.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_fi.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Tekninen osaaminen", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Koulutus", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Sertifikaatit", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Harrastukset", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Kielet", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Ohjelmointikielet", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend-kehitys", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend-kehitys", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Tietokannat", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Pilvi & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Työkalut & Alustat", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Konseptit", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Tietotekniikan maisteri (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Nykyhetki", //[cite: 1, 2]
                    description:
                    "Suoritan parhaillaan maisterintutkintoa keskittyen ohjelmistotuotantoon, hajautettuihin järjestelmiin, pilvilaskentaan ja moderniin sovelluskehitykseen." //[cite: 1, 2]
                },
                {
                    degree: "Kauppatieteiden kandidaatti (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Valmistuin CGPA 8.13/10. Kehitin vahvat analyyttiset, ongelmanratkaisu- ja liikkeenjohtotaidot, jotka tarjoavat arvokasta näkemystä todellisia liiketoimintatarpeita vastaavien ohjelmistojen suunnitteluun." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Pelinkehitys", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Nautin Unityn, C#:n ja pelisuunnittelun oppimisesta rakentamalla pieniä prototyyppejä ja tutkimalla pelimekaniikkaa, tasosuunnittelua ja interaktiivisia järjestelmiä." //[cite: 1, 2]
                },
                {
                    title: "Musiikki & Laulu", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Laulaminen on yksi suosikki-luovista harrastuksistani. Se auttaa minua rentoutumaan, parantamaan keskittymiskykyä ja ylläpitämään tervettä tasapainoa ohjelmistokehityksen rinnalla." //[cite: 1, 2]
                },
                {
                    title: "Ruoanlaitto & Luovuus", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Ruoanlaitto opettaa kärsivällisyyttä, huomiota yksityiskohtiin ja jatkuvaa kokeilua – ominaisuuksia, joita sovellan myös ohjelmistoja suunnitellessani ja rakentaessani." //[cite: 1, 2]
                },
                {
                    title: "Kielten & Kulttuurien opiskelu", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Opiskelen parhaillaan japania ja nautin erilaisten kulttuurien, teknologioiden ja ideoiden tutkimisesta matkailun, kirjojen ja verkkoyhteisöjen kautta." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Englanti", proficiency: "Ammatillinen kielitaito" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Äidinkieli / Kaksikielinen" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Äidinkieli / Kaksikielinen" }, //[cite: 1, 2]
                { language: "Japani", proficiency: "Aloittelija (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21. kesäkuuta 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21. kesäkuuta 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26. maaliskuuta 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26. elokuuta 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13. huhtikuuta 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11. maaliskuuta 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30. syyskuuta 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1. heinäkuuta 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17. kesäkuuta 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24. huhtikuuta 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9. maaliskuuta 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21. joulukuuta 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Vahvista", //[cite: 1, 2]
        carouselCta: {
            next: "Seuraava", //[cite: 1, 2]
            prev: "Edellinen" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Koodin takana", //[cite: 1, 2]
        heading: "Tietoja minusta", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Olen backend-ohjelmistoinsinööri, joka on erikoistunut <strong className="font-medium text-[var(--foreground)]">skaalautuviin API-liittymiin, pilvinatiiveihin sovelluksiin ja moderneihin backend-järjestelmiin.</strong> Suoritan parhaillaan <span className="text-[var(--accent-cyan)]">tietotekniikan maisterintutkintoa (MCA)</span> <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipurissa</strong>, ja nautin <strong className="font-medium text-[var(--foreground)]">luotettavien ohjelmistojen</strong> rakentamisesta käyttäen <span className="text-[var(--accent-cyan)]">Pythonia</span>, <span className="text-[var(--accent-cyan)]">Djangoa</span>, <span className="text-[var(--accent-cyan)]">FastAPIdtä</span> ja <span className="text-[var(--accent-cyan)]">moderneja verkkoteknologioita</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Nautin <strong className="font-medium text-[var(--foreground)]">backend-järjestelmien suunnittelusta</strong>, jotka ovat <span className="text-[var(--accent-cyan)]">ylläpidettäviä</span>, <span className="text-[var(--accent-cyan)]">turvallisia</span> ja <span className="text-[var(--accent-cyan)]">skaalautuvia</span>. Olipa kyseessä REST API:en kehittäminen, kolmannen osapuolen palveluiden integrointi tai sovellusten pilveen vieminen, keskityn kirjoittamaan <span className="text-[var(--accent-cyan)]">puhdasta ja luotettavaa koodia</span>, joka ratkaisee todellisia ongelmia.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Backend-kehityksen ohella nautin <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blenderin</span> ja <span className="text-[var(--accent-cyan)]">pelinkehityksen</span> tutkimisesta luovina sivuprojekteina. Eri teknologioiden oppiminen auttaa minua lähestymään ohjelmistotuotantoa sekä teknisellä syvyydellä että luovalla ongelmanratkaisulla.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Koulutus", //[cite: 1, 2]
                heading: "Tietotekniikan maisteri", //[cite: 1, 2]
                para: "Manipal University Jaipur (kestää)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Sijainti", //[cite: 1, 2]
                heading: "Kolkata, Intia", //[cite: 1, 2]
                para: "Avoin etä-, hybridi- ja relokaatiomahdollisuuksille" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Nykyinen painopiste", //[cite: 1, 2]
                heading: "Backend-kehitys", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Showcase", //[cite: 1, 2]
        subtitle: "Työ & Intohimot", //[cite: 1, 2]
        para: "Ohjelmistotuotanto • Tekoäly • Musiikki • Luovuus • Sertifikaatit", //[cite: 1, 2]
        filters: [
            "Esittelyssä", //[cite: 1, 2]
            "Ohjelmisto", //[cite: 1, 2]
            //   "AI",
            //   "Musiikki",
            "Luova", //[cite: 1, 2]
            "Kaikki", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Kehitin ja julkaisin modernin yhden sivun yrityssivuston Next.js:llä. Konfiguroin Dockerin, Nginxin ja tuotantohostauksen optimoiden samalla responsiivisuuden, suorituskyvyn ja julkaisuprosessit.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Vieraile sivustolla", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Kehitin ja ylläpidin responsiivista Shopify-integroitua AI-chattiwidgetiä, joka tukee tuotteiden löytämistä ja asiakasvuorovaikutusta. Rakensin backend-API:t, integroin Shopify GraphQL:n ja loin Looker Studio -koontinäytöt käyttäjien sitoutumisen ja liiketoimintamittareiden seuraamiseksi.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Kehitin full-stack sisällönhallintajärjestelmän (CMS), jossa on suojatut hallintapaneelit, dynaaminen sisällönhallinta, CRUD-toiminnot ja tuotantojulkaisu Ubuntulla käyttäen Apache2:ta.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Vieraile sivustolla", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Kehitin responsiivisen fintech-alustan, joka yhdistää käyttäjät vahvistettuun talousneuvojaan Raman Khandelwaliin modernin, tyyppiturvallisen (type-safe) frontend-arkkitehtuurin avulla.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Vieraile sivustolla" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Rakensin kolmessa päivässä tekoälypohjaisen virtuaalisen selfi-alustan suurelle Durga Puja -kulttuurialoitteelle. Kehitin täydellisen frontendin, Firebase-backendin, Firestore-tietokannan, hallintapaneelin, tekoälypohjaisen taustan poiston Dezgo API:illa, kuvanparannussäätimet ja Google Tag Manager -integraation ennen sovelluksen julkaisua Firebase Hostingilla.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Vieraile sivustolla", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Kehitin virallisen Entrepreneurship Cell -alustan, jossa on kustomoitu Django-hallinta, mentorointihallinta, alumnien hallinta, panostusten seuranta ja blogien hyväksyntätyönkulut. Alusta edusti oppilaitosta IIT Bombay E-Cell -kilpailussa ja se rakennettiin kolmessa päivässä.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Suunnittelin ja kehitin monitoimittaja-kuntosali- ja verkkokauppa-SaaS-alustan, joka tukee ylläpitäjiä, kuntosalien omistajia, valmentajia, henkilökuntaa ja asiakkaita. Toteutin roolipohjaisen pääsynhallinnan (RBAC), PhonePe-maksuintegraation, REST API:t Flutter-sovelluksille, yhteisötoiminnot, QR-läsnäolon seurannan, varaustenhallinnan ja analyyttiset kojelaudat.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Rakensin kustomoidun kahvilasivuston hallintapaneelilla, jolla hallitaan menueriä, kategorioita, hero-osion sisältöä, mainosbannereita ja sivuston kuvia. loin intuitiivisen sisällönhallintakokemuksen, jonka avulla henkilökunta voi päivittää sivuston sisältöä tehokkaasti säilyttäen samalla responsiivisen ja visuaalisesti yhtenäisen asiakaskokemuksen.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Rakensin responsiivisen markkinointisivuston kuntoiluvälinebrändille keskittyen tuote-esittelyyn, bränditarinankerrontaan ja liidien generointiin. Kehitin mukaansatempaavat aloitussivun osiot, tuote-esittelyt, mainossisällön ja mobiiliystävälliset asettelut parantaakseni käyttäjien sitoutumista ja brändin näkyvyyttä.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Ohjelmisto", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Työskentelin kustomoidun kiinteistösivustojen rakennusalustan parissa, jonka avulla yritykset voivat luoda ja hallita sivustoja konfiguroitavista malleista. Toteutin dynaamisen osioiden hallinnan, sisällön muokkauksen, kuvanpäivitykset ja mallien mukautusominaisuudet käyttäen Djangoa, Bootstrap 5:tä ja AJAX:ia. Integroin kiinteistö- ja liiketoimintatiedot ActivCRM:stä, mikä mahdollisti automaattisen sisällön synkronoinnin CRM:n ja sivustoalustojen välillä.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Luova", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Looin markkinointikuvaston teollisuusvalmistusyritykselle muuttaen tekniset tuotetiedot visuaalisesti houkutteleviksi ja helposti navigoitaviksi asetteluiksi. Suunnittelin tuote-esittelyt, brändäysmateriaalit ja mainossivut Canvalla varmistaen samalla johdonmukaisuuden, luettavuuden ja ammattimaiset esitystavat.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Luova", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Kehitin visuaalisen identiteetin ja markkinointikuvaston teollisuusvalmistusyritykselle. Suunnittelin yrityksen logon, brändäysmateriaalit ja tuotekuvastojen asettelut, mikä loi yhtenäisen brändikokemuksen, joka esitti tekniset tuotetiedot tehokkaasti selkeän ja visuaalisesti houkuttelevan suunnittelun avulla.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Luova", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Kehitin yritysten markkinointikuvaston suunnittelukonsulttiyritykselle korostaen palveluportfolioita, teknistä osaamista ja projektikokemusta. Suunnittelin visuaalisesti jäsennellyt asettelut, brändätyn sisällön ja esitysmateriaalit, jotka muuttivat monimutkaiset suunnittelukonseptit helposti lähestyttäväksi ja ammattimaiseksi markkinointimateriaaliksi.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Yhteystiedot", //[cite: 1, 2]
        heading: "Matka jatkuu", //[cite: 1, 2]

        intro:
            "Jos etsit backend-ohjelmistoinsinööriä, joka nauttii skaalautuvien järjestelmien, pilvinatiivien sovellusten ja luotettavien digitaalisten tuotteiden rakentamisesta, ottaisin mielelläni yhteyttä. Olen aina kiinnostunut keskustelemaan uusista mahdollisuuksista, haastavista projekteista ja innovatiivisista ideoista.", //[cite: 1, 2]

        availability:
            "Tällä hetkellä saatavilla kokoaikaisiin tehtäviin, etätyömahdollisuuksiin, freelance-projekteihin ja kansainväliseen relokaatioon.", //[cite: 1, 2]

        cta: {
            email: "Lähetä sähköpostia", //[cite: 1, 2]
            linkedin: "Ota yhteyttä LinkedInissä", //[cite: 1, 2]
        },

        quote: "Jokainen hieno projekti alkaa keskustelulla.", //[cite: 1, 2]
    }
};