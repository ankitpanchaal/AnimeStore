'use client'
import React, { useContext, useEffect, useState } from 'react'
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

const products = [
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelBlue.jpg?v=1680434558&width=375',
        name: 'Peace Lily Plant',
        price: 10.99
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375',
        name: 'Bamboo Palm',
        price: 19.99
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelPink_97fc1e67-958a-4da8-98b6-31a47bdce6b7.jpg?v=1688563979&width=375',
        name: 'Money Plant ',
        price: 14.5
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=375',
        name: 'Lucky  Plant',
        price: 7.99
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelPink_b9cb7567-785a-464c-88f9-d5282d4668d1.jpg?v=1680427445&width=375',
        name: 'Fittonia Plant',
        price: 12.49
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/areca-palm-plant-xl-31798831349892.jpg?v=1675575726&width=375',
        name: 'Areca Plant',
        price: 12.49
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/files/Aimage_3.jpg?v=1682523121&width=375',
        name: 'Lucky Plant',
        price: 7.99
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/AtlantisPlanter-PastelPink_b9cb7567-785a-464c-88f9-d5282d4668d1.jpg?v=1680427445&width=375',
        name: 'Fittonia Plant',
        price: 12.49
    },
    {
        imageUrl: 'https://www.ugaoo.com/cdn/shop/products/areca-palm-plant-xl-31798831349892.jpg?v=1675575726&width=375',
        name: 'Areca XL',
        price: 12.49
    },
];
