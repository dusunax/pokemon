import Link from "next/link";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>홈페이지</title>
        <meta name="description" content="엄청난 홈페이지" />
      </Head>

      <h1>Hello World</h1>
      <Link href="/news">라우트 이동</Link>
    </>
  );
}

export default HomePage;
