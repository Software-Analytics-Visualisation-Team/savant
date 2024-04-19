
'use client'
import ContactCard from "../../components/ContactCard"
import MichelPortrait from "../../../public/portraits/michel.jpeg"
import FilipPortrait from "../../../public/portraits/filip.jpeg"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const menuItems = [
    { name: "Projects", route: "../projects" },
    { name: "Positions", route: "../openings" },
    { name: "Contact us", route: "../contacts" },
];

export default function Home() {
    return (
        <div>
            <Navbar menuItems={menuItems} pageSelected="" />
            <div className="flex flex-col items-center justify-center bg-gray-50 min-h-screen">

                <div className="max-w-5xl">
                    <h1 className="text-3xl font-bold text-red-600 mb-4">The Andromeda Platform</h1>
                    <p className="text-gray-600 mb-4">
                        The Galaxy Project is an open-source, web-based platform designed for data-intensive biomedical research. The platform integrates various tools into cohesive workflows, allowing users to perform analyses through a user-friendly web interface. Additionally, it supports data integration, analysis persistence and much more. We are investigating how to leverage all of the Galaxy infrastructure to easily construct complex software analyses which are easily shared among tool builders, researchers and software practitioners.
                    </p>
                    {/* Video Section */}
                    <div className="mb-4">
                        <iframe
                            title="Project Video"
                            width="100%"
                            height="550"
                            src="https://www.youtube.com/embed/F2aATIRG2-o?autoplay=0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* Contact Section */}
                    <div className="border-t mt-4 pt-4">
                        <h2 className="text-3xl font-semibold mb-2">Contact</h2>
                        <div className="flex flex-col flex-wrap gap-6">
                            <ContactCard
                                name="Michel R.V. Chaudron"
                                position="Full Professor"
                                image={MichelPortrait.src}
                                email="m.r.v.chaudron@tue.nl"
                                personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
                            />
                            <ContactCard
                                name="Filip Zamfirov"
                                position="PhD Candidate"
                                image={FilipPortrait.src}
                                email="f.zamfirov@tue.nl"
                                personalPage="https://research.tue.nl/en/persons/filip-zamfirov"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
