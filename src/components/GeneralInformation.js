import React from "react";
import "../styles/GeneralInformation.css";

export default function GeneralInformation(props) {
  const { handleChange } = props;
  const { fullName, email, phoneNumber, city, state } =
    props.generalInformation;

  return (
    <fieldset className="infoField">
      <legend className="title">General Information</legend>

      <input
        className="formInput"
        placeholder="Full Name"
        type="text"
        name="fullName"
        value={fullName}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="formInput"
        placeholder="Email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="formInput"
        placeholder="Phone Number"
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="formInput"
        placeholder="City of Residence"
        type="text"
        name="city"
        value={city}
        onChange={(e) => handleChange(e)}
      />
      <input
        className="formInput"
        placeholder="State of Residence"
        type="text"
        name="state"
        value={state}
        onChange={handleChange}
      />
      
    </fieldset>
  );
}
