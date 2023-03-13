import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { authService } from "@/common/fbase";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

import { saveUserData, updateUserSignInTime } from "@/api/userAPI";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        saveUserData(user);
        updateUserSignInTime(user);
        sessionStorage.setItem("user", user.uid);
      } else {
        setIsLoggedIn(false);
        sessionStorage.removeItem("user");
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultLayout>
          {init ? (
            <Component {...pageProps} isLoggedIn={isLoggedIn} />
          ) : (
            "초기화 중"
          )}
        </DefaultLayout>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
