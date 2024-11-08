import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

import img1 from "../../assets/001.png";
import img2 from "../../assets/002.png";
import img3 from "../../assets/003.png";
import img4 from "../../assets/004.png";

const ProductsData = [
  {
    id: 1,
    img: img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Googles",
    price: "120",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Printed",
    price: "220",
    aosDelay: "600",
  },
];

const ProductsData2 = [
  {
    id: 1,
    img: img3,
    title: "Googles",
    price: "120",
    aosDelay: "800",
  },
  {
    id: 2,
    img: img4,
    title: "Printed",
    price: "220",
    aosDelay: "1000",
  },
  {
    id: 3,
    img: img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "1200",
  },
  {
    id: 4,
    img: img1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "1400",
  },
];

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header  */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  );
};
export default Products;
