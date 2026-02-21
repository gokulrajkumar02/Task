"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
  const router = useRouter()
  console.log("parent");
  useEffect(() => {
    // router.push("/en")
  },[])
  

  return (
    <div>
      home page
    </div>
  )
}

export default page
