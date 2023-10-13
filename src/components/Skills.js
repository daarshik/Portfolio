import React from "react";
import "./skills.css";
import { SlControlPlay } from "react-icons/sl";
import SkillImg from "./SkillImg";

const Skills = () => {
  return (
    <div className="flex flex-col text-white  bg-gray-950">
      <h1 className="font-extrabold md:text-6xl text-2xl ml-36  mt-1 mb-2">
        Skills
      </h1>
      <SkillImg />
      <div className="hidden">
        <div className="md:flex md:justify-around md:tracking-widest">
          <div className="md:flex md:flex-col md:border md:h-fit md:flex-wrap md:p-3 md:m-6 md:border-white md:rounded-lg md:border-2  md:w-80 md:hover:bg-white md:hover:text-black md:boxAnimation">
            <h2 className="md:text-4xl md:font-extrabold md:text-cyan-600">
              Programming languages and core fundamentals
            </h2>
            <ol className="md:text-2xl md:mt-5 md:leading-loose">
              <li className="md:flex md:items-center md:p-2">
                <span className="md:mr-3">
                  <SlControlPlay />
                </span>
                <span className="md:ml-1">C++/Java/SQL</span>
              </li>
              <li className="md:flex md:items-center md:p-2">
                <span className="md:mr-3">
                  <SlControlPlay />
                </span>
                <span className="md:ml-1">Operating System</span>
              </li>
              <li className="md:flex md:items-center md:p-2">
                <span className="md:mr-3">
                  <SlControlPlay />
                </span>
                <span className="md:ml-1">
                  RDBMS(Relational Database Management System)
                </span>
              </li>
              <li className="md:flex md:items-center md:p-2">
                <span className="md:mr-3">
                  <SlControlPlay />
                </span>
                <span className="md:ml-1">
                  (OOPs)Object Oriented Programming
                </span>
              </li>
              <li className="md:flex md:items-center md:p-2">
                <span className="md:mr-3">
                  <SlControlPlay />
                </span>
                <span className="md:ml-1">Computer Network</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
