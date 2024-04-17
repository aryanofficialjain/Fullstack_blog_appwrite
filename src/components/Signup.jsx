import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import { Input } from './Input'
import Logo from "./Logo"
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'



const Signup = () => {
    const navigate = useNavigate()
    const [error, seterror] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

  return (
    <div>Signup</div>
  )
}

export default Signup