import About from "../../pages/about/about";
import Projects from "../../pages/projects/projects";
import FortuneCookie from "../../pages/fortune-cookie/fortune-cookie-page";
import ToDoList from "../../pages/to-do-list/to-do-list";
import CurrentWeather from "../../pages/current-weather/current-weather";
import WordsCounter from "../../pages/words-counter/WordsCounter";
import News from "../../pages/news/news";
import ComingSoonMovies from "../movies/ComingSoonMovies";
import FrequentlyAskedQuestion from "../FrequentlyAskedQ/FrequentlyAskedQuestion";
export const routesConfig = [
  {
    path: "/",
    element: <Projects />,
    title: "Projects",
  },
  {
    path: "/about",
    element: <About />,
    title: "Resume",
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
    path: "/forecast",
    element: <CurrentWeather />,
    title: "Check the wether",
    omitNavigationLink: true,
  },
  {
    path: "/wordsCounter",
    element: <WordsCounter />,
    title: "Count words in your text",
    omitNavigationLink: true,
  },
  {
    path: "/news",
    element: <News />,
    title: "top stories",
    omitNavigationLink: true,
  },
  {
    path: "/movie",
    element: <ComingSoonMovies />,
    title: "Movies Coming Soon",
    omitNavigationLink: true,
  },
  {
    path: "/faq",
    element: <FrequentlyAskedQuestion />,
    title: "faq",
    omitNavigationLink: true,
  },
];
