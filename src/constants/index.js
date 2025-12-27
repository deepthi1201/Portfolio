import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  express,
  html,
  quickai,
  css,
  reactjs,
  redux,
  next,
  tailwind,
  nodejs,
  mongodb,
  git,
  Chat,
  chat01,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iit_guwahati,
  GenAiLakes,
  postgreSQL,
  Mojito,
  logo01,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tech Enthusiast",
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
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
    name: "postgreSQL",
    icon: postgreSQL,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
  title: "Research & Machine Learning Intern",
  company_name: "Indian Institute of Technology (IIT) Guwahati",
  icon: iit_guwahati,   
  iconBg: "#383E56",
  date: "Nov 2024 - Jan 2025",
  points: [
    "Worked on optimizing e-commerce pricing strategies using Machine Learning and Deep Reinforcement Learning techniques.",
    "Designed and implemented predictive models using Linear Regression to analyze pricing behavior and improve decision accuracy.",
    "Collaborated with academic mentors and research teams to build scalable, real-world applicable AI solutions.",
    "Gained hands-on expertise in ML model training, evaluation, and performance optimization using real-time datasets."
  ],
},

  {
  title: "AI & Web Development Intern",
  company_name: "GenAiLakes Pvt Ltd (T-Hub Hyderabad)",
  icon: GenAiLakes,   
  iconBg: "#4B0082",
  date: "May 2025 - Jul 2025",
  points: [
    "Completed a certified internship in Artificial Intelligence at GenAiLakes Pvt Ltd, T-Hub Hyderabad.",
    "Worked on AI-based projects and contributed to real-time applications in a collaborative development environment.",
    "Built, tested, and optimized intelligent features under the guidance of senior technical mentors.",
    "Demonstrated strong dedication, professionalism, problem-solving skills, and a growth mindset throughout the internship."
  ],
},

 
];

const testimonials = [
  {
    testimonial:
      "during the internship at GenAiLakes, Deepthi showcased exceptional skills in AI and web development, delivering high-quality work and demonstrating a strong commitment to learning.",
    name: "Chilukala Sreenivas",
    designation: "CEO",
    company: "GenAiLakes Pvt Ltd",
    image: "https://static-asset.inc42.com/person/chilukala-sreenivas-355456300.png",
  },
  {
    testimonial:
      "During her internship at IIT Guwahati, Deepthi demonstrated strong analytical thinking and exceptional dedication while working on advanced machine learning research. ",
    name: "Prof. S. V. Rao",
    designation: "Department of Computer Science & Engineering",
    company: "Indian Institute of Technology (IIT) Guwahati",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQevj7EeMbqpR_cj73jxqwESAQUVio-YTr6zA&s",
  },
 
];

const projects = [
  {
    name: "GSAP Cocktails Mojito",
    description:
      "A modern, scroll-driven website where animations and design come together to create an immersive experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      }
    ],
    image: Mojito,
    source_code_link: "https://lnkd.in/eBxMcCGf",
  },
  {
    name: "QuickChat",
    description:
      "Say hello to QuickChat - a real-time chat application  built with a modern UI, smooth interactions, and lightning-fast messaging.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "orange-text-gradient",
      }
      
     
    ],
    image: chat01,
    source_code_link: "https://lnkd.in/gNRaYFbM",
  },
  {
    name: "Quick AI",
    description:
      "A powerful AI automation platform that helps users generate content, create images, remove backgrounds, review resumes, and streamline their productivity with AI tools.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Neon",
        color: "pink-text-gradient",
      },
      {
        name: "gemini api",
        color: "orange-text-gradient",
      }
    ],
    image: quickai,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
