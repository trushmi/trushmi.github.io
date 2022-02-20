import React from "react";
import HeaderIcons from "./components/header-icons/header-icons";
import Nav from "./components/nav/nav";
import "./header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <HeaderIcons />
      <Nav />
    </div>
  );
}
