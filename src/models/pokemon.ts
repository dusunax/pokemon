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
  catched_at: string;
}
