import { instance } from "../apis/api";
import { Excercise } from "../interfaces/Api";
import { useState } from "react";

export const useBody = () => {
  const [part, setPart] = useState<{ [key: string]: any }>([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);

  const getBodyPart = async (partBody: string) => {
    try {
      setIsLoading(true);
      const response = await instance.get("", {});
      const filterBody = response?.data?.filter(
        (e: Excercise) => e.bodyPart === partBody
      );
      setPart(filterBody);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isLoading,
    part,
    setPart,
    getBodyPart,
  };
};
