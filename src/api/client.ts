import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "./constants";

const config: AxiosRequestConfig = { baseURL };
export const axiosInstance = axios.create(config);
