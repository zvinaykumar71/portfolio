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

export const metadata = {
  title: "Vinay Kumar | Full Stack Developer Portfolio",
  description: "Professional portfolio of Vinay Kumar, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my projects, skills, and experience.",
  keywords: [
    "Vinay Kumar",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "JavaScript Developer",
    "Node.js Developer"
  ],
  authors: [{ name: "Vinay Kumar", url: "https://github.com/zvinaykumar" }],
  creator: "Vinay Kumar",
  publisher: "Vinay Kumar",
  openGraph: {
    title: "Vinay Kumar | Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing my projects and development skills",
    url: "https://portfolio-five-ruby-10.vercel.app/",
    siteName: "Vinay Kumar Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vinay Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Kumar | Full Stack Developer",
    description: "Check out my developer portfolio and projects",
    creator: "@vinayofficial71",
    images: ["https://yourportfolio.com/twitter-card.png"],
  },
  icons: {
    icon: "/favicon2.ico",
    shortcut: "/favicon2-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#2563eb",
  metadataBase: new URL("https://portfolio-five-ruby-10.vercel.app/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
