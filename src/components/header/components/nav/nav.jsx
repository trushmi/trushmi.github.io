import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { routesConfig } from "../../../app/routes-config";

import "./nav.scss";

export default function Nav() {
  return (
    <div className="nav-container">
      <ul className="nav-block">
        {routesConfig
          .filter(({ omitNavigationLink }) => !omitNavigationLink)
          .map(({ title, path }) => (
            <li className="nav-item" key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  classNames("nav-link", {
                    active: isActive,
                  })
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
