import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "INICIO",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "HABILIDADES",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "SOBRE MÍ",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROYECTOS", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "CONTACTO",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "COLAPSAR", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "INGENIERO DE SOFTWARE BACKEND", //[cite: 1, 2]
        availability: "DISPONIBLE EN TODO EL MUNDO", //[cite: 1, 2]
        since: "PROGRAMANDO DESDE 2021", //[cite: 1, 2]
        experience: "2+ AÑOS DE EXPERIENCIA EN LA INDUSTRIA" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Construyendo{" "}
                <span className="text-[var(--accent-cyan)]">
                    sistemas backend escalables
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Explorando
                </span>{" "}
                IA y desarrollo de juegos
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Ingeniero de software backend especializado en API escalables, aplicaciones cloud-native y arquitectura backend moderna utilizando Python, Django y FastAPI. Apasionado por la IA, los sistemas distribuidos y la creación de software diseñado para escalar.", //[cite: 1, 2]
        cta1: "Explorar mis trabajos", //[cite: 1, 2]
        cta2: "Descargar currículum", //[cite: 1, 2]
        status: {
            head: "Estado de contratación", //[cite: 1, 2]
            stat: () => (
                <>
                    Con base en <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Abierto a oportunidades a tiempo completo, remotas, híbridas y de reubicación.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "Habilidades técnicas", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Educación", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certificaciones", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Pasatiempos", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Idiomas", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Lenguajes de programación", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Ingeniería Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Ingeniería Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Bases de datos", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud y DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Herramientas y plataformas", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Conceptos", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Máster en Aplicaciones Informáticas (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Presente", //[cite: 1, 2]
                    description:
                    "Actualmente cursando un máster con enfoque en ingeniería de software, sistemas distribuidos, computación en la nube y desarrollo de aplicaciones modernas." //[cite: 1, 2]
                },
                {
                    degree: "Licenciatura en Administración de Empresas (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Graduado con un CGPA de 8.13/10. Desarrollé fuertes habilidades analíticas, de resolución de problemas y de gestión empresarial, proporcionando una visión valiosa en el diseño de software que se alinea con las necesidades comerciales del mundo real." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Desarrollo de juegos", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Disfruto aprendiendo Unity, C# y diseño de juegos mediante la creación de pequeños prototipos y el estudio de mecánicas de juego, diseño de niveles y sistemas interactivos." //[cite: 1, 2]
                },
                {
                    title: "Música y canto", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Cantar es una de mis salidas creativas favoritas. Me ayuda a relajarme, mejorar la concentración y mantener un equilibrio saludable junto al desarrollo de software." //[cite: 1, 2]
                },
                {
                    title: "Cocina y creatividad", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Cocinar enseña paciencia, atención al detalle y experimentación continua: cualidades que también aplico al diseñar y construir software." //[cite: 1, 2]
                },
                {
                    title: "Aprendizaje de idiomas y cultura", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Actualmente estoy aprendiendo japonés y disfruto explorando diferentes culturas, tecnologías e ideas a través de viajes, libros y comunidades en línea." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Inglés", proficiency: "Competencia profesional" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Nativo / Bilingüe" }, //[cite: 1, 2]
                { language: "Bengalí", proficiency: "Nativo / Bilingüe" }, //[cite: 1, 2]
                { language: "Japonés", proficiency: "Principiante (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 de junio de 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 de junio de 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26 de marzo de 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26 de agosto de 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13 de abril de 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11 de marzo de 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30 de septiembre de 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1 de julio de 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 de junio de 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24 de abril de 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                }, //[cite: 1, 2]
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9 de marzo de 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21 de diciembre de 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verificar", //[cite: 1, 2]
        carouselCta: {
            next: "Siguiente", //[cite: 1, 2]
            prev: "Anterior" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Detrás del código", //[cite: 1, 2]
        heading: "Sobre mí", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Soy un ingeniero de software backend especializado en <strong className="font-medium text-[var(--foreground)]">API escalables, aplicaciones cloud-native y sistemas backend modernos.</strong> Actualmente cursando un <span className="text-[var(--accent-cyan)]">Máster en Aplicaciones Informáticas (MCA)</span> en <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, disfruto construyendo <strong className="font-medium text-[var(--foreground)]">software confiable</strong> utilizando <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> y <span className="text-[var(--accent-cyan)]">tecnologías web modernas</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Disfruto <strong className="font-medium text-[var(--foreground)]">diseñando sistemas backend</strong> que sean <span className="text-[var(--accent-cyan)]">mantenibles</span>, <span className="text-[var(--accent-cyan)]">seguros</span> y <span className="text-[var(--accent-cyan)]">escalables</span>. Ya sea desarrollando API REST, integrando servicios de terceros o desplegando aplicaciones en la nube, me centro en escribir <span className="text-[var(--accent-cyan)]">código limpio y confiable</span> que resuelva problemas del mundo real.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Más allá de la ingeniería backend, disfruto explorando <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> y el <span className="text-[var(--accent-cyan)]">desarrollo de juegos</span> como proyectos secundarios creativos. Aprender sobre diversas tecnologías me ayuda a abordar la ingeniería de software tanto con profundidad técnica como con resolución creativa de problemas.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Educación", //[cite: 1, 2]
                heading: "Máster en Aplicaciones Informáticas", //[cite: 1, 2]
                para: "Manipal University Jaipur (en curso)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Ubicación", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Abierto a oportunidades remotas, híbridas y de reubicación" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Enfoque actual", //[cite: 1, 2]
                heading: "Ingeniería Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Escaparate", //[cite: 1, 2]
        subtitle: "Trabajo y pasiones", //[cite: 1, 2]
        para: "Ingeniería de software • IA • Música • Creatividad • Certificados", //[cite: 1, 2]
        filters: [
            "Destacados", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "IA",
            //   "Música",
            "Creativo", //[cite: 1, 2]
            "Todos", //[cite: 1, 2]
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
                description: "Desarrollé y desplegué un sitio web corporativo moderno de una sola página usando Next.js. Configuré Docker, Nginx y alojamiento de producción mientras optimizaba la capacidad de respuesta, el rendimiento y los flujos de trabajo de despliegue.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Visitar sitio web", //[cite: 1, 2]
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
                description: "Desarrollé y mantuve un widget de chat de IA receptivo integrado en Shopify que admite el descubrimiento de productos y las interacciones con los clientes. Construí API de backend, integré Shopify GraphQL y creé paneles de Looker Studio para monitorear la participación del usuario y las métricas comerciales.", //[cite: 1, 2]
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
                description: "Desarrollé un sistema de gestión de contenido (CMS) full-stack con paneles de administración seguros, gestión de contenido dinámica, operaciones CRUD y despliegue de producción en Ubuntu usando Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Visitar sitio web", //[cite: 1, 2]
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
                description: "Desarrollé una plataforma de tecnología financiera receptiva que conecta a los usuarios con el asesor financiero verificado Raman Khandelwal a través de una arquitectura frontend moderna y segura por tipos.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Visitar sitio web" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Construí en tres días una plataforma de selfie virtual impulsada por IA para una gran iniciativa cultural de Durga Puja. Desarrollé el frontend completo, backend de Firebase, base de datos Firestore, panel administrativo, eliminación de fondo por IA usando API Dezgo, controles de mejora de imagen e integración de Google Tag Manager antes de desplegar la aplicación con Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Visitar sitio web", //[cite: 1, 2]
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
                description: "Desarrollé la plataforma oficial de Entrepreneurship Cell con administración Django personalizada, gestión de mentores, gestión de exalumnos, seguimiento de contribuciones y flujos de trabajo de aprobación de blogs. La plataforma representó a la institución durante el concurso IIT Bombay E-Cell y fue construida en tres días.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Diseñé y desarrollé una plataforma SaaS de fitness y comercio electrónico para múltiples proveedores que apoya a administradores, propietarios de gimnasios, entrenadores, personal y clientes. Implementé control de acceso basado en roles (RBAC), integración de pagos PhonePe, API REST para aplicaciones Flutter, funciones comunitarias, asistencia QR, gestión de reservas y paneles analíticos.", //[cite: 1, 2]
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
                description: "Construí un sitio web de café personalizado con un panel de administración para gestionar elementos del menú, categorías, contenido de la sección hero, banners promocionales e imágenes del sitio web. Creé una experiencia de gestión de contenido intuitiva que permite al personal actualizar el contenido del sitio web de manera eficiente mientras mantiene una experiencia del cliente receptiva y visualmente coherente." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Construí un sitio web de marketing receptivo para una marca de equipos de fitness centrado en la presentación de productos, narración de historias de marca y generación de clientes potenciales. Desarrollé secciones de página de destino atractivas, exhibiciones de productos, contenido promocional y diseños adaptados a dispositivos móviles para mejorar la participación del usuario y la visibilidad de la marca.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Trabajé en una plataforma de creación de sitios web inmobiliarios personalizados que permitía a las empresas generar y gestionar sitios web a partir de plantillas configurables. Implementé gestión de secciones dinámica, edición de contenido, actualizaciones de imágenes y funciones de personalización de plantillas usando Django, Bootstrap 5 y AJAX. Integré datos inmobiliarios y comerciales de ActivCRM, permitiendo la sincronización automática de contenido entre el CRM y las plataformas de sitios web.", //[cite: 1, 2]
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
                description: "Creé un catálogo de marketing para una empresa de fabricación industrial, transformando las especificaciones técnicas del producto en diseños visualmente atractivos y fáciles de navegar. Diseñé exhibiciones de productos, activos de marca y páginas promocionales usando Canva, garantizando al mismo tiempo coherencia, legibilidad y estándares profesionales de presentación." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Desarrollé la identidad visual y el catálogo de marketing para una empresa de fabricación industrial. Diseñé el logotipo de la empresa, activos de marca y diseños de catálogo de productos, creando una experiencia de marca cohesiva que presentó eficazmente la información técnica del producto a través de un diseño claro y visualmente atractivo." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Creativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Desarrollé un catálogo de marketing corporativo para una firma de consultoría de ingeniería, destacando carteras de servicios, competencias técnicas y experiencia en proyectos. Diseñé diseños visualmente estructurados, contenido de marca y materiales de presentación que transformaron conceptos de ingeniería complejos en material de marketing accesible y profesional." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Contacto", //[cite: 1, 2]
        heading: "El viaje continúa", //[cite: 1, 2]

        intro:
            "Si buscas un ingeniero de software backend que disfrute construyendo sistemas escalables, aplicaciones cloud-native y productos digitales confiables, me encantaría conectar. Siempre estoy interesado en discutir nuevas oportunidades, proyectos desafiantes e ideas innovadoras.", //[cite: 1, 2]

        availability:
            "Actualmente disponible para puestos a tiempo completo, oportunidades remotas, proyectos freelance y reubicación internacional.", //[cite: 1, 2]

        cta: {
            email: "Enviarme un email", //[cite: 1, 2]
            linkedin: "Conectar en LinkedIn", //[cite: 1, 2]
        },

        quote: "Cada gran proyecto comienza con una conversación.", //[cite: 1, 2]
    }
};