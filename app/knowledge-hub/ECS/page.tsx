'use client';
import Image from 'next/image';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { useEffect, useRef } from 'react';

import { KevinContact } from '@/app/person-constants';
import { MENU_ITEMS as menuItems } from '../../constants';

import ECSImage from '../../../public/knowledge-hub/ECS/ECS.jpg';
import ECSHTML from '../../../public/knowledge-hub/ECS/paper.html';


export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  // Auto-resize iframe height after it loads (same-origin, so allowed)
  useEffect(() => {
    const ifr = iframeRef.current;
    if (!ifr) return;

    const handleLoad = () => {
      try {
        const doc = ifr.contentDocument || ifr.contentWindow?.document;
        if (!doc) return;
        // compute height using scrollHeight of the page
        const height = Math.max(
          doc.documentElement?.scrollHeight || 0,
          doc.body?.scrollHeight || 0
        );
        ifr.style.height = `${height}px`;
      } catch (e) {
        // If cross-origin (shouldn't be for /public), skip
        console.warn('Could not auto-resize iframe:', e);
      }
    };

    ifr.addEventListener('load', handleLoad);
    return () => ifr.removeEventListener('load', handleLoad);
  }, []);


  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />

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
          
          <iframe
            ref={iframeRef}
            src={ECSHTML.src}
            title="Paper"
            style={{
              width: '100%',
              height: '80vh', // initial height; will auto-resize
              border: 'none',
              background: 'transparent',
            }}
          />

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
