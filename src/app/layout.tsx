import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Trophies, Awards & Medals, Nugegoda`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

  export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
    <html
      lang = "en"
      className = {`${sans.variable} h-full antialiased`}
    >
  <body className="grain min-h-full flex flex-col bg-ink text-ivory">
    <SmoothScroll>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </SmoothScroll>
  </body>
    </html >
  );
  }
