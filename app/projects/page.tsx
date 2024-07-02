'use client';
import { NextUIProvider } from '@nextui-org/react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ANDROMEDA_PLATFORM_CONTACTS,
  ANDROMEDA_PLATFORM_DESC,
  ANDROMEDA_PLATFORM_FUNDING,
  ANDROMEDA_PLATFORM_HREF,
  ANDROMEDA_PLATFORM_IMAGE_SOURCE,
  ANDROMEDA_PLATFORM_STATUS,
  ANDROMEDA_PLATFORM_TITLE,
  CLASSVIZ_CONTACTS,
  CLASSVIZ_DESC,
  CLASSVIZ_FUNDING,
  CLASSVIZ_HREF,
  CLASSVIZ_IMAGE_SOURCE,
  CLASSVIZ_STATUS,
  CLASSVIZ_TITLE,
  DEDUCTIVE_SAR_CONTACTS,
  DEDUCTIVE_SAR_FUNDING,
  DEDUCTIVE_SAR_HREF,
  DEDUCTIVE_SAR_IMAGE_SOURCE,
  DEDUCTIVE_SAR_INFO,
  DEDUCTIVE_SAR_STATUS,
  DEDUCTIVE_SAR_TITLE
} from '../constants';

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
      <main className="flex min-h-screen flex-col items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-red-600 mb-4 p-4 pb-0">
          Research Projects
        </h1>
        <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit lg:flex pb-12">
          <ProjectCard
            href={DEDUCTIVE_SAR_HREF}
            projectName={DEDUCTIVE_SAR_TITLE}
            imageSource={DEDUCTIVE_SAR_IMAGE_SOURCE}
            projectDescription={DEDUCTIVE_SAR_INFO}
            projectContact={DEDUCTIVE_SAR_CONTACTS}
            funding={DEDUCTIVE_SAR_FUNDING}
            status={DEDUCTIVE_SAR_STATUS}
          />
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-4 p-4 pb-0">Tools</h1>
        <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit lg:flex pb-12">
          <ProjectCard
            href={ANDROMEDA_PLATFORM_HREF}
            projectName={ANDROMEDA_PLATFORM_TITLE}
            imageSource={ANDROMEDA_PLATFORM_IMAGE_SOURCE}
            projectDescription={ANDROMEDA_PLATFORM_DESC}
            projectContact={ANDROMEDA_PLATFORM_CONTACTS}
            funding={ANDROMEDA_PLATFORM_FUNDING}
            status={ANDROMEDA_PLATFORM_STATUS}
          />
          <ProjectCard
            href={CLASSVIZ_HREF}
            projectName={CLASSVIZ_TITLE}
            imageSource={CLASSVIZ_IMAGE_SOURCE}
            projectDescription={CLASSVIZ_DESC}
            projectContact={CLASSVIZ_CONTACTS}
            funding={CLASSVIZ_FUNDING}
            status={CLASSVIZ_STATUS}
          />
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
