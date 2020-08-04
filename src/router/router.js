import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import ApplicationDashBoard from "../containers/ApplicationDashBoard/ApplicationListPage.jsx";
import IndexPage from "../containers/IndexPages/indexPage";
import { authenticated } from "../apiServices/Auth/authenticatedChecker";
import CreateApplicationForm from "../containers/ApplicationDashBoard/CreateApplicationForm/CreateApplicationForm";

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
      <Route exact path="/applications/create">
        <CreateApplicationForm />
      </Route>
    </RequireAuth>
  </Switch>
);

export default AppRouter;
