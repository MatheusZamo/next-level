const DarkMode = ({ theme, setTheme }) => {
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
