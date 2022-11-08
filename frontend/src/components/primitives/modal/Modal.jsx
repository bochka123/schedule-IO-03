import React, {useState, useContext} from 'react';
import "./Modal.scss";
import { ThemeContext, ModalContext, ErrorContext } from "../../../context";

const Modal = ({setExists, setSurname, setCurrentStudent}) => {

    const [value, setValue] = useState("");
    const theme = useContext(ThemeContext);
    const modal = useContext(ModalContext);
    const error = useContext(ErrorContext);

    const submitForm = (event) => {
        event.preventDefault();
        let group = require("../../../public/group.json");
        let surname = event.target.surname.value;
        let isError = true;
        // eslint-disable-next-line array-callback-return
        group.find(student => {
            if(student.surname.toLowerCase() === surname.toLowerCase()){
                setExists(true);
                isError = false;
                surname = `${student.surname} ${student.name}`;
                const currentStudent = {
                    name: student.name,
                    surname: student.surname,
                    subjects: student.subjects
                };
                setSurname(surname);
                setCurrentStudent(currentStudent);
            }
        });
        if(isError){
            error.toggleError.error();
        } else{
            modal.changeModal(false);
            error.toggleError.noError();
        }

    }

    return (
        <div className="modal" style={theme.theme.modal}>
            <p style={theme.theme.p}>Для того, щоб <br/>продовжити, <br/>введіть своє <br/>прізвище</p>
            <form onSubmit={submitForm}>
                <input style={theme.theme.input} id="surname" type="text" placeholder="Прізвище" value={value} onChange={event => setValue(event.target.value)}/>
                <span style={theme.theme.error}>{error.error}</span>
                <input style={theme.theme.input} type="submit" value="Підтвердити"/>
            </form>
        </div>
    );
};

export default Modal;