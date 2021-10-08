import React from 'react';
import { iconBirthday, iconCar, iconEnvelope, iconHome, iconMobileAlt } from '../utils/FontAwesome';
import { 
    address, 
    phone, 
    mail, 
    licence, 
    dateBirthday, 
    birthday
} from '../utils/Variables';

const Contact = () => {
    return (
        <div className="bloc-text">
            <h1>contact</h1>
            <ul>
                <li>
                    <span className="bg-icon">{ iconHome }</span>
                    { address }
                </li>
                <li>
                    <span className="bg-icon">{ iconMobileAlt }</span>
                    { phone }
                </li>
                <li>
                    <span className="bg-icon">{ iconEnvelope }</span>
                    { mail }
                </li>
                <li>
                <span className="bg-icon">{ iconCar }</span>
                    { licence }
                </li>
                <li>
                <span className="bg-icon">{ iconBirthday }</span>
                    { dateBirthday } ( {birthday} )
                </li>
            </ul>
        </div>
    );
};

export default Contact;