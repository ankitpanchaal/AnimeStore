import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="pt-12 max-w-[1200px] " >
            <Header title={"About"} />

            <img src={"https://cdn-icons-png.flaticon.com/256/10006/10006125.png"}
                className="w-96 h-40 object-contain flex m-auto mt-3"
                alt="" />

            <p className='justify-center px-3 mt-4 lg:px-32'>Welcome to AnimeTee India!
                <br />

                Discover the ultimate destination for all anime enthusiasts looking to showcase their love for their favorite series through fashionable and trendy printed anime t-shirts. At AnimeTee India, we bring you an extensive collection of high-quality, officially licensed anime-inspired apparel, designed exclusively for fans in India.</p>
        </div>
    )
}

export default page