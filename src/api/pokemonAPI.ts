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

export const savePokemonToDB = async (payload: PokemonDTO | undefined) => {
  const uid = sessionStorage.getItem("user");
  if (!payload || !uid) return;

  addPokemonToList(payload, uid);
};

const addPokemonToList = async (pokemon: PokemonDTO, uid: string) => {
  const { userRef } = await getUserRef();

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

export const fetchPokemonDB = async () => {
  const { uid, db, userRef, user } = await getUserRef();

  if (await user.data().pokemonList)
    throw new Error("포켓몬 리스트가 없습니다.");

  return await user.data().pokemonList;
};

async function getUserRef(): Promise<GetUserRef> {
  const uid = sessionStorage.getItem("user");
  const db = dbService.collection("pokemonDB2");
  const userRef = db.where("userId", "==", uid);
  const user = (await userRef.get()).docs[0];

  if ((await userRef.get()).empty) throw new Error("유저 리스트가 없습니다.");

  return { uid, db, userRef, user };
}
