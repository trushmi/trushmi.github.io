import React from "react";
import Card from "../projects/components/card";
import { Link } from "react-router-dom";
import "./contributesTo.scss";

export default function ContributesTo() {
  const cardData = [
    {
      cardTitle: "SF Civic Tech",
      cardDescription: "Website to support local schools",
      cardField: "",
      link: "https://www.supportsfschools.org/",
      isExternal: true,
    },
    {
      cardTitle: "The Collab Lab",
      cardDescription: "Smart Shopping List application",
      cardField: "",
      link: "https://tcl-73-smart-shopping-list.firebaseapp.com/",
      isExternal: true,
    },
    {
      cardTitle: "Amplify",
      cardDescription: "Website about climate change",
      cardField: "",
      link: "https://github.com/OpenSourceFellows/amplify",
      isExternal: true,
    },
  ];
  return (
    <div className="main-container">
      <div className="about-section-container">
        The open-source projects I’ve contributed to, where collaboration and
        teamwork have driven my growth as a developer.
      </div>
      <div className="card-container">
        {cardData.map(
          (
            { cardTitle, cardDescription, cardField, link, isExternal },
            index
          ) =>
            isExternal ? (
              <a href={link} className="projects-link" key={index}>
                <Card
                  cardTitle={cardTitle}
                  cardDescription={cardDescription}
                  cardField={cardField}
                />
              </a>
            ) : (
              <Link to={link} className="projects-link" key={index}>
                <Card
                  cardTitle={cardTitle}
                  cardDescription={cardDescription}
                  cardField={cardField}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
}
