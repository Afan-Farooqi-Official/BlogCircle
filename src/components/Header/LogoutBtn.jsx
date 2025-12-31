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
    <button onClick={logoutHandler} className='inline-block px-6 py-2 text-[15px] font-bold cursor-pointer text-white bg-[#d4a373] rounded-sm hover:bg-[#faedcd] hover:text-black transition-colors duration-200'
    >Log out</button>
  )
}

export default LogoutBtn