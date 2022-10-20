import axios from "axios";
const apiKEY = "613bf31ec2msh4ed6a45557593bfp1229a9jsn46464364d020";
export const instance = axios.create({
  method: "GET",
  baseURL: "https://exercisedb.p.rapidapi.com/exercises",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": apiKEY,
  },
});
