'use client'
import { NextUIProvider } from "@nextui-org/react";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
    <h1 className="text-7xl font-bold mb-4 p-12">Research Projects</h1>
      <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit p-24 lg:flex pb-12">
        <ProjectCard projectName="Deductive Software Architecture Recovery" imageSource="" projectDescription="Our Deductive Software Architecture Reconstruction approach leverages Large Language Models (LLMs). In contrast to classical SAR techniques (bottom-up), our deductive approach defines architectural component characteristics and identifies evidence within the source code (top-down). LLMs enhance this generic capability. Our proof-of-concept, using GPT-4, demonstrates deductive reasoning by applying it to the Android app K-9 Mail, achieving 70% accuracy in classifying 54 classes and 184 methods." projectContact="Michel Chaudron, Satrio Rukmono" funding="" status="Active"/>
      </div>
      <h1 className="text-7xl font-bold mb-4 p-12">Tools</h1>
      <div className="z-10 flex flex-row flex-wrap gap-4 justify-center max-w-fit p-24 lg:flex pb-12">
        <ProjectCard projectName="Galaxy" imageSource="" projectDescription="The Galaxy Project is an open-source, web-based platform designed for data-intensive biomedical research. The platform integrates various tools into cohesive workflows, allowing users to perform analyses through a user-friendly web interface. Additionally, it supports data integration, analysis persistence and much more. We are investigating how to leverage all of the Galaxy infrastructure to easily construct complex software analyses which are easily shared among tool builders, researchers and software practitioners." projectContact="Michel Chaudron, Filip Zamfirov" funding="" status="Active"/>
        <ProjectCard projectName="ClassViz" imageSource="" projectDescription="The ClassViz tool allows you to observe the hierarchy and relationships between the (source code) elements in your software system. One aspect that differentiates ClassViz from other software visualization tools is that it relies on a language- and paradigm-agnostic interchange format. It also allows enrichment to the (graph) dataset so results of other analyses on the source code can also be presented within the tool." projectContact="Michel Chaudron, Satrio Rukmono" funding="" status="Active"/>
      </div>
    </main>
  </NextUIProvider>
);
}