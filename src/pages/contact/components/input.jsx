import React from "react";
import "./input.scss";
import * as PropTypes from "prop-types";

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.string,
  value: PropTypes.string,
};
export default function Input({ label, type, name, id, onChange, value }) {
  return (
    <div className="input-container">
      <div className="label">{label}</div>
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
