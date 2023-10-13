import React from "react";
import "./skills.css";
import { SlControlPlay } from "react-icons/sl";

const SkillBox = () => {
  return (
    <div className="flex justify-around tracking-widest">
      <div className="flex flex-col border h-fit flex-wrap p-3 m-14 border-white rounded-lg border-2  md:w-100 md:boxAnimation">
        <h2 className="md:text-4xl sm:text-2xl font-extrabold text-cyan-600">
          Programming languages and core fundamentals
        </h2>
        <ol className="md:text-2xl sm:text-lg mt-5 leading-loose">
          <li className="flex items-center p-2">
            <span className="mr-3">
              <SlControlPlay />
            </span>
            <span className="ml-1">C++/Java/SQL</span>
          </li>
          <li className="flex items-center p-2">
            <span className="mr-3">
              <SlControlPlay />
            </span>
            <span className="ml-1">
              RDBMS(Relational Database Management System)
            </span>
          </li>
          <li className="flex items-center p-2">
            <span className="mr-3">
              <SlControlPlay />
            </span>
            <span className="ml-1">(OOPs)Object Oriented Programming</span>
          </li>
          <li className="flex items-center p-2">
            <span className="mr-3">
              <SlControlPlay />
            </span>
            <span className="ml-1">Computer Network</span>
          </li>
          <li className="flex items-center p-2">
            <span className="mr-3">
              <SlControlPlay />
            </span>
            <span className="ml-1">Operating System</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SkillBox;
