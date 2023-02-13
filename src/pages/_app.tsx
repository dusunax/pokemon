import "tailwindcss/tailwind.css";
import "@/styles/index.css";

import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

import { authService } from "@/common/fbase";

import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "@/react-query/queryClient";

import { userObjDTO } from "@/models/user";
import { saveUserData } from "@/api/userAPI";

export default function App({ Component, pageProps }: AppProps) {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState<userObjDTO>();

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
        saveUserData(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {init ? (
          <Component {...pageProps} isLoggedIn={isLoggedIn} userObj={userObj} />
        ) : (
          "초기화 중"
        )}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}
