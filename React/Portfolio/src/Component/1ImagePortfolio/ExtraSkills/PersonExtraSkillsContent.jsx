import React from 'react'
import logo from "../../../assets/Icons.svg"

import "./PersonExtraSkillsContent.css"

const PersonExtraSkillsContent = (props) => {
  return (
    <div style={{width:`${props.width}px`}} className='person-extra-skills-content-container'>
        <img src={logo} alt="extraSkillsLogo" />
        <label htmlFor="">{props.title}</label>
    </div>
  )
}

export default PersonExtraSkillsContent
