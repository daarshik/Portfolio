import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css";
import { CiDark, CiLight } from "react-icons/ci";
import "./home.css";
import { MdHome } from "react-icons/md";

const FootBar = () => {
  return (
    <div className="flex z-50 justify-center items-center animate-FootBar fixed left-[50%] right-[50%] bottom-3">
      <div className="flex shadow-FootBar rounded-full p-1 ">
        {/*<Link>
          <CiDark  />
          {/*<CiLight />}
  </Link>*/}
        <Link to="/">
          <MdHome className="p-2 h-12 w-12 hover:bg-white hover:text-black rounded" />
        </Link>
        <a
          href="https://www.linkedin.com/in/daarshik-dwivedi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin className="p-2 h-12  w-12 hover:bg-white hover:text-black rounded" />
        </a>
        <a
          href="https://github.com/daarshik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="p-2 h-12  w-12 hover:bg-white hover:text-black rounded" />
        </a>
        <a
          href="mailto:daarshikdwivedi10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail className="p-2 h-12  w-12 hover:bg-white hover:text-black rounded" />
        </a>
      </div>
    </div>
  );
};

export default FootBar;
