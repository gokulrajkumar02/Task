import { Route, Routes } from "react-router-dom"
import Login from "../Main/Login"
import Home from "../Components/Home"

const LoginRouter = () => {
  return (
  
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  )
}

export default LoginRouter
