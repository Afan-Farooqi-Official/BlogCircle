import {Container, Logo, LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setMenuOpen(false)
        }
      }
    
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus,
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus,
        },
        {
            name: 'All Posts',
            slug: '/all-posts',
            active: authStatus,
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus,
        },
    ]

    return(
        <header className='sticky top-0 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md bg-[#d4a373] z-10'>
            <Container>
                <nav className='flex flex-wrap items-center'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px' />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <ul className='hidden md:flex items-center ml-auto gap-2 sm:gap-4'>
                        {navItems.map((item) => 
                        item.active ? (
                            <li key={item.name}>
                                <button onClick={() => navigate(item.slug)} 
                                className='inline-block px-6 py-3 text-sm font-semibold bg-white text-[#d4a373] rounded cursor-pointer hover:bg-[#faedcd]'
                                >{item.name}</button>
                            </li>
                        ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>

                    {/* Mobile nav */}
                    <div className="md:hidden ml-auto flex items-center gap-2">
                      {!authStatus ? (
                        <button onClick={() => navigate('/login')}
                          className="px-6 py-3 text-sm font-semibold bg-white text-[#d4a373] rounded cursor-pointer hover:bg-[#faedcd]"
                        >
                          Login
                        </button>
                      ) : (
                        <button onClick={() => setMenuOpen(!menuOpen)}
                          className="p-2 text-white cursor-pointer"
                        >
                          ☰
                        </button>
                      )}
                    </div>
                </nav>

                {menuOpen && (
                  <ul ref={dropdownRef} className="absolute top-14 right-4 bg-[#faedcd] rounded shadow-md p-4 space-y-2 md:hidden">
                    {navItems.map((item) =>
                      item.active ? (
                        <li key={item.name}>
                          <button onClick={() => navigate(item.slug)}
                            className="block w-full text-left px-2 py-1 hover:bg-[#d4a373] hover:text-white rounded"
                          >
                            {item.name}
                          </button>
                        </li>
                      ) : null
                    )}
                    {authStatus && <LogoutBtn />}
                  </ul>
                )}
            </Container>
        </header>
    )
}

export default Header