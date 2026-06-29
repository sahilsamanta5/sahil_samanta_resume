import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "হোম",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "দক্ষতা",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "আমার সম্পর্কে",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "প্রজেক্ট", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "যোগাযোগ",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "লিঙ্কডইন", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "সঙ্কুচিত করুন", //[cite: 1, 2]
        name: "সাহিল সামন্ত", //[cite: 1, 2]
        position: "ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ার", //[cite: 1, 2]
        availability: "বিশ্বব্যাপী উপলব্ধ", //[cite: 1, 2]
        since: "২০২১ সাল থেকে কোডিং করছি", //[cite: 1, 2]
        experience: "ইন্ডাস্ট্রিতে ২+ বছরের অভিজ্ঞতা" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                তৈরি করছি{" "}
                <span className="text-[var(--accent-cyan)]">
                    স্কেলেবল ব্যাকএন্ড সিস্টেম
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    অন্বেষণ করছি
                </span>{" "}
                এআই এবং গেম ডেভেলপমেন্ট
                </span>
            </>
        ), //[cite: 1, 2]
        para: "পাইথন, জ্যাঙ্গো এবং ফাস্টএপিআই ব্যবহার করে স্কেলেবল এপিআই, ক্লাউড-নেটিভ অ্যাপ্লিকেশন এবং আধুনিক ব্যাকএন্ড আর্কিটেকচারে বিশেষজ্ঞ একজন ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ার। এআই, ডিস্ট্রিবিউটেড সিস্টেম এবং স্কেল করা যায় এমন সফটওয়্যার তৈরিতে আগ্রহী।", //[cite: 1, 2]
        cta1: "আমার কাজগুলো দেখুন", //[cite: 1, 2]
        cta2: "জীবনবৃত্তান্ত ডাউনলোড করুন", //[cite: 1, 2]
        status: {
            head: "নিয়োগের অবস্থা", //[cite: 1, 2]
            stat: () => (
                <>
                    ভারতের <span className="text-[var(--accent-blue)]">কলকাতাতে</span> অবস্থিত। ফুল-টাইম, রিমোট, হাইব্রিড এবং রিলোকেশন সুযোগের জন্য উন্মুক্ত।
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "টেকনিক্যাল স্কিল", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "শিক্ষাগত যোগ্যতা", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "সার্টিফিকেশন", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "শখ", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "ভাষা", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "প্রোগ্রামিং ভাষা", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "ব্যাকএন্ড ইঞ্জিনিয়ারিং", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "ফ্রন্টএন্ড ইঞ্জিনিয়ারিং", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "ডাটাবেস", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "ক্লাউড ও ডেভঅপস", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "টুলস ও প্ল্যাটফর্ম", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "কনসেপ্ট", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "মাস্টার অফ কম্পিউটার অ্যাপ্লিকেশন (MCA)", //[cite: 1, 2]
                    institution: "মণিপাল ইউনিভার্সিটি জয়পুর", //[cite: 1, 2]
                    timeline: "২০২৬ - বর্তমান", //[cite: 1, 2]
                    description:
                    "বর্তমানে সফটওয়্যার ইঞ্জিনিয়ারিং, ডিস্ট্রিবিউটেড সিস্টেম, ক্লাউড কম্পিউটিং এবং আধুনিক অ্যাপ্লিকেশন ডেভেলপমেন্টের ওপর ফোকাস করে মাস্টার্স ডিগ্রি করছি।" //[cite: 1, 2]
                },
                {
                    degree: "ব্যাচেলর অফ বিজনেস অ্যাডমিনিস্ট্রেশন (BBA)", //[cite: 1, 2]
                    institution: "ভারতীয় বিদ্যা ভবন ইনস্টিটিউট অফ ম্যানেজমেন্ট সায়েন্স, কলকাতা", //[cite: 1, 2]
                    timeline: "২০২১ - ২০২৪", //[cite: 1, 2]
                    description:
                    "৮.১৩/১০ সিজিপিএ নিয়ে স্নাতক হয়েছি। শক্তিশালী বিশ্লেষণাত্মক, সমস্যা-সমাধান এবং ব্যবসা পরিচালনার দক্ষতা অর্জন করেছি, যা বাস্তব-জগতের ব্যবসায়িক প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ সফটওয়্যার ডিজাইন করতে সাহায্য করে।" //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "গেম ডেভেলপমেন্ট", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "আমি ছোট প্রোটোটাইপ তৈরি করে এবং গেমপ্লে মেকানিক্স, লেভেল ডিজাইন এবং ইন্টারেক্টিভ সিস্টেমগুলি অধ্যয়ন করে ইউনিটি, সি# এবং গেম ডিজাইন শিখতে পছন্দ করি।" //[cite: 1, 2]
                },
                {
                    title: "সঙ্গীত ও গান", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "গান গাওয়া আমার অন্যতম প্রিয় সৃজনশীল শখ। এটি আমাকে শিথিল হতে, ফোকাস বাড়াতে এবং সফটওয়্যার ডেভেলপমেন্টের পাশাপাশি একটি সুস্থ ভারসাম্য বজায় রাখতে সাহায্য করে।" //[cite: 1, 2]
                },
                {
                    title: "রান্না ও সৃজনশীলতা", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "রান্না করা ধৈর্য, বিস্তারিত মনোযোগ এবং অবিচ্ছিন্ন পরীক্ষা-নিরীক্ষা শেখায়—যে গুণাবলী আমি সফটওয়্যার ডিজাইন এবং নির্মাণের সময়ও প্রয়োগ করি।" //[cite: 1, 2]
                },
                {
                    title: "ভাষা ও সংস্কৃতি শেখা", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "আমি বর্তমানে জাপানি ভাষা শিখছি এবং ভ্রমণ, বই এবং অনলাইন সম্প্রদায়ের মাধ্যমে বিভিন্ন সংস্কৃতি, প্রযুক্তি এবং ধারণা অন্বেষণ করতে উপভোগ করি।" //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "ইংরেজি", proficiency: "প্রফেশনাল ওয়ার্কিং প্রফিসিয়েন্সি" }, //[cite: 1, 2]
                { language: "হিন্দি", proficiency: "নেটিভ / দ্বিভাষিক দক্ষতা" }, //[cite: 1, 2]
                { language: "বাংলা", proficiency: "নেটিভ / দ্বিভাষিক দক্ষতা" }, //[cite: 1, 2]
                { language: "জাপানি", proficiency: "শিক্ষানবিশ (JLPT N5)" } //[cite: 1, 2]
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
        cta: "যাচাই করুন", //[cite: 1, 2]
        carouselCta: {
            next: "পরবর্তী", //[cite: 1, 2]
            prev: "পূর্ববর্তী" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "কোডের অন্তরালে", //[cite: 1, 2]
        heading: "আমার সম্পর্কে", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    আমি একজন ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ার, যিনি <strong className="font-medium text-[var(--foreground)]">স্কেলেবল এপিআই, ক্লাউড-নেটিভ অ্যাপ্লিকেশন এবং আধুনিক ব্যাকএন্ড সিস্টেম</strong> তৈরিতে বিশেষজ্ঞ। বর্তমানে <strong className="font-medium text-[var(--foreground)]">মণিপাল ইউনিভার্সিটি জয়পুরে</strong> <span className="text-[var(--accent-cyan)]">মাস্টার অফ কম্পিউটার অ্যাপ্লিকেশন (MCA)</span> পড়ছি, আমি <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, এবং <span className="text-[var(--accent-cyan)]">আধুনিক ওয়েব প্রযুক্তি</span> ব্যবহার করে <strong className="font-medium text-[var(--foreground)]">নির্ভরযোগ্য সফটওয়্যার</strong> তৈরি করতে পছন্দ করি।
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    আমি এমন <strong className="font-medium text-[var(--foreground)]">ব্যাকএন্ড সিস্টেম ডিজাইন</strong> করতে পছন্দ করি যা <span className="text-[var(--accent-cyan)]">রক্ষণাবেক্ষণযোগ্য</span>, <span className="text-[var(--accent-cyan)]">সুরক্ষিত</span>, এবং <span className="text-[var(--accent-cyan)]">স্কেলেবল</span>। রেস্ট এপিআই ডেভেলপ করা, থার্ড-পার্টি সার্ভিস ইন্টিগ্রেট করা বা ক্লাউডে অ্যাপ্লিকেশন ডেপ্লয় করা—সবক্ষেত্রেই আমি বাস্তব-জগতের সমস্যা সমাধানে <span className="text-[var(--accent-cyan)]">পরিচ্ছন্ন এবং নির্ভরযোগ্য কোড</span> লেখায় ফোকাস করি।
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ের বাইরে, আমি ক্রিয়েটিভ সাইড প্রজেক্ট হিসেবে <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, এবং <span className="text-[var(--accent-cyan)]">গেম ডেভেলপমেন্ট</span> অন্বেষণ করতে পছন্দ করি। বিভিন্ন প্রযুক্তি সম্পর্কে শেখা আমাকে প্রযুক্তিগত গভীরতা এবং সৃজনশীল সমস্যা-সমাধানের দক্ষতা উভয়ের সাহায্যে সফটওয়্যার ইঞ্জিনিয়ারিংয়ে কাজ করতে সহায়তা করে।
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "শিক্ষাগত যোগ্যতা", //[cite: 1, 2]
                heading: "মাস্টার অফ কম্পিউটার অ্যাপ্লিকেশন (MCA)", //[cite: 1, 2]
                para: "মণিপাল ইউনিভার্সিটি জয়পুর (চলমান)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "অবস্থান", //[cite: 1, 2]
                heading: "কলকাতা, ভারত", //[cite: 1, 2]
                para: "রিমোট, হাইব্রিড এবং রিলোকেশন সুযোগের জন্য উন্মুক্ত" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "বর্তমান ফোকাস", //[cite: 1, 2]
                heading: "ব্যাকএন্ড ইঞ্জিনিয়ারিং", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "শোকেস", //[cite: 1, 2]
        subtitle: "কাজ ও আবেগ", //[cite: 1, 2]
        para: "সফটওয়্যার ইঞ্জিনিয়ারিং • এআই • সঙ্গীত • সৃজনশীলতা • সার্টিফিকেট", //[cite: 1, 2]
        filters: [
            "ফিচারড", //[cite: 1, 2]
            "সফটওয়্যার", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "সৃজনশীল", //[cite: 1, 2]
            "সব", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Next.js ব্যবহার করে একটি আধুনিক সিঙ্গেল-পেজ কর্পোরেট ওয়েবসাইট তৈরি এবং ডেপ্লয় করেছি। রেসপন্সিভনেস, পারফরম্যান্স এবং ডেপ্লয়মেন্ট ওয়ার্কফ্লো অপ্টিমাইজ করার সাথে সাথে Docker, Nginx, এবং প্রোডাকশন হোস্টিং কনফিগার করেছি।", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "ওয়েবসাইট ভিজিট করুন", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "প্রোডাক্ট ডিসকভারি এবং গ্রাহক ইন্টারঅ্যাকশন সাপোর্ট করার জন্য একটি রেসপন্সিভ শপিফাই-ইন্টিগ্রেটেড এআই চ্যাট উইজেট তৈরি ও মেইনটেইন করেছি। ব্যাকএন্ড এপিআই তৈরি, শপিফাই গ্রাফকিউএল (Shopify GraphQL) ইন্টিগ্রেট এবং ব্যবহারকারীর ব্যস্ততা এবং ব্যবসায়িক মেট্রিক্স নিরীক্ষণ করতে Looker Studio ড্যাশবোর্ড তৈরি করেছি।", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "নিরাপদ অ্যাডমিনিস্ট্রেটিভ ড্যাশবোর্ড, ডাইনামিক কনটেন্ট ম্যানেজমেন্ট, CRUD অপারেশন এবং Apache2 ব্যবহার করে উবুন্টুতে প্রোডাকশন ডেপ্লয়মেন্ট সহ একটি ফুল-স্ট্যাক কনটেন্ট ম্যানেজমেন্ট সিস্টেম (CMS) তৈরি করেছি।", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "ওয়েবসাইট ভিজিট করুন", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "একটি আধুনিক, টাইপ-সেফ ফ্রন্টএন্ড আর্কিটেকচারের মাধ্যমে ভেরিফাইড ফিনান্সিয়াল অ্যাডভাইজার রমন খান্ডেলওয়ালের সাথে ব্যবহারকারীদের সংযুক্ত করার জন্য একটি রেসপন্সিভ ফিনান্সিয়াল টেকনোলজি প্ল্যাটফর্ম তৈরি করেছি।", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "ওয়েবসাইট ভিজিট করুন" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "একটি বড় দুর্গা পূজা সাংস্কৃতিক উদ্যোগের জন্য তিন দিনের মধ্যে একটি এআই-চালিত ভার্চুয়াল সেলফি প্ল্যাটফর্ম তৈরি করেছি। ফায়ারবেস হোস্টিংয়ের সাথে অ্যাপ্লিকেশন ডেপ্লয় করার আগে সম্পূর্ণ ফ্রন্টএন্ড, ফায়ারবেস ব্যাকএন্ড, ফায়ারস্টোর ডাটাবেস, অ্যাডমিনিস্ট্রেটিভ ড্যাশবোর্ড, ডেজগো এপিআই (Dezgo APIs) ব্যবহার করে এআই-চালিত ব্যাকগ্রাউন্ড রিমুভাল, ইমেজ এনহান্সমেন্ট কন্ট্রোল এবং গুগল ট্যাগ ম্যানেজার (GTM) ইন্টিগ্রেশন তৈরি করেছি।", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "ওয়েবসাইট ভিজিট করুন", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "কাস্টম জ্যাঙ্গো অ্যাডমিনিস্ট্রেশন, মেন্টর ম্যানেজমেন্ট, অ্যালামনাই ম্যানেজমেন্ট, কন্ট্রিবিউশন ট্র্যাকিং এবং ব্লগ অ্যাপ্রুভাল ওয়ার্কফ্লো সহ অফিসিয়াল এন্টারপ্রেনিউরশিপ সেল (E-Cell) প্ল্যাটফর্ম তৈরি করেছি। প্ল্যাটফর্মটি আইআইটি বোম্বে ই-সেল প্রতিযোগিতার সময় প্রতিষ্ঠানটিকে প্রতিনিধিত্ব করেছিল এবং এটি তিন দিনের মধ্যে তৈরি করা হয়েছিল।", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "অ্যাডমিনিস্ট্রেটর, জিমের মালিক, ট্রেনার, স্টাফ এবং গ্রাহকদের সাপোর্ট করার জন্য একটি মাল্টি-ভেন্ডর ফিটনেস এবং ই-কমার্স স্যাস (SaaS) প্ল্যাটফর্ম ডিজাইন ও ডেভেলপ করেছি। রোল-বেসড অ্যাক্সেস কন্ট্রোল, ফোনপে (PhonePe) পেমেন্ট ইন্টিগ্রেশন, ফ্লাটার অ্যাপ্লিকেশনের জন্য রেস্ট এপিআই, কমিউনিটি ফিচার, কিউআর (QR) অ্যাটেনডেন্স, বুকিং ম্যানেজমেন্ট এবং অ্যানালিটিক্যাল ড্যাশবোর্ড প্রয়োগ করেছি।", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "মেনু আইটেম, ক্যাটাগরি, হিরো সেকশন কনটেন্ট, প্রমোশনাল ব্যানার এবং ওয়েবসাইটের ছবি পরিচালনার জন্য একটি অ্যাডমিনিস্ট্রেটিভ ড্যাশবোর্ড সহ একটি কাস্টম ক্যাফে ওয়েবসাইট তৈরি করেছি। একটি স্বজ্ঞাত কনটেন্ট ম্যানেজমেন্ট অভিজ্ঞতা তৈরি করেছি যা কর্মীদের একটি রেসপন্সিভ এবং দৃষ্টিনন্দন গ্রাহক অভিজ্ঞতা বজায় রেখে ওয়েবসাইটের কনটেন্ট দক্ষতার সাথে আপডেট করার সুবিধা দেয়।" //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "প্রোডাক্ট প্রেজেন্টেশন, ব্র্যান্ড স্টোরিটেলিং এবং লিড জেনারেশনে ফোকাস করা একটি ফিটনেস ইকুইপমেন্ট ব্র্যান্ডের জন্য একটি রেসপন্সিভ মার্কেটিং ওয়েবসাইট তৈরি করেছি। ব্যবহারকারীর ব্যস্ততা এবং ব্র্যান্ডের দৃশ্যমানতা বাড়াতে আকর্ষণীয় ল্যান্ডিং পেজ সেকশন, প্রোডাক্ট শোকেস, প্রমোশনাল কনটেন্ট এবং মোবাইল-বান্ধব লেআউট তৈরি করেছি।" //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "সফটওয়্যার", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "একটি কাস্টম রিয়েল এস্টেট ওয়েবসাইট বিল্ডার প্ল্যাটফর্মে কাজ করেছি যা ব্যবসাগুলোকে কনফিগারযোগ্য টেমপ্লেট থেকে ওয়েবসাইট তৈরি এবং পরিচালনা করার সুবিধা দেয়। জ্যাঙ্গো (Django), বুটস্ট্র্যাপ ৫ (Bootstrap 5) এবং অ্যাজাক্স (AJAX) ব্যবহার করে ডাইনামিক সেকশন ম্যানেজমেন্ট, কনটেন্ট এডিটিং, ইমেজ আপডেট এবং টেমপ্লেট কাস্টমাইজেশন ফিচার বাস্তবায়ন করেছি। ActivCRM থেকে সম্পত্তি এবং ব্যবসার ডেটা ইন্টিগ্রেট করেছি, যা সিআরএম (CRM) এবং ওয়েবসাইট প্ল্যাটফর্মের মধ্যে স্বয়ংক্রিয় কনটেন্ট সিঙ্ক্রোনাইজেশন সক্ষম করে।", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "সৃজনশীল", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "একটি ইন্ডাস্ট্রিয়াল ম্যানুফ্যাকচারিং কোম্পানির জন্য একটি মার্কেটিং ক্যাটালগ তৈরি করেছি, প্রযুক্তিগত পণ্যের নির্দিষ্টকরণগুলিকে দৃশ্যত আকর্ষক এবং সহজে নেভিগেট করা যায় এমন লেআউটে রূপান্তরিত করেছি। ধারাবাহিকতা, পঠনযোগ্যতা এবং পেশাদার প্রেজেন্টেশন মান নিশ্চিত করার সময় ক্যানভা (Canva) ব্যবহার করে প্রোডাক্ট শোকেস, ব্র্যান্ডিং সম্পদ এবং প্রমোশনাল পেজগুলি ডিজাইন করেছি।" //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "সৃজনশীল", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "একটি ইন্ডাস্ট্রিয়াল ম্যানুফ্যাকচারিং কোম্পানির জন্য ভিজ্যুয়াল আইডেন্টিটি এবং মার্কেটিং ক্যাটালগ তৈরি করেছি। কোম্পানির লোগো, ব্র্যান্ডিং সম্পদ এবং প্রোডাক্ট ক্যাটালগ লেআউটগুলি ডিজাইন করেছি, যা একটি সমন্বিত ব্র্যান্ড অভিজ্ঞতা তৈরি করে যা সুস্পষ্ট এবং দৃশ্যমানভাবে আকর্ষক ডিজাইনের মাধ্যমে প্রযুক্তিগত পণ্যের তথ্য কার্যকরভাবে উপস্থাপন করে।" //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "সৃজনশীল", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "একটি ইঞ্জিনিয়ারিং কনসাল্টিং ফার্মের জন্য একটি কর্পোরেট মার্কেটিং ক্যাটালগ তৈরি করেছি, যেখানে সার্ভিস পোর্টফোলিও, প্রযুক্তিগত দক্ষতা এবং প্রজেক্টের অভিজ্ঞতা তুলে ধরা হয়েছে। দৃশ্যত কাঠামোগত লেআউট, ব্র্যান্ডেড কনটেন্ট এবং প্রেজেন্টেশন ম্যাটেরিয়ালস ডিজাইন করেছি যা জটিল ইঞ্জিনিয়ারিং ধারণাগুলোকে অ্যাক্সেসযোগ্য এবং পেশাদার মার্কেটিং কোল্যাটেরালে রূপান্তরিত করেছে।" //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "যোগাযোগ", //[cite: 1, 2]
        heading: "যাত্রা অব্যাহত", //[cite: 1, 2]

        intro:
            "আপনি যদি এমন একজন ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ার খুঁজছেন যিনি স্কেলেবল সিস্টেম, ক্লাউড-নেটিভ অ্যাপ্লিকেশন এবং নির্ভরযোগ্য ডিজিটাল প্রোডাক্ট তৈরি করতে পছন্দ করেন, তবে আমি যুক্ত হতে চাই। আমি সর্বদা নতুন সুযোগ, চ্যালেঞ্জিং প্রজেক্ট এবং উদ্ভাবনী ধারণা নিয়ে আলোচনা করতে আগ্রহী।", //[cite: 1, 2]

        availability:
            "বর্তমানে ফুল-টাইম পজিশন, রিমোট সুযোগ, ফ্রিল্যান্স প্রজেক্ট এবং আন্তর্জাতিক রিলোকেশনের জন্য উপলব্ধ।", //[cite: 1, 2]

        cta: {
            email: "আমাকে ইমেল করুন", //[cite: 1, 2]
            linkedin: "লিঙ্কডইনে যুক্ত হোন", //[cite: 1, 2]
        },

        quote: "প্রতিটি দুর্দান্ত প্রজেক্ট একটি কথোপকথন দিয়ে শুরু হয়।", //[cite: 1, 2]
    }
};