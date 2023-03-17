import firebase from "firebase/compat/app";

import { axiosInstance } from "./client";
import { apiBaseDataUrl, apiBaseImgUrl } from "./constants";

import { PokemonDTO } from "@/models/pokemon";
import { getFirestoreRefObject } from "./userAPI";
import { checkStatus200 } from "@/utils/checkStatus200";
import {
  mappingLanguageKey,
  mappingNamesToSingleObj,
} from "@/components/pokemon/utils/mappingPokemonName";

/** 포켓몬 정보: API에서 데이터 패칭 */
export const getPokemonInfo = (idNo: number) => {
  return axiosInstance.get(`${apiBaseDataUrl}${idNo}`);
};

/** 포켓몬 이미지: API에서 데이터 패칭 */
export const getPokemonImage = (idNo: number) => {
  return axiosInstance.get(`${apiBaseImgUrl}${idNo}.png`);
};

/** 새 포켓몬을 저장합니다. */
export const savePokemonToDB = async (payload: PokemonDTO | undefined) => {
  const { user, uid, userRef } = await getFirestoreRefObject();
  if (!payload || !uid) return;

  addPokemonToList(userRef, payload);
  user.ref.update({ totalPokemonNumber: user.data().totalPokemonNumber + 1 });
};

/** 새 포켓몬을 추가합니다. */
const addPokemonToList = async (
  userRef: firebase.firestore.Query<firebase.firestore.DocumentData>,
  pokemon: PokemonDTO
) => {
  try {
    const user = (await userRef.get()).docs[0];

    // 새로운 pokemonList 배열을 생성
    const updatedPokemonList = [...user.data().pokemonList, pokemon];

    // 새로운 버전의 user 문서 저장
    await user.ref.update({
      pokemonList: updatedPokemonList,
    });
  } catch (error) {
    console.error("새 포켓몬 저장에 실패 했습니다 : ", error);
  }
};

/** 유저의 포켓몬 리스트를 가져옵니다. */
export const fetchPokemonDB = async (limit: number, next: number) => {
  const { user } = await getFirestoreRefObject();
  const list = user.data().pokemonList.sort((a: PokemonDTO, b: PokemonDTO) => {
    return a.no - b.no;
  });

  // limit is 3
  // page starts at 0
  // 0, 2
  // 3, 5
  // 6, 8

  return list.slice(next * limit, next * limit + limit);
};

/** 페이지네이션 관련 데이터 */
export const setPaginationFromUserRef = async (limit: number) => {
  const { user } = await getFirestoreRefObject();

  const totalPokemonNumber = user.data().totalPokemonNumber;
  const totalPages = Math.ceil(totalPokemonNumber / limit);

  return { totalPages };
};

/** 포켓몬 1세대 리스트 */
export async function fetchPokemonData() {
  const pokemonList = [];

  for (let no = 1; no <= 151; no++) {
    console.log("데이터 패칭 진행 중");

    const infoRes = await getPokemonInfo(no);
    const imgRes = await getPokemonImage(no);

    const imgUrl = imgRes.config.url!;
    let resNames = infoRes.data.names;

    const mapNamesObj: any = mappingLanguageKey(
      mappingNamesToSingleObj(resNames)
    );

    const pokemonData: PokemonDTO = {
      no,
      names: mapNamesObj,
      imgUrl,
      catched_at: new Date(),
    };

    pokemonList.push(pokemonData);
  }
  return pokemonList;
}
