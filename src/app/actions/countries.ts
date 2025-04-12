"use server";

import { CountryResponseService } from "../interfaces/actions/Countries";
import { API } from "../utils/axios";

export const getCountries = async (): Promise<CountryResponseService[]> => {
  try {
    const response = await API.get("/all");
    return response.data;
  } catch (error) {
    console.error(error);
    return [] as CountryResponseService[];
  }
};
