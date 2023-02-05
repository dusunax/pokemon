import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { axiosInstance } from "@/api/client";

import { pokemonDTO } from "@/models/pokemon";
import { getId } from "@/utils/getId";

import { queryKeys } from "../../../react-query/constants";
import { getPokemonImage, getPokemonInfo } from "@/api/poketmon";

/** api에 get요청을 보내고, pokemonDTO 타입에 맞는 값을 리턴합니다. */
async function getPokemonQuery(idNo: number): Promise<pokemonDTO> {
  const infoRes = await getPokemonInfo(idNo);
  const imgRes = await getPokemonImage(idNo);

  // infoRes, imgRes 가공해서 아래 타입으로 만들기
  const data: pokemonDTO = {
    no: 1,
    name: {
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

  return data;
}

interface UsePoketmon {
  getPokemonQuery: (idNo: number) => Promise<pokemonDTO>;
}

export default function usePoketmonQuery(): UsePoketmon {
  const [idNo, setIdNo] = useState<number>(getId());

  const queryClient = useQueryClient();

  // useEffect
  useEffect(() => {
    const newId = getId();
    setIdNo(newId);

    queryClient.prefetchQuery([queryKeys.pokemon], () =>
      getPokemonQuery(newId)
    );
  }, [queryClient, idNo]);

  const fallback = {};
  const { data = fallback } = useQuery([queryKeys.pokemon], () =>
    getPokemonQuery(idNo)
  );

  return { getPokemonQuery };
}
