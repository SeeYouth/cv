import React from "react";
import moment from "moment";

const AgeComponent = () => {
  const dateBirthday = "02-08-1984";
  const birthday = moment(dateBirthday, "DD-MM-YYYY");
  const now = moment();
  let age = now.diff(birthday, "years");

  return (
    <>
      {dateBirthday} ( {age} ans )
    </>
  );
};

export default AgeComponent;
