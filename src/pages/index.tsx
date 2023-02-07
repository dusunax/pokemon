import Auth from "@/components/auth/Auth";
import Main from "@/components/main/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <main>
        <Main />
        <Auth />

        <>&copy; {new Date().getFullYear()}</>
      </main>
    </>
  );
}
