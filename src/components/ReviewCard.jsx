import React from 'react'
import Heading from './Heading'

const ReviewCard = ({ isReverse = false, img, title, desc }) => {
    return (
        <div className="max-w-[1200px] m-auto my-3 border-b-red-200 border-b-2 pb-2 justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 mb-4">
            <div className={`w-[300px] m-auto lg:flex lg:gap-8 lg:w-9/12 ₹{isReverse ? 'flex-row-reverse' : 'flex-row'}`} >
                <img
                    src={img ? img : 'https://www.ugaoo.com/cdn/shop/products/Krish12Planter-Red_6f06af64-ba58-446e-b229-b5fd1c85e906.jpg?v=1681552851&width=375'}
                    className=" lg:w-[360px] object-cover h-[240px] flex m-auto"
                />

                <div className="mt-2 lg:w-[500px] ">
                    <Heading title={title ? title : 'Aglaonema Pink Beauty Plant'} />
                    <p className="text-[10px] font-medium lg:mt-2 " >{desc}</p>
                </div>
            </div>
        </div >
    )
}

export default ReviewCard