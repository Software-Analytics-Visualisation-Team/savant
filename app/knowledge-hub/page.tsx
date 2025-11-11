'use client';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import ECSImage from '../../public/knowledge-hub/ECS/ECS.jpg'

export default function Home() {
  return (
    <NextUIProvider>
      <Navbar pageSelected="" />
      <main className="flex min-h-screen flex-col items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4 p-4 pb-0">
          Knowledge Hub
        </h1>
        <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit lg:flex pb-12">
          <ToolCard
            href={"./knowledge-hub/ECS"}
            toolName={'Entity-Component-System (ECS) Pattern'}
            imageSource={ECSImage.src}
            toolDescription={'The Entity-Component-System (ECS) pattern is a software architectural pattern that is widely used in game development and simulations. It emphasizes composition over inheritance, allowing for more flexible and modular designs.'}
            toolContact={'Kevin Bouwmeester'}
            funding={""}
            status={''}
          />
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
