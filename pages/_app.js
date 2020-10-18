import { ThemeProvider } from "emotion-theming";
import Header from "../components/header";
import GlobalStyles from "../components/styles/GlobalStyles";

const theme = {
  colors: {
    primary: "#ff0000",
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
