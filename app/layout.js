import { Inter } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import PopUp from "@/components/PopUp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shohag | Designer & Full Stack Developer",
  descripton: "Hi, I'm Shohag — a Designer and Full Stack Developer crafting beautiful, high-performance web experiences. Explore my work, skills, and projects.",
  keywords: [
    "Shohag",
    "Full Stack Developer",
    "Web Designer",
    "UI/UX Designer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Shohag" }],
  creator: "Shohag",
  metadataBase: new URL("https://shohag-work.vercel.app/"), // 🔁 Replace with your actual domain
  openGraph: {
    title: "Shohag | Designer & Full Stack Developer",
    description:
      "Designing and building modern web experiences. Check out Shohag's portfolio.",
    url: "https://shohag-work.vercel.app/",
    siteName: "Shohag Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://shohag-work.vercel.app/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'My Website Open Graph Image',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shohag | Designer & Full Stack Developer",
    images: ['https://shohag-work.vercel.app/og-image.png'],
    description:
      "Designing and building modern web experiences. Check out Shohag's portfolio.",
    creator: "@shohag4y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="976e2ffc-36db-4be9-b4a0-68ee783859d8"
        ></Script>
      </body>
    </html>
  );
}
