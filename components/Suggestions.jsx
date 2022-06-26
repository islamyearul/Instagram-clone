import React from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import { useState, useEffect } from 'react'

export default function Suggestions() {
    const [suggestions, setSuggestions] =useState([])
    useEffect(() => {
        const suggestion = minifaker.array(5, (i)=>({
            username: minifaker.username({locales:"en"}).toLocaleLowerCase(), 
            jobtitle: minifaker.jobTitle({locales:"en"}),
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
             
        }))
        setSuggestions(suggestion)
    }
    ,[])
  return (
    <div className='mt-4 ml-10 '>
      <div className=" flex justify-between mb-5 text-sm">
        <h3 className='font-bold text-gray-400  '>Suggestions for you </h3>
        <button className='font-semibold text-gray-600'>View all</button>
      </div>
      {suggestions.map(suggestion=>(
          <div className="m-2 flex items-center justify-between mt-3">
            <img className='h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out ' src={suggestion.img} alt={suggestion.username} />
            <div className="flex-1 ml-4">
                <h2 className='font-semibold text-sm'>{suggestion.username}</h2>
                <h2 className='font-sm text-gray-400 truncate w-[230px]'>{suggestion.jobtitle}</h2>
            </div>
            <button className='font-semibold text-blue-400 text-sm'>follow</button>

        </div>
      ))}
    </div>
  )
}
