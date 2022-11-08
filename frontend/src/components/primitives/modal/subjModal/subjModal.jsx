import React, { useContext } from 'react';
import { ThemeContext, SubjModalContext, SubjectContext, AboutContext } from '../../../../context';
import './subjModal.scss';

const SubjModal = () => {

    const subjModal = useContext(SubjModalContext);
    const theme = useContext(ThemeContext);
    const about = useContext(AboutContext);
    const subject = useContext(SubjectContext);

    const submitSubjForm = (event) => {
        event.preventDefault();
        const data = document.getElementById('data').value;
        
        let subjects = require("../../../../public/common-subjects.json");

        let current = subjects.filter(subj => subj.name === subject.subject); 
        
        if(!current.length){
            subjects = require("../../../../public/common-subjects.json");
            current = subjects.filter(subj => subj.name === subject.subject); 
        }     
        current[0][about.about] = data;     
        subjModal.changeSubjModal(false);
    }

    return (
        <>{
            subjModal.subjModal &&
            <div className="subjectModal" style={theme.theme.modal}>
                <h2 style={theme.theme.p}>Введіть дані</h2>
                <form onSubmit={submitSubjForm}>
                    <textarea id="data" rows="10" cols="30" style={theme.theme.input}></textarea>
                    <input type="submit" value="Підтвердити" style={theme.theme.input}/>
                </form>
            </div>
        }
    </>

    );
};

export default SubjModal;