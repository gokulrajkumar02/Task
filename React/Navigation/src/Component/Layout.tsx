// import React from 'react'

import { Outlet} from "react-router-dom"
import FixedButton from "./FixedButton"

import { UserContext } from "../App";
import { useContext } from "react";


const Layout = () => {
  const page = useContext(UserContext);

  console.log(page?.image,"page?,image")

  return (
   <>
   <p></p>
    <Outlet/>
    {page?.image && <FixedButton/>}
   </>
  )
}

export default Layout
