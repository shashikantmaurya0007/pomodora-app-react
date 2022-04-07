import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme, useTodo } from "../state/stateIndex";
import { TodoTimer, BreakTimer } from "./componentIndex";
import todoboxstyles from "../styles/ToDoListTable.module.css";
import todoPromoStyles from "../styles/IndividualTodoPromo.module.css";
import styles from "../styles/DisplayTodos.module.css";
const IndividualTodoPromo = () => {
  const { id } = useParams();
  const { todoState } = useTodo();
  const { theme } = useTheme();
  const [time, setTime] = useState(new Date());
  const [restartTime, setRestartTime] = useState(1000);
  const [userEnteredTime, setUserEnteredTime] = useState(0);
  const [timerDisplay, setTimerDisplay] = useState("00:00:00");
  const [showTodoTimer, setShowTodoTimer] = useState(true);
  const [breakoutTime, setBreakoutTime] = useState(new Date());
  const [todoToBeDisplayed, setTodoToBeDisplayed] = useState(null);

  useEffect(() => {
    (async () => {
      const individualTodo = await todoState?.find((ele) => ele.id === id);
      setTodoToBeDisplayed(individualTodo);
      setUserEnteredTime(individualTodo?.timeDuration);
      time.setSeconds(
        time.getSeconds() + Number(individualTodo?.timeDuration) * 60
      );

      setTime(time);
      setRestartTime(individualTodo?.timeDuration * 60);
    })();
  }, [todoState]);

  return (
    <div>
      <div className={todoPromoStyles.timer_details}>
        {showTodoTimer && (
          <TodoTimer
            expiryTimestamp={time}
            restartTime={restartTime}
            setTimerDisplay={setTimerDisplay}
            timerDisplay={timerDisplay}
            userEnteredTime={userEnteredTime}
            setShowTodoTimer={setShowTodoTimer}
          />
        )}

        {!showTodoTimer && <BreakTimer />}

        <div>
          <div
            className={`${todoboxstyles.todolist_box} ${
              theme === "dark" && todoboxstyles.todo_container_dark_theme
            } ${todoPromoStyles.box}`}
          >
            <div
              className={`${styles.individual_todo} ${
                theme === "dark" ? styles.dark : styles.light
              }`}
            >
              {todoToBeDisplayed?.title}
            </div>
            <div
              className={`${styles.individual_todo} ${
                theme === "dark" ? styles.dark : styles.light
              }`}
            >
              {todoToBeDisplayed?.description}
            </div>
            <div
              className={`${styles.individual_todo} ${
                theme === "dark" ? styles.dark : styles.light
              }`}
            >
              {todoToBeDisplayed?.timeDuration}min
            </div>

            <p>
              Created on⏰
              {new Date(todoToBeDisplayed?.addedData).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { IndividualTodoPromo };
