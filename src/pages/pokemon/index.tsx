import fs from "fs";
import path from "path";

import Head from "next/head";

import PokemonContents from "@/components/timer/PokemonContents";
import { PokemonDTO } from "@/models/pokemon";

function PokemonPage({ pokemonList }: { pokemonList: PokemonDTO[] }) {
  return (
    <>
      <Head>
        <title>포켓몬</title>
        <meta name="description" content="포켓몬 페이지입니다." />
        <meta property="og:title" content="포켓몬" />
        <meta property="og:description" content="포켓몬 페이지입니다." />
      </Head>
      <main className="bg-light-blue">
        <PokemonContents />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "public", "pokemon.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const pokemonList = JSON.parse(fileContents);

  return {
    props: {
      pokemonList,
    },
  };
}

export default PokemonPage;
