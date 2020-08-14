import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import ApplicationListPage from "../containers/ApplicationDashBoard/ApplicationListPage.jsx";
import IndexPage from "../containers/IndexPages/indexPage";
import { authenticated } from "../apiServices/Auth/authenticatedChecker";
import CreateApplicationForm from "../containers/ApplicationDashBoard/CreateApplicationForm/CreateApplicationForm";
import ApplicationInfo from "../containers/ApplicationDashBoard/ApplicationInfo/ApplicationInfo";
import LogDashboard from "../containers/ApplicationDashBoard/Dashboard/LogDashboard";

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
        component={ApplicationInfo}
      />
      <Route
        exact
        path="/applications/logs/:applicationId"
        component={LogDashboard}
      />
    </RequireAuth>
  </Switch>
);

export default AppRouter;
