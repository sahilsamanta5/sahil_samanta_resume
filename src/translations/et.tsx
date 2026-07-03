import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]
import { RotatingStat } from "../components/RotatingStats";

const stats = [
  "12+ Rakendust",
  "12+ Juurutust",
  "25+ Projekti",
  "40+ API",
  "3+ E-kaubanduse platvormi",
  "5+ CMS-i",
];


export default {
    background: {
        hero: "/images/bg/et/hero_bg.jpg",
        contact: "/images/bg/et/contact_bg.png"
    },
    header: {
        nav: [
            { label: "AVALEHT",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "OSKUSED",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "MINUST",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTID", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "SULE", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND TARKVARAINŽENER", //[cite: 1, 2]
        availability: "SAADAVAL ÜLE MAAILMA", //[cite: 1, 2]
        since: "KODEERINUD ALATES 2021", //[cite: 1, 2]
        experience: "2+ AASTAT TÖÖKOGEMUST" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="xl:whitespace-nowrap">
                    Arendatud{" "}
                </span>

                <span className="xl:whitespace-nowrap">
                    <RotatingStat stats={stats} />
                </span>
            </>
        ),
        para: "Backend tarkvarainžener, kes on spetsialiseerunud skaleeritavatele API-dele, pilvepõhistele (cloud-native) rakendustele ja kaasaegsele backend arhitektuurile, kasutades Pythonit, Djangot ja FastAPId. Kirglik AI, hajutatud süsteemide ja skaleeritava tarkvara ehitamise vastu.", //[cite: 1, 2]
        cta1: "Tutvu minu töödega", //[cite: 1, 2]
        cta2: "Laadi alla CV", //[cite: 1, 2]
        status: {
            head: "Värbamisstaatus", //[cite: 1, 2]
            stat: () => (
                <>
                    Asukoht: <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Avatud täistööajaga, kaugtöö, hübriidtöö ja ümberasumist nõudvatele võimalustele.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_et.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Tehnilised oskused", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Haridus", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Sertifikaadid", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Hobid", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Keeled", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Programmeerimiskeeled", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend inseneeria", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend inseneeria", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Andmebaasid", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Pilv ja DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Tööriistad ja platvormid", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Kontseptsioonid", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Arvutirakenduste magister (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - praegu", //[cite: 1, 2]
                    description:
                    "Hetkel omandamas magistrikraadi, keskendudes tarkvarainseneeriale, hajutatud süsteemidele, pilvandmetöötlusele ja kaasaegsete rakenduste arendusele." //[cite: 1, 2]
                },
                {
                    degree: "Ärijuhtimise bakalaureus (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Lõpetasin 8.13/10 CGPA-ga. Arendasin tugevad analüütilised, probleemilahendus- ja ärijuhtimisoskused, mis annavad väärtusliku ülevaate reaalsete ärivajadustega kooskõlas oleva tarkvara kujundamisel." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Mängude arendus", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Naudin Unity, C# ja mängudisaini õppimist, ehitades väikeseid prototüüpe ning uurides mängumehaanikat, tasemete disaini ja interaktiivseid süsteeme." //[cite: 1, 2]
                },
                {
                    title: "Muusika ja laulmine", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Laulmine on üks minu lemmikuid loomingulisi hobisid. See aitab mul lõõgastuda, parandada keskendumisvõimet ja hoida tervislikku tasakaalu tarkvaraarenduse kõrval." //[cite: 1, 2]
                },
                {
                    title: "Kokkamine ja loovus", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Kokkamine õpetab kannatlikkust, tähelepanu detailidele ja pidevat katsetamist – omadused, mida rakendan ka tarkvara kujundamisel ja ehitamisel." //[cite: 1, 2]
                },
                {
                    title: "Keele- ja kultuuriõpe", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Õpin praegu jaapani keelt ja naudin erinevate kultuuride, tehnoloogiate ja ideede avastamist reisimise, raamatute ja veebikogukondade kaudu." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Inglise", proficiency: "Professionaalne tööalane keeleoskus" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Emakeel / kakskeelne" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Emakeel / kakskeelne" }, //[cite: 1, 2]
                { language: "Jaapani", proficiency: "Algaja (JLPT N5)" } //[cite: 1, 2]
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
        cta: "Kinnita", //[cite: 1, 2]
        carouselCta: {
            next: "Järgmine", //[cite: 1, 2]
            prev: "Eelmine" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Koodi taga", //[cite: 1, 2]
        heading: "Minust", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Olen backend tarkvarainžener, kes on spetsialiseerunud <strong className="font-medium text-[var(--foreground)]">skaleeritavatele API-dele, pilvepõhistele rakendustele ja kaasaegsetele backend süsteemidele.</strong> Hetkel omandamas <span className="text-[var(--accent-cyan)]">arvutirakenduste magistrikraadi (MCA)</span> <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipuris</strong>, naudin <strong className="font-medium text-[var(--foreground)]">usaldusväärse tarkvara</strong> ehitamist, kasutades <span className="text-[var(--accent-cyan)]">Pythonit</span>, <span className="text-[var(--accent-cyan)]">Djangot</span>, <span className="text-[var(--accent-cyan)]">FastAPId</span> ja <span className="text-[var(--accent-cyan)]">kaasaegseid veebitehnoloogiaid</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Mulle meeldib <strong className="font-medium text-[var(--foreground)]">kujundada backend süsteeme</strong>, mis on <span className="text-[var(--accent-cyan)]">hooldatavad</span>, <span className="text-[var(--accent-cyan)]">turvalised</span> ja <span className="text-[var(--accent-cyan)]">skaleeritavad</span>. Olgu tegemist REST API-de arendamise, kolmandate osapoolte teenuste integreerimise või rakenduste pilve juurutamisega, keskendun <span className="text-[var(--accent-cyan)]">puhta ja usaldusväärse koodi</span> kirjutamisele, mis lahendab reaalseid probleeme.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Lisaks backend inseneeriale naudin <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blenderi</span> ja <span className="text-[var(--accent-cyan)]">mängude arenduse</span> uurimist loominguliste kõrvalprojektidena. Erinevate tehnoloogiate tundmaõppimine aitab mul läheneda tarkvarainseneeriale nii tehnilise sügavuse kui ka loomingulise probleemilahenduse kaudu.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Haridus", //[cite: 1, 2]
                heading: "Arvutirakenduste magister", //[cite: 1, 2]
                para: "Manipal University Jaipur (käimasolev)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Asukoht", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Avatud kaugtöö, hübriidtöö ja ümberasumise võimalustele" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Praegune fookus", //[cite: 1, 2]
                heading: "Backend inseneeria", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Portfoolio", //[cite: 1, 2]
        subtitle: "Töö ja kired", //[cite: 1, 2]
        para: "Tarkvarainseneeria • AI • Muusika • Loovus • Sertifikaadid", //[cite: 1, 2]
        filters: [
            "Esiletõstetud", //[cite: 1, 2]
            "Tarkvara", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Loovus", //[cite: 1, 2]
            "Kõik", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Arendasin ja juurutasin kaasaegse ühe lehekülje ettevõtte veebisaidi, kasutades Next.js-i. Konfigureerisin Dockeri, Nginxi ja tootmiskeskkonna, optimeerides samal ajal reageerimisvõimet, jõudlust ja juurutamise töövooge.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Külasta veebisaiti", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Arendasin ja haldasin adaptiivset Shopifyga integreeritud AI-vestlusvidinat, mis toetab toodete avastamist ja kliendisuhtlust. Ehitasin backend API-d, integreerisin Shopify GraphQL-i ja lõin Looker Studio armatuurlauad kasutajate kaasatuse ja ärimõõdikute jälgimiseks.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Arendasin täispika (full-stack) sisuhaldussüsteemi (CMS), millel on turvalised halduspaneelid, dünaamiline sisuhaldus, CRUD-toimingud ja tootmiskeskkonna juurutamine Ubuntu süsteemis, kasutades Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Külasta veebisaiti", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Arendasin adaptiivse finantstehnoloogia platvormi, mis ühendab kasutajad kinnitatud finantsnõustaja Raman Khandelwaliga kaasaegse, tüübiohutut (type-safe) frontend-arhitektuuri kaudu.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Külasta veebisaiti" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Ehitasin kolme päevaga AI-põhise virtuaalse selfi-platvormi suurele Durga Puja kultuurialgatusele. Arendasin täieliku frontend-i, Firebase backend-i, Firestore andmebaasi, halduspaneeli, AI-põhise tausta eemaldamise Dezgo API-de abil, pildi täiustamise juhtnupud ja Google Tag Manageri integratsiooni enne rakenduse juurutamist Firebase Hostingiga.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Külasta veebisaiti", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Arendasin ametliku ettevõtluskeskuse platvormi kohandatud Django administreerimise, mentorite halduse, vilistlaste halduse, panuste jälgimise ja ajaveebi heakskiitmise töövoogudega. Platvorm esindas asutust IIT Bombay E-Cell konkursil ja ehitati kolme päevaga.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Kavandasin ja arendasin mitme müüjaga spordi- ja e-kaubanduse SaaS-platvormi, mis toetab administraatoreid, jõusaali omanikke, treenereid, töötajaid ja kliente. Rakendasin rollipõhise juurdepääsu kontrolli (RBAC), PhonePe maksete integratsiooni, REST API-sid Flutteri rakenduste jaoks, kogukonna funktsioone, QR-kohaloleku kontrolli, broneeringute haldust ja analüütilisi armatuurlaudu.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Ehitasin kohandatud kohviku veebisaidi koos administreerimise armatuurlauaga menüüelementide, kategooriate, kangelase sektsiooni sisu, reklaambännerite ja veebisaidi piltide haldamiseks. Lõin intuitiivse sisuhalduskogemuse, mis võimaldab töötajatel tõhusalt veebisaidi sisu värskendada, säilitades samal ajal klientidele tundliku ja visuaalselt järjepideva kogemuse." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Ehitasin adaptiivse turundusveebisaidi spordivarustuse brändile, mis keskendub toodete esitlemisele, brändi lugude jutustamisele ja müügivihjete genereerimisele. Arendasin kaasahaaravad maandumislehe sektsioonid, toodete esitlused, reklaamsisu ja mobiilisõbralikud paigutused, et suurendada kasutajate kaasatust ja brändi nähtavust." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Tarkvara", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Töötasin kohandatud kinnisvaraveebisaitide koostamise platvormil, mis võimaldas ettevõtetel luua ja hallata veebisaite konfigureeritavatest mallidest. Rakendasin dünaamilise sektsioonihalduse, sisu redigeerimise, piltide värskendamise ja mallide kohandamise funktsioonid, kasutades Djangot, Bootstrap 5-t ja AJAX-i. Integreerisin kinnisvara- ja äriandmed ActivCRM-ist, võimaldades automaatset sisu sünkroniseerimist CRM-i ja veebisaitide platvormide vahel.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Loovus", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Lõin turunduskataloogi tööstustootmisettevõttele, muutes tehnilised tootespetsifikatsioonid visuaalselt kaasahaaravateks ja hõlpsasti navigeeritavateks paigutusteks. Kujundasin tootepresentatsioonid, brändinguvarad ja reklaamlehed, kasutades Canvat, tagades samas järjepidevuse, loetavuse ja professionaalsed esitlusstandardid." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Loovus", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Arendasin visuaalse identiteedi ja turunduskataloogi tööstustootmisettevõttele. Kujundasin ettevõtte logo, brändinguvarad ja tootekataloogi paigutused, luues ühtse brändikogemuse, mis edastas tõhusalt tehnilist tooteteavet selge ja visuaalselt kaasahaarava disaini kaudu." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Loovus", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Arendasin korporatiivse turunduskataloogi insenerikonsultatsioonifirmale, tuues esile teenuste portfellid, tehnilise kompetentsi ja projekti kogemused. Kujundasin visuaalselt struktureeritud paigutused, bränditud sisu ja esitlusmaterjalid, mis muutsid keerulised insenerikontseptsioonid juurdepääsetavaks ja professionaalseks turundusmaterjaliks." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Teekond jätkub", //[cite: 1, 2]

        intro:
            "Kui otsite backend tarkvarainženeri, kes naudib skaleeritavate süsteemide, pilvepõhiste rakenduste ja usaldusväärsete digitaalsete toodete ehitamist, oleksin huvitatud ühenduse loomisest. Olen alati huvitatud uute võimaluste, väljakutseid pakkuvate projektide ja uuenduslike ideede arutamisest.", //[cite: 1, 2]

        availability:
            "Hetkel saadaval täistööajaga ametikohtadele, kaugtööks, vabakutselisteks projektideks ja rahvusvaheliseks ümberasumiseks.", //[cite: 1, 2]

        cta: {
            email: "Saada e-kiri", //[cite: 1, 2]
            linkedin: "Võta ühendust LinkedInis", //[cite: 1, 2]
        },

        quote: "Iga suurepärane projekt algab vestlusega.", //[cite: 1, 2]
    }
};