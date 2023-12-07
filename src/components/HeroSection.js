import React from "react";
import Photo from "../photos/hero-photo.jpeg";

function HeroSection() {
  return (
    <>
      <div className="flex space-x-3">
        <div className="bg-indigo-600 w-24 h-1 mb-7 mt-2"></div>
        <div className="text-indigo-600">Ayşe Sarıçoban</div>
      </div>

      <div>
        <div className="min-w-full flex justify-between ">
          <div>
            <div>
              <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold ">
                Hi, This is Ayşe
              </h1>{" "}
              <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
                I'm a full stack developer. I like to code things from scratch,
                and enjoy bringing ideas to life in a minimalist way. If you are
                looking for a developer who to craft solid and scalable frontend
                products with great user experiences. Let's meet!{" "}
              </p>{" "}
            </div>
            <div>
              <a
                href="mailto:aysesrcbnn@gmail.com"
                className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 md:text-md"
              >
                {" "}
                Hire Me
              </a>
              <a
                href="https://www.linkedin.com/in/ay%C5%9Fe-sar%C4%B1%C3%A7oban-302915249/"
                className="inline-block ml-4 px-8 py-3 text-base font-medium rounded-md text-indigo-600 border-2 border-indigo-600 bg-white hover:bg-gray-200 md:text-md"
              >
                {" "}
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ay%C5%9Fe-sar%C4%B1%C3%A7oban-302915249/"
                className="inline-block ml-4 px-8 py-3  text-base font-medium rounded-md text-indigo-600 border-2 border-indigo-600 bg-white hover:bg-gray-200 md:text-md"
              >
                {" "}
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            {" "}
            <img
              className="flex flex-row rounded-lg mr-2 w-72 "
              src={Photo}
              alt="hero-photo"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
