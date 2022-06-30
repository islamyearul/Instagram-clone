import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {
    const { data: session } = useSession();

    const [storyUsers, setstoryUsers] = useState([ ]);
    useEffect(()=>{
        const storyUsers = minifaker.array(20,(i)=>(
            {
            username: minifaker.username({locales:"en"}).toLocaleLowerCase(), 
            img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
            id: i,
             
            }
        ))
        setstoryUsers(storyUsers);
        // console.log(storyUsers);
    }, []);
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm'>
     {session && (
      <Story image={session.user.image} username={session.user.username} isUser="true" />
     )}
      {storyUsers.map(user=>(
        <Story  key={user.id} username={user.username} image={user.img} />
      ))}
    </div>
  )
}
