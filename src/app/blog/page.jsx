import BlogCard from '@/components/BlogCard'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="pt-12">
            <Header title={"BLOGS"} />
            <div className="pt-6 flex flex-wrap items-center justify-center max-w-[1200px] m-auto" >
                {itemsArray.map((e) =>
                    <BlogCard item={e} />
                )}
            </div>
        </div>
    )
}

export default page

const itemsArray = [
    {
        imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/u/w/s-d256-pagalpan-original-imagq7g2ghkwwdak.jpeg?q=100",
        date: "July 06, 2023",
        title: "Anime Fashion Revolution: Unleash Your Style with AnimeTee India's Trendsetting T-Shirts!"
    },
    {
        imageUrl: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/r/g/xxl-d256-pagalpan-original-imagq7g2efb9bzcd.jpeg?q=100",
        date: "July 06, 2023",
        title: "Express Your Anime Obsession: Discover the Hottest Anime T-Shirt Designs at AnimeTee India!"
    },
];
