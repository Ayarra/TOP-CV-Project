import React from "react";
import Education from "./Education";
import GeneralInformation from "./GeneralInformation";
import SkillsNInterest from "./SkillsNInterests";
import WorkExperience from "./WorkExperience";

export default function Edit(props) {
  return (
    <form>
      <GeneralInformation data={props} />
      <WorkExperience data={props} />
      <Education />
      <SkillsNInterest />
    </form>
  );
}
