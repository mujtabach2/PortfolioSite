import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "../../assets/theme-context";
import throttle from "lodash/throttle";

interface RadialGradientProps {
  scale: string;
  opacity: string;
  position?: string;
  overflow?: string;
}

const RadialGradient: React.FC<RadialGradientProps> = ({
  scale,
  opacity,
  position,
  overflow,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  const handleMouseMove = throttle((event: MouseEvent) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
    const newMouseYPercentage = Math.round(
      (event.pageY / windowHeight) * 100
    );

    setMousePosition({ x: newMouseXPercentage, y: newMouseYPercentage });
  }, 50);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  const radialGradientStyle: React.CSSProperties = useMemo(() => {
    return {
      background: `radial-gradient(at ${mousePosition.x}% ${mousePosition.y}%, #55c9e6, ${
        theme === "light" ? "#9daaf2" : "#0c1220"
      })`,
    };
  }, [mousePosition.x, mousePosition.y, theme]);

  return (
    <React.Fragment>
      <div
        className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1]   ${opacity} ${scale} ${overflow}`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;
