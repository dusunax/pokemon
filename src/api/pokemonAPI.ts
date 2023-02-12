import { axiosInstance } from "./client";
import { apiBaseDataUrl, apiBaseImgUrl, baseURL } from "./constants";

import { PokemonDTO } from "@/models/pokemon";
import { dbService } from "@/common/fbase";

export const getPokemonInfo = (idNo: number) => {
  return axiosInstance.get(`${apiBaseDataUrl}${idNo}`);
};

export const getPokemonImage = (idNo: number) => {
  return axiosInstance.get(`${apiBaseImgUrl}${idNo}.png`);
};

export const savePokemonDB = async (payload: PokemonDTO | undefined) => {
  if (!payload) return;

  try {
    const result = await dbService.collection("pokemonDB").add(payload);
  } catch (err) {
    throw new Error("포켓몬 저장 실패");
  }
};

export const fetchPokemonDB = () => {
  return dbService.collection("pokemonDB").get();
};
