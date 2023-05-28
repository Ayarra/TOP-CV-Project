import React from "react";

export default function ExperienceBlock(props) {
  const { handleChange, handleDeleteEducation, id } = props;
  const {
    university,
    degree,
    major,
    graduationMonth,
    graduationYear,
    achievements,
  } = props.education;

  return (
    <div className="experienceBlock">
      <input
        className="formInput"
        placeholder="University Name"
        type="text"
        name="university"
        value={university}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Degree"
        type="text"
        name="degree"
        value={degree}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Major"
        type="text"
        name="major"
        value={major}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Graduation Month"
        type="text"
        name="graduationMonth"
        value={graduationMonth}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Graduation Year"
        type="text"
        name="graduationYear"
        value={graduationYear}
        onChange={(e) => handleChange(e, id)}
      />
      <textarea
        className="formInput formTextArea "
        placeholder="Achievements"
        type="text"
        name="achievements"
        value={achievements}
        onChange={(e) => handleChange(e, id)}
      />
      <button
        className="deleteButton"
        onClick={(e) => handleDeleteEducation(e, id)}
      >
        Delete
      </button>
    </div>
  );
}
