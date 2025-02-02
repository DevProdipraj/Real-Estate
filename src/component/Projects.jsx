import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project1 from "../assets/Image/project_img_1.jpg";
import Project2 from "../assets/Image/project_img_2.jpg";
import Project3 from "../assets/Image/project_img_3.jpg";
import Project4 from "../assets/Image/project_img_4.jpg";
import Project5 from "../assets/Image/project_img_5.jpg";
import Project6 from "../assets/Image/project_img_6.jpg";




const Projects = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container py-10">
      <div className="p-10 text-center ">
        <h2 className="text-4xl font-bold ">
          Projects
          <span className="underline underline-offset-4 decoration-1 font-light ms-2">
            Completed
          </span>
        </h2>
        <p className="max-w-80 mx-auto text-gray-500 font-semibold mt-3">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </div>
      <div className="">
        <Slider {...settings}>
          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem] " src={Project1} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Sta Verde</h1>
                  <h3 className="text-md py-1">$50,000 | San Francisco</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem]" src={Project2} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Serenity Suites</h1>
                  <h3 className="text-md py-1">$2,50,000 | Chicago</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem]" src={Project3} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Central Square</h1>
                  <h3 className="text-md py-1">$2,50,000 | Los Angeles</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>



          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem]" src={Project4} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Vista Verde</h1>
                  <h3 className="text-md py-1">$2,50,000 | San Francisco</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem]" src={Project5} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Vista Verde</h1>
                  <h3 className="text-md py-1">$2,50,000 | San Francisco</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>


          <div className=" bg-gray-200 h-[40rem]">
            <div className="flex justify-evenly">
              <div className="w-1/2 ">
                <img className="w-full h-[40rem]" src={Project6} alt="Project Image" />
              </div>
              <div className="w-1/2 p-10">
                <div className=" ">
                  <h1 className="text-4xl font-bold">Serenity Suites</h1>
                  <h3 className="text-md py-1">$2,50,000 | Chicago</h3>
                  <p className="text-base py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    distinctio at odit ducimus, incidunt obcaecati illum labore?
                    Voluptatum, reprehenderit aliquid quibusdam mollitia animi
                    numquam odit, voluptates sed, aperiam rem corrupti?
                  </p>
                  <button className="bg-blue-500 px-8 py-1.5 text-white rounded cursor-pointer hover:bg-blue-700 transition-colors duration-500 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>


      
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
