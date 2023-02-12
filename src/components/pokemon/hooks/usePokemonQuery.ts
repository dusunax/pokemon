import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { FBPokemonDTO, PokemonDTO } from "@/models/pokemon";
import {
  mappingLanguageKey,
  mappingNamesToSingleObj,
} from "../utils/mappingPokemonName";

import { queryKeys } from "../../../react-query/constants";
import {
  fetchPokemonDB,
  getPokemonImage,
  getPokemonInfo,
  savePokemonDB,
} from "@/api/pokemonAPI";

import { getId } from "@/utils/getId";
import { checkStatus200 } from "@/utils/checkStatus200";
import { idNoDTO, initPokemon } from "@/models/pokemon";

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

/** snapShot을 return합니다. */
const fetchPokemonList = async () => {
  const pokemonDB = await fetchPokemonDB();
  let newList: FBPokemonDTO[] = [];

  pokemonDB.forEach((document) => {
    const object = {
      ...document.data(),
      id: document.id,
    };
    newList.push(object as FBPokemonDTO);
  });
  newList.sort((a, b) => a.no - b.no);

  // console.log(newList);
  return newList;
};

// Hook return 타입
export interface UsePoketmonQuery {
  getPokemonQuery: (no: number) => Promise<PokemonDTO>;
  updateIdNo: () => void;
  idNo: idNoDTO;
  currPokemon: PokemonDTO;
  pokemonList: FBPokemonDTO[];
}

/****************************************************/
/** hook 시작 */
export default function usePoketmonQuery(): UsePoketmonQuery {
  const [idNo, setIdNo] = useState({
    curr: 0,
    next: getId(),
  });

  const queryClient = useQueryClient();

  /** useQuery에 사용할 state를 업데이트합니다.
   * queryClient를 clear하고 DB에 포켓몬을 저장합니다. */
  async function updateIdNo() {
    setIdNo({ curr: idNo.next, next: getId() });

    savePokemonDB(newPokemon);
  }

  // useQuery 시작
  const fallback = initPokemon();
  const { data: currPokemon = fallback } = useQuery(
    [queryKeys.pokemon, idNo.curr],
    () => {
      if (idNo.curr === 0) return fallback;
      return getPokemonQuery(idNo.curr);
    }
  );

  const { data: newPokemon } = useQuery([queryKeys.pokemon, idNo.next], () => {
    return getPokemonQuery(idNo.next);
  });

  const { data: pokemonList = [] } = useQuery(
    [queryKeys.pokemonList, idNo.curr],
    async () => {
      const list = await fetchPokemonList();
      queryClient.setQueryData([queryKeys.pokemonList, idNo.curr], list);
      return list;
    },
    {
      keepPreviousData: true,
    }
  );

  // useEffect
  useEffect(() => {
    queryClient.prefetchQuery([queryKeys.pokemon, idNo.next], () => {
      idNo.curr > 0 && getPokemonQuery(idNo.next);
    });
  }, [queryClient, idNo]);

  return {
    getPokemonQuery,
    updateIdNo,
    currPokemon,
    pokemonList,
    idNo,
  };
}