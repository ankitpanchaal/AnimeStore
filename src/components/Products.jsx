'use client'
import React, { useContext, useEffect } from 'react'
import ProductCard2 from './ProductCard2'
import client from '../../sanity';
import { DataContext } from '@/lib/AppContext';
import Loading from './Loading';

const Products = () => {

    const { updateProduct, product } = useContext(DataContext);

    useEffect(() => {
        client
            .fetch(`*[_type == "product"] | order(_createdAt desc) [0...10] {
                name,
                price,
                image,
                slug,
              }              
              `)
            .then((result) => updateProduct(result)) // Get the first item from the result array
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex flex-wrap lg:px-20 gap-4 lg:gap-10 justify-center" >
            {
                !product ? <Loading /> :
                    product.map((item, index) => {
                        return (
                            <ProductCard2 key={index} item={item} />
                        )
                    })}
        </div>
    )
}

export default Products