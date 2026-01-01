import React, {useState, useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard, Container } from '../components'

function AllPosts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setLoading(true)
                setPosts(posts.documents)
                setLoading(false)
            }
        })
    }, [])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='columns-1 sm:columns-2 lg:columns-4 gap-4'>
                {loading
                  ? Array(8).fill().map((_, i) => (
                      <div key={i} className='mb-4 break-inside-avoid'>
                        <PostCard />
                      </div>
                    ))
                  : posts.map((post) => (
                      <div key={post.$id} className='mb-4 break-inside-avoid'>
                        <PostCard post={post} />
                      </div>
                    ))
                }
            </div>
        </Container>
    </div>
  )
}

export default AllPosts