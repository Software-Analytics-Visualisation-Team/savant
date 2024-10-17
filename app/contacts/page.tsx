'use client';
import React from 'react';
import ContactCard from '../components/ContactCard';
import MichelPortrait from '../../public/portraits/michel.jpeg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MENU_ITEMS as menuItems } from '../constants';

export default function ContactsPage() {
  return (
    <div>
      <Navbar menuItems={menuItems} pageSelected="" />
      <div className="flex flex-col items-center bg-gray-50 gap-8 justify-center min-h-screen">
        <div className="max-w-7xl w-full bg-gray-50">
          <h1 className="text-3xl font-bold pt-6 mb-4">Contact</h1>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold mb-2">Team Lead</h2>
              <ContactCard
                name="Michel R.V. Chaudron"
                position="Full Professor"
                image={MichelPortrait.src}
                email="m.r.v.chaudron@tue.nl"
                personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
              />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <h2 className="text-2xl font-semibold mb-2">Secretariat</h2>
              <p className="text-gray-600">
                Agnes van den Reek
                <br />
                Email: a.k.m.v.d.reek@tue.nl
              </p>
            </div>
          </div>
          <div className="mb-4 pt-6">
            <h2 className="text-2xl font-semibold mb-2">Visiting Address</h2>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.6530906844877!2d5.486700302544273!3d51.44691244878172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d8e04bc52af9%3A0x20fe44840cbbb233!2sMetaForum!5e0!3m2!1sen!2snl!4v1712936059782!5m2!1sen!2snl"
              width="100%"
              height="500"
              allowFullScreen
            ></iframe>
          </div>
          <div className="pb-6">
            <h2 className="text-2xl font-semibold mb-2">Postal Address</h2>
            <p className="text-xl text-gray-600">
              Postbus 513
              <br />
              5600 MB, Eindhoven
              <br />
              the Netherlands
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
