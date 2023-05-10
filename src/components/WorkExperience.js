import React, { useState } from "react";
import ExperienceBlock from "./ExperienceBlock";

export default function WorkExperience(props) {
  const { workExperience, handleChange, setFormData } = props;

  // const [experiences, setExperiences] = useState([]);

  let experiences = workExperience.map((experience) => (
    <ExperienceBlock
      key={experience.id}
      id={experience.id}
      experience={experience}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  ));

  function handleDelete(e, id) {
    e.preventDefault();

    setFormData((prevData) => {
      const updatedExperience = prevData.workExperience.filter(
        (experience) => experience.id !== id
      );
      return {
        ...prevData,
        workExperience: [...updatedExperience],
      };
    });
  }

  function handleAdd(e) {
    e.preventDefault();

    // Add new Experience field in formData
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
      {experiences}
      <button className="addBlock" onClick={handleAdd}>
        Add new Experience
      </button>
    </fieldset>
  );
}
