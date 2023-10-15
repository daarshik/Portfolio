import React from "react";
import { Exp } from "./assets/data";
import "./skills.css";

const Education = () => {
  return (
    <div>
      {Exp.map((item, i) => (
        <div key={i}>
          <p className="text-4xl font-extrabold text-white">{item.section}</p>
          <div className="text-white">
            <div className="flex m-10 flex-col">
              {item.subsection.map((subItem, index) => (
                <div className="flex m-5">
                  <div className="blue-line flex flex-col items-center justify-start">
                    <div className="blue-line-point"></div>
                    <div className="border-l-4 h-20 border-blue-700"></div>
                  </div>
                  <div className="flex flex-col mt-2" key={index}>
                    <div className="flex justify-between flex-wrap-reverse">
                      <p className="bg-orange-400 text-black ml-10 border-0 m-2 p-2 text-lg font-bold headingSection">
                        {subItem.id}
                      </p>
                      <p className="ml-5 mt-2 text-lg durationSection">
                        {subItem.duration}
                      </p>
                    </div>
                    {subItem.des.map((desItem, i) => (
                      <li
                        className="font-extrabold mt-5 ml-10 text-lg desSection"
                        key={i}
                      >
                        {desItem}
                      </li>
                    ))}
                  </div>
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
