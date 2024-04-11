import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "./components/CustomNavbar";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TU/e-SET-Savant",
  description: "Website for the Savant group of the SET cluster in TU/e",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="content">
          <CustomNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
