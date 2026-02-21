import React from "react";

import "./PersonLanguage.css";
import PersonLanguagePercent from "./PersonLanguagePercent";
const PersonLanguage = () => {
  return (
    <div>
      <div className="person-language-container">
        <h4 className="person-language-container-title">Language</h4>
        <PersonLanguagePercent name="Tamil" value={100} />
        <PersonLanguagePercent name="English" value={80} />
        <PersonLanguagePercent name="Bangla" value={60} />
      </div>
      <hr className="person-language-container-hr"/>
    </div>
  );
};

export default PersonLanguage;
