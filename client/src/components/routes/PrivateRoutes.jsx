import React, { useContext, useEffect } from 'react'
import {Navigate} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PrivateRoutes = ({children}) => {

    const authContext = useContext(AuthContext)
    const {auth, userAuth, loading} = authContext

    useEffect(()=> {
        userAuth()
    }, [])

    return (!auth && !loading
                ? (<Navigate to="/" />)
                : (children)
            )
}

export default PrivateRoutes
