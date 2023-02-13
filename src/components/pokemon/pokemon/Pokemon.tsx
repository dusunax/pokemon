import { FBPokemonDTO, PokemonDTO } from "@/models/pokemon";
import Image from "next/image";

export default function Pokemon({
  pokemon,
}: {
  pokemon: PokemonDTO | FBPokemonDTO;
}) {
  const { names, imgUrl, no } = pokemon;

  return (
    <div className="new-pokemon px-2 pt-6 my-4 mx-auto bg-white shadow-xl relative">
      <div className="name px-2 rounded-lg absolute top-2 left-2 text-xxs bg-zinc-500 text-zinc-50">
        {(no > 0 ? no : "") + " " + names["ko"]}
      </div>
      <Image
        src={imgUrl}
        alt={"뭘까요?"}
        width={200}
        height={200}
        className="img w-full object-contain"
      />
    </div>
  );
}
