import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer.jsx";
import Popup from "./components/Popup/Popup.jsx";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
    console.log(orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Category />
        <Category2 />
        <Services />
        <Banner />
        <Products />
        <Banner2 />
        <Blogs />
        <Partners />
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </>
  );
}

export default App;
