import React from 'react'
import loading from "../../public/loading.gif"
import Image from 'next/image'

const Loading = () => {
    return (

        <div className="justify-center " >
            <Image src={loading} alt=""
                className='w-8 h-8'
            />
        </div>
    )
}

export default Loading