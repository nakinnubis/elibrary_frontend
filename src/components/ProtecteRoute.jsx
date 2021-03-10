import React, { PropsWithChildren, useState } from "react";
// import cookies from "js-cookie";
import { Redirect, Route, RouteProps } from "react-router-dom";
import Layout from "./Layout";


export default function ProtectedRoute({ children, ...rest }) {
  //   const [auth] = useState(!!cookies.get("auth"));
  let auth = true

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
