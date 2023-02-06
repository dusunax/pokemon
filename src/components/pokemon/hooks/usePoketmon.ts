import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import { pokemonDTO } from "@/models/pokemon";
import {
  mappingLanguageKey,
  mappingNamesToSingleObj,
} from "../utils/mappingPokemonName";

import { queryKeys } from "../../../react-query/constants";
import { getPokemonImage, getPokemonInfo } from "@/api/poketmon";

import { getId } from "@/utils/getId";
import { checkStatus200 } from "@/utils/checkStatus200";

const initData: pokemonDTO = {
  no: 1,
  names: {
    ko: "이상해씨",
    en: "bulbasaur",
    jp: "フシギダネ",
    cn: "妙蛙種子",
    fr: "Bulbizarre",
  },
  imgUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  catched_at: "2023-01-01",
};

/** api에 get요청을 보내고, pokemonDTO 타입에 맞는 값을 리턴합니다. */
async function getPokemonQuery(idNo: number): Promise<pokemonDTO> {
  const infoRes = await getPokemonInfo(idNo);
  const imgRes = await getPokemonImage(idNo);

  if (!checkStatus200(infoRes)) console.log("포켓몬 정보 fetch 실패");
  if (!checkStatus200(imgRes)) console.log("포켓몬 이미지 fetch 실패");

  const imgUrl = imgRes.config.url!;
  let resNames = infoRes.data.names;

  const mapNamesObj: any = mappingLanguageKey(
    mappingNamesToSingleObj(resNames)
  );

  const catched_at = new Date();
  console.log(catched_at.toDateString());

  // infoRes, imgRes 가공해서 아래 타입으로 만들기
  // catched_at : timestamp로 저장 필요
  const initData: pokemonDTO = {
    no: idNo,
    names: mapNamesObj,
    imgUrl,
    catched_at: "2023-01-01",
  };

  return initData;
}

interface UsePoketmon {
  getPokemonQuery: (idNo: number) => Promise<pokemonDTO>;
  pokemons: pokemonDTO;
}

export default function usePoketmonQuery(): UsePoketmon {
  const [idNo, setIdNo] = useState<number>(getId());

  const queryClient = useQueryClient();

  // useEffect
  useEffect(() => {
    queryClient.prefetchQuery([queryKeys.pokemon], () => getPokemonQuery(idNo));
  }, [queryClient, idNo]);

  const fallback = initData;
  const { data: pokemons = fallback } = useQuery([queryKeys.pokemon], () =>
    getPokemonQuery(idNo)
  );

  return { getPokemonQuery, pokemons };
}
