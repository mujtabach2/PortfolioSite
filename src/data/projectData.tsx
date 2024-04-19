import { FiGithub, FiLink } from "react-icons/fi";
import {
  FirebaseBadge,
  MongoBadge,
  NodeBadge,
  PythonBadge,
  ReactBadge,
  SeleniumBadge,
  OpenCVBadge,
  ComputerVisionBadge,
  GitBadge,
  JavaScriptBadge,
  HTMLCSSBadge,
  StreamlitBadge,
  PandasBadge,
  JupyterBadge,
  FlaskBadge,
  FinRlBadge,
  JavaBadge
} from "../components/Projects/TechBadges";

import { ProjectT } from "./types";
import abc from "./images/abc.png";
import doctorConnect from "./images/DoctorConnect.png";
import intelliChat from "./images/IntelliChat.png";
import rubiksCubeSolver from "./images/solve.gif";
import nbaLineupAnalysis from "./images/nbaAnalysis.png";
import Billionaire from "./images/BillionareData.avif";
import stock from "./images/stock.png";
import chessHub from "./images/chessHub.png";

export const projectData: ProjectT[] = [
  {
    name: "ChessHub",
    imageSrc: chessHub,
    id: "chess-hub",
    type: "Web app",
    tagline: "A platform providing real-time chess, puzzles, and ai bot integration",
    tags: [
      <JavaScriptBadge />,
      <HTMLCSSBadge />,
      <JavaBadge />,

    ],
    description:
      "Led development of ChessHub, a real-time chess platform built with Java, WebSockets, and modern front-end technologies. Implemented complex chess logic and AI integration to create a scalable and engaging multiplayer experience.",
    links: [
      {
        link: "https://github.com/mujtabach2/chess-hub",
        icon: <FiGithub />,
      
      },

    ]

  },
  {
    name: "SharpeTrade",
    imageSrc: stock,
    id: "sharpe-trade",
    type: "Web app",
    tagline: "A platform providing trading signals and insights for investors",
    tags: [
      <ReactBadge />,
      <FlaskBadge />,
      <FirebaseBadge />,
      <PythonBadge/>,
      <PandasBadge />,
      <JavaScriptBadge />,
      <FinRlBadge />,

    ],
    description:
      "Independently engineered a profiting full-stack stock analysis platform integrating FinRl, Firebase, and custom API integration’s to provide daily stock signals",
    links: [
      {
        link: "https://github.com/mujtabach2/tradingSite",
        icon: <FiGithub />,
      
      },

    ]


  },
  {
    name: "Doctor Connect",
    imageSrc: doctorConnect,
    id: "doctor-connect",
    type: "Web app",
    tagline: "A doctor lookup site for healthcare professionals",
    tags: [
      <ReactBadge />,
      <NodeBadge />,
      <MongoBadge />,
      <FirebaseBadge />,
      <SeleniumBadge />,
    ],
    description:
      "Developed a robust doctor lookup site using the MERN stack, connecting and serving a vast network of over 1,000 doctors, streamlining the process of finding healthcare professionals for patients in need.",
    links: [
      {
        link: "https://github.com/mujtabach2/DoctorLookup",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },
  {
    name: "IntelliChat",
    id: "intelli-chat",
    imageSrc: intelliChat,
    type: "Web app",
    tagline: "An AI-driven language learning chat tool",
    tags: [
      <ReactBadge />,
      <NodeBadge />,
      <PythonBadge />,
      <FirebaseBadge />,
      <SeleniumBadge />,
    ],
    description:
      "Conceived the Intelli Chat Generator, utilizing cutting-edge Artificial intelligence (AI) to create a transformative language learning tool. Orchestrated immersive chat interactions with an advanced AI bot, supporting proficiency in 15+ languages and elevating the learning experience.",
    links: [
      {
        link: "https://github.com/mujtabach2/LangauageApp",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },
  {
    name: "Rubik’s Cube Solver",
    imageSrc: rubiksCubeSolver,
    id: "rubiks-cube-solver",
    type: "Project",
    tagline: "An advanced Rubik’s Cube solver using computer vision",
    tags: [
      <PythonBadge />,
      <OpenCVBadge />,
      <ComputerVisionBadge />,
      <GitBadge />,
    ],
    description:
      "Created an advanced Rubik’s Cube solver using computer vision and the Kociemba algorithm for efficient solving in under 2 seconds. Optimized a robust color detection system to enhance sticker identification and mapping accuracy.",
    links: [
      {
        link: "https://github.com/mujtabach2/rubixSolver",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },
  {
    name: "NBA Lineup Analysis",
    imageSrc: nbaLineupAnalysis,
    id: "nba-lineup-analysis",
    type: "Web app",
    tagline: "An NBA Lineup Analysis Tool leveraging Streamlit",
    tags: [
      <JavaScriptBadge />,
      <HTMLCSSBadge />,
      <StreamlitBadge />,
      <PandasBadge />,
      <GitBadge />,
    ],
    description:
      "Launched and executed an NBA Lineup Analysis Tool leveraging Streamlit; facilitated comprehensive analysis with intuitive visualizations, resulting in a 75% increase in Fantasy performance and data-driven strategic decision-making.",
    links: [
      {
        link: "https://github.com/mujtabach2/nbaAnalysis",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },
  {
    name: "Billionaire Dynamics Analysis",
    imageSrc: Billionaire,
    id: "billionaire-dynamics",
    type: "Data Analysis",
    tagline: "An in-depth analysis of global billionaires",
    tags: [<PythonBadge />, <PandasBadge />, <JupyterBadge />, <GitBadge />],
    description:
      "Conducted an in-depth analysis of global billionaires, utilizing Python and data analysis libraries. Extracted and processed data to identify trends and patterns in billionaire demographics, wealth distribution, and source of wealth.",
    links: [
      {
        link: "https://github.com/mujtabach2/BillionaireEDA",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },
  {
    name: "Phonics/Alphabet Teaching Tool",
    imageSrc: abc,
    id: "phonics-tool",
    type: "Web tool",
    tagline: "An engaging web tool for kids’ phonics and alphabet learning",
    tags: [<JavaScriptBadge />, <HTMLCSSBadge />, <GitBadge />],
    description:
      "Designed and developed an engaging web tool utilizing JavaScript and HTML/CSS, dedicated to enhancing kids’ phonics and alphabet learning experiences. Implemented a sophisticated audio playback system using the SpeechSynthesis API.",
    links: [
      {
        link: "https://github.com/mujtabach2/abc",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
  },

  // Add more projects as needed
];
