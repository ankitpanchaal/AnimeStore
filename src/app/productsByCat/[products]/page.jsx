'use client'
import React, { useEffect, useState } from 'react'
import client from '../../../../sanity';
import Header from '@/components/Header';
import ProductCard2 from '@/components/ProductCard2';

const page = ({ params }) => {

    const [data, setData] = useState()

    useEffect(() => {
        client
            .fetch(`
            *[_type == "product" && references(*[_type == "category" && name == '${params.products}']._id)] {
                _id,
                name,
                image,
                price,
                rating,
                isPopular,
                slug,
              }
            `)
            .then((result) => setData(result))
            .catch((error) => console.error(error));
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="lg:pt-14 pt-10">
            <Header title={`${params.products} Prodcuts`} />

            <div className="flex flex-wrap lg:px-20 gap-4 lg:gap-10 justify-center pt-6" >
                {data.map((item, index) => {
                    return (
                        <ProductCard2 key={index} item={item} />
                    )
                })}
            </div>

        </div>
    )
}

export default page