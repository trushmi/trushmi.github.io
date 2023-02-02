import React from "react";
import Btn from "../../../../components/btn/btn";
//import Skills from "../skills/skills";
//import Overview from "../overview/overview";
import "./information.scss";

const name = ["Maria-Iryna Trush"];

export default function Text() {
  return (
    <div className="about-story">
      Hi! My name is
      <div className="name">{name} </div>
      <div className="main-description">
        Experienced Front-End Developer with a broad set of technical skills and
        proven record of building and leading product teams. I write about web
        development on my blog. What to know how I may help your project?
      </div>
      <Btn />
    </div>
  );
}
