import reactSmallBlack from '../assets/reactSmallBlack.png'
import reactSmallColor from '../assets/reactSmallColor.png'

import nextjsSmallBlack from '../assets/nextjsSmallBlack.png'
import nextjsSmallColor from '../assets/nextjsSmallColor.png'

import reduxSmallBlack from '../assets/reduxSmallBlack.png'
import reduxSmallColor from '../assets/reduxSmallColor.png'

import reactrouterSmallBlack from '../assets/reactrouterSmallBlack.png'
import reactrouterSmallColor from '../assets/reactrouterSmallColor.png'

import figmaSmallColor from '../assets/figmaSmallColor.png'
import figmaSmallBlack from '../assets/figmaSmallBlack.png'

import tailwindSmallColor from '../assets/tailwindSmallColor.png'
import tailwindSmallBlack from '../assets/tailwindSmallBlack.png'

import cssSmallColor from '../assets/cssSmallColor.png'
import cssSmallBlack from '../assets/cssSmallBlack.png'

import githubSmallColor from '../assets/githubSmallColor.png'
import githubSmallBlack from '../assets/githubSmallBlack.png'

import vercelSmallColor from '../assets/vercelSmallColor.png'
import vercelSmallBlack from '../assets/vercelSmallBlack.png'

import netlifySmallColor from '../assets/netlifySmallColor.png'
import netlifySmallBlack from '../assets/netlifySmallBlack.png'

import viteSmallColor from '../assets/viteSmallColor.png'
import viteSmallBlack from '../assets/viteSmallBlack.png'


import behanceSmallColor from '../assets/behanceSmallColor.png'
import behanceSmallBlack from '../assets/behanceSmallBlack.png'

import dribbleSmallColor from '../assets/dribbleSmallColor.png'
import dribbbleSmallBlack from '../assets/dribbleSmallBlack.png'

// doruko images  
import dorukoProThumb from '../assets/dorukoProThumb.png'
import dorukoS1 from '../assets/doruko1.png'
import dorukoS2 from '../assets/doruko2.png'
import dorukoS3 from '../assets/doruko3.png'
import dorukoS4 from '../assets/doruko4.png'

// portfolio images  
import portfolioProThumb from '../assets/portfolioProThumb.png'
import portfolioS1 from '../assets/portfolio1.png'
import portfolioS2 from '../assets/portfolio2.png'
import portfolioS3 from '../assets/portfolio3.png'

//  touro images  
import grocifyProThumb from '../assets/grocifyThumb.png'






