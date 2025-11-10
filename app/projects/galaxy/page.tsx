'use client';
import Image from 'next/image';
import WorkflowImage from '../../../public/andromeda-workflow.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  ANDROMEDA_PLATFORM_TITLE,
  ANDROMEDA_PLATFORM_DESC,
  ANDROMEDA_PLATFORM_USE_DESC,
  ANDROMEDA_COLLABORATOR_DESC,
  GALAXY_PROJECT_DESC
} from '@/app/constants';
import { FilipContact, MichelContact } from '@/app/person-constants';

// const menuItems = [
//   { name: 'SEiGS 2025', route: '../seigs25' },
//   { name: 'Industrial Projects', route: '../industrial-projects' },
//   { name: 'Academic Projects', route: '../projects' },
//   { name: 'Positions', route: '../openings' },
//   { name: 'Contact us', route: '../contacts' }
// ];
import { MENU_ITEMS as menuItems } from '../../constants';

export default function Home() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />

      <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen" style={{textAlign: 'justify'}}>
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4 pt-4">
            {ANDROMEDA_PLATFORM_TITLE}
          </h1>
          <Image
            src={WorkflowImage.src} // Replace with your actual image URL
            width={0}
            height={0}
            alt="Full-width image"
            style={{ width: 'auto', height: 'auto' }}
          />
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            What is the Andromeda Platform?
          </h1>
          <p className="text-gray-600 mb-4">{ANDROMEDA_PLATFORM_DESC}</p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            What is the Galaxy Project?
          </h1>
          <p className="text-gray-600 mb-4">{GALAXY_PROJECT_DESC}</p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            How can I use the platform?
          </h1>
          <p className="text-gray-600 mb-4">{ANDROMEDA_PLATFORM_USE_DESC}</p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            How can I become a collaborator?
          </h1>
          <p className="text-gray-600 mb-4">{ANDROMEDA_COLLABORATOR_DESC}</p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">Demo</h1>
          <div className="mb-4">
            <iframe
              title="Project Video"
              width="100%"
              height="550"
              src="https://www.youtube.com/embed/F2aATIRG2-o?autoplay=0"
              allowFullScreen
            ></iframe>
          </div>
          {/* Contact Section */}
          <div className="border-t mt-4 pt-4">
            <h2 className="text-3xl font-semibold mb-2">Contact</h2>
            <div className="flex flex-col flex-wrap gap-6">
              <MichelContact />
              <FilipContact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
