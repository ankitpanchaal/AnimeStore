import React from 'react'

const BlogCard = ({ item }) => {
    return (
        <div className="w-52 m-4 zduration-300 hover:scale-105 cursor-pointer" >
            <img src={item?.imageUrl} alt=""
                className="w-[100%] h-[120px] object-contain"
            />
            <div className="flex gap-1 mt-1 items-center" >
                <img src="https://cdn-icons-png.flaticon.com/128/747/747310.png" alt=""
                    className="h-[11px] w-[11px]"
                />
                <div className="text-[10px] " >{item?.date}</div>

            </div>
            <div className="text-md mt-2 font-semibold">{item.title}</div>
        </div>
    )
}

export default BlogCard