import React from 'react'
import BannerImg from "../../assets/women/women2.png"
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center
    items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center'>
                {/*Image section*/}
                <div>
                    <img src={BannerImg} />
                </div>

            </div>  
        </div>
    </div>
  )
}

export default Banner