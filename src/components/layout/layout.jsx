import React from "react";
import Routes from "../app/routes";
import Header from "../header/header";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="main-container">
      <Header />
      <main className="layout-content">
        <Routes />
      </main>
    </div>
  );
}
