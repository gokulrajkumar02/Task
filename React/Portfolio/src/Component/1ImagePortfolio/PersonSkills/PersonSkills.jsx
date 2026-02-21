import React from "react";
import "./PersonSkills.css";
import PersonLanguagePercent from "../PersonLanguage/PersonLanguagePercent";

const PersonSkills = () => {
  return (
    <div>
      <div className="person-skills-container">
        <h3 className="person-skills-container-title">Skills</h3>
        <PersonLanguagePercent name="Html" value={90} />
        <PersonLanguagePercent name="CSS" value={85} />
        <PersonLanguagePercent name="JS" value={80} />
        <PersonLanguagePercent name="React" value={75} />
        <PersonLanguagePercent name="PHP" value={70} />
      </div>
      <hr className="person-skills-container-hr"/>
    </div>
  );
};

export default PersonSkills;
