/* eslint-disable array-callback-return */
import React, {useContext, useEffect, useState} from 'react';
import "./Main.scss"
import { ThemeContext } from "../../context";
import SubjectRow from "../subjectRow/SubjectRow";
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjects } from '../../store/subjects/actions';
import { DataStatus } from '../../common/enums';

const Main = ({modal, subjModal, student}) => {
    const commonSubjects = require("../../public/common-subjects.json");
    const [subjectList, setSubjects] = useState(commonSubjects);
    const theme = useContext(ThemeContext);
    const { subjects, status } = useSelector((state) => state);

    const dispatch = useDispatch();

    const headings = [
        "Предмет",
        "Викладачі",
        "Завдання",
        "Дедлайн",
        "Замітки",
        "Посилання на пару"
    ];

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch]);

    useEffect(() => {
        if(!modal && status === DataStatus.SUCCESS){
            let subjectList = [];
            subjects.map((subj, key) => {
                if(key >= 5){
                    student.subjects.find(item => {
                        if(item === subj.name) subjectList.push(subj);
                    });
                } else {
                    subjectList.push(subj);
                }
            });

            setSubjects(subjectList);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modal, student, status]);
    
    return (
        <main style={theme.theme} className={modal || subjModal ? "blur" : ""}>
            <>
                {headings.map((heading, key) => <div style={theme.theme.div} key={key}>{heading}</div>)}
            </>
            {subjectList.map((subject, key) => <SubjectRow subject={subject} key={key}></SubjectRow>)}
        </main>
    );
};

export default Main;