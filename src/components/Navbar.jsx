import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import { FaCaretDown } from "react-icons/fa"
import { DarkMode } from "./DarkMode"

const menuLinks = [
  { id: 1, name: "Inicio", link: "/#" },
  { id: 2, name: "Categorias", link: "/#shop" },
  { id: 3, name: "Sobre", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blogs" },
]

const dropdownLinks = [
  {
    id: 1,
    name: "Produtos em Alta",
    link: "/#",
  },
  {
    id: 2,
    name: "Mais Vendidos",
    link: "/#",
  },
  {
    id: 3,
    name: "Melhores Avaliados",
    link: "/#",
  },
]

const Navbar = ({ theme, setTheme }) => {
  return (
    <div
      className={`duration-500 relative z-40 ${
        theme === "dark" ? "bg-gray-900 dark:text-white" : "bg-white"
      }`}
    >
      <div className="py-4">
        <div className="p-[1rem] smp-[3rem] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className=" text-[#f42c37] font-semibold tracking-widest text-2xl sm:text-3xl"
            >
              Next Level
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className={`inline-block px-4 font-semibold text-gray-500 duration-400 ${
                        theme === "dark"
                          ? "hover:text-white"
                          : "hover:text-black"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className={`flex items-center gap-[2px]
                  font-semibold text-gray-500 py-2 ${
                    theme === "dark" ? "hover:text-white" : "hover:text-black"
                  }`}
                  >
                    Links Rapidos
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div
                    className={`absolute z-[9999] hidden 
                  group-hover:block w-[200px] rounded-md shadow-md
                  p-2 ${
                    theme === "dark" ? "bg-gray-900 text-white" : "bg-white"
                  }`}
                  >
                    <ul className="space-y-2">
                      {dropdownLinks.map((link) => (
                        <li key={link.id}>
                          <a
                            href={link.link}
                            className={`text-gray-500
                          duration-200 inline-block w-full p-2
                          hover:bg-[#f42c37]/20 rounded-md font-semibold ${
                            theme === "dark" ? "hover:text-white" : ""
                          }`}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Pesquisar"
                className="search-bar cursor-pointer"
              />
              <IoMdSearch
                className={`text xl absolute top-1/2 -translate-y-1/2 right-3
              group-hover:text-[#f42c37] 
              duration-200 cursor-pointer ${
                theme === "dark" ? "text-gray-400" : "text-gray-600 "
              }`}
              />
            </div>
            <button className="relative p-3">
              <FaCartShopping
                className={`text-xl cursor-pointer ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              />
              <div
                className="w-4 h-4 bg-red-500 text-white
            rounded-full absolute top-0 right-0 flex
            items-center justify-center text-xs cursor-pointer"
              >
                {" "}
                4
              </div>
            </button>
            <div>
              <DarkMode theme={theme} setTheme={setTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar }
