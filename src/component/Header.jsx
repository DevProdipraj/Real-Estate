import Navbar from "./Navbar";
import headerBgImage from "../assets/Image/header_img.png";

const Header = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-center h-screen w-full "
        style={{ backgroundImage: `url(${headerBgImage})` }}
      >
        <Navbar />
        <div className="container flex flex-col items-center justify-center  h-[90%]">
          <h1 className="text-white text-5xl sm:text-6xl md:text-[82px] font-semibold mt-28 text-center">
            Explore homes that <br/> fit your dreams
          </h1>
          <div className="Flex items-center justify-center space-x-6 mt-16">
            <button className="border border-white px-8 py-3 rounded text-white cursor-pointer hover:bg-gray-500 transition-colors duration-500 ease-in-out">
              Projects
            </button>
            <button className="bg-blue-500 px-8 py-3 rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
