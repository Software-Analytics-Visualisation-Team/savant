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
            Conference website: TBD
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
            <li className="bg-white p-8 rounded shadow">Academic research in Software Engineering (any topic fitting the ICSE list of topics),</li>
            <li className="bg-white p-8 rounded shadow">The role of software engineering in the socio-economic development of the continent, as well as future directions for software engineering research and education,</li>
            <li className="bg-white p-8 rounded shadow">Creating networks with the global Software Engineering community and sharing exciting results with that community.</li>
          </ul>
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
            <li className="bg-white p-8 rounded shadow"><b>Full technical papers</b>, limited to 8 pages, describing technical research results or industrial experience.</li>
            <li className="bg-white p-8 rounded shadow"><b>Short papers</b> (posters), limited to 4 pages, describing preliminary results of work-in-progress research.</li>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
