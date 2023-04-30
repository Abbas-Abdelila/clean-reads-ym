const { default: axios } = require("axios");

export const publicHttp = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
publicHttp.defaults.headers = {
  "Cache-Control": "no-cache",
};

export const protectedHttp = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});
