import { Heading } from "./Heading"

const blogData = [
  {
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    published: "Jan 20, 2024 by Dilshad",
    image: "blog-1.jpg",
  },
  {
    title: "How to choose perfect gadget",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    published: "Jan 20, 2024 by Satya",
    image: "blog-2.jpg",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    published: "Jan 20, 2024 by Sabir",
    image: "blog-3.jpg",
  },
]

const Blogs = ({ theme }) => {
  return (
    <div className="my-12">
      <div className="p-[1rem] smp-[3rem]">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        <ul
          className="grid grid-cols-1 gap-6 gap-y-8
        sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-7"
        >
          {blogData.map((news) => (
            <li
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
