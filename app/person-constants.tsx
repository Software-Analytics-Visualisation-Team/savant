import PersonCard from './components/PersonCard';

import ContactCard from '../components/ContactCard';

import MichelPortrait from '../public/portraits/michel.jpeg';
import LinaPortrait from '../public/portraits/lina.jpeg';
import SatrioPortrait from '../public/portraits/satrio.jpeg';
import FilipPortrait from '../public/portraits/filip.jpeg';
import MerelPortrait from '../public/portraits/merel.jpg';
import FelipePortrait from '../public/portraits/felipe.jpeg';
import KevinPortrait from '../public/portraits/kevin.jpeg';
import JacobPortrait from '../public/portraits/jacob.jpg';
import SupunPortrait from '../public/portraits/Supun.png';

// Combined userprops of PersonCard and ContactCard
interface UserProps {
    name: string;
    position: string;
    email: string;
    image: string;
    quote: string;
    personalPage: string;
}

const MichelUserProps: UserProps = {
    name: "Michel R.V. Chaudron",
    position: "Full Professor",
    email: "m.r.v.chaudron@tue.nl",
    image: MichelPortrait.src,
    quote: "Research interests: Software Architecture, Software Design, Software Modelling with a special focus on UML, Software Composition and knowledge sharing, use of AI (Artificial Intelligence) for Software Development.",
    personalPage: "https://research.tue.nl/en/persons/michel-rv-chaudron"
};

const LinaUserProps: UserProps = {
    name: "Lina Ochoa Venegas",
    position: "Assistant Professor",
    email: "l.m.ochoa.venegas@tue.nl",
    image: LinaPortrait.src,
    quote: "I am interested on studying the phenomena behind software evolution, maintenance, and analysis, and providing tools that support related processes.",
    personalPage: "https://research.tue.nl/en/persons/lina-ochoa-venegas"
};

const JacobUserProps: UserProps = {
    name: "Jacob Krüger",
    position: "Assistant Professor",
    email: "j.kruger@tue.nl",
    image: JacobPortrait.src,
    quote: "I am specializing in the development and evolution of variant-rich software systems. Variant-rich systems exist in different customizable variants and have become the most widely existing form of software systems in all areas of society.",
    personalPage: "https://research.tue.nl/en/persons/jacob-kr%C3%BCger"
};

const SatrioUserProps: UserProps = {
    name: "Satrio Adi Rukmono",
    position: "PhD Candidate",
    email: "s.a.rukmono@tue.nl",
    image: SatrioPortrait.src,
    quote: "Research interests: Application of Large Language Models (LLMs) in the field of Software Architecture, Software Visualisation",
    personalPage: "https://research.tue.nl/en/persons/satrio-rukmono"
};

const FilipUserProps: UserProps = {
    name: "Filip Zamfirov",
    position: "PhD Candidate",
    email: "f.zamfirov@tue.nl",
    image: FilipPortrait.src,
    quote: "Research interests: Software Architecture Erosion, Software Visualisation, Static & Dynamic Analysis",
    personalPage: "https://research.tue.nl/en/persons/filip-zamfirov"
};

const MerelUserProps: UserProps = {
    name: "Merel Veracx",
    position: "PhD Candidate",
    email: "m.m.s.veracx@tue.nl",
    image: MerelPortrait.src,
    quote: "Research interests: Engineering AI-intensive Systems, IT Architecture, Quality in Software Engineering, Educating HBO ICT students",
    personalPage: "https://www.linkedin.com/in/merel-veracx-a806115/?originalSubdomain=be"
};

const FelipeUserProps: UserProps = {
    name: "Felipe Xavier",
    position: "PhD Candidate",
    email: "f.d.azeredo.coutinho.xavier@tue.nl",
    image: FelipePortrait.src,
    quote: "Research interests: Low-Code, Formal Verification, Embedded Systems, and Software architecture",
    personalPage: "https://research.tue.nl/en/persons/felipe-de-azeredo-coutinho-xavier"
};

const KevinUserProps: UserProps = {
    name: "Kevin Bouwmeester",
    position: "PhD Candidate",
    email: "k.bouwmeester@tue.nl",
    image: KevinPortrait.src,
    quote: "Research interests: Digital Twins, Software Architecture, Game-Design, and Software Design",
    personalPage: "https://research.tue.nl/en/persons/kevin-bouwmeester"
};

const SupunUserProps: UserProps = {
    name: "Supun Wijayakoon",
    position: "PhD Candidate",
    email: "s.c.w.wijekoon.bandara.mudiyanselage@tue.nl",
    image: SupunPortrait.src,
    quote: "Research interests: Software Architecture, Software Analytics, Software Visualization",
    personalPage: "https://research.tue.nl/en/persons/supun-wijekoon-bandara-mudiyanselage"
};

