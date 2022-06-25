import React from 'react'
import Image from 'next/image';
import { HomeIcon, PlusCircleIcon, SearchIcon } from '@heroicons/react/outline';

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
          <div>
      {/* left */}
      <div className="flex items-center justify-between max-w-6xl mx-4 ">
        <div className='h-24 w-24 relative hidden lg:inline-grid'>
          <Image
            src="https://www.androidguys.com/wp-content/uploads/2015/04/insta.png"
            layout='fill'
            className='object-contain'
          />
        </div>
        <div className='h-24 w-10 relative lg:hidden'>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            layout='fill'
            className='object-contain'
          />
        </div>
      {/* middle */}
        <div className='relative'>
          <div className='absolute top-2 left-2'>
            <SearchIcon
            className='h-5 w-5 text-gray-500'
            />
          </div>
          <input type="text" placeholder='Search ' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
        </div>
      {/* right */}
        <div className='flex space-x-4 items-center'>     
        <HomeIcon 
         className='hidden md:inline-flex h-5 cursor-pointer hover:scale-125 transition-transform-200 duration-200 ease-out'
         />
         <PlusCircleIcon 
          className='h-5 cursor-pointer hover:scale-125 transition-transform-200 duration-200 ease-out'
           />
           <img src=" https://islamyearul.xyz/wp-content/uploads/2022/04/Yearul-PP-2-Pic-2022.jpg" alt="user image" 
           className='h-10 rounded-full'/>
        </div>
      </div>
 
    </div>
    </div>

  )
}
