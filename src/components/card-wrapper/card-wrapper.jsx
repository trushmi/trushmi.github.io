import React from "react";
import "./card-wrapper.scss";
import * as PropTypes from "prop-types";

CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

CardWrapper.defaultProps = {
  title: null,
};

export default function CardWrapper({ children, title }) {
  return (
    <div className="card-wrapper-container">
      {title && <div className="card-wrapper-title-container">{title}</div>}
      {children}
    </div>
  );
}
