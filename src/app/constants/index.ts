import { git, laravel, mongodb, nextjs, nodejs, reactjs } from "../assets";



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

export {experiences};