import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Agentic Personnel - Smart Automation for SMBs",
  description: "We build smart systems that manage repetitive tasks, simplify workflows, and lighten the load for SMBs. Intelligent Systems. Built for Humans. Powered by AI.",
  keywords: "AI automation, smart systems, workflow automation, SMB solutions, business automation, agentic personnel",
  authors: [{ name: "Agentic Personnel" }],
  creator: "Agentic Personnel",
  publisher: "Agentic Personnel",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://agenticpersonnel.com",
    siteName: "Agentic Personnel",
    title: "Agentic Personnel - Smart Automation for SMBs",
    description: "We build smart systems that manage repetitive tasks, simplify workflows, and lighten the load for SMBs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agentic Personnel - Smart Automation for SMBs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Personnel - Smart Automation for SMBs",
    description: "We build smart systems that manage repetitive tasks, simplify workflows, and lighten the load for SMBs.",
    images: ["/og-image.jpg"],
    creator: "@agenticpersonnel",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-theme="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}