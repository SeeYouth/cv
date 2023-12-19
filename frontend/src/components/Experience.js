import React from "react";

const Experience = () => {
  return (
    <>
      <div className="bloc-text">
        <h1>expériences</h1>
      </div>
      <div className="text">
        <ul>
          <div className="subtitle">
            <div className="icon-subtitle"></div>
            <h2>
              <span>2015 - 2020</span>gérant eirl
            </h2>
          </div>
          <li>Vente & maintenance de matériel informatique</li>
          <li>Mise en place d’infrastructure réseau & du parc informatique</li>
          <li>Assistance à distance</li>
          <li>Initiation à l’outil informatique & ses logiciels</li>
        </ul>
        <ul>
          <div className="subtitle">
            <div className="icon-subtitle"></div>
            <h2>
              <span>2014 - 2015</span>chef opérateur (lgv)
            </h2>
          </div>
          <ul>
            <h3>Identification des câbles d’alimentation et de données</h3>
            <li>Création des outils de gestion</li>
            <li>Saisie & impression des identifiants</li>
          </ul>
        </ul>
        <ul>
          <div className="subtitle">
            <div className="icon-subtitle"></div>
            <h2>
              <span>2008 - 2014</span>diverses missions d'intérim
            </h2>
          </div>
          <ul>
            <li>Travaux public</li>
            <li>Métallurgie</li>
            <li>Spectacle</li>
            <li>Etc...</li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Experience;
