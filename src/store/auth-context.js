import React, { useState,useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout:()=>{},
    onLogin:(email,password)=>{}
})
export const AuthContextProvider = (props)=>{
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    
  useEffect(()=>{
    const storedUserLoggedInfo = localStorage.getItem("islogged")
    if(storedUserLoggedInfo === '1'){
      setIsLoggedIn(true)
    }
  },[])


    const logoutHandler = ()=>{
        localStorage.setItem("islogged")
        setIsLoggedIn(false)
    }
    const loginHandler = ()=>{
           localStorage.setItem("islogged","1")
           setIsLoggedIn(true)
    }
    return <AuthContextProvider value={{isLoggedIn:isLoggedIn,
     onLogout: logoutHandler,
     onLogin: loginHandler
     }}>{props.children}</AuthContextProvider>
}

export default AuthContext