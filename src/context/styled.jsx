import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";

const Theme = function ({ children }) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
