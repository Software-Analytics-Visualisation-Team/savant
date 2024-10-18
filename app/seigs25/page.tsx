// pages/seigs25.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MENU_ITEMS as menuItems } from '../constants';

export default function Seigs25Page() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen">
        {/* <Image
          src={IndustryImage}
          width={0}
          height={0}
          className="relative"
          alt="Industry Image"
          style={{ width: '100vw', height: 'auto' }}
        /> */}
        <div className="max-w-5xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4 pt-6">
            IEEE SEiGS 2025: Symposium on Software Engineering in the Global South
          </h1>
          <p className="text-1xl font-bold text-red-700 mb-4">
            Co-located with ICSE 2025, Ottawa, Canada
          </p>
          <p className="text-gray-600 mb-4">
            Submission link: TBD
          </p>
          <p className="text-gray-600 mb-4">
            The Symposium on Software Engineering in the Global South (SEiGS) is a forum for researchers, innovators, and leading professionals to discuss the current state and future of software engineering in low-resource countries. SEiGS 2025 is organized to increase the participation of researchers from the Global South in the international Software Engineering community.
          </p>
          <p className="text-gray-600 mb-4">
            The event provides a platform for exchanging ideas on:
          </p>
          <ul>
            <li className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">
                Academic research in Software Engineering (any topic fitting the ICSE list of topics),
              </p>
            </li>
            <li className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">
                The role of software engineering in the socio-economic development in the Global South, as well as future directions for software engineering research and education,
              </p>
            </li>
            <li className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">
                Creating networks with the global Software Engineering community and sharing exciting results with the community.
              </p>
            </li>
          </ul>
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Sponsorship for Attending
          </h2>
          <p className="text-gray-600 mb-4">
            For a limited number of papers, sponsorship for traveling to and registration for ICSE will be available.
          </p>
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Submission Guidelines and Evaluation
          </h2>
          <p className="text-gray-600 mb-4">
            All papers must be original and not simultaneously submitted to another journal or conference.
          </p>
          <p className="text-gray-600 mb-4">
            The following paper categories are welcome:
          </p>
          <ul>
            <li className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">
                <b>Full technical papers</b>, limited to 8 pages, describing technical research results or industrial experience.
              </p>
            </li>
            <li className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">
                <b>Short papers</b> (posters), limited to 4 pages, describing preliminary results of work-in-progress research.
              </p>
            </li>
          </ul>
          <p className="text-gray-600 mb-4">
            All submissions will be rigorously peer-reviewed by members of the SEiGS Program Committee. Submissions must be original and not previously published or currently under review elsewhere. They will be evaluated based on scientific quality, relevance to the Global South and the global Software Engineering community, significance, and quality of presentation.
          </p>
          <p className="text-gray-600 mb-4">
            The page limit includes all text, figures, tables, and references. All submissions must represent unpublished original work and not be under review elsewhere. Papers will be judged based on their clarity, relevance, originality, and applicability in practice.
          </p>
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Formatting and Submission Links
          </h2>
          <p className="text-gray-600 mb-4">
            All submissions must be in English and formatted according to the ICSE 2025 Format and Submission Guidelines:
          </p>
          <p className="text-gray-600 mb-4">
            All submissions must conform to the IEEE Conference Proceedings Formatting Guidelines (title in 24pt font and full text in 10pt type, LaTeX users must use <code>{'\\'}documentclass[10pt,conference]{"{IEEEtran}"}</code> without including the <code>compsoc</code> or <code>compsocconf</code> option).
          </p>
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            List of Topics
          </h2>
          <p className="text-gray-600 mb-4">
            We are seeking high quality papers from researchers, professionals, and innovators on but not limited to the following topics:
          </p>
          <ul>
            <li className="bg-white p-8 rounded shadow">
              <h3 className="text-1xl font-bold text-red-700 mb-4">
                Applications in
              </h3>
              <p className="text-gray-600 mb-4">
                Financial Services
              </p>
              <p className="text-gray-600 mb-4">
                Agriculture
              </p>
              <p className="text-gray-600 mb-4">
                Sustainable Cities
              </p>
              <p className="text-gray-600 mb-4">
                Healthcare
              </p>
              <p className="text-gray-600 mb-4">
                Education
              </p>
              <p className="text-gray-600 mb-4">
                Transportation
              </p>
              <p className="text-gray-600 mb-4">
                Environment and Climate Change
              </p>
              <p className="text-gray-600 mb-4">
                Energy (e.g., smart grids)
              </p>
              <p className="text-gray-600 mb-4">
                Conflict and Crisis Management
              </p>
            </li>
            <li className="bg-white p-8 rounded shadow">
              <h3 className="text-1xl font-bold text-red-700 mb-4">
                Software Engineering
              </h3>
              <p className="text-gray-600 mb-4">
                The same scope as the main ICSE call-for-paper (all tracks of the main conference).
              </p>
            </li>
            <li className="bg-white p-8 rounded shadow">
              <h3 className="text-1xl font-bold text-red-700 mb-4">
                Community and Outreach
              </h3>
              <p className="text-gray-600 mb-4">
                Building Research Networks
              </p>
              <p className="text-gray-600 mb-4">
                Software Innovations and Startups
              </p>
              <p className="text-gray-600 mb-4">
                Growing the IT-Industry
              </p>
              <p className="text-gray-600 mb-4">
                Setting up IT-Outsourcing
              </p>
              <p className="text-gray-600 mb-4">
                National Policies for Growing the IT Industry
              </p>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
