import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { instance } from "../../apis/api";
import { Card } from "../Card";

const ExerciseById = () => {
  const [exerciseId, setExerciseId] = useState<any>("");
  const { id }: any = useParams();

  const getExerciseById = async (id: any) => {
    try {
      const response = await instance.get(`/exercise/${id}`, {});
      console.log(response?.data);
      setExerciseId(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExerciseById(id);
  }, [id]);

  return (
    <div>
      <Card data={exerciseId} />
    </div>
  );
};

export default ExerciseById;
