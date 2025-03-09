import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa"

const footerLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "#/blog",
  },
]

const Footer = ({ theme }) => {
  return (
    <div className={theme === "dark" ? "bg-gray-950" : ""}>
      <div className="p-[1rem] smp-[3rem]">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-[#f42c37] font-semibold tracking-widest 
              text-2xl uppercase sm:text-3xl"
            >
              Logo
            </a>
            <p
              className={` lg:pr-25 pt-3
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <p className="text-gray-500 mt-4">
              Lorem Ipsum is simply dummy text
            </p>
            <a
              href=""
              className="bg-[#f42c37] inline-block text-white py-2 px-4 
            mt-4 text-sm rounded-full"
            >
              Link important
            </a>
          </div>
          <div
            className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10"
          >
            <div className="py-8 px4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
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
                Quick Links
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
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Belo Horizonte - MG</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>31 991829182</p>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer }
