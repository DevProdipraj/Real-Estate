import logo from "../assets/Image/logo.png";

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between container relative z-10 py-4 px-6 md:px-20  h-[10%]">
      <div>
        <a href="#">
          <img className="h-14 w-auto " src={logo}></img>
        </a>
      </div>
      <div>
        <ul className="flex item-center justify-center space-x-6">
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
      <div>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Sing Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
