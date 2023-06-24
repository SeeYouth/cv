import React from 'react';
import { iconCopyright } from '../utils/FontAwesome';
import { copyright } from '../utils/Variables';
import Print from './Print';

const Footer = () => {
    return (
        <footer>
            <Print />
            <p>
                { iconCopyright } { copyright }
            </p>
        </footer>
    );
};

export default Footer;