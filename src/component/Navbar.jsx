import logo from "../assets/Image/logo.png";

const Navbar = () => {
  return (
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
      {/* Mobille Menu  */}
      <div className="md:hidden">
        <ul className=" text-center hidden pt-[10%] space-y-2 bg-gray-400 w-[70%] absolute  left-0 top-0 bottom-0 h-screen ">
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
    </div>
  );
};

export default Navbar;
