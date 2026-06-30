import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/th/hero_bg.jpg",
        contact: "/images/bg/th/contact_bg.png"
    }, 
    header: {
        nav: [
            { label: "หน้าแรก",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "ทักษะ",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "เกี่ยวกับฉัน",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "โปรเจกต์", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "ติดต่อ",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "ลิงก์อิน", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "ยุบหน้าต่าง", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "วิศวกรซอฟต์แวร์แบ็คเอนด์", //[cite: 1, 2]
        availability: "พร้อมรับงานทั่วโลก", //[cite: 1, 2]
        since: "เขียนโค้ดตั้งแต่ปี 2021", //[cite: 1, 2]
        experience: "ประสบการณ์ในอุตสาหกรรม 2+ ปี" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                สร้าง{" "}
                <span className="text-[var(--accent-cyan)]">
                    ระบบแบ็คเอนด์ที่รองรับการขยายตัว
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    สำรวจ
                </span>{" "}
                AI และการพัฒนาเกม
                </span>
            </>
        ), //[cite: 1, 2]
        para: "วิศวกรซอฟต์แวร์แบ็คเอนด์ที่เชี่ยวชาญด้าน API ที่รองรับการขยายตัว, แอปพลิเคชันแบบ Cloud-native, และสถาปัตยกรรมแบ็คเอนด์สมัยใหม่โดยใช้ Python, Django และ FastAPI หลงใหลใน AI, ระบบแบบกระจายศูนย์ (Distributed Systems) และการสร้างซอฟต์แวร์ที่สามารถขยายขนาดได้", //[cite: 1, 2]
        cta1: "ดูผลงานของฉัน", //[cite: 1, 2]
        cta2: "ดาวน์โหลดเรซูเม่", //[cite: 1, 2]
        status: {
            head: "สถานะการรับสมัครงาน", //[cite: 1, 2]
            stat: () => (
                <>
                    ประจำอยู่ที่ <span className="text-[var(--accent-blue)]">โกลกาตา ประเทศอินเดีย</span> เปิดรับโอกาสการทำงานแบบเต็มเวลา, ทำงานระยะไกล (Remote), ไฮบริด, และการย้ายถิ่นฐาน
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_th.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "ทักษะทางเทคนิค", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "การศึกษา", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "ประกาศนียบัตร", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "งานอดิเรก", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "ภาษา", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "ภาษาโปรแกรม", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "วิศวกรรมแบ็คเอนด์", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "วิศวกรรมฟรอนต์เอนด์", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "ฐานข้อมูล", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "คลาวด์และ DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "เครื่องมือและแพลตฟอร์ม", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "แนวคิดและการออกแบบซอฟต์แวร์", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "ปริญญาโทสาขาคอมพิวเตอร์แอปพลิเคชัน (MCA)", //[cite: 1, 2]
                    institution: "มหาวิทยาลัย Manipal วิทยาเขตชัยปุระ (Manipal University Jaipur)", //[cite: 1, 2]
                    timeline: "2026 - ปัจจุบัน", //[cite: 1, 2]
                    description:
                    "ปัจจุบันกำลังศึกษาต่อในระดับปริญญาโท โดยมุ่งเน้นไปที่วิศวกรรมซอฟต์แวร์, ระบบแบบกระจายศูนย์, คลาวด์คอมพิวติ้ง, และการพัฒนาแอปพลิเคชันสมัยใหม่" //[cite: 1, 2]
                },
                {
                    degree: "ปริญญาตรีบริหารธุรกิจบัณฑิต (BBA)", //[cite: 1, 2]
                    institution: "สถาบันวิทยาการจัดการ Bharatiya Vidya Bhavan เมืองโกลกาตา", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "สำเร็จการศึกษาด้วยเกรดเฉลี่ย 8.13/10 พัฒนาทักษะการวิเคราะห์ การแก้ปัญหา และการจัดการธุรกิจที่แข็งแกร่ง ซึ่งให้มุมมองที่มีคุณค่าในการออกแบบซอฟต์แวร์ที่สอดคล้องกับความต้องการทางธุรกิจในโลกแห่งความเป็นจริง" //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "การพัฒนาเกม", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "ฉันสนุกกับการเรียนรู้ Unity, C# และการออกแบบเกมโดยการสร้างต้นแบบเล็กๆ และศึกษากลไกการเล่นเกม การออกแบบด่าน และระบบโต้ตอบ" //[cite: 1, 2]
                },
                {
                    title: "ดนตรีและการร้องเพลง", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "การร้องเพลงคือหนึ่งในงานอดิเรกเชิงสร้างสรรค์ที่ฉันชื่นชอบ ช่วยให้ฉันผ่อนคลาย เพิ่มสมาธิ และรักษาสมดุลที่ดีควบคู่ไปกับการพัฒนาซอฟต์แวร์" //[cite: 1, 2]
                },
                {
                    title: "การทำอาหารและความคิดสร้างสรรค์", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "การทำอาหารสอนให้รู้จักความอดทน การใส่ใจในรายละเอียด และการทดลองอย่างต่อเนื่อง ซึ่งเป็นคุณสมบัติที่ฉันนำมาใช้ในการออกแบบและสร้างซอฟต์แวร์ด้วย" //[cite: 1, 2]
                },
                {
                    title: "การเรียนรู้ภาษาและวัฒนธรรม", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "ปัจจุบันฉันกำลังเรียนภาษาญี่ปุ่นและสนุกกับการสำรวจวัฒนธรรม เทคโนโลยี และแนวคิดที่แตกต่างกันผ่านการเดินทาง หนังสือ และชุมชนออนไลน์" //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "ภาษาอังกฤษ", proficiency: "ระดับความเชี่ยวชาญในการทำงาน" }, //[cite: 1, 2]
                { language: "ภาษาฮินดี", proficiency: "ระดับเจ้าของภาษา / สองภาษา" }, //[cite: 1, 2]
                { language: "ภาษาเบงกาลี", proficiency: "ระดับเจ้าของภาษา / สองภาษา" }, //[cite: 1, 2]
                { language: "ภาษาญี่ปุ่น", proficiency: "ระดับเริ่มต้น (JLPT N5)" } //[cite: 1, 2]
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
        cta: "ตรวจสอบ", //[cite: 1, 2]
        carouselCta: {
            next: "ถัดไป", //[cite: 1, 2]
            prev: "ก่อนหน้า" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "เบื้องหลังโค้ด", //[cite: 1, 2]
        heading: "เกี่ยวกับฉัน", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    ฉันเป็นวิศวกรซอฟต์แวร์แบ็คเอนด์ที่เชี่ยวชาญด้าน <strong className="font-medium text-[var(--foreground)]">API ที่รองรับการขยายตัว แอปพลิเคชันแบบ Cloud-native และระบบแบ็คเอนด์สมัยใหม่</strong> ปัจจุบันกำลังศึกษา <span className="text-[var(--accent-cyan)]">ปริญญาโทสาขาคอมพิวเตอร์แอปพลิเคชัน (MCA)</span> ที่ <strong className="font-medium text-[var(--foreground)]">มหาวิทยาลัย Manipal วิทยาเขตชัยปุระ</strong> ฉันสนุกกับการสร้าง <strong className="font-medium text-[var(--foreground)]">ซอฟต์แวร์ที่เชื่อถือได้</strong> โดยใช้ <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, และ <span className="text-[var(--accent-cyan)]">เทคโนโลยีเว็บสมัยใหม่</span>
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    ฉันสนุกกับการออกแบบ <strong className="font-medium text-[var(--foreground)]">ระบบแบ็คเอนด์</strong> ที่สามารถ <span className="text-[var(--accent-cyan)]">ดูแลรักษาได้</span>, <span className="text-[var(--accent-cyan)]">ปลอดภัย</span>, และ <span className="text-[var(--accent-cyan)]">ขยายตัวได้</span> ไม่ว่าจะเป็นการพัฒนา REST API การเชื่อมต่อกับบริการภายนอก หรือการนำแอปพลิเคชันขึ้นคลาวด์ ฉันเน้นที่การเขียน <span className="text-[var(--accent-cyan)]">โค้ดที่สะอาดและเชื่อถือได้</span> ซึ่งสามารถแก้ปัญหาในโลกความเป็นจริงได้
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    นอกเหนือจากวิศวกรรมแบ็คเอนด์ ฉันยังสนุกกับการสำรวจ <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, และ <span className="text-[var(--accent-cyan)]">การพัฒนาเกม</span> เป็นโปรเจกต์เสริมความคิดสร้างสรรค์ การเรียนรู้เทคโนโลยีที่หลากหลายช่วยให้ฉันเข้าใจวิศวกรรมซอฟต์แวร์ทั้งในเชิงลึกด้านเทคนิคและการแก้ปัญหาอย่างสร้างสรรค์
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "การศึกษา", //[cite: 1, 2]
                heading: "ปริญญาโทสาขาคอมพิวเตอร์แอปพลิเคชัน (MCA)", //[cite: 1, 2]
                para: "มหาวิทยาลัย Manipal วิทยาเขตชัยปุระ (กำลังศึกษา)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "สถานที่ตั้ง", //[cite: 1, 2]
                heading: "โกลกาตา, อินเดีย", //[cite: 1, 2]
                para: "เปิดรับโอกาสการทำงานระยะไกล, ไฮบริด, และการย้ายถิ่นฐาน" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "ความสนใจปัจจุบัน", //[cite: 1, 2]
                heading: "วิศวกรรมแบ็คเอนด์", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "ผลงาน", //[cite: 1, 2]
        subtitle: "งานและความหลงใหล", //[cite: 1, 2]
        para: "วิศวกรรมซอฟต์แวร์ • AI • ดนตรี • ความคิดสร้างสรรค์ • ประกาศนียบัตร", //[cite: 1, 2]
        filters: [
            "แนะนำ", //[cite: 1, 2]
            "ซอฟต์แวร์", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "สร้างสรรค์", //[cite: 1, 2]
            "ทั้งหมด", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "พัฒนาและปรับใช้เว็บไซต์องค์กรแบบหน้าเดียว (Single-page) สมัยใหม่โดยใช้ Next.js กำหนดค่า Docker, Nginx, และโฮสติ้งสำหรับการใช้งานจริง พร้อมกับเพิ่มประสิทธิภาพการตอบสนอง ประสิทธิภาพการทำงาน และเวิร์กโฟลว์การปรับใช้", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "เข้าชมเว็บไซต์", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "พัฒนาและดูแลวิดเจ็ตแชท AI แบบตอบสนองที่ผสานรวมกับ Shopify ซึ่งรองรับการค้นหาสินค้าและการโต้ตอบกับลูกค้า สร้าง API แบ็คเอนด์ ผสานการทำงานกับ Shopify GraphQL และสร้างแดชบอร์ด Looker Studio เพื่อติดตามการมีส่วนร่วมของผู้ใช้และตัวชี้วัดทางธุรกิจ", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "พัฒนาระบบจัดการเนื้อหา (CMS) แบบฟูลสแต็กที่มีแดชบอร์ดการจัดการที่ปลอดภัย การจัดการเนื้อหาแบบไดนามิก การใช้งาน CRUD และการนำไปใช้งานจริงบน Ubuntu โดยใช้ Apache2", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "เข้าชมเว็บไซต์", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "พัฒนาแพลตฟอร์มเทคโนโลยีทางการเงินแบบตอบสนองที่เชื่อมโยงผู้ใช้กับที่ปรึกษาทางการเงินที่ผ่านการตรวจสอบแล้ว Raman Khandelwal ผ่านสถาปัตยกรรมฟรอนต์เอนด์สมัยใหม่ที่มีความปลอดภัยด้านชนิดข้อมูล (Type-safe)", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "เข้าชมเว็บไซต์" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "สร้างแพลตฟอร์มเซลฟี่เสมือนจริงที่ขับเคลื่อนด้วย AI ภายในสามวันสำหรับโครงการริเริ่มทางวัฒนธรรม Durga Puja ขนาดใหญ่ พัฒนาฟรอนต์เอนด์ทั้งหมด, แบ็คเอนด์ Firebase, ฐานข้อมูล Firestore, แดชบอร์ดผู้ดูแลระบบ, การลบพื้นหลังด้วย AI โดยใช้ Dezgo API, การควบคุมการปรับแต่งภาพ, และการผสานรวม Google Tag Manager ก่อนนำแอปพลิเคชันขึ้นบน Firebase Hosting", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "เข้าชมเว็บไซต์", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "พัฒนาแพลตฟอร์มสำหรับ Entrepreneurship Cell อย่างเป็นทางการพร้อมระบบจัดการ Django แบบกำหนดเอง การจัดการที่ปรึกษา การจัดการศิษย์เก่า การติดตามการมีส่วนร่วม และเวิร์กโฟลว์การอนุมัติบล็อก แพลตฟอร์มนี้เป็นตัวแทนของสถาบันในระหว่างการแข่งขัน IIT Bombay E-Cell และถูกสร้างขึ้นภายในสามวัน", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "ออกแบบและพัฒนาแพลตฟอร์ม SaaS สำหรับฟิตเนสและอีคอมเมิร์ซแบบหลายร้านค้า (Multi-vendor) ซึ่งรองรับผู้ดูแลระบบ เจ้าของยิม เทรนเนอร์ พนักงาน และลูกค้า ใช้การควบคุมการเข้าถึงตามบทบาท (RBAC) การเชื่อมต่อการชำระเงินผ่าน PhonePe, REST API สำหรับแอปพลิเคชัน Flutter, ฟีเจอร์ชุมชน, การเช็คชื่อด้วยคิวอาร์โค้ด, การจัดการการจอง และแดชบอร์ดการวิเคราะห์", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "สร้างเว็บไซต์คาเฟ่แบบกำหนดเองพร้อมแดชบอร์ดการจัดการสำหรับการจัดการรายการเมนู หมวดหมู่ เนื้อหาในส่วนแสดงความโดดเด่น (Hero section) แบนเนอร์ส่งเสริมการขาย และรูปภาพของเว็บไซต์ สร้างประสบการณ์การจัดการเนื้อหาที่ใช้งานง่ายซึ่งช่วยให้พนักงานสามารถอัปเดตเนื้อหาเว็บไซต์ได้อย่างมีประสิทธิภาพ พร้อมรักษาประสบการณ์ที่ตอบสนองและสวยงามสำหรับลูกค้า" //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "สร้างเว็บไซต์การตลาดแบบตอบสนองสำหรับแบรนด์อุปกรณ์ออกกำลังกาย โดยเน้นที่การนำเสนอผลิตภัณฑ์ การเล่าเรื่องราวของแบรนด์ และการสร้างยอดขาย พัฒนาส่วนหน้า Landing Page ที่น่าสนใจ การแสดงผลิตภัณฑ์ เนื้อหาส่งเสริมการขาย และเลย์เอาต์ที่เหมาะกับอุปกรณ์พกพา เพื่อเพิ่มการมีส่วนร่วมของผู้ใช้และการมองเห็นแบรนด์" //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "ซอฟต์แวร์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "ทำงานในแพลตฟอร์มสร้างเว็บไซต์อสังหาริมทรัพย์แบบกำหนดเองที่อนุญาตให้ธุรกิจต่างๆ สร้างและจัดการเว็บไซต์จากเทมเพลตที่กำหนดค่าได้ ใช้ระบบจัดการส่วนแบบไดนามิก การแก้ไขเนื้อหา การอัปเดตรูปภาพ และฟีเจอร์การปรับแต่งเทมเพลตโดยใช้ Django, Bootstrap 5 และ AJAX รวมข้อมูลอสังหาริมทรัพย์และข้อมูลธุรกิจจาก ActivCRM ทำให้สามารถซิงโครไนซ์เนื้อหาระหว่างระบบ CRM และแพลตฟอร์มเว็บไซต์ได้อัตโนมัติ", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "สร้างสรรค์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "จัดทำแค็ตตาล็อกการตลาดสำหรับบริษัทผู้ผลิตทางอุตสาหกรรม โดยแปลงข้อกำหนดผลิตภัณฑ์ทางเทคนิคให้เป็นเลย์เอาต์ที่ดึงดูดสายตาและนำทางได้ง่าย ออกแบบส่วนแสดงผลิตภัณฑ์ แหล่งข้อมูลสำหรับการสร้างแบรนด์ และหน้าโปรโมชั่นโดยใช้ Canva ในขณะที่ยังคงรักษาความสอดคล้อง ความสามารถในการอ่าน และมาตรฐานการนำเสนออย่างมืออาชีพ" //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "สร้างสรรค์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "พัฒนาเอกลักษณ์ทางภาพและแค็ตตาล็อกการตลาดสำหรับบริษัทผู้ผลิตทางอุตสาหกรรม ออกแบบโลโก้บริษัท ทรัพย์สินสำหรับสร้างแบรนด์ และเลย์เอาต์แค็ตตาล็อกผลิตภัณฑ์ เพื่อสร้างประสบการณ์แบรนด์ที่เหนียวแน่นซึ่งนำเสนอข้อมูลผลิตภัณฑ์ทางเทคนิคได้อย่างมีประสิทธิภาพผ่านการออกแบบที่ชัดเจนและดึงดูดสายตา" //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "สร้างสรรค์", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "พัฒนาแค็ตตาล็อกการตลาดระดับองค์กรสำหรับบริษัทที่ปรึกษาด้านวิศวกรรม โดยเน้นที่ผลงานการให้บริการ ความสามารถทางเทคนิค และความเชี่ยวชาญในโปรเจกต์ ออกแบบเลย์เอาต์ที่มีโครงสร้างสวยงาม เนื้อหาที่มีแบรนด์ และเอกสารประกอบการนำเสนอที่แปลงแนวคิดทางวิศวกรรมที่ซับซ้อนให้เป็นสื่อการตลาดที่เข้าถึงได้และมีความเป็นมืออาชีพ" //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "ติดต่อ", //[cite: 1, 2]
        heading: "การเดินทางดำเนินต่อไป", //[cite: 1, 2]

        intro:
            "หากคุณกำลังมองหาวิศวกรซอฟต์แวร์แบ็คเอนด์ที่สนุกกับการสร้างระบบที่รองรับการขยายตัว แอปพลิเคชันแบบ Cloud-native และผลิตภัณฑ์ดิจิทัลที่เชื่อถือได้ ฉันยินดีที่จะเชื่อมต่อด้วย ฉันสนใจที่จะพูดคุยเกี่ยวกับโอกาสใหม่ๆ โปรเจกต์ที่ท้าทาย และแนวคิดสร้างสรรค์อยู่เสมอ", //[cite: 1, 2]

        availability:
            "ปัจจุบันเปิดรับตำแหน่งงานประจำ, โอกาสในการทำงานระยะไกล (Remote), โปรเจกต์ฟรีแลนซ์, และการย้ายที่อยู่ไปต่างประเทศ", //[cite: 1, 2]

        cta: {
            email: "ส่งอีเมลหาฉัน", //[cite: 1, 2]
            linkedin: "เชื่อมต่อบน LinkedIn", //[cite: 1, 2]
        },

        quote: "ทุกโปรเจกต์ที่ยิ่งใหญ่เริ่มต้นด้วยบทสนทนา", //[cite: 1, 2]
    }
};