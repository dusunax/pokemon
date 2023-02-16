import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";

import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

import Pokemon from "@/components/pokemon/pokemon/Pokemon";
import { PokemonDTO } from "@/models/pokemon";
import { useEffect } from "react";

interface ServerSidePropsType {
  pokemonList: PokemonDTO[];
  isLoggedIn: boolean;
}

const PokemonDetailPage: NextPage<ServerSidePropsType> = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const matchedPokemon = {};

  useEffect(() => {
    console.log(props);
    console.log(id);
  }, [props, id]);

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
};

export const getServerSideProps: GetServerSideProps<
  ServerSidePropsType
> = async (context) => {
  const filePath = path.join(process.cwd(), "public", "pokemon.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const pokemonList = JSON.parse(fileContents);

  return {
    props: {
      pokemonList,
    } as any,
  };
};

export default PokemonDetailPage;
