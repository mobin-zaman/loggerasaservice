import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import ApplicationDashBoard from "../containers/ApplicationDashBoard/ApplicationDashBoard.jsx";
import IndexPage from "../containers/IndexPages/indexPage";
import { authenticated } from "../Auth/authenticatedChecker";

const RequireAuth = ({ children }) => {
  if (!authenticated()) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return children;
};

const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <IndexPage />
    </Route>

    <RequireAuth>
      <Route exact path="/applications">
        <ApplicationDashBoard />
      </Route>
    </RequireAuth>
  </Switch>
);

export default AppRouter;
