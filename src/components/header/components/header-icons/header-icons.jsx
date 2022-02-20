import React from "react";

import "./header-icons.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const icons = [
  { icon: <AiOutlineGithub />, link: "https://github.com/mariatrush" },
  {
    icon: <TiSocialLinkedin />,
    link: "https://www.linkedin.com/in/mariia-iryna-trush/",
  },
  { icon: <SiLeetcode />, link: "https://leetcode.com/trushMI/" },
  { icon: <FaHackerrank />, link: "https://www.hackerrank.com/trush" },
];

export default function HeaderIcons() {
  return (
    <div className="icon-container">
      <ul className="icon-elements">
        {icons.map(({ icon, link }) => {
          return (
            <li className="icon-item" key={link}>
              <a
                className="icon-link"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
