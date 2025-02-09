import logo from "../assets/Image/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#111827] pt-10 pb-5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-top justify-between">
          <div className="md:w-1/3">
            <a href="#">
              <img className="w-64" src={logo} alt="Brand Icon" />
            </a>
            <p className="text-gray-400 mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text.
            </p>
          </div>
          <div className="md:w-1/5">
            <h2 className="text-white text-lg font-bold mb-4">Company</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
              <li>
                <a className="hover:text-white text-md font-semibold" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-white  text-md font-semibold" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:text-white text-md font-semibold" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:text-white text-md font-semibold" href="#">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-white text-lg font-bold mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-gray-400 mb-4 max-w-80">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex flex-col lg:flex-row  items-start  gap-2 w-full">
              <input
                className="w-full p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none md:w-auto"
                type="email"
                name="UserEmail"
                id=""
                placeholder="Your Email"
              />
              <input
                className="py-2 px-4 rounded bg-blue-500 text-white"
                type="button"
                value="Subcribe"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 mt-10  text-center text-gray-500">
          <p>Copyright 2024 © Prodip Rajbongshi. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
