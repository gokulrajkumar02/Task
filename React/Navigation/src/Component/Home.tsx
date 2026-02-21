import { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
// import React from 'react'
const Home = () => {
  const page = useContext(UserContext);
 
  useEffect(() => {
    page?.setImage(false);

    return () => {
      page?.setImage(true)
    }
  }, []);
  
  return <div>
        <Link to={"/about"}>About</Link> &nbsp;
        <Link to={"/contact"}>Contact</Link>

    </div>;
};

export default Home;
