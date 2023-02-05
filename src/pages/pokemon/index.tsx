import Head from "next/head";

import PokemonList from "@/components/pokemon/pokemon-list/PokemonList";
import PokemonNew from "@/components/pokemon/pokemon-new/PokemonNew";
import Timer from "@/components/timer/Timer";
import Link from "next/link";

export default function PokemonPage() {
  return (
    <>
      <Head>
        <title>포켓몬</title>
      </Head>
      <main>
        <PokemonNew />
        <PokemonList />
        <Timer />
        <Link href={`/`}>로그아웃</Link>
      </main>
    </>
  );
}
