import Head from "next/head";
import Link from "next/link";

export default function PoketmonPage() {
  const id = 1;

  return (
    <>
      <Head>
        <title>포켓몬</title>
      </Head>
      <main>
        <h1>hello world!</h1>
        <Link href={`/poketmon/${id}`}>하하</Link>
      </main>
    </>
  );
}
