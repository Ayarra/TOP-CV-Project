import React, { useState } from "react";

function Experience() {
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

  return (
    <div>
      <label>
        Company name
        <input
          type="text"
          onChange={handleWorkChange}
          name="company"
          value={experienceData.company}
        />
      </label>
      <label>
        Starting Date{" "}
        <input
          type="text"
          onChange={handleWorkChange}
          name="startingDate"
          value={experienceData.startingDate}
        />
      </label>
      <label>
        Finish Date
        <input
          type="text"
          onChange={handleWorkChange}
          name="endDate"
          value={experienceData.endDate}
        />
      </label>
      <label>
        Position
        <input
          type="text"
          onChange={handleWorkChange}
          name="position"
          value={experienceData.position}
        />
      </label>
      <label>
        Location
        <input
          type="text"
          onChange={handleWorkChange}
          name="location"
          value={experienceData.location}
        />
      </label>
    </div>
  );
}

export default function WorkExperience(props) {
  const { workExperience } = props;
  const [experienceList, setExperience] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setExperience((prevState) => {
      return [
        ...experienceList,
        <Experience
          workExperience={workExperience}
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
