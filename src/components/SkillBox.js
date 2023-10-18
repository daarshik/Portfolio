import React from "react";
import "./skills.css";
import { SlControlPlay } from "react-icons/sl";

const SkillBox = ({ data }) => {
  const { id, des } = data;
  return (
    <div className="flex flex-col m-5 md:w-100 md:boxAnimation tracking-widest box-border">
      <div>
        <h2 className="md:text-4xl sm:text-2xl m-8 font-extrabold text-cyan-600">
          {id}
        </h2>
        {des.map((item) => {
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
    </div>
  );
};

export default SkillBox;
