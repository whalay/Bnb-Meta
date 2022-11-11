import React from "react";
import { ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/Grouplogo.svg";

const Footer = () => {
  return (
    <div className="bg-black h-full text-white md:flex justify-between items-start p-20">
      <div className="flex flex-col justify-between items-center md:h-56 ">
        <img src={logo} alt="" />
        <div className="flex gap-8 justify-center py-4 ">
          <ImFacebook className="w-8 h-8" />
          <BsInstagram className="w-8 h-8" />
          <GrTwitter className="w-8 h-8" />
        </div>
      </div>
      <ul className="space-y-5 py-5 text-xl ">
        <li className="text-2xl font-bold pb-3">Community</li>
        <li>NFT</li>
        <li>Tokens</li>
        <li>Landlords</li>
        <li>Discord</li>
      </ul>

      <ul className="space-y-5 py-5 text-xl ">
        <li className="text-2xl font-bold pb-3">Places</li>
        <li>Castle</li>
        <li>Farms</li>
        <li>Beach</li>
        <li>Learn more</li>
      </ul>

      <ul className="space-y-5 py-5 text-xl ">
        <li className="text-2xl font-bold pb-3">About us</li>
        <li>Road map</li>
        <li>Creators</li>
        <li>Career</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Footer;
