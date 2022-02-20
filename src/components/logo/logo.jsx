import React from "react";
import { NavLink } from "react-router-dom";
import "./logo.scss";
import logo from "./logo2.png";
export default function Logo() {
  return (
    <NavLink to="/" className="logo-container">
      <img className="logo" src={logo} alt="logo202020" />
    </NavLink>
  );
}
