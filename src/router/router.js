import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import ApplicationListPage from "../containers/ApplicationDashBoard/ApplicationListPage.jsx";
import IndexPage from "../containers/IndexPages/indexPage";
import { authenticated } from "../apiServices/Auth/authenticatedChecker";
import CreateApplicationForm from "../containers/ApplicationDashBoard/CreateApplicationForm/CreateApplicationForm";
import App from "../App";
import ApplicationDashBoard from "../containers/ApplicationDashBoard/ApplicationDashBoard/ApplicationDashBoard";

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
        <ApplicationListPage />
      </Route>
      <Route exact path="/applications/create">
        <CreateApplicationForm />
      </Route>
      <Route
        exact
        path="/applications/dashboard/:applicationId"
        component={ApplicationDashBoard}
      />
    </RequireAuth>
  </Switch>
);

export default AppRouter;
