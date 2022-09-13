import {Header} from "./components/header/Header";
import React, {useState} from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import { themes } from './theme/theme';
import Modal from "./components/modal/Modal";

export const ThemeContext = React.createContext(undefined);

function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    const [modal, setModal] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();
        setModal(false);
    }

    const providedValue = {theme: themes[theme], toggleTheme}

    return (
        <ThemeContext.Provider value={providedValue}>
            <Header />
            <Main />
            {modal && <Modal submitHandler={submitHandler}/>}
        </ThemeContext.Provider>

  );
}

export default App;
