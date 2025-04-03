import { useContext } from "react"
import { ThemeContext } from "../context/theme"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa"

const footerLinks = [
  {
    title: "Inicio",
    link: "/#",
  },
  {
    title: "Sobre",
    link: "/#about",
  },
  {
    title: "Contato",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "#/blog",
  },
]

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === "dark" ? "bg-gray-950" : "bg-gray-200"}>
      <div className="p-[1rem] smp-[3rem]">
        <div className="grid md:grid-cols-3 pb-5 pt-5 ">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-[#f42c37] font-semibold tracking-widest 
              text-2xl uppercase sm:text-3xl"
            >
              Next Level
            </a>
            <p
              className={` lg:pr-25 pt-3
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Manutenção, venda e troca de videogames, jogos e acessórios, novos
              e usados, com opções modernas e retrô para os apaixonados por
              games. ❤️
            </p>
          </div>
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10"
          >
            <div className="py-8 px4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Links Importantes
              </h1>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.link}
                      className={`duration-300
                        ${
                          theme === "dark"
                            ? "hover:text-white text-gray-400"
                            : "hover:text-black text-gray-600"
                        }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Redes Socias
              </h1>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram
                    className="text-3xl
                  hover:text-[#f42c37] duration-300"
                  />
                </a>
                <a href="#">
                  <FaFacebook
                    className="text-3xl
                  hover:text-[#f42c37] duration-300"
                  />
                </a>
                <a href="#">
                  <FaLinkedin
                    className="text-3xl
                  hover:text-[#f42c37] duration-300"
                  />
                </a>
              </div>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Endereço e Contato
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Belo Horizonte - MG</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>31 991829182</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
