import React from "react";
import PropTypes from "prop-types";

import "./skills.scss";

Skills.propTypes = {
  icon: PropTypes.node.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default function Skills({ icon, skills, title }) {
  return (
    <div className="skill-container">
      <div className="skill-icon"> {icon}</div>
      <div className="skill-title">{title}</div>
      <ul className="skill-object">
        {skills.map((skill) => (
          <li className="skill-item" key={skill}>
            <span className="material-icons icon-style">done</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
