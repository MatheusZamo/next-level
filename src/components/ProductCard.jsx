import { Button } from "./Button"

const products = [
  {
    id: 1,
    img: "p-1.jpg",
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: "p-2.jpg",
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: "p-3.jpg",
    title: "Goggles",
    price: "320",
    aosDelay: "400",
  },
  {
    id: 4,
    img: "p-4.jpg",
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
  {
    id: 5,
    img: "p-5.jpg",
    title: "Boat Headphone",
    price: "120",
    aosDelay: "800",
  },
  {
    id: 6,
    img: "p-9.jpg",
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: "p-7.jpg",
    title: "Goggles",
    price: "320",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: "p-5.jpg",
    title: "Printed",
    price: "220",
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
            className="group"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt=""
                className="object-cover rounded-md h-[180px] w-[260px]"
              />
              <div
                className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 
              -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm
              justify-center items-center duration-200"
              >
                <Button
                  text={"Add to cart"}
                  bgColor={"bg-[#f42c37]"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{product.title}</h2>
              <h2 className="font-bold">${product.price}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export { ProductCard }
