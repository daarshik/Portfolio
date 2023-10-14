import React from "react";
import "./skills.css";
import { SlControlPlay } from "react-icons/sl";
import { data } from "./assets/data";

const SkillBox = () => {
  return (
    <div className="flex justify-around tracking-widest">
      <div className="flex flex-col h-fit  m-14 md:w-100 md:boxAnimation">
        {data.map((items) => {
          return (
            <div>
              <h2 className="md:text-4xl sm:text-2xl font-extrabold text-cyan-600">
                {items.id}
              </h2>
              {items.des.map((item) => {
                return (
                  <ol className="md:text-2xl text-base mt-4 leading-loose">
                    <li className="flex items-center m-2">
                      <span className="mr-3">
                        <SlControlPlay />
                      </span>
                      <span className="ml-1">{item}</span>
                    </li>
                  </ol>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
