import React from "react";

import PreviewEducation from "./Preview Components/PreviewEducation";
import PreviewGeneral from "./Preview Components/PreviewGeneral";
import PreviewSkillsInterests from "./Preview Components/PreviewSkillsInterests";
import PreviewWork from "./Preview Components/PreviewWork";

export default function CVPreview(props) {
  const { generalInformation, workExperience, education, skills, interests } =
    props.formData;

  return (
    <div>
      <h1 className="previewTitle">CV Preview</h1>
      <div className="a4">
        <PreviewGeneral generalInformation={generalInformation} />

        <PreviewWork workExperience={workExperience} />
        <PreviewEducation education={education} />
        <PreviewSkillsInterests skills={skills} interests={interests} />
      </div>
    </div>
  );
}
