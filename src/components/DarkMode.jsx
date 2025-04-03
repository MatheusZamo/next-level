import { useContext } from "react"
import { ThemeContext } from "../context/theme"

const DarkMode = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className="relative">
      <img
        src={
          theme === "light" ? "light-mode-button.png" : "dark-mode-button.png"
        }
        className="w-12 cursor-pointer transition-all duration-300"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  )
}

export { DarkMode }
