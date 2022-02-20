import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
};

export default function Card({ cardTitle, cardDescription }) {
  return (
    <div className="card">
      <div className="card-logo">{cardTitle}</div>
      <div className="card-description">{cardDescription}</div>
    </div>
  );
}
