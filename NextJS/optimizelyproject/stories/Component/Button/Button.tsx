import "./Button.css"
const Button = (props : any) => {

    const {variant="primary",children,color,...rest} = props
   
    
    return(
        <button className={`button ${variant}`} {...rest} style={{color:`${color}`}} >
            {children}
        </button>
    )
}

export default Button
