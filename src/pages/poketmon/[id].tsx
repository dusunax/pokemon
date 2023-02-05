import Poketmon from "@/components/poketmon/Poketmon";
import Head from "next/head";
import Link from "next/link";

export default function PoketmonId() {
  return (
    <>
      <Head>
        <title>포켓몬 상세</title>
      </Head>
      <div>
        <Poketmon />
        <Link href={`/poketmon/`}>뒤로 가기</Link>
      </div>
    </>
  );
}
