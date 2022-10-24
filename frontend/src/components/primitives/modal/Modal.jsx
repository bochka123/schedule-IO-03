import React, {useState, useContext} from 'react';
import "./Modal.scss";
import { ThemeContext } from "../../../App";

const Modal = ({submitHandler, error}) => {
    const [value, setValue] = useState("");
    const theme = useContext(ThemeContext);

    return (
        <div className="modal" style={theme.theme.modal}>
            <p style={theme.theme.p}>Для того, щоб <br/>продовжити, <br/>введіть своє <br/>прізвище</p>
            <form onSubmit={submitHandler}>
                <input style={theme.theme.input} id="surname" type="text" placeholder="Прізвище" value={value} onChange={event => setValue(event.target.value)}/>
                <span style={theme.theme.error}>{error}</span>
                <input style={theme.theme.input} type="submit" value="Підтвердити"/>
            </form>
        </div>
    );
};

export default Modal;