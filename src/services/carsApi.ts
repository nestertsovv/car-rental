import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://669fb2b1b132e2c136fed224.mockapi.io/",
});
