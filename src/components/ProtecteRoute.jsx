import React from "react";
// import cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";
import Layout from "./Layout";


export default function ProtectedRoute({ children, ...rest }) {

  // TODO: switch to auth context
  let auth = global.localStorage.getItem('user')

  return (
    <Route
      {...rest}
      component={() => {
        if (!auth) {
          return <Redirect to="/login" />;
        }
        return <Layout>{children};</Layout>;
      }}
    />
  );
}
