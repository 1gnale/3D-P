import { meta, scaleIA, prototypedevs, amipet } from "../../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    threads,
    postgresql
} from "../../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database"
    }
];

export const experiences = [
    {
        title: "Full Stack Developer",
        company_name: "Prototype-devs",
        icon: prototypedevs,
        iconBg: "#fbc3bc",
        date: "August 2023 - September 2023",
        points: [
            "I worked as a Full Stack developer at the Spanish startup Prototype-Devs Developing software.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "My main role was to develop routes on the back-end using Express with Node.js and MongoDB as our database.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "During my time there, I had the opportunity to demonstrate my ability to learn new technologies on the fly, while also fulfilling my responsibilities in a timely manner."
        ],
    },
    {
        title: "Front-end React.js Developer",
        company_name: "Amipet",
        icon: amipet,
        iconBg: "#a2d2ff",
        date: "September 2023 - December 2023",
        points: [
            "I joined as a voluntary Front-end developer at the Chilean project Amipet, aiming to improve the quality of life for animals developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "My tasks involved the layout design of components, connecting with the back-end, form validation, and utilizing React states, among other responsibilities. We primarily used Material UI for styling purposes.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "IA Trainer",
        company_name: "Scale IA",
        icon: scaleIA,
        iconBg: "#b7e4c7",
        date: "December 2023 - Present",
        points: [
            "I currently work on training generative AIs for code.",
            "Based on a prompt and a set of responses, I evaluate their quality, accuracy, security, and correctness.",
            "I focus on aspects related to JavaScript, ReactJs, and NodeJs primarily. However, at times, I also assess other languages and technologies such as Python, C++, C, Java, AWS, etc.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-commerce web',
        description: 'Developed a web e-commerce with some friends. It have connection to the PayPal API, an admin dashboard, login with Auth0, and more!.',
        link: 'https://vimeo.com/805350891',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Dogs App',
        description: 'Developed a web application for practice, I also developed a back-end for the app. See the code bellow.',
        link: 'https://github.com/1gnale/HenryDogs',
    },
];