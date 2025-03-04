import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Category } from "./components/Category"
import { Category2 } from "./components/Category2"

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Category />
      <Category2 />
    </>
  )
}

export { App }
