import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import React from "react";

import type { AppProps } from "next/app";

import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
