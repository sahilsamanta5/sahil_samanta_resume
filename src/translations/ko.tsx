import { TbActivity, TbBrandLinkedin, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbHierarchy3, TbHome, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer2, TbTerminal2, TbTools, TbUser, TbWorld } from "react-icons/tb"; //[cite: 1]
import { ShowcaseItem } from "../components/showcase/showcaseData"; //[cite: 1]

export default {
    header: {
        nav: [
            { label: "홈",     href: "#home",     icon: TbHome }, //[cite: 1, 2]
            { label: "기술 스킬",   href: "#profile",   icon: TbTerminal2 }, //[cite: 1, 2]
            { label: "내 소개",    href: "#about",    icon: TbUser }, //[cite: 1, 2]
            { label: "프로젝트", href: "#showcase", icon: TbLayoutGrid }, //[cite: 1, 2]
            { label: "문의하기",  href: "#contact",  icon: TbMail }, //[cite: 1, 2]
        ],
        socials: [
            { label: "링크드인", href: "https://www.linkedin.com/in/sahilsamanta/", icon: TbBrandLinkedin }, //[cite: 1, 2]
        ],
        collapseText: "접기", //[cite: 1, 2]
        name: "사힐 사만타 (Sahil Samanta)", //[cite: 1, 2]
        position: "백엔드 소프트웨어 엔지니어", //[cite: 1, 2]
        availability: "전 세계 어디서나 근무 가능", //[cite: 1, 2]
        since: "2021년부터 코딩 시작", //[cite: 1, 2]
        experience: "실무 경력 2년 이상" //[cite: 1, 2]
    },
    
    hero: {
        title: () => (
            <>
                <span className="block xl:whitespace-nowrap">
                <span className="text-[var(--accent-cyan)]">
                    확장 가능한 백엔드 시스템
                </span>
                {" "}구축
                </span>

                <span className="mt-2 block xl:whitespace-nowrap">
                AI 및 게임 개발{" "}
                <span className="text-[var(--accent-cyan)]">
                    도전
                </span>
                </span>
            </>
        ), //[cite: 1, 2]
        para: "Python, Django, FastAPI를 사용하여 확장 가능한 API, 클라우드 네이티브 애플리케이션 및 최신 백엔드 아키텍처를 전문으로 하는 백엔드 소프트웨어 엔지니어입니다. AI, 분산 시스템, 그리고 대규모로 확장 가능한 소프트웨어를 구축하는 데 열정을 가지고 있습니다.", //[cite: 1, 2]
        cta1: "내 작업 보기", //[cite: 1, 2]
        cta2: "이력서 다운로드", //[cite: 1, 2]
        status: {
            head: "채용 상태", //[cite: 1, 2]
            stat: () => (
                <>
                    <span className="text-[var(--accent-blue)]">인도 콜카타</span>를 거점으로 활동하고 있습니다. 정규직, 원격, 하이브리드 및 해외 이주를 동반하는 포지션 제안에 열려 있습니다.
                </>
            ) //[cite: 1, 2]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "기술 스킬", icon: TbCode }, //[cite: 1, 2]
            { id: "education", label: "학력", icon: TbSchool }, //[cite: 1, 2]
            { id: "certs", label: "자격증", icon: TbCertificate }, //[cite: 1, 2]
            { id: "hobbies", label: "취미", icon: TbActivity }, //[cite: 1, 2]
            { id: "languages", label: "언어", icon: TbMessageCircle }, //[cite: 1, 2]
        ],
        skills: {
            technical: [
                { category: "프로그래밍 언어", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] }, //[cite: 1, 2]
                { category: "백엔드 엔지니어링", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] }, //[cite: 1, 2]
                { category: "프론트엔드 엔지니어링", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] }, //[cite: 1, 2]
                { category: "데이터베이스", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] }, //[cite: 1, 2]
                { category: "클라우드 및 DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] }, //[cite: 1, 2]
                { category: "도구 및 플랫폼", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] }, //[cite: 1, 2]
                { category: "소프트웨어 설계 및 개념", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]} //[cite: 1, 2]
            ],
            education: [
                {
                    degree: "컴퓨터 애플리케이션 석사 (MCA)", //[cite: 1, 2]
                    institution: "마니팔 대학교 자이푸르 (Manipal University Jaipur)", //[cite: 1, 2]
                    timeline: "2026 - 현재", //[cite: 1, 2]
                    description:
                    "현재 소프트웨어 공학, 분산 시스템, 클라우드 컴퓨팅 및 최신 애플리케이션 개발에 중점을 둔 석사 과정을 밟고 있습니다." //[cite: 1, 2]
                },
                {
                    degree: "경영학 학사 (BBA)", //[cite: 1, 2]
                    institution: "바라티야 비디야 바반 경영과학 대학, 콜카타", //[cite: 1, 2]
                    timeline: "2021 - 2024", //[cite: 1, 2]
                    description:
                    "평점 8.13/10으로 졸업했습니다. 뛰어난 분석력, 문제 해결 및 비즈니스 관리 기술을 개발하여 실제 비즈니스 요구에 부합하는 소프트웨어를 설계하는 데 귀중한 통찰력을 얻었습니다." //[cite: 1, 2]
                }
            ],
            hobbies: [
                {
                    title: "게임 개발", //[cite: 1, 2]
                    icon: TbDeviceGamepad2,
                    description:
                        "소규모 프로토타입을 만들고 게임 플레이 메커니즘, 레벨 디자인 및 인터랙티브 시스템을 연구하며 Unity, C# 및 게임 디자인을 배우는 것을 즐깁니다." //[cite: 1, 2]
                },
                {
                    title: "음악 및 노래", //[cite: 1, 2]
                    icon: TbMusic,
                    description:
                        "노래는 제가 가장 좋아하는 창조적인 취미 중 하나입니다. 긴장을 풀고 집중력을 향상시키며 소프트웨어 개발과 함께 건강한 균형을 유지하는 데 도움이 됩니다." //[cite: 1, 2]
                },
                {
                    title: "요리 및 창의성", //[cite: 1, 2]
                    icon: TbChefHat,
                    description:
                        "요리는 인내심, 세부 사항에 대한 주의, 지속적인 실험을 가르쳐 줍니다. 이는 제가 소프트웨어를 설계하고 구축할 때도 적용하는 자질입니다." //[cite: 1, 2]
                },
                {
                    title: "언어 및 문화 학습", //[cite: 1, 2]
                    icon: TbWorld,
                    description:
                        "현재 일본어를 배우고 있으며 여행, 책, 온라인 커뮤니티를 통해 다양한 문화, 기술 및 아이디어를 탐구하는 것을 즐깁니다." //[cite: 1, 2]
                }
            ],
            languages: [
                { language: "영어", proficiency: "업무 가능 수준 (Professional Working Proficiency)" }, //[cite: 1, 2]
                { language: "힌디어", proficiency: "원어민 수준 (Native / Bilingual Proficiency)" }, //[cite: 1, 2]
                { language: "벵골어", proficiency: "원어민 수준 (Native / Bilingual Proficiency)" }, //[cite: 1, 2]
                { language: "일본어", proficiency: "초급 (JLPT N5)" } //[cite: 1, 2]
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
        cta: "인증 확인", //[cite: 1, 2]
        carouselCta: {
            next: "다음", //[cite: 1, 2]
            prev: "이전" //[cite: 1, 2]
        }
    },
    about: {
        tagline: "코드 이면의 이야기", //[cite: 1, 2]
        heading: "내 소개", //[cite: 1, 2]
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    저는 <strong className="font-medium text-[var(--foreground)]">확장 가능한 API, 클라우드 네이티브 애플리케이션 및 최신 백엔드 시스템</strong>을 전문으로 하는 백엔드 소프트웨어 엔지니어입니다. 현재 <strong className="font-medium text-[var(--foreground)]">마니팔 대학교 자이푸르(Manipal University Jaipur)</strong>에서 <span className="text-[var(--accent-cyan)]">컴퓨터 애플리케이션 석사(MCA)</span> 과정을 밟고 있으며, <span className="text-[var(--accent-cyan)]">Python</span>, <span className="text-[var(--accent-cyan)]">Django</span>, <span className="text-[var(--accent-cyan)]">FastAPI</span> 및 <span className="text-[var(--accent-cyan)]">최신 웹 기술</span>을 사용하여 <strong className="font-medium text-[var(--foreground)]">신뢰할 수 있는 소프트웨어</strong>를 구축하는 것을 즐깁니다.
                </p>
                
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    저는 <span className="text-[var(--accent-cyan)]">유지 관리가 가능</span>하고 <span className="text-[var(--accent-cyan)]">안전</span>하며 <span className="text-[var(--accent-cyan)]">확장 가능한</span> <strong className="font-medium text-[var(--foreground)]">백엔드 시스템을 설계</strong>하는 것을 즐깁니다. REST API를 개발하든, 서드파티 서비스를 통합하든, 애플리케이션을 클라우드에 배포하든, 실제 문제를 해결하는 <span className="text-[var(--accent-cyan)]">깔끔하고 신뢰할 수 있는 코드</span>를 작성하는 데 중점을 둡니다.
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    백엔드 엔지니어링 외에도, 창의적인 사이드 프로젝트로 <span className="text-[var(--accent-cyan)]">Unity</span>, <span className="text-[var(--accent-cyan)]">Blender</span> 및 <span className="text-[var(--accent-cyan)]">게임 개발</span>을 탐구하는 것을 즐깁니다. 다양한 기술을 아우르며 학습하는 것은 기술적 깊이와 창의적인 문제 해결 능력을 모두 갖추고 소프트웨어 엔지니어링에 접근하는 데 도움이 됩니다.
                </p>
            </>
        ), //[cite: 1, 2]
        factCards: [
            {
                id: "education",
                icon: TbSchool,
                type: "학력", //[cite: 1, 2]
                heading: "컴퓨터 애플리케이션 석사 (MCA)", //[cite: 1, 2]
                para: "마니팔 대학교 자이푸르 (재학 중)" //[cite: 1, 2]
            },
            {
                id: "location",
                icon: TbMapPin,
                type: "거주지", //[cite: 1, 2]
                heading: "인도, 콜카타", //[cite: 1, 2]
                para: "원격, 하이브리드 및 해외 이주/재배치 가능" //[cite: 1, 2]
            },
            {
                id: "current-focus",
                icon: TbCode,
                type: "현재 관심 분야", //[cite: 1, 2]
                heading: "백엔드 엔지니어링", //[cite: 1, 2]
                para: "Python • Django • FastAPI • REST APIs" //[cite: 1, 2]
            },
        ]
    },
    project: {
        title: "포트폴리오", //[cite: 1, 2]
        subtitle: "작업 및 열정", //[cite: 1, 2]
        para: "소프트웨어 엔지니어링 • AI • 음악 • 창의성 • 자격증", //[cite: 1, 2]
        filters: [
            "추천/주요", //[cite: 1, 2]
            "소프트웨어", //[cite: 1, 2]
            //   "AI",
            //   "Music",
            "크리에이티브", //[cite: 1, 2]
            "전체", //[cite: 1, 2]
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Web Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description: "Next.js를 사용하여 최신 단일 페이지 기업 웹사이트를 개발하고 배포했습니다. 반응성, 성능 및 배포 워크플로우를 최적화하면서 Docker, Nginx 및 프로덕션 호스팅을 구성했습니다.", //[cite: 1, 2]
                link: "https://apearenz.com/",
                linkText: "웹사이트 방문", //[cite: 1, 2]
                featured: true
            },
            {
                id: 2,
                title: "Project Katalyse AI", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description: "제품 검색 및 고객 상호 작용을 지원하는 반응형 Shopify 통합 AI 채팅 위젯을 개발 및 유지 관리했습니다. 백엔드 API를 구축하고 Shopify GraphQL을 통합했으며 Looker Studio 대시보드를 생성하여 사용자 참여도와 비즈니스 지표를 모니터링했습니다.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 3,
                title: "Sri Ramanujavani", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description: "안전한 관리자 대시보드, 동적 콘텐츠 관리, CRUD 기능 및 Apache2를 사용한 Ubuntu에서의 프로덕션 배포 기능을 갖춘 풀스택 콘텐츠 관리 시스템(CMS)을 개발했습니다.", //[cite: 1, 2]
                link: "https://sriramanujavani.com/",
                linkText: "웹사이트 방문", //[cite: 1, 2]
                featured: true
            },
            {
                id: 4,
                title: "Dhanwise Fintech", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description: "최신 타입 세이프 프론트엔드 아키텍처를 통해 사용자를 검증된 재무 고문 Raman Khandelwal과 연결해주는 반응형 금융 기술 플랫폼을 개발했습니다.", //[cite: 1, 2]
                link: "https://dhanwise.com/",
                linkText: "웹사이트 방문" //[cite: 1, 2]
            },
            {
                id: 5,
                title: "ITC Sunrise & PujaApp Virtual Selfie With Maa", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description: "대규모 두르가 푸자(Durga Puja) 문화 행사를 위해 3일 만에 AI 기반 가상 셀카 플랫폼을 구축했습니다. 전체 프론트엔드, Firebase 백엔드, Firestore 데이터베이스, 관리자 대시보드, Dezgo API를 활용한 AI 배경 제거, 이미지 향상 제어 및 Google Tag Manager 통합을 구현한 후 Firebase Hosting으로 애플리케이션을 배포했습니다.", //[cite: 1, 2]
                link: "https://thepuja.app/",
                linkText: "웹사이트 방문", //[cite: 1, 2]
                featured: true
            },
            {
                id: 6,
                title: "BIMS Startup Catalysts", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description: "맞춤형 Django 관리, 멘토 관리, 동문 관리, 기여 추적 및 블로그 승인 워크플로우를 갖춘 공식 기업가 정신 셀 플랫폼을 개발했습니다. 이 플랫폼은 IIT Bombay E-Cell 대회에서 기관을 대표했으며 단 3일 만에 구축되었습니다.", //[cite: 1, 2]
            },
            {
                id: 7,
                title: "Locope SaaS Platform", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description: "관리자, 체육관 소유자, 트레이너, 직원 및 고객을 지원하는 멀티 벤더 피트니스 및 이커머스 SaaS 플랫폼을 설계하고 개발했습니다. 역할 기반 액세스 제어(RBAC), PhonePe 결제 연동, Flutter 앱용 REST API, 커뮤니티 기능, QR 출석, 예약 관리 및 분석 대시보드를 구현했습니다.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 8,
                title: "Bruberry Café Website", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description: "메뉴 항목, 카테고리, 히어로 섹션 콘텐츠, 프로모션 배너 및 웹사이트 이미지를 관리할 수 있는 관리자 대시보드를 갖춘 맞춤형 카페 웹사이트를 구축했습니다. 반응형의 시각적으로 일관된 고객 경험을 유지하면서 직원이 웹사이트 콘텐츠를 효율적으로 업데이트할 수 있는 직관적인 콘텐츠 관리 경험을 만들었습니다." //[cite: 1, 2]
            },
            {
                id: 9,
                title: "MyActivt", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description: "제품 프레젠테이션, 브랜드 스토리텔링 및 리드 생성에 중점을 둔 피트니스 장비 브랜드를 위한 반응형 마케팅 웹사이트를 구축했습니다. 매력적인 랜딩 페이지 섹션, 제품 쇼케이스, 프로모션 콘텐츠 및 모바일 친화적인 레이아웃을 개발하여 사용자 참여와 브랜드 인지도를 향상시켰습니다." //[cite: 1, 2]
            },
            {
                id: 10,
                title: "ActivCMS", //[cite: 1, 2]
                category: "Software",
                categoryLabel: "소프트웨어", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description: "기업이 구성 가능한 템플릿에서 웹사이트를 생성하고 관리할 수 있는 맞춤형 부동산 웹사이트 빌더 플랫폼 작업을 수행했습니다. Django, Bootstrap 5 및 AJAX를 사용하여 동적 섹션 관리, 콘텐츠 편집, 이미지 업데이트 및 템플릿 사용자 정의 기능을 구현했습니다. ActivCRM의 부동산 및 비즈니스 데이터를 통합하여 CRM과 웹사이트 플랫폼 간의 자동화된 콘텐츠 동기화를 가능하게 했습니다.", //[cite: 1, 2]
                featured: true
            },
            {
                id: 11,
                title: "Precision Works Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "크리에이티브", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description: "산업용 제조 회사를 위한 마케팅 카탈로그를 제작하여 기술 제품 사양을 시각적으로 매력적이고 탐색하기 쉬운 레이아웃으로 변환했습니다. 일관성, 가독성 및 전문적인 프레젠테이션 표준을 보장하면서 Canva를 사용하여 제품 쇼케이스, 브랜딩 자산 및 프로모션 페이지를 디자인했습니다." //[cite: 1, 2]
            },
            {
                id: 12,
                title: "Padrone Catalog & Brand Identity", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "크리에이티브", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description: "산업용 제조 회사인 Padrone의 시각적 아이덴티티와 마케팅 카탈로그를 개발했습니다. 회사 로고, 브랜딩 자산 및 제품 카탈로그 레이아웃을 디자인하여 명확하고 시각적으로 매력적인 디자인을 통해 기술적인 제품 정보를 효과적으로 제공하는 응집력 있는 브랜드 경험을 만들었습니다." //[cite: 1, 2]
            },
            {
                id: 13,
                title: "PlanTech Engineering Services Catalog", //[cite: 1, 2]
                category: "Creative",
                categoryLabel: "크리에이티브", //[cite: 1, 2]
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description: "엔지니어링 컨설팅 회사를 위한 기업 마케팅 카탈로그를 개발하여 서비스 포트폴리오, 기술 역량 및 프로젝트 전문성을 강조했습니다. 시각적으로 구조화된 레이아웃, 브랜드 콘텐츠 및 프레젠테이션 자료를 디자인하여 복잡한 엔지니어링 개념을 접근하기 쉽고 전문적인 마케팅 자료로 변환했습니다." //[cite: 1, 2]
            }
        ] satisfies ShowcaseItem[] //[cite: 1]
    },
    contact: {
        tagline: "문의하기", //[cite: 1, 2]
        heading: "여정은 계속됩니다", //[cite: 1, 2]

        intro:
            "확장 가능한 시스템, 클라우드 네이티브 애플리케이션 및 신뢰할 수 있는 디지털 제품을 구축하는 것을 즐기는 백엔드 소프트웨어 엔지니어를 찾고 계신다면, 꼭 연락 주시기 바랍니다. 새로운 기회, 도전적인 프로젝트 및 혁신적인 아이디어에 대해 논의하는 것에 항상 열려 있습니다.", //[cite: 1, 2]

        availability:
            "현재 정규직, 원격 근무, 프리랜서 프로젝트 및 해외 이주 포지션을 적극적으로 찾고 있습니다.", //[cite: 1, 2]

        cta: {
            email: "이메일 보내기", //[cite: 1, 2]
            linkedin: "링크드인으로 연결", //[cite: 1, 2]
        },

        quote: "모든 훌륭한 프로젝트는 하나의 대화에서 시작됩니다.", //[cite: 1, 2]
    }
};