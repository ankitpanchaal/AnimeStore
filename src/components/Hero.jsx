"use client"
import React, { useContext, useEffect } from 'react';
import Button from './Button';
import Link from 'next/link';
import client from '../../sanity';
import { imageUrl } from '../../imageUrl';
import { DataContext } from '@/lib/AppContext';
import Loading from './Loading';

const Hero = () => {
    const { updateHero, hero } = useContext(DataContext);

    useEffect(() => {
        client
            .fetch('*[_type == "banner"]')
            .then((result) => { updateHero(result[0]); updateIsLoading(false) })
            .catch((error) => console.error(error));
    }, []);


    return (
        <div className="bg-[#ffffff] lg:h-96 flex items-center justify-center">
            {!hero ? <Loading /> :
                <div className="max-w-[1200px]">
                    <div className="items-center py-6 lg:flex lg:px-20">
                        <img
                            src={imageUrl(hero.image.asset)} // Access the image URL from the 'image' field
                            alt=""
                            className="h-72 w-72 m-auto block object-contain"
                        />

                        <div className="mt-10 mx-2">
                            <div className="m-auto mb-2 w-28">
                                <Link href={"/singleProduct/hero"}>
                                    <Button text={"BUY"} />
                                </Link>
                            </div>
                            <div className="">
                                <div className="font-medium text-lg text-center">
                                    {hero.title} {/* Display the 'title' field */}
                                </div>
                                <div className="font-medium text-sm text-center lg:w-96 text-stone-400">
                                    {hero.desc} {/* Display the 'desc' field */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default Hero;
