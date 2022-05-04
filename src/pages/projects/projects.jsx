import Card from "./components/card";
import React from "react";
import "./projects.scss";
import { Link } from "react-router-dom";

export default function Projects() {
  const cardData = [
    {
      cardTitle: "Weather",
      cardDescription: "Check the weather in the city right now",
      cardField: "forecast",
      link: "/forecast",
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
      cardTitle: "News",
      cardDescription: "Read the top stories ",
      cardField: "news",
      link: "/news",
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
        ({ cardTitle, cardDescription, cardField, link }, index) => (
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
