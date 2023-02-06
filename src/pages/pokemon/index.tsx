import Head from "next/head";
import Pokemon from "@/components/pokemon/Pokemon";

export default function PokemonPage() {
  return (
    <>
      <Head>
        <title>포켓몬</title>
      </Head>
      <main>
        <Pokemon />
      </main>
    </>
  );
}
