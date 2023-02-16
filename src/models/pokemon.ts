export interface PokemonNames {
  ko: string;
  en: string;
  jp: string;
  cn: string;
  fr: string;
}
export interface PokemonDTO {
  no: number;
  names: PokemonNames;
  imgUrl: string;
  catched_at: Date;
}

export interface FBPokemonDTO extends PokemonDTO {
  id: string;
}
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
    catched_at: new Date(),
  };
  return initData;
}
