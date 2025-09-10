import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import NavLinks from "@/components/layout/NavBar";
import { companyInfo } from "@/data/companyInfo";
import LoadingProvider from "@/context/LoadingProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const bord = localFont({
  src: "../../public/fonts/Bord.ttf",
  variable: "--font-bord",
});

export const metadata: Metadata = {
  title: companyInfo.sName,
  description: companyInfo.name,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bord.variable} antialiased`}>
        <LoadingProvider>
          <NavLinks />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
