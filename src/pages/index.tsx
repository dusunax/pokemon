import Main from "@/components/main/Main";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <main>
        <Main />
        <Link href="/poketmon">나 링크</Link>
      </main>
    </>
  );
}
