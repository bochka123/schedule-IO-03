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
            <div style={theme.theme.div}></div>
            <div style={theme.theme.div}>{props.subject.deadline}</div>
            <div style={theme.theme.div}></div>
            <div style={theme.theme.div}></div>
        </section>
    );
};

export default SubjectRow;