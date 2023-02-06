export interface pokemonNames {
  ko: string;
  en: string;
  jp: string;
  cn: string;
  fr: string;
}
export interface pokemonDTO {
  no: number;
  names: pokemonNames;
  imgUrl: string;
  catched_at: string;
}
