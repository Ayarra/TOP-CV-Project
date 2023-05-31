import React from "react";
import { bulletPointStyle } from "../helpers/helper";

function SkillsBlock(props) {
  return <div>{bulletPointStyle(props.skills)}</div>;
}

function InterestsBlock(props) {
  return <div>{bulletPointStyle(props.interests)}</div>;
}

export default function PreviewSkillsInterests(props) {
  return (
    <div className="previewComponent">
      <div className="previewComponent">
        <h2 className="previewBlockTitle">Skills</h2>
        <SkillsBlock skills={props.skills} />
      </div>
      <div className="previewComponent">
        <h2 className="previewBlockTitle">Interests</h2>
        <InterestsBlock interests={props.interests} />
      </div>
    </div>
  );
}
