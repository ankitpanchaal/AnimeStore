"use client"
import Button from '@/components/Button'
import React, { useEffect, useState } from 'react'
import client from '../../../../sanity'
import { imageUrl } from '../../../../imageUrl'
import wa from '@/lib/wa'
import Loading from '@/components/Loading'

const product = ({ params }) => {

    const [data, setData] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleBuy = () => {
        wa(`http://localhost:3000/singleProduct/${params.product}`)
    }

    useEffect(() => {
        client
            .fetch(`*[_type == "product" && slug.current == "${params?.product}"] {
                name,
                desc,
                rating,
                price,
                image,
                slug
              }`)
            .then((result) => setData(result[0]))
            .catch((error) => console.error(error));
    }, []);

    if (!data) {
        return <div className="pt-10 lg:h-96 flex items-center justify-center">
            <Loading />
        </div>
    }

    return (
        <div className="pt-10">
            <div className="lg:flex lg:gap-20 max-w-[1200px] px-14 py-10 justify-center">
                <div className="flex gap-2 lg:flex-col">
                    {data.image.map((item, index) =>
                        <div onClick={() => setCurrentImageIndex(index)} >
                            <img src={imageUrl(item)} alt="" className="w-20 h-20 object-cover rounded-md border-2" />
                        </div>
                    )}
                </div>
                <img src={imageUrl(data?.image?.[currentImageIndex])} alt="" className="w-72 h-72 object-contain rounded-md" />
                <div className="mt-4">
                    <div className="text-sm font-semibold text-slate-900">{data?.name}</div>
                    <div className="text-[12px] text-slate-500 font-medium">{data?.Desc}</div>
                    <div className="text-md font-semibold text-[#FF676D] mt-1">
                        Price - ₹{data?.price}
                    </div>
                    <div className='justify-start mt-4'>
                        <Button text="Buy" onClick={handleBuy} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default product;
