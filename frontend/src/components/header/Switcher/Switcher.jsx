import React from 'react';
import "./Switcher.css"
import {Icon} from "../../primitives/icon/component";
import {Icons} from "../../../common/enums";
const Switcher = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Icon icon={Icons.SUN} color='blue'/>
            <div className="switcher-out">
                <div className="switcher-in">

                </div>
            </div>
                <Icon icon={Icons.MOON} color='yellow' />
        </div>
    );
};

export default Switcher;