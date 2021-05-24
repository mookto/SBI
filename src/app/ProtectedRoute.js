import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  //console.log("in protected route", Component, extraProp);
  const loggedIn = localStorage.getItem("loggedIn");
  return (
    <Route
      {...rest}
      render={(props) => {
        //console.log("props in protected Route", props);
        if (loggedIn === "true") {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
