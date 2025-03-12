import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa"

const ServiceData = [
  {
    id: 1,
    icon: (
      <FaCarSide
        className="text-4xl md:text-5xl
        text-[#f42c37]"
      />
    ),
    title: "Frete grátis",
    description: "Frete grátis em todos os pedidos",
  },
  {
    id: 2,
    icon: (
      <FaCheckCircle
        className="text-4xl md:text-5xl
        text-[#f42c37]"
      />
    ),
    title: "Dinheiro Seguro",
    description: "30 Dias de Reembolso",
  },
  {
    id: 3,
    icon: (
      <FaWallet
        className="text-4xl md:text-5xl
        text-[#f42c37]"
      />
    ),
    title: "Pagamento Seguro",
    description: "Todos os Pagamentos Seguros",
  },
  {
    id: 4,
    icon: (
      <FaHeadphonesAlt
        className="text-4xl md:text-5xl
        text-[#f42c37]"
      />
    ),
    title: "Suporte on-line",
    description: "Suporte técnico 24hrs",
  },
]

const Services = () => {
  return (
    <div>
      <div className="p-[1rem] smp-[3rem] my-14 md:my-20 ml-7">
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-4
        gap-y-8"
        >
          {ServiceData.map((data) => (
            <li
              key={data.id}
              className="flex flex-col items-start sm:flex-row
            gap-4"
            >
              {data.icon}
              <div>
                <h2 className="lg:text-xl font-bold">{data.title}</h2>
                <h3 className="text-gray-400 text-sm">{data.description}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export { Services }
