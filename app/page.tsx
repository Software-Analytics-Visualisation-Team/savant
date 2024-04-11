'use client'
import Image from "next/image";
import MichelPortrait from "../public/portraits/michel.jpeg"
import LinaPortrait from "../public/portraits/lina.jpeg"
import SatrioPortrait from "../public/portraits/satrio.jpeg"
import FilipPortrait from "../public/portraits/filip.jpeg"
import SavantLogo from "../public/savant.png"
import { NextUIProvider, linkAnchorClasses } from "@nextui-org/react";
import CustomNavbar from "./components/CustomNavbar";
import PersonCard from "./components/PersonCard";


export default function Home() {
  return (
    <NextUIProvider>
      <CustomNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">

        <div className="z-10 max-w-5xl w-screen items-center justify-between lg:flex">

          <div className="left-0 top-0 flex w-full pb-6 pt-8 ">
            <Image
              src={SavantLogo}
              alt="Vercel Logo"
              className="dark:invert "
              width={300}
              height={300}
              priority
            />
            <div className="grid grid-cols-1">
              <div className="text-3xl font-sans">Software Architecture Visualisation & Analysis Team</div>
              <div className="grid grid-cols-1">
                <p className="">Research team part of the Software Engineering and Technology cluster</p>
                <p className="italic">scalable and maintainable software</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl pb-0">Our Team</div>
        <div className="flex flex-row flex-wrap gap-2 justify-center font-sans pb-12">

          <PersonCard name="Michel R.V. Chaudron" 
                      position="Full Prof" 
                      image={MichelPortrait.src} 
                      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                      personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
          />
          <PersonCard name="Lina Ochoa Venegas" 
                      position="Assistant Professor" 
                      image={LinaPortrait.src} 
                      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                      personalPage="https://research.tue.nl/en/persons/lina-ochoa-venegas" 
          />
          <PersonCard name="Satrio Adi Rukmono" 
                      position="PhD Candidate" 
                      image={SatrioPortrait.src} 
                      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                      personalPage="https://research.tue.nl/en/persons/satrio-rukmono" 
          />
          <PersonCard name="Filip Zamfirov" 
                      position="PhD Candidate" 
                      image={FilipPortrait.src} 
                      quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
                      personalPage="https://research.tue.nl/en/persons/filip-zamfirov" 
          />
        </div>
      </main>
    </NextUIProvider>
  );
}
