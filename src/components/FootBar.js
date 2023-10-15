import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css";

const FootBar = () => {
  return (
    <div className="text-white z-50 fixed bottom-0 flex justify-center items-center bg-transparent setIcons animate-FootBar shadow-FootBar m-5">
      <div className="flex">
        <Link to="https://www.linkedin.com/in/daarshik-dwivedi/">
          <AiFillLinkedin className="p-1 h-12  w-28" />
        </Link>
        <Link to="https://github.com/daarshik">
          <AiFillGithub className="p-1 h-12  w-28" />
        </Link>
        <Link to="mailto:daarshikdwivedi10@gmail.com">
          <AiOutlineMail className="p-1 h-12  w-28" />
        </Link>
      </div>
    </div>
  );
};

export default FootBar;
