import {Header} from "./components/header/Header";
import React, {useState} from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import {themes} from './theme/theme';
import Modal from "./components/primitives/modal/Modal";

export const ThemeContext = React.createContext(undefined);

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    const [modal, setModal] = useState(true);
    const [surname, setSurname] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        setModal(false);
        setSurname(document.getElementById("surname").value);
    }

    const formOn = () => {
        setModal(true);
    }

    const providedValue = {theme: themes[theme], toggleTheme}

    return (
        <ThemeContext.Provider value={providedValue}>
            <Header formOn={formOn} surname={surname}/>
            <Main/>
            {modal && <Modal submitHandler={submitForm}/>}
        </ThemeContext.Provider>

    );
}

export default App;
