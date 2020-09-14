import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import ApplicationListPage from "../containers/ApplicationDashBoard/ApplicationListPage.jsx";
import IndexPage from "../containers/IndexPages/indexPage";
import CreateApplicationForm from "../containers/ApplicationDashBoard/CreateApplicationForm/CreateApplicationForm";
import ApplicationInfo from "../containers/ApplicationDashBoard/ApplicationInfo/ApplicationInfo";
import LogDashboard from "../containers/ApplicationDashBoard/Dashboard/Log/LogDashboard";
import StatsDashboard from "../containers/ApplicationDashBoard/Dashboard/Stats/StatsDashboard";

// const RequireAuth = ({ children }) => {
// if (!localStorage.getItem('token')) {
//   return (
//     <Redirect
//       to={{
//         pathname: "/",
//       }}
//     />
//   );
// }

// return children;
// };

const AppRouter = () => (
  <Switch>
    <Route exact path="/">
      <IndexPage />
    </Route>

    {/*<RequireAuth>*/}
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

    <Route
      exact
      path="/applications/stats/:applicationId"
      component={StatsDashboard}
    />
    {/*</RequireAuth>*/}
  </Switch>
);

export default AppRouter;
