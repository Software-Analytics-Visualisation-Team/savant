// pages/jobs.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MENU_ITEMS as menuItems } from '../constants';
import Image from 'next/image';
import SEiGS_image from '../../public/news/SEiGS.jpeg';

const newsItems = [
  {
    title: "SEiGS Symposium: 13 accepted papers",
    date: "January 17, 2024",
    imageUrl: "https://via.placeholder.com/150",
    text: `We’re thrilled to share exciting updates about the Software Engineering in the Global South (SEiGS) symposium, which will take place on May 3, 2025, as part of ICSE 2025! This unique event aims to highlight the transformative potential of software engineering to address pressing challenges and foster innovation in the Global South.

Out of many impressive submissions, 13 exceptional papers have been accepted, representing thought-provoking work from authors in Australia, Papua New Guinea, Botswana, Indonesia, Tanzania, Uganda, UAE and the USA. These contributions span a diverse range of topics from insights on IoT, Generative AI (GenAI), to the development and application of safety-critical systems in resource-constrained settings, underscoring the exciting intersections between cutting-edge technology and practical problem-solving.

We are actively seeking sponsors to support participation from researchers and practitioners in low-resource countries. Your sponsorship can make a tangible impact by enabling these voices to share their perspectives on a global stage. If you are interested in sponsoring participants in the SEiGS symposium, please reach out to us!

We invite you to join us in this vibrant conversation about the future of software engineering and its role in driving positive change. More information about the symposium can be found on the ICSE website below:`,
    link: "https://conf.researchr.org/track/icse-2025/icse-2025-symposium-on-software-engineering-in-the-global-south",  
},];

export default function NewsPage() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col bg-gray-50 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">News</h1>
        <ul className="space-y-4">
          {newsItems.map((news, index) => (
            <li key={index} className="bg-white p-4 rounded shadow flex">
              <Image
                src={SEiGS_image.src} // Replace with your actual image URL
                width={0}
                height={0}
                alt={news.title}
                style={{ width: 240, height: 240, marginRight: 16, objectFit: 'cover' }}
              />
              <div>
                <h2 className="text-lg font-semibold">{news.title}</h2>
                <p className="text-gray-500 text-sm">{news.date}</p>
                <div className="text-gray-600" style={{ textAlign: 'justify' }}>
                    {news.text.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                    {news.link && (
                    <a href={news.link} className="text-blue-500 hover:underline mt-4 block">
                      ICSE Webpage for SEiGS
                    </a>
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
