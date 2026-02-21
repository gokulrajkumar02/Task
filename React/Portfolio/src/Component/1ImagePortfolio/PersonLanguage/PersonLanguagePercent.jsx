import React from 'react'

import "./PersonLanguagePercent.css"
const PersonLanguagePercent = (props) => {
  return (
    <div>

    <dl className="person-language-percent-container">
      <dt>{props.name}</dt>
      <dd>{props.value}%</dd>
    </dl>
      <div className="person-language-percent-outer">
        <div style={{width:`${props.value}%`}} className="person-language-percent-inner">

        </div>
      </div>
    </div>
  )
}

export default PersonLanguagePercent
