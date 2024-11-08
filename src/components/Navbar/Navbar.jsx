import { MenuLinks } from "./MenuLinks";
import { DropDownLinks } from "./DropDownLinks";

import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase "
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropDownLinks.map((data, index) => (
                        <li key={data.id}>
                          <a
                            href={data.link}
                            className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold "
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right */}

          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block ">
              <input type="text" placeholder="Search" className="search" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order  */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 text-white bg-red-500 text-xs absolute top-0 right-0 rounded-full flex justify-center items-center">
                4
              </div>
            </button>

            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
