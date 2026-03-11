import React from 'react'

import "./Input.css"
const InputElement = (prop : {size:string,placeholder:string}) => {

    const {size="medium",placeholder="Type",...rest} = prop
  return (
   <input className={`input ${size}`} {...rest} placeholder={placeholder}/>
  )
}
export default InputElement
