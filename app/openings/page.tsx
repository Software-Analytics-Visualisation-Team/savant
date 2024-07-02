// pages/jobs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const menuItems = [
  { name: 'Industrial Projects', route: './industrial-projects' },
  { name: 'Academic Projects', route: './projects' },
  { name: 'Positions', route: './openings' },
  { name: 'Contact us', route: './contacts' }
];

const jobs = [
  {
    name: 'COMARIC (PhD Position)',
    description:
      "Software Intensive Systems must meet rigorous quality and reliability standards while being agile in responding to business stakeholders. Developing such systems faces several challenges: complexity, scale, and legacy evolution. The key approach is architecture, which provides a high-level representation of the system, illustrating how it's hierarchically decomposed into subsystems and how these subsystems interact. The ultimate goal in this project is to create automated tools that maintain consistency between the architecture and the implementation",
    applyLink: 'mailto:m.r.v.chaudron@tue.nl?subject=COMARIC (PhD Position)'
  },
  {
    name: 'Cynergy4me (PhD Position)',
    description:
      "The use of Low Code-approaches has proven very successful in developing business automation software. We believe the success of Low Code is the well engineered alignment of Low Code = DSL + MBSE + Reference Architecture + CI/CD. We are looking for a candidate that can develop a method and tool for showing the feasibility of low-code for embedded system - so practical knowledge of DSL's & MBSE, Code Generation and good understanding of Software Architecture.oin our team as a product manager and drive innovation.",
    applyLink: 'mailto:m.r.v.chaudron@tue.nl?subject=Cynergy4me (PhD Position)'
  },
  {
    name: 'Software Analytics Infrastructure (PhD Position) ',
    description:
      'The ultimate goal is to create a platform for the building of workflows that connect various automated tools for the analysis of software artefacts.',
    applyLink:
      'mailto:m.r.v.chaudron@tue.nl?subject=Software Analytics Infrastructure (PhD Position)'
  }
  // Add more job positions as needed
];

export default function JobsPage() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col bg-gray-50 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">Job Openings</h1>
        <ul className="space-y-4">
          {jobs.map((job, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold">{job.name}</h2>
              <p className="text-gray-600">{job.description}</p>
              <a
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:underline"
              >
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
