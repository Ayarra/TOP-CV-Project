import React from "react";

export default function GeneralInformation(props) {
  const { fullName, email, phoneNumber, city, state } = props;
  const { handleChange } = props.data;

  return (
    <div>
      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          value={fullName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input type="text" name="email"  value={email} onChange={handleChange} />
      </label>
      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        City of residence
        <input type="text" name="city" value={city} onChange={handleChange} />
      </label>
      <label>
        State
        <input type="text" name="state" value={state} onChange={handleChange} />
      </label>
    </div>
  );
}
