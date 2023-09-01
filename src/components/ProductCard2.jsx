import Link from 'next/link';
import React from 'react';
import { imageUrl } from '../../imageUrl';

const ProductCard2 = ({ item }) => {
    const slug = item.slug.current;
    return (
        <Link href={`/singleProduct/${slug}`}>
            <div className="p-2 rounded-md bg-[#FF676D20] lg:p-3 cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="items-center max-w-[150px] lg:max-w-[250px]">
                    <img src={imageUrl(item.image[0])} alt="" className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] rounded-md -z-10 object-contain" />
                    <div className="mt-2 px-2">
                        <div className="font-semibold text-sm text-black line-clamp-2">{item.name}</div>
                        <div className="font-medium text-lg text-[#FF676D]">Price: ₹  {item.price}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard2;