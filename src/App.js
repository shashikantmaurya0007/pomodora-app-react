import "./App.css";
import { LandingPage } from "./pages/pageIndex";
import styles from "./styles/Header.module.css";
import { useTheme } from "./state/stateIndex";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" && styles.dark} ${styles.app}`}>
      <LandingPage />
    </div>
  );
}

export default App;
