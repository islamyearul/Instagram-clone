import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts =[
        {
            id: 1,
            username: "Yearul",
            userimage: " https://islamyearul.xyz/wp-content/uploads/2022/04/Yearul-PP-2-Pic-2022.jpg",
            img: "https://images.unsplash.com/photo-1595567509863-bb5d02987bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            caption: "caption demo",


        },
        {
            id: 1,
            username: "Yearul",
            userimage: " https://islamyearul.xyz/wp-content/uploads/2022/04/Yearul-PP-2-Pic-2022.jpg",
            img: "https://images.unsplash.com/photo-1595567509863-bb5d02987bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            caption: "caption demo",


        }
    ]
  return (
    <div>
      {posts.map(post=>(
        <Post
        key={post.id}
        id={post.id}
        username={post.username}
        userimage={post.userimage}
        img={post.img}
        caption={post.caption}

        />
      ))}
    </div>
  )
}
