import React from "react";

import hero from "../assets/images/Hero.png";
import mbtoken from "../assets/images/mbtoken.png";
import meta from "../assets/images/metamask.png";
import opensea from "../assets/images/opensea.png";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="flex flex-col-reverse md:flex-row justify-between  items-center md:p-10 md:mx-10 px-5">
        <div className="flex flex-col md:w-1/2 gap-10 py-10">
          <h1 className="md:text-6xl text-4xl font-bold">
            Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span>
          </h1>

          <p className="text-2xl ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>

          <div className="w-full  text-center md:text-left">
            <input
              type="text"
              placeholder="searrch for location"
              className="border p-4 w-1/2"
            />
            <button className="p-4 bg-[#A02279] text-white rounded-[10px] w-1/3">
              Search
            </button>
          </div>
        </div>

        <div className="">
          <img src={hero} alt="" className="" />
        </div>
      </div>
      <div className="bg-[#A02279] flex justify-between md:px-[100px] px-10 md:text-2xl text-lg font-bold text-white">
        <span className="flex items-center space-x-2">
          <img src={mbtoken} alt="" />
          <p>MBToken</p>
        </span>
        <span className="flex items-center space-x-2">
          <img src={meta} alt="" />
          <p className="font-normal">METAMASK</p>
        </span>

        <span className="flex items-center space-x-2">
          <img src={opensea} alt="" />
          <p>OpenSea</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
