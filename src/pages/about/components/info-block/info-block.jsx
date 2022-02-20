import React from "react";
import "./info-block.scss";
import * as PropTypes from "prop-types";

InfoBlock.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  years: PropTypes.string,
  grade: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]),
};

export default function InfoBlock({
  title,
  icon,
  name,
  institution,
  years,
  grade,
  description,
}) {
  return (
    <div className="item-container">
      <div className="title">{title}</div>
      <div className="card-wrapper">
        <div className="icon">{icon}</div>
        <div className="description-wrapper">
          <div className="name">{name}</div>
          <div className="institution">{institution}</div>
          {years && <div className="years">{years}</div>}
          {grade && <div className="grade">{grade}</div>}
          <div className="description">
            {Array.isArray(description) ? (
              <ul className="description-item-wraper">
                {description.map((item) => (
                  <li key={item} className="description-item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
