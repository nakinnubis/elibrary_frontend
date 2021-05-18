import { BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import Library from "./pages/dashboard/library";
import Dashboard from "./pages/dashboard";
import MemberPortalELibrary from "./pages/dashboard/member-portal-elibrary";
import Home from "./pages/home/home";
import MemLogin from "./pages/home";
import Admin from "./pages/home/admin"
import ProtectedRoute from "./components/ProtecteRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminDashboard from "./pages/admin-dashboard";
import ManageBooks from "./pages/admin-dashboard/manage-books";
import MyBooks from "./pages/dashboard/my-books";

export default function Routes() {
  
  return (
    <Router>
      <Switch> 
        <ProtectedRoute  exact path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route path="/dashboard/member-portal-elibrary">
          <MemberPortalELibrary />
        </Route>
        <Route path="/dashboard/my-books">
          <MyBooks/>
        </Route>
        <ProtectedAdminRoute exact path="/admin-dashboard">
          <AdminDashboard/>
        </ProtectedAdminRoute>
        <Route path="/admin-dashboard/manage-books">
          <ManageBooks/>
        </Route>
        <Route path="/login" component={MemLogin} />
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        
      </Switch>
    </Router>
  );
}
