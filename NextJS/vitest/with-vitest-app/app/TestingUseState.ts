"use client"
import { useState } from 'react'

const TestingUseState = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () =>{
        setCount((prev) => prev + 1)
    }

    return {count, handleIncrement} 
    
}

export default TestingUseState
