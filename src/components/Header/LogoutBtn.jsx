import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {

  const dispatch = useDispatch()

  const logoutHandler = async () => {
    try { 
      await authService.logout(); 
      dispatch(logout()); 
    } catch (error) { 
      console.error("Logout failed:", error); 
    }
  }

  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-3 text-sm font-semibold bg-[#b86b3f] text-white rounded cursor-pointer hover:bg-[#a55d36]'
    >Log out</button>
  )
}

export default LogoutBtn