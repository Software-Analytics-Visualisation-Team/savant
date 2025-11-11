# SAVANT Team Website  
*“savant (noun): a learned person, especially a distinguished scientist.”*  

## About  
This repository houses the source code and content for the website of the Software‑Analytics‑Visualisation‑Team (SAVANT).  
The site is intended to serve as the public face for the group: showcasing research, projects, members, publications, events, and other outputs of the team.

You can view the live website here:  
[https://software-analytics-visualisation-team.github.io/savant/](https://software-analytics-visualisation-team.github.io/savant/)

## Table of Contents  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Development](#development)  
- [Structure](#structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  
- [Acknowledgements](#acknowledgements)

## Features  
- Built as a static site/web‑frontend using Next.js + TypeScript  
- Tailwind CSS for styling (`tailwind.config.ts`) and PostCSS configuration (`postcss.config.js`)  
- ESLint and Prettier configuration to enforce code quality and formatting standards  
- `public/` folder for static assets and `app/` folder for main application code  
- GitHub Actions workflows in `.github/workflows/` for CI/build/deploy  
- MIT License

## Getting Started  
### Prerequisites  
- Node.js (check `package.json` for exact version)  
- Yarn or npm  
- Git

### Installation  
```bash
git clone https://github.com/Software-Analytics-Visualisation-Team/savant.git
cd savant
npm install   # or yarn install
```

### Running Locally
```bash
npm run dev  # or yarn dev
```

This starts the development server (likely on http://localhost:3000).

### Deploying

Deployment is likely via GitHub Pages; check .github/workflows/ for automation details.

### Structure
```lua
/
├─ .github/workflows/      → CI/CD workflows
├─ app/                    → Application source code (pages/components etc)
├─ public/                 → Static assets (images, icons, etc)
├─ .eslintrc.json          → ESLint config
├─ .prettierrc             → Prettier config
├─ next.config.mjs         → Next.js config
├─ package.json            → Dependencies & scripts
├─ tailwind.config.ts      → Tailwind CSS config
├─ tsconfig.json           → TypeScript config
└─ README.md               → This file
```

### Contributing

We welcome contributions! Fix typos, update team info, add new projects, or improve UI/UX.

### How to propose changes

Create a new branch (git checkout -b feature/YourFeature)

1. Make changes, commit, and push
2. Open a Pull Request with a description
3. Changes will be reviewed and merged

### Guidelines

- Follow ESLint/Prettier code style
- Use meaningful commit messages
- Optimize images and assets added to public/

### License

This project is licensed under the MIT License — see the LICENSE
 file.

#### Contact

Reach out via the team website: https://software-analytics-visualisation-team.github.io/savant/

### Acknowledgements

Built with Next.js, Tailwind CSS, and TypeScript