import Link from "next/link";
import { useRouter } from "next/router";

import PokemonNew from "./pokemon-new/PokemonNew";
import PokemonList from "./pokemon-list/PokemonList";
import Timer from "../timer/Timer";

import { authService } from "@/common/fbase";

export default function PokemonContents() {
  const router = useRouter();

  return (
    <div className="text-center">
      <div className="flex flex-col gap-4 m-common">
        <h1 className="mb-4 text-4xl font-bold">Pokemon</h1>

        <PokemonNew />
        <PokemonList />
        <Timer />
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
