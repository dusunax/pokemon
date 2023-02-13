import { axiosInstance } from "./client";
import { apiBaseDataUrl, apiBaseImgUrl } from "./constants";

import { PokemonDTO } from "@/models/pokemon";
import { GetUserRef } from "@/models/user";

import { dbService } from "@/common/fbase";

export const getPokemonInfo = (idNo: number) => {
  return axiosInstance.get(`${apiBaseDataUrl}${idNo}`);
};

export const getPokemonImage = (idNo: number) => {
  return axiosInstance.get(`${apiBaseImgUrl}${idNo}.png`);
};

/** 유저Ref 관련 object를 리턴합니다. */
export async function getFirestoreRefObject(): Promise<GetUserRef> {
  const collectionName = "pokemonDB";

  const uid = sessionStorage.getItem("user");
  const collection = dbService.collection(collectionName);
  const userRef = collection.where("userId", "==", uid);
  const user = (await userRef.get()).docs[0];

  if ((await userRef.get()).empty) return { uid, collection, userRef, user };
  if (!user) throw new Error("유저 리스트가 없습니다.");

  return { uid, collection, userRef, user };
}

/** 새 포켓몬을 저장합니다. */
export const savePokemonToDB = async (payload: PokemonDTO | undefined) => {
  const uid = sessionStorage.getItem("user");
  if (!payload || !uid) return;

  addPokemonToList(payload, uid);
};

/** 새 포켓몬을 추가합니다. */
const addPokemonToList = async (pokemon: PokemonDTO, uid: string) => {
  const { userRef } = await getFirestoreRefObject();

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
export const fetchPokemonDB = async () => {
  const { user } = await getFirestoreRefObject();

  return await user.data().pokemonList;
};
