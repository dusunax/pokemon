import { useRouter } from "next/router";

import PokemonNew from "./src/components/pokemon/pokemon-new/PokemonNew";
import PokemonList from "./src/components/pokemon/pokemon-list/PokemonList";
import Timer from "./src/components/timer/Timer";

import { authService } from "@/common/fbase";
import usePokemonQuery from "./src/components/pokemon/hooks/usePokemonQuery";

export default function PokemonContents() {
  const pokemonQuery = usePokemonQuery();
  const router = useRouter();

  return (
    <div className="text-center  bg-white">
      <div className="flex flex-col gap-4 px-6 sm:px-10 m-common">
        <PokemonNew pokemonQuery={pokemonQuery} />
        {/* <h1 className="mb-4 text-xl font-bold">포켓몬.</h1> */}

        <Timer />
        <PokemonList pokemonQuery={pokemonQuery} />
        <div
          onClick={() => {
            authService.signOut();
            router.push("/");
          }}
        >
          로그아웃
        </div>
      </div>
    </div>
  );
}
