import {
  FaCarSide,
  FaCheckCircle,
  FaWallet,
  FaHeadphonesAlt,
} from "react-icons/fa";
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    desc: "Free Shipping on All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    desc: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    desc: "All Payments Secured",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support",
    desc: "Technical Support 24/7",
  },
];
export default ServiceData;
