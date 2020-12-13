import Head from "next/head";
import "../styles/globals.scss";
import { CookiesProvider } from "react-cookie";
import Router from "next/router";
import NProgress from "nprogress";
import "bootstrap/dist/css/bootstrap.min.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;

  //Binding events.
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

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
