import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import { routesConfig } from "./routes-config";
import PageNotFound from "../../pages/pageNotFound/pageNotFound";
export default function Routes() {
  return (
    <ReactRouterRoutes>
      {routesConfig.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </ReactRouterRoutes>
  );
}
