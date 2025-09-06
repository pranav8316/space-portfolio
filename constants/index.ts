import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Framer Motion",
  //   image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/pranav.g._",
  },
  // {
  //   name: "Facebook",
  //   icon: FaFacebook,
  //   link: "https://facebook.com/pranav.g.11",
  // },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/pranav_g8316",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },


] as const;

// export const FULLSTACK_SKILL = [
//   {
//     skill_name: "React",
//     image: "react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Next.js 14",
//     image: "next.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Node.js",
//     image: "node.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "MongoDB",
//     image: "mongodb.png",
//     width: 40,
//     height: 40,
//   },
// ] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "Vayo",
    description: "Developed a fleet management system with live GPS tracking for trucking operations.",
    image: "/projects/project1.png",
    link: "https://vayo-nu.vercel.app/",
    github: "https://github.com/pranav8316/Project-Vayo",
  },
  {
    title: "Ayura",
    description: "Developed Ayura, an interactive and educational Virtual Herbal Garden that showcases the diverse range of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy).",
    image: "/projects/project2.png",
    link: "#link",
    github: "https://github.com/pranav8316/Ayura",
  },
  {
    title: "Bone Fracture Detection System",
    description: "I built an AI-powered Bone Fracture Detection System that uses machine learning to analyze X-ray images and accurately detect bone fractures.",
    image: "/projects/project3.png",
    link: " https://bone-fracture-detection-system1.vercel.app/",
    github: "https://github.com/pranav8316/Bone-Fracture-Detection-System1",
  },
  {
    title: "Cogito Chatbot",
    description: "Advanced conversational AI chatbot designed to provide intelligent and contextual responses.",
    image: "/projects/cogitochatbot.gif",
    link: " https://cogito-chatbot.vercel.app/",
    github: "https://github.com/pranav8316/Cogito-Chatbot",
  }
] as const;

export const CERTIFICATIONS = [
  {
    name: "Object-Oriented Data Structures in C++",
    provider: "Coursera",
    year: "2024",
    logo: "/certificates/coursera.webp", // Using existing logo as placeholder
    // link: "#",
  },
  {
    name: "Algorithmic Toolbox : University of California",
    provider: "UCSD",
    year: "2025",
    logo: "/certificates/usdiago.png",
    // link: "#",
  },
  {
    name: "Improving Deep Neural Networks",
    provider: "DeepLearning.AI",
    year: "2025",
    logo: "/certificates/deep_learning.png",
    // link: "#",
  },
  {
    name: "Data Structures and Algorithms",
    provider: "UCSD",
    year: "2024",
    logo: "/certificates/UCSD1.png", // Using existing logo as placeholder
    // link: "#",
  },
  {
    name: "Fundamentals of Network Communication",
    provider: "Coursera",
    year: "2025",
    logo: "/certificates/coursera.webp",
    // link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/pranav8316",
      },

    ],
  },
  {
    title: "Connect",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/pranav8316/",
      },
    ],
  },
  {
    title: "About",
    data: [
   
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:pranavguptaa11@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;


