import Head from "next/head";

import PoketmonList from "@/components/poketmon/poketmon-list/PoketmonList";
import PoketmonNew from "@/components/poketmon/poketmon-new/PoketmonNew";
import Timer from "@/components/timer/Timer";
import Link from "next/link";

export default function PoketmonPage() {
  return (
    <>
      <Head>
        <title>포켓몬</title>
      </Head>
      <main>
        <PoketmonNew />
        <PoketmonList />
        <Timer />
        <Link href={`/`}>로그아웃</Link>
      </main>
    </>
  );
}
