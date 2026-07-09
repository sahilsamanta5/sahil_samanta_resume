import { TbActivity, TbBrandDiscord, TbBrandDocker, TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandX, TbBriefcase2, TbCertificate, TbChefHat, TbCloudComputing, TbCode, TbDatabase, TbDeviceDesktopCode, TbDeviceGamepad2, TbFolders, TbHierarchy3, TbHome2, TbLayoutGrid, TbMail, TbMapPin, TbMessageCircle, TbMusic, TbSchool, TbServer, TbServer2, TbTools, TbUser, TbWorld } from "react-icons/tb";
import { ShowcaseItem } from "../components/showcase/showcaseData";
import { RotatingStat } from "../components/RotatingStats";

const stats = [
  "スケーラブルなAPI",
  "AIアプリケーション",
  "クラウドネイティブシステム",
  "バックエンドプラットフォーム",
  "本番運用ソフトウェア",
];

export default {
    background: {
        hero: "/images/bg/jp/hero_bg.jpg",
        contact: "/images/bg/jp/contact_bg_2.png"
    }, 
    header: {
            nav: [
                {
                    title: "ナビゲーション",
                    items: [
                        {
                            title: "ホーム",
                            href: "#home",
                            icon: TbHome2,
                        },
                        {
                            title: "自己紹介",
                            href: "#about",
                            icon: TbUser,
                        },
                        {
                            title: "スキル",
                            href: "#profile",
                            icon: TbCode,
                        },
                        {
                            title: "制作実績",
                            href: "#showcase",
                            icon: TbLayoutGrid,
                        },
                        {
                            title: "お問い合わせ",
                            href: "#contact",
                            icon: TbMail,
                        },
                    ]
                },
                {
                    title: "つながる",
                    items: [
                        {
                            title: "ギットハブ",
                            href: "https://github.com/sahilsamanta5",
                            icon: TbBrandGithub
                        },
                        {
                            title: "リンクトイン",
                            href: "https://www.linkedin.com/in/sahilsamanta/",
                            icon: TbBrandLinkedin
                        },
                        {
                            title: "インスタグラム",
                            href: "https://www.instagram.com/developersahilsamanta/",
                            icon: TbBrandInstagram
                        },
                        {
                            title: "ツイッター / エックス",
                            href: "https://x.com/Sahilsamanta1",
                            icon: TbBrandX
                        },
                        {
                            title: "ディスコード",
                            href: "https://discord.com/users/324505079837229059",
                            icon: TbBrandDiscord
                        },
                    ]
                }
            ],
            collapseText: "メニューを閉じる",
            name: "サマンタ サヒル",
            position: "フルスタック エンジニア",
            availability: "転職活動中",
            tagline: {
                tag: "スケーラブルなアプリケーションを構築",
                stat: "2022年から"
            },
            joining_status: "すぐに入社可能",
            available_heading: "稼働状況"
        },
    hero: {
        title: () => (
            <>
                <span className="xl:whitespace-nowrap">
                開発した{" "}
                </span>

                <span className="xl:whitespace-nowrap">
                    <RotatingStat stats={stats} />{" "}
                </span>
            </>
        ),
        para: "Python、Django、Django REST Framework、MySQLおよびNoSQLデータベースを活用したフルスタックソフトウェアエンジニアです。人工知能（AI）、コンピュータビジョン、ロボティクス、ゲーム開発、3Dアセットデザイン、そしてスケーラブルなソフトウェア開発に強い関心を持っています。また、アジャイル開発、ウォーターフォール開発、モノリシックアーキテクチャ、モジュラーモノリスアーキテクチャでの開発経験があります。",
        cta1: "プロジェクトを見る",
        cta2: "履歴書をダウンロード",
        status: {
            head: "採用状況",
            stat: () => (
                <>
                    <span className="text-[var(--accent-blue)]">
                        インド・コルカタ
                    </span>
                    を拠点に活動しています。
                    フルタイム、リモート、ハイブリッド、
                    および海外転居を伴うポジションを
                    積極的に募集しています。
                </>
            )
        },
        model: "/images/model/sahil_jp.png",
        availability: "世界中で勤務可能 • 海外転居可能",
        tech_stack: {
            title: "技術スタック",
            subtitle: "主要技術スタック",
            stacks: [
                {
                    title: "バックエンド",
                    icon: TbServer,
                    items: ["Python", "Django", "FastAPI"],
                },
                {
                    title: "フロントエンド",
                    icon: TbCode,
                    items: ["React", "Next.js", "TypeScript"],
                },
                {
                    title: "データベース",
                    icon: TbDatabase,
                    items: ["PostgreSQL", "MongoDB"],
                },
                {
                    title: "DevOps",
                    icon: TbBrandDocker,
                    items: ["Docker", "AWS", "Git"],
                },
            ]
        },
        key_stats: {
            title: "主な実績",
            subtitle: "私についての主なデータ",
            stats: [
                {
                    icon: TbBriefcase2,
                    value: "2年以上",
                    subtitle: "ソフトウェア開発の実務経験",
                },
                {
                    icon: TbFolders,
                    value: "40+",
                    subtitle: "参画したプロジェクト数",
                },
                {
                    icon: TbWorld,
                    value: "世界中",
                    subtitle: "リモート勤務・海外転居対応",
                },
            ]
        }
    },
    profile: {
        tabs: [
            { id: "skills", label: "技術", icon: TbCode },
            { id: "education", label: "学歴", icon: TbSchool },
            { id: "certs", label: "資格・認定", icon: TbCertificate },
            { id: "hobbies", label: "趣味", icon: TbActivity },
            { id: "languages", label: "言語", icon: TbMessageCircle },
        ],
        skills: {
            technical: [
                { category: "プログラミング言語", icon: TbCode, skills: ["Python", "JavaScript", "TypeScript", "SQL", "C", "C#", "Java"] },
                { category: "バックエンド開発", icon: TbServer2, skills: ["Django", "Django REST Framework (DRF)", "FastAPI", "Flask", "REST API Design", "GraphQL", "Payment Gateway Integration"] },
                { category: "フロントエンド開発", icon: TbDeviceDesktopCode, skills: ["React", "Next.js", "React Native", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "AJAX"] },
                { category: "データベース", icon: TbDatabase, skills: ["MySQL", "MongoDB", "Firebase Firestore", "SQLite3"] },
                { category: "クラウド・DevOps", icon: TbCloudComputing, skills: ["Docker", "Linux", "Nginx", "PM2", "Jenkins", "AWS IAM", "AWS Lambda", "Google Cloud VM", "Firebase Hosting", "Seed.run"] },
                { category: "ツール・プラットフォーム", icon: TbTools, skills: ["Git", "GitHub", "Postman", "Jira", "Shopify GraphQL", "Magento", "Google Analytics 4 (GA4)", "Google Tag Manager (GTM)", "Looker Studio", "Firebase", "Dezgo AI API", "Canva", "Blender", "Unity", "Adobe Premiere Pro"] },
                { category: "ソフトウェア設計", icon: TbHierarchy3, skills: [ "RESTful Architecture", "Authentication & Authorization", "Role-Based Access Control (RBAC)", "MVC Architecture", "Responsive Design"]}
            ],
            education: [
                {
                    degree: "情報技術修士 (MCA)",
                    institution: "マニパル大学ジャイプール校",
                    timeline: "2026年〜現在",
                    description:
                        "ソフトウェア工学、分散システム、クラウドコンピューティング、およびモダンなアプリケーション開発を中心に学んでいます。"
                },
                {
                    degree: "経営学学士 (BBA)",
                    institution: "バラティヤ・ヴィディヤ・バヴァン経営科学大学（コルカタ）",
                    timeline: "2021年〜2024年",
                    description:
                        "GPA 8.13/10で卒業。分析力、問題解決能力、ビジネスマネジメントを学び、実際のビジネス要件に適したソフトウェア設計の基礎を身につけました。"
                }
            ],
            hobbies: [
                {
                    title: "ゲーム開発",
                    icon: TbDeviceGamepad2,
                    description:
                    "UnityやC#を学びながら、小規模なゲーム制作を通じてゲームデザイン、ゲームプレイ、レベルデザイン、インタラクティブシステムを研究しています。"
                },
                {
                    title: "音楽・歌",
                    icon: TbMusic,
                    description:
                    "歌うことは私の大切な趣味の一つです。リラックスや集中力の向上につながり、ソフトウェア開発との良いバランスを保っています。"
                },
                {
                    title: "料理と創造性",
                    icon: TbChefHat,
                    description:
                    "料理を通じて忍耐力や細部への注意、継続的な試行錯誤を学び、それらをソフトウェア開発にも活かしています。"
                },
                {
                    title: "言語と異文化",
                    icon: TbWorld,
                    description:
                    "現在日本語を学習中です。異文化や新しい技術、書籍、オンラインコミュニティを通して知識を広げることを楽しんでいます。"
                }
            ],
            languages: [
                {
                    language: "英語",
                    proficiency: "業務レベル"
                },
                {
                    language: "ヒンディー語",
                    proficiency: "ネイティブ"
                },
                {
                    language: "ベンガル語",
                    proficiency: "ネイティブ"
                },
                {
                    language: "日本語",
                    proficiency: "初級（JLPT N5）"
                }
            ],
            certifications: [
                {
                    title: "Applied AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/cxq5gafs8e",
                    image: "/images/certs/1.jpg"
                },
                {
                    title: "AI Foundations",
                    provider: "OpenAI",
                    date: "June 21, 2026",
                    url: "https://academy.openai.com/home/certificate/zz2fnm47qb",
                    image: "/images/certs/2.jpg"
                },
                {
                    title: "AI For Everyone",
                    provider: "DeepLearning.AI",
                    date: "March 26, 2026",
                    url: "https://www.coursera.org/account/accomplishments/verify/30G7WVF7XUE0",
                    image: "/images/certs/3.jpeg"
                },
                {
                    title: "Introduction to Git and GitHub",
                    provider: "Google",
                    date: "August 26, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/UX8XC6HVSQU6",
                    image: "/images/certs/4.jpeg"
                },
                {
                    title: "Introduction to Data Analytics",
                    provider: "IBM",
                    date: "April 13, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/JXACTK5XY6L3",
                    image: "/images/certs/6.jpg"
                },
                {
                    title: "Introduction to Back-End Development",
                    provider: "Meta",
                    date: "March 11, 2024",
                    url: "https://www.coursera.org/account/accomplishments/verify/87SUDH8K7DVP",
                    image: "/images/certs/7.jpg"
                },
                {
                    title: "Python (Basic)",
                    provider: "HackerRank",
                    date: "September 30, 2023",
                    url: "https://www.hackerrank.com/certificates/31f77a188bb4",
                    image: "/images/certs/5.png"
                },
                {
                    title: "Using Python to Interact with the Operating System",
                    provider: "Google",
                    date: "July 1, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/LB7Q2FTA4H64",
                    image: "/images/certs/8.jpg"
                },
                {
                    title: "Introduction to Cybersecurity Tools & Cyberattacks",
                    provider: "IBM",
                    date: "June 17, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/VAZPAMMY5XGS",
                    image: "/images/certs/9.jpg"
                },
                {
                    title: "Programming with Python: Introduction for Beginners",
                    provider: "upGrad",
                    date: "April 24, 2023",
                    url: "https://upgrad.verification.givemycertificate.com/v/e39837e5-8e35-4156-ad0a-33cf62632ca8",
                    image: "/images/certs/10.png"
                },
                {
                    title: "Data Analysis Using Python",
                    provider: "University of Pennsylvania",
                    date: "March 9, 2023",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/11.jpg"
                },
                {
                    title: "Technical Support Fundamentals",
                    provider: "Google",
                    date: "December 21, 2022",
                    url: "https://www.coursera.org/account/accomplishments/verify/9ZF6F9Z3MUKW",
                    image: "/images/certs/12.jpg"
                },
            ]
        },
        cta: "認証を確認",
        carouselCta: {
            next: "次",
            prev: "前"
        }
    },
    about: {
        tagline: "コードの裏側",
        heading: "私について",
        narration: () => (
            <>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    私は
                    <strong className="font-medium text-[var(--foreground)]">
                    スケーラブルなAPI、クラウドネイティブアプリケーション、モダンなバックエンドシステム
                    </strong>
                    の開発を専門とするバックエンドソフトウェアエンジニアです。
                    現在、
                    <span className="text-[var(--accent-cyan)]">
                    情報技術修士（MCA）
                    </span>
                    を
                    <strong className="font-medium text-[var(--foreground)]">
                    マニパル大学ジャイプール校
                    </strong>
                    で学びながら、
                    <strong className="font-medium text-[var(--foreground)]">
                    信頼性の高いソフトウェア
                    </strong>
                    を
                    <span className="text-[var(--accent-cyan)]">Python</span>、
                    <span className="text-[var(--accent-cyan)]">Django</span>、
                    <span className="text-[var(--accent-cyan)]">FastAPI</span>、
                    <span className="text-[var(--accent-cyan)]">
                    モダンなWeb技術
                    </span>
                    を用いて開発しています。
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    私は
                    <strong className="font-medium text-[var(--foreground)]">
                    バックエンドシステムの設計
                    </strong>
                    において、
                    <span className="text-[var(--accent-cyan)]">保守性</span>、
                    <span className="text-[var(--accent-cyan)]">セキュリティ</span>、
                    <span className="text-[var(--accent-cyan)]">拡張性</span>
                    を重視しています。
                    REST APIの開発、サードパーティサービスとの連携、クラウドへのデプロイなどを通じて、
                    <span className="text-[var(--accent-cyan)]">
                    クリーンで信頼性の高いコード
                    </span>
                    を書き、実社会の課題を解決することを目指しています。
                </p>

                <p className="font-sans text-[15px] leading-relaxed text-[var(--text-muted)] sm:text-[16px] max-w-2xl">
                    バックエンド開発に加えて、
                    <span className="text-[var(--accent-cyan)]">Unity</span>、
                    <span className="text-[var(--accent-cyan)]">Blender</span>、
                    <span className="text-[var(--accent-cyan)]">ゲーム開発</span>
                    を個人的なプロジェクトとして学んでいます。
                    さまざまな技術分野を学び続けることで、技術力だけでなく創造的な視点も活かしたソフトウェア開発を目指しています。
                </p>
            </>
        ),
        factCards: [
            {
                id: "education",
                type: "学歴",
                heading: "情報技術修士(MCA)",
                para: "マニパル大学ジャイプール校（在学中）",
            },
            {
                id: "location",
                type: "所在地",
                heading: "インド・コルカタ",
                para: "リモート・ハイブリッド・海外転居可能な職種に対応",
            },
            {
                id: "current-focus",
                type: "現在の専門分野",
                heading: "バックエンドエンジニアリング",
                para: "",
                items: ["Python", "Django", "FastAPI", "REST APIs", "Cloud"]
            },
            {
                id: "beyond-coding",
                type: "コードのその先",
                heading: "",
                para: "",
                items: [
                    "日本語",
                    "ゲーム開発",
                    "音楽",
                    "3Dモデリング",
                    "AI"
                ]
            },
        ],
    },
    project: {
        title: "ショーケース",
        subtitle: "制作実績・情熱",
        para: "ソフトウェア開発 • AI • 音楽 • クリエイティブ • 資格・認定",
        filters: [
            "注目",
            "ソフトウェア",
            // "AI",
            // "音楽",
            "クリエイティブ",
            "すべて",
        ],
        projects: [
            {
                id: 1,
                title: "Apearenz Webプラットフォーム",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/apearenz.png",
                source: "/images/projects/apearenz.png",
                description:
                "Next.jsを用いてモダンなシングルページの企業向けWebサイトを開発・公開しました。Docker、Nginx、商用環境の構築を行い、レスポンシブ対応、パフォーマンス、デプロイメントワークフローの最適化を実現しました。",
                link: "https://apearenz.com/",
                linkText: "Webサイトを見る",
                featured: true,
            },

            {
                id: 2,
                title: "Project Katalyse AI",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/katalyse.jpg",
                source: "/images/projects/katalyse.jpg",
                description:
                "Shopifyと連携したAIチャットウィジェットを開発・保守しました。商品検索や顧客対応を支援する機能を実装し、バックエンドAPI、Shopify GraphQL連携、Looker Studioによるユーザー行動およびビジネス指標の可視化を担当しました。",
                featured: true,
            },

            {
                id: 3,
                title: "Sri Ramanujavani",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/sriramanujavani.png",
                source: "/images/projects/sriramanujavani.png",
                description:
                "安全な管理画面、動的コンテンツ管理、CRUD機能を備えたフルスタックCMS（コンテンツ管理システム）を開発しました。Ubuntu上でApache2を利用した本番環境へのデプロイも担当しました。",
                link: "https://sriramanujavani.com/",
                linkText: "Webサイトを見る",
                featured: true,
            },

            {
                id: 4,
                title: "Dhanwise Fintech",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/dhanwise.png",
                source: "/images/projects/dhanwise.png",
                description:
                "認定ファイナンシャルアドバイザーRaman Khandelwal氏と利用者をつなぐフィンテックプラットフォームを開発しました。型安全なフロントエンドアーキテクチャを採用し、高品質なユーザー体験を実現しました。",
                link: "https://dhanwise.com/",
                linkText: "Webサイトを見る",
            },

            {
                id: 5,
                title: "ITC Sunrise & PujaApp バーチャルセルフィー",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/sunrise.png",
                source: "/images/projects/sunrise.png",
                description:
                "大規模なドゥルガー・プージャ文化イベント向けに、AIを活用したバーチャルセルフィープラットフォームを3日間で開発しました。フロントエンド、Firebaseバックエンド、Firestoreデータベース、管理画面、Dezgo APIによる背景除去、画像補正機能、Google Tag Manager連携を実装し、Firebase Hostingへ公開しました。",
                link: "https://thepuja.app/",
                linkText: "Webサイトを見る",
                featured: true,
            },

            {
                id: 6,
                title: "BIMS スタートアップ・カタリスト",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/bims_startup_catalysts.png",
                source: "/images/projects/bims_startup_catalysts.png",
                description:
                    "Djangoを用いて公式アントレプレナーシップ・セル（起業支援組織）のプラットフォームを開発しました。メンター管理、卒業生管理、貢献履歴管理、ブログ承認ワークフローなどの管理機能を実装し、本システムはIITボンベイ E-Cellコンテストにおいて大学を代表するプロジェクトとして活用されました。開発期間はわずか3日間でした。",
            },
            {
                id: 7,
                title: "Locope SaaSプラットフォーム",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/locope.png",
                source: "/images/projects/locope.png",
                description:
                    "管理者、ジムオーナー、トレーナー、スタッフ、顧客向けのマルチテナント型フィットネス・EC SaaSプラットフォームを設計・開発しました。ロールベースアクセス制御（RBAC）、PhonePe決済連携、Flutterアプリ向けREST API、コミュニティ機能、QRコード出席管理、予約管理、分析ダッシュボードなどを実装しました。",
                featured: true,
            },
            {
                id: 8,
                title: "Bruberry Café Webサイト",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/bruberry.png",
                source: "/images/projects/bruberry.png",
                description:
                    "メニュー、カテゴリー、ヒーローセクション、プロモーションバナー、Webサイト画像を管理できる専用管理画面付きのカフェWebサイトを開発しました。スタッフが効率的にコンテンツを更新できる使いやすいCMSを構築し、レスポンシブで統一感のあるユーザー体験を実現しました。",
            },
            {
                id: 9,
                title: "MyActivt",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/activt.png",
                source: "/images/projects/activt.png",
                description:
                    "フィットネス機器ブランド向けのレスポンシブなマーケティングWebサイトを開発しました。製品紹介、ブランドストーリー、リード獲得を目的としたランディングページ、商品紹介セクション、プロモーションコンテンツ、モバイル対応レイアウトを実装し、ブランド認知度とユーザーエンゲージメントの向上に貢献しました。",
            },
            {
                id: 10,
                title: "ActivCMS",
                category: "Software",
                categoryLabel: "ソフトウェア",
                type: "image",
                thumbnail: "/images/projects/activcms.png",
                source: "/images/projects/activcms.png",
                description:
                    "テンプレートから不動産Webサイトを作成・管理できるCMSプラットフォームの開発に携わりました。Django、Bootstrap 5、AJAXを使用して動的セクション管理、コンテンツ編集、画像管理、テンプレートカスタマイズ機能を実装しました。また、ActivCRMとの連携により、不動産情報や企業データを自動同期する仕組みを構築しました。",
                featured: true,
            },
            {
                id: 11,
                title: "Precision Works カタログ",
                category: "Creative",
                categoryLabel: "クリエイティブ",
                type: "image",
                thumbnail: "/images/projects/precision_catalog.png",
                source: "/images/projects/precision_catalog.png",
                description:
                    "産業機械メーカー向けのマーケティングカタログを制作しました。技術仕様を分かりやすく魅力的なレイアウトへ再構成し、Canvaを用いて製品紹介ページ、ブランド素材、販促ページをデザインしました。一貫性、可読性、そしてプロフェッショナルな品質を重視したデザインを実現しました。"
            },
            {
                id: 12,
                title: "Padrone カタログ・ブランドアイデンティティ",
                category: "Creative",
                categoryLabel: "クリエイティブ",
                type: "image",
                thumbnail: "/images/projects/padrone_catalog.png",
                source: "/images/projects/padrone_catalog.png",
                description:
                    "産業機械メーカー『Padrone』のブランドアイデンティティとマーケティングカタログを制作しました。企業ロゴ、ブランド素材、製品カタログのデザインを担当し、技術的な製品情報を分かりやすく視覚的に伝える統一感のあるブランド体験を構築しました。"
            },
            {
                id: 13,
                title: "PlanTech Engineering Services カタログ",
                category: "Creative",
                categoryLabel: "クリエイティブ",
                type: "image",
                thumbnail: "/images/projects/plantech_catalog.png",
                source: "/images/projects/plantech_catalog.png",
                description:
                    "エンジニアリングコンサルティング企業向けのコーポレートマーケティングカタログを制作しました。サービス内容、技術力、プロジェクト実績を分かりやすく紹介するレイアウトやブランドデザイン、プレゼンテーション資料を作成し、複雑な技術情報を視覚的に伝わりやすいマーケティング資料へと仕上げました。"
            }

            // {
            //     id: 3,

            //     title: "Perfect Cover Song",

            //     description:
            //     "Acoustic singing cover.",

            //     category: "Music",

            //     type: "audio",

            //     thumbnail: "/showcase/song-cover.jpg",

            //     source: "/audio/perfect.mp3",
            // },
            // {
            //     id: 4,

            //     title: "Portfolio Walkthrough",

            //     description:
            //     "Video demonstration of portfolio.",

            //     category: "Software",

            //     type: "video",

            //     thumbnail: "/showcase/video-thumb.jpg",

            //     source: "/videos/demo.mp4",
            // },
        ] satisfies ShowcaseItem[]
    },
    contact: {
        tagline: "お問い合わせ",
        heading: "新たな挑戦へ",

        intro:
            "スケーラブルなシステム、クラウドネイティブアプリケーション、信頼性の高いデジタルプロダクトの開発に取り組むバックエンドソフトウェアエンジニアをお探しでしたら、ぜひお気軽にご連絡ください。新しい機会や挑戦的なプロジェクト、革新的なアイデアについてお話しできることを楽しみにしています。",

        availability:
            "現在、正社員、リモートワーク、フリーランス案件、および海外転居を伴うポジションを積極的に募集しています。",

        cta: {
            email: "メールを送る",
            linkedin: "LinkedInでつながる",
        },

        quote: "すべての素晴らしいプロジェクトは、一つの会話から始まります。",
    }
};