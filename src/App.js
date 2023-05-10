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
  });

  console.log(formData);
  function handleMode(e) {
    e.preventDefault();
    setMode((prevState) => !prevState);
  }

  function handleChange(e, id) {
    const { name, value } = e.target;
    console.log(id);

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
        generalInformation: {
          ...prevData.generalInformation,
          [name]: value,
        },
        workExperience: [...newExperience],
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
          setFormData={setFormData}
        />
      ) : (
        <CVPreview formData={formData} />
      )}
    </div>
  );
}

export default App;
