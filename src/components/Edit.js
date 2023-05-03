import React from "react";
import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import SkillsNInterest from "./SkillsNInterests";
import WorkExperience from "./WorkExperience";

export default function Edit(props) {
  const {
    fullName,
    email,
    phoneNumber,
    city,
    state,
    workExperience,
    handleChange,
  } = props;
  return (
    <form>
      <GeneralInformation
        fullName={fullName}
        email={email}
        phoneNumber={phoneNumber}
        city={city}
        state={state}
        handleChange={handleChange}
      />
      <WorkExperience
        workExperience={workExperience}
        handleChange={handleChange}
      />
      <Education />
      <SkillsNInterest />
    </form>
  );
}
