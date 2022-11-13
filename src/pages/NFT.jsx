import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import  {Nft} from "../assets/Data";

const NFT = () => {
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <div>
        <ul className="flex">
          <li>Restaurant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantastic city</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
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
      {/* <Footer /> */}
    </div>
  );
};

export default NFT;
