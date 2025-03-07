const brands = ["br-1.png", "br-2.png", "br-3.png", "br-4.png", "br-5.png"]

const Partners = ({ theme }) => {
  return (
    <div
      className={`py-8 mt-24 hidden md:block
    ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}`}
    >
      <div className="p-[1rem] smp-[3rem]">
        <ul
          className="grid grid-cols-5 gap-3 place-items-center 
        opacity-50"
        >
          {brands.map((brand) => (
            <li key={brand}>
              <img src={brand} alt="brand" className="w-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Partners }
