// Education.js
import React from "react";
import { Exp } from "./assets/data";

const Education = () => {
  return (
    <div>
      {Exp.map((item, i) => (
        <div key={i}>
          <p className="text-4xl font-extrabold text-white">{item.section}</p>
          <div className="text-white">
            <div className="flex m-10">
              <div className="blue-line flex flex-col items-center justify-start">
                <div className="blue-line-point"></div>
                <div className="border-l-4 h-20 border-blue-700"></div>
              </div>
              {item.subsection.map((subItem, index) => (
                <div className="flex flex-col mt-2" key={index}>
                  <div className="flex">
                    <p className="bg-orange-400 text-black ml-10 border-0 h-10 p-2 text-lg font-bold">
                      {subItem.id}
                    </p>
                    <p className="ml-5 mt-2 text-lg">{subItem.duration}</p>
                  </div>
                  <p className="font-extrabold mt-5 ml-10 text-lg">
                    {subItem.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
