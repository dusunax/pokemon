import { useRouter } from "next/router";

import PokemonNew from "./pokemon-new/PokemonNew";
import PokemonList from "./pokemon-list/PokemonList";
import Timer from "../timer/Timer";

import { authService } from "@/common/fbase";
import usePokemonQuery from "./hooks/usePokemonQuery";

export default function PokemonContents() {
  const pokemonQuery = usePokemonQuery();
  const router = useRouter();

  return (
    <div className="text-center">
      <div className="flex flex-col gap-4 m-common">
        <h1 className="mb-4 text-4xl font-bold">Pokemon</h1>

        <Timer />
        <PokemonNew pokemonQuery={pokemonQuery} />
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
