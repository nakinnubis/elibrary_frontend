import { AuthProvider } from "./context/AuthContext";
import "./styles/globals.css";
import Theme from "./context/styled";
import Routes from "./router";

function MyApp() {
  return (
    <>
      <AuthProvider>
        <Theme>
            <Routes />
        </Theme>
      </AuthProvider>
    </>
  );
}

export default MyApp;
