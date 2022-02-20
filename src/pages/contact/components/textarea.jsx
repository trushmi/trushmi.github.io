import React from "react";
import "./textarea.scss";
export default function Textarea() {
  return (
    <div className="text-area-container">
      <textarea
        className="text-area"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </div>
  );
}
