import { useAuthContext } from "../hooks/useAuthContext";
import darkmode from "../assets/darkmode.svg";

export const ThemeMode = () => {
  const { changeMode, mode } = useAuthContext();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);

  return (
    <div>
      <img
        onClick={toggleMode}
        src={darkmode}
        alt="dark/light toggle icon"
        style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
      />
    </div>
  );
};
