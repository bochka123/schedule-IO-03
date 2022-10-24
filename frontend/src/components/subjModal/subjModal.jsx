import React from 'react';
import './subjModal.scss';

const SubjModal = ({submitSubjForm}) => {
    return (
        <div className="subjectModal">
            <h2>Введіть дані</h2>
            <form onSubmit={submitSubjForm}>
                <textarea></textarea>
                <input type="submit" value="Підтвердити"/>
            </form>
        </div>
    );
};

export default SubjModal;