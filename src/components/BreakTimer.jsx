import React from "react";
import { useTimer } from "react-timer-hook";
import { useNavigate } from "react-router-dom";
import timeerStyles from "../styles/Timer.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function BreakTimer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  const navigate = useNavigate();
  const expiryTimestamp = time;
  const { seconds, minutes } = useTimer({
    expiryTimestamp,
    onExpire: () => navigate("/"),
  });

  const percent = ((minutes * 60 + seconds) / (1 * 60)) * 100;
  console.log(percent);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Break Time </h1>
      <div className={timeerStyles.progressbar}>
        <CircularProgressbar value={percent} text={`${minutes}:${seconds}`} />
      </div>

      <p>Enjoy Your 10 min Break</p>
    </div>
  );
}

export { BreakTimer };
