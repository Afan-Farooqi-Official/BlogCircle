import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container } from '../components'
import { Query } from "appwrite";
import { useSelector } from "react-redux";

function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    const [recentPosts, setRecentPosts] = useState([]);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchAllPosts = async () => { 
            const res = await appwriteService.getPosts([
                Query.equal("status", "active")
            ]); 
            if (res) setPosts(res.documents); 
        }; 
        
        const fetchRecentPosts = async () => { 
            const res = await appwriteService.getPosts([ 
                Query.equal("status", "active"), 
                Query.orderDesc("$createdAt"), 
                Query.limit(3), 
            ]); 
            if (res) setRecentPosts(res.documents); 
        }; 
        
        fetchAllPosts(); 
        fetchRecentPosts();
    }, [])

    if (!authStatus) {
        return (
            <div className='w-full py-16 mt-10 text-center rounded-lg'>
                <Container>
                    <div className='flex flex-wrap justify-center'>
                        <div className='p-4 w-full'>
                            <h1 className="text-3xl font-semibold text-[#5c3d2e] hover:text-[#d4a373] transition-colors duration-200">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
        <Container>
            <div className="max-w-5xl mx-auto px-6 py-5 space-y-12">
                {/* Blog Header */}
                <header className="text-center">
                  <h1 className="text-5xl font-extrabold text-[#d4a373] tracking-tight">BlogCircle</h1>
                  <p className="text-lg text-gray-600 mt-2">Sharing ideas, one circle at a time</p>
                </header>

                {/* Featured Post */}
                <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-bold mb-2">The Rise of Remote Work</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Over the past decade, remote work has shifted from a niche arrangement to a mainstream practice.
                    Accelerated by global events and technological advancements, millions of professionals now work outside traditional office spaces.
                  </p>
                  <a href="/post/the-rise-of-remote-work" className="inline-flex items-center text-[#d4a373] mt-3 font-medium hover:text-[#5c3d2e] transition-colors duration-200">
                    Read more →
                  </a>
                </section>

                {/* Recent Posts */}
                <section>
                  <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentPosts.map((post) => (
                      <div
                        key={post.$id}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Title */}
                        <h4 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                          {post.title}
                        </h4>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Read More Link */}
                        <a
                          href={`/post/${post.$id}`}
                          className="inline-flex items-center text-[#d4a373] font-medium hover:text-[#5c3d2e] transition-colors duration-200"
                        >
                          Read more →
                        </a>
                      </div>
                    ))}

                  </div>
                </section>
                
                {/* Categories */}
                <section>
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-4">
                    {["Tech", "Lifestyle", "Travel", "Culture", "Design"].map((cat) => (
                      <button
                        key={cat}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full cursor-pointer hover:bg-[#d4a373] hover:text-white transition"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </section>
                
                {/* Call to Action */}
                <footer className="text-center mt-12">
                  <p className="text-lg font-medium text-gray-800">Subscribe to stay in the circle</p>
                  <button className="mt-4 px-6 py-2 bg-[#d4a373] text-white rounded-md cursor-pointer hover:bg-[#c18f5f] transition">
                    Join Now
                  </button>
                </footer>
                </div>
            </Container>
        </div>
    )
}

export default Home