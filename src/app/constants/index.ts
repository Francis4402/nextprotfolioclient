import { css, figma, git, html, javascript, laravel, mongodb, nextjs, nodejs, reactjs, redux, tailwind, typescript } from "../assets";



const experiences = [
    {
        title: "Laravel",
        icon: laravel,
        iconBg: "#E6DEDD",
        points: [
            "Developing and maintaining web applications using html css javascript .",
            "Authentication with breeze and jetstream .",
            "Livewire, Routing, Table create, model creating, Controller creating, mysql Database .",
            "Implementing responsive design and ensuring cross-browser compatibility .",
            "Participating in code reviews and providing constructive feedback to other developers .",
        ],
    },
    {
        title: "React.js",
        icon: reactjs,
        iconBg: "#383E56",
        points: [
            "Developing and maintaining web applications using React.js",
            "React Routing, State Hooks, useEffects, Data Fetching, Authentication, Private Route.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Next js",
        icon: nextjs,
        iconBg: "#E6DEDD",
        points: [
          "Developing and maintaining web applications using Next.js",
          "Next Routing, Hooks, useEffects, Data Fetching, Next-Auth, Private Route.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Mongodb",
        icon: mongodb,
        iconBg: "#383E56",
        points: [
            "Store Data files with React Node js in MongoDB",
            "Managing Data",
            "Handling Clusters",
            "Connect with nodejs backend"
        ],
    },
    {
        title: "Backend",
        icon: nodejs,
        iconBg: "#E6DEDD",
        points: [
            "Creating Api Create Read Update Delete",
            "Connect with Database",
            "Creating Server Hosting Link"
        ],
    },
    {
        title: "Git",
        icon: git,
        iconBg: "#E6DEDD",
        points: [
            "Store Files in Git from project",
            "Git Version Control",
            "Creating Branches",
        ],
    },
];

const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Next",
      icon: nextjs,
    }
  ];

export {experiences, technologies};