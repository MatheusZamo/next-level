import { Button } from "./Button"

const Category = () => {
  return (
    <div className="py-8">
      <div className="p-[1rem] smp-[3rem]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8"
        >
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#1376f4]
          to-[#1376f4]/90 text-white rounded-3xl relative h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Console</p>
                <p className="text-2xl font-semibold mb-[2px]">Sony</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-40 mb-2"
                >
                  Playstation 4
                </p>
                <Button
                  bgColor={"bg-white"}
                  textColor={"text-[#1376f4]"}
                  text={"Detalhes do Produto"}
                />
              </div>
            </div>
            <img
              src="gaming.png"
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2
              -right-0"
            />
          </div>
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#2DCC6F]/90
          to-[#2DCC6F]/90 text-white rounded-3xl relative h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Console</p>
                <p className="text-2xl font-semibold mb-[2px]">Microsoft</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-40 mb-2"
                >
                  Xbox Series S
                </p>
                <Button
                  bgColor={"bg-white"}
                  textColor={"text-[#2DCC6F]"}
                  text={"Detalhes do Produto"}
                />
              </div>
            </div>
            <img
              src="seriess.png"
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2
              -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Category }
