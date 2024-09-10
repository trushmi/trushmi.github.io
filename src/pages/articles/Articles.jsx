import React from "react";
import Card from "../projects/components/card";
import { Link } from "react-router-dom";
import "./articles.scss";

export default function Articles() {
  const cardData = [
    {
      cardTitle: "Convert Text to Speech with Python",
      cardDescription: "A Step-by-Step Guide for Developers",
      cardField: "",
      link: "https://medium.com/@trushmi415/convert-text-to-speech-with-python-b0f0d43a4ad9",
      isExternal: true,
    },
  ];
  return (
    <div className="main-container">
      <div className="description-section-container">
        Thoughts on topics ranging from coding challenges to software
        development best practices I have learned.
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
