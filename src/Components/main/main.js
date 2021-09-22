// import React from "react";

// const Main = () => {
//   return <h2>Main</h2>;
// };

// export default Main;


import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";

const Main = () => {
  return (
    <>
      <PhoneList phones={data.phones} />
    </>
  );
};

export default Main;

