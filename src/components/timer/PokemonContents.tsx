import { useEffect } from "react";

import PokemonNew from "../pokemon/pokemon-new/PokemonNew";
import PokemonList from "../pokemon/pokemon-list/PokemonList";
import Timer from "./Timer";

import usePokemonQuery from "../pokemon/hooks/usePokemonQuery";
import useTimer from "@/components/timer/hooks/useTimer";
import SkeletonPokemonList from "../pokemon/skeleton/SkeletonPokemonList";

export default function PokemonContents() {
  const pokemonQuery = usePokemonQuery();
  const timer = useTimer();

  return (
    <section className="main-section bg-light-blue flex-1 flex flex-col text-center min-h-full relative">
      <div>
        <PokemonNew pokemonQuery={pokemonQuery} timer={timer} />
      </div>

      <Timer timer={timer} />
      <PokemonList pokemonQuery={pokemonQuery} />
    </section>
  );
}
