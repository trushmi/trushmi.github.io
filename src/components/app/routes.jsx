import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { routesConfig } from "./routes-config";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      {routesConfig.map(({ path, element }) => (
        <Route key={path} exact path={path} element={element} />
      ))}
    </ReactRouterRoutes>
  );
}
