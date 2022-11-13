import React from "react";

import { Nft } from "../assets/Data";



const Body = () => {
const first4 = Nft.slice(4, 12);

  return (
    <div className="h-full p-10 ">
      <h1 className="text-2xl md:text-4xl font-bold  text-center pb-10">
        Inspiration for your next adventure
      </h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
        {first4.map((nft, index) => (
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
