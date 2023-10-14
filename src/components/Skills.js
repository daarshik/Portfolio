import React from "react";

import SkillImg from "./SkillImg";
import SkillBox from "./SkillBox";




const Skills = () => {
  return (
    <div className="flex flex-col justify-around bg-black text-white mt-20 mr-2">
      <h1 className="font-extrabold text-6xl self-center">Skills</h1>
      <div className="flex justify-around flex-col mt-20 md:flex-row">
        <img
          src="https://64821ca5a6ff9d2cd98ceab9--kush636.netlify.app/static/media/web.9331f972.svg"
          className="h-96 items-center mt-14 ml-4"
        />
        <div>
          <SkillBox />
          <SkillImg className=" md:items-center md:mb-2" />
        </div>
      </div>
      <div className="flex justify-around mt-20 flex-col md:flex-row">
        <img
          src="https://isaaccomputerscience.org/api/v3.5.0/api/images/content/computer_science/computer_systems/operating_systems/figures/isaac_cs_sys_os_functions_of_os.svg"
          className="h-96 items-center mt-14 ml-4"
        />
        <div>
          <SkillBox />
        </div>
      </div>
    </div>
  );
};

export default Skills;
