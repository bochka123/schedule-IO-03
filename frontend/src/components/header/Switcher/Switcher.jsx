import React from 'react';
import "./Switcher.css"
import {Icons} from "../../../common/enums";
import {IconifyIcon} from "../../primitives/icon/component";
const Switcher = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <IconifyIcon icon={Icons.SUN} color='blue'></IconifyIcon>
            <div className="switcher-out">
                <div className="switcher-in">
                </div>
            </div>
            <IconifyIcon icon={Icons.MOON} color='yellow'></IconifyIcon>
        </div>
    );
};

export default Switcher;