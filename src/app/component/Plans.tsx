"use client"
import React from 'react'
import { PiShoppingCartSimpleBold } from "react-icons/pi";


export default function Plans() {
    return (
        <div className='max-width-[1240px] mx-auto py-[100px]'>
            <div className='md:grid grid-cols-3 gap-20 pl-10 pr-10 bg-slate-100'>



                <div className='shadow-xl h-[400px] rounded-2xl '>
                    <PiShoppingCartSimpleBold size={50} className='text-fuchsia-600 ml-40 mt-16' /> <br />

                    <div className='text 3xl text-center font-bold px-10 py-6 text-rose-500 hover:scale-105 duration-500'> Web Development <br /> <br /> $149 <br /> Frontend Development: HTML, CSS, JavaScript, React, Vue.js <br /> <br />
                        Backend Development: Node.js, Python, PHP, Ruby on Rails 
                    </div>

                </div>

                <div className='shadow-xl h-[400px] rounded-2xl'>
                    <PiShoppingCartSimpleBold size={50} className='text-fuchsia-600 ml-40 mt-16' /> <br />
                    <div className='text 3xl text-center font-bold gap-20 px-10 py-6 text-rose-500 hover:scale-105 duration-500' >
                        Digital Marketing <br /> <br /> $149 <br /> Search Engine Optimization (SEO): Drive organic traffic <br /> <br />
                        Analytics & Reporting: Optimize performance with detailed insights.
                    </div>

                </div>


                <div className='shadow-xl h-[400px] rounded-2xl'>

                <PiShoppingCartSimpleBold size={50} className='text-fuchsia-600 ml-40 mt-16'/> 
                        <br /> 
                        <div className='text 3xl text-center justify-between font-bold text-rose-500  bg-slate-100 gap-20 px-10 py-6 hover:scale-105 duration-400'> E-commerce <br /><br /> $149 <br /> Digital Marketing for E-Commerce: SEO, PPC, email marketing, and social media strategies <br /> <br />
                        Analytics & Optimization: Data-driven insights to maximize ROI.</div>
                </div>

            </div>
        </div>
    )
}
