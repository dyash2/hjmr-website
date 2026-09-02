import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "AT-ONE | Sparkles Your Home..! — Premium Cleaning Solutions, Made in India",
  description:
    "AT-ONE spin mops, buckets and cleaning accessories — manufactured in Vasai, Maharashtra and supplied wholesale to distributors and retailers across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col bg-[var(--color-background)] antialiased">
        <TopBar />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
