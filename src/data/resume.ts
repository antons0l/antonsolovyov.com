export interface Experience {
  id: string;
  title: string;
  company: string;
  url?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
  githubUrl?: string;
  liveUrl?: string;
  award?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface ResumeData {
  name: string;
  title: string;
  tagline: string;
  email: string;
  experience: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
  };
}

export const resumeData: ResumeData = {
  name: "Anton Solovyov",
  title: "Senior Software Engineer",
  tagline: "Building scalable solutions in Web2 and Web3",
  email: "antonsolovyov@gmail.com",
  
  experience: [
    {
      id: "tea-xyz",
      title: "Senior Software Engineer",
      company: "Tea.xyz",
      url: "https://tea.xyz",
      startDate: "Mar 2024",
      endDate: "Present",
      description: "Implemented front-end integrations with custom smart contracts for a Web3 platform serving 1M users. Utilized ERC-4337 Account Abstraction to onboard Web2 users and sponsor gas fees. Led spam detection efforts using zkPass KYC attestations and FingerprintJS. Implemented DAO governance functionality via Tally API.",
      technologies: ["TypeScript", "Solidity", "React", "Tailwind", "Node.js", "ethers.js", "Alchemy", "Web3Auth", "tRPC", "AWS Lambda", "PostgreSQL", "Prisma", "EVM L2"],
    },
    {
      id: "productfy",
      title: "Senior Full-Stack Software Engineer",
      company: "Productfy",
      startDate: "Jan 2023",
      endDate: "Feb 2024",
      description: "Developed MVP of a digital bank web application for 10k users, utilizing Next.js for the frontend and a Golang API for the backend. Partnered with the risk management team to automate the intake of financial transaction data with Unit21 API.",
      technologies: ["TypeScript", "GraphQL", "Go", "Java", "React", "Next.js", "Tailwind", "Node.js", "AWS Lambda", "Docker", "PostgreSQL", "Sequelize"],
    },
    {
      id: "rainmaker-games",
      title: "Lead Software Developer",
      company: "Rainmaker Games",
      url: "https://rmg.io/",
      startDate: "Feb 2022",
      endDate: "Jan 2023",
      description: "Worked with the CTO to build the gaming portal MVP. Implemented data scraping with OpenSea, 0x, and Rarible APIs for the NFT marketplace. Expanded the customer base by integrating MetaMask wallet sign-in. Built a Discord bot to collect and analyze user statistics.",
      technologies: ["TypeScript", "React", "Next.js", "Vercel", "Firebase", "Google Cloud", "Node.js", "MongoDB", "Web3", "SEO"],
    },
  ],

  projects: [
    {
      id: "getcareerup",
      title: "CareerUp",
      description: "Helps candidates write or improve their CVs.",
      technologies: ["Typescript", "React", "Vercel", "AI"],
      image: "/projects/getcareerup.png",
      url: "https://www.getcareerup.com/",
    },
    {
      id: "unipint",
      title: "Unipint",
      description: "Finds the sports bars to watch your sporting events",
      technologies: ["Typescript", "Angular", "Ionic", "Firebase"],
      image: "/projects/unipint.png",
      url: "https://unipint.com/",
    },
    {
      id: "myqrbot",
      title: "My QR Bot",
      description: "Free QR Code Generator Telegram Bot",
      technologies: ["Typescript", "Cloudflare", "Prisma", "Telegram"],
      image: "/projects/myqrbot.png",
      url: "https://myqrbot.com/",
    },
  ],

  skillCategories: [
    {
      id: "frontend",
      name: "Frontend",
      icon: "cube",
      skills: [
        { name: "React / Next.js", level: 85 },
        { name: "TypeScript", level: 92 },
        { name: "HTML / CSS / Tailwind", level: 80 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: "server",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "API / REST / GraphQL", level: 93 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "Go / Java / Scala", level: 90 },
      ],
    },
    {
      id: "web3-cloud",
      name: "Web3 & Cloud",
      icon: "layers",
      skills: [
        { name: "AWS / Google Cloud", level: 88 },
        { name: "Docker / Terraform", level: 80 },
        { name: "Ethers / Viem", level: 90 },
        { name: "CI/CD / GitHub Actions", level: 88 },
      ],
    },
  ],

  social: {
    github: "https://github.com/antons0l",
    linkedin: "https://www.linkedin.com/in/anton-solovyov/",
    twitter: "https://twitter.com/anton_solov",
    facebook: "https://www.facebook.com/anton.solovyov",
  },
};
