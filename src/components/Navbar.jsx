import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"

const menuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blogs" },
]

const Navbar = () => {
  return (
    <div className="bg-white duration-200 relative z-40">
      <div className="py-4">
        <div className="p-[1rem] smp-[3rem] flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className=" text-[var(--primary)] font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Logo
            </a>
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-400"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
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
                className="text xl text-gray-600 
              absolute top-1/2 -translate-y-1/2 right-3
              group-hover:text-[var(--primary)] 
              duration-200 cursor-pointer"
              />
            </div>
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 cursor-pointer" />
              <div
                className="w-4 h-4 bg-red-500 text-white
            rounded-full absolute top-0 right-0 flex
            items-center justify-center text-xs cursor-pointer"
              >
                {" "}
                4
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Navbar }
