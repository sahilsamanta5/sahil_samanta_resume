import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/ms/hero_bg.jpg",
        contact: ""
    },
    header: {
        nav: [
            { label: "LAMAN UTAMA",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "KEMAHIRAN",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "TENTANG SAYA",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEK", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "HUBUNGI",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "TUTUP", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "JURUTERA PERISIAN BACKEND", //[cite: 1, 2]
        availability: "TERSEDIA DI SELURUH DUNIA", //[cite: 1, 2]
        since: "MENGEKOD SEJAK 2021", //[cite: 1, 2]
        experience: "PENGALAMAN INDUSTRI 2+ TAHUN" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Membina{" "}
                <span className="text-[var(--accent-cyan)]">
                    sistem backend yang boleh diskala
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Meneroka
                </span>{" "}
                AI & pembangunan permainan
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Jurutera Perisian Backend yang pakar dalam API yang boleh diskala, aplikasi natif awan, dan seni bina backend moden menggunakan Python, Django, dan FastAPI. Bersemangat tentang AI, sistem teragih, dan membina perisian yang boleh diskala.", //[cite: 1, 2]
        cta1: "Teroka Hasil Kerja Saya", //[cite: 1, 2]
        cta2: "Muat Turun Resume", //[cite: 1, 2]
        status: {
            head: "Status Pengambilan", //[cite: 1, 2]
            stat: () => (
                <>
                    Berpangkalan di <span className="text-[var(--accent-blue)]">Kolkata, India</span>. Terbuka untuk peluang sepenuh masa, jarak jauh, hibrid, dan penempatan semula.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_ms.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Kemahiran Teknikal", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Pendidikan", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Pensijilan", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Hobi", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Bahasa", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Bahasa Pengaturcaraan", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Kejuruteraan Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Kejuruteraan Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Pangkalan Data", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Awan & DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Alat & Platform", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Konsep", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Sarjana Aplikasi Komputer (MCA)", //[cite: 1, 2]
                    institution: "Universiti Manipal Jaipur", //[cite: 1, 2]
                    timeline: "2026 - Kini", //[cite: 1, 2]
                    description:
                    "Kini sedang melanjutkan pelajaran di peringkat sarjana dengan tumpuan pada kejuruteraan perisian, sistem teragih, pengkomputeran awan, dan pembangunan aplikasi moden." //[cite: 1, 2]
                },
                {
                    degree: "Sarjana Muda Pentadbiran Perniagaan (BBA)", //[cite: 1, 2]
                    institution: "Institut Sains Pengurusan Bharatiya Vidya Bhavan, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Lulus dengan PNGK 8.13/10. Membangunkan kemahiran analisis, penyelesaian masalah, dan pengurusan perniagaan yang kukuh, memberikan pemahaman berharga dalam mereka bentuk perisian yang sejajar dengan keperluan perniagaan dunia sebenar." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Pembangunan Permainan", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Saya gemar mempelajari Unity, C#, dan reka bentuk permainan dengan membina prototaip kecil dan mengkaji mekanik permainan, reka bentuk tahap, dan sistem interaktif." //[cite: 1, 2]
                },
                {
                    title: "Muzik & Nyanyian", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Menyanyi adalah salah satu cara kreatif kegemaran saya. Ia membantu saya berehat, meningkatkan tumpuan, dan mengekalkan keseimbangan yang sihat di samping pembangunan perisian." //[cite: 1, 2]
                },
                {
                    title: "Memasak & Kreativiti", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Memasak mengajar kesabaran, perhatian terhadap perincian, dan eksperimen berterusan—kualiti yang saya turut gunakan semasa mereka bentuk dan membina perisian." //[cite: 1, 2]
                },
                {
                    title: "Mempelajari Bahasa & Budaya", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Saya kini sedang mempelajari bahasa Jepun dan gemar meneroka pelbagai budaya, teknologi, dan idea melalui perjalanan, buku, dan komuniti dalam talian." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Bahasa Inggeris", proficiency: "Kemahiran Bekerja Profesional" }, //[cite: 1, 2]
                { language: "Bahasa Hindi", proficiency: "Penutur Asli / Dwibahasa" }, //[cite: 1, 2]
                { language: "Bahasa Benggali", proficiency: "Penutur Asli / Dwibahasa" }, //[cite: 1, 2]
                { language: "Bahasa Jepun", proficiency: "Permulaan (JLPT N5)" } //[cite: 1, 2]
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
        cta: "Sahkan", //[cite: 1, 2]
        carouselCta: {
            next: "Seterusnya", //[cite: 1, 2]
            prev: "Sebelumnya" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Di Sebalik Kod", //[cite: 1, 2]
        heading: "Tentang Saya", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Saya ialah Jurutera Perisian Backend yang pakar dalam <strong className="font-medium text-[var(--foreground)]">API yang boleh diskala, aplikasi natif awan, dan sistem backend moden.</strong> Kini sedang melanjutkan pengajian <span className="text-[var(--accent-cyan)]">Sarjana Aplikasi Komputer (MCA)</span> di <strong className="font-medium text-[var(--foreground)]">Universiti Manipal Jaipur</strong>, saya gemar membina <strong className="font-medium text-[var(--foreground)]">perisian yang boleh dipercayai</strong> menggunakan <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span>, dan <span className="text-[var(--accent-cyan)]">teknologi web moden</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Saya gemar <strong className="font-medium text-[var(--foreground)]">mereka bentuk sistem backend</strong> yang <span className="text-[var(--accent-cyan)]">boleh diselenggara</span>, <span className="text-[var(--accent-cyan)]">selamat</span>, dan <span className="text-[var(--accent-cyan)]">boleh diskala</span>. Sama ada membangunkan REST API, menyepadukan perkhidmatan pihak ketiga, atau menggunakan aplikasi pada awan, saya memberi tumpuan kepada penulisan <span className="text-[var(--accent-cyan)]">kod yang bersih dan boleh dipercayai</span> untuk menyelesaikan masalah dunia sebenar.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Selain kejuruteraan backend, saya gemar meneroka <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span>, dan <span className="text-[var(--accent-cyan)]">pembangunan permainan</span> sebagai projek sampingan kreatif. Pembelajaran merentas teknologi berbeza membantu saya mendekati kejuruteraan perisian dengan kedalaman teknikal dan penyelesaian masalah yang kreatif.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Pendidikan", //[cite: 1, 2]
                heading: "Sarjana Aplikasi Komputer", //[cite: 1, 2]
                para: "Universiti Manipal Jaipur (Sedang Berlangsung)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lokasi", //[cite: 1, 2]
                heading: "Kolkata, India", //[cite: 1, 2]
                para: "Terbuka untuk peluang jarak jauh, hibrid, dan penempatan semula" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Tumpuan Semasa", //[cite: 1, 2]
                heading: "Kejuruteraan Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Pameran", //[cite: 1, 2]
        subtitle: "Kerja & Minat", //[cite: 1, 2]
        para: "Kejuruteraan Perisian • AI • Muzik • Kreativiti • Sijil", //[cite: 1, 2]
        filters: [
            "Pilihan", //[cite: 1, 2]
            "Perisian", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Kreatif", //[cite: 1, 2]
            "Semua", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Membangunkan dan melancarkan tapak web korporat halaman tunggal moden menggunakan Next.js. Mengkonfigurasi Docker, Nginx, dan pengehosan pengeluaran sambil mengoptimumkan tindak balas, prestasi, dan aliran kerja pelancaran.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Lawati Tapak Web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "Membangunkan dan menyelenggara widget sembang AI responsif bersepadu Shopify yang menyokong penemuan produk dan interaksi pelanggan. Membina API backend, menyepadukan Shopify GraphQL, dan mencipta papan pemuka Looker Studio untuk memantau penglibatan pengguna dan metrik perniagaan.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "Membangunkan sistem pengurusan kandungan (CMS) timbunan penuh dengan papan pemuka pentadbiran yang selamat, pengurusan kandungan dinamik, operasi CRUD, dan pelancaran pengeluaran pada Ubuntu menggunakan Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Lawati Tapak Web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "Membangunkan platform teknologi kewangan responsif yang menghubungkan pengguna dengan penasihat kewangan yang disahkan Raman Khandelwal melalui seni bina frontend moden dan selamat jenis (type-safe).", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Lawati Tapak Web" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "Membina platform swafoto maya dikuasakan AI dalam masa tiga hari untuk inisiatif kebudayaan Durga Puja yang besar. Membangunkan frontend lengkap, backend Firebase, pangkalan data Firestore, papan pemuka pentadbiran, pemadaman latar belakang AI menggunakan API Dezgo, kawalan peningkatan imej, dan penyepaduan Google Tag Manager sebelum melancarkan aplikasi dengan Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Lawati Tapak Web", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "Membangunkan platform rasmi Sel Keusahawanan dengan pentadbiran Django tersuai, pengurusan mentor, pengurusan alumni, penjejakan sumbangan, dan aliran kerja kelulusan blog. Platform ini mewakili institusi semasa pertandingan IIT Bombay E-Cell dan dibina dalam masa tiga hari.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Mereka bentuk dan membangunkan platform SaaS kecergasan dan e-dagang berbilang vendor yang menyokong pentadbir, pemilik gim, jurulatih, kakitangan, dan pelanggan. Melaksanakan kawalan akses berasaskan peranan, penyepaduan pembayaran PhonePe, REST API untuk aplikasi Flutter, ciri komuniti, kehadiran QR, pengurusan tempahan, dan papan pemuka analisis.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "Membina tapak web kafe tersuai dengan papan pemuka pentadbiran untuk mengurus item menu, kategori, kandungan bahagian hero, sepanduk promosi, dan imej tapak web. Mencipta pengalaman pengurusan kandungan intuitif yang membolehkan kakitangan mengemas kini kandungan tapak web dengan cekap sambil mengekalkan pengalaman pelanggan yang responsif dan konsisten secara visual." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Membina tapak web pemasaran responsif untuk jenama peralatan kecergasan yang memfokuskan pada pembentangan produk, penceritaan jenama, dan penjanaan prospek. Membangunkan bahagian halaman pendaratan yang menarik, pameran produk, kandungan promosi, dan susun atur mesra mudah alih untuk meningkatkan penglibatan pengguna dan kebolehlihatan jenama." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Perisian", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Mengusahakan platform pembina tapak web hartanah tersuai yang membolehkan perniagaan menjana dan mengurus tapak web daripada templat yang boleh dikonfigurasikan. Melaksanakan pengurusan bahagian dinamik, penyuntingan kandungan, kemas kini imej, dan ciri penyesuaian templat menggunakan Django, Bootstrap 5, dan AJAX. Menyepadukan data hartanah dan perniagaan daripada ActivCRM, membolehkan penyegerakan kandungan automatik antara platform CRM dan tapak web.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Mencipta katalog pemasaran untuk syarikat pembuatan perindustrian, mengubah spesifikasi produk teknikal kepada susun atur yang menarik secara visual dan mudah dilayari. Mereka bentuk pameran produk, aset penjenamaan, dan halaman promosi menggunakan Canva sambil memastikan konsistensi, kebolehbacaan, dan piawaian pembentangan profesional." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Membangunkan identiti visual dan katalog pemasaran untuk syarikat pembuatan perindustrian. Mereka bentuk logo syarikat, aset penjenamaan, dan susun atur katalog produk, mencipta pengalaman jenama yang padu yang menyampaikan maklumat produk teknikal dengan berkesan melalui reka bentuk yang jelas dan menarik secara visual." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatif", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Membangunkan katalog pemasaran korporat untuk firma perunding kejuruteraan, menonjolkan portfolio perkhidmatan, kecekapan teknikal, dan kepakaran projek. Mereka bentuk susun atur berstruktur visual, kandungan berjenama, dan bahan pembentangan yang mengubah konsep kejuruteraan kompleks menjadi cagaran pemasaran yang boleh diakses dan profesional." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Hubungi", //[cite: 1, 2]
        heading: "Perjalanan Diteruskan", //[cite: 1, 2]

        intro:
            "Jika anda sedang mencari jurutera perisian backend yang gemar membina sistem yang boleh diskala, aplikasi natif awan, dan produk digital yang boleh dipercayai, saya amat berbesar hati untuk berhubung. Saya sentiasa berminat untuk membincangkan peluang baharu, projek yang mencabar, dan idea-idea inovatif.", //[cite: 1, 2]

        availability:
            "Kini tersedia untuk jawatan sepenuh masa, peluang jarak jauh, projek bebas, dan penempatan semula antarabangsa.", //[cite: 1, 2]

        cta: {
            email: "E-mel Saya", //[cite: 1, 2]
            linkedin: "Berhubung di LinkedIn", //[cite: 1, 2]
        },

        quote: "Setiap projek yang hebat bermula dengan perbualan.", //[cite: 1, 2]
    }
};