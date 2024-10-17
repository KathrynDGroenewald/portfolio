import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    nodejs,
    mysql,
    java,
    aws,
    angular,
    mongodb,
    git,
    figma,
    c,
    php,
    sheridan,
    mcmaster,
    musicvis,
    personalportfolio, 
    kathgpt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "My Path",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Database Skills",
      icon: mobile,
    },
    {
      title: "Software Development",
      icon: backend,
    },
    {
      title: "UI/UX Development",
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
      name: "AWS",
      icon: aws,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "MySQL",
      icon: mysql,
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
      name: "C",
      icon: c,
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
      name: "php",
      icon: php,
    },
  ];
  
  const experiences = [
    {
      title: "Teaching Assistant, Second Year Calculus",
      company_name: "McMaster University",
      icon: mcmaster,
      iconBg: "#383E56",
      date: "May 2021 - June 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Graduated with a BSc Molecular Biology (Genetics) with a Minor in Mathematics",
      company_name: "McMaster University",
      icon: mcmaster,
      iconBg: "#E6DEDD",
      date: "Apr 2022",
      points: [
      ],
    },
    {
      title: "Research Assistant Work",
      company_name: "McMaster University",
      icon: mcmaster,
      iconBg: "#383E56",
      date: "May 2022 - Dec 2023",
      points: [
      ],
    },
    {
      title: "Graduated with a Computer Programming Diploma",
      company_name: "Sheridan College",
      icon: sheridan,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Aug 2024",
      points: [
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "",
      name: "",
      designation: "C",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Music Visualizer",
      description:
        "Web-based music visualizer that allows users to upload songs and generates dynamic visuals that change shape and color in real-time based on the frequency and volume of the music.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "webaudioapi",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: musicvis,
      source_code_link: "https://www.youtube.com/watch?v=ZUqCmieAfl4",
    },
    {
      name: "My Personal Portfolio",
      description:
      "Personal portfolio website that showcases my work and incorporates 3D graphics, providing users with an interactive experience to learn about my background, skills, and projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: personalportfolio,
      source_code_link: "https://www.youtube.com/watch?v=teFyOFGGWJ0",
    },
    {
      name: "KathGPT",
      description:
      "Chat application powered by OpenAI's GPT-4, featuring a dynamic user interface that allows for real-time conversation. Users can interact seamlessly, receiving instant responses.",      
      tags: [
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "openaiapi",
          color: "green-text-gradient",
        },
        {
          name: "fullstack",
          color: "pink-text-gradient",
        },
      ],
      image: kathgpt,
      source_code_link: "https://www.youtube.com/watch?v=kZTE8J8iEzg",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };