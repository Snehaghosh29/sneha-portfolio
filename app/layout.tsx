import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Static Layout",
  description: "This layout does not render children.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto relative z-0">
          {/* Background */}
          <div className="z-[-10]  fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#34a391_20%,transparent)]"></div>

          {/* Page Content */}
          <div className="leading-relaxed text-slate-200 selection:bg-teal-300 selection:text-teal-900">
            {children}
           
          </div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
