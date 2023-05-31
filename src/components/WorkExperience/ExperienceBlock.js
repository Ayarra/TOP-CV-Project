import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";

export default function ExperienceBlock(props) {
  const { handleChangeWorkExperience, handleDelete, id } = props;
  const {
    company,
    position,
    location,
    startingDate,
    endDate,
    responsabilities,
  } = props.experience;

  return (
    <div className="experienceBlock">
      <input
        className="formInput"
        placeholder="Company Name"
        type="text"
        name="company"
        value={company}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      <input
        className="formInput"
        placeholder="Position"
        type="text"
        name="position"
        value={position}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      <input
        className="formInput"
        placeholder="Location"
        type="text"
        name="location"
        value={location}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      {/* <DatePicker
        className="formInput"
        label={"Starting Date"}
        views={["month", "year"]}
        name="startingDate"
        value={startingDate}
        onChange={(e) => handleChangeWorkExperience(e, id, "test")}
      ></DatePicker> */}
      <input
        className="formInput"
        placeholder="Starting Date"
        type="text"
        name="startingDate"
        value={startingDate}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      <input
        className="formInput"
        placeholder="End Date"
        type="text"
        name="endDate"
        value={endDate}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      <textarea
        className="formInput formTextArea "
        placeholder="Responsabilities"
        type="text"
        name="responsabilities"
        value={responsabilities}
        onChange={(e) => handleChangeWorkExperience(e, id)}
      />
      <button className="deleteButton" onClick={(e) => handleDelete(e, id)}>
        Delete
      </button>
    </div>
  );
}
