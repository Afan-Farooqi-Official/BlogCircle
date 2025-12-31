import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../store/authSlice'
import {Button, Input, Logo} from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin(userData));
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
        <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl bg-[#faedcd] rounded-xl p-6 sm:p-10 border border-black/10 shadow-lg">
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-25">
                    <Logo width="100%" />
                </span>
            </div>
            <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold leading-tight">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm sm:text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-4 sm:space-y-5'>
                    <Input
                    label='Email: '
                    placeholder='Enter your email'
                    type='email'
                    {...register('email', {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value) ||
                            'Email address must be a valid address',
                        }
                    })}
                    />
                    <Input 
                    label='Password: '
                    placeholder='Enter your password'
                    type='password'
                    {...register('password', {
                        required: true,
                    })}
                    />
                    <Button
                    type='submit'
                    className='w-full cursor-pointer mt-5 bg-[#d4a373] text-[#fefae0] font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-[#dda15e] transition-colors duration-200'
                    >
                        Sign in
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login