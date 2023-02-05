import { axiosInstance } from "./client";

export const getPoketmonInfo = () => {
  return axiosInstance.get(`/`);
};

export const getPoketmonImage = () => {
  return axiosInstance.get(`/`);
};

export const savePoketmonDB = () => {
  return axiosInstance.post(`/`, {});
};

export const fetchPoketmonDB = () => {
  return axiosInstance.post(`/`, {});
};
