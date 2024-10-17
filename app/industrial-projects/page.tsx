// pages/jobs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import ContactCard from '../components/ContactCard';
import IndustryImage from '../../public/industry-image-3.jpg';
import MichelPortrait from '../../public/portraits/michel.jpeg';
import { menuItems } from '../page';

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

export default function IndustrialProjectsPage() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen">
        <Image
          src={IndustryImage}
          width={0}
          height={0}
          className="relative"
          alt="Industry Image"
          style={{ width: '100vw', height: 'auto' }}
        />
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4 pt-6">
            Unlocking Software Insights: Your Path to Better Architecture
          </h1>
          <p className="text-gray-600 mb-4">
            Is your company or your team grappling with complex software
            systems? Struggling to decipher intricate architectures? We are
            experienced in working on practical challenges, and are activelly
            collaborating with industrial partners, helping them solve complex
            issues conserning software analysis and architecture visualization.
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
              <li key={tool.key} className="pb-1">
                <strong>{tool.name}:</strong> {tool.description}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-4"></p>
          <h1 className="text-2xl font-bold text-red-700 mb-4">Contact Us</h1>
          <ContactCard
            name="Michel R.V. Chaudron"
            position="Full Professor"
            image={MichelPortrait.src}
            email="m.r.v.chaudron@tue.nl"
            personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
