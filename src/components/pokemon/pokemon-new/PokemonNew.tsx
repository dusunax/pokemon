import { getId } from "@/utils/getId";
import Image from "next/image";
import { useState } from "react";

import usePoketmonQuery from "../hooks/usePoketmonQuery";

export default function PokemonNew() {
  const { newPokemon, getPokemonQuery, updateIdNo } = usePoketmonQuery();

  const { names, imgUrl, catched_at, no } = newPokemon;

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">PokemonNew</h1>

      <section className="random-pokemon">
        <div className="new-pokemon px-4 pt-6 my-4 w-36 h-36 mx-auto bg-white shadow-xl relative">
          <div className="name px-2 rounded-lg absolute top-2 left-2 text-xs bg-zinc-500 text-zinc-50">
            {(no > 0 ? no : "") + " " + names["ko"]}
          </div>
          <Image
            src={imgUrl}
            alt={"뭘까요?"}
            width={2000}
            height={2000}
            className="img w-full object-contain"
          />
        </div>
        <button onClick={updateIdNo}>뽑기</button>
      </section>
    </div>
  );
}
