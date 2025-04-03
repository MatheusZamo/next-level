import Slider from "react-slick"
import { Button } from "./Button"
import { useContext } from "react"
import { ThemeContext } from "../context/theme"

const HeroData = [
  {
    id: 1,
    img: "seriesx.png",
    subtitle: "Console",
    title: "Microsoft",
    title2: "Series X",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: 3,
    img: "nintendo.png",
    subtitle: "Console",
    title: "Nintendo",
    title2: "Switch",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    id: 2,
    img: "play5.png",
    subtitle: "Console",
    title: "Sony",
    title2: "Play 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
]

const Hero = () => {
  const { theme } = useContext(ThemeContext)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  }

  return (
    <div className="p-[1rem] smp-[3rem]">
      <div
        className={`overflow-hidden rounded-3xl min-h-[550px]
      sm:min-h-[450px] bg-gradient-to-r 
       ${
         theme === "dark"
           ? "from-gray-900 to-gray-800 text-white"
           : "from-gray-300/80 to-gray-100"
       } `}
      >
        <Slider {...settings} className="p-[1rem] smp-[3rem] sm:pd-0">
          {HeroData.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
                <div
                  className="flex flex-col justify-center
                gap-4 sm:pl-3 pt-12 sm:pt-0 text-center
                sm:text-left order-2 sm:order-1 relative z-10"
                >
                  <p
                    data-aos="zoom"
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="text-2xl sm:text-6xl
                  lg:text-2xl font-bold"
                  >
                    {data.subtitle}
                  </p>
                  <h2
                    data-aos="zoom"
                    data-aos-duration="700"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl
                  lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h2>
                  <h1
                    className={`text-5xl uppercase 
                  sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold
                  ${theme === "dark" ? "text-white/5" : "text-white"}`}
                  >
                    {data.title2}
                  </h1>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Button
                      bgColor={"bg-[#f42c37]"}
                      textColor={"text-white"}
                      text={"Detalhes do Produto"}
                    />
                  </div>
                </div>
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px]
                        sm:scale-105 sm:w-[450px] sm:h-[450px] lg:scale-110 object-contain
                        mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
                        relative z-40"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export { Hero }
