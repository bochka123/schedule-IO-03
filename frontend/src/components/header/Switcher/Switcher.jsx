import React, {useContext, useState} from 'react';
import {Icons} from "../../../common/enums";
import {IconifyIcon} from "../../primitives/icon/component";
import './Switcher.scss';
import {ThemeContext} from "../../../App";

const Switcher = () => {
    const [switched, setSwitched] = useState(false);
    const theme = useContext(ThemeContext);

    const toggleSwitcher = () => {
        setSwitched(!switched);
        theme.toggleTheme();
    }

    return (
        <div className="wrapper" style={theme.theme}>
            <IconifyIcon icon={Icons.SUN} color='#2E2E2E'></IconifyIcon>
            <div style={theme.theme.switcherOut} className="switcher-out">
                <div style={theme.theme.switcherIn} className="switcher-in" onClick={toggleSwitcher} switched-data={switched.toString()} />
            </div>
            <IconifyIcon icon={Icons.MOON} color='#D9D9D9'></IconifyIcon>
        </div>
    );
};

export default Switcher;