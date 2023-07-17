'use client'
import React, { useContext, useEffect } from 'react'
import CategoryCard from './CategoryCard'
// import { Cat } from './dummy'
import client from '../../sanity'
import { DataContext } from '@/lib/AppContext'
import Loading from './Loading'

export const Categories = () => {
    const { category, updateCategory } = useContext(DataContext);

    useEffect(() => {
        client
            .fetch('*[_type == "category"]')
            .then((result) => updateCategory(result)) // Get the first item from the result array
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="flex gap-4 lg:gap-10 justify-center" >
            {!category ? <Loading /> :
                category.map((e, index) => <CategoryCard item={e} key={index} />)}
        </div>
    )
}
