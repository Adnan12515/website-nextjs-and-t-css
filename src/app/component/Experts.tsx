import React from 'react';
import Image from "next/image";

export default function Experts() {
  return (
    <div className="p-2 pr-2 max-w-[1240px] md: my-10 mx-auto border-black lg:md:grid grid-cols-2  ">
      <div className="md:w-[40%] mt-20 pl-16 rounded-lg ">
        <Image src={"/new1.jpg"} alt='Image' width={400} height={200} className='rounded-xl' />
      </div>

      <div className="w-[60%] mt-6 ">
        <h1 className='text-3xl text-center justify-center font-bold text-fuchsia-700'>Why Choose Us?</h1>
        <p className='md:text-2xl text-center text-cyan-500 mb-3 mt-3 '>Set goals to help Improve your performance</p>

        <ul className='list-disc font-serif text-red-700 py-3 gap-6 hover: hover:text-pink-500 pl-4 '>
          <li className='mt-2 mb-2' >Seeking expertise from your network</li>
          <li className='mt-2 mb-2'>Trying new activities</li>
          <li className='mt-2 mb-2'>Volunteering outside of work</li>
          <li className='mt-2 mb-2'>Shadowing experts</li>
        </ul>
        <button className='bg-blue-500 width-[30%] text-2xl px-20 py-2 text-white rounded-md hover: hover:text-fuchsia-800 hofont-bold text-center'>Join Us</button>
      </div>

    </div>
  );
}
