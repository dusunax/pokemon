import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

import pokeball from "@public/assets/images/button/pokeball.png";
import Image from "next/image";

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

      <section className="random-pokemon  relative -mt-2 hover:scale-125 transition-all  active:scale-50">
        <button onClick={updateIdNo}>
          <Image width={40} src={pokeball} alt="" />
        </button>
      </section>
    </div>
  );
}
