import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/images/Grouplogo.png";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  const navHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div className="flex justify-between items-center md:p-10 p-5  font-semibold text-lg">
      <Link to="/home">
      <img src={logo} alt="" className="w-44 md:w-auto" />
      </Link>

      <ul className="md:flex justify-between gap-10 hidden">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nft">Place to stay</Link>
        </li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <button
        onClick={props.showModal}
        className="p-4 bg-[#A02279] text-white rounded-[10px] hidden md:block"
      >
        Connect wallet
      </button>

      {toggle ? (
        <AiOutlineClose
          onClick={navHandler}
          className="w-10 h-10 block md:hidden"
        />
      ) : (
        <GiHamburgerMenu
          onClick={navHandler}
          className="w-10 h-10 block md:hidden"
        />
      )}

      {toggle && (
        <div className="bg-[#A02279] absolute h-[30rem] w-[80%] top-20 left-0 rounded-r-xl p-10">
          <ul className="md:flex justify-between space-y-5 text-white text-xl">
          <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nft">Place to stay</Link>
        </li>
        <li>NFTs</li>
        <li>Community</li>
          </ul>

          <button onClick={props.showModal}
           className="p-4 mt-10 bg-white text-black rounded-[10px] ">
            Connect wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
