import React from 'react';
import {ThemeContext} from "../../App";
import {useContext} from 'react';
import "./SubjectRow.scss"
import { useState } from 'react';
import { useEffect } from 'react';

const SubjectRow = ( subject, {subjFormOn} ) => {
    const theme = useContext(ThemeContext);

    const [topBorderStyle, setTopBorderStyle] = useState('');
    const [bottomBorderStyle, setBottomBorderStyle] = useState('');


    useEffect(() => {
        if (window.innerWidth < 700) {
            setTopBorderStyle(theme.theme.rowBorderTop);
            setBottomBorderStyle(theme.theme.rowBorderBottom);
        } else {
           setTopBorderStyle('');
           setBottomBorderStyle('');
        }
    }, [theme])

    window.addEventListener('resize', (event) => {
        if (window.innerWidth < 700) {
            setTopBorderStyle(theme.theme.rowBorderTop);
            setBottomBorderStyle(theme.theme.rowBorderBottom);
        } else {
           setTopBorderStyle('');
           setBottomBorderStyle('');
        }
    });

    return ( 
        <>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}}>{subject.subject.name}</div>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}}>{subject.subject.lecturer}</div>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}} onClick={subjFormOn}>{subject.subject.task}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}} onClick={subjFormOn}>{subject.subject.deadline}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}} onClick={subjFormOn}>{subject.subject.notes}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}}><a href={subject.subject.link} style={theme.theme.a}>Посилання</a></div>
        </>
    );
};

export default SubjectRow;