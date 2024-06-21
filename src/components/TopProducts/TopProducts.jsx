import React from 'react'
import Img1 from '../../assets/Shirt/shirt.png'
import Img2 from '../../assets/Shirt/shirt2.png'
import Img3 from '../../assets/Shirt/shirt3.png'
import { FaStar } from "react-icons/fa";

const ProductsData=[
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description:
          "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
]
const TopProducts = () => {
  return (
    <div>
        <div className='container'>
            {/*Header Section */}
            <div className='text-left mb-10 '>
                <p data-aos="fade-up" className='text-sm 
                text-primary'>Top Rated Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl 
                font-bold'>Best Products</h1>
                <p data-aos="fade-up" className='text-xs 
                text-gray-400'>lorem His Life will forever be 
                   Changed dolor sit amet, consectetur
                   adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            {/*Body Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-3 md:gap-5 place-items-center gap-20">
                {
                ProductsData.map((data => (
                    <div>
                        {/*Body Section */}
                        <div>
                            <img src={data.img} alt='' />
                        </div>
                    </div>
                )))
                }
            </div>
        </div>
    </div>
  )
}

export default TopProducts