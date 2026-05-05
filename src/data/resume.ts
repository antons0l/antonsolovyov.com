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
      title: "Lead Software Engineer",
      company: "Tea.xyz",
      url: "https://tea.xyz",
      startDate: "Mar 2024",
      endDate: "Present",
      description: "Implemented ERC-4337 Account Abstraction to onboard Web2 users and sponsor gas fees. Integrated custom smart contracts into the frontend. Led spam detection initiative using zkPass KYC attestations and FingerprintJS. Owned delivery of DAO governance functionality using the Tally API and mentored engineers across frontend and backend systems.",
      technologies: ["TypeScript", "Solidity", "React", "Tailwind", "Node.js", "ethers.js", "Alchemy", "Web3Auth", "tRPC", "AWS Lambda", "PostgreSQL", "Prisma", "EVM L2"],
    },
    {
      id: "productfy",
      title: "Senior Full-Stack Software Engineer",
      company: "Productfy",
      startDate: "Jan 2023",
      endDate: "Feb 2024",
      description: "Developed the MVP of a digital banking web application for 10K users using Next.js on frontend and Go APIs on backend. Partnered with the risk management team to automate financial transaction data intake with the Unit21 API.",
      technologies: ["TypeScript", "GraphQL", "Go", "Java", "React", "Next.js", "Tailwind", "Node.js", "AWS Lambda", "Docker", "PostgreSQL", "Sequelize"],
    },
    {
      id: "prism",
      title: "Lead Software Developer",
      company: "Prism",
      url: "https://rmg.io/",
      startDate: "Feb 2022",
      endDate: "Jan 2023",
      description: "Collaborated with CTO to define technical roadmap and lead MVP delivery. Implemented data scraping with OpenSea, 0x, and Rarible APIs for NFT marketplace. Built a Discord bot to collect and analyze user statistics and improve engagement.",
      technologies: ["TypeScript", "React", "Next.js", "Vercel", "Firebase", "Google Cloud", "Node.js", "MongoDB", "Web3", "SEO"],
    },
    {
      id: "rally",
      title: "Senior Backend Software Engineer",
      company: "Rally",
      startDate: "Jan 2020",
      endDate: "Jan 2022",
      description: "Launched Public API gateway with Swagger documentation and led a team of 3 engineers. Maintained API uptime above 99.9% with Datadog monitoring and alerts. Increased sales by implementing Coinbase API payments. Hired and onboarded new engineers and led knowledge transfer.",
      technologies: ["TypeScript", "Scala", "API Design", "GraphQL", "Microservices", "React", "AWS", "Serverless", "Docker", "Kubernetes", "Terraform", "Web3"],
    },
    {
      id: "amdocs",
      title: "Software Developer",
      company: "Amdocs",
      startDate: "Mar 2011",
      endDate: "Aug 2019",
      description: "Developed, customized, and maintained software solutions for large telecom operators in Canada and LATAM. Worked closely with enterprise clients to solve complex business and technical requirements.",
      technologies: ["Java", "API Design", "REST APIs", "Oracle DB", "Bash", "Unix"],
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
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript / JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Web3Auth / Safe / web3.js", level: 84 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: "server",
      skills: [
        { name: "Node.js / NestJS", level: 90 },
        { name: "API Design (REST, GraphQL, tRPC)", level: 94 },
        { name: "Go / Java / Scala / Python", level: 90 },
        { name: "PostgreSQL / MongoDB / MySQL", level: 88 },
      ],
    },
    {
      id: "web3-cloud-ai",
      name: "Web3, Cloud & AI",
      icon: "layers",
      skills: [
        { name: "Solidity / ethers.js / Alchemy / EVM L2", level: 91 },
        { name: "AWS Lambda / Docker / Kubernetes / Terraform", level: 88 },
        { name: "CI/CD / DevOps / Unix", level: 88 },
        { name: "Agentic Engineering / OpenAI API / Cursor", level: 84 },
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
