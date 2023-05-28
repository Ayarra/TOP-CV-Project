import React from "react";

export default function SkillsInterests(props) {
  const { handleChange, skills, interests } = props;

  return (
    <fieldset className="infoField">
      <legend className="title">Skills And Interests</legend>
      <div className="experienceBlock">
        <textarea
          className="formInput formTextArea "
          placeholder="Skills"
          type="text"
          name="skills"
          value={skills}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          className="formInput formTextArea "
          placeholder="Interest"
          type="text"
          name="interests"
          value={interests}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </fieldset>
  );
}
