import React from "react";
import Education from "./Education/Education";
import GeneralInformation from "./GeneralInformation";
import WorkExperience from "./WorkExperience/WorkExperience";

export default function CVEdit(props) {
  const { generalInformation, workExperience, education } = props.formData;

  return (
    <form className="form">
      <GeneralInformation
        generalInformation={generalInformation}
        handleChange={props.handleChange}
      />
      <WorkExperience
        workExperience={workExperience}
        handleChange={props.handleChange}
        setFormData={props.setFormData}
      />
      <Education
        education={education}
        handleChange={props.handleChange}
        setFormData={props.setFormData}
      />
    </form>
  );
}
