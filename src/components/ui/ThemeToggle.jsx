import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggle = ({ theme, onToggle }) => (
  <button type="button" className="theme-toggle" onClick={onToggle}
    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
    {theme === "light" ? <LuMoon aria-hidden="true" /> : <LuSun aria-hidden="true" />}
  </button>
);

export default ThemeToggle;
