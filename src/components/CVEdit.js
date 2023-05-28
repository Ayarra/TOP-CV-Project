import React from "react";
import Education from "./Education/Education";
import GeneralInformation from "./GeneralInformation";
import SkillsInterests from "./SkillsInterests/SkillsInterests";
import WorkExperience from "./WorkExperience/WorkExperience";

export default function CVEdit(props) {
  const { generalInformation, workExperience, education, skills, interests } =
    props.formData;

  return (
    <form className="form">
      <GeneralInformation
        generalInformation={generalInformation}
        handleChangeGeneralInformation={props.handleChangeGeneralInformation}
      />
      <WorkExperience
        workExperience={workExperience}
        handleChangeWorkExperience={props.handleChangeWorkExperience}
        setFormData={props.setFormData}
      />
      <Education
        education={education}
        handleChangeEducation={props.handleChangeEducation}
        setFormData={props.setFormData}
      />
      <SkillsInterests
        skills={skills}
        interests={interests}
        handleChange={props.handleChange}
      />
    </form>
  );
}
