import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardField: PropTypes.string,
};

export default function Card({ cardTitle, cardDescription, cardField }) {
  return (
    <div className="card">
      <div className="card-logo">{cardTitle}</div>
      <div className="card-description">{cardDescription}</div>
      <div className="card-field">{cardField}</div>
    </div>
  );
}
