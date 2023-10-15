import React from "react";
import "./home.css";
import './skills.css'
import Education from "./Education";
import ProfileImg from "./assets/Daarshik_portfolioImg.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-around text-white mt-20 mr-2">
      <h1 className="font-extrabold text-6xl self-center animate-About">About Me</h1>
      <div className="flex lg:flex-row sm:flex-col justify-around p-3 setAboutMe">
        <div className="flex justify-center items-start mt-24 animate-ProfileImg">
          <img
            src={ProfileImg}
            className="aboutImg h-[40%] rounded-xl  bg-white shadow-lg shadow-white box-border border"
          />
        </div>

        <div className="flex flex-col mt-10 mr-5">
          <Education />
        </div>
      </div>
    </div>
  );
};

export default About;
