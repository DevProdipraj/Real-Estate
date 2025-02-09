import houseImage from "../assets/Image/brand_img.png";

const About = () => {
  return (
    <div className="container py-10">
     <div className="p-4 sm:p-10 text-center ">
        <h2 className="text-2xl md:text-4xl font-bold">
          About
          <span className="underline underline-offset-4 decoration-1 font-light ms-1">
            Our Brand
          </span>
        </h2>
        <p className="max-w-80 mx-auto leading-normal text-gray-500 font-semibold mt-3">
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </div>
      <div className="flex items-center justify-center  gap-18">
        <div className=" hidden sm:block md w-1/2 md:flex justify-end">
          <img className="max-w-lg" src={houseImage} alt="House Image" />
        </div>
        <div className=" w-full sm:w-1/2 text-center ">
          <div className="grid grid-cols-2 gap-4 sm:gap-10">
          <div>
            <h2 className="text-4xl text-black font-bold">10+</h2>
            <h4 className="text-md text-gray-600 py-2">Years of Excellence</h4>
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold">12+</h2>
            <h4 className="text-md text-gray-600 py-2">Projects Completed</h4>
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold">20+</h2>
            <h4 className="text-md text-gray-600 py-2">Mn. Sq. Ft. Delivered</h4>
          </div>
          <div>
            <h2 className="text-4xl text-black font-bold">25+</h2>
            <h4 className="text-md text-gray-600 py-2">Ongoing Projects</h4>
          </div>
           
          </div>
          <p className="py-2 sm:py-6 w-full sm:max-w-lg text-gray-500 text-sm ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
             Learn More
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;  
