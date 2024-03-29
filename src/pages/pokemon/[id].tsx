import Head from "next/head";
import Link from "next/link";

import fs from "fs";
import path from "path";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import Pokemon from "@/components/pokemon/pokemon/Pokemon";
import { PokemonDTO } from "@/models/pokemon";

import Button from "@/components/common/Button";

interface ServerSidePropsType {
  pokemonList: PokemonDTO[];
  isLoggedIn: boolean;
}

const PokemonDetailPage = ({ pokemonList }: { pokemonList: PokemonDTO[] }) => {
  // const PokemonDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) throw new Error("포켓몬 id가 없음!");

  const matchedPokemon = pokemonList.find((pokemon) => pokemon.no === +id);
  // const matchedPokemon = undefined;
  if (!matchedPokemon) throw new Error("포켓몬이 없음!");
  const catchedAt = new Date(matchedPokemon.catched_at).toLocaleDateString();

  return (
    <>
      <Head>
        <title>포켓몬 상세</title>
      </Head>

      <div className="h-full mt-44 bg-white text-center">
        {/* id에 맞는 포켓몬을 리스트에서 찾아서 Pokemon에 전달 */}
        <div className="w-60 -mt-32 mx-auto">
          <Pokemon
            pokemon={matchedPokemon}
            hideText={false}
            textSize={"text-sm"}
          />
        </div>
        <h3 className="my-4 text-3xl font-bold">
          {matchedPokemon.names["ko"]}
        </h3>
        <div>{catchedAt}</div>
        <Button className="py-2 px-4 mt-10 rounded-3xl bg-zinc-600 text-white text-sm text-center hover:opacity-90">
          <Link href={`/pokemon/`}>뒤로 가기</Link>
        </Button>
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
