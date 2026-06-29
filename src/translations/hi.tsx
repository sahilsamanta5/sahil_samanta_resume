import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb";
import { ShowcaseItem } from "../components/showcase/showcaseData";

export default {
    header: {
        nav: [
            { label: "होम", href: "#home", icon: TbHome },
            { label: "कौशल", href: "#profile", icon: TbTerminal2 },
            { label: "मेरे बारे में", href: "#about", icon: TbUser },
            { label: "प्रोजेक्ट्स", href: "#showcase", icon: TbLayoutGrid },
            { label: "संपर्क", href: "#contact", icon: TbMail },
        ],

        socials: [
            {
                label: "लिंक्डइन",
                href: "https://www.linkedin.com/in/sahilsamanta/",
                icon: TbBrandLinkedin,
            },
        ],

        collapseText: "समेटें",

        name: "साहिल सामंत",

        position: "बैकएंड सॉफ्टवेयर इंजीनियर",

        availability: "दुनिया भर में उपलब्ध",

        since: "2021 से प्रोग्रामिंग",

        experience: "उद्योग में 2+ वर्षों का अनुभव",
    },

    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                    <span className="text-[var(--accent-cyan)]">
                        स्केलेबल
                    </span>{" "}
                    बैकएंड सिस्टम विकसित करना
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                    <span className="text-[var(--accent-cyan)]">
                        एआई और गेम डेवलपमेंट
                    </span>{" "}
                    की खोज
                </span>
            </>
        ),

        para:
            "मैं Python, Django और FastAPI का उपयोग करके स्केलेबल APIs, क्लाउड-नेटिव एप्लिकेशन और आधुनिक बैकएंड आर्किटेक्चर विकसित करने वाला बैकएंड सॉफ्टवेयर इंजीनियर हूँ। मुझे आर्टिफिशियल इंटेलिजेंस, डिस्ट्रिब्यूटेड सिस्टम्स और बड़े पैमाने पर चलने वाले सॉफ्टवेयर बनाने का जुनून है।",

        cta1: "मेरे कार्य देखें",

        cta2: "रिज़्यूमे डाउनलोड करें",

        status: {
            head: "भर्ती की स्थिति",

            stat: () => (
                <>
                    <span className="text-[var(--accent-blue)]">
                        कोलकाता, भारत
                    </span>{" "}
                    में स्थित। पूर्णकालिक, रिमोट, हाइब्रिड और अंतरराष्ट्रीय स्थानांतरण (Relocation) के अवसरों के लिए उपलब्ध।
                </>
            ),
        },
    },
    profile: {
        tabs: [
            { id: "skills", label: "तकनीकी कौशल", icon: TbCode },
            { id: "education", label: "शिक्षा", icon: TbSchool },
            { id: "certs", label: "प्रमाणपत्र", icon: TbCertificate },
            { id: "hobbies", label: "रुचियाँ", icon: TbActivity },
            { id: "languages", label: "भाषाएँ", icon: TbMessageCircle },
        ],

        skills: {
            technical: [
                {
                    category: "प्रोग्रामिंग भाषाएँ",
                    icon: TbCode,
                    skills: [
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "SQL",
                        "C",
                        "C#",
                        "Java",
                    ],
                },
                {
                    category: "बैकएंड इंजीनियरिंग",
                    icon: TbServer2,
                    skills: [
                        "Django",
                        "Django REST Framework (DRF)",
                        "FastAPI",
                        "Flask",
                        "REST API Design",
                        "GraphQL",
                        "Payment Gateway Integration",
                    ],
                },
                {
                    category: "फ्रंटएंड इंजीनियरिंग",
                    icon: TbDeviceDesktopCode,
                    skills: [
                        "React",
                        "Next.js",
                        "React Native",
                        "HTML5",
                        "CSS3",
                        "Tailwind CSS",
                        "Bootstrap",
                        "AJAX",
                    ],
                },
                {
                    category: "डेटाबेस",
                    icon: TbDatabase,
                    skills: [
                        "MySQL",
                        "MongoDB",
                        "Firebase Firestore",
                        "SQLite3",
                    ],
                },
                {
                    category: "क्लाउड एवं DevOps",
                    icon: TbCloudComputing,
                    skills: [
                        "Docker",
                        "Linux",
                        "Nginx",
                        "PM2",
                        "Jenkins",
                        "AWS IAM",
                        "AWS Lambda",
                        "Google Cloud VM",
                        "Firebase Hosting",
                        "Seed.run",
                    ],
                },
                {
                    category: "टूल्स एवं प्लेटफ़ॉर्म",
                    icon: TbTools,
                    skills: [
                        "Git",
                        "GitHub",
                        "Postman",
                        "Jira",
                        "Shopify GraphQL",
                        "Magento",
                        "Google Analytics 4 (GA4)",
                        "Google Tag Manager (GTM)",
                        "Looker Studio",
                        "Firebase",
                        "Dezgo AI API",
                        "Canva",
                        "Blender",
                        "Unity",
                        "Adobe Premiere Pro",
                    ],
                },
                {
                    category: "सिद्धांत",
                    icon: TbHierarchy3,
                    skills: [
                        "RESTful Architecture",
                        "Authentication & Authorization",
                        "Role-Based Access Control (RBAC)",
                        "MVC Architecture",
                        "Responsive Design",
                    ],
                },
            ],

            education: [
                {
                    degree: "Master of Computer Applications (MCA)",
                    institution: "Manipal University Jaipur",
                    timeline: "2026 - वर्तमान",
                    description:
                        "वर्तमान में Software Engineering, Distributed Systems, Cloud Computing और Modern Application Development पर केंद्रित मास्टर डिग्री कर रहा हूँ।",
                },
                {
                    degree: "Bachelor of Business Administration (BBA)",
                    institution:
                        "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata",
                    timeline: "2021 - 2024",
                    description:
                        "8.13/10 CGPA के साथ स्नातक। विश्लेषणात्मक सोच, समस्या-समाधान और Business Management में मजबूत आधार विकसित किया, जिससे वास्तविक व्यावसायिक आवश्यकताओं के अनुरूप Software Design की बेहतर समझ प्राप्त हुई।",
                },
            ],

            hobbies: [
                {
                    title: "गेम डेवलपमेंट",
                    icon: TbDeviceGamepad2,
                    description:
                        "मुझे Unity, C# और Game Design सीखना पसंद है। छोटे-छोटे प्रोटोटाइप बनाकर Gameplay Mechanics, Level Design और Interactive Systems का अध्ययन करता हूँ।",
                },
                {
                    title: "संगीत एवं गायन",
                    icon: TbMusic,
                    description:
                        "गायन मेरी पसंदीदा रचनात्मक गतिविधियों में से एक है। यह मुझे आराम करने, एकाग्रता बढ़ाने और Software Development के साथ अच्छा संतुलन बनाए रखने में मदद करता है।",
                },
                {
                    title: "खाना बनाना एवं रचनात्मकता",
                    icon: TbChefHat,
                    description:
                        "खाना बनाना धैर्य, बारीकियों पर ध्यान और निरंतर प्रयोग करना सिखाता है। यही गुण मैं Software विकसित करते समय भी अपनाता हूँ।",
                },
                {
                    title: "भाषाएँ एवं संस्कृति",
                    icon: TbWorld,
                    description:
                        "मैं वर्तमान में जापानी भाषा सीख रहा हूँ और यात्रा, पुस्तकों तथा ऑनलाइन समुदायों के माध्यम से विभिन्न संस्कृतियों, तकनीकों और नए विचारों को जानना पसंद करता हूँ।",
                },
            ],

            languages: [
                {
                    language: "अंग्रेज़ी",
                    proficiency: "व्यावसायिक कार्यकुशलता",
                },
                {
                    language: "हिन्दी",
                    proficiency: "मातृभाषा / द्विभाषी दक्षता",
                },
                {
                    language: "बांग्ला",
                    proficiency: "मातृभाषा / द्विभाषी दक्षता",
                },
                {
                    language: "जापानी",
                    proficiency: "प्रारंभिक स्तर (JLPT N5)",
                },
            ],

            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "21 जून 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg",
                },
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "21 जून 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg",
                },
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "26 मार्च 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg",
                },
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "26 अगस्त 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg",
                },
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "13 अप्रैल 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg",
                },
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "11 मार्च 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg",
                },
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "30 सितंबर 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png",
                },
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "1 जुलाई 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg",
                },
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "17 जून 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg",
                },
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "24 अप्रैल 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png",
                },
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "9 मार्च 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg",
                },
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "21 दिसंबर 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg",
                },
            ],
        },

        cta: "सत्यापित करें",

        carouselCta: {
            next: "अगला",
            prev: "पिछला",
        },
    },
    about: {
        tagline: "कोड के पीछे",

        heading: "मेरे बारे में",

        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    मैं एक{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Backend Software Engineer
                    </strong>{" "}
                    हूँ, जो{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Scalable APIs, Cloud-Native Applications और Modern Backend Systems
                    </strong>{" "}
                    विकसित करने में विशेषज्ञता रखता हूँ। वर्तमान में{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Master of Computer Applications (MCA)
                    </span>{" "}
                    की पढ़ाई{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Manipal University Jaipur
                    </strong>{" "}
                    से कर रहा हूँ। मुझे{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        विश्वसनीय Software Solutions
                    </strong>{" "}
                    बनाना पसंद है, जिनमें{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Python
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Django
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        FastAPI
                    </span>{" "}
                    और{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Modern Web Technologies
                    </span>{" "}
                    का उपयोग करता हूँ।
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    मुझे ऐसे{" "}
                    <strong className="font-medium text-[var(--foreground)]">
                        Backend Systems
                    </strong>{" "}
                    डिज़ाइन करना पसंद है जो{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Maintainable
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Secure
                    </span>{" "}
                    और{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Scalable
                    </span>{" "}
                    हों। चाहे{" "}
                    <span className="text-[var(--accent-cyan)]">
                        REST APIs
                    </span>{" "}
                    विकसित करना हो, Third-Party Services को Integrate करना हो या Applications को Cloud पर Deploy करना हो, मेरा ध्यान हमेशा{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Clean और Reliable Code
                    </span>{" "}
                    लिखने पर रहता है, जो वास्तविक समस्याओं का समाधान करता है।
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Backend Engineering के अलावा, मुझे{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Unity
                    </span>
                    ,{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Blender
                    </span>{" "}
                    और{" "}
                    <span className="text-[var(--accent-cyan)]">
                        Game Development
                    </span>{" "}
                    पर Creative Side Projects के रूप में काम करना पसंद है। नई Technologies सीखना मुझे Software Engineering में तकनीकी गहराई और रचनात्मक सोच—दोनों के साथ आगे बढ़ने में मदद करता है।
                </p>
            </>
        ),

        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "शिक्षा",
                heading: "Master of Computer Applications",
                para: "Manipal University Jaipur (वर्तमान में अध्ययनरत)",
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "स्थान",
                heading: "कोलकाता, भारत",
                para: "Remote, Hybrid और Relocation अवसरों के लिए उपलब्ध",
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "वर्तमान फोकस",
                heading: "Backend Engineering",
                para: "Python • Django • FastAPI • REST APIs",
            },
        ],
    },
    project: {
        title: "प्रोजेक्ट्स",
        subtitle: "काम और रुचियाँ",
        para: "सॉफ्टवेयर इंजीनियरिंग • AI • संगीत • रचनात्मकता • प्रमाणपत्र",
        filters: [
            "मुख्य",
            "सॉफ्टवेयर",
            // "AI",
            // "संगीत",
            "रचनात्मक",
            "सभी",
        ],
        projects: [
           {
                id: 1,
                title: "Apearenz वेब प्लेटफ़ॉर्म",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description:
                    "Next.js का उपयोग करके एक आधुनिक Single-Page Corporate Website विकसित और Deploy की। Responsive Design, Performance और Production Deployment को बेहतर बनाने के लिए Docker, Nginx तथा Hosting Environment को Configure किया।",
                link: "https://apearenz.com/",
                linkText: "वेबसाइट देखें",
                featured: true
            },
            {
                id: 2,
                title: "प्रोजेक्ट Katalyse AI",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description:
                    "Shopify से Integrate किया गया Responsive AI Chat Widget विकसित एवं Maintain किया, जो Product Discovery और Customer Interaction को बेहतर बनाता है। Backend APIs तैयार कीं, Shopify GraphQL को Integrate किया तथा User Engagement और Business Metrics की निगरानी के लिए Looker Studio Dashboards बनाए।",
                featured: true
            },
            {
                id: 3,
                title: "श्री रामानुजवाणी",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description:
                    "Secure Administrative Dashboard, Dynamic Content Management और CRUD Operations के साथ एक Full-Stack Content Management System (CMS) विकसित किया। Ubuntu पर Apache2 का उपयोग करके Production Deployment भी किया।",
                link: "https://sriramanujavani.com/",
                linkText: "वेबसाइट देखें",
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description:
                    "एक आधुनिक और Type-Safe Frontend Architecture का उपयोग करते हुए Verified Financial Advisor Raman Khandelwal से उपयोगकर्ताओं को जोड़ने वाला Responsive FinTech Platform विकसित किया।",
                link: "https://dhanwise.com/",
                linkText: "वेबसाइट देखें"
            },
            {
                id: 5,
                title: "ITC Sunrise एवं PujaApp वर्चुअल सेल्फी विद माँ",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description:
                    "एक बड़े दुर्गा पूजा सांस्कृतिक अभियान के लिए मात्र तीन दिनों में AI-संचालित Virtual Selfie Platform विकसित किया। Frontend, Firebase Backend, Firestore Database, Admin Dashboard, Dezgo API द्वारा AI Background Removal, Image Enhancement Controls तथा Google Tag Manager Integration तैयार कर Firebase Hosting पर सफलतापूर्वक Deploy किया।",
                link: "https://thepuja.app/",
                linkText: "वेबसाइट देखें",
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description:
                    "Entrepreneurship Cell के लिए आधिकारिक Platform विकसित किया, जिसमें Custom Django Administration, Mentor Management, Alumni Management, Contribution Tracking तथा Blog Approval Workflow शामिल थे। यह Platform IIT Bombay E-Cell Competition में संस्थान का प्रतिनिधित्व करता था और इसे केवल तीन दिनों में विकसित किया गया।",
            },
            {
                id: 7,
                title: "Locope SaaS प्लेटफ़ॉर्म",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description:
                    "Administrators, Gym Owners, Trainers, Staff और Customers के लिए Multi-Vendor Fitness एवं E-Commerce SaaS Platform डिज़ाइन और विकसित किया। इसमें Role-Based Access Control (RBAC), PhonePe Payment Integration, Flutter Apps के लिए REST APIs, Community Features, QR Attendance, Booking Management तथा Analytics Dashboards लागू किए।",
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café वेबसाइट",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description:
                    "एक Custom Café Website विकसित की, जिसमें Menu Items, Categories, Hero Section, Promotional Banners और Website Images को प्रबंधित करने के लिए एक Administrative Dashboard बनाया। ऐसा सहज Content Management अनुभव तैयार किया जिससे Staff आसानी से Website Content अपडेट कर सके और साथ ही Responsive तथा एकसमान User Experience बनाए रख सके।"
            },
            {
                id: 9,
                title: "MyActivt",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description:
                    "Fitness Equipment Brand के लिए एक Responsive Marketing Website विकसित की, जिसका मुख्य उद्देश्य Product Presentation, Brand Storytelling और Lead Generation था। आकर्षक Landing Pages, Product Showcases, Promotional Sections तथा Mobile-Friendly Layouts तैयार किए, जिससे User Engagement और Brand Visibility में सुधार हुआ।"
            },
            {
                id: 10,
                title: "ActivCMS",
                category: "Software",
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description:
                    "एक Custom Real Estate Website Builder Platform पर कार्य किया, जिससे व्यवसाय Configurable Templates के माध्यम से अपनी वेबसाइट बना और प्रबंधित कर सकें। Django, Bootstrap 5 और AJAX का उपयोग करते हुए Dynamic Section Management, Content Editing, Image Updates तथा Template Customization विकसित किया। ActivCRM से Property और Business Data को Integrate कर CRM एवं Website के बीच स्वचालित Content Synchronization सुनिश्चित किया।",
                featured: true
            },
            {
                id: 11,
                title: "Precision Works कैटलॉग",
                category: "Creative",
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description:
                    "एक Industrial Manufacturing Company के लिए Marketing Catalog तैयार किया, जिसमें तकनीकी Product Specifications को आकर्षक और आसानी से समझ आने वाले Layouts में प्रस्तुत किया। Canva की सहायता से Product Showcases, Branding Assets और Promotional Pages डिज़ाइन किए, ताकि Professional Presentation, Readability और Visual Consistency सुनिश्चित हो सके।"
            },
            {
                id: 12,
                title: "Padrone कैटलॉग एवं ब्रांड पहचान",
                category: "Creative",
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description:
                    "एक Industrial Manufacturing Company के लिए Visual Identity और Marketing Catalog विकसित किया। Company Logo, Branding Assets तथा Product Catalog Layouts डिज़ाइन किए, जिससे तकनीकी उत्पादों की जानकारी स्पष्ट, आकर्षक और एकसमान Brand Experience के साथ प्रस्तुत की जा सके।"
            },
            {
                id: 13,
                title: "PlanTech Engineering Services कैटलॉग",
                category: "Creative",
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description:
                    "एक Engineering Consulting Firm के लिए Corporate Marketing Catalog विकसित किया, जिसमें Service Portfolio, Technical Expertise और Project Experience को प्रमुखता से प्रस्तुत किया गया। सुव्यवस्थित Layouts, Branded Content और Presentation Materials तैयार किए, जिससे जटिल Engineering Concepts को Professional और आसानी से समझ आने वाले Marketing Material में परिवर्तित किया जा सका।"
            }
        ] satisfies ShowcaseItem[]
    },
    contact: {
        tagline: "संपर्क",

        heading: "यात्रा अभी जारी है",

        intro:
            "यदि आप ऐसे Backend Software Engineer की तलाश में हैं जिसे Scalable Systems, Cloud-Native Applications और विश्वसनीय Digital Products विकसित करना पसंद हो, तो मुझसे जुड़ने में संकोच न करें। मुझे नए अवसरों, चुनौतीपूर्ण प्रोजेक्ट्स और नवाचारी विचारों पर चर्चा करना हमेशा पसंद है।",

        availability:
            "वर्तमान में Full-Time पदों, Remote अवसरों, Freelance Projects तथा International Relocation के लिए उपलब्ध हूँ।",

        cta: {
            email: "ईमेल करें",
            linkedin: "LinkedIn पर जुड़ें",
        },

        quote: "हर बेहतरीन प्रोजेक्ट की शुरुआत एक बातचीत से होती है।",
    }
};