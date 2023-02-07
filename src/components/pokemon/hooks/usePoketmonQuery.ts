import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import { PokemonDTO } from "@/models/pokemon";
import {
  mappingLanguageKey,
  mappingNamesToSingleObj,
} from "../utils/mappingPokemonName";

import { queryKeys } from "../../../react-query/constants";
import { getPokemonImage, getPokemonInfo } from "@/api/poketmon";

import { getId } from "@/utils/getId";
import { checkStatus200 } from "@/utils/checkStatus200";
import { idNoDTO, initPokemon } from "./pokemon";

/** api에 get요청을 보내고, pokemonDTO 타입에 맞는 값을 리턴합니다. */
async function getPokemonQuery(no: number): Promise<PokemonDTO> {
  const infoRes = await getPokemonInfo(no);
  const imgRes = await getPokemonImage(no);

  if (!checkStatus200(infoRes)) console.log("포켓몬 정보 fetch 실패");
  if (!checkStatus200(imgRes)) console.log("포켓몬 이미지 fetch 실패");

  const imgUrl = imgRes.config.url!;
  let resNames = infoRes.data.names;

  const mapNamesObj: any = mappingLanguageKey(
    mappingNamesToSingleObj(resNames)
  );

  // catched_at : timestamp로 저장 필요
  const catched_at = new Date();

  const pokemonData: PokemonDTO = {
    no,
    names: mapNamesObj,
    imgUrl,
    catched_at: "2023-01-01",
  };

  return pokemonData;
}

// Hook return 타입
interface UsePoketmon {
  getPokemonQuery: (no: number) => Promise<PokemonDTO>;
  newPokemon: PokemonDTO;
  idNo: idNoDTO;
  updateIdNo: () => void;
}

/** hook 시작 */
export default function usePoketmonQuery(): UsePoketmon {
  const [idNo, setIdNo] = useState({
    curr: 1,
    next: getId(),
  });

  // const deletePokemon = () => {};

  function updateIdNo(): void {
    setIdNo({ curr: idNo.next, next: getId() });
  }

  const queryClient = useQueryClient();

  // useEffect
  useEffect(() => {
    queryClient.prefetchQuery([queryKeys.pokemon, idNo.next], () => {
      getPokemonQuery(idNo.next);
    });
  }, [queryClient, idNo]);

  const fallback = initPokemon();
  const { data: newPokemon = fallback } = useQuery(
    [queryKeys.pokemon, idNo.curr],
    () => {
      return getPokemonQuery(idNo.curr);
    },
    {
      retry: 2,
    }
  );

  return { getPokemonQuery, updateIdNo, newPokemon, idNo };
}
