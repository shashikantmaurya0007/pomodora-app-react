import "./App.css";
import { LandingPage } from "./pages/pageIndex";
import styles from "./styles/Header.module.css";
import { useTheme } from "./state/stateIndex";
import {
  IndividualTodoPromo,
  Header,
  WrongRedirection,
} from "./components/componentIndex";
import { Routes, Route } from "react-router-dom";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" && styles.dark} ${styles.app}`}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/todo/:id" element={<IndividualTodoPromo />} />
        <Route path="*" element={<WrongRedirection />} />
      </Routes>
    </div>
  );
}

export default App;
