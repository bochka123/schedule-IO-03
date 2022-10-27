import {Header} from "./components/header/Header";
import React, { useEffect, useState } from "react";
import "./commonStyles.scss";
import Main from "./components/main/Main";
import {themes} from './theme/theme';
import Modal from "./components/primitives/modal/Modal";
import { useUser } from "./hooks/useUser";
import SubjModal from "./components/primitives/modal/subjModal/subjModal";
export const ThemeContext = React.createContext(undefined);

function App() {
    
    const [modal, setModal] = useState(true);
    const [subjModal, setSubjModal] = useState(false);
    const [surname, setSurname] = useState("Прізвище Ім'я");
    const [error, setError] = useState("");
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

    const submitForm = (event) => {
        event.preventDefault();
        let group = require("./public/group.json");
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
                setCurrentStudent(currentStudent);
            }
    });
        if(isError){
            setSurname("Прізвище Ім'я");
            setError("Такої людини немає в нашій сім'ї :(");
        } else{
            setModal(false);
            setError("");
            setSurname(surname);
        }

    }
    useEffect(() => {
        if(exists) {
            localStorage.setItem("name", surname.split(' ')[0]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [exists, modal])

    useUser(setCurrentStudent, setExists, setSurname, setModal);

    const formOn = () => {
        setModal(true);
    }

    const submitSubjForm = (event) => {
        event.preventDefault();
        const data = document.getElementById('data').value;
        
        let subjects = require("./public/common-subjects.json");

        let current = subjects.filter(subj => subj.name === subject); 
        
        if(!current.length){
            subjects = require("./public/chosen-subjects.json");
            current = subjects.filter(subj => subj.name === subject); 
        }

        current[0][about] = data;
        
        setSubjModal(false);
    }
    
    const subjFormOn = (event) => {
        setSubject(event.target.getAttribute('subject'));
        setAbout(event.target.getAttribute('about'));
        
        setSubjModal(true);
    }

    const providedValue = {theme: themes[theme], toggleTheme}

    return (
        <ThemeContext.Provider value={providedValue}>
            <Header formOn={formOn} surname={surname} switcher={theme}/>
            <Main modal={modal} student={currentStudent} subjFormOn={subjFormOn}/>
            {modal && <Modal submitHandler={submitForm} error={error}/>}
            {!modal && subjModal && <SubjModal submitSubjForm={submitSubjForm}/>}
        </ThemeContext.Provider>

    );
}

export default App;
