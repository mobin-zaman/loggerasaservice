import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../containers/Login/Login";
import ApplicationDashBoard from "../containers/ApplicationDashBoard/ApplicationDashBoard";

function checkSignedIn() {
  console.log("getting the token: ", localStorage.getItem("token"));
  const result =  !!localStorage.getItem("token");
  console.log("Result: ", result);
  return result;
}

const RequireAuth = ({ children }) => {
  if (checkSignedIn()) {
    return <Redirect to={{
        pathname: '/',
    }} />;
  }

  return children;
};

const AppRouter = () => (
  <Switch>
      <Route exact path="/"> <Login/></Route>

    <RequireAuth>
        <Route exact path="/applications"><ApplicationDashBoard/></Route>
    </RequireAuth>
  </Switch>
);

export default AppRouter;
