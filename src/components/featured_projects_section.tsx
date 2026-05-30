"use client";

import ProjectCard, { ProjectProps } from "./cards/featured_projects";

// ── PROJECT DATA ──
const projectsData: ProjectProps[] = [
  {
    title: "Apearenz Web Platform",
    role: "Frontend Architect",
    description: "Architected a high-performance single-page application for a corporate client. Engineered a scalable, custom user interface to meet strict specifications, and optimized the build pipeline by containerizing the application with Docker and configuring Nginx for secure domain routing.",
    techStack: ["Next.js", "TypeScript", "Docker", "Nginx", "Tailwind CSS"],
    mediaType: "image",
    mediaSrc: "/images/projects/apearenz.png", // Add your image to public/images/projects/
    url: "https://apearenz.com/", // Add URL if live
    reversed: false,
  },
  {
    title: "Project Katalyse AI",
    role: "Full-Stack Engineer",
    description: "Engineered a scalable, mobile-responsive e-commerce chat widget designed for seamless integration across Shopify storefronts. Developed optimized backend APIs to power dynamic chat-based purchasing and algorithmic recommendation engines, while configuring Looker Studio dashboards to track critical conversion metrics.",
    techStack: ["React.js", "Redux", "REST APIs", "Tailwind CSS", "Analytics"],
    mediaType: "image", 
    mediaSrc: "/images/projects/katalyse.jpg", 
    url: "", 
    reversed: true, // Flips layout to the right
  },
  {
    title: "Sri Ramanujavani",
    role: "Full-Stack Python Engineer",
    description: "Developed a full-stack content management platform featuring robust CRUD operations and a secure, interactive administrative dashboard to streamline data entry. Successfully configured and deployed the production environment on an Ubuntu server utilizing Apache2 to ensure optimal system stability.",
    techStack: ["Python", "Django", "JavaScript", "Apache2", "Ubuntu"],
    mediaType: "image",
    mediaSrc: "/images/projects/sriramanujavani.png",
    url: "https://sriramanujavani.com/",
    reversed: false,
  },
  {
    title: "Dhanwise Fintech",
    role: "Frontend Engineer",
    description: "Engineered a high-performance financial technology SPA designed to connect users with verified advisors. Architected a strictly typed frontend infrastructure to ensure long-term maintainability, delivering an optimized, cross-device user experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    mediaType: "image",
    mediaSrc: "/images/projects/dhanwise.png",
    url: "https://dhanwise.com/",
    reversed: true, 
  },
  {
    title: "Sunrise Virtual Selfie",
    role: "Web Application Developer",
    description: "Developed a responsive virtual photo booth enabling remote users to generate customized, interactive images. Implemented automated framing and processing logic via AI integration to ensure instant, high-quality rendering for a high-traffic community initiative.",
    techStack: ["HTML/CSS/JS", "Firebase", "Claude AI", "Dezgo"],
    mediaType: "image",
    mediaSrc: "/images/projects/sunrise.png",
    url: "https://thepuja.app/",
    reversed: false,
  },
  {
    title: "BIMS Startup Catalysts",
    role: "Full-Stack Developer",
    description: "Engineered a dynamic, responsive web platform for the college Entrepreneurship Cell. Architected a custom Django administrative dashboard for real-time management of team structures, mentor networks, and user contributions. The platform served as the primary digital showcase during a core presentation at IIT Bombay.",
    techStack: ["Django", "MySQL", "JavaScript", "Ubuntu", "VPS"],
    mediaType: "image",
    mediaSrc: "/images/projects/bims_startup_catalysts.png",
    url: "",
    reversed: true,
  },
  {
    title: "Locope SaaS Platform",
    role: "Backend Architect & Full-Stack Developer",
    description: "Architected a comprehensive multi-tenant SaaS platform for fitness centers, implementing strict role-based access control (RBAC) for administrators, gym owners, and staff. Engineered a robust Django backend to support a custom social community feed, an approval-based e-commerce marketplace, and dynamic class-booking with PhonePe integration. Delivered data-rich analytical dashboards for revenue tracking and a QR-based attendance system bridging physical and digital customer management.",
    techStack: ["Django", "MySQL", "JavaScript", "Bootstrap 5", "Payment APIs"],
    mediaType: "image",
    mediaSrc: "/images/projects/locope.png", // Add placeholder image to your public folder
    url: "", 
    reversed: false, // Alternate this to 'true' depending on where you place it in the list
  }
];

export default function FeaturedProjects() {
  return (
    <section 
      id="projects" 
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-6 py-24 md:px-16 lg:px-24"
    >
      
      {/* ── Background Decorative Elements ── */}
      <div className="absolute top-0 left-1/2 h-[1px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent opacity-50" />
      <div className="pointer-events-none absolute left-[10%] top-[40%] z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-cyan)] opacity-[0.02] blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-8 bg-[var(--accent-cyan)]" />
            <span className="font-sans text-[11px] font-medium tracking-[0.16em] text-[var(--accent-cyan)] uppercase">
              Selected Works
            </span>
          </div>
          <h2 className="font-serif text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl leading-[1.1]">
            Featured Projects.
          </h2>
        </div>

        {/* ── Projects List ── */}
        <div className="flex flex-col gap-32">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}