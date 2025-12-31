import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Header, Footer} from './components/index'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          // no need, or combine login whenever click if not user then logout, in case of user login before and want to logout
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className="min-h-screen flex flex-col bg-[#faedcd]">
      <div className='flex-1'><Header /></div>
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
