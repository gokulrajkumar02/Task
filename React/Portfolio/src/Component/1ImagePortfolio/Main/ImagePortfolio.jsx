import React from 'react'

import "./ImagePortfolio.css"
import ImageName from '../ImageName/ImageName'
import PersonDetails from '../PersonDetails/PersonDetails'
import PersonLanguage from '../PersonLanguage/PersonLanguage'
import PersonSkills from '../PersonSkills/PersonSkills'
import PersonExtraSkills from '../ExtraSkills/PersonExtraSkills'
import PerosnDownloadCV from '../PeronDownloadCV/PersonDownloadCV'

const ImagePortfolio = () => {
  return (
    <div className="Image-portfolio" >
       {/* ggggggggd */}
       <ImageName/>
       <PersonDetails/>
       <PersonLanguage/>
       <PersonSkills/>
       <PersonExtraSkills/>
       <PerosnDownloadCV/>
    </div>
  )
}

export default ImagePortfolio
