import { PokemonDTO } from "@/models/pokemon";

export interface idNoDTO {
  curr: number;
  next: number;
}

/** 포켓몬 기본값 */
export function initPokemon() {
  const initData: PokemonDTO = {
    no: 0,
    names: {
      ko: "뭘까요?",
      en: "???",
      jp: "???",
      cn: "???",
      fr: "???",
    },
    imgUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png",
    catched_at: "2023-01-01",
  };
  return initData;
}
