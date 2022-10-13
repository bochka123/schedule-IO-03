import {Header} from "./components/header/Header";
import React, { useEffect, useState } from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import {themes} from './theme/theme';
import Modal from "./components/primitives/modal/Modal";
import { useUser } from "./hooks/useUser";
export const ThemeContext = React.createContext(undefined);

function App() {
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
    const [surname, setSurname] = useState("Прізвище Ім'я");
    const [error, setError] = useState("");
    const [currentStudent, setCurrentStudent] = useState(localStorage.getItem("name"));
    const [exists, setExists] = useState(false);

    const submitForm = (event) => {
        event.preventDefault();
        let group = require("./public/group.json");
        let surname = event.target.surname.value;
        let isError = true;

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
                setCurrentStudent(currentStudent);
            }
    });
        if(isError){
            setSurname("Прізвище Ім'я");
            setError("Такої людини немає в нашій сім'ї :(");
        } else{
            setModal(false);
            setError("");
        }

        setSurname(surname);
    }
    useEffect(() => {
        if(exists) {
            localStorage.setItem("name", surname.split(' ')[0]);
        }
    }, [exists, modal])
    
    useUser(setCurrentStudent, setExists, setSurname, setModal);

    const formOn = () => {
        setModal(true);
    }

    const providedValue = {theme: themes[theme], toggleTheme}

    return (
        <ThemeContext.Provider value={providedValue}>
            <Header formOn={formOn} surname={surname} switcher={theme}/>
            <Main modal={modal} student={currentStudent}/>
            {modal && <Modal submitHandler={submitForm} error={error}/>}
        </ThemeContext.Provider>

    );
}

export default App;
