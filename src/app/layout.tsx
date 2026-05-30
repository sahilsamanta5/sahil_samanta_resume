import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    "Software Engineer specializing in Python, Django, React, AI-powered applications, full-stack web development, and scalable business solutions. Explore professional projects, technical expertise, and creative work.",

  keywords: [
    "Sahil Samanta",
    "Software Engineer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI Developer",
    "Web Developer",
    "JavaScript Developer",
    "TypeScript Developer",
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
      "Software Engineer specializing in Python, Django, React, AI-powered applications, full-stack web development, and scalable business solutions.",

    images: [
      {
        url: "/og-image.jpg",
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
      "Software Engineer specializing in Python, Django, React, AI-powered applications, full-stack web development, and scalable business solutions.",
    images: ["/og-image.jpg"],
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
