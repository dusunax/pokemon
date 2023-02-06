import { axiosInstance } from "./client";
import { apiBaseDataUrl, apiBaseImgUrl, baseURL } from "./constants";

import { PokemonDTO } from "@/models/pokemon";

export const getPokemonInfo = (idNo: number) => {
  return axiosInstance.get(`${apiBaseDataUrl}${idNo}`);
};

export const getPokemonImage = (idNo: number) => {
  return axiosInstance.get(`${apiBaseImgUrl}${idNo}.png`);
};

export const savePokemonDB = (payload: PokemonDTO) => {
  return axiosInstance.post(`${baseURL}`, payload);
};

export const fetchPokemonDB = () => {
  return axiosInstance.get(`${baseURL}`);
};
