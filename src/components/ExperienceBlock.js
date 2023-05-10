import React from "react";

export default function ExperienceBlock(props) {
  const { handleChange, id } = props;
  const { company, position, location, startingDate, endDate } =
    props.experience;

  return (
    <div className="experienceBlock">
      <input
        className="formInput"
        placeholder="Company Name"
        type="text"
        name="company"
        value={company}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Position"
        type="text"
        name="position"
        value={position}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Location"
        type="text"
        name="location"
        value={location}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="Starting Date"
        type="text"
        name="startingDate"
        value={startingDate}
        onChange={(e) => handleChange(e, id)}
      />
      <input
        className="formInput"
        placeholder="End Date"
        type="text"
        name="endDate"
        value={endDate}
        onChange={(e) => handleChange(e, id)}
      />
      <button className="deleteButton">Delete</button>
    </div>
  );
}
