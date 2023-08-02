import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/fonts";
import Header from "@/components/Header";
import DraftModeBanner from "@/components/DraftModeBanner";

export const metadata: Metadata = {
  title: "Shikaku Tech",
  description: "Not a shallow copy of Square's Staff website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DraftModeBanner />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
