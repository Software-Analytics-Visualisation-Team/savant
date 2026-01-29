'use client';
import Image from 'next/image';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { useEffect, useMemo, useRef, useState } from 'react';

import { KevinContact } from '@/app/person-constants';

import ECSImage from '../../../public/knowledge-hub/ECS/ECS.jpg';

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const SRC = `${basePath}/knowledge-hub/ECS/ECSPattern - old.html`;
  const [htmlContent, setHtmlContent] = useState<string>("");  
  
  useEffect(() => {
      fetch(SRC)
        .then((res) => res.text())
        .then((data) => setHtmlContent(data))
        .catch((err) => console.error("Error loading HTML:", err));
    }, [])

  return (
    <div>
      <Navbar pageSelected="" />

      <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen" style={{textAlign: 'justify'}}>
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4 pt-4">
            {'Entity-Component-System (ECS) Pattern'}
          </h1>
          <Image
            src={ECSImage.src} // Replace with your actual image URL
            width={0}
            height={0}
            alt="Full-width image"
            style={{ width: 'auto', height: 'auto' }}
          />
          <a href="https://doi.org/10.1016/j.simpat.2020.102243"> 
          Vico: An entity-component-system based co-simulation framework
          </a>     

          <div>
            {/* Inject HTML */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          {/* Contact Section */}
          <div className="border-t mt-4 pt-4">
            <h2 className="text-3xl font-semibold mb-2">Contact</h2>
            <div className="flex flex-col flex-wrap gap-6">
              <KevinContact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
