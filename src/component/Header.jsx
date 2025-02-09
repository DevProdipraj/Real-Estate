import Navbar from "./Navbar";
import headerBgImage from "../assets/Image/header_img.png";

const Header = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center h-fit pb-10 md:0 md:h-dvh w-full "
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <Navbar />
        <div className="container flex flex-col items-center justify-center  h-[90%]">
          <h1 className="text-white text-4xl sm:text-6xl md:text-[82px] font-semibold mt-28 text-center">
            Explore homes that  fit your dreams
          </h1>
          <div className="flex items-center justify-between space-x-1 mt-6 md:mt-16">
            <button className="border border-white px-8 py-3 rounded text-white cursor-pointer hover:bg-gray-500 transition-colors duration-500 ease-in-out">
              Projects
            </button>
            <button className="bg-blue-500 px-4 py-3.5 text-white sm:px-8 sm:py-4  rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
