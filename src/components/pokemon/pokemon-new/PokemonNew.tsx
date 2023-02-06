import Image from "next/image";
import { useEffect } from "react";

import usePoketmonQuery from "../hooks/usePoketmon";

import testImg from "../../../../public/assets/images/pokemon/1.png";
import { log } from "console";

export default function PokemonNew() {
  const { getPokemonQuery, pokemons } = usePoketmonQuery();
  const { names, imgUrl, catched_at, no } = pokemons;

  async function drawHandler() {
    const noId = Math.floor(Math.random() * 800);

    const res = await getPokemonQuery(noId);
    console.log(res, noId);
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">PokemonNew</h1>

      <section className="random-pokemon">
        <div className="new-pokemon my-4 w-32 h-32 mx-auto bg-white shadow-xl relative">
          <div className="name px-2 rounded-lg absolute top-2 left-2 text-xs bg-zinc-500 text-zinc-50">
            {no + " " + names["ko"]}
          </div>
          <Image
            src={testImg}
            alt={"뭘까요?"}
            className="img w-full object-contain"
          />
        </div>
        <button onClick={drawHandler}>뽑기</button>
      </section>
    </div>
  );
}
