import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication = true }) => {

    const authStatus = useSelector((state)=> state.auth.status)

    const navigate = useNavigate();

    const [loader, setloader] = useState(true)


    useEffect(()=> {
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }
        else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setloader(false)
    }, [authStatus, authentication, navigate])


  return loader ? null : <>{children}</>
}

export default Protected