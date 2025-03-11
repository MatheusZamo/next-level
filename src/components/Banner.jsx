const Banner = ({ data }) => {
  return (
    <div
      className="min-h-[550px] flex justify-center 
    items-center py-12"
    >
      <div className="p-[1rem] smp-[3rem]">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6
        items-center text-white rounded-3xl"
        >
          <div className="p-6 sm:p-8">
            <p data-aos="zoom-out" className="text-sm">
              60% De Desconto
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-7xl
                font-bold"
            >
              BLACK FRIDAY
            </h1>
            <p data-aos="fade-up" className="text-sm">
              28 Nov a 01 Dez
            </p>
          </div>
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] mx-auto
            drop-shadow-2xl object-cover"
            />
          </div>
          <div
            className="flex flex-col justify-center gap-4 
          p-6 sm:p-8"
          >
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data.title}
            </p>
            <p data-aos="fade-up" className="text-3xl font-bold sm:text-5xl">
              Domine o Jogo
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {data.subtitle}
            </p>
            <div>
              <button
                data-aos="fade-up"
                data-aos-offset="0"
                className="bg-white py-2 px-4 rounded-full cursor-pointer"
                style={{ color: data.bgColor }}
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Banner }
