import React from "react";

import { Nft } from "../assets/Data";

import nft1 from "../assets/images/nft1.png";
import nft2 from "../assets/images/nft2.png";
import nft3 from "../assets/images/nft3.png";
import nft4 from "../assets/images/nft4.png";
import nft5 from "../assets/images/nft5.png";
import nft6 from "../assets/images/nft6.png";
import nft7 from "../assets/images/nft7.png";
import nft8 from "../assets/images/nft8.png";
import star from "../assets/images/star.png";

const Body = () => {
  return (
    <div className="h-full p-10 ">
      <h1 className="text-2xl md:text-4xl font-bold  text-center pb-10">
        Inspiration for your next adventure
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {Nft.map((nft, index) => (
          <div className=" border-2 p-4 m-2 rounded-2xl" key={index}>
            <img src={nft.img} alt="" className="" />

            <div className="grid grid-cols-2 text-[12px]">
              <p>{nft.text1}</p>
              <p>{nft.text2}</p>
              <p>{nft.text3}</p>
              <p>{nft.text4}</p>
            </div>
            <img src={nft.img2} alt="" className="" />
          </div>
        ))}
        {/* <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2 text-[12px]">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />
        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div>
        <div className=" border-2 p-4 m-2 rounded-2xl">
          <img src={nft1} alt="" />
          <div className="grid grid-cols-2">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2 weeks away</p>
          </div>
          <img src={star} alt="" />

        </div> */}
      </div>
    </div>
  );
};

export default Body;
