import Image2 from "../../assets/image2.jpg";

const BannerData = {
  discount: "30%  OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: Image2,
  title2: " Smart Solo",
  title3: " Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dignissimos quidem alias.",
  bgColor: "#2dcc6f",
};

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: BannerData.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* First Col */}
          <div className="p-6 sm:p-8 ">
            <p data-aos="slide-left" className="text-sm">
              {BannerData.discount}
            </p>
            <h1
              data-aos="zoom-in"
              className="uppercase text-4xl lg:text-7xl font-bold"
            >
              {BannerData.title}
            </h1>
            <p data-aos="fade-down" className="text-sm">
              {BannerData.date}
            </p>
          </div>
          {/* Second Col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={BannerData.image}
              alt=""
              className="scale-110 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"
            />
          </div>
          {/* Third Col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="fade-down" className="font-bold text-xl">
              {BannerData.title2}
            </p>
            <p data-aos="fade-down" className="text-3xl sm:text-5xl font-bold">
              {BannerData.title3}
            </p>
            <p data-aos="fade-down" className="text-sm tracking-wide leading-5">
              {BannerData.title4}
            </p>
            <div data-aos="fade-down" data-aos-offset="0" className="ml-auto">
              <button
                style={{ color: BannerData.bgColor }}
                className=" bg-white py-2 px-4 rounded-full hover:scale-110"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
