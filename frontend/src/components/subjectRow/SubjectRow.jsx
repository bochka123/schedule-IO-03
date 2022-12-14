import React from 'react';
import { ThemeContext, SubjModalContext, SubjectContext, AboutContext } from "../../context";
import { useContext } from 'react';
import "./SubjectRow.scss"
import { useState } from 'react';
import { useEffect } from 'react';

const SubjectRow = ( {subject} ) => {
    const theme = useContext(ThemeContext);
    const subjModal = useContext(SubjModalContext);
    const selectedSubject = useContext(SubjectContext);
    const about = useContext(AboutContext);

    const [topBorderStyle, setTopBorderStyle] = useState('');
    const [bottomBorderStyle, setBottomBorderStyle] = useState('');

    const checkSize = () => {
        if (window.innerWidth < 700) {
            setTopBorderStyle(theme.theme.rowBorderTop);
            setBottomBorderStyle(theme.theme.rowBorderBottom);
        } else {
           setTopBorderStyle('');
           setBottomBorderStyle('');
        }
    }

    const subjFormOn = (event) => {
        selectedSubject.setSubject(event.target.getAttribute('subject'));
        about.setAbout(event.target.getAttribute('about'));
        subjModal.changeSubjModal(true);
    }

    useEffect(() => {
        checkSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    window.addEventListener('resize', () => {
        checkSize();
    });

    return ( 
        <>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}}>{subject.name}</div>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}}>{subject.lecturer}</div>
            <div className="top" style={{...theme.theme.div, ...topBorderStyle}} onDoubleClick={subjFormOn} subject={subject.name} about="task">{subject.task}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}} onDoubleClick={subjFormOn} subject={subject.name} about="deadline">{subject.deadline}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}} onDoubleClick={subjFormOn} subject={subject.name} about="notes">{subject.notes}</div>
            <div className="bottom" style={{...theme.theme.div, ...bottomBorderStyle}}><a href={subject.link} style={theme.theme.a}>??????????????????</a></div>
        </>
    );
};

export default SubjectRow;