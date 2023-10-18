import React from "react";
import "./skills.css";
import SkillImg from "./SkillImg";
import SkillBox from "./SkillBox";
import Img from "./assets/SkillImgTop.svg";

const bottomSectionData = {
  id: "Programming languages and core fundamentals",
  des: [
    "Proficient in programming with C++, Java, and SQL (Structured Query Language), with a focus on building efficient and scalable applications.",
    "Strong understanding and application of Object-Oriented Programming (OOP) principles for developing modular and maintainable code.",
    "In-depth knowledge of Relational Database Management Systems (RDBMS) and their implementation, optimizing data storage and retrieval processes.",
  ],
};

const topSectionData = {
  id: "Web Development",
  des: [
    "Proficient in frontend technologies such as JavaScript, ReactJS, HTML, CSS, and Tailwind CSS for creating engaging and responsive user interfaces.",
    "Skilled in backend development utilizing Node.js and Spring Boot to build robust and scalable server-side applications.",
    "Strong understanding and practical experience with Git for effective version control and collaborative software development.",
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center text-white mt-20 mr-2">
      <div>
        <h1 className="font-extrabold text-6xl self-center animate-Skills ">
          Skills
        </h1>
      </div>
      <div className="flex justify-center items-center lg:flex-row md:flex-col m-10 forMobileView mb-16">
        <img src={Img} className="h-96 items-center lg:ml-16" />
        <div className="flex flex-col items-center">
          <SkillBox data={topSectionData} />
          <SkillImg className="mb-5" />
        </div>
      </div>
      <div className="flex justify-center items-center lg:flex-row md:flex-col m-2 forMobileView mb-28">
        <img
          src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2022/naukri-learning/what-is/What-is-Data-Structures-and-Algorithms.jpg"
          className="h-96 w-[541.96px] items-center lg:ml-16 rounded-xl"
        />
        <div className="md:ml-8 mb-16">
          <SkillBox data={bottomSectionData} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
