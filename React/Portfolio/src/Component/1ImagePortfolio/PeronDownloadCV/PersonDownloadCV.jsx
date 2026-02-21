import React from 'react'
import downloadCVLogo from "../../../assets/Vector.svg"

import "./PersonDownloadCV.css"

const PerosnDownloadCV = () => {
  return (
    <div className='person-downloadCV-container'>
            <label htmlFor="" className='person-downloadCV-container-label'>DOWNLOAD CV</label>
            <img src={downloadCVLogo} alt="downloadImage" className='person-downloadCV-container-image'/>
        
    </div>
  )
}

export default PerosnDownloadCV
