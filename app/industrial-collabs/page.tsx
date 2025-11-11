// pages/jobs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import IndustryImage from '../../public/industry-image-3.jpg';
import JProfilerLogo from '../../public/jprofiler_large.png';
import { MichelContact } from '../person-constants';

const tools = [
  {
    key: 'AP',
    name: (
      <Link
        className="hover:text-red-600"
        color="foreground"
        href="./projects/galaxy"
      >
        Andromeda Platform
      </Link>
    ),
    description:
      'Custom analysis of your source code based on your needs. This platform provides a easily customisable way to analyse various aspects of your systems. Visualise your software, identify performance bottlenecks, detect security vulnerabilities.'
  },
  {
    key: 'ClassViz',
    name: (
      <Link className="hover:text-red-600" color="foreground" href="./projects">
        ClassViz
      </Link>
    ),
    description:
      'Explore interactivelly software architecture visualisations. Understand your software’s structure, dependencies, and hotspots at a glance.'
  },
  {
    key: 'BubbleTea',
    name: (
      <Link className="hover:text-red-600" color="foreground" href="./projects">
        BubbleTeaVis
      </Link>
    ),
    description:
      'Inspect your code base through the lens of a layered software architecture.'
  }
];

const collaborators = [
  {
    key: 'TF',
    name: (
      <Link
        className="hover:text-red-600"
        color="foreground"
        href="https://www.thermofisher.com/nl/en/home/brands/thermo-scientific.html.html"
      >
        ThermoFisher Scientific
      </Link>
    ),
    description: ''
  },
  {
    key: 'Phillips',
    name: (
      <Link
        className="hover:text-red-600"
        color="foreground"
        href="https://www.usa.philips.com/healthcare/e/image-guided-therapy"
      >
        Phillips Image Guided Therapy
      </Link>
    ),
    description: ''
  },
  {
    key: 'ASML',
    name: (
      <Link
        className="hover:text-red-600"
        color="foreground"
        href="https://www.asml.com/en"
      >
        ASML
      </Link>
    ),
    description: ''
  }
];

export default function IndustrialCollaborationsPage() {
  return (
    <div>
      <Navbar pageSelected="" />
      <div
        className="flex flex-col items-center justify-center bg-gray-50 min-h-screen"
      >
        <Image
          src={IndustryImage}
          width={0}
          height={0}
          className="relative"
          alt="Industry Image"
          style={{ width: '100vw', height: 'auto' }}
        />
        <div className="max-w-5xl pl-2 pr-2">
          <h1 className="text-3xl font-bold text-red-600 mb-4 pt-6">
            Unlocking Software Insights: Your Path to Better Architecture
          </h1>
          <p className="text-gray-600 mb-4">
            Is your company or your team grappling with complex software
            systems? Struggling to decipher intricate architectures? We are
            experienced in working on practical challenges, and are actively
            collaborating with industrial partners, helping them solve complex
            issues concerning software analysis and architecture visualization.
          </p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            What We Offer
          </h1>
          <p className="text-gray-600 mb-4">
            We provide state-of-the-art tools to analyse and visualise your
            software. Our tools:
          </p>
          <ul>
            {tools.map((tool) => (
              <li key={tool.key} className="pb-2">
                <strong>{tool.name}:</strong> {tool.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-4"></p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">Contact Us</h1>
          <MichelContact />
          <h1 className="text-2xl font-bold text-red-700 mb-4">Tools we use</h1>

          <Link href="https://www.ej-technologies.com/jprofiler">
            <Image
              src={JProfilerLogo}
              alt="Industry Image"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
          <h1 className="text-2xl font-bold text-red-700 mb-4">
            Our collaborators
          </h1>
          <ul>
            {collaborators.map((collaborator) => (
              <li key={collaborator.key} className="pb-2">
                <strong>{collaborator.name}</strong> {collaborator.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
