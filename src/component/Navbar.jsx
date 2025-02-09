import { useState } from "react";
import logo from "../assets/Image/logo.png";

const Navbar = () => {
 const [isOpen, setIsopen] = useState(false)
  return (
    <>
      <div className=" flex items-center justify-between container relative z-10 py-4 px-6 md:px-20  h-[10%] gap-8">
        <div>
          <a href="#">
            <img className="h-[75px] mt-[-10px] w-[120px] " src={logo}></img>
          </a>
        </div>
        <div className="hidden md:block">
          <ul className="flex item-center justify-center space-x-2 lg:space-x-6">
            <li>
              <a
                className="text-md text-white font-semibold font-serif hover:text-gray-400 transition-all duration-500 "
                href="#Home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-md text-white font-semibold font-serif hover:text-gray-400 transition-all duration-500 "
                href="#About"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-md text-white font-semibold font-serif hover:text-gray-400 transition-all duration-500 "
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-md text-white font-semibold font-serif hover:text-gray-400 transition-all duration-500 "
                href="#Testimonials"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="hidden md:block bg-white px-4 py-2 rounded-full cursor-pointer w-[100px]">
            Sing Up
          </button>
        </div>
        <div onClick={() => setIsopen(!isOpen)} className="md:hidden absolute top-5 right-8 z-30 bg-gray-400 px-2 py-1 rounded-md transition-all duration-500">
          
          <div
            className={`w-[32px] h-[4px] bg-white my-[5px] rounded-sm transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div
            className={`w-[32px] h-[4px] bg-white my-[5px] rounded-sm transition-all ${isOpen ? "opacity-0 my-0" : ""}`}
          ></div>
          <div
            className={`w-[32px] h-[4px] bg-white my-[5px] rounded-sm transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </div>
      </div>
      {/* Mobille Menu  */}
      <div className={`md:hidden absolute top-0    bg-white h-screen w-[60%] sm:[40%] transition-all duration-500 ${isOpen ? "block" : "hidden"}`}>
        <ul className="text-center mt-15">
          <li className="my-2">
            <a
              className="text-md text-gray-600 font-semibold font-serif hover:text-gray-400 transition-all duration-500  text-xl "
              href="#Home"
            >
              Home
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-md text-gray-600 font-semibold font-serif hover:text-gray-400 transition-all duration-500  text-xl "
              href="#About"
            >
              About
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-md text-gray-600 font-semibold font-serif hover:text-gray-400 transition-all duration-500  text-xl "
              href="#Projects"
            >
              Projects
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-md text-gray-600 font-semibold font-serif hover:text-gray-400 transition-all duration-500  text-xl "
              href="#Testimonials"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
