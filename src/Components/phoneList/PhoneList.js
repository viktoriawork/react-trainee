import React from "react";
import PhoneListItem from "./phoneListItem/PhoneListItem";

const PhoneList = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <PhoneListItem phone={phone} key={phone.id} />
      ))}
    </ul>
  );
};

export default PhoneList;
