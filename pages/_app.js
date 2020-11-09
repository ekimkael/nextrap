import Head from "next/head";
import "../styles/globals.scss";
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;
  return (
    <>
      <CookiesProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Template>
          <Component {...pageProps} />
        </Template>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
const EmptyTemplate = ({ children }) => <>{children}</>;
