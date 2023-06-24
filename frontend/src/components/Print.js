import React from 'react';
import { NavLink } from 'react-router-dom';
import { iconPrint } from '../utils/FontAwesome';

const Print = () => {

    return (
        <NavLink 
            to="/cv" 
            className="
                iconPrint 
                icon-bottom-bloc-right 
                footer-print
            "
        >
            { iconPrint }
            <p>Imprimer</p>
        </NavLink>
    );
};

export default Print;