import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/HomePage/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import Phone from "@/components/Phone/Phone";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Joy AI",
    absolute: "Joy AI",
  },
  description:
    "Joy AI, a Platform for building Enterprise AI Agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${poppins.className} antialiased bg-gradient-to-r from-[#E0EAFC] to-[#CFDEF3]`}>
        <ClientWrapper>
          {children}
          <Phone />
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
