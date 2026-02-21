// import React from 'react'

import { Link } from "react-router-dom"

const Login = () => {

  return (
    <form action="">
        <label htmlFor="">Name : </label> <input type="text" />
        <br/>
        <br/>
        <Link to={"/home"}>Home</Link>
    </form>
  )
}

export default Login
