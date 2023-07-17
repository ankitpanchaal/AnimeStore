import React from 'react';
import { imageUrl } from '../../imageUrl';
import Link from 'next/link';

const CategoryCard = ({ item }) => {
    const url = item?.image?.asset; // Access the image URL from the 'image' field

    return (
        <Link href={`/productsByCat/${item.name}`} >
            <div className="cursor-pointer transform transition-all duration-300 hover:scale-105 w-[70px] lg:w-[120px]">
                <img
                    src={imageUrl(url)}
                    alt=""
                    className="rounded-[60px] w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] border-2 p-1 border-slate-300"
                />
                <p className="text-center font-semibold text-[12px] text-slate-950 hover:font-medium">
                    {item?.name}
                </p>
            </div>
        </Link>
    );
};

export default CategoryCard;
