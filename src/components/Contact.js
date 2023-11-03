import React from "react";
import { Link } from "react-router-dom";
import "./skills.css";

const Contact = () => {
  return (
    <div className="text-white mt-20 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold animate-Skills">Contact Me</h1>
      <p className="text-lg m-1 p-20 animate-ProfileImg">
        Hello! If you're looking for assistance or just want to chat about web
        development, I'm here to help! Feel free to reach out anytime. Have a
        fantastic day!
      </p>
      <Link to="mailto:daarshikdwivedi10@gmail.com">
        <button className="btn-grad m-5 font-semibold animate-ProfileImg">
          Drop a mail
        </button>
      </Link>

      <p className="text-4xl font-semibold m-2 animate-ProfileImg">Address</p>
      <p className="text-lg text-blue-600 animate-ProfileImg">
        Varanasi-221010
      </p>
      <p className="text-4xl font-semibold m-2 animate-ProfileImg">
        Phone Number
      </p>
      <p className="text-lg text-blue-600 animate-ProfileImg">+91-6386969251</p>
      <p className="font-bold m-24 animate-ProfileImg">Made By Daarshik</p>
    </div>
  );
};

export default Contact;
