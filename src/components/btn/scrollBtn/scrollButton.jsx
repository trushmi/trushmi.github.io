import React from "react";
import { useState, useEffect } from "react";
import "./scrollButton.css";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollButton() {
  const [scrollUp, setScroolUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroolUp(true);
      } else {
        setScroolUp(false);
      }
    });
  }, []);

  const letsGoUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrollUp && <FaArrowUp onClick={letsGoUp} className="go-up-icon" />}
    </div>
  );
}
