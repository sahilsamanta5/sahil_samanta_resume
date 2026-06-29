import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "ACCUEIL",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "COMPÉTENCES",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "À PROPOS",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJETS", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "CONTACT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "RÉDUIRE", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "INGÉNIEUR LOGICIEL BACKEND", //[cite: 1, 2]
        availability: "DISPONIBLE DANS LE MONDE ENTIER", //[cite: 1, 2]
        since: "DÉVELOPPEUR DEPUIS 2021", //[cite: 1, 2]
        experience: "2+ ANS D'EXPÉRIENCE DANS L'INDUSTRIE" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Construction de{" "}
                <span className="text-[var(--accent-cyan)]">
                    systèmes backend évolutifs
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Exploration de
                </span>{" "}
                l'IA et du développement de jeux
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Ingénieur logiciel backend spécialisé dans les API évolutives, les applications cloud-native et l'architecture backend moderne utilisant Python, Django et FastAPI. Passionné par l'IA, les systèmes distribués et la création de logiciels conçus pour passer à l'échelle.", //[cite: 1, 2]
        cta1: "Découvrir mes travaux", //[cite: 1, 2]
        cta2: "Télécharger le CV", //[cite: 1, 2]
        status: {
            head: "Statut de recrutement", //[cite: 1, 2]
            stat: () => (
                <>
                    Basé à <span className="text-[var(--accent-blue)]">Kolkata, Inde</span>. Ouvert aux opportunités à temps plein, en télétravail, hybrides ou nécessitant une relocalisation.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Compétences techniques", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Formation", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certifications", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Loisirs", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Langues", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Langages de programmation", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Ingénierie Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Ingénierie Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Bases de données", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Outils & Plateformes", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Concepts", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Master en applications informatiques (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Présent", //[cite: 1, 2]
                    description:
                    "Actuellement en master avec une spécialisation en génie logiciel, systèmes distribués, cloud computing et développement d'applications modernes." //[cite: 1, 2]
                },
                {
                    degree: "Licence en administration des affaires (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Diplômé avec une mention CGPA de 8.13/10. Développement de solides compétences en analyse, résolution de problèmes et gestion d'entreprise, offrant une vision précieuse pour la conception de logiciels adaptés aux besoins réels du marché." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Développement de jeux", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "J'aime apprendre Unity, C# et le design de jeu en construisant de petits prototypes et en étudiant les mécanismes de jeu, le level design et les systèmes interactifs." //[cite: 1, 2]
                },
                {
                    title: "Musique et chant", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Le chant est l'un de mes exutoires créatifs préférés. Il m'aide à me détendre, à améliorer ma concentration et à maintenir un équilibre sain en parallèle du développement logiciel." //[cite: 1, 2]
                },
                {
                    title: "Cuisine et créativité", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "La cuisine m'enseigne la patience, le souci du détail et l'expérimentation constante — des qualités que j'applique également lors de la conception et de la construction de logiciels." //[cite: 1, 2]
                },
                {
                    title: "Apprentissage des langues et culture", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "J'apprends actuellement le japonais et j'aime explorer différentes cultures, technologies et idées à travers les voyages, les livres et les communautés en ligne." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Anglais", proficiency: "Compétence professionnelle" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Langue maternelle / Bilingue" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Langue maternelle / Bilingue" }, //[cite: 1, 2]
                { language: "Japonais", proficiency: "Débutant (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 juin 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 juin 2026",
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
                    date: "26 août 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13 avril 2024",
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
                    date: "30 septembre 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1er juillet 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 juin 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24 avril 2023",
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
                    date: "21 décembre 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Vérifier", //[cite: 1, 2]
        carouselCta: {
            next: "Suivant", //[cite: 1, 2]
            prev: "Précédent" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Derrière le code", //[cite: 1, 2]
        heading: "À propos de moi", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Je suis un ingénieur logiciel backend spécialisé dans les <strong className="font-medium text-[var(--foreground)]">API évolutives, les applications cloud-native et les systèmes backend modernes.</strong> Actuellement en master en <span className="text-[var(--accent-cyan)]">applications informatiques (MCA)</span> à la <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, j'aime construire des <strong className="font-medium text-[var(--foreground)]">logiciels fiables</strong> en utilisant <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, et les <span className="text-[var(--accent-cyan)]">technologies web modernes</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    J'aime <strong className="font-medium text-[var(--foreground)]">concevoir des systèmes backend</strong> qui sont <span className="text-[var(--accent-cyan)]">maintenables</span>, <span className="text-[var(--accent-cyan)]">sécurisés</span> et <span className="text-[var(--accent-cyan)]">évolutifs</span>. Que ce soit pour développer des API REST, intégrer des services tiers ou déployer des applications dans le cloud, je me concentre sur l'écriture d'un <span className="text-[var(--accent-cyan)]">code propre et fiable</span> qui résout des problèmes réels.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Au-delà de l'ingénierie backend, j'aime explorer <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> et <span className="text-[var(--accent-cyan)]">le développement de jeux</span> comme projets créatifs. L'apprentissage à travers diverses technologies m'aide à aborder le génie logiciel avec à la fois une profondeur technique et une résolution créative des problèmes.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Formation", //[cite: 1, 2]
                heading: "Master en applications informatiques", //[cite: 1, 2]
                para: "Manipal University Jaipur (En cours)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lieu", //[cite: 1, 2]
                heading: "Kolkata, Inde", //[cite: 1, 2]
                para: "Ouvert aux opportunités à distance, hybrides et à la relocalisation" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Focus actuel", //[cite: 1, 2]
                heading: "Ingénierie Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Portfolio", //[cite: 1, 2]
        subtitle: "Travail et Passions", //[cite: 1, 2]
        para: "Génie Logiciel • IA • Musique • Créativité • Certificats", //[cite: 1, 2]
        filters: [
            "En vedette", //[cite: 1, 2]
            "Logiciel", //[cite: 1, 2]
            //   "IA",
            //   "Musique",
            "Créatif", //[cite: 1, 2]
            "Tout", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Développement et déploiement d'un site web d'entreprise moderne en page unique avec Next.js. Configuration de Docker, Nginx et hébergement de production tout en optimisant la réactivité, les performances et les flux de déploiement.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Visiter le site web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Développement et maintenance d'un widget de chat IA réactif intégré à Shopify, supportant la découverte de produits et les interactions clients. Construction d'API backend, intégration de Shopify GraphQL et création de tableaux de bord Looker Studio pour surveiller l'engagement utilisateur et les métriques métier.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Développement d'un système de gestion de contenu (CMS) full-stack avec des tableaux de bord d'administration sécurisés, gestion de contenu dynamique, opérations CRUD et déploiement en production sur Ubuntu utilisant Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Visiter le site web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Développement d'une plateforme fintech réactive connectant les utilisateurs au conseiller financier vérifié Raman Khandelwal via une architecture frontend moderne et sécurisée par typage.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Visiter le site web" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Création en trois jours d'une plateforme de selfie virtuel propulsée par l'IA pour une initiative culturelle majeure de Durga Puja. Développement du frontend complet, backend Firebase, base de données Firestore, tableau de bord administratif, suppression d'arrière-plan par IA via les API Dezgo, contrôles d'amélioration d'image et intégration de Google Tag Manager avant le déploiement sur Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Visiter le site web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Développement de la plateforme officielle de la cellule d'entrepreneuriat avec administration Django personnalisée, gestion des mentors, gestion des anciens élèves, suivi des contributions et flux de travail d'approbation de blog. La plateforme a représenté l'institution lors du concours IIT Bombay E-Cell et a été construite en trois jours.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Conception et développement d'une plateforme SaaS de fitness et e-commerce multi-vendeurs prenant en charge administrateurs, propriétaires de salles de sport, entraîneurs, personnel et clients. Mise en œuvre du contrôle d'accès basé sur les rôles (RBAC), intégration des paiements PhonePe, API REST pour applications Flutter, fonctionnalités communautaires, présence QR, gestion des réservations et tableaux de bord analytiques.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Construction d'un site web de café sur mesure avec un tableau de bord d'administration pour la gestion des éléments du menu, catégories, contenu de la section hero, bannières promotionnelles et images du site. Création d'une expérience de gestion de contenu intuitive permettant au personnel de mettre à jour efficacement le contenu du site tout en conservant une expérience client réactive et visuellement cohérente." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Construction d'un site web marketing réactif pour une marque d'équipement de fitness axé sur la présentation des produits, le storytelling de la marque et la génération de leads. Développement de sections de landing page attrayantes, vitrines de produits, contenu promotionnel et mises en page adaptées aux mobiles pour améliorer l'engagement utilisateur et la visibilité de la marque." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Logiciel", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Travail sur une plateforme de création de sites immobiliers sur mesure permettant aux entreprises de générer et gérer des sites à partir de modèles configurables. Mise en œuvre de la gestion dynamique des sections, édition de contenu, mises à jour d'images et personnalisation de modèles utilisant Django, Bootstrap 5 et AJAX. Intégration des données immobilières et commerciales d'ActivCRM, permettant une synchronisation automatique du contenu entre le CRM et les plateformes de sites web.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Créatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Création d'un catalogue marketing pour une entreprise de fabrication industrielle, transformant les spécifications techniques des produits en mises en page visuellement attrayantes et faciles à naviguer. Conception de vitrines de produits, d'actifs de marque et de pages promotionnelles avec Canva tout en assurant la cohérence, la lisibilité et des normes de présentation professionnelles." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Créatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Développement de l'identité visuelle et du catalogue marketing pour une entreprise de fabrication industrielle. Conception du logo de l'entreprise, des actifs de marque et des mises en page du catalogue produits, créant une expérience de marque cohérente qui présente efficacement les informations techniques des produits à travers un design clair et visuellement attrayant." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Créatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Développement d'un catalogue marketing d'entreprise pour un cabinet de conseil en ingénierie, mettant en évidence les portefeuilles de services, les compétences techniques et l'expertise des projets. Conception de mises en page visuellement structurées, de contenu de marque et de matériel de présentation qui ont transformé des concepts d'ingénierie complexes en supports marketing accessibles et professionnels." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Contact", //[cite: 1, 2]
        heading: "Le voyage continue", //[cite: 1, 2]

        intro:
            "Si vous recherchez un ingénieur logiciel backend qui aime construire des systèmes évolutifs, des applications cloud-native et des produits numériques fiables, j'adorerais entrer en contact. Je suis toujours intéressé par la discussion sur de nouvelles opportunités, des projets stimulants et des idées innovantes.", //[cite: 1, 2]

        availability:
            "Actuellement disponible pour des postes à temps plein, des opportunités à distance, des projets freelance et une relocalisation internationale.", //[cite: 1, 2]

        cta: {
            email: "M'envoyer un email", //[cite: 1, 2]
            linkedin: "Se connecter sur LinkedIn", //[cite: 1, 2]
        },

        quote: "Chaque grand projet commence par une conversation.", //[cite: 1, 2]
    }
};