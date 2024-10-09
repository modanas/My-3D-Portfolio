import {
 mobile,
 backend,
 creator,
 web,
 javascript,
 //typescript,
 html,
 css,
 reactjs,
 redux,
 tailwind,
 nodejs,
 mongodb,
 git,
// figma,
 //docker,
 meta,
 starbucks,
 tesla,
 shopify,
 carrent,
  jobit,
  tripguide,
//  threejs,
 //crimeManagement,
 //bookStore,
 //onlineChat,
} from "../assets";

export const navLinks = [
 {
   id: "about",
   title: "About",
 },
 {
   id: "work",
   title: "Work",
 },
 {
   id: "contact",
   title: "Contact",
 },
];

const services = [
 {
   title: "Web Developer",
   icon: web,
 },
 {
   title: "React JS Developer",
   icon: mobile,
 },
 {
   title: "Backend Developer",
   icon: backend,
 },
 {
   title: "MERN Stack Developer",
   icon: creator,
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
//  {
//    name: "TypeScript",
//    icon: typescript,
//  },
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
//  {
//    name: "Three JS",
//    icon: threejs,
//  },
 {
   name: "git",
   icon: git,
 },
//  {
//    name: "figma",
//    icon: figma,
//  },
//  {
//    name: "docker",
//    icon: docker,
//  },
];

const experiences = [
 {
   title: "React.js Developer",
   company_name: "Starbucks",
   icon: starbucks,
   iconBg: "#383E56",
   date: "March 2022 - April 2023",
   points: [
     "Developing and maintaining web applications using React.js and other related technologies.",
     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     "Implementing responsive design and ensuring cross-browser compatibility.",
     "Participating in code reviews and providing constructive feedback to other developers.",
   ],
 },
 {
   title: "MERN Stack Developer",
   company_name: "Tesla",
   icon: tesla,
   iconBg: "#E6DEDD",
   date: "Jan 2023 - Feb 2024",
   points: [
     "Developing and maintaining web applications using React.js and other related technologies.",
     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     "Implementing responsive design and ensuring cross-browser compatibility.",
     "Participating in code reviews and providing constructive feedback to other developers.",
   ],
 },
 {
   title: "Web Developer",
   company_name: "Shopify",
   icon: shopify,
   iconBg: "#383E56",
   date: "Jan 2023 - Jan 2024",
   points: [
     "Developing and maintaining web applications using React.js and other related technologies.",
     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     "Implementing responsive design and ensuring cross-browser compatibility.",
     "Participating in code reviews and providing constructive feedback to other developers.",
   ],
 },
 {
   title: "Full stack Developer",
   company_name: "Meta",
   icon: meta,
   iconBg: "#E6DEDD",
   date: "Jan 2024 - Present",
   points: [
     "Developing and maintaining web applications using React.js and other related technologies.",
     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
     "Implementing responsive design and ensuring cross-browser compatibility.",
     "Participating in code reviews and providing constructive feedback to other developers.",
   ],
 },
];

const testimonials = [
 {
   testimonial:
     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
   name: "Sara Lee",
   designation: "CFO",
   company: "Acme Co",
   image: "https://randomuser.me/api/portraits/women/4.jpg",
 },
 {
   testimonial:
     "I've never met a web developer who truly cares about their clients' success like Rick does.",
   name: "Chris Brown",
   designation: "COO",
   company: "DEF Corp",
   image: "https://randomuser.me/api/portraits/men/5.jpg",
 },
 {
   testimonial:
     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
   name: "Lisa Wang",
   designation: "CTO",
   company: "456 Enterprises",
   image: "https://randomuser.me/api/portraits/women/6.jpg",
 },
];

const projects = [
 {
   name: "Book Store Application",
   description:
     "Web-based platform that allows users to search for the book, and manage books they are looking for, providing a convenient and efficient solution for education needs.",
   tags: [
     {
       name: "react",
       color: "blue-text-gradient",
     },
     {
       name: "mongodb",
       color: "green-text-gradient",
     },
     {
       name: "tailwind",
       color: "pink-text-gradient",
     },
   ],
   image: carrent,
   source_code_link: "https://github.com/modanas/bookStore",
 },
 {
   name: "Crime Management",
   description:
     "Web application that enables users to streamline crime reporting and management with our MERN stack web app for efficient, real-time crime tracking and resolution.",
   tags: [
     {
       name: "react",
       color: "blue-text-gradient",
     },
     {
       name: "restapi",
       color: "green-text-gradient",
     },
     {
       name: "node",
       color: "pink-text-gradient",
     },
   ],
   image: jobit,
   source_code_link: "https://github.com/modanas/Crime_Base_Management_System",
 },
 {
   name: "Live Chatting Application",
   description:
     "A comprehensive online chat platform that allows users to communicate with each other, send chats, images and videos with other users, from any corner of the world.",
   tags: [
     {
       name: "reactjs",
       color: "blue-text-gradient",
     },
     {
       name: "expressjs",
       color: "green-text-gradient",
     },
     {
       name: "mongodb",
       color: "pink-text-gradient",
     },
   ],
   image: tripguide,
   source_code_link: "https://github.com/modanas/Whatsup-Chat-System",
 },
];

export { services, technologies, experiences, testimonials, projects };