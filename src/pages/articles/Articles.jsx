import React from "react";
import Card from "../projects/components/card";
import { Link } from "react-router-dom";
import "./articles.scss";

export default function Articles() {
  const cardData = [
    {
      cardTitle: "Convert Text to Speech with Python",
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
      cardTitle: "7 Essential Events in React",
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
