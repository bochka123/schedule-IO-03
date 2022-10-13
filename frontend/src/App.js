import {Header} from "./components/header/Header";
import React, {useState} from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import {themes} from './theme/theme';
import Modal from "./components/primitives/modal/Modal";
export const ThemeContext = React.createContext(undefined);

function App() {
    function checkTheme(){
        let checkedTheme = "light";
        if(localStorage.getItem("theme") !== null){
            checkedTheme = localStorage.getItem("theme");
        }
        return checkedTheme;
    }
    function checkName(){
        let checkedName = false;
        if(localStorage.getItem("name") !== null){
            checkedName = true;
        }
        return checkedName;
    }
    const [theme, setTheme] = useState(checkTheme());
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        localStorage.setItem("theme", theme === 'light' ? 'dark' : 'light');
    }
    const [modal, setModal] = useState(!checkName());
    const [surname, setSurname] = useState(checkName() ? localStorage.getItem("name") : "Прізвище Ім'я");
    const [error, setError] = useState("");
    const [currentStudent, setCurrentStudent] = useState(checkName() ? localStorage.getItem("name") : null);

    const submitForm = (event) => {
        let exists = false; 
        event.preventDefault();
        let group = require("./public/group.json")
        
        let surname = event.target.surname.value;

        group.find(student => { 
            if(student.surname.toLowerCase() === surname.toLowerCase()){
                exists = true;
                surname = `${student.surname} ${student.name}`;
                const currentStudent = {
                    name: student.name,
                    surname: student.surname,
                    subjects: student.subjects
                };
                setCurrentStudent(currentStudent);
                
                return exists;
            }
        return exists;
    });
        if(exists) {
            setModal(false);
            setSurname(surname);
            setError("");
            localStorage.setItem("name", surname);
        }
        else {
            setError("Такого студента немає в нашій сім'ї :)");
        }
    }

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
