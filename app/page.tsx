'use client'
import Image from "next/image";
import MichelPortrait from "../public/portraits/michel.jpeg"
import LinaPortrait from "../public/portraits/lina.jpeg"
import SatrioPortrait from "../public/portraits/satrio.jpeg"
import FilipPortrait from "../public/portraits/filip.jpeg"
import SavantLogo from "../public/savant.png"
import { NextUIProvider } from "@nextui-org/react";
import PersonCard from "./components/PersonCard";


export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">

        <div className="z-10 max-w-5xl w-screen items-center justify-between lg:flex pb-12">

          <div className="flex flex-wrap items-center justify-center w-full pt-8 ">
            <Image
              src={SavantLogo}
              alt="Savant Logo"
              className="min-w-250"
              width={250}
              height={250}
              priority
            />
            <div className="grid justify-center grid-cols-1 pl-2">
              <div className="text-3xl font-sans text-black">Software Architecture Visualisation & Analysis Team</div>
              <div className="grid grid-cols-1">
                <p className="text-black">Research team part of the Software Engineering and Technology cluster</p>
                <p className="italic text-black">scalable and maintainable software</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 lg:flex">
        <div className="text-3xl text-red-600 pb-3">Our Goal</div>
        <div className="text-xl text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className="text-3xl text-red-600 pb-0">Our Team</div>
        <div className="flex flex-row flex-wrap gap-2 justify-center font-sans pt-5 pb-12">
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
        <div className="flex flex-col items-end h-2 w-full pt-3 pb-8 pr-3 lg:flex">
          <div className="text-small">Part of the Software Engineering and Technology Cluster • Eindhoven University of Technology • 2024</div>
        </div>
      </main>
    </NextUIProvider>
  );
}
