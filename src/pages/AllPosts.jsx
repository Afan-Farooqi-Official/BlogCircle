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
            <div className='flex flex-wrap'>
                {loading
                  ? Array(8).fill().map((_, i) => (
                      <div key={i} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
                        <PostCard />
                      </div>
                    ))
                  : posts.map((post) => (
                      <div key={post.$id} className='p-2 w-full sm:w-1/2 lg:w-1/4'>
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