import React from "react";

import SkillImg from "./SkillImg";
import SkillBox from "./SkillBox";

const Skills = () => {
  return (
    <div className="flex flex-col bg-black text-white md:mt-96 ">
      <h1 className="font-extrabold md:text-6xl sm:text-2xl sm:ml-36  sm:mt-1 md:mt-2 mb-2">
        Skills
      </h1>
      <div className="flex flex-wrap flex-col justify-around">
        <div className="flex flex-wrap justify-around">
          <SkillBox />
          <SkillBox />
        </div>
        <SkillBox />
        <SkillImg className=" md:items-center md:mb-2" />
      </div>
    </div>
  );
};

export default Skills;
