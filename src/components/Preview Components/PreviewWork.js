import React from "react";
import { bulletPointStyle } from "../helpers/helper";

function PreviewWorkExperienceBlock(props) {
  const {
    company,
    position,
    location,
    startingDate,
    endDate,
    responsabilities,
  } = props;

  return (
    <div className="previewBlock">
      <section className="previewBlockBold">{company}</section>
      <section className="previewBlockEnd previewBlockBold">
        {startingDate} - {endDate}
      </section>
      <section className="previewBlockItalic">{position}</section>
      <section className="previewBlockEnd previewBlockItalic">
        {location}
      </section>
      <section>{bulletPointStyle(responsabilities)}</section>
    </div>
  );
}

export default function PreviewWork(props) {
  const previewWork = props.workExperience.map((work) => {
    return (
      <PreviewWorkExperienceBlock
        company={work.company}
        position={work.position}
        location={work.location}
        startingDate={work.startingDate}
        endDate={work.endDate}
        responsabilities={work.responsabilities}
      />
    );
  });

  return (
    <div className="previewComponent">
      <h2 className="previewBlockTitle">WORK EXPERIENCE</h2>
      {previewWork}
    </div>
  );
}
