import Button from '@/components/Button'
import Header from '@/components/Header'
import InputBox from '@/components/InputBox'
import React from 'react'

const page = () => {
    return (
        <div className="pt-10" >
            <div className="mt-4 mb-3">
                <Header title={"Contact Us"} />
            </div>

            <div className="px-4 mt-6 max-w-[1200px] lg:px-24 mb-8" >
                <InputBox placeholder={"Your Name"} type='text' />

                <div className="mt-2">
                    <InputBox placeholder={"Your Email"} type='email' />
                </div>

                <div className="mt-2">
                    <InputBox placeholder={"Your Massage"} multiple={true} type='text' />
                </div>

                <div className="mt-4 lg:flex justify-center" >
                    <Button text="Submit" />
                </div>

            </div>
        </div>
    )
}

export default page