import React from "react";
import "./frequentlyAskedQuestion.scss";

import questions from "./components/faqData";

import Question from "./components/Question";

export default function FrequentlyAskedQuestion() {
  return (
    <div className="faq-container">
      <div className="faq-title"> Questions? Answers: </div>
      <section className="question-component">
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </section>
    </div>
  );
}
