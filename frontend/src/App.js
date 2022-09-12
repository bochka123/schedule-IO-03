import {Header} from "./components/header/Header";
import React from "react";
import "./commonStyles.css";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";

function App() {
  return (
    <div className="App">
        {/*<Modal />*/}
        <Header />
        <Main />
    </div>
  );
}

export default App;
