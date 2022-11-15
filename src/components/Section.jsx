import React from 'react'
import img from "../assets/images/secImg.png";

const Section = () => {
  return (
    <div className='bg-[#A02279] h-full flex flex-col-reverse md:flex-row justify-between items-center gap-10 py-20 px-10 '>
        <div className='text-white space-y-16'>
            <h1 className=' text-3xl md:text-5xl font-bold'>Metabnb NFTs</h1>
            <p className='text-lg leading-loose'>Discover our NFT gift cards collection. Loyal customers ggets amazing gift card which traded as NFTs. Thses NFTs gives our customer 
                access to loads of our exclusive services.
            </p>
            <button className='bg-white text-[#A02279] p-4 px-6 rounded-xl'>Learn more</button>
        </div>

        <img src={img} alt="" />
    </div>
  )
}

export default Section