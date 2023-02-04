import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>홈</title>
      </Head>
      <main>
        <h1>스티커 뽑기</h1>
        <Link href="/poketmon">바로가기</Link>
      </main>
    </>
  );
}
