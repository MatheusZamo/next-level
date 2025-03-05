import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Category } from "./components/Category"
import { Category2 } from "./components/Category2"
import { Services } from "./components/Services"
import { Banner } from "./components/Banner"

const BannerData = {
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
      <Banner data={BannerData} />
    </div>
  )
}

export { App }
