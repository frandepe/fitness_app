import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import InputField from "./Input";

const TimerView = () => {
  const [input, setInput] = useState(3);
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(false);
  const [inputDisable, setInputDisable] = useState(false);
  const [pauseDisable, setPauseDisable] = useState(true);
  const [continueDisable, setContinueDisable] = useState(true);
  const handleChange = (e: any) => {
    setInput(Math.min(parseInt(e.target.value), 60));
    setMinutes(e.target.value);
  };
  const start = () => {
    setFlag(true);
    setInputDisable(true);
    setPauseDisable(false);
  };
  const reset = () => {
    setFlag(false);
    setInputDisable(false);
    setSeconds(0);
    setMinutes(3);
    setInput(3);
    setPauseDisable(true);
    setContinueDisable(true);
  };

  const pause = () => {
    setFlag(false);
    setPauseDisable(true);
    setContinueDisable(false);
  };

  const continueB = () => {
    setFlag(true);
    setPauseDisable(false);
    setContinueDisable(true);
  };

  useEffect(() => {
    if (flag) {
      const interval = setInterval(() => {
        if (Number(seconds) === 0 && Number(minutes) !== 0) {
          setSeconds((seconds) => seconds + 59);
          setMinutes((minutes) => minutes - 1);
        } else if (Number(seconds) === 0 && Number(minutes) === 0) {
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [seconds, minutes, flag]);

  return (
    <div className="TimerView__container">
      <InputField
        handleChange={handleChange}
        count={input}
        notFlag={inputDisable}
      />
      <div
        className={`TimerView__timer ${
          flag ? "TimerView__flag" : "TimerView__noFlag"
        }`}
      >
        <h2>
          {Math.min(Number(minutes), 60) < 10
            ? "0" + Math.min(Number(minutes), 60)
            : Math.min(Number(minutes), 60)}{" "}
          : {Math.min(Number(seconds), 60) < 10 ? "0" + seconds : seconds}
        </h2>
      </div>
      <Buttons
        start={start}
        reset={reset}
        pause={pause}
        continueB={continueB}
        startDisable={inputDisable}
        pauseDisable={pauseDisable}
        continueDisable={continueDisable}
      />
    </div>
  );
};

export default TimerView;
