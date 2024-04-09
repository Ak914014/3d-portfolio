import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    docker,
    cu,
    cn,
    dashboard,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
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
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    
    {
      title: "Full Stack web developer",
      company_name: "Coding ninjas",
      icon: cn,
      iconBg: "#E6DEDD",
      date: "June 2023 - Persnet",
      
    },
    {
      title: "Maters of Computer Applicaiton",
      company_name: "Chandigarh University",
      icon: cu,
      iconBg: "#383E56",
      date: "oct 2021 - june 2023",
    },
   
  ];
  
  const projects = [
    {
      name: "Dashboard",
      description:
        "Web-based platform that allows admin to add, delete, and upadate user details and show case the details via chart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/Ak914014/Dashboard",
    },
    {
      name: "Animated webpage ",
      description:
        "Web application that gives better user exprience and with the cool animations user will attract to this page. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Ak914014/animated-webpage-",
    },
    {
      name: "Ai image generator",
      description:
        "This is simmeler to Dall-E ai image genrator, in this project user can genrate image via proivding some informaton about the image.",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name:"open AI",
          color:"blue-text-gradient"
        }
      ],
      image: tripguide,
      source_code_link: "https://github.com/Ak914014/ai-image-generator",
    },
  ];
  
  export { services, technologies, experiences,  projects };