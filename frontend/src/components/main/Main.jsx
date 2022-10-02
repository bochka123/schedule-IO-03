import React, {useContext} from 'react';
import "./Main.css"
import {ThemeContext} from "../../App";
import SubjectRow from "../subjectRow/SubjectRow";
import { useEffect } from 'react';
import { useState } from 'react';

const Main = ({modal, student}) => {
    const commonSubjects = require("../../public/common-subjects.json");
    const [subjects, setSubjects] = useState(commonSubjects);
    const theme = useContext(ThemeContext);
    
    const headings = [
        "Предмет",
        "Викладачі",
        "Завдання",
        "Дедлайн",
        "Замітки",
        "Посилання на пару"
    ];
    useEffect(() => {
        if(!modal){
            const chosenSubjects = require("../../public/chosen-subjects.json");
            let chosen = [];
            student.subjects.map((subj) => {
                for (const i of chosenSubjects) {
                    if(subj === i.name) chosen.push(i);
                }
            });
            setSubjects(commonSubjects.concat(chosen));
        }
    }, [commonSubjects, modal, student]);
    
    return (
        <main style={theme.theme} className={modal ? "blur" : ""}>
            <div className="mainList">
                {headings.map((heading, key) => <div style={theme.theme.div} key={key}>{heading}</div>)}
            </div>
            {subjects.map((subject) => <SubjectRow subject={subject}></SubjectRow>)}
        </main>
    );
};

export default Main;