import React from 'react';
import {ThemeContext} from "../../App";
import {useContext} from 'react';
import "./SubjectRow.css"

const SubjectRow = ( props ) => {
    const theme = useContext(ThemeContext);

    return (
        <>
            <div className="top" style={theme.theme.div}>{props.subject.name}</div>
            <div className="top" style={theme.theme.div}>{props.subject.lecturer}</div>
            <div className="top" style={theme.theme.div}>{props.subject.task}</div>
            <div className="bottom" style={theme.theme.div}>{props.subject.deadline}</div>
            <div className="bottom" style={theme.theme.div}>{props.subject.notes}</div>
            <div className="bottom" style={theme.theme.div}><a href={props.subject.link}>Посилання</a></div>
        </>
    );
};

export default SubjectRow;