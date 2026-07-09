"use client";

import Sidebar from "../components/layout/header";

import Hero from "../components/hero";
import About from "../components/about";
import ProfileTabs from "../components/profile";
import ShowcaseSection from "../components/projects";
import ContactSection from "../components/ContactSection";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MobileHeader from "../components/layout/MobileHeader";
import MobileSocial from "../components/layout/MobileSocial";

export default function Home() {

    return (

        <div className="flex min-h-screen bg-[var(--background)] text-[var(--foreground)]">

            <Sidebar />
            <MobileHeader />
            <MobileSocial />

            <main className="flex-1">

                <Hero />

                <About />

                <ProfileTabs />

                <ShowcaseSection />

                <ContactSection />

                <LanguageSwitcher />

            </main>

        </div>

    );

}