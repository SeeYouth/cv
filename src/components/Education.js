import React from 'react';
import { iconTraining } from '../utils/Variables';

const Education = () => {
    return (
        <div>
            <div className="title">
                <div className="icon-title">{ iconTraining }</div>
                <h1>formation</h1>
            </div>
            <div className="text">
                <ul>
                    <div className="subtitle">
                        <div className="icon-subtitle"></div>
                        <h2><span>avril-octobre 2019</span>openclassrooms</h2>
                    </div>
                    <li>Développement d’une interface utilisateur</li>
                    <li>Développement de base de données</li>
                    <li>Développement d’API</li>
                </ul>
                <ul>
                    <div className="subtitle">
                        <div className="icon-subtitle"></div>
                        <h2><span>2002 - 2004</span>cap maintenance de matériel bureautique</h2>
                    </div>
                    <li>Montage & configuration d’un poste informatique</li>
                    <li>Réparation & maintenance d’un copieur</li>
                    <li>Mise en place d’un réseau</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;