import React from 'react'
import { PlusIcon } from '@heroicons/react/solid'

export default function Story({id, username, image, isUser}) {

    console.log(username)
  return (
    <div className='relative group cursor-pointer'>
      <img className='h-14 rounded-full p-[1.5px] border-red-500 border-2 group-hover:scale-110 transition-transform duration-200 ease-out ' src={image} alt={username} />
      {isUser && <PlusIcon className=' h-6 absolute top-4 left-4 text-white ' />}
      <p className='text-xs w-14 truncate '>{username}</p>
    </div>
  )
}
