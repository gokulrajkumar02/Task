import React, { useEffect, useState } from 'react'

const TimeOut = () => {

    const [data,setData] = useState("")
    useEffect(() =>{

        setTimeout(()=>{
            setData("React testing")
        },2000)
    },[])

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default TimeOut
