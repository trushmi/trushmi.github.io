import React from "react";
import Routes from "../app/routes";
import Header from "../header/header";
import Logo from "../logo/logo";
import Footer from "../footer/footer";
import "./layout.scss";

export default function Layout() {
  return (
    <div className="main-container">
      <Logo />
      <Header />
      <main className="layout-content">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}
