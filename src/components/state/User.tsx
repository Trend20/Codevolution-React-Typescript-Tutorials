import React, { useState } from "react";

type UserProps ={
  name: string
  email: string
}

const User = () =>{

  const [user, setUser] = useState<UserProps | null>(null)

  const handleLogin = () =>{
    setUser({
      name: 'enock',
      email: 'noki@gmail.com'
    })
  }
  const handleLogout = () =>{
    setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {user?.name}</div>
      <div>Email is {user?.email}</div>
    </div>
  )
}

export default User;