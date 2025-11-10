// DeductiveSar
export const DEDUCTIVE_SAR_TITLE = 'Deductive Software Architecture Recovery';
export const DEDUCTIVE_SAR_INFO =
  'Our Deductive Software Architecture Reconstruction approach leverages Large Language Models (LLMs). In contrast to classical SAR techniques (bottom-up), our deductive approach defines architectural component characteristics and identifies evidence within the source code (top-down). LLMs enhance this generic capability. Our proof-of-concept, using GPT-4, demonstrates deductive reasoning by applying it to the Android app K-9 Mail, achieving 70% accuracy in classifying 54 classes and 184 methods.';
export const DEDUCTIVE_SAR_HREF = '';
export const DEDUCTIVE_SAR_CONTACTS = 'Michel Chaudron, Satrio Adi Rukmono';
export const DEDUCTIVE_SAR_STATUS = 'Active';

// COMARIC
export const COMARIC_TITLE = 'COMARIC';
export const COMARIC_INFO =
  'Software Intensive Systems must meet rigorous quality and reliability standards while being agile in responding to business stakeholders. Developing such systems faces several challenges: complexity, scale, and legacy evolution. The key approach is architecture, which provides a high-level representation of the system, illustrating how its hierarchically decomposed into subsystems and how these subsystems interact. The ultimate goal in this project is to create automated tools that maintain consistency between the architecture and the implementation.';
export const COMARIC_HREF = '';
export const COMARIC_CONTACTS = 'Michel Chaudron, Filip Zamfirov';
export const COMARIC_STATUS = 'Active';

// LowCode
export const LOW_CODE_TITLE = 'Cynergy4Me';
export const LOW_CODE_INFO =
  'The use of Low Code-approaches has proven very successful in developing business automation software. We believe the success of Low Code is the well engineered alignment of DSL + MBSE + Reference Architecture + CI/CD. In this project we are exploring the development of a method and tool for showing the feasibility of low-code for embedded systems.';
export const LOW_CODE_HREF = '';
export const LOW_CODE_CONTACTS = 'Michel Chaudron, Felipe Xavier';
export const LOW_CODE_STATUS = 'Active';

// Digital Twin for the Human Body
export const DTHB_TITLE = 'Digital Twin for the Human Body';
export const DTHB_INFO =
  'This project explored the design of Digital Twins for the Human Body (HDTs). A Proof of Concept was developed for a system based on a modular software architecture that can simulate multiple (bio-)medical models.  This system was designed to be modular so that it can easily integrate various biomedical models of different aspects of the human body. Moreover, this HDT aims to enable personalization of the simulation to individual humans.';
export const DTHB_HREF = '';
export const DTHB_CONTACTS = 'Michel Chaudron, Kevin Bouwmeester';
export const DTHB_STATUS = 'Active';

// Andromeda Project info
export const ANDROMEDA_PLATFORM_TITLE = 'The Andromeda Platform';
export const ANDROMEDA_PLATFORM_DESC =
  ' The Andromeda Platform is an instance of the Galaxy Project, being developed by us, intended specifically for software analysis. We are investigating how to leverage all of the Galaxy infrastructure to easily construct complex software analyses which are easily shared among tool builders, researchers and software practitioners.';
export const ANDROMEDA_PLATFORM_USE_DESC =
  'We have a publicly available instance of Andromeda. However, the development focus is on integrating tools into the platform and including support for various languages. Therefore, currently we are willing to share this instance with our collaborators. ';
export const ANDROMEDA_COLLABORATOR_DESC =
  'Do you have a tool that you would like to be integrated in Andromeda? Are you interesting in developing Andromeda together with us? Would you like to use it in a (research) project, or apply it in a industrial context? Do you have an idea on how to help develop a community around Andromeda. Please write us an email using the email addresses below! We are actively looking for all kinds of collaborators!';
export const ANDROMEDA_PLATFORM_HREF = './projects/galaxy';
export const ANDROMEDA_PLATFORM_CONTACTS = 'Michel Chaudron, Filip Zamfirov';
export const ANDROMEDA_PLATFORM_STATUS = 'Active';
export const GALAXY_PROJECT_DESC =
  'The Galaxy Project is an open-source, web-based platform designed for data-intensive biomedical research. The platform integrates various tools into cohesive workflows, allowing users to perform analyses through a user-friendly web interface. Additionally, it supports data integration, analysis persistence and much more. While the Galaxy project was originally intended for genomics, it is being applied in a variety of scientific fields, and has a growing international community consisting of 500 000 registered users, many developers, several yearly events and a dedicated conference.';

// ClassViz info
export const CLASSVIZ_TITLE = 'ClassViz';
export const CLASSVIZ_DESC =
  'The ClassViz tool allows you to observe the hierarchy and relationships between the (source code) elements in your software system. One aspect that differentiates ClassViz from other software visualization tools is that it relies on a language- and paradigm-agnostic interchange format. It also allows enrichment to the (graph) dataset so results of other analyses on the source code can also be presented within the tool.';
export const CLASSVIZ_HREF = '';
export const CLASSVIZ_CONTACTS = 'Michel Chaudron, Satrio Adi Rukmono';
export const CLASSVIZ_STATUS = 'Active';

// ARVISAN info
export const ARVISAN_TITLE = 'ARViSAN';
export const ARVISAN_DESC =
  'Arvisan is a hierarchical data visualization tool that allows users to interactively visualize and analyze software projects. Visualizations are rendered using so-called ”starting points”, which form the start node of the visalization. From here, the system will query any paths that satisfy the visualization settings in terms of depth, length, types, etc. The nodes and edges that lie on all the paths are then rendered on the screen, with the starting point highlighted in the visualization. By using a method like this, the size of the visualization can be greatly reduced to make the visualization more readable and performant and to reduce complexity.';
export const ARVISAN_HREF = '';
export const ARVISAN_CONTACTS = 'Michel Chaudron, Satrio Adi Rukmono, Filip Zamfirov';
export const ARVISAN_STATUS = 'Active';

// BubbleTeaViz info
export const BUBBLETEAVIZ_TITLE = 'BubbleTeaViz';
export const BUBBLETEAVIZ_DESC =
  'BubbleTea offers a different perspective on layers. Instead of focusing on dependencies, it examines how closely a software element adheres to a layers stereotypical responsibility. The traditional notion of layer violation is thus not applicable. Instead, an outlier is defined as a code element whose functionality does not align with the layer assignment of its hierarchical parent.';
export const BUBBLETEAVIZ_HREF = '';
export const BUBBLETEAVIZ_CONTACTS = 'Michel Chaudron, Satrio Adi Rukmono';
export const BUBBLETEAVIZ_STATUS = 'Active';


export const MENU_ITEMS = [
  { name: 'Industrial Collaborations', route: '/savant/industrial-collabs' },
  { name: 'SEiGS 2025', route: '/savant/seigs25' },
  { name: 'Projects & Tools', route: '/savant/projects' },
  { name: 'Knowledge Hub', route: '/savant/knowledge-hub' },
  { name: 'News', route: '/savant/news' },
  { name: 'Contact us', route: '/savant/contacts' }
];
