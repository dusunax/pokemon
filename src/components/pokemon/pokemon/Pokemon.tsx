import { FBPokemonDTO, PokemonDTO } from "@/models/pokemon";
import Image from "next/image";

export default function Pokemon({
  pokemon,
}: {
  pokemon: PokemonDTO | FBPokemonDTO;
}) {
  const { names, imgUrl, no } = pokemon;
  const isCachedRange = no > 0 && no <= 151;

  return (
    <div
      className={`new-pokemon px-2 pt-4 my-2 rounded-full mx-auto bg-[#ebf3f3] grad shadow-inner-custom relative ${
        isCachedRange && " border-2 border-red"
      }`}
    >
      {/* 포켓몬 이미지 */}
      <Image
        src={imgUrl}
        alt={"뭘까요?"}
        width={200}
        height={200}
        className="img w-full object-contain"
      />

      {/* 포켓몬 넘버, 포켓몬 이름 */}
      <div className="name px-2 rounded-lg absolute -top-2 left-1/2 -translate-x-1/2 text-xxs break-keep bg-zinc-500 text-zinc-50 opacity-0">
        <div className={isCachedRange ? " text-green-300" : ""}>
          {(no > 0 ? no : "") + " " + names["ko"]}
        </div>
      </div>
    </div>
  );
}
