import React from 'react';
import "./HeaderStyles.css";
import Switcher from "./Switcher/Switcher";

const Header = () => {
    return (
        <header>
            <a href="https://schedule.kpi.ua/?groupId=b658eb6c-0f5f-480c-97c9-c9cde76038e3">Розклад</a>
            <p>Домашнє завдання для ІО-03</p>
            <p>Прізвище Ім’я</p>
            <Switcher/>
        </header>
    );
};

export { Header };