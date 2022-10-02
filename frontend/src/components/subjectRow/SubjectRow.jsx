import React from 'react';
import "./SubjectRow.css"

const SubjectRow = ( props ) => {
    return (
        <section>
            <div>{props.subject.name}</div>
            <div>{props.subject.lecturer}</div>
            <div></div>
            <div>{props.subject.deadline}</div>
            <div></div>
            <div></div>
        </section>
    );
};

export default SubjectRow;