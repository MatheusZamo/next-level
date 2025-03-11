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
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: "headphone.png",
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  bgColor: "#f42c37",
}

const banner2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: "smartwatch.png",
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  bgColor: "#2DCC6F",
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
