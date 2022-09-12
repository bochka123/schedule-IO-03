import {Header} from "./components/header/Header";
import React, {useState} from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import { themes } from './theme/theme';

export const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const providedValue = {theme: themes[theme], toggleTheme}

    return (
        <ThemeContext.Provider value={providedValue}>
            <Header />
            <Main />
        </ThemeContext.Provider>

  );
}

export default App;
