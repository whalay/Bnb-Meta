import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/images/Grouplogo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <div className="flex justify-between items-center p-10  font-semibold text-lg">
      <img src={logo} alt="" />

      <ul className="md:flex justify-between gap-10 hidden">
        <li>Home</li>
        <li>Place to stay</li>
        <li>NFTs</li>
        <li>Community</li>
      </ul>

      <button className="p-4 bg-[#A02279] text-white rounded-[10px] hidden md:block">
        Connect wallet
      </button>

      {toggle ? (
     <AiOutlineClose
     onClick={navHandler}
     className="w-10 h-10 block sm:hidden"
   />
      ) : (
       
        <GiHamburgerMenu
        onClick={navHandler}
        className="w-10 h-10 block sm:hidden"
      />
      )}

      {toggle && (
        <div className="bg-[#A02279] absolute h-96 w-1/2 top-20 left-0 rounded-xl p-10">
          <ul className="md:flex justify-between space-y-5 text-white text-2xl">
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>

          <button className="p-4 mt-10 bg-white text-black rounded-[10px] ">
            Connect wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
