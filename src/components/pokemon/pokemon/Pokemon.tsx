import { FBPokemonDTO, PokemonDTO } from "@/models/pokemon";
import Image from "next/image";

export default function Pokemon({
  pokemon,
}: {
  pokemon: PokemonDTO | FBPokemonDTO;
}) {
  const { names, imgUrl, no } = pokemon;

  return (
    <div className="new-pokemon px-2 pt-6 my-4 rounded-full mx-auto bg-[#dde5e4] shadow-inner-custom relative">
      <Image
        src={imgUrl}
        alt={"뭘까요?"}
        width={200}
        height={200}
        className="img w-full object-contain"
      />
      <div className="name px-2 rounded-lg absolute -top-2 left-1/2 -translate-x-1/2 text-xxs break-keep bg-zinc-500 text-zinc-50">
        <div className={no > 1 && no <= 151 ? " text-green-300" : ""}>
          {(no > 0 ? no : "") + " " + names["ko"]}
        </div>
      </div>
    </div>
  );
}
