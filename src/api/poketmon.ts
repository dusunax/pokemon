import { axiosInstance } from "./client";

export const getPokemonInfo = () => {
  return axiosInstance.get(`/`);
};

export const getPokemonImage = () => {
  return axiosInstance.get(`/`);
};

export const savePokemonDB = () => {
  return axiosInstance.post(`/`, {});
};

export const fetchPokemonDB = () => {
  return axiosInstance.post(`/`, {});
};
