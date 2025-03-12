import { Heading } from "./Heading"

const blogData = [
  {
    title: "PS5 Pro terá grande evolução do PSSR em 2026 graças a AMD",
    subtitle:
      "Num mercado cada vez mais “fértil” para tecnologias de inteligência artificial que consigam melhorar drasticamente a qualidade dos jogos, a Sony está fazendo uma aposta com o PS5 Pro e o seu PSSR,.",
    published: "Jan 20, 2025 Por Rafael",
    image: "news1.jpg",
    aosDelay: "0",
  },
  {
    title: "Portátil do Xbox chega no fim do ano e nova geração em 2027",
    subtitle:
      "Parece que o Xbox anda em alta com rumores e notícias quentes. Após muitos boatos circularem sobre o próximo console da marca",
    published: "Fev 02, 2025 Por Sara",
    image: "news2.jpg",
    aosDelay: "200",
  },
  {
    title: "Switch 2 ganha informações inéditas e oficiais do hardware",
    subtitle:
      "Sem dúvidas, uma das grandes expectativas de 2025 é a chegada do Switch 2 que, apesar de ainda estar sem data e muitos detalhes oficiais divulgados",
    published: "Mar 06, 2025 Por Fernando",
    image: "news3.jpg",
    aosDelay: "400",
  },
]

const Blogs = ({ theme }) => {
  return (
    <div className="my-12">
      <div className="p-[1rem] smp-[3rem]">
        <Heading title="Blog" subtitle="Explore Nosso Blog" />
        <ul
          className="grid grid-cols-1 gap-6 gap-y-8
        sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-7"
        >
          {blogData.map((news) => (
            <li
              data-aos="fade-up"
              data-aos-delay={news.aosDelay}
              className={theme === "dark" ? "bg-gray-900" : "bg-white"}
              key={news.title}
            >
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={news.image}
                  alt=""
                  className="w-full object-cover rounded-2xl duration-500
                        h-[220px] hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{news.published}</p>
                <p className="font-bold line-clamp-1">{news.title}</p>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                    line-clamp-2 text-sm `}
                >
                  {news.subtitle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Blogs }
