import React, { useContext } from 'react';
import "./Header.css";
import Switcher from "./Switcher/Switcher";
import {ThemeContext} from "../../App";

const Header = ({formOn, surname}) => {
    const theme = useContext(ThemeContext);
    
    return (
        <header style={theme.theme}>
            <a href="https://schedule.kpi.ua/?groupId=b658eb6c-0f5f-480c-97c9-c9cde76038e3" style={theme.theme.a} className="scheduleLink">Розклад</a>
            <p style={theme.theme.p}>Домашнє завдання для ІО-03</p>
            <button style={theme.theme.a} className="person" onClick={formOn}>{surname}</button>
            <Switcher/>
        </header>
    );
};

export { Header };