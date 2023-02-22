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
  const { isOverLimit: isOverHour } = useTimer();

  const buttonClickHandler = () => {
    updateIdNo();
    updateUserDrawTime();
  };

  return (
    <div className="text-center">
      <div className="w-36 h-36 mx-auto -m-20">
        <Pokemon pokemon={currPokemon} />
      </div>

      <div>
        <button
          onClick={
            isOverHour
              ? buttonClickHandler
              : () => alert("아직 뽑을 수 없어요:(")
          }
          className="random-pokemon relative pt-1 mt-16 hover:scale-125 transition-all active:scale-50"
        >
          <Image
            className={isOverHour ? "" : "opacity-25"}
            width={40}
            src={pokeball}
            alt="몬스터볼"
          />
        </button>
      </div>
    </div>
  );
}
