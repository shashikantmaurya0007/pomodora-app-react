import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "../styles/Model.module.css";
import timeerStyles from "../styles/Timer.module.css";
import "react-circular-progressbar/dist/styles.css";
const TodoTimer = ({
  expiryTimestamp,
  restartTime,
  setTimerDisplay,
  timerDisplay,
  userEnteredTime,
  setShowTodoTimer,
}) => {
  const {
    seconds,
    minutes,
    hours,

    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => setShowTodoTimer((prev) => false),
  });
  useEffect(() => {
    setTimerDisplay((prev) => `${hours}:${minutes}:${seconds}`);
  }, [hours, minutes, seconds]);

  const percent =
    ((hours * 60 * 60 + minutes * 60 + seconds) /
      (Number(userEnteredTime) * 60)) *
    100;

  return (
    <div className={timeerStyles.progressbar_container}>
      <div className={timeerStyles.progressbar}>
        <CircularProgressbar value={percent} text={`${timerDisplay}`} />
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <div className={styles.btn_container}>
        <button
          className={`${styles.btn} ${styles.secondary_btn}`}
          onClick={start}
        >
          Start
        </button>
        <button
          className={`${styles.btn} ${styles.secondary_btn}`}
          onClick={pause}
        >
          Pause
        </button>
        <button
          className={`${styles.btn} ${styles.secondary_btn}`}
          onClick={resume}
        >
          Resume
        </button>
        <button
          className={`${styles.btn} ${styles.secondary_btn}`}
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + restartTime);
            restart(time);
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export { TodoTimer };
