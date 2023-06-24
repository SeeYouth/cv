import React from 'react';
import { iconInfoSupp } from '../utils/FontAwesome';

const Other = () => {
    return (
        <div className="other">
            <div className="title">
                <div className="icon-title">{ iconInfoSupp }</div>
                <h1>informations complémentaires</h1>
            </div>
            <div className="charts-group">
                <div className="charts chart-photoshop">
                    <h2>Adobe Photoshop</h2>
                </div>
                <div className="charts chart-word">
                    <h2>Microsoft Word</h2>
                </div>
                <div className="charts chart-google">
                    <h2>Google ads</h2>
                </div>
                <div className="charts chart-acrobat">
                    <h2>adobe acrobat reader</h2>
                </div>
                <div className="charts chart-excel">
                    <h2>Microsoft excel</h2>
                </div>
                <div className="charts chart-vscode">
                    <h2>visual studio code</h2>
                </div>
            </div>
        </div>
    );
};

export default Other;