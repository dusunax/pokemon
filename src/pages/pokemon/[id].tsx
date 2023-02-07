import Head from "next/head";
import Link from "next/link";

import Pokemon from "@/components/pokemon/pokemon/Pokemon";

export default function PokemonId() {
  const matchedPokemon = {};

  return (
    <>
      <Head>
        <title>포켓몬 상세</title>
      </Head>
      <div>
        {/* id에 맞는 포켓몬을 리스트에서 찾아서 Pokemon에 전달 */}
        {/* <Pokemon pokemon={matchedPokemon} /> */}
        <Link href={`/pokemon/`}>뒤로 가기</Link>
      </div>
    </>
  );
}
