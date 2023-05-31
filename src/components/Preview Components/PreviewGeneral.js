import React from "react";

export default function PreviewGeneral(props) {
  const { fullName, email, phoneNumber, city, state } =
    props.generalInformation;

  return (
    <div className="previewGeneral">
      <section className="fullName">{fullName}</section>
      <span>{email}</span>
      <span> |||| </span>
      <span>{phoneNumber}</span>
      <span> |||| </span>
      <span>
        {city}, {state}
      </span>
    </div>
  );
}
