import "./App.css";
import { LandingPage } from "./pages/pageIndex";
import styles from "./styles/Header.module.css";
import { useTheme } from "./state/stateIndex";
import { Routes, Route } from "react-router-dom";
import { IndividualTodoPomodora } from "./components/componentIndex";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" && styles.dark} ${styles.app}`}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo/:id" element={<IndividualTodoPomodora />} />
      </Routes>
    </div>
  );
}

export default App;
