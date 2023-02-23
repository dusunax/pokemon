import { useRouter } from "next/router";

import PokemonNew from "../pokemon/pokemon-new/PokemonNew";
import PokemonList from "../pokemon/pokemon-list/PokemonList";
import Timer from "./Timer";

import { authService } from "@/common/fbase";
import usePokemonQuery from "../pokemon/hooks/usePokemonQuery";
import useTimer from "@/components/timer/hooks/useTimer";

export default function PokemonContents() {
  const pokemonQuery = usePokemonQuery();
  const router = useRouter();
  const timer = useTimer();

  return (
    <section className="main-section bg-light-blue flex-1 flex flex-col text-center min-h-full relative">
      <div>
        <PokemonNew pokemonQuery={pokemonQuery} timer={timer} />
      </div>

      <Timer timer={timer} />
      <PokemonList pokemonQuery={pokemonQuery} />

      <div
        className="block absolute bottom-2"
        onClick={() => {
          authService.signOut();
          router.push("/");
        }}
      >
        로그아웃
      </div>
    </section>
  );
}
