// pages/seigs25.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MENU_ITEMS as menuItems } from '../constants';

export default function Seigs25Page() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen" style={{textAlign: 'justify'}}>
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
            IEEE SEiGS 2025:<br />Symposium on Software Engineering in the Global South
          </h1>
          <p className="text-lg font-bold text-red-700 mb-4">
            Co-located with ICSE 2025, Ottawa, Canada
          </p>
          <p className="text-gray-600 mb-4">
            Submission link: <a href="https://easychair.org/conferences/?conf=seigs2025" className="text-red-600 hover:underline">https://easychair.org/conferences/?conf=seigs2025</a>
          </p>
          <p className="text-gray-600 mb-4">
            The Symposium on Software Engineering in the Global South (SEiGS) is a forum for researchers, innovators, and leading professionals to discuss the current state and future of software engineering in low-resource countries. SEiGS 2025 is organized to increase the participation of researchers from the Global South in the international Software Engineering community.
          </p>
          <p className="text-gray-600 mb-4">
            The event provides a platform for exchanging ideas on:
          </p>
          <ul className="list-outside pl-4 list-disc text-gray-600 mt-0 mb-4">
            <li>
                Academic research in Software Engineering (any topic fitting the ICSE list of topics),
            </li>
            <li>
                The role of software engineering in the socio-economic development in the Global South, as well as future directions for software engineering research and education,
            </li>
            <li>
                Creating networks with the global Software Engineering community and sharing exciting results with the community.
            </li>
          </ul>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Sponsorship for Attending
          </h2>
          <p className="text-gray-600 mb-4">
            For a limited number of papers, sponsorship for traveling to and registration for ICSE will be available.
          </p>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Submission Guidelines and Evaluation
          </h2>
          <p className="text-gray-600 mb-4">
            All papers must be original and not simultaneously submitted to another journal or conference. The following paper categories are welcome:
          </p>
          <ul className="space-y-2 mt-0 mb-4">
            <li className="bg-white p-4 rounded shadow">
              <p className="text-gray-600">
                <b>Full technical papers</b>, limited to 8 pages, describing technical research results or industrial experience.
              </p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <p className="text-gray-600">
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
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Formatting and Submission Links
          </h2>
          <p className="text-gray-600 mb-4">
            All submissions must be in English and formatted according to the ICSE 2025 Format and Submission Guidelines:
          </p>
          <p className="text-gray-600 mb-4 bg-white p-4 rounded shadow">
            All submissions must conform to the IEEE Conference Proceedings Formatting Guidelines (title in 24pt font and full text in 10pt type, LaTeX users must use <code>{'\\'}documentclass[10pt,conference]{"{IEEEtran}"}</code> without including the <code>compsoc</code> or <code>compsocconf</code> option).
          </p>
          <p className="text-gray-600 mb-4">
            Manuscripts must be submitted in PDF format via EasyChair:
          </p>
          <p className="text-gray-600 mb-4 bg-white p-4 rounded shadow">
            <a href="https://easychair.org/conferences/?conf=seigs2025" className="text-red-600 hover:underline">https://easychair.org/conferences/?conf=seigs2025</a>
          </p>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            List of Topics
          </h2>
          <p className="text-gray-600 mb-4">
            We are seeking high quality papers from researchers, professionals, and innovators on but not limited to the following topics:
          </p>
          <ul className="flex flex-row gap-4 items-stretch place-items-stretch" style={{textAlign: 'left'}}>
            <li className="basis-1/3 bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">
                Applications in
              </h3>
              <ul className="list-outside pl-4 list-disc text-gray-600 mt-0 mb-4">
                <li>Financial Services</li>
                <li>Agriculture</li>
                <li>Sustainable Cities</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Transportation</li>
                <li>Environment and Climate Change</li>
                <li>Energy (e.g., smart grids)</li>
                <li>Conflict and Crisis Management</li>
              </ul>
            </li>
            <li className="basis-1/3 bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">
                Software Engineering
              </h3>
              <p className="text-gray-600">
                The same scope as the main ICSE call-for-paper (all tracks of the main conference).
              </p>
            </li>
            <li className="basis-1/3 bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">
                Community and Outreach
              </h3>
              <ul className="list-outside pl-4 list-disc text-gray-600 mt-0 mb-4">
                <li>Building Research Networks</li>
                <li>Software Innovations and Startups</li>
                <li>Growing the IT-Industry</li>
                <li>Setting up IT-Outsourcing</li>
                <li>National Policies for Growing the IT-Industry</li>
              </ul>
            </li>
          </ul>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Program Committee (to be extended)
          </h2>
          <ul className="list-inside list-none text-gray-600 mt-0 mb-4">
            <li>Ibrahim Adeyanju (Federal University Oye-Ekiti, Nigeria)</li>
            <li>Yirsaw Ayalew (University of Botswana, Botswana)</li>
            <li>Joseph K Balikuddembe (Makerere University, Uganda)</li>
            <li>Djamel E. Khelladi (IRISA, Rennes, France)</li>
            <li>Foutse Khomh (DGIGL, École Polytechnique de Montréal, Canada)</li>
            <li>Tegawendé F. Bissyandé (SnT, University of Luxembourg, Luxembourg)</li>
            <li>Joyce Nakatumba (Makerere University, Uganda)</li>
            <li>Serge Stinckwich (IRD, France)</li>
            <li>Chitsutha Soomlek (KKU, Thailand)</li>
            <li>Agung Dewandaru (ITB, Bandung, Indonesia)</li>
          </ul>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Organizing Committee
          </h2>
          <ul className="list-inside list-none text-gray-600 mt-0 mb-4">
            <li>Michel R.V. Chaudron (TU Eindhoven, The Netherlands)</li>
            <li>Engineer Bainomugisha (Makerere University, Uganda)</li>
          </ul>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Publication
          </h2>
          <p className="text-gray-600 mb-4">
            Accepted papers will be published in the electronic ICSE 2025 Proceedings in the IEEE Digital Library.
            Authors of accepted papers are required to register for the symposium and attend the symposium in order to have the paper included in the proceedings. The official publication date of the symposium proceedings is the date the proceedings are made available by IEEE.
          </p>
          <h2 className="text-xl font-bold text-red-700 mb-0 mt-8">
            Venue
          </h2>
          <p className="text-gray-600 mb-4">
            The symposium will be co-located with ICSE 2025 to be held in Ottawa, Ontario, Canada
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
