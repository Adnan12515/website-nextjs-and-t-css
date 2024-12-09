'use client'
import React from 'react'
import { ReactTyped } from "react-typed";


export default function Banner() {
    return (
        <div className='bg-sky-400 w-full py-[50]'>
            <div className='mx-w-[1240] py-[100px] mx-auto text-center'>
                <div className='text-xl md:text-3xl text-red-700 font-serif md:p-[24] mb-4'>
                    E-Commerce 
                </div>

                <div className='text-white font-bold text-2xl md:text-4xl md:p-[24]'>
                    Full-Stack Web Developer
                </div>

                <div className='text-purple-700 text-2xl font-semibold md:p-[24] mt-4'>
                    Lets Join
                    <ReactTyped className='pl-3 text-2xl text-white font-bold outline-sky-800' strings={["For Customize Web + Latest Frame-Work"]}
                        typeSpeed={90} loop={true} backSpeed={100}/>
                    <br />
                </div>

            </div>

        </div>
    )
}
