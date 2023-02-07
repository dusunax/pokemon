import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import React, { useState } from "react";
import type { AppProps } from "next/app";

import { authService } from "@/common/fbase";

import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
