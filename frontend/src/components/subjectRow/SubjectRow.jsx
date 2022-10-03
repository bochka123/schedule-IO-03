import React from 'react';
import {ThemeContext} from "../../App";
import {useContext} from 'react';
import "./SubjectRow.css"

const SubjectRow = ( props ) => {
    const theme = useContext(ThemeContext);

    return (
        <section>
            <div style={theme.theme.div}>{props.subject.name}</div>
            <div style={theme.theme.div}>{props.subject.lecturer}</div>
            <div style={theme.theme.div}>{props.subject.task}</div>
            <div style={theme.theme.div}>{props.subject.deadline}</div>
            <div style={theme.theme.div}>{props.subject.notes}</div>
            <div style={theme.theme.div}><a href={props.subject.link}>Посилання</a></div>
        </section>
    );
};

export default SubjectRow;