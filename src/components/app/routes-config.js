import Projects from "../../pages/projects/projects";
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
    path: "/wordsCounter",
    element: <WordsCounter />,
    title: "Count words in your text",
    omitNavigationLink: true,
  },
];
