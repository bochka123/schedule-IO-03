import React, {useState} from 'react';
import {Icons} from "../../../common/enums";
import {IconifyIcon} from "../../primitives/icon/component";
import './Switcher.scss';

const Switcher = () => {
    const [switched, setSwitched] = useState(false);

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <IconifyIcon icon={Icons.SUN} color='blue'></IconifyIcon>
            <div className="switcher-out">
                <div className={"switcher-in"} onClick={() => setSwitched(!switched)} switched-data={switched.toString()}></div>
            </div>
            <IconifyIcon icon={Icons.MOON} color='yellow'></IconifyIcon>
        </div>
    );
};

export default Switcher;