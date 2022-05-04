import React from "react";
import PropTypes from "prop-types";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "./question.scss";

Question.propTypes = {
  title: PropTypes.string,
  answer: PropTypes.string,
};

export default function Question({ title, answer }) {
  return (
    <div className="question-container">
      <div className="question-title">
        {title}
        <IoIosArrowDown />
        <IoIosArrowUp />
      </div>
      <div className="question-answer">{answer}</div>
    </div>
  );
}
