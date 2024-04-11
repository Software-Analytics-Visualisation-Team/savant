'use client'
import { NextUIProvider } from "@nextui-org/react";
import CustomNavbar from "../components/CustomNavbar";

export default function Home() {
  return (
    <NextUIProvider>
      <CustomNavbar/>
       <main className="flex min-h-screen flex-col items-center justify-between p-24">

       <h2>PROJECTS PAGE</h2>
    </main>
    </NextUIProvider>
  );
}
