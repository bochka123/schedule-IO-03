import React, { useState } from "react";
import { themes } from '../../theme/theme';
import { ThemeContext, ModalContext, SubjModalContext, SubjectContext, AboutContext, ErrorContext } from '../../context';

function Layout({ children }) {
    
    const [theme, setTheme] = useState(checkTheme());
    const [about, setAbout] = useState('');
    const [subject, setSubject] = useState('');
    const [modal, setModal] = useState(true);
    const [subjModal, setSubjModal] = useState(false);
    const [_, setSurname] = useState("Прізвище Ім'я");
    const [error, setError] = useState("");
    
    function checkTheme(){
        let checkedTheme = "light";
        if(localStorage.getItem("theme") !== null){
            checkedTheme = localStorage.getItem("theme");
        }
        return checkedTheme;
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
    }

    const changeModal = (val) => {
        setModal(val);
    }

    const changeSubjModal = (val) => {
        setSubjModal(val);
    }


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

    const themeProvidedValue = {theme: themes[theme], toggleTheme};
    const modalProvidedValue = {modal, changeModal};
    const subjModalProvidedValue = {subjModal, changeSubjModal};
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
                                {children}
                            </ErrorContext.Provider>
                        </AboutContext.Provider>
                    </SubjectContext.Provider>  
                </SubjModalContext.Provider>      
            </ModalContext.Provider>
        </ThemeContext.Provider>
    );
}

export { Layout };
