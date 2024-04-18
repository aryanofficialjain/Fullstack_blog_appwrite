import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { Input } from './Input'
import Logo from "./Logo"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authservice from "../../src/appwrite/auth"
import service from '../appwrite/config'
import {login as authlogin} from "../store/authSlice"


const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {handleSubmit, register}  = useForm()
    const [error, seterror] = useState("")

    const login = async (data) => {
        seterror("")
        try {
            const session = await authservice.login(data)
            if(session){
             const userData = await authservice.getCurrenctUser()
             if(userData){
                dispatch(authlogin({userData}))
                navigate('/')
             }

            }
        } catch (error) {
            seterror(error.message)
            
        }
    }

  return (
    <div className='flex items-center justify-center'>
      <div className={`mx-auto w-full mx-w-lg bg-grey-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width='100%' />
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight '>Log In</h2>
        <p className='mt-2 text-center text-base text-black/60 '>Create account ? &nbsp
        <Link to="/Signup" className='font-medium text-primary transition-all duration-200 hover:underline'>
          Sign Up
        </Link></p>

        {error && <p className='text-red-500 mt-8 text-center '>{error}</p>}

        <form className='mt-8' onSubmit={handleSubmit(login)}>
          <div className='space-y-5'>
            <Input {...register("email", {required: true})} label="Email" placeholder="Email Address" type="email" />
            <Input {...register("password", {required: true})} label="Password" type="password" placeholder="Password" />

            <Button type='submit' className='w-full' >Log In</Button>


          </div>

        </form>
        

      </div>

    </div>
  )
}

export default Login