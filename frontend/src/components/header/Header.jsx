import React, {useContext} from 'react';
import "./HeaderStyles.css";
import Switcher from "./Switcher/Switcher";
import {ThemeContext} from "../../App";

const Header = () => {
    const theme = useContext(ThemeContext);

    return (
        <header style={theme.theme}>
            <a href="https://schedule.kpi.ua/?groupId=b658eb6c-0f5f-480c-97c9-c9cde76038e3" style={theme.theme.a}>Розклад</a>
            <p>Домашнє завдання для ІО-03</p>
            <p>Прізвище Ім’я</p>
            <Switcher/>
        </header>
    );
};

export { Header };