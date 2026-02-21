"use client"
import React from 'react'
import { useRouter } from "next/navigation";
const page = () => {
    const router = useRouter();
  return (
    <div>
      <button onClick={() => router.push("/blog/1")} className='w-10 '>1</button>
      <button onClick={() => router.push("/blog/2")} className='w-10 '>2</button>
      <button onClick={() => router.push("/blog/3")} className='w-10 '>3</button>
      <button onClick={() => router.push("/blog/4")} className='w-10 '>4</button>
      <button onClick={() => router.push("/blog/5")} className='w-10 '>5</button>
      <button onClick={() => router.push("/blog/6")} className='w-10 '>6</button>
    </div>
  )
}

export default page
 