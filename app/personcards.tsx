import PersonCard from './components/PersonCard';
import MichelPortrait from '../public/portraits/michel.jpeg';
import LinaPortrait from '../public/portraits/lina.jpeg';
import SatrioPortrait from '../public/portraits/satrio.jpeg';
import FilipPortrait from '../public/portraits/filip.jpeg';
import MerelPortrait from '../public/portraits/merel.jpg';
import FelipePortrait from '../public/portraits/felipe.jpeg';
import KevinPortrait from '../public/portraits/kevin.jpeg';
import JacobPortrait from '../public/portraits/jacob.jpg';
import SupunPortrait from '../public/portraits/Supun.png';

export const MichelCard = () => (
    <PersonCard
        name="Michel R.V. Chaudron"
        position="Full Professor"
        image={MichelPortrait.src}
        quote="Research interests: Software Architecture, Software Design, Software Modelling with a special focus on UML, Software Composition and knowledge sharing, use of AI (Artificial Intelligence) for Software Development."
        personalPage="https://research.tue.nl/en/persons/michel-rv-chaudron"
    />);

export const LinaCard = () => (
    <PersonCard
        name="Lina Ochoa Venegas"
        position="Assistant Professor"
        image={LinaPortrait.src}
        quote="I am interested on studying the phenomena behind software evolution, maintenance, and analysis, and providing tools that support related processes."
        personalPage="https://research.tue.nl/en/persons/lina-ochoa-venegas"
    />);

export const JacobCard = () => (
    <PersonCard
        name="Jacob Krüger"
        position="Assistant Professor"
        image={JacobPortrait.src}
        quote="I am specializing in the development and evolution of variant-rich software systems. Variant-rich systems exist in different customizable variants and have become the most widely existing form of software systems in all areas of society."
        personalPage="https://research.tue.nl/en/persons/jacob-kr%C3%BCger"
    />);

export const SatrioCard = () => (
    <PersonCard
        name="Satrio Adi Rukmono"
        position="PhD Candidate"
        image={SatrioPortrait.src}
        quote="Research interests: Application of Large Language Models (LLMs) in the field of Software Architecture, Software Visualisation"
        personalPage="https://research.tue.nl/en/persons/satrio-rukmono"
    />);

export const FilipCard = () => (
    <PersonCard
    name="Filip Zamfirov"
    position="PhD Candidate"
    image={FilipPortrait.src}
    quote="Research interests: Software Architecture Erosion, Software Visualisation, Static & Dynamic Analysis"
    personalPage="https://research.tue.nl/en/persons/filip-zamfirov"
    />);

export const MerelCard = () => (
    <PersonCard
        name="Merel Veracx"
        position="PhD Candidate"
        image={MerelPortrait.src}
        quote="Research interests: Engineering AI-intensive Systems, IT Architecture, Quality in Software Engineering, Educating HBO ICT students"
        personalPage="https://www.linkedin.com/in/merel-veracx-a806115/?originalSubdomain=be"
    />);

export const FelipeCard = () => (
    <PersonCard
        name="Felipe Xavier"
        position="PhD Candidate"
        image={FelipePortrait.src}
        quote="Research interests: Low-Code, Formal Verification, Embedded Systems, and Software architecture"
        personalPage="https://research.tue.nl/en/persons/felipe-de-azeredo-coutinho-xavier"
    />);
export const KevinCard = () => (
    <PersonCard
        name="Kevin Bouwmeester"
        position="PhD Candidate"
        image={KevinPortrait.src}
        quote="Research interests: Digital Twins, Software Architecture, Game-Design, and Software Design"
        personalPage="https://research.tue.nl/en/persons/kevin-bouwmeester"
    />);

export const SupunCard = () => (
    <PersonCard
        name="Supun Wijayakoon"
        position="PhD Candidate"
        image={SupunPortrait.src}
        quote="Research interests: Software Architecture, Software Analytics, Software Visualization"
        personalPage="https://research.tue.nl/en/persons/supun-wijekoon-bandara-mudiyanselage"
    />);