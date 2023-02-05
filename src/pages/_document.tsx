import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Html, Head, Main, NextScript } from "next/document";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          <DefaultLayout>
            <Main />
          </DefaultLayout>

          <NextScript />
        </QueryClientProvider>
      </body>
    </Html>
  );
}
