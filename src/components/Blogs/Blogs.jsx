import Heading from "../Shared/Heading";

import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";

const BlogData = [
  {
    id: 1,
    title: "How to choose perfect smartwatch",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, in laboriosam! Animi sed ipsum ex, et accusantium numquam beatae expedita.",
    published: "Jan 20, 2024 by Dilshad ",
    image: Blog1,
    aosDelay: "0",
  },
  {
    id: 2,
    title: "How to choose perfect gadget",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, in laboriosam! Animi sed ipsum ex, et accusantium numquam beatae expedita.",
    published: "Jan 20, 2024 by Dilshad ",
    image: Blog2,
    aosDelay: "200",
  },
  {
    id: 3,
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, in laboriosam! Animi sed ipsum ex, et accusantium numquam beatae expedita.",
    published: "Jan 20, 2024 by Dilshad ",
    image: Blog3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header */}
        <Heading title={"Recent News"} subtitle={"Explore Our Blogs "} />

        {/* Blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {/* BlogCard */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-down"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-white dark:bg-gray-900  "
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover hover:scale-105 duration-500"
                />
              </div>
              {/* Content */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blogs;
