import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { PokemonDTO } from "@/models/pokemon";
import {
  mappingLanguageKey,
  mappingNamesToSingleObj,
} from "../utils/mappingPokemonName";

import { queryKeys } from "../../../react-query/constants";
import { getPokemonImage, getPokemonInfo, savePokemonDB } from "@/api/poketmon";

import { getId } from "@/utils/getId";
import { checkStatus200 } from "@/utils/checkStatus200";
import { idNoDTO, initPokemon } from "./pokemon";
import { dbService } from "@/common/fbase";

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
    curr: 0,
    next: getId(),
  });

  function updateIdNo(): void {
    setIdNo({ curr: idNo.next, next: getId() });
    queryClient.clear();
    // console.log(newPokemon);
    dbService.collection("pokemonDB").add(newPokemon);
  }

  const queryClient = useQueryClient();

  // useEffect
  useEffect(() => {
    queryClient.prefetchQuery([queryKeys.pokemon, idNo.next], () => {
      idNo.curr > 0 && getPokemonQuery(idNo.next);
    });
  }, [queryClient, idNo]);

  const fallback = initPokemon();
  const { data: newPokemon = fallback, remove } = useQuery(
    [queryKeys.pokemon, idNo.curr],
    () => {
      if (idNo.curr === 0) return fallback;

      return getPokemonQuery(idNo.curr);
    },
    {
      retry: 2,
    }
  );

  // useMutaion 내용
  // const { mutate, isLoading, isError, error, isSuccess } = useMutation([
  //   queryKeys.pokemon,
  //   idNo.curr,
  // ]);

  return { getPokemonQuery, updateIdNo, newPokemon, idNo };
}
