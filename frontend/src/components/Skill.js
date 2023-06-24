import React from "react";
import { textSkillArray } from "../utils/Variables";

const Skill = () => {
  return (
    <div className="bloc-text">
      <h1>compétences</h1>
      <ul>
        {textSkillArray.map((textSkill, index) => (
          <li>
            <ul>
              <li className="title-format">
                <span key={index.id} className="bg-icon">
                  {textSkill.icon}
                </span>
                {textSkill.title}
              </li>
              <li>
                {textSkill.list.map((textList, index) => (
                  <li key={index} className={`bar-${textList.className}`}>
                    <div className="text-bar">{textList.category}</div>
                  </li>
                ))}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
