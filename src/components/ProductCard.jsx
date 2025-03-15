import { Button } from "./Button"

const products = [
  {
    id: 1,
    img: "forza.jpeg",
    title: "Forza Horizon 5 Edição Padrão",
    price: "249,00",
    discountedPrice: "199,00",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "reddead.jpeg",
    title: "Red Dead Redemption 2: Edição Definitiva",
    price: "299,00",
    discountedPrice: "259,00",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "witcher.jpeg",
    title: "The Witcher 3: Wild Hunt",
    price: "209,00",
    discountedPrice: "169,00",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "gta.jpeg",
    title: "Grand Theft Auto V: Edição Premium",
    price: "279,00",
    discountedPrice: "149,00",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "fifa.jpeg",
    title: "EA SPORTS FC 25 Edição Standard",
    price: "349,00",
    discountedPrice: "105,00",
    aosDelay: "800",
  },
  {
    id: 6,
    img: "hogwarts.jpeg",
    title: "Hogwarts Legacy: Edição Digital Deluxe",
    price: "369,00",
    discountedPrice: "299,00",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: "mortal.jpeg",
    title: "Mortal Kombat™ 1: Koleção Reina o Kaos",
    price: "239,00",
    discountedPrice: "119,00",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: "cyber.jpeg",
    title: "Cyberpunk 2077: Ultimate Edition",
    price: "329,00",
    discountedPrice: "289,00",
    aosDelay: "1400",
  },
]

const ProductCard = () => {
  return (
    <div className="mb-10">
      <ul
        className="grid grid-cols-1 place-items-center
            sm:grid-cols-2 md:grid-cols-4 gap-5"
      >
        {products.map((product) => (
          <li
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group pt-5"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt=""
                className="object-cover rounded-md h-[250px]"
              />
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 
              -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm
              justify-center items-center duration-200"
              >
                <Button
                  text={"Comprar"}
                  bgColor={"bg-[#f42c37]"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold w-[180px]">{product.title}</h2>
              <div className="flex">
                <p className="line-through text-gray-500">R${product.price}</p>
                <p className="pl-3">R${product.discountedPrice}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ProductCard }
