import Head from "next/head";
import PokemonContents from "@/components/pokemon/PokemonContents";

export default function PokemonPage() {
  return (
    <>
      <Head>
        <title>포켓몬</title>
      </Head>
      <main>
        <PokemonContents />
      </main>
    </>
  );
}
