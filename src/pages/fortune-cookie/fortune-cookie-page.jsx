import React from "react";
import { useState } from "react";
import "./fortune-cookie-page.scss";
import Btn from "../../components/btn/btn";

const fortuneCookieData = [
  "A beautiful, smart, and loving person will be coming into your life",
  "A dubious friend may be an enemy in camouflage",
  "A faithful friend is a strong defense",
  "A feather in the hand is better than a bird in the air",
  "A fresh start will put you on your way",
  "A friend asks only for your time not your money",
  "A friend is a present you give yourself",
  "A gambler not only will lose what he has, but also will lose what he doesn’t have",
  "A golden egg of opportunity falls into your lap this month",
  "A good friendship is often more important than a passionate romance",
  "A good time to finish up old tasks",
  "A hunch is creativity trying to tell you something",
  "A lifetime friend shall soon be made",
  "A lifetime of happiness lies ahead of you",
  "A light heart carries you through all the hard times",
  "A new perspective will come with the new year",
  "A person is never to (sic) old to learn",
  "A person of words and not deeds is like a garden full of weeds",
  "A pleasant surprise is waiting for you",
  "A short pencil is usually better than a long memory any day",
  "A small donation is call for. It’s the right thing to do",
  "A smile is your personal welcome mat",
  "A smooth long journey! Great expectations",
  "A soft voice may be awfully persuasive",
  "A truly rich life contains love and art in abundance",
  "Accept something that you cannot change, and you will feel better",
  "Adventure can be real happiness",
  "Advice is like kissing. It costs nothing and is a pleasant thing to do",
  "Advice, when most needed, is least heeded",
  "All the effort you are making will ultimately pay off",
  "All the troubles you have will pass away very quickly",
  "All will go well with your new project",
  "All your hard work will soon pay off",
  "Well done is better than well said",
  "What’s hidden in an empty box?",
  "What’s that in your eye? Oh…it’s a sparkle.",
  "What’s yours in mine, and what’s mine is mine.",
  "When more become too much. It’s same as being not enough.",
  "When your heart is pure, your mind is clear.",
  "With age comes wisdom.",
  "You (sic) adventure could lead to happiness.",
  "You always bring others happiness.",
  "You are a person of another time.",
  "You are a talented storyteller.",
  "You are admired by everyone for your talent and ability",
  "You are almost there.",
  "You are generous to an extreme and always think of the other fellow",
  "You are going to have some new clothes",
  "You are in good hands this evening",
  "You are modest and courteous",
  "You are next in line for promotion in your firm.",
  "You are offered the dream of a lifetime. Say yes!",
  "You are open-minded and quick to make new friends. (2)",
];
function getPrediction(data) {
  return data[Math.floor(Math.random() * data.length)];
}

export default function FortuneCookie() {
  const [prediction, setPrediction] = useState(null);
  const showPrediction = () => {
    const newPrediction = getPrediction(fortuneCookieData);
    setPrediction(newPrediction);
  };

  return (
    <div className="fortune-cookie-container">
      <div className="open-fortune-cookie-title">Open your fortune cookie:</div>
      <div className="open-cookie-subtitle">*As many as you want</div>
      <div className="fortune-img" onClick={showPrediction}>
        {prediction && <div className="prediction">{prediction}</div>}
      </div>
      <Btn
        onClick={showPrediction}
        btnText={prediction ? "Try once again" : "Open cookie"}
        style="secondary"
      />
    </div>
  );
}
