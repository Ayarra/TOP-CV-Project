import React from "react";
import GeneralInformation from "./GeneralInformation";
import WorkExperience from "./WorkExperience";

export default function CVEdit(props) {
  const { generalInformation, workExperience } = props.formData;

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
    </form>
  );
}
