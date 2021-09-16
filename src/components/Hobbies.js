import React from 'react';
import { svgTelescope } from '../sass/assets/telescope';
import { 
        iconCode, 
        iconInfo, 
        iconPhoto, 
        textCode, 
        textInformatique,
        textPhoto, 
        textTelescope 
    } from '../utils/Variables';

const Hobbies = () => {
    return (
        <div className="bloc-text">
            <h1>loisirs</h1>
            <ul id="hobbies">
                <li className="text-hobbies">
                <span className="bg-icon bg-hobbies">{ svgTelescope }</span>
                        { textTelescope }
                </li>
                <li className="text-hobbies">
                <span className="bg-icon bg-hobbies">{ iconCode }</span>
                        { textCode }
                </li>
                <li className="text-hobbies">
                <span className="bg-icon bg-hobbies">{ iconPhoto }</span>
                        { textPhoto }
                </li>
                <li className="text-hobbies">
                <span className="bg-icon bg-hobbies">{ iconInfo }</span>
                        { textInformatique }
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;