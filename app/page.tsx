'use client';
import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { FelipeCard, FilipCard, JacobCard, KevinCard, LinaCard, MerelCard, MichelCard, SatrioCard, SupunCard } from './person-constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar pageSelected="" />
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
                Software Architecture Analytics & Visualisation Team
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
        <div className="flex flex-col items-center p-6 w-[90%]">
          <div className="text-3xl flex justify-center font-bold text-red-600 mb-3">
            Our Goal
          </div>
          <div className="text-xl text-black" style={{ textAlign: 'justify' }}>
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

        <div className="justify-center font-sans w-[90%]">
          <div className="text-3xl text-red-600 font-bold w-full flex mb-3 justify-center">
            Our Team
          </div>
          <div className="flex flex-row flex-wrap gap-2 justify-center px-8 pb-8 mx-auto">
            <MichelCard />
            <LinaCard />
            <JacobCard />
            <SatrioCard />
            <FilipCard />
            <MerelCard />
            <FelipeCard />
            <KevinCard />
            <SupunCard />
          </div>
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
