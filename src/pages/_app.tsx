import type { AppProps } from "next/app";
import PostsContextProvider from "../store/posts-context";

import Layout from "../components/templates/layout/layout";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <PostsContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostsContextProvider>
  );
}

export default App;
