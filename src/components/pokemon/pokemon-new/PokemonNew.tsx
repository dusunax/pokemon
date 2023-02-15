import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

import pokeball from "@public/assets/images/button/pokeball.png";
import Image from "next/image";
import { updateUserDrawTime } from "@/api/userAPI";

export default function PokemonNew({
  pokemonQuery,
}: {
  pokemonQuery: UsePoketmonQuery;
}) {
  const { currPokemon, updateIdNo } = pokemonQuery;

  const buttonClickHandler = () => {
    updateIdNo();
    updateUserDrawTime();
  };

  return (
    <div className="text-center">
      {/* <h1 className="text-4xl font-bold">PokemonNew</h1> */}
      <div className="w-36 h-36 mx-auto">
        <Pokemon pokemon={currPokemon} />
      </div>

      <section>
        <button
          onClick={buttonClickHandler}
          className="random-pokemon relative -mt-2 hover:scale-125 transition-all active:scale-50"
        >
          <Image width={40} src={pokeball} alt="몬스터볼" />
        </button>
      </section>
    </div>
  );
}
