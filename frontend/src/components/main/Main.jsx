import React, {useContext} from 'react';
import "./Main.css"
import {ThemeContext} from "../../App";
import SubjectRow from "../subjectRow/SubjectRow";

const Main = ({modal}) => {
    const theme = useContext(ThemeContext);
    const headings = [
        "Предмет",
        "Викладачі",
        "Завдання",
        "Дедлайн",
        "Замітки",
        "Посилання на пару"
    ];
    return (
        <main style={theme.theme} className={modal ? "blur" : ""}>
            <div className="mainList">
                {headings.map((heading, key) => <div style={theme.theme.div} key={key}>{heading}</div>)}
            </div>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
            <SubjectRow></SubjectRow>
        </main>
    );
};

export default Main;