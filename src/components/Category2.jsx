import { Button } from "./Button"

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="p-[1rem] smp-[3rem]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8"
        >
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
          to-gray-100 text-white rounded-3xl relative h-[320px]
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
                  bgColor={"bg-[#f42c37]"}
                  textColor={"text-white"}
                  text={"Browse"}
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
            className="py-10 pl-5 bg-gradient-to-br from-[#2DCC6F]/90
          to-[#2DCC6F]/90 text-white rounded-3xl relative h-[320px]
          flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p
                  className="text-4xl xl:text-5xl font-bold
                opacity-20 mb-2"
                >
                  Earphone
                </p>
                <Button
                  bgColor={"bg-white"}
                  textColor={"text-[#2DCC6F]"}
                  text={"Browse"}
                />
              </div>
            </div>
            <img src="vr.png" alt="" className="w-[280px] absolute bottom-0" />
          </div>
          <div
            className="py-10 pl-5 bg-gradient-to-br from-[#1376f4]
          to-[#1376f4]/90 text-white rounded-3xl relative h-[320px]
          flex items-start"
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
                  textColor={"text-[#1376f4]"}
                  text={"Browse"}
                />
              </div>
            </div>
            <img
              src="speaker.png"
              alt=""
              className="w-[200px] absolute bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Category2 }
