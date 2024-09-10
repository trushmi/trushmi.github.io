import Projects from "../../pages/projects/projects";
import FortuneCookie from "../../pages/fortune-cookie/fortune-cookie-page";
import ToDoList from "../../pages/to-do-list/to-do-list";
import WordsCounter from "../../pages/words-counter/WordsCounter";
import ContributesTo from "../../pages/contributesTo/ContributesTo";
import Articles from "../../pages/articles/Articles";

export const routesConfig = [
  {
    path: "/",
    element: <Projects />,
    title: "Projects",
  },
  {
    path: "/contributesTo",
    element: <ContributesTo />,
    title: "Contributions",
    omitNavigationLink: false,
  },
  {
    path: "/articles",
    element: <Articles />,
    title: "Articles",
    omitNavigationLink: false,
  },
  {
    path: "/fortuneCookie",
    element: <FortuneCookie />,
    title: "Fortune Cookie",
    omitNavigationLink: true,
  },
  {
    path: "/toDoList",
    element: <ToDoList />,
    title: "To do list",
    omitNavigationLink: true,
  },
  {
    path: "/wordsCounter",
    element: <WordsCounter />,
    title: "Count words in your text",
    omitNavigationLink: true,
  },
];
