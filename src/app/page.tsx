"use client";

import { useState } from "react";
import Sidebar from "../components/layout/header";
import Hero from "../components/hero";
import About from "../components/about";
import FeaturedProjects from "../components/featured_projects_section";
import ProfileTabs from "../components/profile";
import ProjectsSection from "../components/projects";
import ShowcaseSection from "../components/projects";
import ContactSection from "../components/ContactSection";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      
      <main 
        className={`flex-1 transition-all duration-300 ease-out ${collapsed ? "ml-[64px]" : "ml-[240px]"} max-sm:ml-0`}
      >
        {/* Drop the Hero component right here! */}
        <Hero />
        <ProfileTabs />
        <About />
        <ShowcaseSection />
        <ContactSection />
        <LanguageSwitcher />
      </main>
    </div>
  );
}