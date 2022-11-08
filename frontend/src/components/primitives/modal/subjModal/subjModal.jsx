import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext, SubjModalContext, SubjectContext, AboutContext } from '../../../../context';
import './subjModal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjects, updateSubject } from '../../../../store/subjects/actions';

const SubjModal = () => {

    const [data, setData] = useState();
    const subjModal = useContext(SubjModalContext);
    const theme = useContext(ThemeContext);
    const about = useContext(AboutContext);
    const subject = useContext(SubjectContext);
    const { subjects } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubjects());
    }, [dispatch])

    useEffect(() => {
        const currentSubject = subjects.find(item => item.name === subject.subject);

        const newData = {
            ...currentSubject,
            [about.about]: data,
        }
        
        if(data){
            dispatch(updateSubject(newData))
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const submitSubjForm = (event) => {
        event.preventDefault();
        setData(document.getElementById('data').value);   
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