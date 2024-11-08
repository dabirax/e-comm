import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase"
            >
              Eshop
            </a>
            <p className="text-gray-600 dark:text-white lg:pr-24 pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              necessitatibus dolorem debitis!
            </p>
            <p className="text-gray-500 mt-4">
              Made with the help of the Coding Journey
            </p>
            <a
              href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
              target="blank"
              className="inline-block bg-primary/90 text-white/70  py-2 px-4  mt-4 text-sm rounded-full hover:scale-105"
            >
              Visit Their Youtube Channel
            </a>
          </div>

          {/* Footer Links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <div className=" hover:px-4 hover:scale-105">
                      <a
                        href={data.link}
                        className="text-gray-600  dark:text-gray-400
                         duration-300 hover:text-black hover:dark:text-white"
                      >
                        {data.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Col Links  */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <div className=" hover:px-4 hover:scale-105">
                      <a
                        href={data.link}
                        className="text-gray-600  dark:text-gray-400
                         duration-300 hover:text-black hover:dark:text-white"
                      >
                        {data.title}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address  */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>

              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Akure, Ondo State, Nigeria</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p className="italic">+234 906 860 3740</p>
                </div>

                {/* Social Links  */}
                <div className="flex items-center gap-3 mt-6 ">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
