import React from "react";
import {
  iconBirthday,
  iconCar,
  iconEnvelope,
  iconMobileAlt
} from "../utils/FontAwesome";
import { phone, mail, licence } from "../utils/Variables";
import AgeComponent from "./Age";

const Contact = () => {
  return (
    <div className="bloc-text adress">
      <h1>contact</h1>
      <ul>
        <li>
          <span className="bg-icon">{iconMobileAlt}</span>
          {phone}
        </li>
        <li>
          <span className="bg-icon">{iconEnvelope}</span>
          {mail}
        </li>
        <li>
          <span className="bg-icon">{iconCar}</span>
          {licence}
        </li>
        <li>
          <span className="bg-icon">{iconBirthday}</span>
          <AgeComponent />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
