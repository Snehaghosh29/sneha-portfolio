import company1 from "../../public/c1.jpeg";


import cert1 from "../../public/cert1.png";
import cert2 from "../../public/cert2.png";
import cert3 from "../../public/cert3.png";
import cert4 from "../../public/cert4.png";

export const PROFILE = {
  name: "Sneha Ghosh",
  city: "Kolkata, West Bengal, India",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  {
    title: "Customer Churn Prediction (ML)",
    description:
      "Machine learning model to predict customer churn using feature engineering, EDA, and classification algorithms.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    link: "https://github.com/Snehaghosh29/customer-churn-prediction-for-bank",
  },
  {
    title: "Online PG Booking System (MERN)",
    description:
      "A complete MERN stack web app with user/owner/admin modules, bookings, authentication, and secure payment flow.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Snehaghosh29/my-mern-project",
  },
   {
  title: "Visual Product Matcher ",
  description:
    "AI fashion matcher using MobileNetV2 embeddings with Flask + MongoDB backend and Next.js frontend for visually similar products via image upload or URL.",
  tech: ["Next.js", "Flask", "MongoDB", "MobileNetV2", "TailwindCSS"],
  link: "https://github.com/Snehaghosh29/VisualProductMatcher",
},
  
  {
    title: "Waste Hotspot Detection After Natural Disaster (AI)",
    description:
      "CNN-based deep learning model achieving 96.9% accuracy for detecting waste hotspots in post-disaster images.",
    tech: ["TensorFlow", "CNN", "Image Processing", "Streamlit"],
    link:
      "https://github.com/Snehaghosh29/Post-disaster-litter-hotspot-detection-using-deep-learning",
  },
 {
    title: "Bank Management System",
    description:
      "Python-based bank automation system for accounts, transactions, balance management, and user operations.",
    tech: ["Java", "OOP", "MySQL"],
    link: "https://github.com/Snehaghosh29/bank-management-system",
  },
];

export const CERTIFICATES = [
  {
    name: "Network Cardinals",
    image: cert1,
    url: "https://drive.google.com/file/d/1zj89fBI9-KRkvwTZwCK1H-LmK2075fhq/view?usp=drive_link",
  },
  {
    name: "Fundamental Of Deep Learning",
    image: cert2,
    url: "https://drive.google.com/file/d/1OA90uGe8k32C6LltJoSRI-pFIeCQCt9L/view?usp=drive_link",
  },
  {
    name: "Workshop on GenAI",
    image: cert3,
    url: "https://drive.google.com/file/d/1GJ0j1-I06xLy3b4ZgMkHwSZkgLlPQOfJ/view?usp=drive_link",
  },
  {
    name: "Git for Beginners",
    image: cert4,
    url: "https://drive.google.com/file/d/1Tqj1efCSaVsftCIIKT8HvZHxn3JA-wUp/view?usp=drive_link",
  },
];

export const SKILLS = [
  "React, Angular,Next",
  "Node.js, Express, Django",
  "PostgreSQL, MySQL, MongoDB, ",
  "Java, Python, C++"
];

export const EXPERIENCES = [
  {
    img: company1,
    year: "2023 - 2024",
    role: "Junior Web developer",
    company: "Indegene Pvt Ltd",
    description: `Developed and maintained web applications, implemented Twitter Card/Open Graph metadata for social media
optimization, implemented HTML5 and CSS3 in Drupal for building and customizing web page components and
themes, enhanced UI/UX with Adobe Photoshop and Adobe XD, and ensured high performance and accessibility
across multiple platforms.`,
    technologies: ["Javascript", "HTML", "CSS", "Drupal"],
  }, 
];
