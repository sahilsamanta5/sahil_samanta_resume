import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "首页",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "技能",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "关于我",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "项目", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "联系方式",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "领英", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "收起", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "后端软件工程师", //[cite: 1, 2]
        availability: "全球求职中", //[cite: 1, 2]
        since: "自 2021 年起开始编程", //[cite: 1, 2]
        experience: "2年以上行业经验" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                构建{" "}
                <span className="text-[var(--accent-cyan)]">
                    可扩展的后端系统
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    探索
                </span>{" "}
                人工智能与游戏开发
                </span>
            </>
        ), //[cite: 1, 2]
        para: "后端软件工程师，专注于使用 Python、Django 和 FastAPI 构建可扩展的 API、云原生应用程序和现代后端架构。对人工智能、分布式系统和构建高并发的软件充满热情。", //[cite: 1, 2]
        cta1: "查看我的作品", //[cite: 1, 2]
        cta2: "下载简历", //[cite: 1, 2]
        status: {
            head: "求职状态", //[cite: 1, 2]
            stat: () => (
                <>
                    常驻<span className="text-[var(--accent-blue)]">印度加尔各答</span>。开放全职、远程、混合办公以及提供搬迁支持的工作机会。
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "技术技能", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "教育背景", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "证书", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "业余爱好", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "语言", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "编程语言", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "后端工程", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "前端工程", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "数据库", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "云计算与 DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "工具与平台", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "架构与概念", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "计算机应用硕士 (MCA)", //[cite: 1, 2]
                    institution: "马尼帕尔大学斋浦尔分校 (Manipal University Jaipur)", //[cite: 1, 2]
                    timeline: "2026 - 至今", //[cite: 1, 2]
                    description:
                    "目前正在攻读硕士学位，主修软件工程、分布式系统、云计算和现代应用程序开发。" //[cite: 1, 2]
                },
                {
                    degree: "工商管理学士 (BBA)", //[cite: 1, 2]
                    institution: "加尔各答 Bharatiya Vidya Bhavan 管理科学学院", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "以 8.13/10 的 CGPA 毕业。培养了强大的分析、解决问题和企业管理技能，为设计符合现实商业需求的软件提供了宝贵的洞察力。" //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "游戏开发", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "我喜欢通过构建小型原型以及研究游戏机制、关卡设计和交互系统来学习 Unity、C# 和游戏设计。" //[cite: 1, 2]
                },
                {
                    title: "音乐与唱歌", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "唱歌是我最喜欢的创意宣泄方式之一。它帮助我在软件开发之余放松身心、提高注意力并保持健康的平衡。" //[cite: 1, 2]
                },
                {
                    title: "烹饪与创造", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "烹饪教会了我耐心、对细节的关注和不断的尝试——这些品质我也应用在设计和构建软件中。" //[cite: 1, 2]
                },
                {
                    title: "学习语言与文化", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "我目前正在学习日语，并喜欢通过旅行、书籍和在线社区探索不同的文化、技术和思想。" //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "英语", proficiency: "专业工作水平" }, //[cite: 1, 2]
                { language: "印地语", proficiency: "母语/双语水平" }, //[cite: 1, 2]
                { language: "孟加拉语", proficiency: "母语/双语水平" }, //[cite: 1, 2]
                { language: "日语", proficiency: "初级 (JLPT N5)" } //[cite: 1, 2]
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
        cta: "验证证书", //[cite: 1, 2]
        carouselCta: {
            next: "下一个", //[cite: 1, 2]
            prev: "上一个" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "代码背后", //[cite: 1, 2]
        heading: "关于我", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    我是一名后端软件工程师，专注于构建<strong className="font-medium text-[var(--foreground)]">可扩展的 API、云原生应用程序和现代后端系统。</strong> 目前在<strong className="font-medium text-[var(--foreground)]">马尼帕尔大学斋浦尔分校</strong>攻读<span className="text-[var(--accent-cyan)]">计算机应用硕士 (MCA)</span>，我喜欢使用 <span className="text-[var(--accent-cyan)]">Python</span>、<span className="text-[var(--accent-cyan)]">Django</span>、<span className="text-[var(--accent-cyan)]">FastAPI</span> 和 <span className="text-[var(--accent-cyan)]">现代 Web 技术</span>开发<strong className="font-medium text-[var(--foreground)]">可靠的软件</strong>。
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    我热衷于<strong className="font-medium text-[var(--foreground)]">设计后端系统</strong>，使其具备<span className="text-[var(--accent-cyan)]">可维护性</span>、<span className="text-[var(--accent-cyan)]">安全性</span>和<span className="text-[var(--accent-cyan)]">可扩展性</span>。无论是开发 REST API、集成第三方服务，还是将应用程序部署到云端，我都注重编写<span className="text-[var(--accent-cyan)]">整洁、可靠的代码</span>来解决现实世界的问题。
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    在后端工程之外，我喜欢将 <span className="text-[var(--accent-cyan)]">Unity</span>、<span className="text-[var(--accent-cyan)]">Blender</span> 和 <span className="text-[var(--accent-cyan)]">游戏开发</span>作为我的创意副业进行探索。跨领域的学习帮助我在软件工程中兼具技术深度与创造性的问题解决能力。
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "教育背景", //[cite: 1, 2]
                heading: "计算机应用硕士", //[cite: 1, 2]
                para: "马尼帕尔大学斋浦尔分校（在读）" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "所在地", //[cite: 1, 2]
                heading: "印度，加尔各答", //[cite: 1, 2]
                para: "开放远程、混合办公和搬迁机会" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "当前重点", //[cite: 1, 2]
                heading: "后端工程", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "作品集", //[cite: 1, 2]
        subtitle: "工作与热爱", //[cite: 1, 2]
        para: "软件工程 • 人工智能 • 音乐 • 创意 • 证书", //[cite: 1, 2]
        filters: [
            "精选", //[cite: 1, 2]
            "软件", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "创意", //[cite: 1, 2]
            "全部", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "使用 Next.js 开发并部署了一个现代化的单页企业网站。配置了 Docker、Nginx 和生产环境托管，同时优化了响应能力、性能和部署工作流。", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "访问网站", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "开发并维护了一个集成 Shopify 的响应式 AI 聊天小部件，支持产品发现和客户交互。构建后端 API，集成 Shopify GraphQL，并创建 Looker Studio 仪表板以监控用户参与度和业务指标。", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "开发了一个全栈内容管理系统 (CMS)，具有安全的管理仪表板、动态内容管理、CRUD 操作，并使用 Apache2 在 Ubuntu 上进行了生产环境部署。", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "访问网站", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "通过现代、类型安全的前端架构，开发了一个响应式金融科技平台，将用户与经过验证的财务顾问 Raman Khandelwal 连接起来。", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "访问网站" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "为一项大型的 Durga Puja 文化活动在三天内构建了一个人工智能驱动的虚拟自拍平台。在部署到 Firebase Hosting 之前，开发了完整的前端、Firebase 后端、Firestore 数据库、管理仪表板，并使用 Dezgo API 实现了 AI 背景移除、图像增强控制以及 Google Tag Manager 集成。", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "访问网站", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "开发了官方创业中心平台，具有自定义的 Django 管理功能、导师管理、校友管理、贡献跟踪和博客审批工作流。该平台在 IIT Bombay E-Cell 竞赛期间代表该机构，且仅在三天内完成构建。", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "设计并开发了一个支持管理员、健身房老板、教练、员工和客户的多商户健身和电子商务 SaaS 平台。实施了基于角色的访问控制 (RBAC)、PhonePe 支付集成、用于 Flutter 应用程序的 REST API、社区功能、二维码考勤、预订管理和分析仪表板。", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "建立了一个带有管理仪表板的定制咖啡馆网站，用于管理菜单项、类别、首屏内容、促销横幅和网站图像。创建了直观的内​​容管理体验，使员工能够高效地更新网站内容，同时保持响应迅速且视觉一致的客户体验。" //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "为健身器材品牌建立了一个响应式营销网站，专注于产品展示、品牌故事讲述和潜在客户挖掘。开发了引人入胜的登录页面部分、产品展示、促销内容和适合移动设备的布局，以提高用户参与度和品牌知名度。" //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "软件", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "参与开发了一个定制的房地产网站建设平台，该平台允许企业从可配置的模板生成和管理网站。使用 Django、Bootstrap 5 和 AJAX 实现了动态部分管理、内容编辑、图像更新和模板自定义功能。整合了来自 ActivCRM 的房产和业务数据，实现了 CRM 和网站平台之间的内容自动同步。", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "创意", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "为一家工业制造公司制作了营销产品目录，将技术产品规格转化为视觉上引人入胜且易于浏览的布局。使用 Canva 设计了产品展示、品牌资产和促销页面，同时确保了一致性、可读性和专业的演示标准。" //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "创意", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "为一家工业制造公司开发了视觉标识和营销产品目录。设计了公司标志、品牌资产和产品目录布局，创造了具有凝聚力的品牌体验，通过清晰且具有视觉吸引力的设计有效地展示了技术产品信息。" //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "创意", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "为一家工程咨询公司开发了企业营销目录，重点介绍服务组合、技术能力和项目专业知识。设计了具有视觉结构感的布局、品牌内容和演示材料，将复杂的工程概念转化为易于理解的专业营销材料。" //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "联系方式", //[cite: 1, 2]
        heading: "旅程继续", //[cite: 1, 2]

        intro:
            "如果您正在寻找一位喜欢构建可扩展系统、云原生应用程序和可靠数字产品的后端软件工程师，我很乐意与您联系。我一直对讨论新机会、具有挑战性的项目和创新想法充满兴趣。", //[cite: 1, 2]

        availability:
            "目前接受全职职位、远程工作机会、自由职业项目以及跨国搬迁。", //[cite: 1, 2]

        cta: {
            email: "给我发邮件", //[cite: 1, 2]
            linkedin: "在领英上联系", //[cite: 1, 2]
        },

        quote: "每一个伟大的项目都始于一次对话。", //[cite: 1, 2]
    }
};