import {Header} from "./components/header/Header";
import React, { useEffect, useState } from "react";
import "./commonStyles.scss";
import Main from "./components/main/Main";
import {themes} from './theme/theme';
import Modal from "./components/primitives/modal/Modal";
import { useUser } from "./hooks/useUser";
import SubjModal from "./components/primitives/modal/subjModal/subjModal";
import { ThemeContext, ModalContext, SubjModalContext, SubjectContext, AboutContext, ErrorContext } from './context';

function App() {
    
    const [currentStudent, setCurrentStudent] = useState(localStorage.getItem("name"));
    const [exists, setExists] = useState(false);
    const [about, setAbout] = useState('');
    const [subject, setSubject] = useState('');
    
    function checkTheme(){
        let checkedTheme = "light";
        if(localStorage.getItem("theme") !== null){
            checkedTheme = localStorage.getItem("theme");
        }
        return checkedTheme;
    }

    const [theme, setTheme] = useState(checkTheme());
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
    }

    const [modal, setModal] = useState(true);
    const toggleModal = () => {
        setModal(!modal);
    }

    const [subjModal, setSubjModal] = useState(false);
    const toggleSubjModal = () => {
        setSubjModal(!subjModal);
    }

    const [surname, setSurname] = useState("Прізвище Ім'я");
    const [error, setError] = useState("");

    const setEmptyError = () => {
        setError("");
    }

    const setFullyError = () => {
        setSurname("Прізвище Ім'я");
        setError("Такої людини немає в нашій сім'ї :(");
    }

    const toggleError = {
        error: setFullyError,
        noError: setEmptyError
    }

    
    useEffect(() => {
        if(exists) {
            localStorage.setItem("name", surname.split(' ')[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exists, modal])

    useUser(setCurrentStudent, setExists, setSurname, setModal);

    const themeProvidedValue = {theme: themes[theme], toggleTheme};
    const modalProvidedValue = {modal, toggleModal};
    const subjModalProvidedValue = {subjModal, toggleSubjModal};
    const subjectProvidedValue = {subject, setSubject};
    const aboutProvidedValue = {about, setAbout};
    const errorProvidedValue = {error, toggleError};

    return (
        <ThemeContext.Provider value={themeProvidedValue}>
            <ModalContext.Provider value={modalProvidedValue}>
                <SubjModalContext.Provider value={subjModalProvidedValue}>
                    <SubjectContext.Provider value={subjectProvidedValue}>
                        <AboutContext.Provider value={aboutProvidedValue}>
                            <ErrorContext.Provider value={errorProvidedValue}>
                                <Header surname={surname} switcher={theme}/>
                                <Main modal={modal} student={currentStudent}/>
                                {modal && <Modal setExists={setExists} setSurname={setSurname} setCurrentStudent={setCurrentStudent}/>}
                                {!modal && <SubjModal/>}
                            </ErrorContext.Provider>
                        </AboutContext.Provider>
                    </SubjectContext.Provider>  
                </SubjModalContext.Provider>      
            </ModalContext.Provider>
        </ThemeContext.Provider>

    );
}

export default App;
