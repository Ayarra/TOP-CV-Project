import React from "react";
import EducationBlock from "./EducationBlock";

export default function Education(props) {
  const { education, handleChange, setFormData } = props;

  let educations = education.map((education) => (
    <EducationBlock
      key={education.id}
      id={education.id}
      education={education}
      handleChange={handleChange}
      handleDeleteEducation={handleDeleteEducation}
      setFormData={setFormData}
    />
  ));

  function handleDeleteEducation(e, id) {
    e.preventDefault();
    console.log(id);
    setFormData((prevData) => {
      const updatedEducation = prevData.education.filter(
        (education) => education.id !== id
      );
      return {
        ...prevData,
        education: [...updatedEducation],
      };
    });
  }

  function handleAdd(e) {
    e.preventDefault();

    setFormData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: education.length + 1,
            university: "",
            degree: "",
            major: "",
            graduationMonth: "",
            graduationYear: "",
            achievements: "",
          },
        ],
      };
    });
  }

  return (
    <fieldset className="infoField">
      <legend className="title">Education</legend>
      {educations}
      <button className="addBlock" onClick={handleAdd}>
        Add new Education
      </button>
    </fieldset>
  );
}
