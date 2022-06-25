import React from 'react'

export default function Story({id, username, image}) {

    console.log(username)
  return (
    <div className='flex'>
      <img src={image} alt={username} />
      <p>{username}</p>
    </div>
  )
}
