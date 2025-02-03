import customerImage1 from "../assets/Image/profile_img_1.png";
import customerImage2 from "../assets/Image/profile_img_2.png";
import customerImage3 from "../assets/Image/profile_img_3.png";
import start from "../assets/Image/star_icon.svg";

const Testimonials = () => {
  return (
    <div className="container py-10 xl:px-40">
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
      <div className="flex  flex-wrap lg:flex-row items-center justify-center lg:gap-x-6 lg:px-8">
        <div className="w-full max-w-[360px] shadow-xl px-6 rounded-xl text-center cursor-pointer  border border-gray-200 py-12 my-5 hover:shadow-2xl transition-all duration-300">
          <img className=" mx-auto" src={customerImage1} alt="CustomerImage" />
          <h2 className="pt-2 pb-0.5 text-xl font-semibold">Donald Jackman</h2>
          <h4 className="text-gray-500 text-sm">Marketing Manager</h4>
          <div className="flex items-center justify-center py-4">
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
          </div>
          <p className="text-md px-4 text-gray-500">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
        <div className="w-full max-w-[360px] shadow-xl px-6 rounded-xl text-center cursor-pointer   border border-gray-200 py-12 my-5 hover:shadow-2xl transition-all duration-300">
          <img className=" mx-auto" src={customerImage2} alt="CustomerImage" />
          <h2 className="pt-2 pb-0.5 text-xl font-semibold">Donald Jackman</h2>
          <h4 className="text-gray-500 text-sm">Marketing Manager</h4>
          <div className="flex items-center justify-center  py-4">
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            {/* <img src={start} alt="star" /> */}
          </div>
          <p className="text-md px-4 text-gray-500">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
        <div className="w-full max-w-[360px] shadow-xl px-6 rounded-xl text-center cursor-pointer   border border-gray-200 py-12 my-5 hover:shadow-2xl transition-all duration-300">
          <img className=" mx-auto" src={customerImage3} alt="CustomerImage" />
          <h2 className="pt-2 pb-0.5 text-xl font-semibold">Donald Jackman</h2>
          <h4 className="text-gray-500 text-sm">Marketing Manager</h4>
          <div className="flex items-center justify-center py-4">
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
            <img src={start} alt="star" />
          </div>
          <p className="text-md px-4 text-gray-500">
            From the very first meeting, they understood my vision and helped me
            find the perfect property. Their attention to detail and commitment
            to client satisfaction is unmatched.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
