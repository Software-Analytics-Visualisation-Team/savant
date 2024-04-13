
// pages/jobs.js
import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const menuItems = [
  { name: "Projects", route: "./projects" },
  { name: "Positions", route: "./openings" },
  { name: "Contact us", route: "./contacts" },
];

const jobs = [
  {
    name: "Software Engineer",
    description: "We're looking for an experienced software engineer...",
    applyLink: "https://example.com/apply-software-engineer",
  },
  {
    name: "Product Manager",
    description: "Join our team as a product manager and drive innovation...",
    applyLink: "https://example.com/apply-product-manager",
  },
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
                className="text-blue-500 hover:underline"
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
};