"use client"
import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-red-400 p-4'>
           <div className='mx-w-[1240px] mx-auto flex justify-between'>
            <div className='text-3xl font-semibold text-sky-600 pl-5'>
                My Website
            </div>
            {
                toggle ?
                <IoClose onClick={() => setToggle (!toggle)} className='text-3xl md:hidden block'/>
                :
                <IoIosMenu onClick={() => setToggle (!toggle)} className='text-3xl md:hidden block'/>

            }
        
            <ul className='hidden md:flex gap-6 text-white pr-64 font-serif font-bold'>
                <li>Home</li>
                <li>About</li>
                <li>Shopping</li>
                <li>Contact</li>
            </ul>
            {/*responsive*/}
            <ul className={` duration-300 md:hidden w-full h-screen text-white bg-black font-semibold fixed left-0 top-[67px]
            ${toggle ? 'left-[0]' : 'left-[100%]'}
            
            `}>
                <li className='p-5'> <Link href='/'>Home</Link></li>
                <li className='p-5'><Link href='/about'>About</Link></li>
                <li className='p-5'><Link href='/shpping'>Shopping</Link></li>
                <li className='p-5'><Link href='/contact'>Contact</Link></li>
            </ul>

           </div>
        </div>
    )
}

export default Header
