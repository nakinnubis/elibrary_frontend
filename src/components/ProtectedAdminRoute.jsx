import React, { PropsWithChildren, useState } from "react";
// import cookies from "js-cookie";
import { Redirect, Route, RouteProps } from "react-router-dom";
import AdminLayout from "./AdminLayout";


export default function ProtectedAdminRoute({ children, ...rest }) {
  //   const [auth] = useState(!!cookies.get("auth"));

  // TODO: switch to auth context
  let auth = global.localStorage.getItem('admin')

  return (
    <Route
      {...rest}
      component={() => {
        if (!auth) {
          return <Redirect to="/login" />;
        }
        return <AdminLayout>{children};</AdminLayout>;
      }}
    />
  );
}
