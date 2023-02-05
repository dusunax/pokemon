import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { axiosInstance } from "@/api/client";

import { queryKeys } from "../../../react-query/constants";
import { pokemonDTO } from "@/models/pokemon";

import { getPokemonImage, getPokemonInfo } from "@/api/poketmon";
import { getId } from "@/utils/getId";

interface UsePoketmon {
  getPokemonQuery: (idNo: number) => Promise<pokemonDTO>;
}

export default function usePoketmon(): UsePoketmon {
  const queryClient = useQueryClient();
  const [idNo, setIdNo] = useState<number>(getId());

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

  // useEffect
  useEffect(() => {
    // queryClient의 prefetchQuery => inactive 데이터를 패치합니다.
    const newId = getId();
    setIdNo(newId);

    queryClient.prefetchQuery([queryKeys.pokemon], () =>
      getPokemonQuery(newId)
    );
  }, [queryClient, idNo]);

  return { getPokemonQuery };
}
