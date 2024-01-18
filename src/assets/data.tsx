import adobexdicon from "../assets/icons/adobexdicon.svg";
import canvaicon from "../assets/icons/canvaicon.svg";
import figmaicon from "./icons/figmaicon.svg";
import htmlicon from "./icons/htmlicon.svg";
import cssicon from "./icons/cssicon.svg";
import javascripticon from "./icons/javascripticon.svg";
import typescripticon from "./icons/typescripticon.svg";
import reacticon from "./icons/reacticon.svg";
import nextjsicon from "./icons/nextjsicon.svg";
import nodejsicon from "./icons/nodejsicon.svg";
import tailwindcssicon from "./icons/tailwindicon.svg";
import mongodbicon from "./icons/mongoicon.svg";
import vuejsicon from "./icons/vueicon.svg";
import expressicon from "./icons/expressicon.svg";
import sassscssicon from "./icons/sassicon.svg";
import trelloicon from "./icons/trelloicon.svg";
import apiicon from "./icons/apiicon.svg";
import axiosicon from "./icons/axiosicon.svg";
import spotifyicon from "./icons/spotifyicon.svg";
import netlifyicon from "./icons/netlifyicon.svg";
import rendericon from "./icons/rendericon.svg";
import jwticon from "./icons/jwticon.svg";
import wordpressicon from "./icons/wordpressicon.svg";
import shopifyicon from "./icons/shopifyicon.svg";
import webflowicon from "./icons/webflowicon.svg";

import caricon from "./icons/car-icon.svg";
import travelicon from "./icons/travel-icon.svg";
import hardwareicon from "./icons/hardware-icon.svg";
import nextjsiconwhite from "./icons/nextjsiconwhite.svg";
import expressiconwhite from "./icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
    
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  
} as const;


export const liveTickerData = {
  content: {
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", hash: "#home", icon: GoHome },
  { en: "About me", hash: "#aboutme", icon: GoPerson },
  { en: "Skills", hash: "#skills"},
  { en: "Projects", hash: "#projects", icon: GoProject },
  { en: "Contact", hash: "#contact", icon: GoMail },
] as const;




export const sideBarRightMail = {
  link: "mailto:mujtabawaqas@gmail.com",
  text: "mujtabawaqas@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/mujtaba-chaudhry/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/mutabach2",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:mujtabawaqas@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;




export const contactData = {
  title: {
    en: "Contact",
  },
  description: {

    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{4}",
    },
    {
      name: "email",
      placeholder: {
        
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {

        en: "Your Subject",
      },
      type: "text",
      validation: {
    
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {

      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
   
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
     
      en: "I agree that Mujtaba may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
     
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {

    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
  
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
   en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};