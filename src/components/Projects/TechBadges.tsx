import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFire,
  FaPython,
  FaGit,
  FaHtml5,
  FaCss3,
  FaJs,
  FaChartBar,
  FaFileCode,
  FaDesktop,
  FaJava,
} from "react-icons/fa";
import {
  SiSelenium,
  SiOpencv,
  SiStreamlit,
  SiPandas,
  SiJupyter,
  SiFlask,
} from "react-icons/si";
import { PiCpuFill } from "react-icons/pi";

const badgeStyle = {
  fontSize: "2em", // Adjust the font size as needed
  marginRight: "5px", // Adjust spacing as needed
};
const JavaBadge = () => <FaJava style={{ ...badgeStyle, color: "blue" }} />;
const ReactBadge = () => (
  <FaReact style={{ ...badgeStyle, color: "#61DAFB" }} />
);
const NodeBadge = () => (
  <FaNodeJs style={{ ...badgeStyle, color: "#8CC84B" }} />
);
const MongoBadge = () => (
  <FaDatabase style={{ ...badgeStyle, color: "#4DB33D" }} />
);
const FirebaseBadge = () => (
  <FaFire style={{ ...badgeStyle, color: "#FFA611" }} />
);
const SeleniumBadge = () => (
  <SiSelenium style={{ ...badgeStyle, color: "#43B02A" }} />
);
const PythonBadge = () => (
  <FaPython style={{ ...badgeStyle, color: "#306998" }} />
);
const OpenCVBadge = () => (
  <SiOpencv style={{ ...badgeStyle, color: "#273746" }} />
);
const ComputerVisionBadge = () => (
  <FaDesktop style={{ ...badgeStyle, color: "#6C757D" }} />
);
const GitBadge = () => <FaGit style={{ ...badgeStyle, color: "#F05032" }} />;
const JavaScriptBadge = () => (
  <FaJs style={{ ...badgeStyle, color: "#F0DB4F" }} />
);
const HTMLCSSBadge = () => (
  <>
    <FaHtml5 style={{ ...badgeStyle, color: "#E44D26" }} />{" "}
    <FaCss3 style={{ ...badgeStyle, color: "#264DE4" }} />
  </>
);
const StreamlitBadge = () => (
  <SiStreamlit style={{ ...badgeStyle, color: "#FF4E00" }} />
);
const PandasBadge = () => (
  <SiPandas style={{ ...badgeStyle, color: "#150458" }} />
);
const JupyterBadge = () => (
  <SiJupyter style={{ ...badgeStyle, color: "#F37726" }} />
);

const FlaskBadge = () => <SiFlask style={{ ...badgeStyle, color: "red" }} />;
const FinRlBadge = () => (
  <PiCpuFill style={{ ...badgeStyle, color: "green" }} />
);
// Add more badges as needed

export {
  ReactBadge,
  NodeBadge,
  MongoBadge,
  FirebaseBadge,
  SeleniumBadge,
  PythonBadge,
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
};
