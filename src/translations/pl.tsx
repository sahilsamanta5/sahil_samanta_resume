import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    background: {
        hero: "/images/bg/pl/hero_bg.jpg"
    },
    header: {
        nav: [
            { label: "STRONA GŁÓWNA",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "UMIEJĘTNOŚCI",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "O MNIE",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "PROJEKTY", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "KONTAKT",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "LINKEDIN", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "ZWIŃ", //[cite: 1, 2]
        name: "Sahil Samanta", //[cite: 1, 2]
        position: "INŻYNIER OPROGRAMOWANIA BACKEND", //[cite: 1, 2]
        availability: "DOSTĘPNY NA CAŁYM ŚWIECIE", //[cite: 1, 2]
        since: "KODUJĘ OD 2021", //[cite: 1, 2]
        experience: "2+ LATA DOŚWIADCZENIA W BRANŻY" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                Buduję{" "}
                <span className="text-[var(--accent-cyan)]">
                    skalowalne systemy backendowe
                </span>
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    Eksploruję
                </span>{" "}
                AI i tworzenie gier
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Inżynier oprogramowania backend specjalizujący się w skalowalnych API, aplikacjach typu cloud-native oraz nowoczesnej architekturze backendowej z wykorzystaniem Pythona, Django i FastAPI. Pasjonat AI, systemów rozproszonych oraz tworzenia oprogramowania, które rośnie wraz z potrzebami.", //[cite: 1, 2]
        cta1: "Zobacz moje prace", //[cite: 1, 2]
        cta2: "Pobierz CV", //[cite: 1, 2]
        status: {
            head: "Status rekrutacji", //[cite: 1, 2]
            stat: () => (
                <>
                    Lokalizacja: <span className="text-[var(--accent-blue)]">Kolkata, Indie</span>. Otwarty na oferty pracy pełnoetatowej, zdalnej, hybrydowej oraz relokację.
                </>
            ) //[cite: 1, 2]
        },
        model: "/images/model/sahil_pl.png"
    },
    profile: {
        tabs: [
            { id: "skills", label: "Umiejętności techniczne", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "Edukacja", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "Certyfikaty", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "Zainteresowania", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "Języki", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "Języki programowania", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "Inżynieria Backend", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "Inżynieria Frontend", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "Bazy danych", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "Chmura i DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "Narzędzia i platformy", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "Koncepcje", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "Magister informatyki (MCA)", //[cite: 1, 2]
                    institution: "Manipal University Jaipur", //[cite: 1, 2]
                    timeline: "2026 - obecnie", //[cite: 1, 2]
                    description:
                    "Aktualnie w trakcie studiów magisterskich ze szczególnym uwzględnieniem inżynierii oprogramowania, systemów rozproszonych, przetwarzania w chmurze i nowoczesnego tworzenia aplikacji." //[cite: 1, 2]
                },
                {
                    degree: "Licencjat z zarządzania (BBA)", //[cite: 1, 2]
                    institution: "Bharatiya Vidya Bhavan Institute of Management Science, Kolkata", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "Ukończone studia z wynikiem CGPA 8.13/10. Rozwinięte umiejętności analityczne, rozwiązywania problemów i zarządzania biznesem, co pozwala na projektowanie oprogramowania lepiej odpowiadającego rzeczywistym potrzebom biznesowym." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "Tworzenie gier", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "Czerpię radość z nauki Unity, C# oraz projektowania gier poprzez tworzenie małych prototypów i analizowanie mechanik rozgrywki, designu poziomów oraz systemów interaktywnych." //[cite: 1, 2]
                },
                {
                    title: "Muzyka i śpiew", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "Śpiew to jeden z moich ulubionych kreatywnych sposobów spędzania czasu. Pomaga mi się zrelaksować, poprawić koncentrację i zachować zdrową równowagę poza pracą z kodem." //[cite: 1, 2]
                },
                {
                    title: "Gotowanie i kreatywność", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "Gotowanie uczy cierpliwości, dbałości o szczegóły i ciągłego eksperymentowania — cech, które wykorzystuję również podczas projektowania i tworzenia oprogramowania." //[cite: 1, 2]
                },
                {
                    title: "Nauka języków i kultur", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "Obecnie uczę się japońskiego i lubię odkrywać różne kultury, technologie i idee poprzez podróże, książki oraz społeczności internetowe." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "Angielski", proficiency: "Poziom biegły (profesjonalny)" }, //[cite: 1, 2]
                { language: "Hindi", proficiency: "Język ojczysty / Bilingwalny" }, //[cite: 1, 2]
                { language: "Bengalski", proficiency: "Język ojczysty / Bilingwalny" }, //[cite: 1, 2]
                { language: "Japoński", proficiency: "Podstawowy (JLPT N5)" } //[cite: 1, 2]
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
        cta: "Weryfikuj", //[cite: 1, 2]
        carouselCta: {
            next: "Dalej", //[cite: 1, 2]
            prev: "Wstecz" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "Za kulisami kodu", //[cite: 1, 2]
        heading: "O mnie", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Jestem inżynierem oprogramowania backend, specjalizującym się w <strong className="font-medium text-[var(--foreground)]">skalowalnych API, aplikacjach typu cloud-native oraz nowoczesnych systemach backendowych.</strong> Obecnie realizuję <span className="text-[var(--accent-cyan)]">studia magisterskie (MCA)</span> na <strong className="font-medium text-[var(--foreground)]">Manipal University Jaipur</strong>, gdzie z przyjemnością buduję <strong className="font-medium text-[var(--foreground)]">niezawodne oprogramowanie</strong>, korzystając z <span className="text-[var(--accent-cyan)]">Pythona</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> oraz <span className="text-[var(--accent-cyan)]">nowoczesnych technologii webowych</span>.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Uwielbiam <strong className="font-medium text-[var(--foreground)]">projektować systemy backendowe</strong>, które są <span className="text-[var(--accent-cyan)]">łatwe w utrzymaniu</span>, <span className="text-[var(--accent-cyan)]">bezpieczne</span> i <span className="text-[var(--accent-cyan)]">skalowalne</span>. Niezależnie od tego, czy tworzę REST API, integruję usługi zewnętrzne czy wdrażam aplikacje w chmurze, skupiam się na pisaniu <span className="text-[var(--accent-cyan)]">czystego, niezawodnego kodu</span>, który rozwiązuje rzeczywiste problemy.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    Poza inżynierią backendu, lubię odkrywać <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> oraz <span className="text-[var(--accent-cyan)]">tworzenie gier</span> w ramach kreatywnych projektów pobocznych. Nauka różnych technologii pozwala mi podchodzić do inżynierii oprogramowania zarówno z głębią techniczną, jak i kreatywnym podejściem do rozwiązywania problemów.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "Edukacja", //[cite: 1, 2]
                heading: "Magister informatyki (MCA)", //[cite: 1, 2]
                para: "Manipal University Jaipur (w trakcie)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "Lokalizacja", //[cite: 1, 2]
                heading: "Kolkata, Indie", //[cite: 1, 2]
                para: "Otwarty na pracę zdalną, hybrydową i relokację" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "Obecny cel", //[cite: 1, 2]
                heading: "Inżynieria Backend", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "Portfolio", //[cite: 1, 2]
        subtitle: "Praca i pasje", //[cite: 1, 2]
        para: "Inżynieria oprogramowania • AI • Muzyka • Kreatywność • Certyfikaty", //[cite: 1, 2]
        filters: [
            "Polecane", //[cite: 1, 2]
            "Software", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "Kreatywne", //[cite: 1, 2]
            "Wszystkie", //[cite: 1, 2]
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
                description: "Opracowałem i wdrożyłem nowoczesną stronę korporacyjną typu single-page przy użyciu Next.js. Skonfigurowałem Docker, Nginx i hosting produkcyjny, optymalizując responsywność, wydajność i procesy wdrażania.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "Odwiedź stronę", //[cite: 1, 2]
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
                description: "Stworzyłem i utrzymywałem responsywny widget czatu AI zintegrowany ze sklepem Shopify, wspierający odkrywanie produktów i interakcje z klientami. Zbudowałem API backendowe, zintegrowałem Shopify GraphQL i stworzyłem dashboardy w Looker Studio do monitorowania zaangażowania użytkowników i wskaźników biznesowych.", //[cite: 1, 2]
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
                description: "Stworzyłem pełnoprawny system zarządzania treścią (CMS) z zabezpieczonymi panelami administracyjnymi, dynamicznym zarządzaniem treścią, operacjami CRUD oraz wdrożeniem produkcyjnym na Ubuntu przy użyciu Apache2.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "Odwiedź stronę", //[cite: 1, 2]
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
                description: "Zbudowałem responsywną platformę fintech łączącą użytkowników ze zweryfikowanym doradcą finansowym Ramanem Khandelwalem, wykorzystując nowoczesną, bezpieczną (type-safe) architekturę frontendową.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "Odwiedź stronę" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "W ciągu trzech dni zbudowałem platformę do wirtualnych selfie opartą na AI dla dużej inicjatywy kulturalnej Durga Puja. Opracowałem kompletny frontend, backend w Firebase, bazę danych Firestore, panel administracyjny, usuwanie tła przez AI przy użyciu Dezgo API, kontrolę jakości obrazu oraz integrację z Google Tag Managerem, a następnie wdrożyłem aplikację na Firebase Hosting.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "Odwiedź stronę", //[cite: 1, 2]
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
                description: "Opracowałem oficjalną platformę Entrepreneurship Cell z niestandardowym panelem Django, zarządzaniem mentorami, zarządzaniem absolwentami, śledzeniem wkładów oraz przepływem pracy zatwierdzania blogów. Platforma reprezentowała instytucję podczas konkursu IIT Bombay E-Cell i została zbudowana w trzy dni.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "Zaprojektowałem i zbudowałem platformę SaaS dla fitnessu i e-commerce z wieloma sprzedawcami, obsługującą administratorów, właścicieli siłowni, trenerów, personel i klientów. Zaimplementowałem kontrolę dostępu opartą na rolach (RBAC), integrację płatności PhonePe, REST API dla aplikacji Flutter, funkcje społecznościowe, obecność QR, zarządzanie rezerwacjami oraz analityczne dashboardy.", //[cite: 1, 2]
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
                description: "Stworzyłem spersonalizowaną stronę kawiarni z panelem administracyjnym do zarządzania menu, kategoriami, treścią sekcji głównej, banerami promocyjnymi i zdjęciami strony. Zapewniłem intuicyjne zarządzanie treścią, które pozwala personelowi efektywnie aktualizować stronę przy zachowaniu responsywności i spójności wizualnej dla klientów.", //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "Zbudowałem responsywną stronę marketingową dla marki sprzętu fitness, skupioną na prezentacji produktów, storytellingu marki i generowaniu leadów. Opracowałem angażujące sekcje landing page, prezentacje produktów, treści promocyjne oraz układy przyjazne dla urządzeń mobilnych, aby zwiększyć zaangażowanie użytkowników i widoczność marki.", //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "Software", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "Pracowałem przy platformie do budowania stron nieruchomości na zamówienie, która pozwalała firmom generować i zarządzać stronami z konfigurowalnych szablonów. Zaimplementowałem dynamiczne zarządzanie sekcjami, edycję treści, aktualizacje obrazów i funkcje dostosowywania szablonów przy użyciu Django, Bootstrap 5 i AJAX. Zintegrowałem dane o nieruchomościach i biznesie z ActivCRM, umożliwiając automatyczną synchronizację treści między CRM a stronami WWW.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatywne", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "Stworzyłem katalog marketingowy dla firmy produkcyjnej, przekształcając techniczne specyfikacje produktów w atrakcyjne wizualnie i łatwe w nawigacji układy. Zaprojektowałem prezentacje produktów, zasoby brandingowe i strony promocyjne przy użyciu Canvy, dbając o spójność, czytelność i profesjonalne standardy prezentacji.", //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatywne", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "Opracowałem identyfikację wizualną i katalog marketingowy dla firmy produkcyjnej. Zaprojektowałem logo firmy, zasoby brandingowe i układy katalogu produktów, tworząc spójne doświadczenie marki, które skutecznie prezentuje informacje techniczne o produktach poprzez przejrzysty i atrakcyjny wizualnie design.", //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "Kreatywne", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "Opracowałem korporacyjny katalog marketingowy dla firmy doradztwa inżynieryjnego, podkreślający portfolio usług, kompetencje techniczne i doświadczenie w projektach. Zaprojektowałem układy o wyraźnej strukturze wizualnej, treści marki oraz materiały prezentacyjne, które przekształciły złożone koncepcje inżynieryjne w przystępne i profesjonalne materiały marketingowe.", //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "Kontakt", //[cite: 1, 2]
        heading: "Podróż trwa", //[cite: 1, 2]

        intro:
            "Jeśli szukasz inżyniera oprogramowania backend, który lubi budować skalowalne systemy, aplikacje cloud-native i niezawodne produkty cyfrowe, z chęcią nawiążę współpracę. Zawsze jestem zainteresowany dyskusją o nowych możliwościach, wymagających projektach i innowacyjnych pomysłach.", //[cite: 1, 2]

        availability:
            "Obecnie dostępny do pracy na pełen etat, zdalnej, przy projektach freelance oraz relokacji międzynarodowej.", //[cite: 1, 2]

        cta: {
            email: "Napisz e-mail", //[cite: 1, 2]
            linkedin: "Połącz się na LinkedIn", //[cite: 1, 2]
        },

        quote: "Każdy wielki projekt zaczyna się od rozmowy.", //[cite: 1, 2]
    }
};