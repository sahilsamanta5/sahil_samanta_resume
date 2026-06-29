import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilsamanta.vercel.app"),

  title: {
    default: "Sahil Samanta | Software Engineer",
    template: "%s | Sahil Samanta",
  },
  description:
  "Software Engineer specializing in Python, Django, React, TypeScript, and full-stack web development. Experienced in building SaaS platforms, content management systems, business applications, and modern web experiences.",
  keywords: [
    "Sahil Samanta",
    "Software Engineer",
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "SaaS Developer",
    "CMS Developer",
    "Portfolio",
    "Software Development",
  ],
  authors: [
    {
      name: "Sahil Samanta",
      url: "https://sahilsamanta.vercel.app",
    },
  ],

  creator: "Sahil Samanta",
  publisher: "Sahil Samanta",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilsamanta.vercel.app",
    siteName: "Sahil Samanta Portfolio",
    title: "Sahil Samanta | Software Engineer",
    description:
    "Software Engineer specializing in Python, Django, React, TypeScript, and full-stack web development. Experienced in building SaaS platforms, content management systems, business applications, and modern web experiences.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Samanta Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sahil Samanta | Software Engineer",
    description:
    "Software Engineer specializing in Python, Django, React, TypeScript, and full-stack web development. Experienced in building SaaS platforms, content management systems, business applications, and modern web experiences.",
    images: ["/og-image.png"],
  },

  category: "Technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
