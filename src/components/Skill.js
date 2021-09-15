import React from 'react';
import { 
    maintenance,
    network,
    webFrontEnd,
    webBackEnd,
    iconComputer,
    iconNetwork,
    iconFrontEnd,
    iconBackEnd,
    textSkillArray
} from '../utils/Variables';

const Skill = () => {

    return (

        <div className="bloc-text">
            <h1>compétences</h1>
            <ul>
                <li>
                    <ul>
                        <span className="bg-icon">{ iconComputer }</span>
                        { maintenance }
                        <li className="bar-textWindows">
                            <div className="width-full text-bar">
                                { textSkillArray[0] }
                            </div>
                        </li>
                        <li className="bar-textLinux">
                            <div className="width-full text-bar">
                                { textSkillArray[1] }
                            </div>
                        </li>
                        <li className="bar-textMacosx">
                            <div className="width-full text-bar">
                                { textSkillArray[2] }
                            </div>
                        </li>
                        <li className="bar-textPrinter">
                            <div className="width-full text-bar">
                                { textSkillArray[3] }
                            </div>
                        </li>
                        <li className="bar-textOpti">
                            <div className="width-full text-bar">
                                { textSkillArray[4] }
                            </div>
                        </li>
                        <li className="bar-textPreparation">
                            <div className="width-full text-bar">
                                { textSkillArray[5] }
                            </div>
                        </li>
                        <li className="bar-textRemote">
                            <div className="width-full text-bar">
                                { textSkillArray[6] }
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <span className="bg-icon">{ iconNetwork }</span>
                        { network }
                        <li className="bar-textNetwork">
                            <div className="width-full text-bar">
                                { textSkillArray[7] }
                            </div>
                        </li>
                        <li className="bar-textNas">
                            <div className="width-full text-bar">
                                { textSkillArray[8] }
                            </div>
                        </li>
                        <li className="bar-textFreenas">
                            <div className="width-full text-bar">
                                { textSkillArray[9] }
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <span className="bg-icon">{ iconFrontEnd }</span>
                        { webFrontEnd }
                        <li className="bar-textHtml">
                            <div className="width-full text-bar">
                                { textSkillArray[10] }
                            </div>
                        </li>
                        <li className="bar-textSass">
                            <div className="width-full text-bar">
                                { textSkillArray[11] }
                            </div>
                        </li>
                        <li className="bar-textJs">
                            <div className="width-full text-bar">
                                { textSkillArray[12] }
                            </div>
                        </li>
                        <li className="bar-textVue">
                            <div className="width-full text-bar">
                                { textSkillArray[13] }
                            </div>
                        </li>
                        <li className="bar-textReact">
                            <div className="width-full text-bar">
                                { textSkillArray[14] }
                            </div>
                        </li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <span className="bg-icon">{ iconBackEnd }</span>
                        { webBackEnd }
                        <li className="bar-textApi">
                            <div className="width-full text-bar">
                                { textSkillArray[15] }
                            </div>
                        </li>
                        <li className="bar-textUserData">
                            <div className="width-full text-bar">
                                { textSkillArray[16] }
                            </div>
                        </li>
                        <li className="bar-textDataBase">
                            <div className="width-full text-bar">
                                { textSkillArray[17] }
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Skill;