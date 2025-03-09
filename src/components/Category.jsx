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
            className="py-10 pl-5 bg-gradient-to-br from-black/90
          to-black/70 text-white rounded-3xl relative h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-20 mb-2"
                >
                  Earphone
                </p>
                <Button
                  bgColor={"bg-[#f42c37]"}
                  textColor={"text-white"}
                  text={"Browse"}
                />
              </div>
            </div>
            <img
              src="earphone.png"
              alt=""
              className="w-[320px] absolute bottom-0"
            />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-[#fdc62e]
          to-[#fdc62e]/90 text-white rounded-3xl relative h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-40 mb-2"
                >
                  Gadget
                </p>
                <Button
                  bgColor={"bg-white"}
                  textColor={"text-[#fdc62e]"}
                  text={"Browse"}
                />
              </div>
            </div>
            <img
              src="watch.png"
              alt=""
              className="w-[320px] absolute -right-4 lg:top-[40px]"
            />
          </div>
          <div
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-[#f42c37]
          to-[#f42c37]/90 text-white rounded-3xl relative h-[320px]
          flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-40 mb-2"
                >
                  Laptop
                </p>
                <Button
                  bgColor={"bg-white"}
                  textColor={"text-[#f42c37]"}
                  text={"Browse"}
                />
              </div>
            </div>
            <img
              src="macbook.png"
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
