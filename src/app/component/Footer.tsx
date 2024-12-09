import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';


export default function Footer() {
  return (
    <div> 
        <footer className='mt-3 bg-black text-white flex justify-around'>
            <div className='grid grid-cols-1 md:grid-cols-3 container mx-auto gap-6 '>
                <div>
                    <h3 className='text-2xl  text-blue-500 font-bold mt-4 mb-2 ml-3'> Web Development: </h3>
                        <ul className='y-2 text-lg ml-5'>
                            <li>React J.S </li>
                            <li>Using Tailwind CSS</li>
                            <li> Next J.s</li>
                        </ul>

                </div>

                <div>
                    <h3 className='text-2xl text-blue-500 font-bold mt-4 mb-2 ml-3'> E-Commerce With: </h3>
                        <ul className='y-2 text-lg ml-5'>
                            <li>Shopping Website </li>
                            <li>Voucher Codes</li>
                            <li> Office Website</li>
                         </ul>

                </div>

                <div>
                    <h3 className='text-2xl text-blue-500 font-bold mt-4 mb-2 ml-3'> Socail Links </h3>
                        <div className='flex space-x-5 mb-4 ml-5'>
                        <Link href= "/" className=' rounded-full  bg-blue-600 text-white w-6 h-6 p-1'><FaFacebook /></Link>
                        <Link href= "/" className='rounded-full bg-blue-300 text-white w-6 h-6 p-1' ><IoLogoTwitter /></Link>
                        <Link href= "/" className='bg-pink-600 rounded-full text-white w-6 h-6 p-1 '><FaInstagramSquare /></Link>
                        <Link href= "/" className='bg-red-600 rounded-full text-white w-6 h-6 p-1 '><FaYoutube /></Link>
                        <br/>     
                        <br/>                        
                        <p className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-white text-sm">Created by Adnan Awan Roll Num 301339 GIAIC</p>
 


                        </div>

                </div>


            </div>


        </footer>
    
        
        
    </div>
  )
}
