import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Nft } from "../assets/Data";
// import { Options } from "../assets/Data";
import settings from "../assets/images/settings.png";

const Options =[
  {
     label: 'Restaurant',
     option:  'restaurant',
  },
  {
      label: 'Cottage',
      option:  'cottage',
   },
   {
      label: 'Castle',
      option:  'castle',
   },
   {
      label: 'Fantastic city',
      option:  'fantastic city',
   },
   {
      label: 'Beach',
      option:  'beach',
   },
   {
      label: 'Carbins',
      option:  'carbins',
   },
   {
      label: 'Off-grid',
      option:  'off-grid',
   },
   {
      label: 'Farm',
      option:  'farm',
   },
];

const NFT = ({showModal}) => {
  return (
    <div className="">
      <Navbar showModal={showModal} />
      <div className="p-10">
        <div className="flex justify-between items-center p-5 ">
          <ul className="md:flex flex-wrap justify-between gap-20 hidden ">
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>Fantastic city</li>
            <li>Beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
          </ul>
     
          <select className="p-2 mx-5 border-2 md:hidden" >
            {Options.map((option, index) => (
          <option value={option.value} key={index}>{option.label}</option>
            ))}
          </select>
     
          <button className="p-2 px-4 border-2 rounded-lg">
            <span className="flex justify-between gap-4">
              Location <img src={settings} alt="" />
            </span>
          </button>
        </div>
        <div>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NFT;
