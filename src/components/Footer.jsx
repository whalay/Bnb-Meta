import React from "react";
import logo from "../assets/images/Grouplogo.svg";

const Footer = () => {
  return (
    <div className="bg-black h-screen text-white md:flex justify-between items-start p-20">
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className="space-y-5">
        <li>Community</li>
        <li>NFT</li>
        <li>Tokens</li>
        <li>Landlords</li>
        <li>Discord</li>
      </ul>

      <ul className="space-y-5">
        <li>Places</li>
        <li>Castle</li>
        <li>Farms</li>
        <li>Beach</li>
        <li>Learn more</li>
      </ul>

      <ul className="space-y-5">
        <li>About us</li>
        <li>Road map</li>
        <li>Creators</li>
        <li>Career</li>
        <li>Contact us</li>
      </ul>
    </div>
  );
};

export default Footer;
