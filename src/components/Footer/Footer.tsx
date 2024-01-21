// @ts-nocheck
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials } from "../../assets/data";

import { useTheme } from "../../assets/theme-context";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
      <div className="flex gap-10">
        <h1 className="text-white text-2xl font-bold">Mujtaba Chaudhry</h1>
      </div>
      <div className="socials flex gap-10 ">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className="block mb-2 "
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            aria-current={
              social.altimgname === "true"
                ? social.altimgname + " button"
                : social.altimgname + " button"
            }
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-orange`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: social.iconcolor || "" }}
              />
            )}
          </Link>
        ))}
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <React.Fragment>
            <div className="status p-4 rounded-xl flex flex-row items-center">
              <div className="status-icon w-[2rem] h-[2rem] rounded-3xl relative mr-4">
                <div
                  className={`status-icon-inner absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-[inherit]`}
                ></div>
                <div
                  className={`status-icon-wave  w-[inherit] h-[inherit] rounded-[inherit] bg-green-500 animate-ping `}
                ></div>
              </div>
              <p className={`status-text !text-green-500} `}>Status: Working</p>
            </div>
          </React.Fragment>
        </Suspense>
      </div>
    </footer>
  );
};

export default Footer;
