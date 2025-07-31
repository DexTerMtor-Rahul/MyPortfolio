const words = [
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
];

const navLinks = [
  {
    name: "Stats",
    link: "#leetcode-counter",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Abilities",
    link: "#abilities",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

// Configuration file for personal information
export const config = {
  // Replace with your actual LeetCode username
  leetcodeUsername: "DexTerMtor",

  // You can add other personal configurations here
  personalInfo: {
    name: "Rahul Raj",
    title: "MCA Graduate & Software Developer",
    description:
      "Hi, I'm Rahul Raj, an MCA graduate and Software Developer who loves turning ideas into secure, real-world solutions.",
  },

  // Social media handles
  social: {
    github: "DexTerMtor-Rahul",
    linkedin: "dextermtor-rahulraj",
    leetcode: "DexTerMtor",
  },
};

export default config;

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

// LeetCode counter items - will be populated dynamically
const leetcodeCounterItems = [
  {
    key: "totalSolved",
    suffix: "",
    label: "Problems Solved",
    color: "text-orange-100",
  },
  {
    key: "easySolved",
    suffix: "",
    label: "Easy Problems",
    color: "text-green-500",
  },
  {
    key: "mediumSolved",
    suffix: "",
    label: "Medium Problems",
    color: "text-yellow-500",
  },
  {
    key: "hardSolved",
    suffix: "",
    label: "Hard Problems",
    color: "text-red-400",
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/c.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Rahul joined Profinch with enthusiasm and a problem-solving mindset, quickly adapting to our development stack and contributing effectively to product enhancements.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Junior Software Developer – Profinch Solutions",
    date: "August 2025 – Present",
    responsibilities: [
      "Collaborating on core banking and fintech solutions, contributing to both frontend and backend modules.",
      "Working closely with cross-functional teams to implement new features and resolve technical issues.",
      "Writing clean, scalable code while adhering to best practices and code review processes.",
      "Participating in agile ceremonies and contributing to sprint planning and estimations.",
    ],
  },
  {
    review:
      "Rahul played a pivotal role in developing automation portals that significantly enhanced IT compliance and security visibility. His full-stack contributions were instrumental to our workflow improvements.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "SDE Intern",
    date: "January 2025 – July 2025",
    responsibilities: [
      "Developed scalable full-stack web applications using React.js, Flask, and SQL Server, focusing on modular design and maintainability.",
      "Automated enterprise workflows with PowerShell and integrated Microsoft Active Directory and Spotfire for compliance and monitoring solutions.",
      "Collaborated in an agile environment using tools like JIRA, Git, and Confluence, contributing to sprint planning, code reviews, and documentation.",
      "Delivered clean, well-documented code with an emphasis on performance optimization, debugging, and production-readiness across Windows-based systems.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  leetcodeCounterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
