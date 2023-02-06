import { useEffect } from "react";
import Link from "next/link";

import usePoketmonQuery from "./hooks/usePoketmon";

import PokemonNew from "./pokemon-new/PokemonNew";
import PokemonList from "./pokemon-list/PokemonList";
import Timer from "../timer/Timer";

export default function Pokemon() {
  const { getPokemonQuery } = usePoketmonQuery();

  useEffect(() => {
    getPokemonQuery(1);
    console.log(getPokemonQuery(1));
  }, [getPokemonQuery]);

  return (
    <div className="text-center">
      <div className="flex flex-col gap-4 m-common">
        <h1 className="mb-4 text-4xl font-bold">Pokemon</h1>

        <PokemonNew />
        <PokemonList />
        <Timer />
        <Link href={`/`}>로그아웃</Link>
      </div>
    </div>
  );
}
