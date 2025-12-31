import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
import PostCardSkeleton from './PostCardSkeleton.jsx';

function PostCard({post}) {

  if (!post) { 
    return <PostCardSkeleton />
   }

  const {$id, title,content, featuredImage} = post;

  // strip HTML tags and guard against null 
  const plainText = content ? content.replace(/<[^>]+>/g, "") : ""; 
  
  const excerpt = plainText ? plainText.split(" ").slice(0, 15).join(" ") + "..." : "";

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-[#e6c9ae] rounded-xl p-4'>
        {/* {console.log(appwriteService.getFilePreview(featuredImage))}
          <div className='w-full justify-center mb-4'>
              {featuredImage && 
                <img 
                  src={appwriteService.getFilePreview(featuredImage)} 
                  alt={title} 
                  className='rounded-xl' />
              }
          </div> */}
          <h1
          className='text-xl font-bold'
          >{title}</h1>

          <p className="mt-2 text-gray-700">
            {excerpt}
          </p>
      </div>
    </Link>
  )
}

export default PostCard