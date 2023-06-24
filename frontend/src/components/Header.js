import React from 'react';
import { name } from "../utils/Variables";
import AnimBgProfil from './AnimBgProfil';

const Header = () => {
    return (
        <header id="header">
            <div className="bg-header">
                <AnimBgProfil />
                <p className="name">
                    { name }
                </p>
            </div>
        </header>
    );
};

export default Header;