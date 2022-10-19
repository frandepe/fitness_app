import { ChangeEventHandler } from "react";
import "./Timer.scss";

interface Props {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  count: number;
  notFlag: boolean;
}

const InputField = ({ handleChange, count, notFlag }: Props) => {
  return (
    <div className="InputField__container">
      <b>Time: </b>
      <input
        type={"number"}
        disabled={notFlag}
        value={count}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
