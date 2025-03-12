import { Heading } from "./Heading"
import { ProductCard } from "./ProductCard"

const Products = () => {
  return (
    <div>
      <div className="p-[1rem] smp-[3rem]">
        <Heading title={"Jogos"} subtitle={"Explore Nossos Jogos"} />
        <ProductCard />
      </div>
    </div>
  )
}

export { Products }
