import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Library from "./pages/dashboard/library";
import Dashboard from "./pages/dashboard";
import MemberPortalELibrary from "./pages/dashboard/member-portal-elibrary";
import Home from "./pages/home";
import ProtectedRoute from "./components/ProtecteRoute";

export default function Routes() {
  return (
    <Router>
      <Switch> 
        <ProtectedRoute  exact path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/dashboard/member-portal-elibrary">
          <MemberPortalELibrary />
        </ProtectedRoute>
        <Route path="/login" component={Home} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}
