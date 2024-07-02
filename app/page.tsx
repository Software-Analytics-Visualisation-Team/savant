'use client';
import Image from 'next/image';
import MichelPortrait from '../public/portraits/michel.jpeg';
import LinaPortrait from '../public/portraits/lina.jpeg';
import SatrioPortrait from '../public/portraits/satrio.jpeg';
import FilipPortrait from '../public/portraits/filip.jpeg';
import SavantLogo from '../public/savant.png';
import { NextUIProvider } from '@nextui-org/react';
import PersonCard from './components/PersonCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const menuItems = [
  { name: 'Industrial Projects', route: './industrial-projects' },
  { name: 'Academic Projects', route: './projects' },
  { name: 'Positions', route: './openings' },
  { name: 'Contact us', route: './contacts' }
];

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar menuItems={menuItems} pageSelected="" />
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
              <div className="text-5xl font-bold text-red-600">
                Software Analytics & Visualisation Team
              </div>
              <div className="">
                <p className="text-3xl text-black">
                  Part of the Software Engineering and Technology cluster
                </p>
                {/* <p className="italic text-black">scalable and maintainable software</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center p-6 lg:flex">
          <div className="text-3xl flex justify-center font-bold text-red-600">
            Our Goal
          </div>
          <div className="text-xl text-black">
            In the dynamic landscape of software engineering, we are a group of
            passionate researchers collaborating to push the boundaries of
            knowledge. Our goal is twofold: Software Architecture: Delve into
            the intricate design and organization of software systems. Our focus
            spans the fundamental properties of systems, encompassing elements,
            relationships, and the principles that guide design and evolution.
            By understanding the interplay of structure, behavior, execution,
            and analysis, we pave the way for robust and scalable software
            architectures. Software Analytics: Armed with data-driven insights,
            we explore software quality, reliability, and performance.
            Leveraging techniques from machine learning and data science, we
            unravel patterns, identify bottlenecks, and enhance decision-making.
            Our work bridges the gap between theory and practice, ensuring that
            software-intensive systems thrive in an ever-evolving digital
            landscape. Together, we want to champion innovation, foster
            collaboration, and contribute to the advancement of software
            engineering.
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 justify-center font-sans">
          <div className="text-3xl text-red-600 font-bold w-full flex justify-center">
            Our Team
          </div>
          <PersonCard
            name="Michel R.V. Chaudron"
            position="Full Professor"
            image={MichelPortrait.src}
            quote="Research interests: Software Architecture, Software Design, Software Modeling with a special focus on UML, Software Composition and knowledge sharing, use of AI (Artificial Intelligence) for Software Development."
            personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
          />
          <PersonCard
            name="Lina Ochoa Venegas"
            position="Assistant Professor"
            image={LinaPortrait.src}
            quote="I am interested on studying the phenomena behind software evolution, maintenance, and analysis, and providing tools that support related processes."
            personalPage="https://research.tue.nl/en/persons/lina-ochoa-venegas"
          />
          <PersonCard
            name="Satrio Adi Rukmono"
            position="PhD Candidate"
            image={SatrioPortrait.src}
            quote="Research interests: Application of Large Language Models (LLMs) in the field of Software Architecture, Software Visualisation"
            personalPage="https://research.tue.nl/en/persons/satrio-rukmono"
          />
          <PersonCard
            name="Filip Zamfirov"
            position="PhD Candidate"
            image={FilipPortrait.src}
            quote="Research interests: Software Architecture Erosion, Software Visualisation, Static & Dynamic Analysis"
            personalPage="https://research.tue.nl/en/persons/filip-zamfirov"
          />
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
