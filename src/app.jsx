import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Category } from "./components/Category"
import { Category2 } from "./components/Category2"
import { Services } from "./components/Services"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <div
      className={`duration-200 overflow-hidden
      ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Category />
      <Category2 />
      <Services />
    </div>
  )
}

export { App }
