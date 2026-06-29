import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/pt/hero_bg.jpg",
        contact: ""
    },
    header: {
        nav: [
            { label: "INÍCIO",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "HABILIDADES",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "SOBRE MIM",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJETOS", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "CONTATO",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "RECOLHER", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "ENGENHEIRO DE SOFTWARE BACKEND", //[cite: 1, 2]
        availability: "DISPONÍVEL EM TODO O MUNDO", //[cite: 1, 2]
        since: "PROGRAMANDO DESDE 2021", //[cite: 1, 2]
        experience: "2+ ANOS DE EXPERIÊNCIA NA INDÚSTRIA" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Construindo{" "}
                <span className="text-[var(--accent-cyan)]">
                    sistemas backend escaláveis
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Explorando
                </span>{" "}
                IA e desenvolvimento de jogos
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Engenheiro de software backend especializado em APIs escaláveis, aplicações cloud-native e arquitetura backend moderna usando Python, Django e FastAPI. Apaixonado por IA, sistemas distribuídos e pela construção de software que cresce conforme a necessidade.", //[cite: 1, 2]
        cta1: "Explorar meus trabalhos", //[cite: 1, 2]
        cta2: "Baixar currículo", //[cite: 1, 2]
        status: {
            head: "Status de contratação", //[cite: 1, 2]
            stat: () => (
                <>
                    Com base em <span className="text-[var(--accent-blue)]">Kolkata, Índia</span>. Aberto a oportunidades em tempo integral, remotas, híbridas e de realocação.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_pt.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Habilidades técnicas", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Educação", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certificações", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Hobbies", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Idiomas", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Linguagens de programação", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Engenharia Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Engenharia Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Bancos de dados", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Cloud e DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Ferramentas e plataformas", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Conceitos", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Mestrado em Aplicações de Computador (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Presente", //[cite: 1, 2]
                    description:
                    "Atualmente cursando um mestrado com foco em engenharia de software, sistemas distribuídos, computação em nuvem e desenvolvimento de aplicações modernas." //[cite: 1, 2]
                },
                {
                    degree: "Bacharelado em Administração de Empresas (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Graduado com um CGPA de 8.13/10. Desenvolvi fortes habilidades analíticas, de resolução de problemas e de gestão de negócios, fornecendo uma visão valiosa no design de software que se alinha às necessidades reais dos negócios." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Desenvolvimento de jogos", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Gosto de aprender Unity, C# e design de jogos construindo pequenos protótipos e estudando mecânicas de jogo, design de níveis e sistemas interativos." //[cite: 1, 2]
                },
                {
                    title: "Música e canto", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Cantar é uma das minhas válvulas de escape criativas favoritas. Ajuda-me a relaxar, melhorar o foco e manter um equilíbrio saudável junto com o desenvolvimento de software." //[cite: 1, 2]
                },
                {
                    title: "Culinária e criatividade", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Cozinhar ensina paciência, atenção aos detalhes e experimentação contínua — qualidades que também aplico ao projetar e construir software." //[cite: 1, 2]
                },
                {
                    title: "Aprendizado de idiomas e cultura", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Atualmente estou aprendendo japonês e gosto de explorar diferentes culturas, tecnologias e ideias através de viagens, livros e comunidades online." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Inglês", proficiency: "Competência profissional" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Nativo / Bilíngue" }, //[cite: 1, 2]
                { language: "Bengali", proficiency: "Nativo / Bilíngue" }, //[cite: 1, 2]
                { language: "Japonês", proficiency: "Iniciante (JLPT N5)" } //[cite: 1, 2]
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 de junho de 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 de junho de 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                }, //[cite: 1, 2]
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26 de março de 2026",
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
                    date: "11 de março de 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30 de setembro de 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                }, //[cite: 1, 2]
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1 de julho de 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 de junho de 2023",
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
                    date: "9 de março de 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                }, //[cite: 1, 2]
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21 de dezembro de 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                }, //[cite: 1, 2]
            ]
        },
        cta: "Verificar", //[cite: 1, 2]
        carouselCta: {
            next: "Próximo", //[cite: 1, 2]
            prev: "Anterior" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Por trás do código", //[cite: 1, 2]
        heading: "Sobre mim", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Sou um engenheiro de software backend especializado em <strong className="font-medium text-[var(--foreground)]">APIs escaláveis, aplicações cloud-native e sistemas backend modernos.</strong> Atualmente cursando um <span className="text-[var(--accent-cyan)]">Mestrado em Aplicações de Computador (MCA)</span> na <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, gosto de construir <strong className="font-medium text-[var(--foreground)]">softwares confiáveis</strong> usando <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> e <span className="text-[var(--accent-cyan)]">tecnologias web modernas</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Gosto de <strong className="font-medium text-[var(--foreground)]">projetar sistemas backend</strong> que sejam <span className="text-[var(--accent-cyan)]">sustentáveis</span>, <span className="text-[var(--accent-cyan)]">seguros</span> e <span className="text-[var(--accent-cyan)]">escaláveis</span>. Seja desenvolvendo APIs REST, integrando serviços de terceiros ou implantando aplicações na nuvem, foco-me em escrever <span className="text-[var(--accent-cyan)]">código limpo e confiável</span> que resolva problemas do mundo real.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Além da engenharia backend, gosto de explorar <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> e <span className="text-[var(--accent-cyan)]">desenvolvimento de jogos</span> como projetos criativos paralelos. Aprender sobre diversas tecnologias ajuda-me a abordar a engenharia de software com profundidade técnica e resolução criativa de problemas.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Educação", //[cite: 1, 2]
                heading: "Mestrado em Aplicações de Computador", //[cite: 1, 2]
                para: "Manipal University Jaipur (em curso)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Localização", //[cite: 1, 2]
                heading: "Kolkata, Índia", //[cite: 1, 2]
                para: "Aberto a oportunidades remotas, híbridas e de realocação" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Foco atual", //[cite: 1, 2]
                heading: "Engenharia Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Vitrine", //[cite: 1, 2]
        subtitle: "Trabalho e paixões", //[cite: 1, 2]
        para: "Engenharia de Software • IA • Música • Criatividade • Certificados", //[cite: 1, 2]
        filters: [
            "Destaques", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "IA",
            //   "Música",
            "Criativo", //[cite: 1, 2]
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
                description: "Desenvolvi e implantei um site corporativo moderno de página única usando Next.js. Configurei Docker, Nginx e hospedagem de produção enquanto otimizava a responsividade, o desempenho e os fluxos de trabalho de implantação.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Visitar site", //[cite: 1, 2]
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
                description: "Desenvolvi e mantive um widget de chat de IA responsivo integrado ao Shopify, apoiando a descoberta de produtos e interações com clientes. Construí APIs de backend, integrei Shopify GraphQL e criei painéis do Looker Studio para monitorar o engajamento do usuário e métricas de negócios.", //[cite: 1, 2]
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
                description: "Desenvolvi um sistema de gerenciamento de conteúdo (CMS) full-stack com painéis de administração seguros, gerenciamento de conteúdo dinâmico, operações CRUD e implantação de produção no Ubuntu usando Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Visitar site", //[cite: 1, 2]
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
                description: "Desenvolvi uma plataforma de tecnologia financeira responsiva conectando usuários ao consultor financeiro verificado Raman Khandelwal através de uma arquitetura frontend moderna e segura por tipo.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Visitar site" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Construí em três dias uma plataforma de selfie virtual impulsionada por IA para uma grande iniciativa cultural de Durga Puja. Desenvolvi o frontend completo, backend Firebase, banco de dados Firestore, painel administrativo, remoção de fundo por IA usando APIs Dezgo, controles de aprimoramento de imagem e integração com o Google Tag Manager antes de implantar a aplicação com Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Visitar site", //[cite: 1, 2]
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
                description: "Desenvolvi a plataforma oficial da Célula de Empreendedorismo com administração Django personalizada, gestão de mentores, gestão de ex-alunos, rastreamento de contribuições e fluxos de trabalho de aprovação de blog. A plataforma representou a instituição durante a competição IIT Bombay E-Cell e foi construída em três dias.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Projetei e desenvolvi uma plataforma SaaS de fitness e e-commerce para vários fornecedores, apoiando administradores, donos de academia, treinadores, funcionários e clientes. Implementei controle de acesso baseado em função (RBAC), integração de pagamento PhonePe, APIs REST para aplicativos Flutter, recursos comunitários, presença QR, gestão de reservas e painéis analíticos.", //[cite: 1, 2]
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
                description: "Construí um site de café personalizado com painel de administração para gerenciar itens de menu, categorias, conteúdo da seção hero, banners promocionais e imagens do site. Criei uma experiência de gerenciamento de conteúdo intuitiva que permite aos funcionários atualizar o conteúdo do site com eficiência, mantendo uma experiência do cliente responsiva e visualmente consistente." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Construí um site de marketing responsivo para uma marca de equipamentos de fitness focado na apresentação de produtos, storytelling da marca e geração de leads. Desenvolvi seções de landing page envolventes, vitrines de produtos, conteúdo promocional e layouts amigáveis para dispositivos móveis para melhorar o engajamento do usuário e a visibilidade da marca.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Trabalhei em uma plataforma de construção de sites imobiliários personalizados que permitia às empresas gerar e gerenciar sites a partir de modelos configuráveis. Implementei gestão dinâmica de seções, edição de conteúdo, atualizações de imagem e recursos de personalização de modelo usando Django, Bootstrap 5 e AJAX. Integrei dados imobiliários e comerciais do ActivCRM, permitindo a sincronização automática de conteúdo entre o CRM e as plataformas de site.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Criativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Criei um catálogo de marketing para uma empresa de manufatura industrial, transformando especificações técnicas de produtos em layouts visualmente atraentes e fáceis de navegar. Projetei vitrines de produtos, ativos de branding e páginas promocionais usando Canva, garantindo consistência, legibilidade e padrões profissionais de apresentação." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Criativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Desenvolvi a identidade visual e o catálogo de marketing para uma empresa de manufatura industrial. Projetei o logotipo da empresa, ativos de branding e layouts de catálogo de produtos, criando uma experiência de marca coesa que apresentou efetivamente as informações técnicas do produto por meio de um design claro e visualmente atraente." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Criativo", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Desenvolvi um catálogo de marketing corporativo para uma firma de consultoria em engenharia, destacando portfólios de serviços, competências técnicas e experiência em projetos. Projetei layouts visualmente estruturados, conteúdo de marca e materiais de apresentação que transformaram conceitos complexos de engenharia em material de marketing acessível e profissional." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Contato", //[cite: 1, 2]
        heading: "A jornada continua", //[cite: 1, 2]

        intro:
            "Se você está procurando um engenheiro de software backend que goste de construir sistemas escaláveis, aplicações cloud-native e produtos digitais confiáveis, eu adoraria me conectar. Estou sempre interessado em discutir novas oportunidades, projetos desafiadores e ideias inovadoras.", //[cite: 1, 2]

        availability:
            "Atualmente disponível para cargos em tempo integral, oportunidades remotas, projetos freelance e realocação internacional.", //[cite: 1, 2]

        cta: {
            email: "Enviar um e-mail", //[cite: 1, 2]
            linkedin: "Conectar no LinkedIn", //[cite: 1, 2]
        },

        quote: "Todo grande projeto começa com uma conversa.", //[cite: 1, 2]
    }
};