import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import React, { useEffect, useState } from "react";

import type { AppProps } from "next/app";

import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
