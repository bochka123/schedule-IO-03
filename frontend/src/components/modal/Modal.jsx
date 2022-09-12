import React from 'react';
import "./Modal.css";

const Modal = () => {
    return (
        <div className="modal">
            <p>Для того, щоб <br/>продовжити, <br/>введіть своє <br/>прізвище</p>
            <input type="text" placeholder="Прізвище"/>
            <input type="button" value="Підтвердити"/>
        </div>
    );
};

export default Modal;