'use client';
import { NextUIProvider } from '@nextui-org/react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as CONSTANTS from '../constants';
import { MENU_ITEMS as menuItems } from '../constants';
import ToolCard from '../components/ToolCard';
import ClassVizImage from '../../public/tools/classViz.jpg'
import ArvisanImage from '../../public/tools/arvisan.jpg'
import AndromedaImage from '../../public/tools/andromeda-workflow.png'
import BubbleTeaVizImage from '../../public/tools/BubbleTeaViz.png'

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
            href={CONSTANTS.DEDUCTIVE_SAR_HREF}
            projectName={CONSTANTS.DEDUCTIVE_SAR_TITLE}
            projectDescription={CONSTANTS.DEDUCTIVE_SAR_INFO}
            projectContact={CONSTANTS.DEDUCTIVE_SAR_CONTACTS}
            funding={""}
            status={CONSTANTS.DEDUCTIVE_SAR_STATUS}
          />
          <ProjectCard
            href={""}
            projectName={CONSTANTS.COMARIC_TITLE}
            projectDescription={CONSTANTS.COMARIC_INFO}
            projectContact={CONSTANTS.COMARIC_CONTACTS}
            funding={""}
            status={CONSTANTS.COMARIC_STATUS}
          />
          <ProjectCard
            href={""}
            projectName={CONSTANTS.LOW_CODE_TITLE}
            projectDescription={CONSTANTS.LOW_CODE_INFO}
            projectContact={CONSTANTS.LOW_CODE_CONTACTS}
            funding={""}
            status={CONSTANTS.LOW_CODE_STATUS}
          />
          <ProjectCard
            href={""}
            projectName={CONSTANTS.DTHB_TITLE}
            projectDescription={CONSTANTS.DTHB_INFO}
            projectContact={CONSTANTS.DTHB_CONTACTS}
            funding={""}
            status={CONSTANTS.DTHB_STATUS}
          />
        </div>
        <h1 className="text-3xl font-bold text-red-600 mb-4 p-4 pb-0">
            Tools
        </h1>
        <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit lg:flex pb-12">
          <ToolCard
            href={CONSTANTS.ANDROMEDA_PLATFORM_HREF}
            toolName={CONSTANTS.ANDROMEDA_PLATFORM_TITLE}
            imageSource={AndromedaImage.src}
            toolDescription={CONSTANTS.ANDROMEDA_PLATFORM_DESC}
            toolContact={CONSTANTS.ANDROMEDA_PLATFORM_CONTACTS}
            funding={""}
            status={CONSTANTS.ANDROMEDA_PLATFORM_STATUS}
          />
          <ToolCard
            href={CONSTANTS.CLASSVIZ_HREF}
            toolName={CONSTANTS.CLASSVIZ_TITLE}
            imageSource={ClassVizImage.src}
            toolDescription={CONSTANTS.CLASSVIZ_DESC}
            toolContact={CONSTANTS.CLASSVIZ_CONTACTS}
            funding={""}
            status={CONSTANTS.CLASSVIZ_STATUS}
          />
          <ToolCard //BubbleTeaViz
            href={""}
            toolName={CONSTANTS.BUBBLETEAVIZ_TITLE}
            imageSource={BubbleTeaVizImage.src}
            toolDescription={CONSTANTS.BUBBLETEAVIZ_DESC}
            toolContact={CONSTANTS.BUBBLETEAVIZ_CONTACTS}
            funding={""}
            status={CONSTANTS.BUBBLETEAVIZ_STATUS}
          />
          <ToolCard //ARViSAN
            href={""}
            toolName={CONSTANTS.ARVISAN_TITLE}
            imageSource={ArvisanImage.src}
            toolDescription={CONSTANTS.ARVISAN_DESC}
            toolContact={CONSTANTS.ARVISAN_CONTACTS}
            funding={""}
            status={CONSTANTS.ARVISAN_STATUS}
          />
        </div>
      </main>
      <Footer />
    </NextUIProvider>
  );
}
