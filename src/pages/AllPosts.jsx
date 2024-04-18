import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'


const AllPosts = () => {
  const [post, setpost] = useState([])

  useEffect(()=> {
    appwriteService.getPosts([]).then((post) => {
      if(post){
        setpost(post.documents)
      }
    })
    
  }, [])

  if(post.length === 0){
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1>Login to Read the Blogs</h1>
        </div>
      </Container>
    </div>
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {post.map((post)=> (
            <div className='p-2 w-1/4 ' key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts