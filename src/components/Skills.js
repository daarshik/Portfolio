import React from "react";
import "./skills.css";
import { SlControlPlay } from "react-icons/sl";

const Skills = () => {
  return (
    <div className="flex flex-col text-white  bg-gray-950">
      <h1 className="font-extrabold text-6xl ">Skill Section</h1>
      <div className="flex justify-around tracking-widest">
        <div className="flex flex-col border h-fit flex-wrap p-3 m-6 border-white rounded-lg border-2  w-80 hover:bg-white hover:text-black boxAnimation">
          <h2 className="text-4xl font-extrabold text-cyan-600">
            Programming languages and core fundamentals
          </h2>
          <ol className="text-2xl mt-5 leading-loose">
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
              <span className="ml-1">Operating System</span>
            </li>
            <li className="flex items-center p-2">
              <span className="mr-3 space-y-reverse">
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
              <span className="ml-1">
              (OOPs)Object Oriented Programming
              </span>
            </li>
            <li className="flex items-center p-2">
              <span className="mr-3 space-y-reverse">
                <SlControlPlay />
              </span>
              <span className="ml-1">
              Computer Network
              </span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col border h-fit flex-wrap p-3 m-6 border-black rounded-lg border-2   w-80 ">
          <h2 className="text-2xl font-extrabold">
            Programming languages and core fundamentals
          </h2>
          <ol className="text-2xl mt-5 leading-loose">
            <li>C++/Java/SQL</li>
            <li>Operating System</li>
            <li>RDBMS(Relational Database Management System)</li>
            <li>(OOPs)Object Oriented Programming</li>
            <li>Computer Network</li>
          </ol>
        </div>
        <div className="flex flex-col border h-fit flex-wrap p-3 m-6 border-black rounded-lg border-2   w-80 ">
          <h2 className="text-2xl font-extrabold">
            Programming languages and core fundamentals
          </h2>
          <ol className="text-2xl mt-5 leading-loose">
            <li>C++/Java/SQL</li>
            <li>Operating System</li>
            <li>RDBMS(Relational Database Management System)</li>
            <li>(OOPs)Object Oriented Programming</li>
            <li>Computer Network</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Skills;
