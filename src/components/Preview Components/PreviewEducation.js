import React from "react";
import { bulletPointStyle } from "../helpers/helper";

function PreviewEducationBlock(props) {
  const {
    university,
    major,
    degree,
    graduationYear,
    graduationMonth,
    achievements,
  } = props;

  return (
    <div className="previewBlock">
      <section className="previewBlockBol">{university}</section>
      <section className="previewBlockEnd previewBlockBold">
        {graduationMonth} - {graduationYear}
      </section>
      <section className="previewBlockItalic">
        {major} - {degree}
      </section>
      <section className="previewBlockEnd previewBlockItalic">
        {major} - {degree}
      </section>
      <section>{bulletPointStyle(achievements)}</section>
    </div>
  );
}

export default function PreviewEducation(props) {
  const previewEducation = props.education.map((education) => {
    return (
      <PreviewEducationBlock
        university={education.university}
        major={education.major}
        degree={education.degree}
        graduationYear={education.graduationYear}
        graduationMonth={education.graduationMonth}
        achievements={education.achievements}
      />
    );
  });

  return (
    <div className="previewComponent">
      <h2 className="previewBlockTitle">EDUCATION</h2>
      {previewEducation}
    </div>
  );
}
