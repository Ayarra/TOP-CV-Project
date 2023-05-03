import React, { useState } from "react";
import Edit from "./components/Edit";
import Preview from "./components/Preview";

function App() {
  const [mode, setMode] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    workExperice: [],
  });

  console.log(formData);
  function handleMode() {
    setMode((prevState) => !prevState);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <button onClick={handleMode}>Toggle {mode ? "Preview" : "Edit"}</button>

      {mode ? (
        <Edit formData={formData} handleChange={handleChange} />
      ) : (
        <Preview formData={formData} />
      )}
    </div>
  );
}

export default App;
