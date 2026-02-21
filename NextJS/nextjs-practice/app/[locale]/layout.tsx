import React from 'react'

const layout = async({children,params} : {
    children : React.ReactNode,
    params : {locale : "string"}
}) => {
  const {locale} = await params
  return (
          <div lang={locale}>

            {children}
          </div>
     
  )
}

export default layout
