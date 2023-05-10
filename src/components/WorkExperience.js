import React, { useState } from "react";
import ExperienceBlock from "./ExperienceBlock";

export default function WorkExperience(props) {
  const { workExperience, handleChange, setFormData } = props;

  let experience = workExperience.map((experience) => (
    <ExperienceBlock
      key={experience.id}
      id={experience.id}
      experience={experience}
      handleChange={handleChange}
    />
  ));

  function handleClick(e) {
    e.preventDefault();

    // Add new Experience field
    setFormData((prevData) => {
      return {
        ...prevData,
        workExperience: [
          ...prevData.workExperience,
          {
            id: workExperience.length + 1,
            company: "",
            startingDate: "",
            endDate: "",
            position: "",
            location: "",
          },
        ],
      };
    });
  }

  return (
    <fieldset className="infoField">
      <legend className="title">Work Experience</legend>
      {experience}
      <button onClick={handleClick}>Add new Experience</button>
    </fieldset>
  );
}
