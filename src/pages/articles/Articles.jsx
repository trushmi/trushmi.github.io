import React from "react";
import Card from "../projects/components/card";
import { Link } from "react-router-dom";
import "./articles.scss";

export default function Articles() {
  const cardData = [
    {
      cardTitle: "21 essential Git Commands",
      cardDescription: "Detailed Git tutorial",
      cardField: "Git",
      link: "https://dev.to/trushmi/21-essential-git-commands-explained-in-11-minutes-493k",
      isExternal: true,
    },
    {
      cardTitle: "Convert Text to Speech",
      cardDescription: "A step-by-step guide ",
      cardField: "Python",
      link: "https://medium.com/@trushmi415/convert-text-to-speech-with-python-b0f0d43a4ad9",
      isExternal: true,
    },
    {
      cardTitle: "How to use Free dictionary API",
      cardDescription: "Documentation +  examples",
      cardField: "JavaScript",
      link: "https://dev.to/trushmi/how-to-use-free-dictionary-api-gec",
      isExternal: true,
    },
    {
      cardTitle: " Seven JavaScript events",
      cardDescription: "Overview with code snippets",
      cardField: "React, TypeScript",
      link: "https://dev.to/trushmi/7-essential-events-in-react-you-need-to-know-aan",
      isExternal: true,
    },
  ];
  return (
    <div className="articles-wrapper">
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
