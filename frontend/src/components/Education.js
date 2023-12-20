import React from "react";

const Education = () => {
  return (
    <>
      <div className="bloc-text">
        <h1>formation</h1>
      </div>
      <div className="left-text text">
        <ul>
          <div className="left-subtitle subtitle">
            <div className="icon-subtitle"></div>
            <h2>avril-octobre 2020 openclassrooms</h2>
          </div>
          <li>Développement d’une interface utilisateur</li>
          <li>Développement de base de données</li>
          <li>Développement d’API</li>
        </ul>
        <ul>
          <div className="left-subtitle subtitle">
            <div className="icon-subtitle"></div>
            <h2>2002 - 2004 cap maintenance de matériel bureautique</h2>
          </div>
          <li>Montage & configuration d’un poste informatique</li>
          <li>Réparation & maintenance d’un copieur</li>
          <li>Mise en place d’un réseau</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
