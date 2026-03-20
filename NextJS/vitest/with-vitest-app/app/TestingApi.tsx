"use client";

import { useEffect, useState } from "react";
import { fetchUser } from "./fetchUser";

const UserLoader  = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const data = await fetchUser();
        setApiData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default UserLoader ;
