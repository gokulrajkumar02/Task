import useWindowDimension from './useWindowDimension'
export type heightWidthType = {
  height : number,
  width : number
}

const CustomHook = () => {  

  const breakPointValue:heightWidthType[] = useWindowDimension();

  return (
    <div>
       {`Height : ${breakPointValue[0]}px, Width : ${breakPointValue[1]}px` }
    
    </div>
  )
}

export default CustomHook
