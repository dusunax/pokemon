import Pokemon from "@/components/pokemon/Pokemon";
import Head from "next/head";
import Link from "next/link";

export default function PokemonId() {
  return (
    <>
      <Head>
        <title>포켓몬 상세</title>
      </Head>
      <div>
        <Pokemon />
        <Link href={`/pokemon/`}>뒤로 가기</Link>
      </div>
    </>
  );
}
