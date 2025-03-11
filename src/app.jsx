import { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Category } from "./components/Category"
import { Services } from "./components/Services"
import { Banner } from "./components/Banner"
import { Products } from "./components/Products"
import { Blogs } from "./components/Blogs"
import { Partners } from "./components/Partners"
import { Footer } from "./components/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

const banner1 = {
  image: "controlx.png",
  title: "Controle Xbox",
  subtitle:
    "Aproveite a Black Friday para elevar sua gameplay a outro nível com descontos imperdíveis! Não perca essa chance de jogar com mais precisão e conforto. ",
  bgColor: "#2DCC6F",
}

const banner2 = {
  image: "controls.png",
  title: "Controle PlayStation",
  subtitle:
    "Aproveite a Black Friday para garantir o controle que vai transformar sua experiência de jogo. Não perca essa oferta épica",
  bgColor: "#1376f4",
}

const App = () => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offser: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <div
      className={`duration-200 overflow-hidden
      ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <Category />
      <Services />
      <Banner data={banner1} />
      <Products />
      <Banner data={banner2} />
      <Blogs theme={theme} />
      <Partners theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

export { App }
