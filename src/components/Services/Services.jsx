import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";
import ServiceData from "./ServiceData";

const Services = () => {
  return (
    <div>
      <div className="container mt-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ServiceData.map((data, index) => (
            <div
              key={data.index}
              className="flex  items-center sm:flex-row gap-4"
            >
              {data.icon}

              <div>
                <h1 className="lg:text-xl font-semibold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm\">{data.desc}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