export const MichelCard = () => (
    <PersonCard
        name={MichelUserProps.name}
        position={MichelUserProps.position}
        image={MichelUserProps.image}
        quote={MichelUserProps.quote}
        personalPage={MichelUserProps.personalPage}
    />);
export const MichelContact = () => (
    <ContactCard
        name={MichelUserProps.name}
        position={MichelUserProps.position}
        image={MichelUserProps.image}
        email={MichelUserProps.email}
        personalPage={MichelUserProps.personalPage}
    />);

export const LinaCard = () => (
    <PersonCard
        name={LinaUserProps.name}
        position={LinaUserProps.position}
        image={LinaUserProps.image}
        quote={LinaUserProps.quote}
        personalPage={LinaUserProps.personalPage}
    />);
export const LinaContact = () => (
    <ContactCard
        name={LinaUserProps.name}
        position={LinaUserProps.position}
        image={LinaUserProps.image}
        email={LinaUserProps.email}
        personalPage={LinaUserProps.personalPage}
    />);

export const JacobCard = () => (
    <PersonCard
        name={JacobUserProps.name}
        position={JacobUserProps.position}
        image={JacobUserProps.image}
        quote={JacobUserProps.quote}
        personalPage={JacobUserProps.personalPage}
    />);
export const JacobContact = () => (
    <ContactCard
        name={JacobUserProps.name}
        position={JacobUserProps.position}
        image={JacobUserProps.image}
        email={JacobUserProps.email}
        personalPage={JacobUserProps.personalPage}
    />);

export const SatrioCard = () => (
    <PersonCard
        name={SatrioUserProps.name}
        position={SatrioUserProps.position}
        image={SatrioUserProps.image}
        quote={SatrioUserProps.quote}
        personalPage={SatrioUserProps.personalPage}
    />);
export const SatrioContact = () => (
    <ContactCard
        name={SatrioUserProps.name}
        position={SatrioUserProps.position}
        image={SatrioUserProps.image}
        email={SatrioUserProps.email}
        personalPage={SatrioUserProps.personalPage}
    />);

export const FilipCard = () => (
    <PersonCard
    name={FilipUserProps.name}
    position={FilipUserProps.position}
    image={FilipUserProps.image}
    quote={FilipUserProps.quote}
    personalPage={FilipUserProps.personalPage}
    />);
export const FilipContact = () => (
    <ContactCard
        name={FilipUserProps.name}
        position={FilipUserProps.position}
        image={FilipUserProps.image}
        email={FilipUserProps.email}
        personalPage={FilipUserProps.personalPage}
    />);

export const MerelCard = () => (
    <PersonCard
        name={MerelUserProps.name}
        position={MerelUserProps.position}
        image={MerelUserProps.image}
        quote={MerelUserProps.quote}
        personalPage={MerelUserProps.personalPage}
    />);
export const MerelContact = () => (
    <ContactCard
        name={MerelUserProps.name}
        position={MerelUserProps.position}
        image={MerelUserProps.image}
        email={MerelUserProps.email}
        personalPage={MerelUserProps.personalPage}
    />);

export const FelipeCard = () => (
    <PersonCard
        name={FelipeUserProps.name}
        position={FelipeUserProps.position}
        image={FelipeUserProps.image}
        quote={FelipeUserProps.quote}
        personalPage={FelipeUserProps.personalPage}
    />);
export const FelipeContact = () => (
    <ContactCard
        name={FelipeUserProps.name}
        position={FelipeUserProps.position}
        image={FelipeUserProps.image}
        email={FelipeUserProps.email}
        personalPage={FelipeUserProps.personalPage}
    />);

export const KevinCard = () => (
    <PersonCard
        name={KevinUserProps.name}
        position={KevinUserProps.position}
        image={KevinUserProps.image}
        quote={KevinUserProps.quote}
        personalPage={KevinUserProps.personalPage}
    />);
export const KevinContact = () => (
    <ContactCard
        name={KevinUserProps.name}
        position={KevinUserProps.position}
        image={KevinUserProps.image}
        email={KevinUserProps.email}
        personalPage={KevinUserProps.personalPage}
    />);

export const SupunCard = () => (
    <PersonCard
        name={SupunUserProps.name}
        position={SupunUserProps.position}
        image={SupunUserProps.image}
        quote={SupunUserProps.quote}
        personalPage={SupunUserProps.personalPage}
    />);
export const SupunContact = () => (
    <ContactCard
        name={SupunUserProps.name}
        position={SupunUserProps.position}
        image={SupunUserProps.image}
        email={SupunUserProps.email}
        personalPage={SupunUserProps.personalPage}
    />);