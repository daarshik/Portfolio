import React from "react";
import reactImg from "./assets/atom.png";
import cppImg from "./assets/c-.png";
import cssImg from "./assets/css-3.png";
import htmlImg from "./assets/html.png";
import javaImg from "./assets/java.png";
import jsImg from "./assets/js.png";
import nodeImg from "./assets/nodejs.png";
import tsxImg from "./assets/typescript.png";
import gitImg from "./assets/gitImg.png";
import tailwindImg from "./assets/tailwindImg.jpg";
import "./skills.css";

const SkillImg = () => {
  return (
    <div className="flex flex-wrap mt-1">
      <img src={reactImg} className="h-12 m-3 hover:animate-spin moveIcons" />
      <img src={cppImg} className="h-12 m-3 hover:animate-pulse moveIcons" />
      <img src={cssImg} className="h-12 m-3 hover:animate-bounce moveIcons" />
      <img src={tsxImg} className="h-12 m-3 hover:animate-spin moveIcons" />
      <img src={htmlImg} className="h-12 m-3 hover:animate-pulse moveIcons" />
      <img src={javaImg} className="h-12 m-3 hover:animate-spin moveIcons" />
      <img
        src={jsImg}
        className="h-10 m-3 rounded-xl hover:animate-pulse moveIcons"
      />
      <img src={nodeImg} className="h-12 m-3 hover:animate-bounce moveIcons" />
      <img src={gitImg} className="h-12 m-3 hover:animate-spin moveIcons" />
      <img
        src={tailwindImg}
        className="h-10 w-14 m-3 hover:animate-spin moveIcons rounded-xl hover:animate-spin moveIcons "
      />
    </div>
  );
};

export default SkillImg;
