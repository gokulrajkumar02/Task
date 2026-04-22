"use client";

import { useEffect, useState } from "react";

const ContentfulPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/district");
      const districtData = await response.json();
      console.log("Data",districtData);
      
      setData(districtData);
    };

    fetchData();
  }, []);

  return <div>
    iyghbk
  </div>
};

export default ContentfulPage