import React, { useRef, useState } from "react";
import { TfiViewListAlt } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");

  const navigate = useNavigate();
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className="nav_parent">
      <div className="nav_child1">
        <p className="text1">Portfolio</p>
      </div>

      <div className={`nav_child2 ${toggle ? "open" : "close"}`}>
        <p
          className={`text2 ${select === "home" ? "selected" : ""}`}
          onClick={() => {
            setSelect("home");
            navigate("/");
          }}
        >
          Home
        </p>

        <p
          className={`text2 ${select === "skill" ? "selected" : ""}`}
          onClick={() => {
            setSelect("skill");
            navigate("/skill");
          }}
        >
          Skills
        </p>
        <p
          className={`text2 ${select === "exp" ? "selected" : ""}`}
          onClick={() => {
            setSelect("exp");
            navigate("/about");
          }}
        >
          About Me
        </p>
        <p
          className={`text2 ${select === "contact" ? "selected" : ""}`}
          onClick={() => {
            setSelect("contact");
            navigate("/contact");
          }}
        >
          Contact Me
        </p>
      </div>

      <div className={`${toggle ? "open" : ""} hide`}>
        <div className={`${toggle ? "hidden" : "open"} z-50`}>
          <TfiViewListAlt onClick={handleToggle} />
        </div>
        <div className={`${toggle ? "open" : "hidden"} z-50`}>
          <AiOutlineClose onClick={handleToggle} className="w-10 h-10"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
