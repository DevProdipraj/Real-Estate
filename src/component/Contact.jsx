import React from "react";

const Contact = () => {
  return (
    <div className="container  pt-10">
      {/* contact header  */}
      <div className="p-10 text-center ">
        <h2 className="text-4xl font-bold ">
          Contact
          <span className="underline underline-offset-4 decoration-1 font-light ms-2">
            With Us
          </span>
        </h2>
        <p className="max-w-80 mx-auto text-gray-500 font-semibold mt-3">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </div>

      {/* contact Form  */}
      <div className="lg:w-[50%] mx-auto">
        <form
          className="flex items-center flex-col  justify-center   py-6 gap-8 w-full"
          action="#"
        >
          <div className="w-full flex gap-8">
            <div className="flex flex-col w-full">
              <label htmlFor="Name">Your Name</label>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                placeholder="Your Name"
                name="User Name"
                id=""
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="Email">Your Email</label>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                placeholder="Your Email"
                name="User Email"
                id=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="Massage">Massage</label>
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none" name="UserMassage" rows={10}  id="" placeholder="Massage">
            </textarea>
          </div>
          <input className="bg-blue-600 text-white px-20  py-3 cursor-pointer hover:bg-blue-800 transition-all duration-400 rounded-md text-md" type="submit" value="Send Massage" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
