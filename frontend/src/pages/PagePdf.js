import React from 'react';
import { NavLink } from 'react-router-dom';
import Cv from '../components/Cv'
import { iconClose } from '../utils/FontAwesome';

const PagePdf = () => {
    return (
        <div className="page-pdf">
            <NavLink to="/" >
                <p className="icon-close">
                    { iconClose }
                </p>
            </NavLink>
            <Cv />
        </div>
    );
};

export default PagePdf;