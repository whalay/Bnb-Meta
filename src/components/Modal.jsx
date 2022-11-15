import React from "react";
import {FaGreaterThan} from "react-icons/fa";
import {  AiOutlineClose} from "react-icons/ai";
import meta from "../assets/images/meta.png";
import wallet from "../assets/images/wallet.png"

const Modal = (props) => {

    if (!props.show){
        return null
    }
  return (
    <div onClick={props.onClose} className="fixed left-0 top-0 right-0 bottom-0 bg-black/70 flex items-center justify-center">
      <div onClick ={e => e.stopPropagation()} className="w-[500px] bg-white rounded-2xl m-4">
        <div>
          <div className="flex justify-between items-center p-5 font-bold border-b-2">
            <h1 className="text-xl md:text-2xl">Connect wallet</h1>
            <AiOutlineClose onClick ={props.onClose} className="hover:cursor-pointer" />
  
          </div>

          <p className="text-lg md:text-sm p-5">Choose your preferred wallet:</p>
          <div className="p-3">
            <button className="border p-2 flex w-full justify-between items-center rounded-xl"> <span className="flex items-center gap-3"><img src={meta} alt="" />Metamask</span> <FaGreaterThan/></button>
          </div>
          <div className="p-3">
            <button className="border p-2 flex w-full justify-between items-center rounded-xl"> <span className="flex items-center gap-3"><img src={wallet} alt="" />Metamask</span> <FaGreaterThan/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
