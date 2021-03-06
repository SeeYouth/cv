import React from 'react';
import { iconTraining } from '../utils/FontAwesome';

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
                        <h2><span>2020 - À aujourd'hui</span>formation en autodidacte</h2>
                    </div>
                    <li>Maîtrise du langage HTML et CSS</li>
                    <li>Confirmation des connaissances en Javascript </li>
                    <li>Découverte de nouvelle technologie - REACT</li>
                </ul>
                <ul>
                    <div className="subtitle">
                        <div className="icon-subtitle"></div>
                        <h2><span>avril-octobre 2020</span>openclassrooms</h2>
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