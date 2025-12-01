import githubIcon from '@iconify-icons/simple-icons/github';
import linkedinIcon from '@iconify-icons/simple-icons/linkedin';
import mailIcon from '@iconify-icons/mdi/email-outline';
import { images } from '@/utils/portfolioImages';

export const experiences = [
  {
    company: "Zensar",
    role: "Software Engineer",
    date: "August 2019 – April 2022",
    description: [
      "Developed and maintained React and React Native components for POS apps using TypeScript, Redux, Redux Saga, and Axios.",
      "Worked with CI/CD pipelines using CircleCI and Bitbucket.",
      "Built barcode scanning and fiscal receipt printing using XML and wireless network printer integration.",
      "Contributed to architecture discussions, test planning, and QA support.",
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "React Navigation",
      "Axios",
      "CircleCI",
      "Bitbucket",
    ],
  },
  {
    company: "Aptos Retail",
    role: "Software Developer",
    date: "May 2022 – January 2023",
    description: [
      "Maintained POS web and mobile apps with React Native and TypeScript.",
      "Implemented returns and exchange features with barcode scanning and price calculation.",
      "Handled XML-based fiscal receipt generation and network printing.",
      "Participated in architecture design and QA processes.",
    ],
    tech: [
      "React Native",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "React Navigation",
      "Axios",
      "CircleCI",
      "Bitbucket",
    ],
  },
  {
    company: "Landmark Group",
    role: "SDE (Consultant)",
    date: "January 2023 – July 2024",
    description: [
      "Built UI components for Marketplace and WMS apps using React and React Native.",
      "Developed return flow UI, map/address modules, and item selection interfaces.",
      "Implemented quality check with camera integration and MSAL-based authentication.",
      "Used Redux Saga, Fetch, and Axios for data handling; added analytics and flags.",
      "Worked with Bitbucket, Azure DevOps, and CircleCI for CI/CD.",
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Redux",
      "Redux Saga",
      "React Navigation",
      "Axios",
      "Fetch",
      "MSAL",
      "CircleCI",
      "Azure DevOps",
    ],
  },
  {
    company: "Sony India Software Centre",
    role: "SDE (Consultant)",
    date: "September 2024 – February 2025",
    description: [
      "Worked on the Web Store Payment Platform using React, Redux, Context API, and TypeScript.",
      "Developed secure and user-friendly flows for adding payment methods and handling external gateway callbacks.",
      "Streamlined payment UX with robust redirection and error handling.",
    ],
    tech: ["React", "Redux", "Context API", "TypeScript"],
  },
];

export const projects = [
  {
    name: "POS App (Aptos)",
    description:
      "Enterprise retail POS system with barcode scanning and XML-based receipt printing.",
    tech: ["React Native", "TypeScript", "Redux", "XML"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: images.posApp,
  },
  {
    name: "WMS Auth App (Zensar)",
    description:
      "Role-based access and authentication using MSAL for a warehouse management system.",
    tech: ["React", "MSAL", "TypeScript", "Tailwind"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: images.wmsApp,
  },
  {
    name: "Portfolio Website",
    description:
      "My personal site built with Next.js and Tailwind CSS, showcasing projects and experience.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    demoUrl: "/",
    githubUrl: "https://github.com/yourusername/portfolio",
    imageUrl: images.portfolioApp,
  },
  {
    name: "Pixel Survival Game",
    description:
      "2D Unity WebGL survival game inspired by Stardew Valley and Indian mythology.",
    tech: ["Unity", "C#", "Pixel Art"],
    demoUrl: "",
    githubUrl: "",
    imageUrl: "/images/game.png",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  Frameworks: ["React", "Next.js", "Redux", "Tailwind CSS", "MSAL"],
  Testing: ["Jest", "React Testing Library"],
  Tools: ["Git", "VS Code", "Figma", "Azure DevOps"],
  GameDev: ["Unity", "C#", "WebGL"],
};

export const myLinks = [
  { href: "mailto:ayushkumar0907@gmail.com", icon: mailIcon, label: "Email" },
  {
    href: "https://www.linkedin.com/in/ayush-kumar-05a262a3/",
    icon: linkedinIcon,
    label: "LinkedIn"
  },
  { href: "https://github.com/ayushkumar0907", icon: githubIcon, label: "GitHub" },
];

export const updates = [
  {
    date: "May 27, 2025",
    content: "Started working on a new pixel survival game in Unity!",
  },
  {
    date: "May 20, 2025",
    content: 'Published a blog: "Optimizing React Rendering in Large Apps"',
  },
  {
    date: "May 13, 2025",
    content:
      "Completed redesign of my personal portfolio using Next.js App Router.",
  },
];

export const funFacts = [
  "☕ Coffee-powered coding",
  "🐈 Cat dad to Mitsu & Yoru",
  "💻 Obsessed with performance",
  "🎧 Work fuel: Lo-fi + Sony XM5",
];

export const portfolioName = "Ayush";

export const portfolioDescription =
  "Frontend Developer crafting fast, accessible web experiences with React, Next.js & Tailwind.";

export const aboutMeShortDescription = `Hey! I’m a frontend developer with 5+ years of experience building clean, responsive web and mobile apps using React, React Native, and Next.js. I’ve worked on everything from retail POS systems to warehouse management tools and payment platforms — mainly at companies like Zensar, Aptos Retail, Landmark Group, and Sony India.

    I enjoy crafting smooth user experiences, managing complex app state with Redux and Context API, and diving into things like barcode scanning, MSAL auth, and even fiscal receipt printing (yep, XML and printers 🤓). I’m also pretty comfortable with CI/CD workflows using CircleCI and Azure DevOps.

    Lately, I’ve been exploring full-stack development — learning Go, GraphQL, and digging into system design. When I’m not coding, I’m either designing a pixel-art game or figuring out why my cats think my keyboard is a bed.`;

export const myJourneyDescription =
  "I started my career in frontend development five years ago, and since then, I've worked on diverse projects — from POS systems to warehouse management apps. My experience spans across React, Next.js, Redux, and Tailwind CSS. I thrive in crafting seamless UI/UX and optimizing frontend performance.";

export const callToAction =
  "Looking for a frontend dev who blends design & code?";
