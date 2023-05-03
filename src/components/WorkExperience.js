import React, { useState } from "react";

function Experience(props) {
  const {
    company,
    startingDate,
    endDate,
    position,
    location,
    handleWorkChange,
  } = props;
  return (
    <div>
      <label>
        Company name
        <input
          type="text"
          onChange={handleWorkChange}
          name="company"
          value={company}
        />
      </label>
      <label>
        Starting Date{" "}
        <input
          type="text"
          onChange={handleWorkChange}
          name="startingDate"
          value={startingDate}
        />
      </label>
      <label>
        Finish Date
        <input
          type="text"
          onChange={handleWorkChange}
          name="endDate"
          value={endDate}
        />
      </label>
      <label>
        Position
        <input
          type="text"
          onChange={handleWorkChange}
          name="position"
          value={position}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          onChange={handleWorkChange}
          name="location"
          value={location}
        />
      </label>
    </div>
  );
}

export default function WorkExperience(props) {
  const { workExperience, handleChange } = props;
  const [experienceList, setExperience] = useState([]);
  const [experienceData, setExperienceData] = useState({
    company: "",
    startingDate: "",
    endDate: "",
    position: "",
    location: "",
  });

  console.log(experienceData);
  function handleWorkChange(e) {
    const { name, value } = e.target;
    setExperienceData((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    setExperience((prevState) => {
      return [
        ...experienceList,
        <Experience
          experienceData={experienceData}
          handleWorkChange={handleWorkChange}
          key={experienceList.length + 1}
        />,
      ];
    });
  }

  return (
    <div>
      <h1>Work Experience</h1>
      <button onClick={handleClick}>Add work experience</button>
      {experienceList}
    </div>
  );
}
