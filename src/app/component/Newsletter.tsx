import React from 'react'


export default function Newsletter() {
    return (
        <div className='w-full bg-blue-300 p-4'>
            <div className='max-w-[1240px] md:flex mx-auto justify-between '>
                
                <div className=' border-black'>
                    <h1 className='mt-10 md:text-3xl font-bold text-center text-white'>Keep in Touch</h1>
                    <p className='text-black mt-5 text-center '>Sign Up to our newsletter and stay up to date</p>
                </div>
                
                <div className=' border-black md:pr-4 py-6'>
                    <input type='text' className='p-3 mt-12 mx-1 rounded-md' placeholder="Email" />
                    <button className='bg-blue-500 text-2xl md:px-10 p-2 text-white rounded-md hover: hover:text-orange-500 hofont-bold text-center'>Get Started</button>
                    <br />
                    <p className='text-white py-3'>We can care about the Protection of your data. Please read <br/>
                    Our Policy</p>
                </div>
            </div>

        </div>
    )
}
