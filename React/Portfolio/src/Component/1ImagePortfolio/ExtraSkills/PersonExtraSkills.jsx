import React from "react";
import "./PersonExtraSkills.css";
import PersonExtraSkillsContent from "./PersonExtraSkillsContent";

const PersonExtraSkills = () => {
  return (
    <div>
      <div className="person-extra-skills-container">
        <h3 className="person-extra-skills-title">Extra Skills</h3>
        <PersonExtraSkillsContent width={186} title="Bootstrap, Materialize" />
        <PersonExtraSkillsContent width={157} title="Stylus, Sass, Less" />
        <PersonExtraSkillsContent width={186} title="Gulp, Webpack, Grunt" />
        <PersonExtraSkillsContent width={139} title="GIT Knowledge" />
      </div>
      <hr className="person-extra-skills-container-hr" />
    </div>
  );
};

export default PersonExtraSkills;