const myProjects = [
  // doruko
  {
    id: 'doruko',
    thumbImg: dorukoProThumb,
    thumTitle: 'Doruko - food delivery',
    thumbDescription: 'A Food Delivery Website and UI/UX.',
    thumbURL: 'doruko',
    projTags: [
      "ReactJS",
      "Redux",
      "Figma",
      "CSS3",
      "FrontEnd",
      "ecommerce",
      "food Delivery",
    ],
    projInfo: [
      {
        title: "Frontend",
        subTitle: "client side"
      },
      {
        title: "Food Delivery",
        subTitle: "ecommerce"
      }
    ],
    thumbTech: [
      {
        img: reactSmallColor,
        title: 'React'
      },
      {
        img: reduxSmallColor,
        title: 'Redux'
      },
      {
        img: figmaSmallColor,
        title: 'Figma'
      },
      {
        img: cssSmallColor,
        title: 'CSS3'
      },
      {
        img: reactrouterSmallColor,
        title: 'React Router'
      },
    ],
    projTitle: 'Doruko - Food Delivery Website',
    projScreenshots: [
      dorukoS4, dorukoS3, dorukoS2, dorukoS1
    ],
    projOverview: 'I led the development of a dynamic and user-centric food delivery website using React, featuring a seamless and intuitive interface. The project was meticulously designed to enhance the overall user experience through the implementation of React Hooks, Router, and Icons.',
    projTech: [
      {
        name: "React.js",
        description: "A powerful JavaScript library for building user interfaces, known for its component-based architecture and efficiency.",
        icon: reactSmallBlack,
      },
      {
        name: "React Router",
        description: "Ensured a smooth and seamless user experience by implementing React Router for single-page application navigation.",
        icon: reactrouterSmallBlack,
      },
      {
        name: "Figma",
        description: "Utilized Figma for designing and prototyping the user interface, ensuring a visually appealing and interactive design that aligns with modern design principles.",
        icon: figmaSmallBlack,
      },
      {
        name: "Redux",
        description: "Implemented a robust state management system using Redux, enabling efficient data flow and a streamlined cart-to-order process.",
        icon: reduxSmallBlack,
      },
      {
        name: "CSS3",
        description: "Utilized CSS3 for styling and layout, enhancing the visual aesthetics and responsiveness of the application.",
        icon: cssSmallBlack
      },
      {
        name: "Vite",
        description: "Leveraged Vite as a fast and efficient build tool for the project, optimizing the development workflow and enhancing performance.",
        icon: viteSmallBlack
      },
      {
        name: "Dribbble",
        description: "Integrated Dribbble for uploading Figma design, facilitating collaboration and feedback in the design process.",
        icon: dribbbleSmallBlack,
      },
      {
        name: "Vercel",
        description: "Deployed the website on Vercel for hosting, ensuring a reliable and scalable platform for the live application.",
        icon: vercelSmallBlack,
      }
    ],
    keyFeatures: [
      "User-Friendly Interface",
      "Cart-to-Order Process",
      "Central Storage with Redux",
      "Design with Figma",
      "React Hooks and Router",
      "Icon Integration"
    ],
    achievements: [
      "Successfully launched a fully functional food delivery website.",
      "Demonstrated expertise in utilizing cutting-edge technologies.",
      "Received recognition for the thoughtful integration of diverse food categories."
    ],
    futureImprovements: [
      "complete add to cart process depiction with redux and context Api",
      "intigrate with backend technologies like mongoodb",
      "capturing more diverse food categories"
    ],
    conclusion: "The React-Based Food Delivery Website project showcases my proficiency in front-end development, UI/UX design, and state management. It highlights my commitment to delivering high-quality, user-centric solutions in the ever-evolving landscape of web development."
  },
  // touro
  {
    id: 'Touro',
    thumbImg: grocifyProThumb,
    thumTitle: 'Touro - travel Website',
    thumbDescription: 'A Travel planner Website and UI/UX.',
    thumbURL: 'touro',
    thumbTech: [
      {
        img: reactSmallColor,
        title: 'React'
      },
      {
        img: figmaSmallColor,
        title: 'Figma'
      },
      {
        img: cssSmallColor,
        title: 'CSS3'
      },
      {
        img: reactrouterSmallColor,
        title: 'React Router'
      },
    ],
    projTags: [
      "travelWebsite",
      "FrontEnd",
      "ReactJs",
      "CSS3",
    ],
    projInfo: [
      {
        title: "Frontend",
        subTitle: "client side"
      },
      {
        title: "Travel",
        subTitle: "booking"
      }
    ],
    projTitle: "Touro - Dynamic Travel Website",
    projScreenshots: [
      dorukoS1, dorukoS2, dorukoS3, dorukoS4
    ],
    projOverview: "Developed Touro, a dynamic travel website using ReactJS, offering an intuitive platform for exploration, itinerary planning, and real-time updates. The project aimed to provide users with a seamless and engaging travel experience.",
    projTech: [
      {
        name: "ReactJS",
        description: "Utilized ReactJS to build a dynamic and responsive user interface, leveraging its component-based architecture for efficient development and maintenance.",
        icon: reactSmallBlack,

      },
      {
        name: "React Icons",
        description: "Enhanced the user interface with interactive and visually appealing icons using React Icons, adding a modern and intuitive touch to the design.",
        icon: reactSmallBlack,

      },
      {
        name: "Figma",
        description: "Collaborated on the design process using Figma, creating a modern and visually appealing layout that prioritizes user engagement and exploration.",
        icon: figmaSmallBlack,

      },
      {
        name: "Vanilla CSS",
        description: "Designed a responsive and visually appealing layout with Vanilla CSS, ensuring an optimal user experience across various devices and screen sizes.",
        icon: cssSmallBlack,
      }
    ],
    keyFeatures: [
      "Intuitive Exploration",
      "Itinerary Planning",
      "Real-time Updates",
      "Interactive UI with React Icons",
      "Modern and Visually Appealing Layout"
    ],
    achievements: [
      "Successfully developed and launched Touro, a dynamic travel website.",
      "Provided users with an intuitive platform for exploration and itinerary planning.",
      "Received positive feedback for the modern and visually appealing design."
    ],
    futureImprovements: [
      "Integration of personalized user accounts for enhanced planning and tracking.",
      "Incorporation of real-time collaboration features for group travel planning."
    ],
    conclusion: "Touro represents my dedication to creating immersive and user-centric web experiences. The combination of ReactJS, React Icons, Figma, and Vanilla CSS allowed me to deliver a feature-rich travel website with a modern design, ensuring a memorable and enjoyable experience for users."
  },
  // portfolio
  {
    id: 'Portfolio',
    thumbImg: portfolioProThumb,
    thumTitle: 'Portfolio - Website',
    thumbDescription: 'portfolio Website and UI/UX.',
    thumbURL: 'portfolio',
    thumbTech: [
      {
        img: reactSmallColor,
        title: 'React'
      },
      {
        img: figmaSmallColor,
        title: 'Figma'
      },
      {
        img: tailwindSmallColor,
        title: 'tailwind'
      },
      {
        img: nextjsSmallColor,
        title: 'next Js'
      },
    ],
    projTags: [
      "Portfolio",
      "Figma",
      "FrontEnd",
      "NextJs",
      "Tailwind",
    ],
    projInfo: [
      {
        title: "Frontend",
        subTitle: "client side"
      },
      {
        title: "Personal Portfolio",
        subTitle: "online Resume/CV"
      }
    ],
    projTitle: "Portfolio Website with Next.js 14",
    projScreenshots: [
      portfolioS1, portfolioS2, portfolioProThumb,portfolioS3
    ],
    projOverview: "Developed a portfolio website using Next.js 14, featuring a simplified UI designed with Figma. The project prioritized a clean and intuitive design, efficient routing with Next.js built-in app router, and utilized the Tailwind CSS library. The portfolio is fully responsive, making it accessible across various devices, and incorporates a Redux store as the single source of truth for data throughout the entire website. Additionally, the project leverages Next.js's server-side rendering feature for optimal performance and user experience.",
    projTech: [
      {
        name: "Next.js 14",
        description: "Utilized the latest version of Next.js to build a performant and modern portfolio website, taking advantage of its features like built-in app router and server-side rendering.",
        icon: nextjsSmallBlack,
      },
      {
        name: "React js",
        description: "A powerful JavaScript library for building user interfaces, known for its component-based architecture and efficiency.",
        icon: reactSmallBlack,
      },
      {
        name: "Figma",
        description: "Designed a simplified and intuitive UI using Figma, ensuring a cohesive and visually appealing layout for the portfolio website.",
        icon: figmaSmallBlack,
      },
      {
        name: "Tailwind CSS",
        description: "Integrated the Tailwind CSS library for efficient styling, enabling rapid development and ensuring a consistent and responsive design across devices.",
        icon: tailwindSmallBlack,
      },
      {
        name: "Redux",
        description: "Implemented a Redux store as the single source of truth for data in the entire website, providing a centralized and efficient state management solution.",
        icon: reduxSmallBlack,
      }
    ],
    keyFeatures: [
      "Simplified UI Designed with Figma",
      "Efficient Routing with Next.js App Router",
      "Fully Responsive Portfolio",
      "Utilization of Tailwind CSS for Styling",
      "Redux Store as Single Source of Truth",
      "Server-Side Rendering with Next.js Components"
    ],
    achievements: [
      "Successfully developed and launched a portfolio website using Next.js 14.",
      "Designed a simplified and visually appealing UI that enhances user experience.",
      "Implemented efficient routing and fully responsive design for optimal accessibility.",
      "Utilized Redux for streamlined state management across the entire website."
    ],
    futureImprovements: [
      "Integration of additional interactive elements for enhanced user engagement.",
      "Exploration of further optimizations leveraging the latest features of Next.js."
    ],
    conclusion: "The development of this portfolio website showcases my commitment to creating modern, responsive, and user-centric web experiences. Leveraging Next.js, Figma, Tailwind CSS, and Redux allowed me to build a feature-rich and visually pleasing portfolio that reflects my skills and achievements in web development."
  }
]
export default myProjects;