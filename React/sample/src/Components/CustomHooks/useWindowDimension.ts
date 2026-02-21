import { useEffect, useState } from "react"

const getDimension = () : number[]=> {
    return(

        (typeof window !=="undefined" && typeof window !== null) ? [window.innerHeight,window.innerWidth] : [0,0]
    )
}


const useWindowDimension = () => {
    const [windowDimension, setWindowDimension] = useState([])

    useEffect(()=>{
        const handleResize = ()=>{
            setWindowDimension(getDimension())
        }
        handleResize()
        window.addEventListener("resize",handleResize) 

        return () => window.removeEventListener("resize",handleResize)
    },[])

    return windowDimension

}
export default useWindowDimension