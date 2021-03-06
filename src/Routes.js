//dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuid } from "uuid";

//imports
import routes from "./routesData";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              exact
              path={`${route.path}`}
              id="outer-container"
              key={uuid()}
            >
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
