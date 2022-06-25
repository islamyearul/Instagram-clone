import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker'
import "minifaker/locales/en"
import Story from './Story';

export default function Stories() {
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
    <div>
      {storyUsers.map(user=>(
        <Story  key={user.id} username={user.username} image={user.img} />
      ))}
    </div>
  )
}
