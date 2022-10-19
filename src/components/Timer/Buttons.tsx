import { MouseEventHandler } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { VscDebugContinue } from "react-icons/vsc";
import { MdRestartAlt } from "react-icons/md";

interface Props {
  pauseDisable: boolean;
  continueDisable: boolean;
  startDisable: boolean;
  start: MouseEventHandler<HTMLButtonElement>;
  continueB: MouseEventHandler<HTMLButtonElement>;
  reset: MouseEventHandler<HTMLButtonElement>;
  pause: MouseEventHandler<HTMLButtonElement>;
}

const Buttons = ({
  start,
  pause,
  continueB,
  reset,
  startDisable,
  pauseDisable,
  continueDisable,
}: Props) => {
  return (
    <div className="Buttons__container">
      {!startDisable ? (
        <button onClick={start} disabled={startDisable}>
          <BsFillPlayFill />
        </button>
      ) : (
        <button onClick={reset}>
          <MdRestartAlt />
        </button>
      )}
      {!continueDisable ? (
        <button onClick={continueB} disabled={continueDisable}>
          <VscDebugContinue />
        </button>
      ) : (
        <button onClick={pause} disabled={pauseDisable}>
          <BsPauseFill />
        </button>
      )}
    </div>
  );
};

export default Buttons;
