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
          <h1 className="md:text-5xl text-3xl font-bold">
            Rent a <span className="text-[#A02279]">Place</span> away from <span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span>
          </h1>

          <p className="text-xl ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone.
          </p>

          <div className="w-full  text-center md:text-left">
            <input
              type="text"
              placeholder="search for location"
              className="border py-4 px-1 w-2/3 "
            />
            <button className="p-4 bg-[#A02279] text-white rounded-[10px] w-1/4">
              Search
            </button>
          </div>
        </div>

        <div className="">
          <img src={hero} alt="" className="" />
        </div>
      </div>
      <div className="bg-[#A02279] flex justify-between gap-10 md:px-[100px] px-5 md:text-2xl text-sm font-bold text-white">
        <span className="flex items-center justify-around space-x-1">
          <img src={mbtoken} alt="" />
          <p>MBToken</p>
        </span>
        <span className="flex items-center  justify-around space-x-1">
          <img src={meta} alt="" />
          <p className="font-normal">METAMASK</p>
        </span>

        <span className="flex items-center justify-around space-x-1">
          <img src={opensea} alt="" />
          <p>OpenSea</p>
        </span>
      </div>
    </section>
  );
};

export default Hero;
