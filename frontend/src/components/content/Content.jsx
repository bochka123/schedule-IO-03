import React, { useEffect, useState, useContext } from "react";
import Main from "../../components/main/Main";
import Modal from "../../components/primitives/modal/Modal";
import { useUser } from "../../hooks/useUser";
import SubjModal from "../../components/primitives/modal/subjModal/subjModal";
import { ModalContext, ThemeContext } from '../../context';
import { Header } from '../header/Header';

function Content() {
    const modal = useContext(ModalContext);
    const theme = useContext(ThemeContext);

    const [currentStudent, setCurrentStudent] = useState(localStorage.getItem("name"));
    const [exists, setExists] = useState(false);
    const [surname, setSurname] = useState("Прізвище Ім'я");

    
    useEffect(() => {
        if(exists) {
            localStorage.setItem("name", surname.split(' ')[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exists, modal])
    
    useUser(setCurrentStudent, setExists, setSurname, modal.changeModal);
    
    return (
        <>
            <Header surname={surname} switcher={theme.theme}/>
            <Main modal={modal.modal} student={currentStudent}/>
            {modal.modal && <Modal setExists={setExists} setSurname={setSurname} setCurrentStudent={setCurrentStudent}/>}
            {!modal.modal && <SubjModal/>}
        </>
    );
}

export { Content };
