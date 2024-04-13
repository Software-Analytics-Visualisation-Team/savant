'use client'
import Image from "next/image";
import MichelPortrait from "../public/portraits/michel.jpeg"
import LinaPortrait from "../public/portraits/lina.jpeg"
import SatrioPortrait from "../public/portraits/satrio.jpeg"
import FilipPortrait from "../public/portraits/filip.jpeg"
import SavantLogo from "../public/savant.png"
import { NextUIProvider } from "@nextui-org/react";
import PersonCard from "./components/PersonCard";
import { Navbar } from "./components/Navbar"

const menuItems = [
  {name: "Projects", route: "/projects"},
  {name: "Positions", route: "/openings"},
  {name: "Contact us", route: "/contacts"},
];

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar menuItems={menuItems} pageSelected=""/>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">

        <div className="z-10 max-w-7xl w-full items-center justify-between lg:flex pb-12">

          <div className="flex flex-wrap items-center justify-center pt-8 ">
            {/* <Image
              src={SavantLogo}
              alt="Savant Logo"
              className="min-w-250"
              width={250}
              height={250}
              priority
            /> */}
            <div className="justify-center items center pl-4">
              <div className="text-5xl font-bold text-red-600">Software Analytics & Visualisation Team</div>
              <div className="">
                <p className="text-3xl text-black">Research team part of the Software Engineering and Technology cluster</p>
                {/* <p className="italic text-black">scalable and maintainable software</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 lg:flex">
        <div className="text-4xl flex justify-center font-bold text-red-600">Our Goal</div>
        <div className="text-xl text-black">
In the dynamic landscape of software engineering, we are a group of passionate researchers collaborating to push the boundaries of knowledge. Our goal is twofold:
Software Architecture: Delve into the intricate design and organization of software systems. Our focus spans the fundamental properties of systems, encompassing elements, relationships, and the principles that guide design and evolution. By understanding the interplay of structure, behavior, execution, and analysis, we pave the way for robust and scalable software architectures.
Software Analytics: Armed with data-driven insights, we explore software quality, reliability, and performance. Leveraging techniques from machine learning and data science, we unravel patterns, identify bottlenecks, and enhance decision-making. Our work bridges the gap between theory and practice, ensuring that software-intensive systems thrive in an ever-evolving digital landscape.
Together, we want to champion innovation, foster collaboration, and contribute to the advancement of software engineering.</div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-center font-sans">
        <div className="text-4xl text-red-600 font-bold w-full flex justify-center">
          Our Team
          </div>
          <PersonCard name="Michel R.V. Chaudron"
            position="Full Professor"
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
        <div className="flex flex-col items-center h-2 w-full pt-3 pb-12 pr-3 pl-4 lg:flex bg-red-600">
          <div className="text-small">Part of Software Engineering and Technology Cluster • Eindhoven University of Technology • 2024</div>
        </div>
      </main>
    </NextUIProvider>
  );
}
