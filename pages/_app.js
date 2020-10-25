import { ThemeProvider } from "emotion-theming";
import Header from "../components/header";
import GlobalStyles from "../components/styles/GlobalStyles";
import theme from "../theme/theme";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

function App({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation}></Header>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

App.getInitialProps = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`);
  const navigation = await res.json();

  return { navigation };
};

export default App;
