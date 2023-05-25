import axios, { AxiosInstance } from "axios";

let api: AxiosInstance | null = null;

export const setAPIProxy = (axiosInstance: AxiosInstance): void => {
  api = axiosInstance;
};

export const getAPIProxy = (): AxiosInstance => {
  if (!api) {
    throw new Error("API proxy not set");
  }
  return api;
};
