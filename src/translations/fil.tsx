import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/fil/hero_bg.jpg"
    }, 
    header: {
        nav: [
            { label: "HOME",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "MGA KASANAYAN",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "TUNGKOL SA AKIN",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "MGA PROYEKTO", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "MAKIPAG-UGNAYAN",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "ISARA", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "BACKEND SOFTWARE ENGINEER", //[cite: 1, 2]
        availability: "AVAILABLE SA BUONG MUNDO", //[cite: 1, 2]
        since: "NAGKO-CODE MULA 2021", //[cite: 1, 2]
        experience: "2+ TAONG KARANASAN SA INDUSTRIYA" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Bumubuo ng{" "}
                <span className="text-[var(--accent-cyan)]">
                    mga scalable na backend system
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Nag-e-explore ng
                </span>{" "}
                AI at game development
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Backend Software Engineer na dalubhasa sa mga scalable API, cloud-native na application, at modernong backend architecture gamit ang Python, Django, at FastAPI. May dedikasyon sa AI, distributed systems, at pagbuo ng software na kayang mag-scale.", //[cite: 1, 2]
        cta1: "Tingnan ang Aking mga Gawa", //[cite: 1, 2]
        cta2: "I-download ang Resume", //[cite: 1, 2]
        status: {
            head: "Katayuan ng Recruitment", //[cite: 1, 2]
            stat: () => (
                <>
                    Nakatira sa <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Bukas para sa mga oportunidad na full-time, remote, hybrid, at relocation.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_fil.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Mga Teknikal na Kasanayan", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Edukasyon", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Mga Sertipikasyon", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Mga Libangan", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Mga Wika", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Mga Wika sa Programming", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Backend Engineering", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Frontend Engineering", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Mga Database", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud at DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Mga Tool at Platform", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Mga Konsepto", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master of Computer Applications (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Kasalukuyan", //[cite: 1, 2]
                    description:
                    "Kasalukuyang kumukuha ng master's degree na nakatutok sa software engineering, distributed systems, cloud computing, at pagbuo ng modernong application." //[cite: 1, 2]
                },
                {
                    degree: "Bachelor of Business Administration (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Nagtapos na may CGPA na 8.13/10. Nakabuo ng matibay na kasanayan sa pagsusuri, paglutas ng problema, at pamamahala ng negosyo, na nagbibigay ng mahalagang insight sa pagdidisenyo ng software na naaayon sa tunay na pangangailangan ng negosyo." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Game Development", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Nasisiyahan akong matuto ng Unity, C#, at disenyo ng laro sa pamamagitan ng pagbuo ng maliliit na prototype at pag-aaral ng gameplay mechanics, level design, at interactive systems." //[cite: 1, 2]
                },
                {
                    title: "Musika at Pagkanta", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Ang pagkanta ay isa sa aking mga paboritong malikhaing libangan. Nakakatulong ito sa akin na makapagpahinga, mapabuti ang pokus, at mapanatili ang malusog na balanse kasabay ng pag-develop ng software." //[cite: 1, 2]
                },
                {
                    title: "Pagluluto at Pagkamalikhain", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Nagtuturo ang pagluluto ng pasensya, atensyon sa detalye, at patuloy na pag-eeksperimento—mga katangiang ginagamit ko rin kapag nagdidisenyo at bumubuo ng software." //[cite: 1, 2]
                },
                {
                    title: "Pag-aaral ng mga Wika at Kultura", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Kasalukuyan akong nag-aaral ng wikang Hapon at nasisiyahan sa pag-explore ng iba't ibang kultura, teknolohiya, at ideya sa pamamagitan ng paglalakbay, mga libro, at online na komunidad." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Ingles", proficiency: "Propesyonal na Kahusayan sa Pagtatrabaho" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Katutubo / Dalawang Wika" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Katutubo / Dalawang Wika" }, //[cite: 1, 2]
                { language: "Japanese", proficiency: "Baguhan (JLPT N5)" } //[cite: 1, 2]
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
        cta: "I-verify", //[cite: 1, 2]
        carouselCta: {
            next: "Susunod", //[cite: 1, 2]
            prev: "Nakaraan" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Sa Likod ng Code", //[cite: 1, 2]
        heading: "Tungkol sa Akin", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Ako ay isang Backend Software Engineer na dalubhasa sa <strong className="font-medium text-[var(--foreground)]">mga scalable API, cloud-native na application, at modernong backend system.</strong> Kasalukuyang kumukuha ng <span className="text-[var(--accent-cyan)]">Master of Computer Applications (MCA)</span> sa <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, nasisiyahan akong bumuo ng <strong className="font-medium text-[var(--foreground)]">mga maaasahang software</strong> gamit ang <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, at <span className="text-[var(--accent-cyan)]">mga modernong teknolohiya sa web</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Nasisiyahan akong magdisenyo ng <strong className="font-medium text-[var(--foreground)]">mga backend system</strong> na <span className="text-[var(--accent-cyan)]">madaling i-maintain</span>, <span className="text-[var(--accent-cyan)]">ligtas</span>, at <span className="text-[var(--accent-cyan)]">scalable</span>. Sa paggawa man ng mga REST API, pag-integrate ng mga third-party na serbisyo, o pag-deploy ng mga application sa cloud, nakatutok ako sa pagsusulat ng <span className="text-[var(--accent-cyan)]">malinis at maaasahang code</span> na lumulutas sa mga totoong problema.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Bukod sa backend engineering, nasisiyahan akong mag-explore ng <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, at <span className="text-[var(--accent-cyan)]">game development</span> bilang mga malikhaing side project. Ang pag-aaral ng iba't ibang teknolohiya ay nakakatulong sa akin na lapitan ang software engineering nang may teknikal na lalim at malikhaing paglutas ng problema.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Edukasyon", //[cite: 1, 2]
                heading: "Master of Computer Applications", //[cite: 1, 2]
                para: "Manipal University Jaipur (Kasalukuyan)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lokasyon", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Bukas para sa mga oportunidad na remote, hybrid, at relocation" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Kasalukuyang Pokus", //[cite: 1, 2]
                heading: "Backend Engineering", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Showcase", //[cite: 1, 2]
        subtitle: "Mga Gawa at Hilig", //[cite: 1, 2]
        para: "Software Engineering • AI • Musika • Pagkamalikhain • Mga Sertipiko", //[cite: 1, 2]
        filters: [
            "Tampok", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Malikhain", //[cite: 1, 2]
            "Lahat", //[cite: 1, 2]
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
                description: "Bumuo at nag-deploy ng isang modernong single-page na corporate website gamit ang Next.js. Nag-configure ng Docker, Nginx, at production hosting habang ino-optimize ang pagiging responsive, performance, at mga deployment workflow.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Bisitahin ang Website", //[cite: 1, 2]
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
                description: "Bumuo at nagpanatili ng isang responsive na Shopify-integrated AI chat widget na sumusuporta sa pagtuklas ng produkto at interaksyon ng customer. Gumawa ng mga backend API, nag-integrate ng Shopify GraphQL, at lumikha ng mga Looker Studio dashboard upang subaybayan ang pakikipag-ugnayan ng user at mga sukatan ng negosyo.", //[cite: 1, 2]
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
                description: "Bumuo ng isang full-stack content management system (CMS) na may mga secure na administrative dashboard, dynamic na pamamahala ng nilalaman, mga operasyon ng CRUD, at pag-deploy sa production sa Ubuntu gamit ang Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Bisitahin ang Website", //[cite: 1, 2]
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
                description: "Bumuo ng isang responsive na platform ng teknolohiya sa pananalapi na nag-uugnay sa mga user sa na-verify na financial advisor na si Raman Khandelwal sa pamamagitan ng isang moderno at type-safe na frontend architecture.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Bisitahin ang Website" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Bumuo ng isang AI-powered virtual selfie platform sa loob ng tatlong araw para sa isang malaking kultural na inisyatiba ng Durga Puja. Binuo ang buong frontend, Firebase backend, Firestore database, administrative dashboard, pag-alis ng background gamit ang AI sa tulong ng Dezgo APIs, mga kontrol sa pagpapaganda ng imahe, at integrasyon ng Google Tag Manager bago i-deploy ang application sa Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Bisitahin ang Website", //[cite: 1, 2]
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
                description: "Bumuo ng opisyal na platform para sa Entrepreneurship Cell na may custom na Django administration, pamamahala ng mentor, pamamahala ng alumni, pagsubaybay sa kontribusyon, at mga workflow ng pag-apruba ng blog. Kinatawan ng platform ang institusyon sa kompetisyon ng IIT Bombay E-Cell at binuo sa loob lamang ng tatlong araw.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Nagdisenyo at bumuo ng isang multi-vendor fitness at e-commerce SaaS platform na sumusuporta sa mga administrator, may-ari ng gym, trainer, staff, at mga customer. Nagpatupad ng role-based access control, integrasyon ng PhonePe payment, mga REST API para sa mga Flutter application, mga feature ng komunidad, pagdalo gamit ang QR, pamamahala ng booking, at mga analytical na dashboard.", //[cite: 1, 2]
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
                description: "Bumuo ng isang custom na website para sa café na may administrative dashboard para sa pamamahala ng mga menu item, kategorya, nilalaman ng hero section, mga promotional banner, at mga larawan ng website. Lumikha ng isang madaling gamitin na karanasan sa pamamahala ng nilalaman na nagpapahintulot sa staff na i-update ang website nang mahusay habang pinapanatili ang isang responsive at biswal na pare-parehong karanasan para sa mga customer." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Bumuo ng isang responsive na marketing website para sa isang brand ng fitness equipment na nakatutok sa presentasyon ng produkto, pagkukuwento ng brand, at pagbuo ng lead. Bumuo ng mga nakakaengganyong seksyon ng landing page, mga showcase ng produkto, pampromosyong nilalaman, at mga mobile-friendly na layout upang mapahusay ang pakikipag-ugnayan ng user at visibility ng brand." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Nagtrabaho sa isang custom na real estate website builder platform na nagpapahintulot sa mga negosyo na bumuo at mamahala ng mga website mula sa mga na-configure na template. Nagpatupad ng dynamic na pamamahala ng seksyon, pag-edit ng nilalaman, mga pag-update ng imahe, at mga tampok sa pag-customize ng template gamit ang Django, Bootstrap 5, at AJAX. In-integrate ang data ng ari-arian at negosyo mula sa ActivCRM, na nagpapagana ng awtomatikong pag-sync ng nilalaman sa pagitan ng CRM at mga platform ng website.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Malikhain", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Lumikha ng isang marketing catalog para sa isang kumpanya ng pang-industriyang pagmamanupaktura, na binabago ang mga teknikal na detalye ng produkto sa mga nakakaengganyo sa paningin at madaling i-navigate na mga layout. Nagdisenyo ng mga showcase ng produkto, mga asset ng pagba-brand, at mga pampromosyong pahina gamit ang Canva habang tinitiyak ang pagkakapare-pareho, pagiging madaling basahin, at mga propesyonal na pamantayan ng presentasyon." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Malikhain", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Binuo ang visual identity at marketing catalog para sa isang kumpanya ng pang-industriyang pagmamanupaktura. Dinisenyo ang logo ng kumpanya, mga asset sa pagba-brand, at mga layout ng catalog ng produkto, na lumilikha ng magkakaugnay na karanasan sa brand na epektibong naglalahad ng teknikal na impormasyon ng produkto sa pamamagitan ng malinaw at biswal na nakakaengganyong disenyo." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Malikhain", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Bumuo ng isang corporate marketing catalog para sa isang engineering consulting firm, na nagbibigay-diin sa mga portfolio ng serbisyo, mga teknikal na kakayahan, at kadalubhasaan sa proyekto. Nagdisenyo ng mga biswal na nakabalangkas na layout, may tatak na nilalaman, at mga materyales sa presentasyon na nagpabago sa mga kumplikadong konsepto ng engineering sa naa-access at propesyonal na materyal sa marketing." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Makipag-ugnayan", //[cite: 1, 2]
        heading: "Nagpapatuloy ang Paglalakbay", //[cite: 1, 2]

        intro:
            "Kung naghahanap ka ng backend software engineer na nasisiyahang bumuo ng mga scalable na system, cloud-native na application, at maaasahang digital na produkto, ikalulugod kong kumonekta. Palagi akong interesado sa pagtalakay sa mga bagong pagkakataon, mapaghamong proyekto, at makabagong ideya.", //[cite: 1, 2]

        availability:
            "Kasalukuyang available para sa mga full-time na posisyon, remote na oportunidad, freelance na proyekto, at internasyonal na relokasyon.", //[cite: 1, 2]

        cta: {
            email: "Mag-email sa Akin", //[cite: 1, 2]
            linkedin: "Kumonekta sa LinkedIn", //[cite: 1, 2]
        },

        quote: "Bawat magandang proyekto ay nagsisimula sa isang pag-uusap.", //[cite: 1, 2]
    }
};