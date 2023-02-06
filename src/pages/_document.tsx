import { DefaultLayout } from "@/layouts/DefaultLayout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <DefaultLayout>
          <Main />
        </DefaultLayout>

        <NextScript />
      </body>
    </Html>
  );
}
