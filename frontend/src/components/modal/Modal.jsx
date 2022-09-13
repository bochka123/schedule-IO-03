import React, {useState} from 'react';
import "./Modal.css";

const Modal = ({submitHandler}) => {
    const [value, setValue] = useState("");

    return (
        <div className="modal">
            <p>Для того, щоб <br/>продовжити, <br/>введіть своє <br/>прізвище</p>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Прізвище" value={value} onChange={event => setValue(event.target.value)}/>
                <input type="submit" value="Підтвердити"/>
            </form>
        </div>
    );
};

export default Modal;