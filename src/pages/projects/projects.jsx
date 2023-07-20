import Card from "./components/card";
import React from "react";
import "./projects.scss";
import { Link } from "react-router-dom";

export default function Projects() {
  const cardData = [
    {
      cardTitle: "Vocab",
      cardDescription:
      "Full stack application that helps to learn new words faster and easier while keeping them organized in one place",
      cardField: "education",
      link: "https://github.com/trushmi/vocab",
      isExternal: true,
    },
    {
      cardTitle: "TV show & your time",
      cardDescription:
        "Help you track how much time you have spend watching TV",
      cardField: "movie",
      link: "https://chic-sprinkles-594e54.netlify.app/",
      isExternal: true,
    },
    {
      cardTitle: "UWWC",
      cardDescription: "React app for community",
      cardField: "work",
      link: "https://uawwc.com/",
      isExternal: true,
    },
    {
      cardTitle: "To do list",
      cardDescription: "Add and remove task you need to do",
      cardField: "work",
      link: "/ToDoList",
    },
    {
      cardTitle: "Fortune cookie",
      cardDescription: "Open cookie, get prediction for today",
      cardField: "game",
      link: "/fortuneCookie",
    },
    {
      cardTitle: "Words Counter",
      cardDescription: "Count words in your text",
      cardField: "office",
      link: "/wordsCounter",
    },

    {
      cardTitle: "Movie app",
      cardDescription: "Movies that coming soon ",
      cardField: "movie",
      link: "/movie",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map(
        ({ cardTitle, cardDescription, cardField, link, isExternal }, index) =>
          isExternal ? (
            <a href={link} className="projects-link">
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
