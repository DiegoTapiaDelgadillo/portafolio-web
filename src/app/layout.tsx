import { Syne } from "next/font/google";
import { Header } from "./../../src/components/shared/Header";
import "./globals.css";
import { Footer } from "@/components/shared/Footer";
import { DarkModeButton } from "@/components/shared/DarkModeButton";

const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { to: "#About", text: "About" },
    { to: "#Skills", text: "Skills" },
    { to: "#Projects", text: "Projects" },
    { to: "#Contact", text: "Contact" },
  ];

  return (
    <html lang="en">
      <head>
        <title>Diego Tapia</title>
        <link rel="icon" href="/svg/DT.svg" type="image/svg-xml" />
      </head>
      <body className={` bg-neutral-100 dark:bg-neutral-900 ${syne.className}`}>
        <Header navLinks={navLinks} />
        <DarkModeButton />
        {children}
        <Footer navLinks={navLinks} />
      </body>
    </html>
  );
}
