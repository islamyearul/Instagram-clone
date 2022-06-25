import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, HeartIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Post({id, username, userimage, img, caption} ) {
  return (
    <div className='bg-white my-7 border rounded-md '>
        {/* post header */}
        <div className=" flex items-center p-5">
            <img className='h-12 rounded-full object-cover border p-1 mr-3' src={userimage} alt={username} />
            <p className='font-bold flex-1'>{username}</p>
            <DotsHorizontalIcon className='h-5'/>
        </div>
        {/* post image */}
        <img className='object-cover w-full' src={img} alt="" />

        {/* post button */}
        <div className=" flex justify-between px-4 pt-4">
            <div className="flex space-x-4" >
                <HeartIcon className='btn ' />
                <ChatIcon className='btn' />
            </div>
            <BookmarkIcon className='btn' />
        </div>
    </div>
  )
}
