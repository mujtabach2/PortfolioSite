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
  JavaBadge,
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
    tagline:
      "A platform providing real-time chess, puzzles, and ai bot integration",
    tags: [<JavaScriptBadge />, <HTMLCSSBadge />, <JavaBadge />],
    description:
    "Led ChessHub development, a dynamic chess platform with Java and WebSockets. Engineered intricate chess logic and AI integration, fostering an immersive multiplayer environment.",
     links: [
      {
        link: "https://github.com/mujtabach2/chess-hub",
        icon: <FiGithub />,
      },
    ],
    website: "https://chess-hub.netlify.app/",
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
      <PythonBadge />,
      <PandasBadge />,
      <JavaScriptBadge />,
      <FinRlBadge />,
    ],
    description:
      "Solely crafted SharpeTrade, a profit-generating stock analysis system. Seamlessly integrated FinRl and Firebase, delivering daily stock signals via custom APIs for informed trading decisions.",
    links: [
      {
        link: "https://github.com/mujtabach2/tradingSite",

        icon: <FiGithub />,
      },
    ],
    website: "https://sharpetrade.netlify.app/",
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
      "Architected Doctor Connect, a comprehensive MERN stack site linking over 1,000 doctors. Streamlined patient access to healthcare professionals, enhancing medical care accessibility.",
    links: [
      {
        link: "https://github.com/mujtabach2/DoctorLookup",

        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://doctor-connect.netlify.app/",
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
      "Pioneered Intelli Chat Generator, a revolutionary AI-driven language learning tool. Orchestrated immersive chat sessions with an advanced AI bot, facilitating proficiency in over 15 languages.",
    links: [
      {
        link: "https://github.com/mujtabach2/LangauageApp",
        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://intelli-chat.netlify.app/",
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
      "Engineered an advanced Rubik’s Cube solver utilizing computer vision and the Kociemba algorithm. Achieved sub-2-second solving with precise sticker identification and mapping.",
    links: [
      {
        link: "https://github.com/mujtabach2/rubixSolver",

        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://github.com/mujtabach2/rubixSolver",
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
      "Launched a NBA Lineup Analysis Tool via Streamlit, boosting Fantasy performance by 75%. Provided data-driven insights for strategic decision-making through intuitive visualizations.",
    links: [
      {
        link: "https://github.com/mujtabach2/nbaAnalysis",

        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://github.com/mujtabach2/nbaAnalysis",
  },
  {
    name: "Billionaire Dynamics Analysis",
    imageSrc: Billionaire,
    id: "billionaire-dynamics",
    type: "Data Analysis",
    tagline: "An in-depth analysis of global billionaires",
    tags: [<PythonBadge />, <PandasBadge />, <JupyterBadge />, <GitBadge />],
    description:
      "Conducted thorough Python-based analysis on global billionaires. Extracted insights on demographic trends, wealth distribution, and sources of wealth for comprehensive understanding.",
    links: [
      {
        link: "https://github.com/mujtabach2/BillionaireEDA",

        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://github.com/mujtabach2/BillionaireEDA",
  },
  {
    name: "Phonics/Alphabet Teaching Tool",
    imageSrc: abc,
    id: "phonics-tool",
    type: "Web tool",
    tagline: "An engaging web tool for kids’ phonics and alphabet learning",
    tags: [<JavaScriptBadge />, <HTMLCSSBadge />, <GitBadge />],
    description:
      "Crafted an interactive web tool for kids’ phonics and alphabet learning. Leveraged JavaScript and HTML/CSS with SpeechSynthesis API for engaging audio playback.",
    links: [
      {
        link: "https://github.com/mujtabach2/abc",

        icon: <FiGithub />,
      },
      // Add more links if needed
    ],
    website: "https://github.com/mujtabach2/abc",
  },

  // Add more projects as needed
];
