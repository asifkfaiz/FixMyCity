import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // optional icon package

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      // style={{
      //   background: "none",
      //   border: "none",
      //   cursor: "pointer",
      //   fontSize: "1.2rem",
      //   color: "var(--text)",
      //   transition: "transform 0.2s ease",
      // }}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
