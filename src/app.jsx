import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
    </>
  )
}

export { App }
