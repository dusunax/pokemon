import { useEffect } from "react";
import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

export default function PokemonNew({
  pokemonQuery,
}: {
  pokemonQuery: UsePoketmonQuery;
}) {
  const { currPokemon, updateIdNo } = pokemonQuery;

  return (
    <div className="text-center">
      {/* <h1 className="text-4xl font-bold">PokemonNew</h1> */}
      <div className="w-36 h-36 mx-auto">
        <Pokemon pokemon={currPokemon} />
      </div>

      <section className="random-pokemon">
        <button onClick={updateIdNo}>뽑기</button>
      </section>
    </div>
  );
}
