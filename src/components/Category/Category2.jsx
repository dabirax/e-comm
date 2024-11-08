import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Button from "../Shared/Button";

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Col */}
          <div className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[200px] absolute top-1/2 -translate-y-1/2 -right-0 p-3 object-cover"
            />
          </div>
          {/* Second Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-4">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[170px] absolute bottom-0 right-0 p-3 object-cover"
            />
          </div>
          {/* Third Col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4 relative z-10">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-4">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[170px] absolute -right-1 lg:top-[40px] p-3  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category2;
