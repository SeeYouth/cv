import React from "react";

import { svgIconSkill } from "../sass/assets/iconSkill";
import { textSkillArray } from "../utils/Variables";

const Skill = () => {
  return (
    <>
      <div className="title">
        <div className="icon-title">{svgIconSkill}</div>
        <h1>compétences</h1>
      </div>
      <ul className="text">
        {textSkillArray.map((textSkill, index) => (
          <li className="text-object">
            <ul>
              <ul className="right-subtitle subtitle">
                <span key={index.id} className="bg-icon-skill">
                  {textSkill.icon}
                </span>
                {textSkill.title}
              </ul>
              <li>
                {textSkill.list.map((textList, index) => (
                  <ul key={index} className={`bar-${textList.className}`}>
                    <div className="text-bar">{textList.category}</div>
                  </ul>
                ))}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skill;
