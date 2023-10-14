import React from "react";

const Education = () => {
  return (
    <div>
      <p className="text-4xl font-extrabold text-white">Education</p>
      <div className="text-white">
        <div className="flex m-10">
          <div class="blue-line flex flex-col items-center justify-start">
            <div class="blue-line-point"></div>
            <div className="border-l-4 h-20 border-blue-700"></div>
          </div>
          <div className=" flex flex-col mt-2">
            <div className="flex">
              <p className=" bg-orange-400 text-black ml-10 border-0 h-10 p-2 text-lg font-bold">
                Bachelor of Technology (B.Tech) in Computer Science
              </p>
              <p className="ml-5 mt-2 text-lg">2019-2023</p>
            </div>
            <p className="font-extrabold mt-5 ml-10 text-lg">
              JSS Academy of Technical Education, Noida(JSSATE)
            </p>
          </div>
        </div>
        <div className="flex m-10">
          <div class="blue-line flex flex-col items-center justify-start">
            <div class="blue-line-point"></div>
            <div className="border-l-4 h-20 border-blue-700"></div>
          </div>
          <div className=" flex flex-col mt-2">
            <div className="flex">
              <p className=" bg-orange-400 text-black ml-10 border-0 h-10 p-2 text-lg font-bold">
                Higher Secondary Certificate
              </p>
              <p className="ml-5 mt-2 text-lg">2016-18</p>
            </div>
            <p className="font-extrabold mt-5 ml-10">
              W.H.Smith Memorial School, Varanasi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
