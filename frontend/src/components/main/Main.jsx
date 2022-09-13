import React, {useContext} from 'react';
import "./Main.css"
import {ThemeContext} from "../../App";

const Main = () => {
    const theme = useContext(ThemeContext);
    const headings = [
        "Предмет",
        "Викладачі",
        "Завдання",
        "Дедлайн",
        "Замітки",
        "Посилання на пару"
    ]
    return (
        <main style={theme.theme}>
                {headings.map((heading, key) => <div style={theme.theme.div} key={key}>{heading}</div>)}
        </main>
    );
};

export default Main;