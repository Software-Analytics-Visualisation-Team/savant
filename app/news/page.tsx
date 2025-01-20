import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MENU_ITEMS as menuItems } from '../constants';
import Image from 'next/image';
import SEiGS_image from '../../public/news/SEiGS.jpeg';
import SEiGS_sponsorship from '../../public/news/SEiGS_Sponsorship.jpeg';

const newsItems = [
  {
    title: "SEiGS Symposium: 13 accepted papers",
    date: "January 17, 2024",
    imageUrl: SEiGS_image.src,
    text: `We’re thrilled to share exciting updates about the Software Engineering in the Global South (SEiGS) symposium, which will take place on May 3, 2025, as part of ICSE 2025! This unique event aims to highlight the transformative potential of software engineering to address pressing challenges and foster innovation in the Global South.

Out of many impressive submissions, 13 exceptional papers have been accepted, representing thought-provoking work from authors in Australia, Papua New Guinea, Botswana, Indonesia, Tanzania, Uganda, UAE and the USA. These contributions span a diverse range of topics from insights on IoT, Generative AI (GenAI), to the development and application of safety-critical systems in resource-constrained settings, underscoring the exciting intersections between cutting-edge technology and practical problem-solving.

We invite you to join us in this vibrant conversation about the future of software engineering and its role in driving positive change. More information about the symposium can be found on the ICSE website below:`,
    link: {text:"ICSE 2025 SEiGS page", url:"https://conf.researchr.org/track/icse-2025/icse-2025-symposium-on-software-engineering-in-the-global-south"},  
},
{
  title: "SEiGS Symposium: Support for participants from low-resource countries",
  date: "January 17, 2024",
  imageUrl: SEiGS_sponsorship.src,
  text: `We are actively seeking sponsors to support participation from researchers and practitioners in low-resource countries. Your sponsorship can make a tangible impact by enabling these voices to share their perspectives on a global stage. If you are interested in sponsoring participants in the SEiGS symposium, please reach out to us!`,
  link: {text:"Contact us", url:"https://software-analytics-visualisation-team.github.io/savant/contacts"},  
}];

export default function NewsPage() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col bg-gray-50 min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-4">News</h1>
        <ul className="space-y-4">
          {newsItems.map((news, index) => (
            <li key={index} className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:justify-between">
              <Image
                src={news.imageUrl}
                width={0}
                height={0}
                alt={news.title}
                style={{ width: 240, height: 240, marginRight: 16, objectFit: 'cover' }}
              />
              <div>
                <div className='flex flex-col sm:flex-row sm:justify-between mb-4'>
                  <h2 className="text-lg font-semibold">{news.title}</h2>
                  <p className="text-sm sm:ml-4">{news.date}</p>
                </div>
                <div className="text-gray-600" style={{ textAlign: 'justify' }}>
                    {news.text.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                    {news.link && (
                    <a href={news.link.url} className="text-blue-500 hover:underline mt-4 block">
                      {news.link.text}
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
