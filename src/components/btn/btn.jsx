import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";

import "./btn.scss";

Btn.propTypes = {
  btnText: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.oneOf(["primary", "secondary"]),
};

Btn.defaultProps = {
  type: "button",
  style: "primary",
};

export default function Btn({ btnText, type, onClick, style }) {
  return (
    <div>
      <button
        className={classNames("btn", style)}
        type={type}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
}
