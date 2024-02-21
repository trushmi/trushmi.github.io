import React from "react";
import "./pageNotFound.scss";

export default function PageNotFound() {
  return (
    <div className="notFoundPage">
      <div className="notFoundContent">
        <h1 className="errorCode">404</h1>
        <h1 className="errorMsg">Page not found</h1>
        <p>
          The page you were looking for doesn’t exist. You may have mistyped the
          address or the page may have moved.
        </p>
        <a href="/">Go home</a>
      </div>
    </div>
  );
}
