import Card from "./components/card";
import React from "react";
import "./projects.scss";
import { Link } from "react-router-dom";

export default function Projects() {
  const cardData = [
    {
      cardTitle: "AI: Review Analyzer",
      cardDescription: "NLP-based tool for classifying reviews",
      cardField: "education",
      link: "https://github.com/trushmi/review-sentiment-analyzer",
      isExternal: true,
    },
    {
      cardTitle: "Vocab",
      cardDescription: "Full-stack tool for language learning ",
      cardField: "education",
      link: "https://github.com/trushmi/vocab",
      isExternal: true,
    },
    {
      cardTitle: "TV shows time tracker",
      cardDescription: "React app to track time spent on TV shows",
      cardField: "movie",
      link: "https://tvshowscalculator.com/",
      isExternal: true,
    },
    {
      cardTitle: "UWWC",
      cardDescription: "React app for community connection",
      cardField: "work",
      link: "https://uawwc.com/",
      isExternal: true,
    },
    {
      cardTitle: "To do list",
      cardDescription: "React app for task management",
      cardField: "work",
      link: "/ToDoList",
    },
    {
      cardTitle: "Fortune cookie",
      cardDescription: "React app: open cookie, get prediction for today",
      cardField: "game",
      link: "/fortuneCookie",
    },
    {
      cardTitle: "Words Counter",
      cardDescription: "React-based tool for word counting",
      cardField: "office",
      link: "/wordsCounter",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map(
        ({ cardTitle, cardDescription, cardField, link, isExternal }, index) =>
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
  );
}
