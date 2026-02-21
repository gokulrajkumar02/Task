import React from 'react'

import "./MainContent.css"
import IntroSection from '../IntroSection/IntroSection'
import MyService from '../MyService/MyService'
import PricePlans from '../PricePlans/PricePlans'

const MainContent = () => {
  return (
    <div className='content-portfolio'>
      <IntroSection/>
      <MyService/>
      <PricePlans/>
    </div>
  )
}

export default MainContent
