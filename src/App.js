import React, { useState } from "react";
import CVEdit from "./components/CVEdit";
import CVPreview from "./components/CVPreview";
import "./styles/App.css";

function App() {
  const [mode, setMode] = useState(true);
  const [formData, setFormData] = useState({
    generalInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
    },
    workExperience: [],
    education: [],
    skills: "",
    interests: "",
  });

  console.log(formData);
  function handleMode(e) {
    e.preventDefault();
    setMode((prevState) => !prevState);
  }

  function handleChangeGeneralInformation(e) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        generalInformation: {
          ...prevData.generalInformation,
          [name]: value,
        },
      };
    });
  }

  function handleChangeWorkExperience(e, id) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newExperience = prevData.workExperience.map((experience) => {
        if (experience.id === id) {
          return { ...experience, [name]: value };
        } else {
          return experience;
        }
      });
      return {
        ...prevData,
        workExperience: [...newExperience],
      };
    });
  }

  function handleChangeEducation(e, id) {
    console.log("he");
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newEducation = prevData.education.map((education) => {
        if (education.id === id) {
          return { ...education, [name]: value };
        } else {
          return education;
        }
      });
      return {
        ...prevData,
        education: [...newEducation],
      };
    });
  }

  function handleChange(e, id) {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,

        [name]: value,
        // interests: value,
      };
    });
  }

  return (
    <div className="container">
      <button className="toggleButton" onClick={handleMode}>
        Toggle {mode ? "Preview" : "Edit"}
      </button>

      {mode ? (
        <CVEdit
          formData={formData}
          handleChange={handleChange}
          handleChangeGeneralInformation={handleChangeGeneralInformation}
          handleChangeWorkExperience={handleChangeWorkExperience}
          handleChangeEducation={handleChangeEducation}
          setFormData={setFormData}
        />
      ) : (
        <CVPreview formData={formData} />
      )}
    </div>
  );
}

export default App;
