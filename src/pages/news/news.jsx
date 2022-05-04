import React from "react";
import "./news.scss";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { VscChromeClose } from "react-icons/vsc";
import ScrollButton from "../../components/btn/scrollBtn/scrollButton";
import Loading from "../../components/Loading";

export default function News() {
  const [title, setTitle] = useState("");
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(true);
  };
  const hideDetails = () => {
    setDetails(false);
  };

  const submitVal = (e) => {
    e.preventDefault();
    const date = new Date(
      new Date().setMonth(new Date().getMonth() - 1)
    ).toISOString();
    setIsLoading(true);
    fetch(
      `https://newsapi.org/v2/everything?q=${title}&from=${date}&sortBy=publishedAt&apiKey=4a9b2c4f5ff9486e9396003f05da27bc`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          throw new Error(data.message);
        }
        if (!title) {
          alert("please, add value");
        } else {
          setLatestNews(data.articles);
        }
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  };
  console.log(latestNews);

  return (
    <div className="news-main-container">
      <ScrollButton />
      <h2>Search for topics, locations & sources: </h2>
      <form onSubmit={submitVal} className="search-bar-container">
        <input
          type="text"
          placeholder="Start your search"
          value={title}
          className="search-bar"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="submit" value="Search" className="button-input" />
      </form>
      {isLoading && <Loading />}

      {latestNews.length > 0 && (
        <div className="articles-container">
          <div className="top-stories-title-and-icon">
            <h1>Top stories:</h1>
            <h1>
              <FcAbout onClick={showDetails} className="show-modal-icon" />
            </h1>
          </div>
          {details && (
            <div className="modal-container">
              <div className="open-modal-info">
                <div className="about-results-block">
                  <h2>About this result: </h2>
                  <h2>
                    <VscChromeClose
                      onClick={hideDetails}
                      className="close-modal-icon"
                    />
                  </h2>
                </div>
                <ul>
                  <li> These are news articles from across the web</li>
                  <li>
                    For the project have been used API from New API website;
                  </li>
                  <li>The result can be in English or in another language</li>
                  <li>
                    This result contains news related to your search terms
                  </li>
                  <li> New articles available with 1 hour delay</li>
                  <li> Search articles up to a month old</li>
                </ul>
              </div>
            </div>
          )}

          {latestNews.map(
            ({ title, urlToImage, description, url, source }, index) => (
              <div className="article-wrapper" key={url + index}>
                <div className="article-details-container">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="article-title"
                  >
                    <h2>{title}</h2>
                  </a>
                  <div>
                    {description.slice(0, 160)}
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="read-more-link"
                    >
                      Read more...
                    </a>
                  </div>
                </div>

                <div>
                  <div className="article-image-container">
                    <div className="image-wrapper">
                      <img
                        src={urlToImage}
                        alt="img"
                        id="image-article"
                        className={
                          urlToImage === null ? "hide-element" : "article-image"
                        }
                      />
                    </div>

                    <div
                      className={
                        urlToImage === null
                          ? "hide-element"
                          : "source-container"
                      }
                    >
                      Source: {source.name}
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
