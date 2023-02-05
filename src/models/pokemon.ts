interface pokemon {
  no: number;
  name: {
    ko: string;
    en: string;
    jp: string;
    cn: string;
    fr: string;
  };
  imgUrl: string;
  catched_at: string;
}

export type pokemonDTO = pokemon;
