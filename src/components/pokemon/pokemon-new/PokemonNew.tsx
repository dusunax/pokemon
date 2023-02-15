import { UsePoketmonQuery } from "../hooks/usePokemonQuery";
import Pokemon from "../pokemon/Pokemon";

import pokeball from "@public/assets/images/button/pokeball.png";
import Image from "next/image";
import { updateUserDrawTime } from "@/api/userAPI";
import useTimer from "@/components/timer/hooks/useTimer";

export default function PokemonNew({
  pokemonQuery,
}: {
  pokemonQuery: UsePoketmonQuery;
}) {
  const { currPokemon, updateIdNo } = pokemonQuery;
  const { isOverHour } = useTimer();

  const buttonClickHandler = () => {
    updateIdNo();
    updateUserDrawTime();
  };

  return (
    <div className="text-center">
      <div className="w-36 h-36 mx-auto">
        <Pokemon pokemon={currPokemon} />
      </div>

      <section>
        <button
          onClick={
            isOverHour
              ? buttonClickHandler
              : () => alert("아직 뽑을 수 없어요:(")
          }
          className="random-pokemon relative -mt-2 hover:scale-125 transition-all active:scale-50"
        >
          <Image
            className={isOverHour ? "" : "opacity-25"}
            width={40}
            src={pokeball}
            alt="몬스터볼"
          />
        </button>
      </section>
    </div>
  );
}
