import axios from "axios";
export const instance = axios.create({
  method: "GET",
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_TOKEN,
  },
});
