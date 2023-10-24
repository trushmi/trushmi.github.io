import React from "react";
import { useState } from "react";
import "./wordsCounter.scss";

export default function WordsCounter() {
  const [text, setText] = useState("");
  let result =
    text.length > 0
      ? text
          .trim()
          .split(" ")
          .filter((w) => !!w).length
      : 0;
  let word = text.length === 1 ? "word" : "words";
  let characters = text.length === 1 ? "character" : "characters";
  let numOfCharacters = text.length;

  const clearText = (e) => {
    e.preventDefault();
    setText("");
  };

  return (
    <div className="words-counter-container">
      <h2 className="words-counter-title">Words counter:</h2>
      <textarea
        placeholder="Start typing, or copy and paste your document here..."
        name=""
        id="users-text"
        cols="80"
        rows="20"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="user-text"
        required
      ></textarea>
      <div className="show-words-counter-result">
        Your text has {result} {word} and {numOfCharacters} {characters}
      </div>
      <div>
        <button onClick={clearText} className="clear-data-btn">
          Clear text
        </button>
      </div>
    </div>
  );
}
