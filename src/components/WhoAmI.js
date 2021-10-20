import React from 'react';
import { iconWhoAmI } from '../utils/FontAwesome';

const WhoAmI = () => {
    return (
        <div>
            <div className="title">
                <div className="icon-title">{ iconWhoAmI }</div>
                <h1>qui suis-je ?</h1>
            </div>
            <div className="text">
                <p>Autodidacte dans l’âme, l’informatique a toujours été une passion, 
                    même après 15 ans d’expérience dans ce domaine. </p>
                <p>Afin de développer mes compétences, je me suis lancé le défi, 
                    il y a deux ans, d'apprendre le développement web. </p>
            </div>
        </div>
    );
};

export default WhoAmI;