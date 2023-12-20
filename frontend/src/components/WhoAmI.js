import React from "react";

import { iconWhoAmI } from "../utils/FontAwesome";

const WhoAmI = () => {
  return (
    <>
      <div className="title">
        <div className="icon-title">{iconWhoAmI}</div>
        <h1>qui suis-je ?</h1>
      </div>
      <div className="text text-whoAmI">
        <p>
          Même après 15 ans d'expérience dans ce domaine, l'informatique reste
          une passion qui résonne avec mon esprit autodidacte.{" "}
        </p>
        <p>
          Dans le but de renforcer mes compétences, j'ai pris l'initiative de me
          lancer dans l'apprentissage du développement web.{" "}
        </p>
      </div>
    </>
  );
};

export default WhoAmI;
